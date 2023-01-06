// Events module not "event"

const EventEmitter = require("events");
const event = new EventEmitter();

event.on("Click", () => {
  // i am listing with 'on' method
  console.log("I am software developer");
});

event.on("Click", () => {
  console.log("I am again click");
});

event.emit("Click"); // emit nothing but we can say its is addEvent lisner we use in java script, this emit we not call before the event.on method

// ❓ Registering for event with callback parameter

const clickEvent = require("events");
const eventData = new clickEvent();

eventData.on("passParameter", (statusCode, message) => {
  console.log(`Status code is ${statusCode} and response is ${message}`);
});

eventData.emit("passParameter", 200, "ok");
