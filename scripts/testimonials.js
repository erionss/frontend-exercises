const testimonials = [
  { name: "Emily Johnson", message: "Great service! Highly recommend." },
  { name: "Michael Smith", message: "The product quality exceeded my expectations." },
  { name: "Ava Williams", message: "Customer support was very helpful and friendly." },
  { name: "Daniel Brown", message: "Fast delivery and excellent communication." },
  { name: "Sophia Davis", message: "I’ll definitely shop here again!" }
];

const container = document.getElementById("testimonialsContainer");
const sortBtn = document.getElementById("sortBtn");

function renderTestimonials(list) {
  container.innerHTML = "";
  list.forEach(t => {
    const div = document.createElement("div");
    div.classList.add("testimonial");
    div.innerHTML = `
      <h3>${t.name}</h3>
      <p>${t.message}</p>
    `;
    container.appendChild(div);
  });
}

// Initial render
renderTestimonials(testimonials);

// Sort on button click
let ascending = true;
sortBtn.addEventListener("click", () => {
  testimonials.sort((a, b) => {
    return ascending
      ? a.name.localeCompare(b.name)
      : b.name.localeCompare(a.name);
  });
  ascending = !ascending;
  sortBtn.textContent = ascending ? "Sort by Name (A–Z)" : "Sort by Name (Z–A)";
  renderTestimonials(testimonials);
});
