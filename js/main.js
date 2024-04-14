let app = angular.module("myApp",[]);

app.controller("myCTR",function ($scope) {
    $scope.skills=[
        {name:'html5', color:'#e44d26'},
        {name:'css3', color:'#379ad6'},
        {name:'js' , color:'#f7df1e'},
        {name:'python' , color:'#225866'}
        ];
    
    $scope.projects=[
        {name:'ali_cafe',des:'System Coffee'},
        {name:'apple',des:'Copy an apple Wep site'},
        {name:'dash_bord'},{name:'elograa'},
        {name:'glass_animatoin'},{name:'moves'},
        {name:'my_page'},{name:'tamplate1'}]

    $scope.contacts=[
        {name:'facebook',link:'#', color:''},
        {name:'whatsapp',link:'#', color:''},
        {name:'linkedin',link:'#', color:''},
        {name:'github',link:'#', color:''},
    ]
})


let menu_BTN = document.querySelector("header .menu_icon");
menu_BTN.onclick = function () {
    document.querySelector("header ul").classList.toggle("in");
}

if (document.querySelector(".about").style.top === "0") {
    document.querySelector("header").style.background = "transparent";
}else{
    document.querySelector("header").style.background = "#111";

}

console.log(document.querySelector(".information").style.top)



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
