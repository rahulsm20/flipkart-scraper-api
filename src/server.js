import express from "express";
import connectToDB from "./db/connect.js";
const app = express();
import serverless from 'serverless-http';
import userRoutes from './routes/userRoutes.js'
import scrapeRoutes from './routes/scrapeRoutes.js';
import 'dotenv/config'
app.use(express.json())

connectToDB(process.env.MONGO_URL);

app.get('/',(req,res)=>{
    res.json("Flipkart Scraper API")
})

app.use('/users',userRoutes);
app.use('/scrape',scrapeRoutes);
app.listen(5000,()=>console.log('listening on port 5000'))

export const handler = serverless(app);