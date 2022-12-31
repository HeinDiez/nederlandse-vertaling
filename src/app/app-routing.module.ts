import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './page/about/about.component';
import { HomepageComponent } from './page/homepage/homepage.component';

const routes: Routes = [
  {path: "home", component: HomepageComponent},
  {path: "about", component: AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
