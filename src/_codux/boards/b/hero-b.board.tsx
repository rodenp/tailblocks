import { createBoard } from "@wixc3/react-board";
import HeroB from "../../../icons/hero/b";

export default createBoard({
  name: "HeroB",
  Board: () => <HeroB />,
  isSnippet: true,
});
