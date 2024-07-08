import { createBoard } from "@wixc3/react-board";
import LightContentG from "../../../blocks/content/light/g";

export default createBoard({
  name: "LightContentG",
  Board: () => <LightContentG />,
  isSnippet: true,
});
