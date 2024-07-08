import { createBoard } from "@wixc3/react-board";
import DarkStatisticA from "../../../blocks/statistic/dark/a";

export default createBoard({
  name: "DarkStatisticA",
  Board: () => <DarkStatisticA />,
  isSnippet: true,
});
