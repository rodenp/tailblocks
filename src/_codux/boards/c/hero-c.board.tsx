import { createBoard } from "@wixc3/react-board";
import HeroC from "../../../icons/hero/c";

export default createBoard({
  name: "HeroC",
  Board: () => <HeroC />,
  isSnippet: true,
});
