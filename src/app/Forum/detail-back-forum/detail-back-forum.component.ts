import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ConsumerForumService} from "../../Service/ForumServ/consumer-forum.service";
import {Post} from "../../Model/Forum/Post";
import {Observable} from "rxjs";

@Component({
  selector: 'app-detail-back-forum',
  templateUrl: './detail-back-forum.component.html',
  styles: [
  ]
})
export class DetailBackForumComponent implements OnInit {
  id!:number;
  post!:Post;

  constructor(private consumerForumService:ConsumerForumService, private route: ActivatedRoute ,private router:Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.consumerForumService.getPostById(this.id).subscribe({next:(data)=>{this.post=data,console.log(data)}});
    // console.log(this.post)
  }
  getDateOnly(dateString: Date): string {

    let datePost = dateString;
    return datePost.toString().replace("-","/").replace("-","/").replace("T"," ").slice(0, 16);
  }

}
