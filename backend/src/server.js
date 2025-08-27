import express from "express";
import cors from "cors";
import dotenv from "dotenv"
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());
app.use(rateLimiter);
// app.use(cors({
//     origin: "http://localhost:5173",
// }))

// app.use((req, res, next) => {
    //     console.log(`Request method is ${req.method} & Request URL is ${req.url}`)
    //     next();
    // })
    
app.use("/api/notes", notesRoutes)
    
connectDB().then(() =>{
    app.listen(PORT, () => {
        console.log("server started on port: ", PORT);
    })
})



// mongodb+srv://ashiragrawal20:Sv45aJSommSRIKQ9@cluster0.l7xhsfp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0