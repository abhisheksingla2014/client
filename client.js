const {RecFilter} = require('./recUnit_pb.js');
const {Date} = require('./google/type/date_pb.js');
const {RecUnitServiceClient} = require('./recUnit_grpc_web_pb.js');

var client = new RecUnitServiceClient('http://localhost:9595',
                               null, null);

// server streaming call
var streamRequest = new RecFilter();
streamRequest.setComponentIdsList([1,2,3]);
streamRequest.setRecTypeFamilyId(1);
var date = new Date()
date.setMonth(1);
date.setDay(1);
date.setYear(2021);
streamRequest.setRecDate(date);

var stream = client.getRecUnitsForFilterStream(streamRequest, {});
stream.on('data', (response) => {
  console.log(response.toObject());
});
stream.on('error', (err) => {
  console.log(`Unexpected stream error: code = ${err.code}` +
              `, message = "${err.message}"`);
});
