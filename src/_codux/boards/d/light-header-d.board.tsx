import { createBoard } from "@wixc3/react-board";
import LightHeaderD from "../../../blocks/header/light/d";

export default createBoard({
  name: "LightHeaderD",
  Board: () => <LightHeaderD />,
  isSnippet: true,
});
