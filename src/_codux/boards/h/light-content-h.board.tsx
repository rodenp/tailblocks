import { createBoard } from "@wixc3/react-board";
import LightContentH from "../../../blocks/content/light/h";

export default createBoard({
  name: "LightContentH",
  Board: () => <LightContentH />,
  isSnippet: true,
});
