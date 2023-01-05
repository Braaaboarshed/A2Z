import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { fromEvent, map, Observable, take } from 'rxjs';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
posts:any
userId !:number
loader=false
user!:Object
id:any
like =1
searchQuery!:string
show =false
postId !:number
comments:any
users:any
postNumber!:number
firstClick =false
panelOpenState = false;
CommentForm !:FormGroup
comment!:string
  constructor(
    private service : HomeService,
    private http :HttpClient,
  ) { }

  ngOnInit(): void {
    this.getAllPosts()
  }

  getAllPosts(){
this.http.get('https://dummyjson.com/posts')

.subscribe(res=>{
  this.loader = true
  this.posts =res
})

  }

  getUserPosts(id:any){
    this.http.get<any>('https://dummyjson.com/users/'+id)
    .subscribe(res=>{
this.users = res    
      }
    )

 
  }

getUserID(id:any){
console.log()
}
addComment(id :any,postId:number){
  this.userId=id
  this.postNumber=postId
  this.show =true
  this.http.get('https://dummyjson.com/posts/'+id+'/comments').subscribe(res=>{
    this.comments = res
    this.postId =id
    console.log(res)

})
if(this.firstClick)
this.firstClick =false
else{
  this.firstClick=true
  this.comment =''
}
}
addNewPost(){
  
}

createComment(comment:string){
console.log(comment,this.userId,this.postNumber)
let model={
  body:comment,
  userId:this.userId,
  postId:this.postNumber,
  }
  this.http.post('https://dummyjson.com/comments/add',model).subscribe(res=>{
    console.log(res)
  })
 
}
search(searchQuery :string){
  this.http.get('https://dummyjson.com/posts/search?q='+searchQuery).subscribe(res=>{
    this.loader = true
    if(searchQuery !=='')
    this.posts =res
    else
    this.getAllPosts()
  })

}


}