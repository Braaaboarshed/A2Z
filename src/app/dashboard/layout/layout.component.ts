import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor() { }
  username: any
  isLogged !:boolean
  ngOnInit(): void {
   this.username= localStorage.getItem('username')
   this.userStatus()
   
  }
 
  userStatus(){
    if(localStorage.getItem('token')){
     this.isLogged=true 
    }
    else{
      this.isLogged =false
    }
    console.log(this.isLogged)
  }

  logout(){
    localStorage.clear()
  }
  

}
