import Bull from "bull";
import redisConfig from "./config/redis";

import * as jobs from "./jobs/index";

const options = {
  redis: redisConfig,
  limiter: {
    max: 1,
    duration: 5000,
  },
};

console.log(options);

const queues = Object.values(jobs).map((job) => ({
  instance: new Bull(job.name, {
    redis: redisConfig,
    limiter: job.limiter,
  }),
  instanceName: job.name,
  handle: job.handle,
}));

console.log(queues);

export default {
  queues,
  add(instanceName, ...data) {
    const queue = this.queues.find(
      (queue) => queue.instanceName === instanceName
    );
    return queue.instance.add(...data);
  },
  process() {
    return this.queues.forEach((queue) => {
      queue.instance.process(queue.handle);
      queue.instance.on("failed", (job, err) => {
        console.log("Job Failed", queue.instanceName, job.data);
        console.log(err);
      });
    });
  },
};
