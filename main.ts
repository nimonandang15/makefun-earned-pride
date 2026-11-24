import * as fs from "node:fs";

// One line of quiet, earned pride (184 characters, 1-240 allowed):
// a school caretaker's thirty-two years of unseen dawn work, recognised
// on his last morning — not with a trophy or a speech, but with the keys.
const text =
  "His broom was the first sound in the school for thirty-two years; on his last morning, the children lined the hall in silence, and the head teacher handed him the keys — to the school.";

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", text, "utf8");
