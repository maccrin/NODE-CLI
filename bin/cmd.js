#!/usr/bin/env node
import got from 'got'
const API = "http://localhost:3000";

const usage=(msg='Back offc for my App')=>{
    console.log(`\n${msg}\n`);
  console.log("Usage: cmd <ID> <AMOUNT>");
}

const argv=process.argv.slice(2);
if(argv.length<2){
    usage();
    process.exit(1)
}

const [argID,amount]=argv
const amt=Number(amount);
if(isNaN(amt)){
     usage("Error: <AMOUNT> must be a number");
  process.exit(1);
}

try {
  await got.post(`${API}/orders/${argID}`, {
    json: { amount },
  });
  console.log(`Order ${argID} updated with amount ${amt}`);
} catch (err) {
  console.log(err.message);
  process.exit(1);
}