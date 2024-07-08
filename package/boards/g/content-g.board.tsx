import { createBoard } from "@wixc3/react-board";
import ContentG from "../../../icons/content/g";

export default createBoard({
  name: "ContentG",
  Board: () => <ContentG />,
  isSnippet: true,
});
