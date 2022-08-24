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

app.get('/vagas', (request, response) => {
  console.log(request.path);


  response.send('Achou!');
});

app.post('/vagas', (request, res) => {
  console.log(request.body);

  // validar se a informação é consistente
  if (typeof request.body.title === 'number') {
    res.status(400).send('Campo inválido');
  }

  // salvar no banco de dados

  res.send('Criou!');
});