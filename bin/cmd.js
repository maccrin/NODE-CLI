#!/usr/bin/env node
import {Command} from "commander"
import {updateItem,addItems} from "../src/utils.js"
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

 program.command('add')
.description("add product by ID to a category")
.argument("<CATEGORY>" ,"Product Category")
.argument("<ID>" ,"Product ID")
.argument("<NAME>" ,"Product Name")
.argument("<AMOUNT>" ,"Product Amount")
.argument("[Info...]" ,"Product info")
.action(async(category,id,name,amount,info)=> await addItems(category,id,name,amount,info))

program.parse();


