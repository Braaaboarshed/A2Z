import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  userInfo:any
  constructor(private route:ActivatedRoute,private http :HttpClient) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(res=>{
      this.getSingleUser(res.get('id'))

    })
  }

  getSingleUser(id:any){
    this.http.get('https://dummyjson.com/users/'+id).subscribe(res=>{
      this.userInfo = res
      console.log(this.userInfo)
    })
  }

}
