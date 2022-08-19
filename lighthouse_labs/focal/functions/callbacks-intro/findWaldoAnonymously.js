const findWaldo = (names, found) => {
  names.forEach(function(name, index) {
    if (name === "Waldo") {
      found(name, index);   // execute callback
    }
  })
};

findWaldo(["Alice", "Bob", "Waldo", "Winston"], (name, index) => console.log(`Found ${name} at index ${index}!`));