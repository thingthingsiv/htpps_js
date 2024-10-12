// callback Hell = Situation in Javascript where callbacks are nested within other call back to the
//                 degree where the code is difficult to read. old pattern to handle asynchronous function
//                 Use Promise + async/await to avoide callback hell


function task1(callback){
    setTimeout(() =>{
        console.log("Task 1 complete ");
        callback();
    }, 2000);
    
}
function task2(callback){
    setTimeout(() =>{
        console.log("Task 2 complete ");
        callback();
    }, 1000);
    
}
function task3(callback){
    setTimeout(() =>{
        console.log("Task 3 complete ");
        callback();
    }, 3000);
    
}
function task4(callback){
    setTimeout(() =>{
        console.log("Task 4 complete ");
        callback();
    }, 1500);
    
}

task1(() => {
    task2(() => {
        task3(() =>{
            task4(() =>console.log("All tasks complete"));
            
        })
    });
})
