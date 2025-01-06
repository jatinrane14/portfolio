let text = ["Hello", "હેલો", "Bonjour", "Ciao", ""];
let pre_con = document.querySelector(".pre-loader");
let $textLoader = document.querySelector(".loader-text h2");
setTimeout(() => {
  let i = 0;
  setInterval(() => {
    $textLoader.innerText = text[i];
    i++;
  }, 1000);
  setTimeout(() => {
    pre_con.animate(
      {
        height: 0,
      },
      { duration: 1500, fill: "forwards" }
    );
    setTimeout(() => {
      pre_con.remove("visiblity");
    }, 1500);
  }, 4500);
}, 0);

//Mouse Aniamate Mover
let outline = document.querySelector(".mouse-outline");
let un_out = document.querySelector(".mouse-un-out");
window.addEventListener("mousemove", function (e) {
  const posX = e.clientX;
  const posY = e.clientY;
  // outline.style.left = posX+"px";
  // outline.style.top = posY+"px";
  outline.animate(
    {
      left: `${posX - 20}px`,
      top: `${posY - 20}px`,
    },
    { duration: 300, fill: "forwards" }
  );
  un_out.animate(
    {
      left: `${posX - 12}px`,
      top: `${posY - 12}px`,
    },
    { duration: 400, fill: "forwards" }
  );
});

Shery.mouseFollower();
Shery.makeMagnet(".magnet");


// Navigation toggle
let toggle = document.getElementsByClassName("nav-pro-img")[0];
let nav = document.getElementsByClassName("navbar")[0];
let navb = document.getElementsByClassName("navi")[0];
let to_cl_li = document.getElementsByClassName("nav-slide")[0];
let imgWhnTgl = document.getElementsByClassName("nav-pro-img")[0];
// close btn nav select
let closeBtn = document.getElementsByClassName("close-btn-nav")[0];
// Nav links select
let navLinkCTgl = document.getElementsByClassName("nav-links")[0];
// Toggle social links
let so_lks = document.getElementsByClassName("so-lks");

let OnToggleLinks = document.querySelectorAll(".nav-lst-itm");

function sideNavWidth(w) {
  nav.style.width = w + "px";
}

closeBtn.style = "display:none";

function sideNavTgl() {
  // closeBtn.hidden = false;
  closeBtn.style = "display:flex";
  sideNavWidth(300);
  setTimeout(() => {
    to_cl_li.classList.add("nav-w-toggle");
  }, 100);
  //image container
  imgWhnTgl.classList.add("nav-pro-img-con");

  for (let i = 0; i < OnToggleLinks.length; i++) {
    OnToggleLinks[i].classList.add("nav-lst-itm-tgl");
  }
  so_lks.toggle = "active";
}
async function sideNavTglClse() {
  sideNavWidth(70); 
  closeBtn.style = "display:none";
  to_cl_li.classList.remove("nav-w-toggle");
  closeBtn.hidden = "true";
  imgWhnTgl.classList.remove("nav-pro-img-con");
  for (let i = 0; i < OnToggleLinks.length; i++) {
    OnToggleLinks[i].classList.remove("nav-lst-itm-tgl");
  }
}
closeBtn.hidden = "true";

// Add Event on toggle button
toggle.addEventListener("click", () => {
  sideNavTgl();
});
closeBtn.addEventListener("click", () => {
  sideNavTglClse();
});

let mobileNavToggle = document.querySelector(".toggle-mob-nav");
let mob_navi = document.getElementsByClassName("tab-mob-view")[0];
let close_mob_nav = document.getElementsByClassName("nav-close-btn")[0];
mobileNavToggle.addEventListener("click", () => {
  console.log("sdbg");
  gsap.to(".tab-mob-view", {
    transform: "translateY(0)",
  });
});
close_mob_nav.addEventListener("click", () => {
  gsap.to(".tab-mob-view", {  
    transform: "translateY(-100%)",
  });
});


var typed = new Typed(".typer", {
  strings: ["Web Developer", " Frontend Developer","Programmer"],
  typeSpeed: 100,
  loop: true,
  loopCount: Infinity,
});



let toggleCrcl = document.querySelector(".d-l-btn-toggle");
let toggleBtn = document.querySelector(".d-l-m-btn");
let light = false;
document.querySelector("box-icon").setAttribute("color",'#FFF')
function darktoLight() {
  document.querySelector("box-icon").setAttribute("color",black)
  document.querySelector("body").classList.add("light-theme");
}
function LightToDark() {
  document.querySelector("body").classList.remove("light-theme");
}
toggleBtn.addEventListener("click", () => {
  if (!light) {
    console.log("sdhjg");
    toggleCrcl.classList.remove("d-l-btn-toggle-dark");
    toggleCrcl.classList.add("d-l-btn-toggle-light");
    darktoLight();
    light = true;
  } else {
    toggleCrcl.classList.add("d-l-btn-toggle-dark");
    toggleCrcl.classList.remove("d-l-btn-toggle-light");
    LightToDark();
    light = false;
  }
});

document.querySelector(".CvDwnldBtn").addEventListener("click", function (e) {
  e.preventDefault();
  window.location.href =
    "./assets/images/Profile_photo_placeholder_square.svg.png";
});

document.querySelector(".contact-me").addEventListener("click", function (e) {
  e.preventDefault();
  // Placeholder for contact functionality
  window.location.href = "mailto:jatinrane23@gmail.com";
});

document.addEventListener("dblclick", () => {
  if (!light) {
    darktoLight();
    light = true; 
  } else {
    LightToDark();
    light = false;
  }
});