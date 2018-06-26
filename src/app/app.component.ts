import {Observable} from 'rxjs/Observable';
import {Component, OnInit} from '@angular/core';
import {Auth} from './domain';
import * as fromRoot from './ngrx/reducers/index';
import * as actions from './ngrx/actions/auth.action';
import {Store} from '@ngrx/store';
import {TranslateService} from '@ngx-translate/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less']
})
export class AppComponent {
    title = 'app';
    isCollapsed = false;
    isReverseArrow = false;
    width = 200;
    public selectedValue = 'zh';
    public testTxt;
    public auth$: Observable<Auth>;

    constructor(private store$: Store<fromRoot.State>,
                public translateService: TranslateService) {
        this.auth$ = this.store$.select(fromRoot.getAuth);
        this.translateService.addLangs(["zh", "en"]);
        this.translateService.setDefaultLang("zh");
        const browserLang = this.translateService.getBrowserLang();
        this.translateService.use(browserLang.match(/zh|en/) ? browserLang : 'zh');
        this.translateService.get('hello').subscribe(res => {
            console.info('+++++++++',res);
            this.testTxt = res;
        });
    }

    changeLang(lang) {
        console.info('lang',lang);
        this.translateService.use(lang)

    }

}
