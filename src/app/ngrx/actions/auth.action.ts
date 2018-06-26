import { User } from './../../domain/user';
import { Err } from './../../domain/error';
import { Auth } from './../../domain/auth';
import { Action } from '@ngrx/store';
import { type } from '../../utils';

export const ActionTypes = {
  LOGIN: type('[Auth] Login'),
  LOGIN_SUCCESS: type('[Auth] Login Success'),
  LOGIN_FAIL: type('[Auth] Login Fail'),
  REGISTER: type('[Auth] Register'),
  REGISTER_SUCCESS: type('[Auth] Register Success'),
  REGISTER_FAIL: type('[Auth] Register Fail'),
  LOGOUT: type('[Auth] Logout')
};
export class LoginAction implements Action {
  readonly type = ActionTypes.LOGIN;
  constructor(public payload: { username: string, password: string }) {
  }
}

export class LoginSuccessAction implements Action {
  readonly type = ActionTypes.LOGIN_SUCCESS;

  constructor(public payload: Auth) {
  }
}

export class LoginFailAction implements Action {
  readonly type = ActionTypes.LOGIN_FAIL;

  constructor(public payload: Err) {
  }
}

export class RegisterAction implements Action {
  readonly type = ActionTypes.REGISTER;

  constructor(public payload: User) {
  }
}

export class RegisterSuccessAction implements Action {
  readonly type = ActionTypes.REGISTER_SUCCESS;

  constructor(public payload: Auth) {
  }
}

export class RegisterFailAction implements Action {
  readonly type = ActionTypes.REGISTER_FAIL;

  constructor(public payload: Err) {
  }
}

export class LogoutAction implements Action {
  readonly type = ActionTypes.LOGOUT;

  constructor(public payload: Auth) {
  }
}

export type Actions
  = LoginAction
  | LoginSuccessAction
  | LoginFailAction
  | RegisterAction
  | RegisterSuccessAction
  | RegisterFailAction
  | LogoutAction;
