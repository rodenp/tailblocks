import { createBoard } from "@wixc3/react-board";
import DarkTestimonialC from "../../../blocks/testimonial/dark/c";

export default createBoard({
  name: "DarkTestimonialC",
  Board: () => <DarkTestimonialC />,
  isSnippet: true,
});
