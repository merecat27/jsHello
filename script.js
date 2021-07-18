// greet() returns some kind of hello message
function greet() {
  let hello = Math.floor(Math.random()*5);
  let greeting = "";
  switch(hello) {
    case 0:
      greeting = "Hello!";
      break;
    case 1:
      greeting = "G'day, mate!";
      break;
    case 2:
      greeting = "Hi there!";
      break;
    case 3:
      greeting = "Greetings, traveller!";
      break;
    case 4:
      greeting = "Howdy!";
      break;
  }
  return greeting;
}

// number() returns a random number [0,100)
function number() {
  return Math.floor(Math.random()*100);
}

// song() returns a random song to listen to
function song() {
  let rand = Math.floor(Math.random()*20);
  let url = "";
  switch (rand) {
    case 0:
      url = "https://open.spotify.com/track/6OtwCi02MQgiKlkB2ow5g9";
      break;
    case 2:
      url = "https://open.spotify.com/track/0lx2eqqsCRaTHlUU0PPZ5O";
      break;
    case 3:
      url = "https://open.spotify.com/track/0zvvCY9Mbk2CRRHLtS7ZYG";
      break;
    case 4:
      url = "https://open.spotify.com/track/15bl1IsxHFFHe8W3zC5uKL";
      break;
    case 5:
      url = "https://open.spotify.com/track/6QCjFVTkT7gUwx8nqm4wk0";
      break;
    case 6:
      url = "https://open.spotify.com/track/4FmxDWqJouOZkEmfl74dm3";
      break;
    case 7:
      url = "https://open.spotify.com/track/1DFzeVcH7MiA8be47T0kdf";
      break;
    case 8:
      url = "https://open.spotify.com/track/4pTA1p0hQHbeiuPQFBZr33";
      break;
    case 9:
      url = "https://open.spotify.com/track/6rsh09yMR1IAtNswBImJdE";
      break;
    case 10:
      url = "https://open.spotify.com/track/1eguLuIYjtFHkKRbtOjE9c";
      break;
    case 11:
      url = "https://open.spotify.com/track/2plihDAfGT5w8vCxcXjztO";
      break;
    case 12:
      url = "https://open.spotify.com/track/6WnV92r2BsSUzBJycTgQC9";
      break;
    case 13:
      url = "https://open.spotify.com/track/7MJ1afXfE8WBiftYUV8Va6";
      break;
    case 14:
      url = "https://open.spotify.com/track/4rRNKSTTqgIhIets5apdMO";
      break;
    case 15:
      url = "https://open.spotify.com/track/6i7NxkFQTHLcFoxaOC6Rz6";
      break;
    case 16:
      url = "https://open.spotify.com/track/39KWdkmEQZKdvHfuJPARxC";
      break;
    case 17:
      url = "https://open.spotify.com/track/5V361iSnXUGvBSKr36ySl0";
      break;
    case 18:
      url = "https://open.spotify.com/track/4U6o6RfNU9IJDhzRePeKDC";
      break;
    case 19:
      url = "https://open.spotify.com/track/20uxrdhmTo3mWhCZlo21d2";
      break;
  }
  return url;
}

// combine() returns the formatted message to print
function combine() {
  return greet() + "\nHere's a random number: " + number() + "\nCheck out this song: " + song();
}

console.log(combine());
