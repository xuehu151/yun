import { Component, OnInit, OnDestroy } from '@angular/core';
import * as fromRoot from '../../../ngrx/reducers/index';
import * as actions from '../../../ngrx/actions/index';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/observable';
import { OverView } from '../../../domain';
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.less']
})
export class OverviewComponent implements OnInit, OnDestroy {

  chartOptions: any[];
  overview$: Observable<OverView[]>;
  sub$: Subscription;
  constructor(
    private store$: Store<fromRoot.State>,
  ) {
    this.store$.dispatch(new actions.Actions.overview.LoadOverViewAction(null));
    // this.store$.dispatch(new actions.Actions.instance.LoadInstanceAction(null));
  }

  ngOnInit() {
    this.overview$ = this.store$.select(fromRoot.getOverviews);
    this.sub$ = this.overview$.subscribe(res => {
      this.initChartData(res);
    });
  }

  initChartData(overviews: OverView[]) {
    this.chartOptions = [];
    overviews.forEach(overview => {
      this.chartOptions.push({
        title: {
          text: overview.name,
          subtext: `使用 ${overview.use}${overview.unit} （共 ${overview.total}${overview.unit} ）`,
          x: 'center',
          bottom: 10,
          itemGap: 10,
          textStyle: {
            fontSize: 14,
            lineHeight: 20,
          },
          subtextStyle: {
            fontSize: 14,
            lineHeight: 20,
          }
        },
        tooltip: null,
        legend: null,
        series: [
          {
            type: 'pie',
            radius: '55%',
            center: ['50%', '40%'],
            label: null,
            data: [overview.use, overview.total - overview.use],
            color: ['#538BC5', '#DDDDDD'],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      });
    });
  }

  ngOnDestroy() {
    if (this.sub$) {
      this.sub$.unsubscribe();
      this.sub$ = null;
    }
  }

}
