const section = document.querySelector(".section-center");  // Selects the first element that matches the specified class name in the HTML
const btnContainer = document.querySelector(".btn-container");  // Selects the first element that matches the specified class name in the HTML

// Creates an array to store menu categories and initially adds "All" category
const categories = ["All"];
for (let i = 0; i < menu.length; i++) {
    const category = menu[i].category;
    if (!categories.includes(category)) {
        categories.push(category);  // Adds the category to the array if it hasn't been added before
    }
}

// Function to convert categories into HTML buttons
const categoryList = () => {
    const categoryBtns = categories
        .map((category) => {
            return `<button class="btn btn-outline-dark btn-item" data-id=${category}>${category}</button>`;
        })
        .join("");

    btnContainer.innerHTML = categoryBtns;  // Updates the HTML content with category buttons
    const filterBtns = document.querySelectorAll(".btn-item");  // Selects filter buttons

    // Menu filtering
    filterBtns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            const category = e.currentTarget.dataset.id;

            const menuCategory = menu.filter((menuItem) => {
                if (menuItem.category === category) {
                    return menuItem;  // Filters menu items that match the selected category
                }
            });
            if (category === "All") {
                menuList(menu);  // Shows the entire menu if "All" category is selected
            } else {
                menuList(menuCategory);  // Shows only the menu items that match the selected category in other cases
            }
        });
    });
};

// Function to convert menu items into HTML content
const menuList = (menuItems) => {
    let displayMenu = menuItems.map((item) => {
        return `<div class="menu-items col-lg-6 col-sm-12">
            <img
              src=${item.img}
              alt=${item.title}
              class="photo"
            />
            <div class="menu-info">
              <div class="menu-title">
                <h4>${item.title}</h4>
                <h4 class="price">${item.price}</h4>
              </div>
              <div class="menu-text">
                ${item.desc}
              </div>
            </div>
          </div>
    `;
    });
    displayMenu = displayMenu.join("");
    section.innerHTML = displayMenu;  // Updates the HTML content with menu items
};

// Displays the menu and categories when the page is loaded
menuList(menu);
categoryList();
