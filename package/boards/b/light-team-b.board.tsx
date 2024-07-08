import { createBoard } from "@wixc3/react-board";
import LightTeamB from "../../../blocks/team/light/b";

export default createBoard({
  name: "LightTeamB",
  Board: () => <LightTeamB />,
  isSnippet: true,
});
