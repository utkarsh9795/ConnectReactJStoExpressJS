import express from 'express';
import connectDB from './db/connectdb.js';
import web from './routes/web.js';
import cors from 'cors';
const app = express();
app.use(cors()) 
const port = process.env.PORT || '8000';
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017";

// database connection
connectDB(DATABASE_URL);

// JSON 
app.use("/api", web)

// load routes
app.use("/api", web)

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})