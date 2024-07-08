import { createBoard } from "@wixc3/react-board";
import LightGalleryA from "../../../blocks/gallery/light/a";

export default createBoard({
  name: "LightGalleryA",
  Board: () => <LightGalleryA />,
  isSnippet: true,
});
