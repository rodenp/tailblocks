import { createBoard } from "@wixc3/react-board";
import DarkHeroD from "../../../blocks/hero/dark/d";

export default createBoard({
  name: "DarkHeroD",
  Board: () => <DarkHeroD />,
  isSnippet: true,
});
