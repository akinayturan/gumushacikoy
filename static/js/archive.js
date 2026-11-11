const filters = document.querySelector("[data-archive-filters]");
const records = Array.from(document.querySelectorAll("[data-record]"));
const resultCount = document.querySelector("[data-result-count]");
const selects = Array.from(filters.querySelectorAll("select"));

function applyFilters() {
  let visibleCount = 0;

  for (const record of records) {
    const matches = selects.every(({ name, value }) => {
      return !value || (record.dataset[name] || "").split("|").includes(value);
    });
    record.hidden = !matches;
    if (matches) visibleCount += 1;
  }

  resultCount.textContent = visibleCount ? visibleCount + " kayıt" : "Bu filtrelerle eşleşen kayıt yok.";
}

filters.hidden = false;
filters.addEventListener("change", applyFilters);
filters.querySelector("[data-reset]").addEventListener("click", () => {
  for (const select of selects) select.value = "";
  applyFilters();
});
applyFilters();
