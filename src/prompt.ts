import { stdin as input, stdout as output } from "process";
import readline from "readline";

import { config } from "./config";

function ask(rl, question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => resolve(answer));
  });
}

export const prompt = async () => {
  console.log({
    MONGO_URI: config.MONGO_URI,
  });

  if (process.env.CONFIRM_PROMPT !== "true") {
    return;
  }

  const rl = readline.createInterface({ input, output });

  const answer = await ask(rl, "Run ? (y/n)");

  if (answer?.toLowerCase() !== "y") {
    throw new Error("Aborted");
  }
};
