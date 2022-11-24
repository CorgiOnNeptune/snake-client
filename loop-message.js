const loopMessages = (msg1, msg2, conn) => {
  setTimeout(() => {
    process.stdout.write(`\nSend Message: ${msg1}\n`);
    conn.write(`Say: ${msg1}`);
    setTimeout(() => {
      process.stdout.write(`\nSend Message: ${msg2}\n`);
      conn.write(`Say: ${msg2}`);
    }, 3000);
  }, 0);
};

const stopLoop = (ID) => {
  process.stdout.write(`\nEnding Message Loop\n`);
  clearInterval(ID);
  ID = null;
};

module.exports = {
  loopMessages,
  stopLoop,
};