// import { CanActivateFn } from '@angular/router';

// export const authGuard: CanActivateFn = (route, state) => {
//   return true;
// };


import { CanActivateFn, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { inject } from '@angular/core';
import { Router } from 'express';
import { AuthService } from '../services/auth-service.service';


export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const router: Router = inject(Router);

  if (inject(AuthService).isLoggedIn()) {
    return true;
  }
  router.route(['login']);
  return false;
}