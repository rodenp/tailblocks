import { createBoard } from "@wixc3/react-board";
import StatisticA from "../../../icons/statistic/a";

export default createBoard({
  name: "StatisticA",
  Board: () => <StatisticA />,
  isSnippet: true,
});
