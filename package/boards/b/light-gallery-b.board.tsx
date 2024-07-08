import { createBoard } from "@wixc3/react-board";
import LightGalleryB from "../../../blocks/gallery/light/b";

export default createBoard({
  name: "LightGalleryB",
  Board: () => <LightGalleryB />,
  isSnippet: true,
});
