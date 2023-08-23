const express = require("express");

const app = express(); // criando um servidor, devolve uma aplicação express

function home(req, res){ // dois parametros, o primeiro request e o segundo response
    console.log(req.method);
    console.log(req.url);

    res.status(200);
    res.send("Home Page"); // resposta -> send manda a resposta
}

function contato (req, res){
    res.send("<h1>Contato</h1>")
}

function redirect(req, res){
    res.status(301);
    res.header("Location", "/contato"); // redireciona para o contato, passa duas strings, uma location e outra para onde vai redirecionar
    res.send();
    // o navegador faz a requisição, o servidor devolve redirect, o navegador faz outra requisição e o servidor devolve contato
}

//Roteamento
app.get("/", home); // app.função que quer chamar  ("arquivo que vai responder", função) 
app.get("/contato", contato);
app.get("/redirect", redirect); // essa função vai direcionar para contato

app.listen(3000, () => console.log("Rodando na porta 3000")); // cria um servidor e ouve a porta 3000