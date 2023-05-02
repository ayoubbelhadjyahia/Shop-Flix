import { Component, OnInit } from '@angular/core';
import {ConsumerForumService} from "../../Service/ForumServ/consumer-forum.service";
import {Post} from "../../Model/Forum/Post";
import {Router} from "@angular/router";

import jwt_decode from "jwt-decode";
import {UserService} from "../../Service/UserServices/user.service";
import {Comment} from "../../Model/Forum/Comment";
import {PostLike} from "../../Model/Forum/PostLike";
import {Observable} from "rxjs";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-home-forum',
  templateUrl: './home-forum.component.html',
  styles: [
  ]
})
export class HomeForumComponent implements OnInit {
  pagePost:number=1;
  dateNow: Date = new Date();
  post!:Post
  image!:File;
  listePost!:Post[];
  id!:number ;
  fileToUpload!: File ;
  imagenMin!: File;
  comment!:Comment
  postLike!:PostLike;
  message:string="";
  BestPost!:Post;
  constructor(private consumerForumService:ConsumerForumService,private userService:UserService,public router: Router,private toastr:ToastrService) { }
 ngOnInit(): void {
   const token = localStorage.getItem('token');
   if (token) {
     const decodedToken : any = jwt_decode(token);
// this.userservice.getUserUsername(decodedToken.sub).subscribe(data => {
//   console.log(data)
// })
   console.log(decodedToken.sub)
   }
    this.consumerForumService.getPost().subscribe({next:(data)=> {
        this.listePost = data,
          console.log(data)
        console.log(this.listePost)
        this.post = new Post()


      }
    });
   this.consumerForumService.BestPost().subscribe({next:(data)=>{

       this.BestPost=data;
   }})


   this.comment=new Comment()
   this.postLike=new PostLike()
  }
    delete(id:number){
      this.consumerForumService.DeletePost(id).subscribe((response) => {
        this.message = "Post is Deleted"
        alert(this.message)
        window.location.reload()
      });
    }
    getDateOnly(dateString: Date): string {

      let dateNow1=this.dateNow
      let datePost = dateString;
      return datePost.toString().replace("-","/").replace("-","/").replace("T"," ").slice(0, 16);
    }
    idadded : any
  msg : string =""
  divv : boolean = true


    add(){
      this.consumerForumService.AddPost(this.post).subscribe((data) => {
          console.log("psot ajouet", data)
          if (data) {
            this.idadded = data.idPost
            console.log("id de l'ajout" + this.idadded)
          }
        },
        err => {
        this.divv = false
this.msg = err.error.text;
console.log(err.error.text)
        }
      );



    }
  onFileSelcted(event: any){
    this.fileToUpload = event.target.files[0];
    const fr = new FileReader();
    fr.onload = (evento: any) => {
      this.imagenMin = evento.target.result;
    };
  }
  PostLike(react:string,id:number){
    this.postLike.React=react;
    console.log(this.postLike)
    this.consumerForumService.PostLike(react,id).subscribe((response:any) => {
      this.message = response.message;
      alert(this.message)
      window.location.reload()
    });

  }
  PostToUp : Post= new Post()
  getPostToUpdate(p : any){
    this.PostToUp  = p
    console.log(this.PostToUp)
  }
  UpdatePost(){
    this.consumerForumService.UpdatePost(this.PostToUp).subscribe(data =>{window.location.reload()})
  }
  getById(i:number){
    this.consumerForumService.getPostById(i).subscribe({next:()=>this.post});
    console.log(this.post);
  }
  addImage(id : any){
    this.consumerForumService.addImagePost(id , this.fileToUpload).subscribe(data =>{window.location.reload()})
}
addComment(id:number){
    const a:string=this.comment.text.toString();
  this.consumerForumService.addComment(a,id).subscribe({next:()=>window.location.reload()});
}
reportPost(id:number) {
  return this.consumerForumService.Report(id).subscribe((response) => {
    this.toastr.info(response.message, 'Report');
    // this.message = response.message;
    // alert(this.message)
    // window.location.reload()
  });

}
  DeleteComment(id:number){
    return this.consumerForumService.DeleteComment(id).subscribe((response) => {
      alert("Comment is Deleted")
      window.location.reload()});
  }
  }
