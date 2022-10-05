import express, { response } from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});


// Rota com método GET geralmente é usado para buscar dados
app.get('/vagas', (req, res) => {
  console.log(req.path);

  // query parameters: geralmente é usado com o método GET e tem uma estrutura limitada e um limite de caracteres que possa ser usados
  console.log(req.query);

  res.send('Thanos!');
});


// Rota com método POST geralmente é usado para criar algum recurso
app.post('/vagas', (req, res) => {

  // body: geralmente é usado com os métodos POST, PUT e algumas vezes com o método PATCH
  // Tem foco em estrutura de dados mais complexas
  console.log(req.body);


  // params ou path parameters
  console.log(req.params);

  // validar se a informação é consistente
  // if (typeof req.body.title === 'number') {
  //   res.status(400).send('Campo inválido');
  // }

  // salvar no banco de dados

  res.send('Criou!');
});

// PUT geralmente é usado para atualizar algum registro
app.put('/vagas/:id', (req, res) => {

  // params ou path parameters: usados para passar parâmetros específicos para delimitar o contexto do endpoint
  console.log(req.params);
  console.log(req.body);

  res.send('Editou!');
});