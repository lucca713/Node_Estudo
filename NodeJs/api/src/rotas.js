import {convertPath} from "./utils/convertePath.js"

export const routes = [
    {
        method:"GET",
        path: "/products",
        controller: (req, res) =>{
            return res.end("lista de prodiutos")
        }
    },

     {
        method:"POST",
        path: "/products",
        controller: (req, res) =>{
            return res.writeHead(201).end(req.body)
        }
    }, 

    {
        method:"DELETE",
        path: "/products/:id",
        controller: (req, res) =>{
            return res.end("Deletado")
        }
    }
].map((route) =>({
    ...route,  
    path: convertPath(route.path),
}))