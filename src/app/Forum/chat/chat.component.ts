import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {user} from "../../Model/User/User";
import {ChatService} from "../../Service/ForumServ/chat.service";
import {UserService} from "../../Service/UserServices/user.service";
import {Message} from "../../Model/Forum/message";
import jwt_decode from "jwt-decode";


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  // Holding the chat messages
  messages!: string;
  username: string = '';
  theme: string = '';
  avatar: string = '';
  currentUser: user = new user();
  m!: string;
  a!: string;
  @Input('m')
  set setsender(value: string) {
    this.m = value;
  }
  @Input('a')
  set setreciver(value: string) {
    this.a = value;
  }


  constructor(public chatService: ChatService, private authenticationService: UserService) {


  }
  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken: any = jwt_decode(token);

      console.log(decodedToken.sub)
    this.username = decodedToken.sub;
    console.log(this.a, this.m);}
  }

  // Prepare the chat message then call the chatService method 'sendMessage' to actually send the message
  sendMessage(event: any, avatar: string) {
    let obj: Message = {
      text: this.messages,
      avatar: avatar,
      username: this.username,
      sender: '0',
      idchat: '0'
    };
    console.log(this.a, this.m);

    this.chatService.sendMessage(obj);
  }
}
