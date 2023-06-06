// Use the Fetch API to get the JSON data
fetch("spells.json")
  .then((response) => response.json())
  .then((data) => {
    // This will force the focus on the popup
    document.getElementById("focus-trap").focus();

    // Filter the spells
    const spells = data.filter((spell) => spell.Source === "Players Handbook");

    // Get the output and clipboardMessage elements
    const output = document.getElementById("output");
    const clipboardMessage = document.getElementById("clipboardMessage");

    // Create a function that fills the output with a spell and copies it to clipboard
    const fillSpell = () => {
      // Select a random spell
      const spell = spells[Math.floor(Math.random() * spells.length)];

      // Build the URL and message
      const url = `https://www.dndbeyond.com/spells/${spell.Name.toLowerCase().replace(
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
    };

    // Set up the click event listener
    document.getElementById("fillSpell").addEventListener("click", fillSpell);

    // Set up the key press event listener
    document.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        fillSpell();
      }
    });
  });
