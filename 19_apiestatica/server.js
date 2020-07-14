const http = require('http');

const ordenes = [
    {'nombre': 'sopa', 'cantidad': 2, 'estado': 'servido', 'mesa': 5},
    {'nombre': 'corte de carne', 'cantidad': 2, 'estado': 'proceso', 'mesa': 4},
    {'nombre': 'sopa', 'cantidad': 100, 'estado': 'pagado', 'mesa': 3},
    {'nombre': 'ensalada', 'cantidad': 1, 'estado': 'pagado', 'mesa': 5},
    {'nombre': 'pasta', 'cantidad': 4, 'estado': 'en proceso', 'mesa': 1}
]

http.createServer((req, res) =>{
    if(req.url == '/'){
        res.writeHead(200, {'Content-type': 'text/json'})
        res.end(JSON.stringify(ordenes))
    }else if(req.url == '/ordenes-proceso'){
        pedidosEnProceso(res)
    }else if(req.url == '/ordenes-sopa'){
        pedidosPorNombre('sopa', res)
    }else{
        res.writeHead(404, {'Content-type': 'text/plain'});
        res.end(JSON.stringify('No sé encontró la solicitud requerida'))
    }

}).listen(3000);


console.log('Server iniciado')

const pedidosEnProceso = (res) =>{
    const answer = ordenes.filter( item =>{
        return item.estado == 'en proceso';
    })
    res.writeHead(200, {'Content-type': 'text/json'})
    res.end(JSON.stringify(answer))
}

const pedidosPorNombre = (nombre, res) =>{
    const answer = ordenes.filter( item =>{
        return item.nombre == nombre;
    })
    res.writeHead(200, {'Content-type': 'text/json'})
    res.end(JSON.stringify(answer))
}