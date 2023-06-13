const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()
app.use(bodyParser.json());

const port = 5000

//mongodb database connection
mongoose
  .connect(
    `mongodb+srv://cse2252LabTest:hw07eudgTGhsNs4U@cluster0.hlzaati.mongodb.net/cse2252lABtEST?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

const bookRouter = express.Router();

app.use("/library", bookRouter);

bookRouter.get('/', (req, res) => {
  res.send('Hello World!')
})




app.listen(port, () => {
  console.log("App Listening")
})