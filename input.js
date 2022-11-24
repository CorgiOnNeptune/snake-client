const {
  MOVE_KEYS,
} = require('./constants');

const {
  loopMessages,
  stopLoop,
} = require('./loop-message');

let intervalID;
let connection;

// Interface to handle user input
const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  stdin.on('data', handleUserInput);

  return stdin;
};

const handleUserInput = (key) => {
  if (key === '\u0003') {
    console.log('\nDisconnecting...');
    process.exit();
  }

  if (key === 'w') {
    process.stdout.write(`\r${MOVE_KEYS.w}   `);
    connection.write(MOVE_KEYS.w);
  }
  if (key === 'a') {
    process.stdout.write(`\r${MOVE_KEYS.a} `);
    connection.write(MOVE_KEYS.a);
  }
  if (key === 's') {
    process.stdout.write(`\r${MOVE_KEYS.s} `);
    connection.write(MOVE_KEYS.s);
  }
  if (key === 'd') {
    process.stdout.write(`\r${MOVE_KEYS.d} `);
    connection.write(MOVE_KEYS.d);
  }

  if (key === 'v') {
    process.stdout.write(`\nSend Message: sssssss\n`);
    connection.write('Say: ssssssss');
  }

  if (key === 'g') {
    process.stdout.write(`\nSend Message: ??????\n`);
    connection.write('Say: ??????');
  }

  if (key === 'f') {
    process.stdout.write(`\nSend Message: RIP\n`);
    connection.write('Say: RIP');
  }

  if (key === 'b') {
    process.stdout.write(`\nSend Message: Woof woof\n`);
    connection.write('Say: Woof woof');
  }
  
  if (key === 't') {
    const message1 = '@Diamonds on Neptune';
    const message2 = 'Follow on Spotify!';

    // Play first message with no delay
    loopMessages(message1, message2, connection);

    intervalID = setInterval(() => {
      loopMessages(message1, message2, connection);
    }, 6000);
  }

  if (key === 'y') {
    stopLoop(intervalID);
  }
};

module.exports = {
  setupInput,
};