chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.set({ spells: [] });
});

function fetchSpells() {
  const spellLists = [
    "http://dnd5e.wikidot.com/spells:wizard",
    "http://dnd5e.wikidot.com/spells:warlock",
    "http://dnd5e.wikidot.com/spells:sorcerer",
  ];

  for (const list of spellLists) {
    fetch(list)
      .then((response) => response.text())
      .then((data) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(data, "text/html");
        const spellLinks = Array.from(doc.querySelectorAll("a"))
          .filter((a) => a.href.includes("spell:"))
          .map((a) => ({ name: a.innerText, url: a.href }));
        chrome.storage.local.get("spells", ({ spells }) => {
          chrome.storage.local.set({ spells: spells.concat(spellLinks) });
        });
      });
  }
}

fetchSpells();
