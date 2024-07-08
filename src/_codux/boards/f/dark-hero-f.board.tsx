import { createBoard } from "@wixc3/react-board";
import DarkHeroF from "../../../blocks/hero/dark/f";

export default createBoard({
  name: "DarkHeroF",
  Board: () => <DarkHeroF />,
  isSnippet: true,
});
