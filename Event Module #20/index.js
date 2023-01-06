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
