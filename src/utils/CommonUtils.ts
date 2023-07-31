import { scroller } from "react-scroll";

export const scrollToId = (id: string): void => {
  setTimeout(() => {
    scroller.scrollTo(id, {
      smooth: "easeInOutQuad",
      offset: -86,
      duration: 500,
    });
  }, 200);
};
