var swagger=require('../public/swagger.js');
const swaggerUi = require('swagger-ui-express');
var express = require('express');
var router = express.Router();
/**
* @swagger
* tags:
*  name: sample
*  description: Todo management
* definitions:
*  Todo:
*    type: object
*    required:
*      - content
*    properties:
*      _id:
*        type: string
*        description: ObjectID
*      content:
*        type: string
*        description: 할일 내용
*      done:
*        type: boolean
*        description: 완료 여부
* @swagger
* tags:
*   name: Boards
*   description: about boards
* @swagger
* tags:
*   name: QnA
*   description: about QnA boards
* @swagger
* tags:
*   name: Auth
*   description: about logined
*/

/**
* @swagger
* paths:
*  /todo:
*    get:
*      summary: Returns Todo list
*      tags: [sample]
*      responses:
*        200:
*          description: todo list
*          schema:
*            type: object
*            properties:
*              todos:
*                type: array
*                items:
*                  $ref: '#/definitions/Todo'
*  /pet:
*    post:
*      tags:
*      - "sample"
*      summary: "Add a new pet to the store"
*      description: ""
*      operationId: "addPet"
*      consumes:
*      - "application/json"
*      - "application/xml"
*      produces:
*      - "application/xml"
*      - "application/json"
*      parameters:
*      - in: "body"
*        name: "body"
*        description: "Pet object that needs to be added to the store"
*        required: true
*        schema:
*          $ref: "#/definitions/Pet"
*      responses:
*        405:
*          description: "Invalid input"
*      security:
*      - petstore_auth:
*        - "write:pets"
*        - "read:pets"
*  api/boards:
*    get:
*      summary: Returns Board List
*      tags: [Boards]
*      responses:
*        200:
*          description: Success Returns Board List
*          schema:
*            type: object
*            properties:
*              board_list:
*                type: array
*                items:
*                  $ref: '#/definitions/QnA'
*  api/qna-board/posts:
*    get:
*      summary: Returns Post list in Qna-board
*      tags: [QnA]
*      responses:
*        200:
*          description: success Returns Post list in Qna-board
*          schema:
*            type: object
*            properties:
*              post_list:
*                type: object
*                $ref: '#/definitions/QnA/properties/post_list'
*    post:
*      tags:
*      - "QnA"
*      summary: "Add a new post to the QnA-board"
*      operationId: "add_Post"
*      consumes:
*      - "application/json"
*      produces:
*      - "application/json"
*      parameters:
*      - in: "body"
*        name: "body"
*        description: "Post object that needs to be added to the board"
*        required: true
*        schema:
*          $ref: "#/definitions/Post_write"
*      responses:
*        200:
*          description: "Success input"
*        405:
*          description: "Invalid input"
*      security:
*      - swagger_auth:
*        - "write:pets"
*        - "read:pets"
*  api/qna-board/posts/{post_id}:
*    get:
*      summary: Returns One Post in Qna-board
*      tags: [QnA]
*      responses:
*        200:
*          description: success Returns One Post in Qna-board
*          schema:
*            type: object
*            properties:
*              select_post:
*                type: object
*                $ref: '#/definitions/Post'
*  api/qna-board/posts/{post_id}/auth:
*    get:
*      summary: Returns Post auth
*      tags: [QnA]
*      responses:
*        200:
*          description: success Returns Post auth
*          schema:
*            type: object
*            properties:
*              auth:
*                type: boolean
*                description: auth about post
*  api/auth:
*    get:
*      summary: Returns token
*      tags: [Auth]
*      responses:
*        200:
*          description: success Returns token
*          schema:
*            type: object
*            properties:
*              todos:
*                type: array
*                items:
*                  $ref: '#/definitions/Auth'
* definitions:
*   Post:
*     type: object
*     required:
*       - content
*     properties:
*       post_id:
*         type: integer
*         description: Post's id number
*       post_tag:
*         type: string
*         description: Post's tags
*       post_title:
*         type: string
*         description: Post's title
*       post_text:
*         type: string
*         description: Post contents
*       post_time:
*         type: integer
*         description: Posted time
*       post_writer:
*         type: integer
*         description: Post writer's id
*       done:
*         type: boolean
*         description: 완료 여부
*   QnA:
*     type: object
*     required:
*       - content
*     properties:
*       board_id:
*         type: integer
*       board_name:
*         type: string
*       post_list:
*         type: array
*         items:
*           $ref: '#/definitions/Post'
*         description: posts list
*       done:
*         type: boolean
*         description: 완료 여부
*   Post_write:
*     type: object
*     required:
*       - content
*     properties:
*       post_tag:
*         type: string
*         description: Post's tags
*       post_title:
*         type: string
*         description: Post's title
*       post_text:
*         type: string
*         description: Post contents
*       post_writer:
*         type: integer
*         description: Post writer's id
*   Post_Auth:
*     type: object
*     required:
*       - content
*     properties:
*       done:
*         type: boolean
*         description: check auth about post
*   Auth:
*     type: object
*     required:
*       - content
*     properties:
*       token:
*         type: array
*         items: json
*         description: User info token
*       done:
*         type: boolean
*         description: 완료 여부
*/
 router.use('/', swaggerUi.serve, swaggerUi.setup(swagger()));
 module.exports = router;
