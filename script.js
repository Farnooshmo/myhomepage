/* =================
  TESTS, LOOK AT THESE
  Reading tests will always help you discover your requirements.
  You can make this window bigger. 
   ===================
*/

// const {
//   core: { test, expect, run },
//   prettify
// } = window.jestLite;

/* =================
  FIND ELEMENTS
  These are all the elements we will look for.
   ===================
*/
// const getHeader = document.querySelectorAll("header"),
//   getH1 = document.querySelectorAll("h1"),
//   getSiteHeader = document.querySelectorAll(".c-site-header"),
//   getAria = document.querySelectorAll('nav[aria-label="Main Site Links."]'),
//   getMain = document.querySelectorAll("main"),
//   getFooter = document.querySelectorAll("footer"),
//   getSiteFooter = document.querySelectorAll(".c-site-footer"),
//   getIFrame = document.querySelectorAll("iframe"),
//   getImage = document.querySelectorAll("img"),
//   getWords = document.body.innerText;

/* =================
   ASSERTIONS 
   These are the things we check are true about your page.
   Read and update your HTML to discover the requirements.
   The tests will run every time you update your code.
   ===================
*/
// test("There is at least one header element", () => {
//   expect(getHeader.length).toBeGreaterThanOrEqual(1);
// });
// test("There is at least one h1", () => {
//   expect(getH1.length).toBeGreaterThanOrEqual(1);
// });
// test("There is only one header element with the class c-site-header", () => {
//   expect(getSiteHeader.length).toBe(1);
// });
// test("There is a nav element with an aria-label of Main Site Links.", () => {
//   expect(getAria.length).toBeGreaterThanOrEqual(1);
// });
// test("There is only one main element", () => {
//   expect(getMain.length).toBe(1);
// });
// test("There is at least one footer element", () => {
//   expect(getFooter.length).toBeGreaterThanOrEqual(1);
// });
// test("There is only one footer element with the class c-site-footer", () => {
//   expect(getSiteFooter.length).toBe(1);
// });
// test("There is embedded video", () => {
//   expect(getIFrame.length).toBeGreaterThanOrEqual(1);
// });
// test("There is at least one image", () => {
//   expect(getImage.length).toBeGreaterThanOrEqual(1);
// });
// test("There are at least 500 words on the page", () => {
//   expect(getWords.length).toBeGreaterThanOrEqual(500);
// });

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");

  const navLink = document.querySelectorAll(".nav-link");
  navLink.forEach((n) => n.addEventListener("click", closeMenu));
}
function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value;
  } else {
    return number_value;
  }
}

document.getElementById("submit").addEventListener("click", (event) => {
  event.preventDefault();
  let element_list = document.getElementById("list");

  let new_div = document.createElement("div");
  new_div.innerText = getNumberOrString(document.getElementById("name").value);

  element_list.appendChild(new_div);
  let new_span = document.createElement("span");
  new_span.innerText = "commented;";

  element_list.appendChild(new_span);
  let new_div2 = document.createElement("div");
  new_div2.innerText = getNumberOrString(
    document.getElementById("comment").value
  );

  element_list.appendChild(new_div2);
});
