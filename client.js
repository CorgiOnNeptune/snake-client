const { IP, PORT, net } = require('./constants');

// Establish connection with game server
const connect = () => {
  const client = net.createConnection({
    host: IP,
    port: PORT
  });
  client.setEncoding('utf8');
  console.log('📨 Connecting ... ');


  client.on('connect', () => {
    console.log('🐍 Connected to Snek 🐍');
    client.write('Name: DOG');
  });


  client.on('data', (data) => {
    console.log(`\r📬 Server message:\n${data}`);
  });


  client.on('end', () => {
    console.log('\r💀 Game over!');
    process.exit();
  });

  return client;
};

module.exports = {
  connect,
};