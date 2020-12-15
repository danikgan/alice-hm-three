img1 = document.getElementById("img-1");
img2 = document.getElementById("img-2");
img3 = document.getElementById("img-3");
img4 = document.getElementById("img-4");
img5 = document.getElementById("img-5");

let root = document.documentElement;

root.addEventListener("mousemove", (e) => {
  // let mouseAdjustWidth = (document.documentElement.clientWidth / 2) - 500;
  // let mouseAdjustHeight = (document.documentElement.clientHeight/ 2) - 250;
  // let mouseAdjustWidth = 0;
  // let mouseAdjustHeight = 0;

  var width =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  var height =
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight;

  let diffX = 250;
  let diffY = 150;
  // let changeX = (e.clientX - (width / 2)) / 2;
  // let horizon = width / 2 - 250 + changeX;

  let horizon = width / 2 - 250 - diffX + (e.clientX / 10);
  root.style.setProperty("--fhpc-one", horizon + "px");
  horizon += diffX;
  root.style.setProperty("--fhpc-two", horizon + "px");
  horizon += diffX;
  root.style.setProperty("--fhpc-three", horizon + "px");

  let aboveClouds = height / 2 - 300 + (e.clientY / 10);
  root.style.setProperty("--fvpc-one", aboveClouds + "px");

  let belowClouds = height / 2 - 300 + diffY + (e.clientY / 10);
  root.style.setProperty("--fvpc-two", belowClouds + "px");
});
