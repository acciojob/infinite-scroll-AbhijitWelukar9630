// Get the unordered list element
const list = document.getElementById("list");

// Add 10 list items by default
for (let i = 1; i <= 10; i++) {
  const li = document.createElement("li");
  li.textContent = `Item ${i}`;
  list.appendChild(li);
}

// Add event listener to detect when the user scrolls to the bottom of the list
list.addEventListener("scroll", function() {
  if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
    // Add 2 more list items
    for (let i = 1; i <= 2; i++) {
      const li = document.createElement("li");
      li.textContent = `Item ${list.children.length + i}`;
      list.appendChild(li);
    }
  }
});


