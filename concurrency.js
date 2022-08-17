
async function init() {
    numberOfTasks = 20;
    const concurrencyMax = 4 ;
    const taskList = [...Array(numberOfTasks)].map(() =>
                    [...Array(~~(Math.random() * 10 + 3))].map(() =>
                    String.fromCharCode(Math.random() * (123 - 97) + 97)
                    ).join('') )
    const counter = 0;
    const concurrencyCurrent = 0
    console.log("[init] Concurrency Algo Testing...")
    console.log("[init] Tasks to process: ", taskList.length)
    console.log("[init] Task list: " + taskList)
    console.log("[init] Maximum Concurrency: ", concurrencyMax,"\n")
    await manageConcurrency(taskList,counter,concurrencyMax,concurrencyCurrent);
}
  function doWork(task,ms){
    console.log('Starting task:', task);
    return new Promise(resolve => setTimeout(resolve, ms, task));
}
async function manageConcurrency(...params){

    let  [taskList,counter,concurrencyMax,concurrencyCurrent] = params;
    const resultTasks = [];
   
    for(let i = 0 ; i< taskList.length;  i+=concurrencyMax){
        const tasksToRun = taskList.slice(i, i + concurrencyMax);
       
        const taskArray = [];
        const tasksPromises = [];
        for (let task of tasksToRun) {
            const start = Date.now()
            concurrencyCurrent ++;
            console.log("[EXE]   Concurrency: " +concurrencyCurrent + " of " + concurrencyMax)
            console.log("[EXE] Task Count: " +counter + " of " + taskList.length)
            console.log("[TASK] Starting : "+ task);
            
            const promise1 = doWork(task);
            const response =  await promise1;
            tasksPromises.push(response);
             const end = Date.now() - start
            console.info(`Execution time: ${end}`)
            counter ++;
            
        }
        concurrencyCurrent=0;
        
        console.log("[Finished TASK]: ",tasksPromises);
        const res = await Promise.all(tasksPromises);
        resultTasks.push(res);

        
    }// end of for
    
}

init();