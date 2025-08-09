
const myObject = {
    js: "java script",
    cpp: 'cpp',
    rb: 'ruby',
    py: 'python'
}

//now to print objects we can use forin loop
for (const key in myObject) {
   console.log(`${key} shortcut for ${myObject[key]}`); 
}

//now we are checking that forin works fro arrays or not?

const arr =['p', 'a', 'r', 'v']

for (const key in arr) {
    console.log(`${key} is for ${arr[key]}`);
    
}   