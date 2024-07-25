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

const server = new grpc.Server({
  'grpc.max_send_message_length': maxMessageSize,
  'grpc.max_receive_message_length': maxMessageSize
});

// Add your service to the server
server.addService(yourServiceProto.YourService.service, {
  // Implement your service methods here
});

server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), () => {
  server.start();
});