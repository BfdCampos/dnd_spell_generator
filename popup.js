// Use the Fetch API to get the JSON data
fetch("data/greek.json")
  .then((response) => response.json())
  .then((data) => {
    // This will force the focus on the popup
    document.getElementById("focus-trap").focus();

    // Get the output and clipboardMessage elements
    const output = document.getElementById("output");
    const clipboardMessage = document.getElementById("clipboardMessage");

    // Create a function that fills the output with a spell and copies it to clipboard
    const fillDeity = () => {
      // Select a random spell
      const god = data[Math.floor(Math.random() * data.length)];
      
      // Build the URL and message
      const url = `https://www.google.com/search?q=${god.deity_name.toLowerCase()}+${god.pantheon.toLowerCase()}
        .replace(/ /g, "-")
        .replace(/'/g, "")}`;
      const message = `[${god.deity_name} - ${god.pantheon}](${url})\nSymbol: ${god.symbol}\nStories:\n${god.stories.map(
        (story, index) => `  ${index + 1}. ${story.title} - ${story.description}`
      ).join('\n')}`;

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
    document.getElementById("fillDeity").addEventListener("click", fillDeity);

    // Set up the key press event listener
    document.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        fillDeity();
      }
    });
  });
