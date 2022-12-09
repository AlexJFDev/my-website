let sideBarOpen = false;

function toggleSideBar() {
  if (sideBarOpen) {
    gsap.to("#hamburger", {duration: 0.75, rotation: 0, transformOrigin: "15px 15px"})
    gsap.to("#left-sidebar", {duration: 0.75, left: "-258px"})
    gsap.to("#header-section", {duration: 0.75, left: "60px"});
    gsap.to("#main-section", {duration: 0.75, left: "60px"});
    gsap.to("#footer-section", {duration: 0.75, left: "60px"});
    gsap.to("#left-sidebar_content", {duration: 0.75, left: "0px"});

    sideBarOpen = false;
  } else {
    gsap.to("#hamburger", {duration: 0.75, rotation: 90, transformOrigin: "15px 15px"})
    gsap.to("#left-sidebar", {duration: 0.75, left: "0px"})
    gsap.to("#left-sidebar_content", {duration: 0.75, left: "15px"});
    gsap.to("#header-section", {duration: 0.75, left: "318px"});
    gsap.to("#main-section", {duration: 0.75, left: "318px"});
    gsap.to("#footer-section", {duration: 0.75, left: "318px"});

    sideBarOpen = true;
  }
}

function setActiveNavigationMenu(menu) {
  let sortButtons = document.getElementsByClassName("sort-button");
  for (let element of sortButtons) element.style.backgroundColor = "var(--left-sidebar_text-color)";
  document.getElementById(`sort-menu_${menu}-button`).style.backgroundColor = "var(--left-sidebar_selection-color)";

  let sortedMenus = document.getElementsByClassName("sorted-menu");
  for (let element of sortedMenus) element.style.visibility = "hidden";
  document.getElementById(`navigation-menu_by-${menu}`).style.visibility = "visible";
}

function toggleDropdown(dropdown) {
  let dropdownStatus = document.getElementById(`dropdown_${dropdown}`).className;

  if (dropdownStatus == "collapsed-dropdown") {
    document.getElementById(`dropdown_${dropdown}`).className = "expanded-dropdown";
  } else {
    document.getElementById(`dropdown_${dropdown}`).className = "collapsed-dropdown";
  }
}
  
window.onload = function(){
  $("#left-sidebar").load("/external.html #sidebar");
  $("#footer-section").load("/external.html #footer", reloadFooter());
}

function reloadFooter() {
  let url = window.location.href;
  document.getElementById("html-validation").href = `http://validator.w3.org/check?uri=${url}`
  document.getElementById("css-validation").href = `http://jigsaw.w3.org/css-validator/validator?uri=${url}?profile=css3`
}

function reloadContent(url){
  $("#header-section").load(`${url} #header-section`, function() {
    gsap.to("#header-section", {duration: 0, left: "318px"});
  });
  $("#main-section").load(`${url} #main-section`, function() {
    gsap.to("#main-section", {duration: 0, left: "318px"});
  });
  $("#footer-section").load(`${url} #footer-section`, function() {
    gsap.to("#footer-section", {duration: 0, left: "318px"});
  });

  window.history.pushState("", "", `${url}`);
  reloadFooter()
}