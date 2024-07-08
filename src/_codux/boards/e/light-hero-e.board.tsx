import { createBoard } from "@wixc3/react-board";
import LightHeroE from "../../../blocks/hero/light/e";

export default createBoard({
  name: "LightHeroE",
  Board: () => <LightHeroE />,
  isSnippet: true,
});
