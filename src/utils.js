import got from 'got'
const API = "http://localhost:3000";
const categories = ["confectionery", "electronics"];

//Log the usage of the command
export const log=(msg)=> console.log(`\n${msg}\n`);

//Log error in the console
export const errorLog=(msg)=>console.error(`\n${msg}\n`)

// function to update item 
export async function updateItem(id,amount){
if(isNaN(+amount)){
     usage("Error: <AMOUNT> must be a number");
  process.exit(1);
}
try {
  const res =await got.post(`${API}/orders/${id}`, {
    json: { amount },
    responseType:'json'
  });
  console.log(`Order ${id} updated with amount ${amount}`);
} catch (err) {
  console.log(err.message);
  process.exit(1);
}
}

//funtion to add items
export async function addItems (...args){
let [category,id,name,amount,info,]=args;
console.log(info)
log((`Adding item ${id} with amount ${amount}`));
try{
    if(isNaN(+amount)){
        errorLog(`Error: <AMOUNT> must be a number`);
        process.exit(1);
    }
    //make  apost request with Got
    await got.post(`${API}/${category}`,{
        json:{id,name,category,amount,info:info.flat().join(' ')},
        responseType:'json'
    });
        log(`Item "${id}:${name}" has been added to the ${category} category`);
}

catch(error){
    errorLog(error.message);
    process.exit(1);
}
}