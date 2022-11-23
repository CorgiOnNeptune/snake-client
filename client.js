const net = require('net');

// Establish connection with game server
const connect = () => {
  const client = net.createConnection({
    host: '165.227.47.243',
    port: 50541
  });
  client.setEncoding('utf8');
  console.log('📨 Connecting ... ');


  client.on('connect', () => {
    console.log('🐍 Connected to Snek 🐍');
    client.write('Name: DOG');
  });


  client.on('data', (data) => {
    console.log(`\n📬 Server message:\n${data}`);
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