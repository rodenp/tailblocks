import { createBoard } from "@wixc3/react-board";
import TeamB from "../../../icons/team/b";

export default createBoard({
  name: "TeamB",
  Board: () => <TeamB />,
  isSnippet: true,
});
