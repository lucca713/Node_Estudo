//importando pacotes
import http from "node:http"
import { body } from "./middleware.js"

//construindo o servidor
const server =  http.createServer( async(req, res)=>{
    //errow function a gente consegue trabalhar envios do servidor e as requisicoes dos "clientes"

    const {method, url} = req
    await body(req, res)

    if(method == "GET" && url === "/products" ){
        return res.end("Voce esta na zona de produtos")
    }

    if(method == "POST" && url === "/products" ){
       
            
        return res.writeHead(201).end(req.body)
    }

    //resposta para quem fa zer uma requisicao para o server
    return res.writeHead(404).end("rota nao encontrada  " + url)
})

//numero da porta do server
server.listen(3333)