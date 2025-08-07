// Immediately Invoked Function Expression

function chai() {
    console.log(`DB CONNECTED 1`);
}

chai();

// To immediately invoke the upper function We use iife So that the global scope will not get polluted

//iife function
(function chai() {
    console.log(`DB CONNECTED 2`);
})();


//iife in arrow function
(()=> {
    console.log(`DB CONNECTED 3`);
})();



// So in interview don't say that the function that can be called immediately are known as immediately invoked function expression

// Global scope key pollution say problems so humne if he ko us pollution ko atane Kiliye Uzkean Ya Hussain Bachan Kelly Uskiya

// insted say -- Sometimes we face problems because of Global  because it gets polluted to keep it safe from that pollution we use iife functions

// The syntax of iife functions is ()();
//()()  one is for function declaration and another is for function execution
// And here in this type of functions semicolon ; is necessary because you have to end iife function


// Take these type of functions as normal functions only 
// Like if you want to pass the parameters then write them in Declaration part and if you want to give the arguments then write them in the execution part
((name)=> {
    console.log(`DB CONNECTED 4 ${name}`);
})('parvjain');
