import { createBoard } from "@wixc3/react-board";
import HeroF from "../../../icons/hero/f";

export default createBoard({
  name: "HeroF",
  Board: () => <HeroF />,
  isSnippet: true,
});
