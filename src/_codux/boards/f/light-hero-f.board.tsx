import { createBoard } from "@wixc3/react-board";
import LightHeroF from "../../../blocks/hero/light/f";

export default createBoard({
  name: "LightHeroF",
  Board: () => <LightHeroF />,
  isSnippet: true,
});
