import { createBoard } from "@wixc3/react-board";
import LightContactB from "../../../blocks/contact/light/b";

export default createBoard({
  name: "LightContactB",
  Board: () => <LightContactB />,
  isSnippet: true,
});
