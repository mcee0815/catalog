const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const taskSchema = new Schema(
  {
    title: {type: String,required:true}, // ex. bathroom sink
    details: {type: String,required:true}, // bathroom sink is leaking
    // location: {type: String,required:true}, // 2a, 2b, front entrance etc..
    // room: {type: String,required:true}, // 234p, 239a etc.. or n/a
    // completed:{type:Boolean},
    // inProcess:{type:Boolean},
    // pause:{type:Boolean},
  }
);

//Export model
module.exports = mongoose.model('Task', taskSchema);