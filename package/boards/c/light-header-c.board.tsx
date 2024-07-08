import { createBoard } from "@wixc3/react-board";
import LightHeaderC from "../../../blocks/header/light/c";

export default createBoard({
  name: "LightHeaderC",
  Board: () => <LightHeaderC />,
  isSnippet: true,
});
