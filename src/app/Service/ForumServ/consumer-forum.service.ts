import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Post} from "../../Model/Forum/Post";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ConsumerForumService {
  id:number=1;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(private http:HttpClient) { }


  getPost(){
    return this.http.get<Post[]>("http://localhost:8188/SpringMVC/Forum/allPost");
  }
  DeletePost(postId :number){
    return this.http.delete("http://localhost:8188/SpringMVC/Forum/deletePost/"+ postId);
  }
  getPostById(postId:number){
    return this.http.get<Post>("http://localhost:8188/SpringMVC/Forum/getPost/"+postId);
  }
  NbPostLike(postId:number){
    return this.http.get<number>("http://localhost:8188/SpringMVC/Forum/NbPostLikeTotal/"+postId);
  }
  AddPost(post: Post){
    return this.http.put("http://localhost:8188/SpringMVC/Forum/addAndAssignPostToUser",post);
  }
  addImagePost(idPost: string, image: File): Observable<any> {
    const data: FormData = new FormData();
    data.append('image', image);

    return this.http.post('localhost:8087/SpringMVC/forum/add-Post-image/' + idPost, data);
  }
  PostLike(react:string,id:number){
    return this.http.put<any>('http://localhost:8188/SpringMVC/Forum/addAndAssignPostLiketoPostAndUser/'+id,"LIKE",this.httpOptions);
  }
}
