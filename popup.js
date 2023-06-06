// Use the Fetch API to get the JSON data
fetch("spells.json")
  .then((response) => response.json())
  .then((data) => {
    // Filter the spells
    const spells = data.filter((spell) => spell.Source === "Players Handbook");

    // Get the output and clipboardMessage elements
    const output = document.getElementById("output");
    const clipboardMessage = document.getElementById("clipboardMessage");

    // Set up the click event listener
    document.getElementById("fillSpell").addEventListener("click", () => {
      // Select a random spell
      const spell = spells[Math.floor(Math.random() * spells.length)];

      // Build the URL and message
      const url = `http://dnd5e.wikidot.com/spell:${spell.Name.toLowerCase().replace(
        / /g,
        "-"
      )}`;
      const message = `[${spell.Name}](${url})\nLevel ${spell.Level} ${spell.School} spell`;

      // Display the message
      output.textContent = message;

      // Copy the message to the clipboard
      navigator.clipboard.writeText(message).then(
        function () {
          // Show success message
          clipboardMessage.textContent = "Copied to clipboard!";
        },
        function () {
          // Show error message
          clipboardMessage.textContent = "Failed to copy message to clipboard.";
        }
      );
    });
  });
