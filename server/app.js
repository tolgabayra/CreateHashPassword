const express = require("express")
const app = express()

const helmet = require("helmet")
const cors = require("cors")
const morgan = require("morgan")

const myRouter = require("./routes/index")

app.use(helmet())
app.use(cors())
app.use(express.json())
app.use(morgan("short"))


app.use("/api/hashed", myRouter)



app.listen(5000, () => {
  console.log("Server is running...");
})