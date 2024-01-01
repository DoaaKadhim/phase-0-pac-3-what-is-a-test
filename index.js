const name = "Joe";
const height = 74;
const message = `${name} is ${height} inches tall`;

module.exports = {name, height, message};

function sayHelloTo(greeting,firstName){
    console.log(`${greeting} , ${firstName}`);
};

//sayHelloTo("Good Morning","Doaa");
function say(greeting, firstName) {
    return `${greeting}, ${firstName}!`;
  }
  say("Hello","Lize");

  function say(greeting, firstName) {
    console.log( `${greeting}, ${firstName}!`);
  }
  console.log(say("Hello","Doaa"))



function say(greeting ,firstName){
    console.log("I was called");
    return`${greeting},${firstName}`;
}

function add(x, y) {
    return x+y ;
  }
  console.log(add(1, 2));
