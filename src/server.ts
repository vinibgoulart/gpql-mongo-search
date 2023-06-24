import { createServer } from "http";

import app from "./app";
import { connectDatabase } from "./mongo/mongo";

export const server = async () => {
  try {
    console.log("connecting to database...");
    await connectDatabase();
  } catch (err) {
    console.log("Could not connect to database", { err });
    throw err;
  }

  const server = createServer(app);

  server.listen(4000, () => {
    console.log(`Server running in 5000`);
    console.log(`See the GraphQL Server at /graphql`);
  });
};
