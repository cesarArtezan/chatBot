define({ "api": [
  {
    "type": "GET",
    "url": "/users/",
    "title": "Request all",
    "version": "0.1.0",
    "name": "get",
    "group": "Users",
    "sampleRequest": [
      {
        "url": "https://cesarapp12.herokuapp.com/api/v1/users/"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response a JSON-Array<user>:",
          "content": "{\"data\":[{\"createdAt\":\"2018-07-27T15:13:59.451Z\",\"updatedAt\":\"2018-07-27T15:13:59.451Z\",\"firstName\":\"Cesar\",\"lastName\":\"Artezan\",\"username\":\"cesarartezan\",\"email\":\"algo@a.com\",\"password\":\"123\",\"posts\":[],\"books\":[],\"_id\":\"5abc0051734d1d56e2046bd6\"},{\"createdAt\":\"2018-04-15T21:46:50.337Z\",\"updatedAt\":\"2018-04-15T21:46:50.337Z\",\"firstName\":\"user2\",\"lastName\":\"lastname2\",\"username\":\"username1\",\"email\":\"algo@a.com\",\"password\":\"5636\",\"posts\":[],\"books\":[],\"_id\":\"5ad3c84afddb2b2cc4ffbb0f\",\"__v\":0}]}",
          "type": "json"
        }
      ]
    },
    "filename": "src/router/UserRouter.ts",
    "groupTitle": "Users"
  }
] });