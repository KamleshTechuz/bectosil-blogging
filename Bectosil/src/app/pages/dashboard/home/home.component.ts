import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/shared/components/base/base.component';
import { getblogs } from 'src/app/shared/requrl';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent extends BaseComponent implements OnInit {

  constructor(injector: Injector) { super(injector) }

  ngOnInit(): void {
    this.getBlogs()
  }

  getBlogs() {
    this.httpService.getData(getblogs).subscribe(result => {
      console.log(result);
    })
  }

}
