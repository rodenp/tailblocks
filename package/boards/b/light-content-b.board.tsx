import { createBoard } from "@wixc3/react-board";
import LightContentB from "../../../blocks/content/light/b";

export default createBoard({
  name: "LightContentB",
  Board: () => <LightContentB />,
  isSnippet: true,
});
