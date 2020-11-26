#!/usr/bin/env node

let fs = require('fs');
let process = require('process');

let directory = `${process.cwd()}/src`;
let componentName = process.argv[2];

if(!fs.existsSync(directory)){
    console.log("Please be sure that this is a react project")
}else{
    if(componentName === undefined){
        console.log("Error: Please specify the component name.")
    }else{

        if(!fs.existsSync("./src/components")){
            fs.mkdirSync("./src/components");
        }

        let functionName = componentName.charAt(0).toUpperCase() + componentName.slice(1);
    
        let template =
        'import React from "react"; \n\n' + 
        `export default function ${functionName}(){\n` +
        '   return(\n' +
        '       <div>\n' +
        `           <p>This ${functionName} component works! </p> \n` + 
        '       </div> \n'+
        '   );\n' + 
        '}'
    
        if(fs.existsSync(`${directory}/components/${componentName}.jsx`)){
            console.log("Component already exists")
        }else{
            fs.writeFile(`${directory}/components/${componentName}.jsx`, template, function (err) {
                if (err){
                    console.log(err);
                }
                console.log('File is created successfully.');
            }); 
        }

    }
}














