import { createBoard } from "@wixc3/react-board";
import LightContentF from "../../../blocks/content/light/f";

export default createBoard({
  name: "LightContentF",
  Board: () => <LightContentF />,
  isSnippet: true,
});
