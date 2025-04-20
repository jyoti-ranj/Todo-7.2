const mongoose = require ('mongoose');


mongoose.connect('mongodb+srv://admin:po8swOE57abiOCt9@cluster0.799bz.mongodb.net/todoapp72');

const inputSchema = mongoose.Schema({
    title: String,
    description: String
});

const inputModel = mongoose.model('todos' , inputSchema);

module.exports ={
    inputModel
}