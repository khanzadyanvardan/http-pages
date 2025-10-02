import http from "http"
import { URL } from "url"
import { readFile } from "fs/promises"
const server = http.createServer(async(req, res)=>{
    const fullPath = new URL(req.url, `http://${req.headers.host}`)
    if(req.method === "GET"){
        let page = "home";
        switch(req.url){
            case "/" :
                page = "home"
            break
            case "/home" :
                page = "home"
            break
            case "/contacts" :
                page = 'contacts'
            break
            case "/help" : 
                page = 'help'
            break
            default:
                page = 'notfound'
        }
        const content = await readFile(`./pages/${page}.html`, "utf-8")
        res.end(content)
    }else{
        res.end("error")
    }
})
server.listen(4010)