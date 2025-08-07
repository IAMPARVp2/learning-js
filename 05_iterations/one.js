//for

// for (let i = 0; i <= 10; i++) {

//    const element =i;

//    if (element == 5) {
//       console.log("printing 5");
      
//    }
//    console.log(i);
   
    
// }

for (let i = 1; i <=10; i++) {
   console.log(`Outer loop `, {i});
   for (let j = 1; j <= 10; j++) {
      
      console.log(i+' X '+j+' = '+ i*j);
   }
   
}

let myArray =["flash", "batman", "superman"]