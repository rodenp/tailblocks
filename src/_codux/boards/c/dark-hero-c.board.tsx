import { createBoard } from "@wixc3/react-board";
import DarkHeroC from "../../../blocks/hero/dark/c";

export default createBoard({
  name: "DarkHeroC",
  Board: () => <DarkHeroC />,
  isSnippet: true,
});
