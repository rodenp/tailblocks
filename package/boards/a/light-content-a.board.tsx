import { createBoard } from "@wixc3/react-board";
import LightContentA from "../../../blocks/content/light/a";

export default createBoard({
  name: "LightContentA",
  Board: () => <LightContentA />,
  isSnippet: true,
});
