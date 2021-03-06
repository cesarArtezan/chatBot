define({ "api": [
  {
    "type": "GET",
    "url": "/books/",
    "title": "Request all",
    "version": "0.1.0",
    "name": "get",
    "group": "Books",
    "sampleRequest": [
      {
        "url": "https://cesarapp12.herokuapp.com/api/v1/books/"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response a JSON-Array<books>:",
          "content": "{\"data\":[\n{ \"createAt\": \"2018-04-15T21:17:41.101Z\", \"name\": \"libro1\", \"pages\": 40, \"_id\": \"5ad3c175d4f5791f80c86742\", \"__v\": 0 }, { \"createAt\": \"2018-04-15T21:19:18.433Z\", \"name\": \"libro2\", \"pages\": 50, \"_id\": \"5ad3c1d6d4f5791f80c86744\", \"__v\": 0 }, { \"createAt\": \"2018-04-15T21:19:26.769Z\", \"name\": \"libro33\", \"pages\": 151, \"_id\": \"5ad3c1ded4f5791f80c86745\", \"__v\": 0 }, { \"createAt\": \"2018-04-15T21:19:36.520Z\", \"name\": \"libro4\", \"pages\": 150, \"_id\": \"5ad3c1e8d4f5791f80c86746\", \"__v\": 0 }\n]}",
          "type": "json"
        }
      ]
    },
    "filename": "src/router/BookRouter.ts",
    "groupTitle": "Books"
  },
  {
    "type": "GET",
    "url": "/posts/",
    "title": "Request all",
    "version": "0.1.0",
    "name": "get",
    "group": "Posts",
    "sampleRequest": [
      {
        "url": "https://cesarapp12.herokuapp.com/api/v1/posts/"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response a JSON-Array<posts>:",
          "content": "{\"data\":[\n { \"timestamp\": \"2018-03-29T13:44:27.979Z\", \"title\": \"Post1\", \"slug\": \"post1\", \"content\": \"algo contenido\", \"featuredImage\": \"imagen\", \"category\": \"category\", \"published\": false, \"_id\": \"5abcedbbfb5dfb236c199e81\", \"__v\": 0 }, { \"timestamp\": \"2018-03-29T13:45:17.776Z\", \"title\": \"Post4\", \"slug\": \"post2\", \"content\": \"algo contenido\", \"featuredImage\": \"imagen\", \"category\": \"category\", \"published\": true, \"_id\": \"5abcededfb5dfb236c199e83\", \"__v\": 0 }\n]}",
          "type": "json"
        }
      ]
    },
    "filename": "src/router/PostRouter.ts",
    "groupTitle": "Posts"
  },
  {
    "type": "DELETE",
    "url": "/users/:_id",
    "title": "Request  Deleted",
    "version": "0.1.0",
    "name": "deleteByToken",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": "<p>Must be placed as QueryParam</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "https://cesarapp12.herokuapp.com/api/v1/users/5a9c4bb05e46d22f64abc15a",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\"data\":true}",
          "type": "json"
        }
      ]
    },
    "filename": "src/router/UserRouter.ts",
    "groupTitle": "Users",
    "sampleRequest": [
      {
        "url": "https://cesarapp12.herokuapp.com/api/v1/users/:_id"
      }
    ]
  },
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
          "content": "{\"data\":[\n{\"createdAt\": \"2018-04-15T22:08:19.645Z\", \"updatedAt\": \"2018-04-15T22:08:19.645Z\", \"firstName\": \"user102\", \"lastName\": \"last102\", \"username\": \"user102\", \"email\": \"algo@a456.com\", \"password\": \"5636\", \"posts\": [ { \"timestamp\": \"2018-07-29T15:08:01.298Z\", \"title\": \"algo\", \"slug\": \"\", \"content\": \"\", \"featuredImage\": \"\", \"category\": \"c\", \"published\": false, \"_id\": \"5abbfcc0734d1d56e20469e2\" } ], \"books\": [ { \"createAt\": \"2018-04-15T21:19:18.433Z\", \"name\": \"libro2\", \"pages\": 50, \"_id\": \"5ad3c1d6d4f5791f80c86744\", \"__v\": 0 }, { \"createAt\": \"2018-04-15T21:17:41.101Z\", \"name\": \"libro1\", \"pages\": 40, \"_id\": \"5ad3c175d4f5791f80c86742\", \"__v\": 0 } ], \"_id\": \"5ad3cd5346a90e3d1c9c09a1\", \"__v\": 0 }, { \"createdAt\": \"2018-04-15T22:13:52.471Z\", \"updatedAt\": \"2018-04-15T22:13:52.471Z\", \"firstName\": \"user25\", \"lastName\": \"last25\", \"username\": \"username25\", \"email\": \"algo@a456.com\", \"password\": \"5636\", \"posts\": [ { \"timestamp\": \"2018-07-29T15:08:01.298Z\", \"title\": \"algo\", \"slug\": \"\", \"content\": \"\", \"featuredImage\": \"\", \"category\": \"c\", \"published\": false, \"_id\": \"5abbfcc0734d1d56e20469e2\" }, { \"timestamp\": \"2018-03-29T13:45:17.776Z\", \"title\": \"Post4\", \"slug\": \"post2\", \"content\": \"algo contenido\", \"featuredImage\": \"imagen\", \"category\": \"category\", \"published\": true, \"_id\": \"5abcededfb5dfb236c199e83\", \"__v\": 0 } ], \"books\": [ { \"createAt\": \"2018-04-15T21:19:18.433Z\", \"name\": \"libro2\", \"pages\": 50, \"_id\": \"5ad3c1d6d4f5791f80c86744\", \"__v\": 0 }, { \"createAt\": \"2018-04-15T21:17:41.101Z\", \"name\": \"libro1\", \"pages\": 40, \"_id\": \"5ad3c175d4f5791f80c86742\", \"__v\": 0 }, { \"createAt\": \"2018-04-15T21:19:36.520Z\", \"name\": \"libro4\", \"pages\": 150, \"_id\": \"5ad3c1e8d4f5791f80c86746\", \"__v\": 0 } ], \"_id\": \"5ad3cea0206c9611d0a7906c\", \"__v\": 0 }\n]}",
          "type": "json"
        }
      ]
    },
    "filename": "src/router/UserRouter.ts",
    "groupTitle": "Users"
  },
  {
    "type": "GET",
    "url": "/users/:_id",
    "title": "Request by Object Id",
    "version": "0.1.0",
    "name": "getById",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": "<p>Must be provided as QueryParam</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "https://cesarapp12.herokuapp.com/api/v1/users/5a9c4bb05e46d22f64abc15a",
        "type": "json"
      }
    ],
    "sampleRequest": [
      {
        "url": "https://cesarapp12.herokuapp.com/api/v1/users/"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response User:",
          "content": "{\"data\": { \"createdAt\": \"2018-07-29T15:07:59.022Z\", \"updatedAt\": \"2018-07-29T15:07:59.022Z\", \"firstName\": \"user501\", \"lastName\": \"lastname2\", \"username\": \"username501\", \"email\": \"demo_user@a.com\", \"password\": \"5636\", \"posts\": [ { \"timestamp\": \"2018-03-29T13:44:27.979Z\", \"title\": \"Post1\", \"slug\": \"post1\", \"content\": \"algo contenido\", \"featuredImage\": \"imagen\", \"category\": \"category\", \"published\": false, \"_id\": \"5abcedbbfb5dfb236c199e81\", \"__v\": 0 }, { \"timestamp\": \"2018-03-29T13:45:17.776Z\", \"title\": \"Post4\", \"slug\": \"post2\", \"content\": \"algo contenido\", \"featuredImage\": \"imagen\", \"category\": \"category\", \"published\": true, \"_id\": \"5abcededfb5dfb236c199e83\", \"__v\": 0 } ], \"books\": [ { \"createAt\": \"2018-04-15T21:17:41.101Z\", \"name\": \"libro1\", \"pages\": 40, \"_id\": \"5ad3c175d4f5791f80c86742\", \"__v\": 0 }, { \"createAt\": \"2018-04-15T21:17:41.101Z\", \"name\": \"libro1\", \"pages\": 40, \"_id\": \"5ad3c175d4f5791f80c86742\", \"__v\": 0 } ], \"_id\": \"5b5dd84f7c124a2554381c90\", \"__v\": 0 } }",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": true,
            "field": "updatedAt",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "firstName",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "lastName",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Books",
            "optional": false,
            "field": "books",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Post",
            "optional": false,
            "field": "post",
            "description": ""
          }
        ]
      }
    },
    "filename": "src/router/UserRouter.ts",
    "groupTitle": "Users"
  },
  {
    "type": "POST",
    "url": "/users/",
    "title": "Request New",
    "version": "0.1.0",
    "name": "post",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "firstName",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "lastName",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "email",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Books",
            "optional": false,
            "field": "books",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "ObjectId[]",
            "optional": false,
            "field": "book._id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Posts",
            "optional": false,
            "field": "posts",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "ObjectId[]",
            "optional": false,
            "field": "post._id",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\"firstName\": \"user50\", \"lastName\": \"lastname2\", \"username\": \"username50\", \"email\": \"demo_user@a.com\", \"password\": \"5636\",\"posts\": [\"5abcedbbfb5dfb236c199e81\",\"5abcededfb5dfb236c199e83\"],\"books\": [\"5ad3c175d4f5791f80c86742\",\"5ad3c1d6d4f5791f80c86744\"] }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response Created User:",
          "content": "{\"data\": { \"createdAt\": \"2018-07-29T15:07:59.022Z\", \"updatedAt\": \"2018-07-29T15:07:59.022Z\", \"firstName\": \"user501\", \"lastName\": \"lastname2\", \"username\": \"username501\", \"email\": \"demo_user@a.com\", \"password\": \"5636\", \"posts\": [ \"5abcedbbfb5dfb236c199e81\", \"5abcededfb5dfb236c199e83\" ], \"books\": [ \"5ad3c175d4f5791f80c86742\", \"5ad3c175d4f5791f80c86742\" ], \"_id\": \"5b5dd84f7c124a2554381c90\", \"__v\": 0 } }",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": true,
            "field": "updatedAt",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "firstName",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "lastName",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Books",
            "optional": false,
            "field": "books",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Post",
            "optional": false,
            "field": "post",
            "description": ""
          }
        ]
      }
    },
    "filename": "src/router/UserRouter.ts",
    "groupTitle": "Users",
    "sampleRequest": [
      {
        "url": "https://cesarapp12.herokuapp.com/api/v1/users/"
      }
    ]
  },
  {
    "type": "PUT",
    "url": "/users/:_id",
    "title": "Request Update",
    "version": "0.1.0",
    "name": "put",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": "<p>Must be placed as QueryParam</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "firstName",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "lastName",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "username",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "email",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "password",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Posts",
            "optional": true,
            "field": "posts",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "ObjectId[]",
            "optional": false,
            "field": "post._id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Books",
            "optional": true,
            "field": "books",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "ObjectId[]",
            "optional": false,
            "field": "book._id",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{ \"lastName\": \"lastname21\",\"books\": [ \"5ad3c1d6d4f5791f80c86744\" ] }",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "https://cesarapp12.herokuapp.com/api/v1/users/5a9c4bb05e46d22f64abc15a",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{ \"data\": { \"createdAt\": \"2018-07-29T15:07:59.022Z\", \"updatedAt\": \"2018-07-29T15:07:59.022Z\", \"firstName\": \"user501\", \"lastName\": \"lastname21\", \"username\": \"username501\", \"email\": \"demo_user@a.com\", \"password\": \"5636\", \"posts\": [ \"5abcedbbfb5dfb236c199e81\", \"5abcededfb5dfb236c199e83\" ], \"books\": [ \"5ad3c175d4f5791f80c86742\", \"5ad3c1d6d4f5791f80c86744\" ], \"_id\": \"5b5dd84f7c124a2554381c90\", \"__v\": 0 } }",
          "type": "json"
        }
      ]
    },
    "filename": "src/router/UserRouter.ts",
    "groupTitle": "Users",
    "sampleRequest": [
      {
        "url": "https://cesarapp12.herokuapp.com/api/v1/users/:_id"
      }
    ]
  }
] });
