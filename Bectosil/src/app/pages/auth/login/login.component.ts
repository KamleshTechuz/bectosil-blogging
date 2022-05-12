import { Component, Injector, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BaseComponent } from 'src/app/shared/components/base/base.component';
import { login } from 'src/app/shared/requrl';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends BaseComponent {

  constructor(injector: Injector, private fb: FormBuilder) { super(injector) }

  ngOnInit(): void {
    this.setLoginForm()
  }

  setLoginForm() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  onSubmit() {
    const data = this.form.value
    this.httpService.postData(login, data).subscribe(result => {
      this.result = result
      this.error = this.result.error
      this.message = this.result.message
      this.fireSwal(this.error, this.message)
      if (this.result.message) {
        this.setToken(this.result.token)
        this.router.navigate([this.CONSTANTS.navigateToHome])
      }

    })
    // this.setToken(this.result.token)

  }

}
