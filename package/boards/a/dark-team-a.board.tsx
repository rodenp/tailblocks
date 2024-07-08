import { createBoard } from "@wixc3/react-board";
import DarkTeamA from "../../../blocks/team/dark/a";

export default createBoard({
  name: "DarkTeamA",
  Board: () => <DarkTeamA />,
  isSnippet: true,
});
