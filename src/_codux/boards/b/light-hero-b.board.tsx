import { createBoard } from "@wixc3/react-board";
import LightHeroB from "../../../blocks/hero/light/b";

export default createBoard({
  name: "LightHeroB",
  Board: () => <LightHeroB />,
  isSnippet: true,
});
