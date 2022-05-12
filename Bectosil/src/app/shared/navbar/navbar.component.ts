import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from '../components/base/base.component';
import { logout } from '../requrl';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent extends BaseComponent implements OnInit {

  constructor(injector: Injector) { super(injector) }

  ngOnInit(): void {
  }

  logout() {
    this.httpService.getData(logout).subscribe(result => {
      this.result = result
      this.error = this.result.error
      this.message = this.result.message
      this.fireSwal(this.error, this.message)
      if (this.result.message) {
        localStorage.clear()
        this.router.navigate([this.CONSTANTS.navigateToLogin])
      }

    })

  }

}
