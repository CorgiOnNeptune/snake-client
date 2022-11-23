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
  const up = 'Move: up';
  const left = 'Move: left';
  const down = 'Move: down';
  const right = 'Move: right';

  if (key === '\u0003') {
    process.exit();
  }

  if (key === 'w') {
    process.stdout.write(`\r${up}   `);
    connection.write(up);
  }
  if (key === 'a') {
    process.stdout.write(`\r${left} `);
    connection.write(left);
  }
  if (key === 's') {
    process.stdout.write(`\r${down} `);
    connection.write(down);
  }
  if (key === 'd') {
    process.stdout.write(`\r${right} `);
    connection.write(right);
  }
};

module.exports = {
  setupInput,
};