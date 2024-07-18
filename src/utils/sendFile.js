import multer from "multer";
import path from "path";

let limits={
    fileSize: 1024*1024*2,
    // the maximum file size in bytes
    // 1 kilobyte equal to 1024 bytes
};
let storage = multer.diskStorage({
    destination: (req,file,cb)=>{
        let staticFolder="./public";
        cb(null,staticFolder)
    },
    //  "./" means rootFolder (main folder). 
    // You must make public folder manually or it will throw error like no such file or directory.
    // destination gives the folder location where the file is placed.
    filename:(req,file,cb)=>{
        // any file has key and values.
        // key is called file name.
        // file is called original name.
        let fileName= Date().now + file.originalname
        cb(null,fileName);
        // fileName gives the name(title) of the file
    },
});

let fileFilter=(req,file,cb)=>{
    let validExtension=[
        '.jpg',
        '.JPG',
        '.jpeg',
        '.JPEG',
        '.png',
        '.PNG',
        '.svg',
        '.doc',
        '.pdf',
        '.mp4'
        
    ];


let originalName=file.originalname;
let originalExtension=path.extname(originalName);

// path module is inbuilt module(package) of js

let isValidExtension=validExtension.includes(originalExtension);

if(isValidExtension){
    cb(null,true);
    // true means pass such type of file
    // null represent error since there is no error is null
}
    else{
        cb(new Error("File is not supported"),false);
        // false means don't pass such type of file.
    }
};

const upload = multer({
    storage:storage,
    // we define the location in the server where the file is stored and control the fileName.
    fileFilter:fileFilter,
    //  Filter the file according to extensions.
    limits:limits
    // filter file limit according to limits
});

export default upload;