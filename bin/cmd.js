#!/usr/bin/env node
import got from 'got'
import {Command} from "commander"
const API = "http://localhost:3000";
const program= new Command();

// Create a new Program
program.name("my-cli")
.description("Back office for my app")
.version("1.0.0")

const usage=(msg='Back offc for my App')=>{
    console.log(`\n${msg}\n`);
  console.log("Usage: cmd <ID> <AMOUNT>");
}

const argv=process.argv.slice(2);
if(argv.length<2){
    usage();
    process.exit(1)
}

program.command('update')
.argument("<ID>", "Order Id")
.argument("<Amount>", "Order Amount")
.action(async(id,amount)=>await updateItem(id,amount))
program.parse()
 async function updateItem(id,amount){
if(isNaN(+amount)){
     usage("Error: <AMOUNT> must be a number");
  process.exit(1);
}
try {
  await got.post(`${API}/orders/${id}`, {
    json: { amount },
  });
  console.log(`Order ${id} updated with amount ${amount}`);
} catch (err) {
  console.log(err.message);
  process.exit(1);
}

}

