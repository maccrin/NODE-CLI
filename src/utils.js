import got from 'got'
const API = "http://localhost:3000";
const categories = ["confectionery", "electronics"];

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
  console.log(res.statusCode,res.body,res.request.options.method);
  console.log(`Order ${id} updated with amount ${amount}`);
  console.log('hi from got')
} catch (err) {
  console.log(err.message);
  process.exit(1);
}

}