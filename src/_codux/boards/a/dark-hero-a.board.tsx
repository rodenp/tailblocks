import { createBoard } from "@wixc3/react-board";
import DarkHeroA from "../../../blocks/hero/dark/a";

export default createBoard({
  name: "DarkHeroA",
  Board: () => <DarkHeroA />,
  isSnippet: true,
});
