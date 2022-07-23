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

export async function waiting() {
  await new Promise((resolve) => setTimeout(resolve, 500));
}

export function cursorHover() {
  // Animation on the cursor
  const cursorHover = document.querySelectorAll(".cursor-hover");
  const cursor = document.getElementById("cursor");

  // Classic hover with opacity
  cursorHover.forEach(function (elementHover) {
    elementHover.addEventListener("mouseenter", () => {
      cursor.style.height = "60px";
      cursor.style.width = "60px";
      cursor.style.backgroundColor = "#606C38";
      cursor.style.opacity = "0.5";
    });

    elementHover.addEventListener("mouseleave", () => {
      cursor.style.height = "30px";
      cursor.style.width = "30px";
      cursor.style.backgroundColor = "transparent";
    });
  });
}
