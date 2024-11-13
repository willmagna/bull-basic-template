import express from "express";
import Queue from "./queue";
import serverAdapter from "./bullBoard";

const app = express();

app.use("/admin/queues", serverAdapter.getRouter());

app.get("/progress-test", async (req, res) => {
  await Queue.add("progressTest", {
    foo: "bar",
    fo1: "bar1",
    fo2: "bar2",
    fo3: "bar3",
  });
  console.log("added at queue");
  res.send({ msg: "Progress Test" });
});

app.get("/just-console-log", async (req, res) => {
  await Queue.add(
    "justConsoleLog",
    {
      foo: "bar",
      fo1: "bar1",
      fo2: "bar2",
      fo3: "bar3",
      fo3: "bar3",
      fo3: "bar3",
    },
    { attempts: 2 },
    { delay: 2000 }
  );
  console.log("added at queue");
  res.send({ msg: "Just Console Log" });
});

export default app;
