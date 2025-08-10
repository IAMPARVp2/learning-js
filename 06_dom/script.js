// let h1 = document.querySelector("h1");
// h1.addEventListener("click", () => {
//     h1.style.color = "red";
// });

// let para = document.querySelector("p");

// // Define the event handler function separately
// const handleParaDoubleClick = () => {
//     para.style.color = "red";
// };
//-------------------------------------------------------
// Add the event listener using the named function
// para.addEventListener("dblclick", handleParaDoubleClick);
//-----------------------------------------------------------------------------------------
// Now, you can remove it using the same named function reference
// For demonstration, let's remove it after a short delay, or based on another action
// For now, it's just here to show the correct syntax for removal.
// In a real application, you'd trigger this removal based on some user interaction or condition.

// setTimeout(() => {
//     para.removeEventListener("dblclick", handleParaDoubleClick);
//     console.log("Double-click listener removed from paragraph after 3 seconds.");
// }, 3000); // Removes the listener after 3 seconds


// printing on window---------------------------------------------------------


let h1 = document.querySelector("h1")
window.addEventListener("keydown",function(delts){
    if (delts.key!==" ") {
        h1.textContent  = delts.key
    }
    else{
        h1.textContent = "SPC"
    }
    
})