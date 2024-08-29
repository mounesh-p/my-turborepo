import express from 'express';

import {BACKEND_URL, VALUE} from "@repo/common/config"

console.log(BACKEND_URL);
console.log(VALUE);

const app = express()
const port = 3000

app.get('/', (req, res) =>{
    res.json({
        message : 'Hello World!' 
    })
}) 

app.listen(port, () => console.log(`Example app listening on port ${port}!`))