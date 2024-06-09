import app from "./app.js";
import dotenv from "dotenv";
import connectDB from "./Db/db.js";

dotenv.config({
  path: "./.env",
});

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`app Server is running at PORT : ${process.env.PORT} `) ;
    })
})
.catch((error) => {
    console.log("MONGODB Connection Failed !!" , error) ;
}) ;
 
 