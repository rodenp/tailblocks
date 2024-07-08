import { createBoard } from "@wixc3/react-board";
import LightGalleryC from "../../../blocks/gallery/light/c";

export default createBoard({
  name: "LightGalleryC",
  Board: () => <LightGalleryC />,
  isSnippet: true,
});
