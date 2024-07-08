import { createBoard } from "@wixc3/react-board";
import LightHeaderB from "../../../blocks/header/light/b";

export default createBoard({
  name: "LightHeaderB",
  Board: () => <LightHeaderB />,
  isSnippet: true,
});
