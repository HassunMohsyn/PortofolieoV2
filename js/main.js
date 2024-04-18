let app = angular.module("myApp",[]);

app.controller("myCTR",function ($scope) {
    
    $scope.handleIconClick = function() {
        console.log('Icon clicked!');
        let pop = document.querySelector(".projects .pop-up");
        pop.style.display = "block";
        let close = document.querySelector(".pop-up .close_pop")
        close.addEventListener('click', (e)=>{
            pop.style.display = "none";
        })

    };
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

    $scope.popUp=[
        {Repo:'#',Web:'#'},
    ]
    $scope.contacts=[
        {name:'facebook',link:'https://www.facebook.com/hassun2000?mibextid=ZbWKwL', color:'#3B5998'},
        {name:'whatsapp',link:'https://api.whatsapp.com/send/?phone=0201271247621&text&type=phone_number&app_absent=0', color:'#2ebd59'},
        {name:'linkedin',link:'https://www.linkedin.com/in/hassun-mohsyn-b1954924a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', color:'#0077B5'},
        {name:'github',link:'https://github.com/HassunMohsyn', color:'#4183C4'},
    ]
    
})



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
