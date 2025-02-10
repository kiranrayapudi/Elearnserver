require('./db');
let express= require("express");
const batchRouter = require("./Router/BatchesRouter")
const contactRouter = require("./Router/ContactsRouter")
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
 
app.use("/batches",batchRouter)
app.use("/contacts",contactRouter)
app.listen(4000,()=>console.log("api connected"))