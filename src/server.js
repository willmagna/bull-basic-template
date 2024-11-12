import express from "express";
import Queue from "./queue";
import serverAdapter from "./bullBoard";

const app = express();

app.use("/admin/queues", serverAdapter.getRouter());

app.get("/", (req, res) => {
  Queue.add({
    foo: "bar",
  });
  console.log("added at queue");
  res.send({ msg: "asdfasdf" });
});

export default app;
