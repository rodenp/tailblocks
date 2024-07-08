import { createBoard } from "@wixc3/react-board";
import LightContentC from "../../../blocks/content/light/c";

export default createBoard({
  name: "LightContentC",
  Board: () => <LightContentC />,
  isSnippet: true,
});
