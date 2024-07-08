import { createBoard } from "@wixc3/react-board";
import LightHeroC from "../../../blocks/hero/light/c";

export default createBoard({
  name: "LightHeroC",
  Board: () => <LightHeroC />,
  isSnippet: true,
});
