const express = require('express')
const router = express.Router();
const taskModel = require('../models/taskmodel.js');

router.get('/', async (req, res) => {
    try {
        let allTasks = await taskModel.find({})
        if(!allTasks){return res.status(404).json({message : 'cant find tasks'})}
        res.status(200).json(allTasks)
    } catch (error) {
        console.log('error : tasks router getAll');
        res.status(500).json({message : error.message})
    }
})

router.get('/task:id', async (req, res) => {
    try {
        const {id} = req.params;
        let task = await taskModel.findById(id)
        if(!task){return res.status(404).json({message : 'cant find task'})}
        res.status(200).json(task)
    } catch (error) {
        console.log('error : tasks router getTask');
        res.status(500).json({message : error.message})
    }
})

router.post('/createtask', async(req, res) => {
    try {
        const task = await taskModel.create(req.body)
        res.status(200).json(task)    
    }
    catch (error) {
        console.log('error : tasks router post');
        res.status(500).json({message : error.message})
    }
})

router.put('/updatetask:id', async (req, res) => {
    try {
        const { id } = req.params;
        if (!await taskModel.findByIdAndUpdate(id, req.body)) {
            return res.status(404).json({message : 'task does not exists'})
        }
        let updated_task = await taskModel.findById(id)
        res.status(200).json(updated_task)
    } catch (error) {

        console.log('error : tasks router put');
        res.status(500).json({message : error.message})
    }
    
})

router.delete('/deletetask:id', async (req, res) => {
    try {
        const { id } = req.params;
        if (!await taskModel.findByIdAndDelete(id)) {
            return res.status(404).json({message : "task does not exists"})
        }
        res.status(200).json({"message" : "deleted"})
    } catch (error) {
        console.log('error : tasks router delete');
        res.status(500).json({message : error.message})
    }
})

module.exports = router