const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const path = require('path');

// Load the protobuf
const PROTO_PATH = path.join(__dirname, 'your_service.proto');
const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true
});
const yourServiceProto = grpc.loadPackageDefinition(packageDefinition).yourService;

// Increase the maximum message size to 100MB
const maxMessageSize = 100 * 1024 * 1024;

const client = new yourServiceProto.YourService('localhost:50051', grpc.credentials.createInsecure(), {
  'grpc.max_send_message_length': maxMessageSize,
  'grpc.max_receive_message_length': maxMessageSize
});

// Now you can use the client to make requests
// client.yourMethod(request, (error, response) => {
//   if (error) {
//     console.error(error);
//   } else {
//     console.log(response);
//   }
// });