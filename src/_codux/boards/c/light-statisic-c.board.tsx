import { createBoard } from "@wixc3/react-board";
import LightStatisicC from "../../../blocks/statistic/light/c";

export default createBoard({
  name: "LightStatisicC",
  Board: () => <LightStatisicC />,
  isSnippet: true,
});
