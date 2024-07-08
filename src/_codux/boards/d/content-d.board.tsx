import { createBoard } from "@wixc3/react-board";
import ContentD from "../../../icons/content/d";

export default createBoard({
  name: "ContentD",
  Board: () => <ContentD />,
  isSnippet: true,
});
