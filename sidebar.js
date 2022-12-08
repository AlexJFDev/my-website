let sidebarMap = {
    "left-side-bar-open" : false, // Whether or not the menubar is open.
    "active-navigation-menu" : "", // The active navigation menu. (selected with the pill buttons)
    "sorted-menu-maps" : {
      "date" : { // The dropdowns for the date menu.
        "july-2022" : false,
        "november-2021" : false,
      },
      "topic" : { // The dropdowns for the topic menu.
        "minecraft" : false, 
      }
    }
  }

  function reloadSideBar(sidebarMap) {
    gsap.to("#hamburger", {duration: 0.75, rotation: 90, transformOrigin: "15px 15px"})
    let leftSideBarOpen = sidebarMap["left-side-bar-open"];
    let activeNavigationMenu = sidebarMap["active-navigation-menu"];
    if (leftSideBarOpen) {
      gsap.to("#left-sidebar", {duration: 0.75, left: "0px"})
      gsap.to("#left-sidebar_content", {duration: 0.75, left: "15px"});
      gsap.to("#header-section", {duration: 0.75, left: "318px"});
      gsap.to("#main-section", {duration: 0.75, left: "318px"});
      gsap.to("#footer-section", {duration: 0.75, left: "318px"});

      if (!activeNavigationMenu) return;

      let sortButtons = document.getElementsByClassName("sort-button");
      for (let element of sortButtons) element.style.backgroundColor = "var(--left-sidebar_text-color)";
      document.getElementById(`sort-menu_${activeNavigationMenu}-button`).style.backgroundColor = "var(--left-sidebar_selection-color)";

      let sortedMenus = document.getElementsByClassName("sorted-menu");
      for (let element of sortedMenus) element.style.visibility = "hidden";
      document.getElementById(`navigation-menu_by-${activeNavigationMenu}`).style.visibility = "visible";

      let dropdowns = sidebarMap["sorted-menu-maps"][activeMenu];
      for ([dropdown, dropdownOpen] of Object.entries(dropdowns)) {
        if (dropdownOpen) {
          document.getElementById(`dropdown_${dropdown}`).classList = "expanded-dropdown"
        } else {
          document.getElementById(`dropdown_${dropdown}`).classList = "collapsed-dropdown"
        }
      }
    } else {
      gsap.to("#hamburger", {duration: 0.75, rotation: 0, transformOrigin: "15px 15px"})
      gsap.to("#left-sidebar", {duration: 0.75, left: "-258px"})
      gsap.to("#header-section", {duration: 0.75, left: "60px"});
      gsap.to("#main-section", {duration: 0.75, left: "60px"});
      gsap.to("#footer-section", {duration: 0.75, left: "60px"});
      gsap.to("#left-sidebar_content", {duration: 0.75, left: "0px"});
    }
  }

  function toggleSideBar() {
    leftSideBarOpen = sidebarMap["left-side-bar-open"];
    if (leftSideBarOpen) {
      sidebarMap["left-side-bar-open"] = false;
    } else {
      sidebarMap["left-side-bar-open"] = true;
    }
    reloadSideBar(sidebarMap);
  }

  function setActiveNavigationMenu(menu) {
    sidebarMap["active-navigation-menu"] = menu;
    reloadSideBar(sidebarMap);
  }

  function toggleDropdown(dropdown) {
    activeMenu = sidebarMap["active-navigation-menu"];
    dropdownOpen = sidebarMap["sorted-menu-maps"][activeMenu][dropdown];
    if (dropdownOpen) {
      sidebarMap["sorted-menu-maps"][activeMenu][dropdown] = false;
    } else {
      sidebarMap["sorted-menu-maps"][activeMenu][dropdown] = true;
    }
    reloadSideBar(sidebarMap);
  }