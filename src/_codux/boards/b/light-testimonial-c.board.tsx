import { createBoard } from "@wixc3/react-board";
import LightTestimonialC from "../../../blocks/testimonial/light/b";

export default createBoard({
  name: "LightTestimonialC",
  Board: () => <LightTestimonialC />,
  isSnippet: true,
});
