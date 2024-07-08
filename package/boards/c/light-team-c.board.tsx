import { createBoard } from "@wixc3/react-board";
import LightTeamC from "../../../blocks/team/light/c";

export default createBoard({
  name: "LightTeamC",
  Board: () => <LightTeamC />,
  isSnippet: true,
});
