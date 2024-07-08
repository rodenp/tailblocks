import { createBoard } from "@wixc3/react-board";
import DarkGalleryB from "../../../blocks/gallery/dark/b";

export default createBoard({
  name: "DarkGalleryB",
  Board: () => <DarkGalleryB />,
  isSnippet: true,
});
