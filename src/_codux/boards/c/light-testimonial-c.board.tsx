import { createBoard } from "@wixc3/react-board";
import LightTestimonialC from "../../../blocks/testimonial/light/c";

export default createBoard({
  name: "LightTestimonialC",
  Board: () => <LightTestimonialC />,
  isSnippet: true,
});
