import { createBoard } from "@wixc3/react-board";
import DarkTeamB from "../../../blocks/team/dark/b";

export default createBoard({
  name: "DarkTeamB",
  Board: () => <DarkTeamB />,
  isSnippet: true,
});
