const express = require('express')
const app = express()
const port = 3000;

const all= [
    [{Authors:'Lawrence Nowell, UK',books : 'Beowulf'}],
    [{Authors:'William Shakespeare, UK',books : 'Hamlet, Othello, Romeo and Juliet, MacBeth'}],
    [{Authors:'Charles Dickens, US',books : 'Oliver Twist, A Christmas Carol'}],
    [{Authors:'Oscar Wilde, UK',books : 'The Picture of Dorian Gray, The Importance of Being Earnest'}]
]


app.get('/',(req, res)=>{
    res.send('<h1>Authors Api</h1>')
})

app.get('/authors/test/1',(req, res)=>{
    console.log('Authors2')
    res.send(`${all.map(()=>{
        return all[1][0].Authors
    })}`)
})


app.get('/authors/1/',(req, res)=>{
    console.log('Authors1')
    res.send('Lawrence Nowell, UK')
})

app.get('/authors/1/books',(req, res)=>{
    console.log('Authors1books')
    res.send('Beowulf')
})

app.get('/authors/2/',(req, res)=>{
    console.log('Authors2')
    res.send('William Shakespeare, UK')
})

app.get('/authors/2/books',(req, res)=>{
    console.log('Authors2books')
    res.send('Hamlet, Othello, Romeo and Juliet, MacBeth')
})

app.get('/authors/3/',(req, res)=>{
    console.log('Authors3')
    res.send('Charles Dickens, US')
})

app.get('/authors/3/books',(req, res)=>{
    console.log('Authors3books')
    res.send('Oliver Twist, A Christmas Carol')
})

app.get('/authors/4/',(req, res)=>{
    console.log('Authors4')
    res.send('Oscar Wilde, UK')
})

app.get('/authors/4/books',(req, res)=>{
    console.log('Authors4books')
    res.send('The Picture of Dorian Gray, The Importance of Being Earnest')
})

app.get('/cars/', (req, res) =>{
    res.send('Error');
});

app.get('/authors/12133', (req, res) =>{
    res.send('The author with the ID 12133 does not exist');
});

app.listen(port, ()=>{
    console.log(`started serveur:${port}`);
})