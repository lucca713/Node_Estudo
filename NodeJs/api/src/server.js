//importando pacotes
import http from "node:http"
//construindo o servidor
const server =  http.createServer((req, res)=>{
    //errow function a gente consegue trabalhar envios do servidor e as requisicoes dos "clientes"

    //resposta para quem fazer uma requisicao para o server
    return res.end("Hello World!")
})

//numero da porta do server
server.listen(3333)