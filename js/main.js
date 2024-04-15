let app = angular.module("myApp",[]);

app.controller("myCTR",function ($scope) {
    $scope.skills=[
        {name:'html5', color:'#e44d26'},
        {name:'css3', color:'#379ad6'},
        {name:'js' , color:'#f7df1e'},
        {name:'python' , color:'#225866'},
        {name:'angular' , color:'#af2c2f'}
        ];
    
    $scope.projects=[
        {name:'ali_cafe',des:'System Coffee'},
        {name:'apple',des:'Copy an apple Wep site'},
        {name:'dash_bord'},{name:'elograa'},
        {name:'glass_animatoin'},{name:'moves'},
        {name:'my_page'},{name:'tamplate1'}]

    $scope.contacts=[
        {name:'facebook',link:'https://www.facebook.com/hassun2000?mibextid=ZbWKwL', color:'#3B5998'},
        {name:'whatsapp',link:'https://api.whatsapp.com/send/?phone=01271247621&text&type=phone_number&app_absent=0', color:'#2ebd59'},
        {name:'linkedin',link:'https://www.linkedin.com/in/hassun-mohsyn-b1954924a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', color:'#0077B5'},
        {name:'github',link:'https://github.com/HassunMohsyn', color:'#4183C4'},
    ]
})

let PopUpBTN = document.querySelectorAll(".projects .project .over_lay .fa-circle-plus");

PopUpBTN.forEach( (pop) => {
    pop.addEventListener("click", (e) =>{
        let popUp =document.querySelector(".projects .pop-up");
        popUp.style.display = "block";
    })
})

let PlusBTN = document.querySelectorAll(".projects .project i");

PlusBTN.forEach((imge) => {
  imge.addEventListener("click", (e) => {
    let overlay = document.querySelector(".popup_gallery");
    overlay.style.display = "block";

    document.querySelector(".popup_img img").src = imge.src;
    document.querySelector(".popup_img").style.display = "block";
  });
});
document.querySelector(".close_popup").onclick = function () {
  document.querySelector(".popup_img").style.display = "none";

  document.querySelector(".popup_gallery").style.display = "none";
};
document.querySelector(".popup_gallery").onclick = function () {
  document.querySelector(".popup_img").style.display = "none";

  document.querySelector(".popup_gallery").style.display = "none";
};

// auto typed

var typed = new Typed(".auto-type",{
    strings: ["Web Developer","GUI Designer","Web Programming"],
    typedSpeed: 250,
    backSpeed:250,
    loop:true
});


let menu_BTN = document.querySelector("header .menu_icon");
menu_BTN.onclick = function () {
    document.querySelector("header ul").classList.toggle("in");
}

// if (document.querySelector(".about").style.top === "0") {
//     document.querySelector("header").style.background = "transparent";
// }else{
//     document.querySelector("header").style.background = "#111";

// }

console.log(document.querySelector(".information").style.top)

let moreIcon = document.querySelectorAll(".projects .project .over_lay i")


moreIcon.forEach((e)=> {
    e.addEventListener('click', (img) => {
        
    })
});

// animation scroll

// let container = document.querySelector(".container");

// window.onscroll = function () {
//     let sKillsOffsetTop = container.offsetTop;
//     // console.log(sKillsOffsetTop)
//     let sKillsOuterHeight = container.offsetHeight;
//     // console.log(sKillsOuterHeight)
    
//     let windowHeight = this.innerHeight;
//     // console.log(windowHeight)
    
//     let windowScrollTop = this.pageYOffset;
//     // console.log(windowScrollTop)
//     let calculate = sKillsOffsetTop + sKillsOuterHeight - windowHeight + 500;
    
//     let allDivs = document.querySelectorAll(".container div");
//     allDivs.forEach((div) => {
//         if (windowScrollTop > calculate) {
//             div.style.css = `
//             animation: animate 1s both;
//             animation-delay: 0.5s;
//             `
//             console.log('hello')
//         } else {
//             div.style.css = `
//             animation: none;
//             animation-delay: 0;
//             `        }
//     });
//     };
