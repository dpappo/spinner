const spinner = function (cycles) {
  let timeout = 100;
  let cycleCount = 0;
  const outputItems = ["\r|   ", "\r/   ", "\r-   ", "\r\\   "];

  for (let i = 0; cycles > cycleCount; i++) {
    setTimeout(() => {
      process.stdout.write(outputItems[i]);
    }, timeout);
    timeout += 200;
    if (i === 3) {
      cycleCount++;
      i = 0;
    }
  }
};

spinner(8);
