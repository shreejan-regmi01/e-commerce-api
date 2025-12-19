import express from "express";
import { apiV1 } from "./src/router.js";
import { initDB } from "./src/db/init.js";

const app = express();
app.use(express.json());

//initialize connection with DB
(async () => {
  await initDB();
})();

const PORT = process.env.PORT || 3000;

app.use("/v1", apiV1);

app.get("/health", (req, res) => {
  return res.json({ status: "ok" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
