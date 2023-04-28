import {PostLike} from "./PostLike";
import {Image} from "./Image";
import {Comment} from "./Comment";

export class Post {
  idPost!:number;
  title!:String;

  dateCre !:Date;
  archiver!:boolean;
  body!:String;
  user!:any[];
  postLikes!: PostLike[];
  comment!:Comment[];
  reported!:any[];
  image!:Image;
}
