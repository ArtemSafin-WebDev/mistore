document.addEventListener("DOMContentLoaded", () => {
  const accordions = Array.from(
    document.querySelectorAll(
      ".faq__accordion, .delivery__accordion, .guarantee__accordion"
    )
  );

  console.log("Accordions", accordions);

  accordions.forEach((item) => {
    const btn = item.querySelector("button");
    btn.addEventListener("click", (event) => {
      event.preventDefault();
      accordions.forEach((otherItem) => {
        if (otherItem !== item) otherItem.classList.remove("active");
      });
      item.classList.toggle("active");
    });
  });
});
