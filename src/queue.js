import Bull from "bull";

const redisConfig = {
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
};

const myFirstQueue = new Bull("lorem", redisConfig);

export default myFirstQueue;
