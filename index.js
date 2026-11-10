const express = require('express');
const bodyParser = require('body-parser');
const app= express();
const port = 3000;

app.use(bodyParser.json());
var data = [
    {name: 'priya', age: 22},
    {name: 'sneha', age: 21}
];

app.get('/', (req, res) => {
    res.json(data);
})
app.post('/', (req,res)=> {
    data.push(req.body);
    res.json(data);
})
app.patch('/:index', (req,res) => {
    data[req.params.index]=req.body;
    res.json(data);
})
app.delete('/:index', (req,res) => {
    data.splice(req.params.index, 1);
    res.json(data);
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
