import { createBoard } from "@wixc3/react-board";
import DarkHeroB from "../../../blocks/hero/dark/b";

export default createBoard({
  name: "DarkHeroB",
  Board: () => <DarkHeroB />,
  isSnippet: true,
});
