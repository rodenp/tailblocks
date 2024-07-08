import { createBoard } from "@wixc3/react-board";
import DarkHeroE from "../../../blocks/hero/dark/e";

export default createBoard({
  name: "DarkHeroE",
  Board: () => <DarkHeroE />,
  isSnippet: true,
});
