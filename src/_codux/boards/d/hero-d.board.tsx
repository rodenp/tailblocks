import { createBoard } from "@wixc3/react-board";
import HeroD from "../../../icons/hero/d";

export default createBoard({
  name: "HeroD",
  Board: () => <HeroD />,
  isSnippet: true,
});
