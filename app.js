console.log("Application started");
 
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