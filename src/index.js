import "dotenv/config";
import server from "./server";

server.listen(3333, () => {
  console.log("Running on 3333...");
  console.log("For the UI, open http://localhost:3333/admin/queues");
  console.log("Make sure Redis is running on port 6379 by default");
});
