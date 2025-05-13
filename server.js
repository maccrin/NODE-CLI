import express from "express";
import {StatusCodes} from 'http-status-codes'
const app = express();
app.use(express.json());
const port=3000
app.get('/', (req,res)=>{
    res.json({msg:'hello from server'});
})
// Handle the POST request to update an order with id and amount
app.post('/orders/:id', (req, res) => {
  const orderId = req.params.id;
  const price=req.body.amount;
  // Send a success response
   res.status(StatusCodes.OK).json({ message: `Order ${orderId} updated with amount ${price}` });
});

//Handle ost request to add item with it's parameter

app.post('/:category', (req,res)=>{
  const category=req.params.category;
  const {id,name}=req.body
  res.status(StatusCodes.OK).json({message:`Item "${id}:${name}" has been added to the ${category} category`})
})

app.listen(port, () => {
    console.log(`Application is running on ${process.env.PORT ?? port}`);
  });