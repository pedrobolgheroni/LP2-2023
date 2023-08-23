// importar express
const express = require('express');
const path = require('path');

// cria uma instância do express (app ou server)
const app = express();

app.use(express.static('public')); //middleware  nav -> express -> -> static -> function

function home(req, res){
    res.sendFile(path.join(__dirname, 'pages', 'home.html')); // join junta conjunto de string
}

// localhost:3000/contato?tipo=formulario

function contato(req, res){
    const tipo = req.query.tipo;

    if(tipo == 'formulario'){
        res.send('contato com formulário');
    } else{
        res.send('contato com texto')
    }    
}

const produtos = [
    'Coca-Cola',
    'Banana',
    'Ovos',
    'Macarrão',
    'Água',
    'Chocolate'
];

//localhost:3000/produto?id=1 (id = index do array)
function produto(req, res){
    const id = req.query.id;

    if(id < 0 || id >=produtos.length){
        res.status(404);
        res.send('Produto com id ' +id+ ' não existe');
        return;
    }
    res.send(produtos[id]);
    
}

// configura rotas
app.get('/', home);
app.get('/contato', contato);
app.get('/produto', produto);

// inicializa o server o app.listen()
app.listen(3000, () => console.log('Rodando na porta 3000'));