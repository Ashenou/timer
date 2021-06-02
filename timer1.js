//process.stdout.write("\x07");

const timer = (array) => {
  let sortedArray = array
    .slice(2)
    .filter((element) => !isNaN(element))
    .filter((element) => element > 0)
    .sort((a, b) => a - b);
  let initialCounter = 0;

  for (let counter = 0; counter < sortedArray.length; counter++) {
    setTimeout(
      () => process.stdout.write("\x07"),
      (initialCounter += 1000 * sortedArray[counter])
    );
  }
};

timer(process.argv);
