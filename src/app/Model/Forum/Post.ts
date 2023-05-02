import {PostLike} from "./PostLike";
import {Image} from "./Image";
import {Comment} from "./Comment";
import {user} from "../User/User";

export class Post {
  idPost!:number;
  title!:String;

  dateCre !:Date;
  archiver!:boolean;
  body!:String;
  user!:user;
  postLikes!: PostLike[];
  comments!:Comment[];
  reported!:any[];
  image!:Image;
}
