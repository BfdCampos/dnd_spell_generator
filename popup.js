// Use the Fetch API to get the JSON data
fetch("spells.json")
  .then((response) => response.json())
  .then((data) => {
    // Filter the spells
    const spells = data.filter((spell) => spell.Source === "Players Handbook");

    // Get the output and clipboardMessage elements
    const output = document.getElementById("output");
    const clipboardMessage = document.getElementById("clipboardMessage");

    // Get the button
    const fillSpellButton = document.getElementById("fillSpell");

    // Set up the click event listener
    fillSpellButton.addEventListener("click", () => {
      // Select a random spell
      const spell = spells[Math.floor(Math.random() * spells.length)];

      // Build the URL and message
      const url = `https://www.dndbeyond.com/spells/${spell.Name.toLowerCase().replace(
        / /g,
        "-"
      )}`;
      const message = `Level ${spell.Level} ${spell.School} spell: [${spell.Name}](${url})`;

      // Display the message
      output.textContent = message;

      // Delay the clipboard copy by 100 milliseconds
      setTimeout(() => {
        navigator.clipboard.writeText(message).then(
          function () {
            // Show success message
            clipboardMessage.textContent = "Copied to clipboard!";
          },
          function () {
            // Show error message
            clipboardMessage.textContent =
              "Failed to copy message to clipboard.";
          }
        );
      }, 100);
    });

    // Trigger a click event on the button when the popup opens
    fillSpellButton.click();
  });
