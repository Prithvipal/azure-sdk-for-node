// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'lchency4';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://lchency4.westcentralus.batch.azure.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = '3ee7eaf5-6a2f-49fd-953f-d760b5ac2e05';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://lchency4.westcentralus.batch.azure.com:443')
  .get('/jobs/HelloWorldJobNodeSDKTest/tasks?api-version=2018-08-01.7.0')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://lchency4.westcentralus.batch.azure.com/$metadata#tasks\",\"value\":[\r\n    {\r\n      \"id\":\"HelloWorldNodeSDKTestTask\",\"url\":\"https://lchency4.westcentralus.batch.azure.com/jobs/HelloWorldJobNodeSDKTest/tasks/HelloWorldNodeSDKTestTask\",\"eTag\":\"0x8D607A43AB500D1\",\"creationTime\":\"2018-08-21T20:25:24.0548994Z\",\"lastModified\":\"2018-08-21T20:25:26.0475601Z\",\"state\":\"active\",\"stateTransitionTime\":\"2018-08-21T20:25:26.0475601Z\",\"previousState\":\"completed\",\"previousStateTransitionTime\":\"2018-08-21T20:25:25.7617271Z\",\"commandLine\":\"ping 127.0.0.1 -n 20\",\"userIdentity\":{\r\n        \"autoUser\":{\r\n          \"elevationLevel\":\"nonadmin\"\r\n        }\r\n      },\"constraints\":{\r\n        \"maxWallClockTime\":\"P10675199DT2H48M5.4775807S\",\"retentionTime\":\"P10675199DT2H48M5.4775807S\",\"maxTaskRetryCount\":3\r\n      },\"executionInfo\":{\r\n        \"retryCount\":0,\"requeueCount\":0\r\n      }\r\n    },{\r\n      \"id\":\"HelloWorldNodeSDKTestTask2\",\"url\":\"https://lchency4.westcentralus.batch.azure.com/jobs/HelloWorldJobNodeSDKTest/tasks/HelloWorldNodeSDKTestTask2\",\"eTag\":\"0x8D607A43AD67EAE\",\"creationTime\":\"2018-08-21T20:25:25.8802067Z\",\"lastModified\":\"2018-08-21T20:25:26.267051Z\",\"state\":\"active\",\"stateTransitionTime\":\"2018-08-21T20:25:25.8802067Z\",\"commandLine\":\"cmd /c echo hello world\",\"userIdentity\":{\r\n        \"autoUser\":{\r\n          \"elevationLevel\":\"nonadmin\"\r\n        }\r\n      },\"constraints\":{\r\n        \"maxWallClockTime\":\"P10675199DT2H48M5.4775807S\",\"retentionTime\":\"P10675199DT2H48M5.4775807S\",\"maxTaskRetryCount\":3\r\n      },\"executionInfo\":{\r\n        \"retryCount\":0,\"requeueCount\":0\r\n      }\r\n    }\r\n  ]\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'b58729e6-7df8-4ab6-a8f1-f0b16916183a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Tue, 21 Aug 2018 20:25:25 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://lchency4.westcentralus.batch.azure.com:443')
  .get('/jobs/HelloWorldJobNodeSDKTest/tasks?api-version=2018-08-01.7.0')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://lchency4.westcentralus.batch.azure.com/$metadata#tasks\",\"value\":[\r\n    {\r\n      \"id\":\"HelloWorldNodeSDKTestTask\",\"url\":\"https://lchency4.westcentralus.batch.azure.com/jobs/HelloWorldJobNodeSDKTest/tasks/HelloWorldNodeSDKTestTask\",\"eTag\":\"0x8D607A43AB500D1\",\"creationTime\":\"2018-08-21T20:25:24.0548994Z\",\"lastModified\":\"2018-08-21T20:25:26.0475601Z\",\"state\":\"active\",\"stateTransitionTime\":\"2018-08-21T20:25:26.0475601Z\",\"previousState\":\"completed\",\"previousStateTransitionTime\":\"2018-08-21T20:25:25.7617271Z\",\"commandLine\":\"ping 127.0.0.1 -n 20\",\"userIdentity\":{\r\n        \"autoUser\":{\r\n          \"elevationLevel\":\"nonadmin\"\r\n        }\r\n      },\"constraints\":{\r\n        \"maxWallClockTime\":\"P10675199DT2H48M5.4775807S\",\"retentionTime\":\"P10675199DT2H48M5.4775807S\",\"maxTaskRetryCount\":3\r\n      },\"executionInfo\":{\r\n        \"retryCount\":0,\"requeueCount\":0\r\n      }\r\n    },{\r\n      \"id\":\"HelloWorldNodeSDKTestTask2\",\"url\":\"https://lchency4.westcentralus.batch.azure.com/jobs/HelloWorldJobNodeSDKTest/tasks/HelloWorldNodeSDKTestTask2\",\"eTag\":\"0x8D607A43AD67EAE\",\"creationTime\":\"2018-08-21T20:25:25.8802067Z\",\"lastModified\":\"2018-08-21T20:25:26.267051Z\",\"state\":\"active\",\"stateTransitionTime\":\"2018-08-21T20:25:25.8802067Z\",\"commandLine\":\"cmd /c echo hello world\",\"userIdentity\":{\r\n        \"autoUser\":{\r\n          \"elevationLevel\":\"nonadmin\"\r\n        }\r\n      },\"constraints\":{\r\n        \"maxWallClockTime\":\"P10675199DT2H48M5.4775807S\",\"retentionTime\":\"P10675199DT2H48M5.4775807S\",\"maxTaskRetryCount\":3\r\n      },\"executionInfo\":{\r\n        \"retryCount\":0,\"requeueCount\":0\r\n      }\r\n    }\r\n  ]\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'b58729e6-7df8-4ab6-a8f1-f0b16916183a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Tue, 21 Aug 2018 20:25:25 GMT',
  connection: 'close' });
 return result; }]];