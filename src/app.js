const express = require("express");
require("../src/db/conn");

const MensRanking = require("../src/models/mens");
const router = require("./routers/men");

const app = express();
const port = process.env.port || 3000;

app.use(express.json());

// app.post("/mens", async (req, res) => {
//   try {
//     const addingMensRecords = new MensRanking(req.body);
//     console.log(req.body);
//     const insertMens = await addingMensRecords.save();
//     res.status(201).send(insertMens);
//   } catch (error) {
//     res.status(400).send(error);
//   }
// });

// // WE WILL HANDLE GET REQUEST
// app.get("/mens", async (req, res) => {
//   try {
//     const getMens = await MensRanking.find({}).sort({ ranking: 1 });
//     res.send(getMens);
//   } catch (error) {
//     res.status(400).send(error);
//   }
// });

// //we will handle get request for individual
// app.get("/mens/:id", async (req, res) => {
//   try {
//     const _id = req.params.id;
//     const getMen = await MensRanking.findById({ _id: _id });
//     res.send(getMen);
//   } catch (error) {
//     res.status(400).send(error);
//   }
// });

// //we will handle patch request for individual
// app.patch("/mens/:id", async (req, res) => {
//   try {
//     const _id = req.params.id;
//     //to get new and updated value use new:true
//     const getMen = await MensRanking.findByIdAndUpdate(_id, req.body, {
//       new: true,
//     });
//     res.send(getMen);
//   } catch (error) {
//     res.status(500).send(error);
//     //server gets its errror at port 500
//   }
// });

// //to apply delete operation
// app.delete("/mens/:id", async (req, res) => {
//   try {
//     const _id = req.params.id;
//     const getMen = await MensRanking.findByIdAndDelete(_id);
//     res.send(getMen);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });

app.use(router);

app.listen(port, () => {
  console.log(`cOnnection Succesful on ${port}`);
});
