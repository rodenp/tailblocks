import { createBoard } from "@wixc3/react-board";
import DarkGalleryA from "../../../blocks/gallery/dark/a";

export default createBoard({
  name: "DarkGalleryA",
  Board: () => <DarkGalleryA />,
  isSnippet: true,
});
