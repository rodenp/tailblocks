import { createBoard } from "@wixc3/react-board";
import ContactC from "../../../icons/contact/c";

export default createBoard({
  name: "ContactC",
  Board: () => <ContactC />,
  isSnippet: true,
});
