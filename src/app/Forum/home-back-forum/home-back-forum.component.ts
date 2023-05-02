import { Component, OnInit } from '@angular/core';
import {ConsumerForumService} from "../../Service/ForumServ/consumer-forum.service";
import {UserService} from "../../Service/UserServices/user.service";
import {Router} from "@angular/router";
import jwt_decode from "jwt-decode";
import {Post} from "../../Model/Forum/Post";
import {Comment} from "../../Model/Forum/Comment";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-home-back-forum',
  templateUrl: './home-back-forum.component.html',
  styles: [
  ]
})
export class HomeBackForumComponent implements OnInit {
  listePost!:Post[];
  pagePost:number=1;
  post!:Post;
  message:string="";

  constructor(private consumerForumService:ConsumerForumService,private userService:UserService,public router: Router,private toastr:ToastrService) { }

  ngOnInit(): void {

    this.consumerForumService.getPost().subscribe({next:(data:any)=> {
        this.listePost = data,
          console.log(data)
        console.log(this.listePost)
        this.post = new Post()


      }
    });
  }
  delete(id:number){
    this.consumerForumService.DeletePost(id).subscribe((response) => {
      this.message = "Post is Deleted"
      alert(this.message)
      window.location.reload()
    });
  }
  ChangedArchived(id:number){
    this.consumerForumService.ChangedArchived(id).subscribe((response) => {
      this.message = "Post Status changed"
      this.toastr.info(this.message, 'Report');
      // window.location.reload()
  });}
  ChangedStatus(id:number){
    this.consumerForumService.ChangedStatus(id).subscribe((response) => {
      this.message = "User Status changed"
      alert(this.message)
      window.location.reload()
    });}

}
