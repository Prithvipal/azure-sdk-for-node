// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'East US 2';
  process.env['AZURE_TEST_RESOURCE_GROUP'] = 'xplattestadlarg05';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'ce4a7590-4722-4bcf-a2c6-e473e9f11778';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla8391?api-version=2016-11-01')
  .reply(200, "{\"properties\":{\"firewallState\":\"Disabled\",\"firewallAllowAzureIps\":\"Disabled\",\"debugDataAccessLevel\":\"All\",\"firewallRules\":[],\"defaultDataLakeStoreAccount\":\"xplattestadls8812\",\"dataLakeStoreAccounts\":[{\"properties\":{\"suffix\":\"azuredatalakestore.net\"},\"name\":\"xplattestadls8812\"}],\"publicDataLakeStoreAccounts\":[{\"properties\":{\"suffix\":\"azuredatalakestore.net\"},\"name\":\"adltrainingsampledata\"},{\"properties\":{\"suffix\":\"azuredatalakestore.net\"},\"name\":\"ghinsights\"}],\"storageAccounts\":[],\"maxDegreeOfParallelism\":30,\"maxJobCount\":3,\"systemMaxDegreeOfParallelism\":100,\"systemMaxJobCount\":20,\"maxDegreeOfParallelismPerJob\":30,\"minPriorityPerJob\":1,\"computePolicies\":[],\"queryStoreRetention\":30,\"hiveMetastores\":[],\"currentTier\":\"Consumption\",\"newTier\":\"Consumption\",\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla8391.azuredatalakeanalytics.net\",\"accountId\":\"3c0c8e99-02e5-40f5-bec0-7b97f622ea9c\",\"creationTime\":\"2017-12-12T06:40:35.8008952Z\",\"lastModifiedTime\":\"2017-12-12T06:40:35.8008952Z\"},\"location\":\"eastus2\",\"id\":\"/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla8391\",\"name\":\"xplattestadla8391\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1267',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '0f21bdf1-fada-47de-9833-268b16bf6b90',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14328',
  'x-ms-correlation-request-id': 'd7f6ad24-ea84-409c-8114-46dba7f1b247',
  'x-ms-routing-request-id': 'EASTASIA:20171212T064153Z:d7f6ad24-ea84-409c-8114-46dba7f1b247',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 12 Dec 2017 06:41:52 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla8391?api-version=2016-11-01')
  .reply(200, "{\"properties\":{\"firewallState\":\"Disabled\",\"firewallAllowAzureIps\":\"Disabled\",\"debugDataAccessLevel\":\"All\",\"firewallRules\":[],\"defaultDataLakeStoreAccount\":\"xplattestadls8812\",\"dataLakeStoreAccounts\":[{\"properties\":{\"suffix\":\"azuredatalakestore.net\"},\"name\":\"xplattestadls8812\"}],\"publicDataLakeStoreAccounts\":[{\"properties\":{\"suffix\":\"azuredatalakestore.net\"},\"name\":\"adltrainingsampledata\"},{\"properties\":{\"suffix\":\"azuredatalakestore.net\"},\"name\":\"ghinsights\"}],\"storageAccounts\":[],\"maxDegreeOfParallelism\":30,\"maxJobCount\":3,\"systemMaxDegreeOfParallelism\":100,\"systemMaxJobCount\":20,\"maxDegreeOfParallelismPerJob\":30,\"minPriorityPerJob\":1,\"computePolicies\":[],\"queryStoreRetention\":30,\"hiveMetastores\":[],\"currentTier\":\"Consumption\",\"newTier\":\"Consumption\",\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla8391.azuredatalakeanalytics.net\",\"accountId\":\"3c0c8e99-02e5-40f5-bec0-7b97f622ea9c\",\"creationTime\":\"2017-12-12T06:40:35.8008952Z\",\"lastModifiedTime\":\"2017-12-12T06:40:35.8008952Z\"},\"location\":\"eastus2\",\"id\":\"/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla8391\",\"name\":\"xplattestadla8391\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1267',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '0f21bdf1-fada-47de-9833-268b16bf6b90',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14328',
  'x-ms-correlation-request-id': 'd7f6ad24-ea84-409c-8114-46dba7f1b247',
  'x-ms-routing-request-id': 'EASTASIA:20171212T064153Z:d7f6ad24-ea84-409c-8114-46dba7f1b247',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 12 Dec 2017 06:41:52 GMT',
  connection: 'close' });
 return result; }]];