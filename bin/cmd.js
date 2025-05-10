#!/usr/bin/env node
import got from 'got'
const API = "http://localhost:3000";

const usg=(msg='Back offc for my App')=>{
    console.log(`\n${msg}\n`);
  console.log("Usage: cmd <ID> <AMOUNT>");
}