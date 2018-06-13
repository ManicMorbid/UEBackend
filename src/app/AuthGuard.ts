import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { StorageService } from './services/storage.service';


@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private router: Router,
        private storage: StorageService
    ) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        let token = this.storage.getToken();
        if (token) {
            if (this.storage.isExpiredToken()) {
                this.router.navigate(['/login']);
                return false;
            }
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    }


}
