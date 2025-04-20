const express = require('express');
const app = express();
app.use(express.json());
const port = process.env.PORT||3000;
const cors = require('cors')
app.use(cors());
const { inputModel } = require('./db');
const {inputSchema} = require('./types');


app.post('/todo' , async(req, res)=>{
    const Payload = req.body;
    const parsePayload = inputSchema.safeParse(Payload);
    if (!parsePayload.success){
        res.json({
            message:"You are putting wrong inputs"
        })
        return;
    }
    await inputModel.create({
        title: Payload.title,
        description: Payload.description,
    })
    res.json({
        message: "Todo created successfully",
    })
})

app.get('/todos', async(req,res)=>{
    const todos = await inputModel.find({});
    res.json({
        message: "Below are your Todos",
        Todos: todos
    });
})




app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})