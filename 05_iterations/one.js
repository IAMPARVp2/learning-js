//for

// for (let i = 0; i <= 10; i++) {
//    const element =i;
//    if (element == 5) {
//       console.log("printing 5");
//    }
//    console.log(i);
// }



// for (let i = 1; i <=10; i++) {
//    console.log(`Outer loop `, {i});
//    for (let j = 1; j <= 10; j++) {
//       console.log(i+' X '+j+' = '+ i*j);
//    }   
// }



let myArray =["flash", "batman", "superman"]
console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
   const element = myArray[index];
   console.log(element);
   
}

//break and continue

// for (let i = 0; i <= 20; i++) {
//    if (i == 5) {     
//       console.log("printing 5");
//       break;
//    }
//    console.log(`value of i ${i}`);
   
// }


for (let i = 0; i <= 20; i++) {
   if (i == 5) {     
      console.log("detected 5");
      continue;//ek baar ke liye 5 print hogaa 
   }
   console.log(`value of i ${i}`);
   
}