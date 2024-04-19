const express = require('express')
const app = express()
const PORT = 8000

const rappers ={
    '21 savage': {
        'birthName': 'Sheya Bin Laden-Joesph',
        'birthLocation': 'London, England',
        'age': 30,
    },
    
    'chance the rapper': {
        'birthName': 'Chancelor Gaskins',
        'birthLocation': 'Chicago, Illinois',
        'age': 28,
    },
    
    'unknown':{
        'birthName': 'unknown',
        'birthLocation': 'unknown',
        'age': 0,
    }
} 



app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})


app.get('/api/:name',(request, response)=>{
    const rapperName = request.params.name.toLowerCase()
    if( rappers[rapperName] ){
        response.json(rappers[rapperName])
    }else{
        response.json(rappers['unknown'])
    }

})


app.listen(PORT, ()=>{
    console.log(`This server is running on port ${PORT}! Betta Go Catch It`)
})