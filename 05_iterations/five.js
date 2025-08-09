const arr =['parv', 'rahul', 'jain', 'mummy'];
//----------------------------
// arr.forEach(function (val){
//     console.log(val);
    
// })
//---------------------------
// arr.forEach( (item)=>{
//     console.log(item);
// })
//-----------------------------------
// function printMe(item){
//     console.log(item);
// }
// arr.forEach(printMe)
//------------------------------

// arr.forEach((item, index, arr)=>{
//     console.log(item, index, arr)
// })

//---------------------------------------------
const myCoding = [
    {
    languageName: "javascript",
    languageFileName: "js"
    },
    {
    languageName: "python",
    languageFileName: "py"
    },
    {
    languageName: "ruby",
    languageFileName: "rb"
    }
]

myCoding.forEach((item)=>{
    console.log(item.languageName);
})