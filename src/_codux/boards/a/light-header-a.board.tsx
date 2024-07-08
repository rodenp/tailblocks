import { createBoard } from "@wixc3/react-board";
import LightHeaderA from "../../../blocks/header/light/a";

export default createBoard({
  name: "LightHeaderA",
  Board: () => <LightHeaderA />,
  isSnippet: true,
});
