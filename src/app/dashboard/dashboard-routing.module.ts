import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { homedir } from 'os';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { UserDetailsComponent } from './user-details/user-details.component';

const routes: Routes = [

  {
    path:'',
    component:LayoutComponent,
    children:[
      {
        path:'',
        component:HomeComponent
      },
     {
        path:'userDetails/:id',
        component:UserDetailsComponent
      } 
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
