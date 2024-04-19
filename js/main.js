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

        let img = document.querySelectorAll(".project img") ;
        img.forEach(image => {
            
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
        {name:'ali_cafe',des:{title:'System Coffee',content:'1'},popUp:{Repo:'#',Web:'#'}},
        {name:'apple',des:{title:'Copy an apple Wep site',content:'2'},popUp:{Repo:'#',Web:'#'}},
        {name:'dash_bord',des:{title:"",content:"3"},popUp:{Repo:'#',Web:'#'}},
        {name:'elograa',des:{title:"",content:"4"},popUp:{Repo:'#',Web:'#'}},
        {name:'glass_animatoin',des:{title:"",content:"5"},popUp:{Repo:'#',Web:'#'}},
        {name:'moves',des:{title:"",content:"6"},popUp:{Repo:'#',Web:'#'}},
        {name:'my_page',des:{title:"",content:"7"},popUp:{Repo:'#',Web:'#'}},
        {name:'tamplate1',des:{title:"",content:"8"},popUp:{Repo:'#',Web:'#'}}]

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
