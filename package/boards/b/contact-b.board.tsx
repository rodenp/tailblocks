import { createBoard } from "@wixc3/react-board";
import ContactB from "../../../icons/contact/b";

export default createBoard({
  name: "ContactB",
  Board: () => <ContactB />,
  isSnippet: true,
});
