document
  .getElementById("uploadForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Clear the form
    document.getElementById("uploadForm").reset();

    // Show a success message
    alert("Upload successfully!");
  });
