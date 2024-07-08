import { createBoard } from "@wixc3/react-board";
import HeroA from "../../../icons/hero/a";

export default createBoard({
  name: "HeroA",
  Board: () => <HeroA />,
  isSnippet: true,
});
