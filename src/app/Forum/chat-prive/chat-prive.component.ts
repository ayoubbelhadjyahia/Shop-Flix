import {Component, Input, OnInit} from '@angular/core';

import {Subscription} from "rxjs";

import {Router} from "@angular/router";
import {Chatroom} from "../../Model/Forum/chatroom";
import {user} from "../../Model/User/User";
import {ChatService} from "../../Service/ForumServ/chat.service";
import {ConsumerForumService} from "../../Service/ForumServ/consumer-forum.service";
import {UserService} from "../../Service/UserServices/user.service";
import {Message} from "../../Model/Forum/message";
import jwt_decode from "jwt-decode";

@Component({
  selector: 'app-chat-prive',
  templateUrl: './chat-prive.component.html',
  styleUrls: ['./chat-prive.component.scss']
})
export class ChatPriveComponent implements OnInit {

  // Holding the chat messages
  private routeSub!: Subscription;
  //mess: Message = new Message();
  chhh!: Chatroom[];
  ch: Chatroom = new Chatroom();
  chatLists!: Chatroom[];
  messages!: string;
  username: string = '';
  theme: string = '';
  avatar: string = '';
  currentUser: user = new user();
  users!: user[];
  map: Map<number, Chatroom> = new Map();
  map2: Map<number, string> = new Map();
  map3: Map<number, string> = new Map();


  constructor(private router: Router, public chatService: ChatService, private service: ConsumerForumService, private authenticationService: UserService) {

  }

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken: any = jwt_decode(token);

      console.log(decodedToken.sub)
      this.username = decodedToken.sub;
      console.log(this.username)
    }
    this.service.GetUser( this.username).subscribe(data =>{
    this.currentUser = data
      console.log(data)
    }
    )
    this.routeSub = this.service.getchatroom('1', '1').subscribe(res => {
      console.log(res);
      this.ch = res;
    });
    this.routeSub = this.service.GetAllUser().subscribe(res => {
      console.log(res);
      this.users = res;
    });
    this.username = this.currentUser.username;
    this.allchat();
    this.ch.color = '#EC407A';
    this.map.set(this.currentUser.id,this.ch);
    this.map2.set(this.currentUser.id,'Start Chat');
    this.map3.set(this.currentUser.id,'profile_user.jpg');
    const token1 = localStorage.getItem('token');
    if (token) {
      const decodedToken: any = jwt_decode(token);
      console.log(decodedToken.sub)
      this.username = decodedToken.sub;
      this.service.GetUser( this.username).subscribe(data => {
        this.currentUser = data
        console.log(data)
        console.log(this.username)
        this.ref(data.id, data.id, data.username, 'null')
      });
    }
  }

  // Prepare the chat message then call the chatService method 'sendMessage' to actually send the message
  sendMessage(event: any, avatar: string) {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken: any = jwt_decode(token);
      console.log(decodedToken.sub)
      this.username = decodedToken.sub;
    }

    console.log(this.username)
     const x = this.map.get(this.currentUser.id);
    let obj: Message = {
      text: this.messages,
      avatar: avatar,
      username: this.username,
      idchat: x?.chatroomId.toString(),
      sender: this.currentUser.id.toString()

    };

    this.chatService.sendMessage(obj);
  }

  ref(id1: string, id2: string, xx: string,yy : string) {
    this.routeSub = this.service.getchatroom(id1, id2).subscribe(res => {
      console.log(res);
      this.ch = res;
      this.map.set(this.currentUser.id, this.ch);
      this.map2.set(this.currentUser.id, xx);
      this.map3.set(this.currentUser.id, yy);

      console.log(this.chatLists[res.chatroomId]);
      console.log(this.currentUser.id);
    });
  }

  // send(id: string){
  //   this.routeSub = this.service.sendmsg(this.ch.chatroomId.toString() , this.mess).subscribe(res => {
  //     console.log(res);
  //     this.allchat();
  //   });
  // }

  allchat() {
    this.routeSub = this.service.allchat().subscribe(res => {
      this.chhh = res;
      console.log(res);

    });
  }

  color(id: any, c: any) {
    this.service.color(id, c).subscribe(p => {
      console.log();
      let currentUrl = this.router.url;
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate([currentUrl]);
    });
  }
}
