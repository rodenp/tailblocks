import { createBoard } from "@wixc3/react-board";
import DarkGalleryC from "../../../blocks/gallery/dark/c";

export default createBoard({
  name: "DarkGalleryC",
  Board: () => <DarkGalleryC />,
  isSnippet: true,
});
