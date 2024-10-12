// JSON = ( Javascript object notation) data-interchange format 
//        Used for exchanging data between a server and a web application
//        Json files {key:value} or [value1, value2, value3]

//        JSON.stringjfy() = converts a JS object to a JSON string
//        JSON.parse() = converts a JSON string to a JS object 


const name =["Spongebob","Patrick","Squidward","Sandy"];
const person = {
    "name":"Spongebob",
    "age": 30,
    "isEmployed": true,
    "hobbies": ["Jellyfishing","Karate","Cooking"]
};

const jsonString = JSON.stringify(person);
console.log(jsonString);