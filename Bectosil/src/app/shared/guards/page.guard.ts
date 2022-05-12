import { Injectable, Injector } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { BaseComponent } from '../components/base/base.component';

@Injectable({
  providedIn: 'root'
})
export class PageGuard extends BaseComponent implements CanActivate {

  constructor(injector: Injector) { super(injector) }

  canActivate() {
    const token = this.getToken()
    if (!token) {
      this.router.navigate([this.CONSTANTS.navigateToLogin])
    }
    return true;
  }

}
