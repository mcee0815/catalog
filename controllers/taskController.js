const Task = require('../models/task');

// Display the Tasks.
exports.task_list = async (req, res) => {
    let tasks = await Task.find({})
    res.render('task-index',{tasks})
};

// Display details for a task.
exports.task_details = function(req, res) {
    Task.findById(req.params.id,(err,task) => {
        if (err) {
            console.log(err)
        }
        res.render('task-details',{
            task:task
        })
    })
};
// create a task on GET
exports.task_create = (req, res) => {
    res.render('create-task')
    // res.send('dsdsdsd')
};

// create a task on POST
exports.task_create_post = async(req,res) => {
    // create task and redirect to tasks index page
    await Task.create({
        ...req.body,
    })
        res.redirect('/tasks')
}

// edit a task on GET
exports.task_edit_get = async (req,res) => {
    let task = await Task.findOne({_id:req.params.id})
    
    res.render('edit-task',{
        task:task
})
}
// edit a task on PUT
exports.task_edit_put = async (req,res) => {
    // find item by id
    let task = await Task.findOne({_id:req.params.id})
        
    // edited values
        task.title = req.body.title;
        task.details = req.body.details;
        
    // save to mongodb
        await task.save()
        res.redirect('/tasks')
}

// delete a task on DELETE
exports.task_delete = async (req,res) => {
    await Task.remove({_id: req.params.id})
    res.redirect('/tasks')
}
