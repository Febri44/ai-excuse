import { mkdirSync, writeFileSync } from "node:fs";

// One line, written verbatim: the excuse is the whole entry.
const line =
  "I didn't miss the deadline — I was busy explaining to three other copies of me why they also missed it.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
