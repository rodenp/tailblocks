import { createBoard } from "@wixc3/react-board";
import StatisticB from "../../../icons/statistic/b";

export default createBoard({
  name: "StatisticB",
  Board: () => <StatisticB />,
  isSnippet: true,
});
