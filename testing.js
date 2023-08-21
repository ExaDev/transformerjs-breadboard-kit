import { Board } from "@google-labs/breadboard";
import { Utils } from "./dist/src/index.js";
import path from "path";


// Outputs just the head
const board = await Board.load(
  path.join(process.cwd(), "graphs", "head.json")
);

board.addKit(Utils);

const result = await board.runOnce({
  input: [1, 2, 3, 4],
});

console.log("Head Result", result);

// Outputs just the tail
const tailBoard = await Board.load(
  path.join(process.cwd(), "graphs", "tail.json")
);

tailBoard.addKit(Utils);

const tailBoardResult = await tailBoard.runOnce({
  input: [1, 2, 3, 4],
});

console.log("Tail result", tailBoardResult);


// Outputs the entire list
const itterateBoard = await Board.load(
  path.join(process.cwd(), "graphs", "itterate.json")
);

itterateBoard.addKit(Utils);

const outputs = []

for await (const result of itterateBoard.run()) {
  if (result.seeksInputs) {
    result.inputs = { input: [1, 2, 3, 4] };
  }
  else {
    outputs.push(result.outputs);
  }
}

console.log("Iteration result", outputs);

// Outputs just the take
const takeBoard = await Board.load(
  path.join(process.cwd(), "graphs", "take.json")
);

takeBoard.addKit(Utils);

const takeResult = await takeBoard.runOnce({
  input: [1, 2, 3, 4, 5],
  count: 2
});

console.log("Take Result", takeResult);

// Outputs just the take
const dropBoard = await Board.load(
  path.join(process.cwd(), "graphs", "drop.json")
);

dropBoard.addKit(Utils);

const dropResult = await dropBoard.runOnce({
  input: [1, 2, 3, 4, 5],
  count: 2
});

console.log("Drop Result", dropResult);
