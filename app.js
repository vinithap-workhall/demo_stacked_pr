console.log("Application started");
 
console.log("Login before");
function createUser(name) {
  return {
    name: name
  };
}
console.log(createUser("Vinitha"));

function loginUser(name) {
  console.log(`${name} logged in`);
}

loginUser("Vinitha");