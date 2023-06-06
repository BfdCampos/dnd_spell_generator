// Use the Fetch API to get the JSON data
fetch("spells.json")
  .then((response) => response.json())
  .then((data) => {
    // Get the output element
    const output = document.getElementById("output");

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

      // Copy the message to the clipboard
      navigator.clipboard.writeText(message).then(
        function () {
          // Show success message
          output.textContent = `${message} copied to clipboard!`;
        },
        function () {
          // Show error message
          output.textContent = "Failed to copy message to clipboard.";
        }
      );
    });
  });
