const net = require('net');

// Establish connection with game server
const connect = () => {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541
  });

  conn.setEncoding('utf8');

  conn.on('connect', () => {
    console.log('🐍 Connected to Snek 🐍');
  });

  conn.on('data', (data) => {
    console.log(`${data}`);
  });


  conn.on('end', () => {
    console.log('Game over!');
  });

  return conn;
};

module.exports = {
  connect,
};