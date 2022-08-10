const args = process.argv;
const sum = function(args) {
  args = args.slice(2);
  return Number(args[0])+ Number(args[1]);
}

console.log(sum(args));
