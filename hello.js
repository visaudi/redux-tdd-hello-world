function hello(name) {
  if (name === undefined) {
    return "Hello world!";
  }
  return `Hello ${name}!`;
}

module.exports = hello;
