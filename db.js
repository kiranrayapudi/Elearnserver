const mongoose = require("mongoose");
const dburl = "mongodb+srv://kiranrayapudi4:dmcTyBZi8ekxkrjE@elearn.qi9bd.mongodb.net/?retryWrites=true&w=majority&appName=elearn";


mongoose.connect(dburl)
.then(() => console.log("Connected to MongoDB..."))
.catch(err => console.error("Could not connect to MongoDB...", err));
