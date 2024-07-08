import { createBoard } from "@wixc3/react-board";
import DarkStatisticB from "../../../blocks/statistic/dark/b";

export default createBoard({
  name: "DarkStatisticB",
  Board: () => <DarkStatisticB />,
  isSnippet: true,
});
