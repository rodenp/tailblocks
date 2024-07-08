import { createBoard } from "@wixc3/react-board";
import LightStatisticA from "../../../blocks/statistic/light/a";

export default createBoard({
  name: "LightStatisticA",
  Board: () => <LightStatisticA />,
  isSnippet: true,
});
