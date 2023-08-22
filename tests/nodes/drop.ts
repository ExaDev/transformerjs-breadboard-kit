import { Board } from "@google-labs/breadboard";
import { Utils } from "@paulkinlan/breadboard-utils-kit";
import path from "path";
import test from 'ava';

test('drop', async (t) => {
  const board = await Board.load(
    path.join(process.cwd(), "graphs", "drop.json")
  );

  board.addKit(Utils);

  const result = await board.runOnce({
    input: [1, 2, 3, 4, 5],
    count: 2
  });

  const output = result.text as number[];

  t.is(output.length, 3);
  t.like(output, [3, 4, 5]);
});
