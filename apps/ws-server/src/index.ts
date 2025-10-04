
import { WebSocketServer } from "ws";
import {client} from "@repo/db/client"

const server = new WebSocketServer({port:3001});


server.on("connection",async (Socket)=>{
    await client.user.create({
        data:{
            username: Math.random().toString(),
            password: Math.random().toString()
        }
    })
    Socket.send("you are connected to the wesocket server");
})