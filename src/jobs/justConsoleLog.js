function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default {
  name: "justConsoleLog",
  limiter: {
    max: 1,
    duration: 1000,
  },
  async handle(job) {
    console.log("Initialize Just COnsole Log Job...");
    // console.log("job.data", job);
    console.log("Just Console Log 1/5");
    job.progress(20);
    await sleep(1000);
    console.log("Just Console Log 2/5");
    job.progress(40);
    await sleep(1000);
    console.log("Just Console Log 3/5");
    job.progress(60);
    await sleep(1000);
    console.log("Just Console Log 4/5");
    job.progress(80);
    await sleep(1000);
    if (Math.random() > 0) {
      throw new Error("safasdf");
    }
    console.log("Just Console Log 5/5");
    job.progress(100);
    await sleep(500);
    // done();
    console.log("Finised Just COnsole Log Job...");
  },
};
