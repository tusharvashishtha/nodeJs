// const fs = require('fs');
// fs.readFile('Modules/FS/file1.txt', 'utf-8', (err, data)=> {
//     if(err){
//         console.log(err.message)
//         return;
//     }
//     console.log(data);
//     if(data){
//         fs.readFile('Modules/FS/file2.txt', 'utf-8', (err,data)=> {
//             if(err){
//                 console.log(err.message)
//                 return;
//             }
//             console.log(data)
//             if(data){
//                 fs.readFile('Modules/FS/file3.txt', 'utf8', (err, data)=> {
//                     if(err){
//                         console.log(err.message)
//                         return;
//                     }
//                     else{
//                         console.log(data)
//                     }
//                 })
//             }
//         })
//     }
// })


const fsPromise = require('fs').promises;

const readFile = async () => {
    const data = await fsPromise.readFile('Modules/FS/file1.txt', 'utf-8');
    console.log(data)
}

readFile()