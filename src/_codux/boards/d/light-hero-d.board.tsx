import { createBoard } from "@wixc3/react-board";
import LightHeroD from "../../../blocks/hero/light/d";

export default createBoard({
  name: "LightHeroD",
  Board: () => <LightHeroD />,
  isSnippet: true,
});
