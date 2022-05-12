import { Component, Injector, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BaseComponent } from 'src/app/shared/components/base/base.component';
import { signup } from 'src/app/shared/requrl';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent extends BaseComponent implements OnInit {

  constructor(injector: Injector, private fb: FormBuilder) { super(injector) }

  ngOnInit(): void {
    this.setSignupForm()
  }

  setSignupForm() {
    this.form = this.fb.group({
      firstname: [], lastname: [], email: [], password: [], confirmPass: []
    })
  }

  onSubmit() {
    const data = this.form.value
    console.log(data);
    this.httpService.postData(signup, data).subscribe(result => {
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
