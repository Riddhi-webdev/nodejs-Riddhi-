const fs = require("fs");
fs.writeFile("hello.txt",
"today we are learning file system", (error)=>{
if(error){
console.log("error in creating file")
}
else {
console.log("file is created")
}
})
fs.readFile("riddhi.txt" , "utf-8" , (error,data)=>{
    if(error){
        console.log("error is loading")
    }
    else{
        console.log("file data:" ,  data)
    }
})
