const sentence = "hello there from lighthouse labs";

// for (const char of sentence) {
//   process.stdout.write(`${char}\n`);
// }

setTimeout(() => {
  for (const char of sentence) {
    process.stdout.write(`${char}\n`);
  }
  
}, 50) // <= 1s delay to make it noticeable. Can dial it down later.