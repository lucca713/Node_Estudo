//importando pacotes
import http from "node:http"
import { body } from "./middleware.js"
import { middlewareRotas } from "./middlewareRotas.js"

//construindo o servidor
const server =  http.createServer( async(req, res)=>{
    
    //bocy da requisicao
    await body(req, res)

    //Escolha da rota
    middlewareRotas(req, res)
   
})

//numero da porta do server
server.listen(3333)