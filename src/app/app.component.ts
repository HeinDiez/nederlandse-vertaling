import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private _router: Router) { }
  title = 'nederlandse-vertaling';
  ngOnInit() {
    console.log(this._router, "check routner")
    this._router.navigate(['home'])
  }
}
