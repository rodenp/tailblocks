import { createBoard } from "@wixc3/react-board";
import ContactA from "../../../icons/contact/a";

export default createBoard({
  name: "ContactA",
  Board: () => <ContactA />,
  isSnippet: true,
});
