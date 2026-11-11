const form = document.querySelector("[data-search]");
const input = form.querySelector("input");
const status = document.querySelector("[data-search-status]");
const resultsList = document.querySelector("[data-search-results]");
let latestSearch = 0;
let searchIndex;

async function search(query) {
  const currentSearch = ++latestSearch;
  resultsList.replaceChildren();
  status.textContent = "Aranıyor…";

  try {
    searchIndex ??= import(form.dataset.index).then(async (pagefind) => {
      await pagefind.options({ baseUrl: form.dataset.base });
      return pagefind;
    }).catch((error) => {
      searchIndex = undefined;
      throw error;
    });
    const pagefind = await searchIndex;
    const searchResults = await pagefind.search(query);
    const records = await Promise.all(searchResults.results.slice(0, 20).map((result) => result.data()));
    if (currentSearch !== latestSearch) return;

    for (const record of records) {
      const item = document.createElement("li");
      const link = document.createElement("a");
      link.href = record.url;
      link.textContent = record.meta.title;
      item.append(link);
      resultsList.append(item);
    }

    status.textContent = records.length
      ? records.length + " sonuç gösteriliyor."
      : "Eşleşen kayıt bulunamadı.";
  } catch {
    if (currentSearch === latestSearch) {
      status.textContent = "Arama şu anda kullanılamıyor.";
    }
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const query = input.value.trim();
  if (!query) return;
  const url = new URL(window.location.href);
  url.searchParams.set("q", query);
  window.history.replaceState(null, "", url);
  search(query);
});

const initialQuery = new URLSearchParams(window.location.search).get("q")?.trim();
if (initialQuery) {
  input.value = initialQuery;
  search(initialQuery);
}
