// observer.ts
export function createObserver(options: IntersectionObserverInit) {
  return new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (entry.target.classList.contains("slide")) {
          entry.target.classList.add("slide-appear");
        }
        if (entry.target.classList.contains("size-in")) {
          entry.target.classList.add("size-in-appear");
        }
        if (entry.target.classList.contains("fade-in")) {
          entry.target.classList.add("fade-in-appear");
        }
        if (entry.target.classList.contains("fade-in-bottom")) {
          entry.target.classList.add("fade-in-appear");
        }
      } else {
        if (entry.target.classList.contains("slide")) {
          entry.target.classList.remove("slide-appear");
        }
        if (entry.target.classList.contains("size-in")) {
          entry.target.classList.remove("size-in-appear");
        }
        if (entry.target.classList.contains("fade-in")) {
          entry.target.classList.remove("fade-in-appear");
        }
        if (entry.target.classList.contains("fade-in-bottom")) {
          entry.target.classList.remove("fade-in-appear");
        }
      }
    });
  }, options);
}
