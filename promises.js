//  Promise = An Object that manages asynchronous operations wrap a promise object around {asynchronous code}
//            "I promise to return a value"
//            "PENDING -> RESOLVED or REJECTED"
//             new Promise((resolve, reject)=> {asynchronus code})


function walkDog(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dogwalked =true;
            if(dogwalked)
            {
                resolve("You walk the dog");
            }else{
                reject("You didn't walk the dog");
            }
            
        },1500);

    })   
}
function cleanKitchen(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const cleanKitchen = false;
            if(cleanKitchen){
                resolve("You clean the kitchen");
            }else{
                reject("You didn't clean the kitchen");
            }
            
        },2500);
    })
   
}
function takeOutTrash(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const takeOutTrash = true;
            if(takeOutTrash){
                resolve("You take out the trash");
            }else{
                reject("You didn't take out the trash");
            }
            
        },500);

    })
    
}
walkDog().then(value => {console.log(value); return cleanKitchen()})
         .then(value => {console.log(value);return takeOutTrash()})
         .then(value => {console.log(value); console.log("You finished all the chore")})
         .catch(error => console.error(error));
        