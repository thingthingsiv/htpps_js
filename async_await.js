// Async/Await = Async = makes a function return a promise
//               Await = makes an async function wait for a promise
//               Allows you write asynchronous code in a synchronous manner 
//               Async doesn't have resolve or reject parameters
//               Enverything after await is placed in an event queue


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
async function doChores(){
    try{
        const walkDogResult = await walkDog();
        console.log(walkDogResult);

        const cleanKitchenResult = await cleanKitchen();
        console.log(cleanKitchenResult);

        const takeOutTrashResult = await takeOutTrash();
        console.log(takeOutTrashResult);

        console.log("You finish all chores")

    }catch(error){
        console.error(error);

    }
    

}
doChores()