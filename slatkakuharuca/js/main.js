const container = document.getElementById('recipesContainer');
const cards = Array.from(document.querySelectorAll('.card'));
const searchInput = document.getElementById('searchInput');

let currentFilter = "name"; // default

/* =======================
   SEARCH
======================= */
if (searchInput) {
  searchInput.addEventListener("keyup", function () {
    filterAndSort();
  });
}

/* =======================
   FILTER + SORT
======================= */
function sortRecipes(type, event) {
  currentFilter = type;

  // aktivni button
  document.querySelectorAll(".sort-btn").forEach(btn => {
    btn.classList.remove("active");
  });

  if (event) event.target.classList.add("active");

  filterAndSort();
}

/* =======================
   GLAVNA FUNKCIJA
======================= */
function filterAndSort() {

  let value = searchInput.value.toLowerCase();

  let filtered = cards.filter(card =>
    card.dataset.name.toLowerCase().includes(value)
  );

  // SORT
  if (currentFilter === "name") {
    filtered.sort((a, b) =>
      a.dataset.name.localeCompare(b.dataset.name)
    );
  }

  if (currentFilter === "time") {
    filtered.sort((a, b) =>
      a.dataset.time - b.dataset.time
    );
  }

  if (currentFilter === "difficulty") {
    filtered.sort((a, b) =>
      a.dataset.difficulty.localeCompare(b.dataset.difficulty)
    );
  }

  // PRIKAŽI
  container.innerHTML = "";

  filtered.forEach(card => {
    container.appendChild(card);
  });
}