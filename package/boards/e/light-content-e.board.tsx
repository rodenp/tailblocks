import { createBoard } from "@wixc3/react-board";
import LightContentE from "../../../blocks/content/light/e";

export default createBoard({
  name: "LightContentE",
  Board: () => <LightContentE />,
  isSnippet: true,
});
