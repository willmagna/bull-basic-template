import "dotenv/config";
import Queue from "./queue";

Queue.process(async (job) => {
  console.log(job.name);
  console.log(job.data);
  // throw new Error("asdfsdf");
});
