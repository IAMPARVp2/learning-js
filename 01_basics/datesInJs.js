// ------------------------
// JavaScript Date Examples
// ------------------------

// Create a new Date object with current date and time
let myDate = new Date();

// Output different formats of the date
// console.log(myDate.toString());       // Full date string
// console.log(myDate.toDateString());   // Only the date part
// console.log(myDate.toLocaleString()); // Local date and time
// console.log(typeof myDate);           // Type is 'object'

// ------------------------
// Creating custom Date objects
// ------------------------

// Create a specific date: Jan 23, 2023 (month is 0-indexed: Jan = 0)
// let myCreatedDate = new Date(2023, 0, 23);

// Create date and time: Jan 23, 2023, 05:03 AM
// let myCreatedDate = new Date(2023, 0, 23, 5, 3);

// ISO format (preferred): YYYY-MM-DD
// let myCreatedDate = new Date("2023-01-14");

// MM-DD-YYYY format (also valid)
let myCreatedDate = new Date("01-14-2023");

// Print localized date and time
// console.log(myCreatedDate.toLocaleString());

// ------------------------
// Working with Timestamps
// ------------------------

// Current timestamp in milliseconds since Jan 1, 1970
let myTimeStamp = Date.now();

// console.log(myTimeStamp);                 // Current timestamp
// console.log(myCreatedDate.getTime());     // Timestamp for custom date
// console.log(Math.floor(Date.now() / 1000)); // Current timestamp in seconds

// ------------------------
// Getting date components
// ------------------------

let newDate = new Date();

console.log(newDate);              // Full date object
console.log(newDate.getMonth() + 1); // Month (add 1 because it's 0-based)
console.log(newDate.getDay());       // Day of week (0 = Sunday, 6 = Saturday)

// ------------------------
// Formatting specific parts of the date
// ------------------------

let formattedWeekday = newDate.toLocaleString('default', {
    weekday: "long",              // Returns full weekday name (e.g., "Saturday")
});

console.log(formattedWeekday);
