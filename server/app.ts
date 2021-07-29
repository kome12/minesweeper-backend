import cors from "cors";
import express from "express";
import { appRouter } from "./router";
const app = express();
const port = process.env.PORT || 3000;

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });
app.use(express.json());
app.use(cors());

app.use(appRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
