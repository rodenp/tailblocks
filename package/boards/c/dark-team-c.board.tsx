import { createBoard } from "@wixc3/react-board";
import DarkTeamC from "../../../blocks/team/dark/c";

export default createBoard({
  name: "DarkTeamC",
  Board: () => <DarkTeamC />,
  isSnippet: true,
});
