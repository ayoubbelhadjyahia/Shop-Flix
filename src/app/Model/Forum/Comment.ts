import {Post} from "./Post";
import {CommentLike} from "./CommentLike";

export class Comment {
  idComment!:number;
  text!:String;
  commentDate!:Date;
  user!:any;
  post!:Post
  commentLike!:CommentLike[];


}
