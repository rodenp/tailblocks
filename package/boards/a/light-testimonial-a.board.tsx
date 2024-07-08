import { createBoard } from "@wixc3/react-board";
import LightTestimonialA from "../../../blocks/testimonial/light/a";

export default createBoard({
  name: "LightTestimonialA",
  Board: () => <LightTestimonialA />,
  isSnippet: true,
});
