import { createBoard } from "@wixc3/react-board";
import ContentC from "../../../icons/content/c";

export default createBoard({
  name: "ContentC",
  Board: () => <ContentC />,
  isSnippet: true,
});
