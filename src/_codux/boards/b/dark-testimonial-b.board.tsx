import { createBoard } from "@wixc3/react-board";
import DarkTestimonialB from "../../../blocks/testimonial/dark/b";

export default createBoard({
  name: "DarkTestimonialB",
  Board: () => <DarkTestimonialB />,
  isSnippet: true,
});
