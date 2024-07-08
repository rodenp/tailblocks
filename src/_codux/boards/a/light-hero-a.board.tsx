import { createBoard } from "@wixc3/react-board";
import LightHeroA from "../../../blocks/hero/light/a";

export default createBoard({
  name: "LightHeroA",
  Board: () => <LightHeroA />,
  isSnippet: true,
});
