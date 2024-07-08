import { createBoard } from "@wixc3/react-board";
import DarkTestimonialA from "../../../blocks/testimonial/dark/a";

export default createBoard({
  name: "DarkTestimonialA",
  Board: () => <DarkTestimonialA />,
  isSnippet: true,
});
