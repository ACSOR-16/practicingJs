class User{
  constructor(name){
    this.name = name;
    this.messages = [];
  }

  receiveMessage(message){
    this.messages.push(message);
  }
}

// import { User } from "./user";

class Chat{
  constructor(){
    if (!Chat.instance) {
      this.init();
      Chat.instance = this;
    }
    return Chat.instance;
  }

  init() {
    this.users = [];
  }

  sendMessages(message){
    this.users.forEach( user => user.receiveMessage(message));
  }

  addUser(user){
    if (user instanceof User) {
      this.users.push(user);
    }
  }

  removeUser(name) {
    this.users = this.users.filter( user => user.name !== name);
  }
}