// return a random number within a range
export function random(min, max) {
  return Math.random() * (max - min) + min;
}

// map a number from 1 range to another
export function map(n, start1, end1, start2, end2) {
  return ((n - start1) / (end1 - start1)) * (end2 - start2) + start2;
}

// Animation to the anchor
export function scrollTo(element) {
  const thisElement = document.getElementById(element);
  thisElement.scrollIntoView({
    block: "start",
    behavior: "smooth",
    inline: "start",
  });
}

// Copy to clipboard the email
export function copy() {
  navigator.clipboard.writeText("mickaelbenasse@gmail.com").then();
}
