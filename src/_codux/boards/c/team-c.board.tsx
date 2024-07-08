import { createBoard } from "@wixc3/react-board";
import TeamC from "../../../icons/team/c";

export default createBoard({
  name: "TeamC",
  Board: () => <TeamC />,
  isSnippet: true,
});
