import { Component, OnInit } from '@angular/core';
import {ConsumerForumService} from "../../Service/ForumServ/consumer-forum.service";
import {Post} from "../../Model/Forum/Post";
import {Router} from "@angular/router";


@Component({
  selector: 'app-home-forum',
  templateUrl: './home-forum.component.html',
  styles: [
  ]
})
export class HomeForumComponent implements OnInit {
  dateNow: Date = new Date();
  post!:Post
  image!:File;
  listePost!:Post[];
  id!:number ;
  fileToUpload: File |null=null;
  imagenMin!: File;
  ReactPost!:string;
  constructor(private consumerForumService:ConsumerForumService,public router: Router) { }
 ngOnInit(): void {

    this.consumerForumService.getPost().subscribe({next:(data)=> {
        this.listePost = data,
          console.log(data)
        console.log(this.listePost)
        this.post = new Post
      }
    });
  }
    delete(id:number){
      this.consumerForumService.DeletePost(id).subscribe({next:()=>this.ngOnInit()});
    }
    getDateOnly(dateString: Date): string {

      let dateNow1=this.dateNow
      let datePost = dateString;
      return datePost.toString().replace("-","/").replace("-","/").replace("T"," ").slice(0, 16);
    }
    add(){
      this.consumerForumService.AddPost(this.post).subscribe({
        next:()=>this.router.navigateByUrl("/Forum")});
    }

  onFileSelcted(event: any){
    this.fileToUpload = event.target.files[0];
    const fr = new FileReader();
    fr.onload = (evento: any) => {
      this.imagenMin = evento.target.result;
    };
  }
  PostLike(ReactPost:string,id:number){
    this.consumerForumService.PostLike(ReactPost,id).subscribe({next:()=>this.router.navigateByUrl("/Forum")});
  }


  }
