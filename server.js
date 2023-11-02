import { createServer } from "node:http";
import Chance from "chance";

export const server = createServer((request, response) => {
  if (request.url === "/person") {
    response.statusCode = 200;

    const responseString = makeRandomString();

    response.end(responseString);
  } else {
    response.statusCode = 404;
    response.end("Nothing found!");
  }
});

function makeRandomString() {
  const chance = new Chance();
  const name = chance.name();
  const age = chance.age({ type: "adult" });
  //Alternative für age
  //const age = chance.integer({ min: 2, max: 18 });
  const profession = chance.profession();

  return `Hello, my name is ${name} and I am ${age} years old. I am a ${profession}.`;
}
