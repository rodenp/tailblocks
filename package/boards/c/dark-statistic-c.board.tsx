import { createBoard } from "@wixc3/react-board";
import DarkStatisticC from "../../../blocks/statistic/dark/c";

export default createBoard({
  name: "DarkStatisticC",
  Board: () => <DarkStatisticC />,
  isSnippet: true,
});
