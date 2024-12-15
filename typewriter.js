const sentence = "hello there from lighthouse labs";
let delayValue = 0;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char + " ");
  }, delayValue); // <= 1s delay to make it noticeable. Can dial it down later.
  delayValue += 50;
}
process.stdout.write("\n");
