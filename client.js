const { IP, PORT, net } = require('./constants');

// Establish connection with game server
const connect = () => {
  const client = net.createConnection({
    host: IP,
    port: PORT
  });
  client.setEncoding('utf8');
  console.log('šØ Connecting ... ');


  client.on('connect', () => {
    console.log('š Connected to Snek š');
    client.write('Name: DOG');
  });


  client.on('data', (data) => {
    console.log(`\rš¬ Server message:\n${data}`);
  });


  client.on('end', () => {
    console.log('\rš Game over!');
    process.exit();
  });

  return client;
};

module.exports = {
  connect,
};