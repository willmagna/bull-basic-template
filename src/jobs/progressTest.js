function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default {
  key: "progressTest",
  async handle(job, done) {
    console.log("Initialize progressTest Job...");
    console.log("1/5");
    job.progress(20);
    await sleep(1000);
    console.log("2/5");
    job.progress(40);
    await sleep(2000);
    console.log("3/5");
    job.progress(60);
    await sleep(3000);
    console.log("4/5");
    job.progress(80);
    await sleep(4000);
    console.log("5/5");
    job.progress(100);
    await sleep(5000);
    done();
    console.log("Finised progressTest Job...");
  },
};
