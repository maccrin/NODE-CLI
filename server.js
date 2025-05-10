import express from "express";
const app = express();
app.use(express.json());
const port=3000
app.get('/', (req,res)=>{
    res.json({msg:'hello from server'});
})


// Handle the POST request at /orders/:id
app.post('/orders/:id', (req, res) => {
  const orderId = req.params.id;
  // Send a success response
  res.status(200).json({ message: `Order ${orderId} updated with amount` });
});
app.listen(port, () => {
    console.log(`Application is running on ${process.env.PORT ?? port}`);
  });