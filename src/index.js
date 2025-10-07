import dotenv from 'dotenv'
import app from "./app.js";

import connectDB from "./db/index.js";

dotenv.config({
    path: './.env'
});

// maine connectDB ko call karne ke baad semicolon dala jisse mera pura code hi dimag kharab kar diya.

connectDB()
    .then(() => {

        app.on("ERROR", (error) => {
            console.log("ERRR: ", error);
        })

        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is running at port : ${process.env.PORT}`);
        })

    })
    .catch((err) => {
        console.log("MONGO db connection failed: ", err);
    })

