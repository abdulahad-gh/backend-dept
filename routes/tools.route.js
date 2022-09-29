const express = require('express')
const toolsController = require('../controllers/controller')

const route = express.Router()

// route.get("/", (req, res) => {
//     res.send('tools found')
// })
// route.post("/", (req, res) => {
//     res.send('now post api is hit')
// })

route.route('/')

    /** 
    * @api {get} get api to get tools
    * @apiDescription Get all tools from dataBase
    * @apiPermission Admin
    *
    * @apiHeader {String} Authorization User's access token
    
    * @apiParam {Number{1-}} [page=1] List name
    * @apiParam {Number{1-100}} [limit=10] Users per page
    *
    * @apiSuccess {Object[]} all the tools
    *
    * @apiError (Unauthorized 401) Unauthorized only Authenticated users can access the data
    * @apiError (Forbidden 403) Forbidden only admins can access the data
    */
    .get(toolsController.getAllTools)
    /**
     * @api post api for save tools
     * @apiDescription This api for save a single tools inside database
     * @apiPermission only admins
     * 
     * @apiHeader {String} Authorization access token (jwt)
     * 
     * @apiParam {Number{1-10}} [page=1] list name
     * @apiParam {Number{1-10}} [page=1] list name
     * 
     * @apiSuccess return true when product/tools is include our database
     * 
     * @apiError not success
     * @apiError your product is already exists
     */
    .post(toolsController.postATools)

module.exports = route