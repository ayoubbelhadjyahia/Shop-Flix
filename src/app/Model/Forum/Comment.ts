import {Post} from "./Post";
import {CommentLike} from "./CommentLike";
import {user} from "../User/User";

export class Comment {
  idComment!:number;
  text!:string;
  commentDate!:Date;
  user!:user;
  post!:Post
  commentLike!:CommentLike[];


}
