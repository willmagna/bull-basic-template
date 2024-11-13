import Bull from "bull";
import redisConfig from "./config/redis";
import progressTest from "./jobs/progressTest";

const queue = new Bull(progressTest.key, redisConfig);

export default queue;
