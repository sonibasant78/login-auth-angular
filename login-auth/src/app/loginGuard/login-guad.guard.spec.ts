import { TestBed } from '@angular/core/testing';

import { LoginGuadGuard } from './login-guad.guard';

describe('LoginGuadGuard', () => {
  let guard: LoginGuadGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoginGuadGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
