import { Component, Injector, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BaseComponent } from 'src/app/shared/components/base/base.component';
import { getmyblogs } from 'src/app/shared/requrl';

@Component({
  selector: 'app-my-blogs',
  templateUrl: './my-blogs.component.html',
  styleUrls: ['./my-blogs.component.css']
})
export class MyBlogsComponent extends BaseComponent implements OnInit {

  filter: any
  constructor(injector: Injector, private fb: FormBuilder) { super(injector) }

  ngOnInit(): void {
    this.getMyPosts()
  }


  getMyPosts(e?: any) {
    if (e) {
      this.filter = { filter: e.target.value }
    } else {
      this.filter = { filter: 'all' }

    }

    this.httpService.getData(getmyblogs, this.filter).subscribe(result => {
      this.result = result
      this.error = this.result.error
      this.message = this.result.message
      this.blogs = this.result.blogs
      this.user = this.result.user
      console.log(this.blogs);

    })

  }

}
