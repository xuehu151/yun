import { Component, OnInit } from '@angular/core';
import { FormPage } from '../../../domain';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../../ngrx/reducers';
import * as actions from '../../../ngrx/actions';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
})
export class LoginComponent implements OnInit, FormPage {

  form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private store$: Store<fromRoot.State>
  ) { }

  ngOnInit() {
    this.initValidate();
  }

  initValidate() {
    this.form = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });
  }

  onSubmit({ valid, value }) {
    if (!valid) {
      return;
    }
    this.store$.dispatch(new actions.Actions.auth.LoginAction(value));
  }
}
