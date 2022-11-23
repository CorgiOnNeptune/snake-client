const net = require('net');

// Establish connection with game server
const connect = () => {
  const client = net.createConnection({
    host: '165.227.47.243',
    port: 50541
  });
  console.log('📨 Connecting ... ');

  client.setEncoding('utf8');

  client.on('connect', () => {
    console.log('🐍 Connected to Snek 🐍');
    client.write('Name: DOG');
  });

  client.on('data', (data) => {
    console.log(`📬 Server message:\n${data}`);
  });


  client.on('end', () => {
    console.log('💀 Game over!');
  });

  return client;
};

module.exports = {
  connect,
};