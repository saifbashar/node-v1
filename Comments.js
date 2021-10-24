const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello from node');
});

const users = [
  {
    id: 1,
    name: 'Depaneeta Tisha',
    email: 'dipa@gmail.com',
    mobile: '01704938941',
  },
  {
    id: 2,
    name: 'Nabila Shoily',
    email: 'shoily@gmail.com',
    mobile: '01704938944',
  },
  { id: 3, name: 'Sanjana', email: 'sanjana@gmail.com', mobile: '01749389411' },
  { id: 4, name: 'Oishi', email: 'oishi@gmail.com', mobile: '01704568941' },
];

app.get('/users', (req, res) => {
  const search = req.query.search;
  console.log(req.query.search);
  if (search) {
    const searchResult = users.filter((user) =>
      user.name.toLocaleLowerCase().includes(search)
    );
    res.send(searchResult);
  } else {
    res.send(users);
  }
});

app.get('/users/:id', (req, res) => {
  const id = req.params.id;
  const user = users[id];
  res.send(user);
});

app.get('/fruits/mangoes/fazli', (req, res) => {
  res.send('Yammmi Yammi tak marka fazli');
});
app.get('/fruits', (req, res) => {
  res.send(['Mango', 'Oranges', 'Banana', 'Apples']);
});
app.listen(port, () => {
  console.log('listening on port ' + port);
});
