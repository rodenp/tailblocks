import { createBoard } from "@wixc3/react-board";
import LightTeamA from "../../../blocks/team/light/a";

export default createBoard({
  name: "LightTeamA",
  Board: () => <LightTeamA />,
  isSnippet: true,
});
