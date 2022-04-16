const route = (event) => {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({}, "", event.target.href);
  handleLocation();
};

const routes = {
  404: "/pages/404.html",
  "/": "/",
  "/cv": "/pages/cv.html",
  "/lorem": "/pages/lorem.html",
};

const handleLocation = async () => {
  const path = window.location.pathname;
  const route = routes[path] || routes[404];
  const html = await fetch(route).then((data) => data.text());
  console.log("my html", html);
  document.getElementById("main-page").innerHTML = "<div></div>";
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();
