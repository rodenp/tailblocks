import { createBoard } from "@wixc3/react-board";
import HeroE from "../../../icons/hero/e";

export default createBoard({
  name: "HeroE",
  Board: () => <HeroE />,
  isSnippet: true,
});
