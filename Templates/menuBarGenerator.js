function makeList() {
  // Establish the array which acts as a data source for the list
  let listData = [
    "<a href=\"../index.html\">Home</a>",
    `<li class=\"dropdown\">
      <a href=\"javascript:void(0)\" class=\"dropbtn\">Examples</a>
      <div class=\"dropdown-content\">
        <a href=\"gdw.html\">gdw</a>
        <a href=\"block.html\">block</a>
        <a href=\"inline.html\">inline</a>
        <a href=\"minimal_page.html\">minimal_page</a>
        <a href=\"object.html\">object</a>
        <a href=\"special.html\">special</a>
        <a href=\"ordered.html\">Ordred List</a>
        <a href=\"unordered.html\">unordered list</a>
        <a href=\"description.html\">description list</a>
        <a href=\"learning_webdev.html\">learning webdev</a>
      </div>
    </li>`,
    "<a href=\"../index.html\">Templates</a>",
    `<li class="dropdown">
      <a href="javascript:void(0)" class="dropbtn">Important Links</a>
      <div class="dropdown-content">
        <a href="https://ict.gctaa.net/sections/webdesign/students.html">Other Websites</a>
      </div>
    </li>`
  ],
  // Make a container element for the list
  listContainer = document.createElement('div'),
  // Make the list
  listElement = document.createElement('ul'),
  // Set up a loop that goes through the items in listItems one at a time
  numberOfListItems = listData.length, listItem, i;

  // Add it to the page
  document.getElementsByTagName('body')[0].appendChild(listContainer);
  listContainer.appendChild(listElement);

  for (i = 0; i < numberOfListItems; ++i) {
    // create an item for each one
    listItem = document.createElement('li');

    // Add the item text
    listItem.innerHTML = listData[i];

    // Add listItem to the listElement
    listElement.appendChild(listItem);
  }
}
makeList();
