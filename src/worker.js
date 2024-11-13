import "dotenv/config";
import Queue from "./queue";
import progressTest from "./jobs/progressTest";

Queue.process(progressTest.handle);
