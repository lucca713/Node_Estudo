export async function body(req, res){
    const buffer = []

    for await(const chunk of req){
        buffer.push(chunk)  
    } 

    try{
      req.body = Buffer.concat(buffer).toString()
      
    }catch(error){
        console.log(error)
        req.body = null
    }

    res.setHeader("concat-Type","application/json")
}