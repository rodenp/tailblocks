import { createBoard } from "@wixc3/react-board";
import LightContactA from "../../../blocks/contact/light/a";

export default createBoard({
  name: "LightContactA",
  Board: () => <LightContactA />,
  isSnippet: true,
});
