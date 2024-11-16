// let text = ["Hello", "હેલો", "Bonjour", "Ciao", ""];
// let pre_con = document.querySelector(".pre-loader");
// let $textLoader = document.querySelector(".loader-text h2");
// setTimeout(() => {
//   let i = 0;
//   setInterval(() => {
//     $textLoader.innerText = text[i];
//     i++;
//   }, 1000);
//   setTimeout(() => {
//     pre_con.animate(
//       {
//         height: 0,
//       },
//       { duration: 1500, fill: "forwards" }
//     );
//     setTimeout(() => {
//       pre_con.remove("visiblity");
//     }, 1500);
//   }, 4500);
// }, 0);

let pre_con = document.querySelector(".pre-loader");
let $text = document.querySelector(".loader-text h2");
setTimeout(() => {
  setTimeout(() => {
    $text.animate({
      fontSize: "250px",
    },{duration: 1000, fill: "forwards"})
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





function sideNavWidth(w) {
  nav.style.width = w + "px";
}
closeBtn.style = "display:none";
function sideNavTgl() {
  // closeBtn.hidden = false;
  closeBtn.style = "display:flex";
  sideNavWidth(300);
  to_cl_li.classList.add("nav-w-toggle");
  //image container
  imgWhnTgl.classList.add("nav-pro-img-con");
  //Nav links
  navLinkCTgl.classList.add("nav-links-tgl");
  so_lks.toggle = "active";
}
function sideNavTglClse() {
  sideNavWidth(70);
  closeBtn.style = "display:none";
  to_cl_li.classList.remove("nav-w-toggle");
  imgWhnTgl.classList.remove("nav-pro-img-con");
  navLinkCTgl.classList.remove("nav-links-tgl");
  closeBtn.hidden = "true";
}
closeBtn.hidden = "true";

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
    console.log('sdbg');
    gsap.to(".tab-mob-view",{
      transform:"translateY(0)",
    })
  });
close_mob_nav.addEventListener("click",()=>{
  gsap.to(".tab-mob-view",{
    transform:"translateY(-100%)",
  })
})

// let rightConH = document.querySelector(".right-main");
// let contactPos = document.querySelector(".contact-navi");
// rightConH.addEventListener("mouseenter", (pos) => {
//   let cPosX = contactPos.getBoundingClientRect().x;
//   let cPosY = contactPos.getBoundingClientRect().y;
//     gsap.to(".contact-navi h4",{
//       // x:() ,
//       y:2,
//       duration:1
//     })
// });
