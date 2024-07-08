import { createBoard } from "@wixc3/react-board";
import GalleryA from "../../../icons/gallery/a";

export default createBoard({
  name: "GalleryA",
  Board: () => <GalleryA />,
  isSnippet: true,
});
