const IP = '165.227.47.243';
const PORT = 50541;
const MOVE_KEYS = {
  'w': 'Move: up',
  'a': 'Move: left',
  's': 'Move: down',
  'd': 'Move: right'
};
const net = require('net');

module.exports = {
  IP,
  PORT,
  MOVE_KEYS,
  net,
};
