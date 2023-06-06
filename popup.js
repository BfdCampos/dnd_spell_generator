// Use the Fetch API to get the JSON data
fetch("spells.json")
  .then((response) => response.json())
  .then((data) => {
    // Set up the click event listener
    document.getElementById("fillSpell").addEventListener("click", () => {
      // Select a random spell
      const spell = data[Math.floor(Math.random() * data.length)];

      // Build the URL and message
      const url = `http://dnd5e.wikidot.com/spell:${spell.Name.toLowerCase().replace(
        / /g,
        "-"
      )}`;
      const message = `Level ${spell.Level} ${spell.School} spell: [${spell.Name}](${url})`;

      // Log the message for now
      console.log(message);

      // Code to fill the text field will go here
    });
  });
