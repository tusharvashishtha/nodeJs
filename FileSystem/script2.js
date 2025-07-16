// create file 
// append file
// read file
// delete file
// create folder
// delete folder
// read folder 


//CREATE FILE

const fs = require("fs").promises;

// fs.writeFile("./abcd.txt", "Hello node js", function(err){
//     if(err) console.log(err)
//     else console.log("your file is created")
// })

// fs.appendFile("./abcd.txt", " hello backend",  function(err){
//     if(err) console.log(err)
//         else console.log("A new text is added to you file")
// })

// fs.readFile("./abcd.txt", "utf-8" ,function(err, file){
//     if(err) console.log(err)
//         else console.log(file)
// })

// fs.unlink("./abcd.txt", function(err){
//     if(err) console.log(err)
// })


//create a folder
// fs.mkdir("./polo", function(err){
//     if(err) console.log(err)
// })

// fs.rm("polo", {recursive: true} ,function(err){
//     if(err) console.log(err)
// })

// fs.readdir("polo", {withFileTypes: true} ,function(err, file) {
//     if(err) console.log(err)
//         else console.log(file)
// })


// async function copyText() {
//     try{

//         await fs.writeFile('./abcd.txt', 'hii node js');
//         const data = await fs.readFile("./abcd.txt", "utf-8")
//         await fs.writeFile("./copyofabcd.txt", data)
//     }catch(err){
//         console.log(err)
//     }
// }
// copyText()

