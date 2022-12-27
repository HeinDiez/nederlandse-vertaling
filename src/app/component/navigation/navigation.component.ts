import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  mobile=true;
  //add use profile component.
  navigationList = [
    {name: 'Home'},
    {name: 'Support'},
  ]
}
