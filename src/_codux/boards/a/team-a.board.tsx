import { createBoard } from "@wixc3/react-board";
import TeamA from "../../../icons/team/a";

export default createBoard({
  name: "TeamA",
  Board: () => <TeamA />,
  isSnippet: true,
});
