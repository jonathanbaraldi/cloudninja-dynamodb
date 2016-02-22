var AWS = require("aws-sdk");
    
AWS.config.update(
                    {
                      region:'us-east-1'
                    }
);

    
var dynamodb = new AWS.DynamoDB();  

    var ProductCatalog = {
      TableName: 'ProductCatalog',
      KeySchema: [ 
          { 
              AttributeName: 'Id', KeyType: 'HASH'
          }
      ],
      AttributeDefinitions: [ 
          {   AttributeName: 'Id', AttributeType: 'N' }
      ],
      ProvisionedThroughput: { 
          ReadCapacityUnits: 1, 
          WriteCapacityUnits: 1, 
      }
  };
  dynamodb.createTable(ProductCatalog, function(err, data) {
      if (err) {
        console.log("ERROR");
        console.log(err);
      } else { 
        console.log("Tabela ProductCatalog criada com sucesso!");
      }

  });


  var Forum = {
      TableName: 'Forum',
      KeySchema: [ 
          { 
              AttributeName: 'Name', KeyType: 'HASH'
          }
      ],
      AttributeDefinitions: [ 
          {   AttributeName: 'Name', AttributeType: 'S' }
      ],
      ProvisionedThroughput: { 
          ReadCapacityUnits: 1, 
          WriteCapacityUnits: 1, 
      }
  };
  dynamodb.createTable(Forum, function(err, data) {
      if (err) {
        console.log("ERROR");
        console.log(err);
      } else { 
        console.log("Tabela Form criada com sucesso!");
      }

  });


  var Thread = {
      TableName: 'Thread',
      KeySchema: [ 
          { 
              AttributeName: 'ForumName', KeyType: 'HASH'
          },
          { 
              AttributeName: 'Subject', KeyType: 'RANGE', 
          }
      ],
      AttributeDefinitions: [ 
          {   AttributeName: 'ForumName', AttributeType: 'S' },
          {   AttributeName: 'Subject', AttributeType: 'S' },
      ],
      ProvisionedThroughput: { 
          ReadCapacityUnits: 1, 
          WriteCapacityUnits: 1, 
      }
  };
  dynamodb.createTable(Thread, function(err, data) {
      if (err) {
        console.log("ERROR");
        console.log(err);
      } else { 
        console.log("Tabela Thread criada com sucesso!");
      }
  });


  var Reply = {
      TableName: 'Reply',
      KeySchema: [ 
          { 
              AttributeName: 'Id', KeyType: 'HASH'
          },
          { 
              AttributeName: 'ReplyDateTime', KeyType: 'RANGE', 
          }
      ],
      AttributeDefinitions: [ 
          {   AttributeName: 'Id', AttributeType: 'S' },
          {   AttributeName: 'ReplyDateTime', AttributeType: 'S' },
          {   AttributeName: 'PostedBy', AttributeType: 'S' }

      ],
      ProvisionedThroughput: { 
          ReadCapacityUnits: 1, 
          WriteCapacityUnits: 1, 
      },
      LocalSecondaryIndexes: [ 
          { 
              IndexName: 'PostedBy-Message-Index', 
              KeySchema: [
                  {   AttributeName: 'Id', KeyType: 'HASH' },
                  {   AttributeName: 'PostedBy', KeyType: 'RANGE' }
              ],
              Projection: { 
                  ProjectionType: 'KEYS_ONLY' 
              }
          }
      ]
  };
  dynamodb.createTable(Reply, function(err, data) {
      if (err) {
        console.log("ERROR");
        console.log(err);
      } else { 
        console.log("Tabela Reply criada com sucesso!");
      }
  });
