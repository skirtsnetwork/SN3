var tabCloaked = false;
function cloak(icon, title) { // function that actually does the cloaking
  if (localStorage.getItem("cloakName") !== "null") {
    let headTitle = document.querySelector("head");
    let setFavicon = document.createElement("link");
    setFavicon.setAttribute("rel", "shortcut icon");
    setFavicon.setAttribute("href", icon);
    headTitle.appendChild(setFavicon);
    document.title = title;
  }
}
if (localStorage.getItem("cloakName") !== null) { // if cloakname exsits, unhide the cloaking menu & set fields, and cloak tab 
  tabCloaked = true;
  document.getElementById("cloak").classList = "";
  document.getElementById("tabTitle").value = localStorage.getItem("cloakName");
  document.getElementById("tabURL").value = localStorage.getItem("cloakURL");
  document.getElementById("tabCloak").value = "Turn off Tab Cloaking";
  document.getElementById("tabCloak").classList = "off";
  cloak(localStorage.getItem("cloakURL"), localStorage.getItem("cloakName"));
}
function promptCloak() {
  localStorage.setItem("cloakName", document.getElementById("tabTitle").value);
  localStorage.setItem("cloakURL", document.getElementById("tabURL").value);
  cloak(localStorage.getItem("cloakURL"), localStorage.getItem("cloakName"));
}
function toggleCloaker() {
  if (tabCloaked == false) {
    document.getElementById("cloak").classList = "";
    document.getElementById("tabCloak").value = "Turn off Tab Cloaking";
    document.getElementById("tabCloak").classList = "off";
    tabCloaked = true;
  } else {
    document.getElementById("cloak").classList = "hidden";
    document.getElementById("tabCloak").value = "Turn on Tab Cloaking";
    document.getElementById("tabCloak").classList = "on";
    localStorage.clear();
    tabCloaked = false;
  }
}
function toggleSite(source) {
  document.getElementById("iframe").src = source;
  document.getElementById("content").classList = "hidden";
  document.getElementById("iframe").classList = "";
  document.getElementsByTagName("body")[0].style = "background-color: white; background-image: none"
}
if (localStorage.getItem("cloakName") == null) {
  cloak("c.png", "Skirts Network");
}
