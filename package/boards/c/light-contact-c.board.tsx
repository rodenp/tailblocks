import { createBoard } from "@wixc3/react-board";
import LightContactC from "../../../blocks/contact/light/c";

export default createBoard({
  name: "LightContactC",
  Board: () => <LightContactC />,
  isSnippet: true,
});
