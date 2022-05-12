import { Component, Injector, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CONSTANTS } from '../../services/constants.service';
import { HttpService } from '../../services/http.service';
import Swal from 'sweetalert2';

@Component({

  template: '',
})
export class BaseComponent {

  protected router: Router;
  public CONSTANTS = CONSTANTS;
  public httpService: HttpService;
  protected activatedRoute: ActivatedRoute;
  public form: any
  public result: any
  public error: any
  public message: any
  public blogs: any
  public user: any
  constructor(injector: Injector) {
    this.router = injector.get(Router);
    this.httpService = injector.get(HttpService);
    this.activatedRoute = injector.get(ActivatedRoute);

  }

  setToken(token: any) {
    localStorage.setItem('loggedInUser', token)
  }

  getToken() {
    const token = localStorage.getItem('loggedInUser')
    return token
  }

  fireSwal(error?: any, message?: any) {
    if (error) {
      Swal.fire({
        icon: 'error',
        title: error,
        showConfirmButton: false,
        timer: 1500
      })
    }
    if (message) {
      Swal.fire({
        icon: 'success',
        title: message,
        showConfirmButton: false,
        timer: 1500
      })
    }
  }

}
