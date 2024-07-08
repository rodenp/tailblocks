import { createBoard } from "@wixc3/react-board";
import ContentH from "../../../icons/content/h";

export default createBoard({
  name: "ContentH",
  Board: () => <ContentH />,
  isSnippet: true,
});
