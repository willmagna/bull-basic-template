import Queue from "./queue";

const { createBullBoard } = require("@bull-board/api");
const { BullAdapter } = require("@bull-board/api/bullAdapter");
const { ExpressAdapter } = require("@bull-board/express");

const serverAdapter = new ExpressAdapter();
serverAdapter.setBasePath("/admin/queues");

const bullBoard = createBullBoard({
  queues: Queue.queues.map((queue) => new BullAdapter(queue.instance)),
  serverAdapter,
});

export default serverAdapter;
