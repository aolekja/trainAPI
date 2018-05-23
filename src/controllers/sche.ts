import * as nodecorn from 'node-cron';

nodecorn.schedule("52 15 * * *",()=>{
   console.log("run on node-cron" + new Date());
});

console.log("job scheduler has been start....");