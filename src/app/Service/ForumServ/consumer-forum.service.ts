import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Post} from "../../Model/Forum/Post";
import {Observable} from "rxjs";
import {user} from "../../Model/User/User";
import {Message} from "../../Model/Forum/message";
import {Chatroom} from "../../Model/Forum/chatroom";

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
    return this.http.put<any>("http://localhost:8188/SpringMVC/Forum/addAndAssignPostToUser",post);
  }
  addImagePost(idPost: string, image: File): Observable<any> {
    const formData = new FormData();
    formData.append('image', image);

    return this.http.put(`http://localhost:8188/SpringMVC/Forum/addImageAndAssigToPost/${idPost}`,formData);
  }
  PostLike(react:string,id:number){
    return this.http.put<any>('http://localhost:8188/SpringMVC/Forum/addAndAssignPostLiketoPostAndUser/'+id +"/"+react,this.httpOptions);
  }
  UpdatePost(post: Post){
    return this.http.put<any>("http://localhost:8188/SpringMVC/Forum/updatePost",post);
  }
  addComment(message:string,id:number){
    return this.http.put<any>('http://localhost:8188/SpringMVC/Forum/addAndAssignCommenttoPostAndUser/'+id+"/"+message,this.httpOptions);
  }
  getCommentByPost(postId:number):Observable<Comment[]>{
    return this.http.get<Comment[]>("http://localhost:8188/SpringMVC/Forum/getAllCommentOfPost/"+postId);
  }
  Report(id:number){
    return this.http.get<any>("http://localhost:8188/SpringMVC/Forum/SignalerPost/"+id);
  }
  BestPost(){
    return this.http.get<Post>("http://localhost:8188/SpringMVC/Forum/bestPost");
  }
  ChangedArchived(id:number){
    return this.http.get("http://localhost:8188/SpringMVC/Forum/changeArchived/"+id);
  }
  ChangedStatus(id:number){
    return this.http.get("http://localhost:8188/SpringMVC/Forum/changeSatuts/"+id);
  }
  DeleteComment(id:number){
    return this.http.get<any>("http://localhost:8188/SpringMVC/Forum/deleteComment/"+id);
  }










  //////////////////////////chat roommmm/////

  getchatroom(ids: string , idr: string ) {
    return this.http.get<Chatroom>('http://localhost:8188/SpringMVC/chat/Chatroom/' + ids + '/' + idr );

  }

  GetAllUser() {
    return this.http.get<user[]>('http://localhost:8188/SpringMVC/chat/ListUser/');

  }

  GetUser(username : any) {
    return this.http.get<user>('http://localhost:8188/SpringMVC/chat/user/'+username);

  }
  sendmsg(id: string, m: Message) {
    return this.http.post<Message>('http://localhost:8188/SpringMVC/chat/send/' + id, m );

  }

  allchat() {
    return this.http.get<Chatroom[]>('http://localhost:8188/SpringMVC/chat/allchat' );

  }
  color(id: string , c: string) {
    return this.http.post<string>('http://localhost:8188/SpringMVC/chat/color/' + id , c );

  }
}
