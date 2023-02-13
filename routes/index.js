const express = require('express');
const req = require('express/lib/request');
const router = express.Router();

// TODO: implement websocket

/**
 * @api {get} api/healtcheck Request status server
 * @apiName Healtcheck
 * @apiGroup Healtcheck
 *
 *
 * @apiSuccess {String} message Ok
 */
router.get('/healthcheck', (req, res) => {
  res.status(200).send({message: 'Ok'})
})

/**
 * @api {post} api/register Request for registering new account
 * @apiName Register
 * @apiGroup Account
 * 
 * @apiParam {String} phone_number User's phone number
 * 
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *     "message": "Successfully registered new account, we'll send OTP to your number",
 *     "data": {
 *      "token": (RANDOM STRING)
 *     }
 *   }
 *
 * @apiSuccess {String} token Token for activation
 */
router.post('/accounts/register', ()=>{})


/**
 * @api {post} api/activation Request for registering new account
 * @apiName Register
 * @apiGroup Account
 * 
 * @apiParam {String} token Token use token that received from api/register
 * @apiParam {String} otp   OTP
 * 
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *     "message": "Successfully registered new account",
 *     "data": {
 *      "token": (RANDOM STRING)
 *     }
 *   }
 *
 * @apiSuccess {String} token Token for activation
 */
router.post('/accounts/activation', ()=>{})

/**
 * @api {get} api/chats Request for list chats
 * @apiName List Chat
 * @apiGroup Chats
 * 
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *     "message": "Ok",
 *     "data": [
 *        { 
 *          "id": uid,
 *          "name": name, 
 *          "mute": true,
 *          "last_update": '',
 *          "chat_picture": '',
 *          "read": '',
 *        }
 *     ]
 *     "pagination": {
 *        current_page: 1,
 *        next_page: 2,
 *        count: 12
 *      }
 *   }
 *
 * @apiSuccess {String} id unique Chat ID
 * @apiSuccess {String} name unique Chat ID
 * @apiSuccess {String} mute Boolean
 * @apiSuccess {String} last_update DateTime
 * @apiSuccess {String} chat_picture image URL
 * @apiSuccess {String} read Booelan
 */
router.get('/chats', ()=>{})

/**
 * @api {post} api/chats Request for creating new chat
 * @apiName List Chat
 * @apiGroup Chats
 * 
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *     "message": "Ok",
 *     "data": [
 *        { 
 *          "id": uid,
 *          "name": name, 
 *          "mute": true,
 *          "last_update": '',
 *          "chat_picture": '',
 *          "read": '',
 *          "type": '',
 *        }
 *     ]
 *     "pagination": {
 *        current_page: 1,
 *        next_page: 2,
 *        count: 12
 *      }
 *   }
 *
 * @apiSuccess {String} id unique Chat ID
 * @apiSuccess {String} name unique Chat ID
 * @apiSuccess {String} mute Boolean
 * @apiSuccess {String} last_update DateTime
 * @apiSuccess {String} chat_picture image URL
 * @apiSuccess {String} read Booelan
 * @apiSuccess {String} type Value: personal, group
 */
router.post('/chats', () => {})

/**
 * @api {post} api/chats Request for creating new chat
 * @apiName Create New Chat
 * @apiGroup Chats
 * 
 * @apiParam {String} phone_numbers Array of phone_number
 * @apiParam {String} type Value: personal, group
 * 
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *     "message": "Ok",
 *     "data":
 *       { 
 *          "id": uid,
 *          "name": name, 
 *          "mute": true,
 *          "last_update": '',
 *          "chat_picture": '',
 *          "read": '',
 *          "type": '',
 *          "member": [
 *            {
 *              "id": ,
 *              "name":,
 *              "picture"
 *            }
 *          ] 
 *        }
 *   }
 *
 * @apiSuccess {String} id unique Chat ID
 * @apiSuccess {String} name unique Chat ID
 * @apiSuccess {String} mute Boolean
 * @apiSuccess {String} last_update DateTime
 * @apiSuccess {String} chat_picture image URL
 * @apiSuccess {String} read Booelan
 * @apiSuccess {String} type Value: personal, group
 * @apiSuccess {String} member array of user
 */
router.get('/chats/:id', ()=> {})

/**
 * @api {delete} api/chats/:id Request for deleting new chat
 * @apiName Delete Chat
 * @apiGroup Chats
 * 
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *     "message": "Ok"
 */
router.delete('/chats/:id', ()=> {})

/**
 * @api {put} api/chats/:id Request for editing chat
 * @apiName Update chat
 * @apiGroup Chats
 * 
 * @apiParam {String} picture Image Path
 * @apiParam {String} name Chat Name
 * 
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *     "message": "Ok"
  *     "data":
 *       { 
 *          "id": uid,
 *          "name": name, 
 *          "mute": true,
 *          "last_update": '',
 *          "chat_picture": '',
 *          "read": '',
 *          "type": '',
 *          "member": [
 *            {
 *              "id": ,
 *              "name":,
 *              "picture"
 *            }
 *          ] 
 *       }
 *   }
 *   }
 */
router.put('/chats/:id', ()=> {})

/**
 * @api {get} api/chats/:id/conversation Request for list conversations
 * @apiName List conversations
 * @apiGroup Conversations
 * 
 * @apiParam {String} id Chat ID
 * 
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *     "message": "Ok",
 *     "data":
 *      [
 *        {
 *          "phone_number":"",
 *          "user_picture": "",
 *          "message": "",
 *          "read": "",
 *          "created_at": ""
 *        }
 *      ]
 *     "pagination": {
 *        current_page: 1,
 *        next_page: 2,
 *        count: 12
 *      }
 *   }
 *
 * @apiSuccess {String} id unique Chat ID
 * @apiSuccess {String} name unique Chat ID
 * @apiSuccess {String} mute Boolean
 * @apiSuccess {String} last_update DateTime
 * @apiSuccess {String} chat_picture image URL
 * @apiSuccess {String} read Booelan
 * @apiSuccess {String} type Value: personal, group
 */
router.get('/chats/:id/conversations', () => {})

/**
 * @api {post} api/chats/:id/conversations Request for creating conversation
 * @apiName Create new conversation
 * @apiGroup Conversations
 * 
 * @apiParam {String} id Chat ID
 * @apiParam {String} message conversation message
 * @apiParam {String} image Image Path
 * 
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *     "message": "Ok",
 *     "data":
 *      [
 *        {
 *          "phone_number":"",
 *          "user_picture": "",
 *          "message": "",
 *          "read": "",
 *          "created_at": ""
 *        }
 *      ]
 *   }
 *
 * @apiSuccess {String} id unique Chat ID
 * @apiSuccess {String} name unique Chat ID
 * @apiSuccess {String} mute Boolean
 * @apiSuccess {String} last_update DateTime
 * @apiSuccess {String} chat_picture image URL
 * @apiSuccess {String} read Booelan
 * @apiSuccess {String} type Value: personal, group
 */
router.post('/chats/:id/conversations', () => {})

/**
 * @api {delete} api/chats/:id/conversations/:id Request for deleting conversation
 * @apiName Delete Conversation
 * @apiGroup Conversations
 * 
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *     "message": "Ok"
 */
router.delete('/chats/:id/conversations/:id', () => {})


// for staging or dev only
/**
 * @api {get} api/otp/:phone_number Request for get OTP only for staging
 * @apiName OTP
 * @apiGroup Account
 * 
 * @apiParam {String} token Token use token that received from api/register
 * @apiParam {String} otp   OTP
 * 
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *     "message": "Successfully registered new account",
 *     "data": {
 *      "token": (RANDOM STRING)
 *     }
 *   }
 *
 * @apiSuccess {String} token Token for activation
 */
if (process.env.NODE_ENV != 'production') {
  router.get('/accounts/otp/:phone_number', () => {})
}

module.exports = router;