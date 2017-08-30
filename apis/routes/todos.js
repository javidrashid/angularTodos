var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');

var db = mongojs('mongodb://admin:password@ds163613.mlab.com:63613/angulartodos', ['todos'])
//GET ALL TODOS
router.get('/todos', function(req, res, next) {
    db.todos.find(function(err, todos) {
        if(err) {
            res.send(err);
        }
        else {
            res.json(todos);
        }
    })
})

//GET A SINGLE TODO
router.get('/todo/:id', function(req, res, next) {
    db.todos.findOne({
        _id : mongojs.ObjectId(req.params.id)
    }, function(err, todo) {
        if(err) {
            res.send(err);
        }
        else {
            res.json(todo);
        }
    })
});

//SAVE TODO

router.post('/todo', function(req, res, next) {
    var todo = req.body;
    if(!todo.todoName || !(todo.status + '')) {
        res.status(400);
        res.json({
            'error' : 'Invalid Data'
        })
    }
    else {
        db.todos.save(todo, function(err, result) {
            if(err) {
                res.send(err);
            }
            else {
                res.json(result)
            }
        })
    }
}); 

//UPDATE A TODO

router.put('/todo/:id', function(req, res, next) {
    var todo = req.body;
    var updObj = {};

    if(todo.status) {
        updObj.status = todo.status;
    }
    if(todo.todoName) {
        updObj.todoName = todo.todoName;
    }
    if(!updObj) {
        res.status(400);
        res.json({
            'error' : 'Invalid Data'
        })
    }
    else {
        db.todos.update({
            _id : mongojs.ObjectId(req.params.id)
        }, updObj, {}, function(err, result) {
            if(err) {
                res.send(err);
            }
            else {
                res.json(result)
            }
        })
    }
});

//DELETE TODOS
router.delete('/todo/:id', function(req, res, next) {
    db.todos.remove({
        _id : mongojs.ObjectId(req.params.id)
    }, '', function(err, result) {
        if(err) {
            res.send(err);
        }
        else {
            res.json(result)
        }
    })
})

module.exports = router;