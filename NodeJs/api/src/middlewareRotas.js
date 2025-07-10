import { routes } from "./rotas.js";

export function middlewareRotas(req, res){
    const route = routes.find((route) =>{
        return route.method === req.method && route.path === req.url
    } )
    console.log(route)

    if(route){
        return route.controller(req, res)
    }else{
         return res.writeHead(404).end("rota nao encontrada")
    }
}