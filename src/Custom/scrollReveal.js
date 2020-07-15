import ScrollReveal from "scrollreveal";

// ne pas oublier la class load-hidden

export default function AnimationScroll() {
  ScrollReveal({
    duration: 1500,
    distance: "100px",
    reset: true,
  });

  const slideDown = {
    origin: "top",
  };
  const slideUp = {
    origin: "bottom",
  };
  const slideLeft = {
    origin: "left",
  };
  const slideRight = {
    origin: "right",
  };

  ScrollReveal().reveal(".slide-down", slideDown);
  ScrollReveal().reveal(".slide-up", slideUp);
  ScrollReveal().reveal(".slide-left", slideLeft);
  ScrollReveal().reveal(".slide-right", slideRight);

  ScrollReveal().reveal(".slide-down-interval", { ...slideDown, interval: 50 });
  ScrollReveal().reveal(".slide-up-interval", { ...slideUp, interval: 50 });
  ScrollReveal().reveal(".slide-left-interval", { ...slideLeft, interval: 50 });
  ScrollReveal().reveal(".slide-right-interval", {
    ...slideRight,
    interval: 50,
  });
}
