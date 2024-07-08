import { createBoard } from "@wixc3/react-board";
import LightStatisticB from "../../../blocks/statistic/light/b";

export default createBoard({
  name: "LightStatisticB",
  Board: () => <LightStatisticB />,
  isSnippet: true,
});
