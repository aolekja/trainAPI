// class Greeting {
//     constructor(name : string){
//          console.log("in constructor")
//     }
//     greet():void { 
//       console.log("Hello World!!!") 
//     } 
//   } 
  
//   var obj = new Greeting('ao'); 
//   obj.greet();
import * as express from 'express'  ;
import * as bodyParser from 'body-parser';
import { Server } from 'http';
import * as  cors from 'cors' ;
import { UserController } from './controllers/user';
import * as config from 'config';
import { LoginController } from './controllers/login';
import { jwt } from './shared/auth';
import {IssueController} from './controllers/issue';
import * as io from 'socket.io';
import {PicController} from './controllers/pic';
const app = express();
const server = require('http').Server(app);
//const port:number = 3000;
let port = server.listen(config.get("port"));
//server.listen(port);
const socketio = io(server);
console.log(`server start on port ${port.address()["port"]}`);

socketio.on("connection",(_socket)=>{
   _socket.on("newPic",(payload)=>{
    socketio.emit("updatePic",1);

   });
   _socket.on("deletePic",(_socket)=>{
     socketio.emit("updatePic",-1);
   });
});

app.use(jwt.initialize());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}));

app.use("/api/v1/user", UserController);
app.use("/api/v1/login", LoginController);
app.use("/api/v1/issue", IssueController);
app.use("/api/v1/pic", PicController);