
import { Router } from "express"
import { semaforo, diaSemana, fatorial, sequenciaPar } from "./service.js"
const server = Router();

server.get('/semaforo/:cor', (req, resp) => {
    try{
        const cor = (req.params.cor);

        const d = semaforo(cor);
    
        resp.send({
            msg: d
        })
    }
    catch(err){
        resp.send({
            erro: err.message
        })
    }
})

server.get('/diadasemana', (req, resp) => {
    try{
        const dia = req.query;

        const d = diaSemana(dia.dia);
    
        resp.send({
            msg: d
        })
    }
    catch(err){
        resp.send({
            erro: err.message
        })
    }
})

server.post('/fatorial', (req, resp) => {
    try{
        const a = Number(req.query);

        const x = fatorial(a);
    
        resp.send({
            fatorial: x
    })
    }
    catch(err){
        resp.send({
            erro: err.message
        })
    }
    
})

server.post('/fatorial2', (req, resp) => {
    try{
        const a = Number(req.query);

        const x = fatorial2(a);
    
        resp.send({
            fatorial: x
    })
    }
    catch(err){
        resp.send({
            erro: err.message
        })
    }
    

})

server.post('/sequenciapar', (req, resp) => {
    try{
        const a = req.body;

        const x = sequenciaPar(a);
    
        resp.send({
            sequencia: x
    })
    }
    catch(err){
        resp.send({
            erro: err.message
        })
    }
    

})





export default server;

