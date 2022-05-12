import { Component, Injector, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BaseComponent } from 'src/app/shared/components/base/base.component';
import { create } from 'src/app/shared/requrl';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.css']
})
export class CreateBlogComponent extends BaseComponent implements OnInit {

  constructor(private fb: FormBuilder, injector: Injector
  ) {
    super(injector)
  }



  ngOnInit(): void {
    this.setSignupForm()
  }

  setSignupForm() {
    this.form = this.fb.group({
      title: [],
      image: [],
      content: [],
      category: [],
      hashtags: [],
      view: []

    })
  }
  onSubmit() {
    const data = this.form.value
    console.log('create post : ', data);
    this.httpService.postData(create, data).subscribe(result => {
      console.log(result);
      this.result = result
      this.error = this.result.error
      this.message = this.result.message
      this.fireSwal(this.error, this.message)
      if (this.result.message) {
        this.router.navigate([this.CONSTANTS.navigateToMyBlogs])
      }

    })

  }


}
