var URLpath = String(window.location.hostname)
var URLlist = []

const generateSTYLES = () => {
    return `
    <style>@import url(https://fonts.googleapis.com/css?family=opensans:500);
    body {
      background: #ffc400;
      color: #fff;
      font-family: "Open Sans", sans-serif;
      max-height: 700px;
      overflow: hidden;
    }
    .c {
      text-align: center;
      display: block;
      position: relative;
      width: 80%;
      margin: 100px auto;
    }
    ._404 {
      font-size: 220px;
      position: relative;
      display: inline-block;
      z-index: 2;
      height: 250px;
      letter-spacing: 15px;
    }
    ._1 {
      text-align: center;
      display: block;
      position: relative;
      letter-spacing: 12px;
      font-size: 4em;
      line-height: 80%;
    }
    ._2 {
      text-align: center;
      display: block;
      position: relative;
      font-size: 20px;
    }
    .text {
      font-size: 70px;
      text-align: center;
      position: relative;
      display: inline-block;
      margin: 19px 0px 0px 0px;
      /* top: 256.301px; */
      z-index: 3;
      width: 100%;
      line-height: 1.2em;
      display: inline-block;
    }
    
   
    .right {
      float: right;
      width: 60%;
    }
    
    hr {
      padding: 0;
      border: none;
      border-top: 5px solid #fff;
      color: #fff;
      text-align: center;
      margin: 0px auto;
      width: 420px;
      height: 10px;
      z-index: -10;
    }
    
    hr:after {
      display: inline-block;
      position: relative;
      top: -0.75em;
      font-size: 2em;
      padding: 0 0.2em;
      background: #33cc99;
    }
    
    .cloud {
      width: 350px;
      height: 120px;
    
      background: #fff;
      background: linear-gradient(top, #fff 100%);
      background: -webkit-linear-gradient(top, #fff 100%);
      background: -moz-linear-gradient(top, #fff 100%);
      background: -ms-linear-gradient(top, #fff 100%);
      background: -o-linear-gradient(top, #fff 100%);
    
      border-radius: 100px;
      -webkit-border-radius: 100px;
      -moz-border-radius: 100px;
    
      position: absolute;
      margin: 120px auto 20px;
      z-index: -1;
      transition: ease 1s;
    }
    
    .cloud:after,
    .cloud:before {
      content: "";
      position: absolute;
      background: #fff;
      z-index: -1;
    }
    
    .cloud:after {
      width: 100px;
      height: 100px;
      top: -50px;
      left: 50px;
    
      border-radius: 100px;
      -webkit-border-radius: 100px;
      -moz-border-radius: 100px;
    }
    
    .cloud:before {
      width: 180px;
      height: 180px;
      top: -90px;
      right: 50px;
    
      border-radius: 200px;
      -webkit-border-radius: 200px;
      -moz-border-radius: 200px;
    }
    
    .x1 {
      top: -50px;
      left: 100px;
      -webkit-transform: scale(0.3);
      -moz-transform: scale(0.3);
      transform: scale(0.3);
      opacity: 0.9;
      -webkit-animation: moveclouds 15s linear infinite;
      -moz-animation: moveclouds 15s linear infinite;
      -o-animation: moveclouds 15s linear infinite;
    }
    
    .x1_5 {
      top: -80px;
      left: 250px;
      -webkit-transform: scale(0.3);
      -moz-transform: scale(0.3);
      transform: scale(0.3);
      -webkit-animation: moveclouds 17s linear infinite;
      -moz-animation: moveclouds 17s linear infinite;
      -o-animation: moveclouds 17s linear infinite;
    }
    
    .x2 {
      left: 250px;
      top: 30px;
      -webkit-transform: scale(0.6);
      -moz-transform: scale(0.6);
      transform: scale(0.6);
      opacity: 0.6;
      -webkit-animation: moveclouds 25s linear infinite;
      -moz-animation: moveclouds 25s linear infinite;
      -o-animation: moveclouds 25s linear infinite;
    }
    
    .x3 {
      left: 250px;
      bottom: -70px;
    
      -webkit-transform: scale(0.6);
      -moz-transform: scale(0.6);
      transform: scale(0.6);
      opacity: 0.8;
    
      -webkit-animation: moveclouds 25s linear infinite;
      -moz-animation: moveclouds 25s linear infinite;
      -o-animation: moveclouds 25s linear infinite;
    }
    
    .x4 {
      left: 470px;
      botttom: 20px;
    
      -webkit-transform: scale(0.75);
      -moz-transform: scale(0.75);
      transform: scale(0.75);
      opacity: 0.75;
    
      -webkit-animation: moveclouds 18s linear infinite;
      -moz-animation: moveclouds 18s linear infinite;
      -o-animation: moveclouds 18s linear infinite;
    }
    
    .x5 {
      left: 200px;
      top: 300px;
    
      -webkit-transform: scale(0.5);
      -moz-transform: scale(0.5);
      transform: scale(0.5);
      opacity: 0.8;
    
      -webkit-animation: moveclouds 20s linear infinite;
      -moz-animation: moveclouds 20s linear infinite;
      -o-animation: moveclouds 20s linear infinite;
    }
    
    @-webkit-keyframes moveclouds {
      0% {
        margin-left: 1000px;
      }
      100% {
        margin-left: -1000px;
      }
    }
    @-moz-keyframes moveclouds {
      0% {
        margin-left: 1000px;
      }
      100% {
        margin-left: -1000px;
      }
    }
    @-o-keyframes moveclouds {
      0% {
        margin-left: 1000px;
      }
      100% {
        margin-left: -1000px;
      }
    }

    a, a:hover, a:focus, a:active {
        text-decoration: none;
        color: inherit;
    }

    .credits {
      position:absolute;
      right: 0;
      bottom:0;
      margin: 20px;
  }
  
    .credits-text{
      font-size: 15px;
      background-color: rgb(255, 255, 255);
      border-style: solid;
      border-color: transparent;
      padding-left: 12px;
      padding-right: 12px;
      border-radius: 50px;
      font-family: "Open Sans", sans-serif;
      box-shadow: 5px 5px 10px rgb(161, 149, 11);
      cursor: pointer;
      border-width: 0.2em;
      color: #ff8400;
      font-weight: bold;
    }

   @media(hover: hover) {
    .credits-text:hover{
        background-color: rgb(224, 224, 224);
        box-shadow: 2.5px 2.5px 10px rgb(161, 149, 11);
    }
  
  }

  </style>
    `;
};
  
const generateHTML = () => {
    return `
    <div id="clouds">
    
      <div class="cloud x1"></div>
      <div class="cloud x1_5"></div>
      <div class="cloud x2"></div>
      <div class="cloud x3"></div>
      <div class="cloud x4"></div>
      <div class="cloud x5"></div>
    
    </div>

    <div class='c'>

      <div class='_404'>Dei</div>
      <hr>
      <div class='_1'>Parama, Poi Padi Da</div>
      
      <br><br><br>
      
      <audio src="https://drive.google.com/uc?export=view&id=1iYHRfpE1F9fj3nhQxnUS1K0aZybizAPU" loop controls autoplay>
      </audio>

    </div>

    <div class = "credits">
      <a href = "https://github.com/thenithinbalaji" target = "_blank">
        <div class = "credits-text">
          <p>CREATED BY THE NITHIN BALAJI</p>
        </div>
      </a>
    </div>

    `;
};

chrome.storage.local.get(["blockedlist"], function(items){
    finishedload(items)
});

function finishedload(items){

    console.log("Blocklist = ", JSON.stringify(items))
    URLlist = items["blockedlist"]

    if(typeof URLlist === "undefined"){
        URLlist = []

        chrome.storage.local.set({ "blockedlist": URLlist }, function(){
        });
        
    }

    console.log("Current URL = ", URLpath)
    console.log("Is the current URL there in list = ", URLlist.includes(URLpath))


    if(URLlist.includes(URLpath)){
        document.head.innerHTML = generateSTYLES();
        document.body.innerHTML = generateHTML();  
    }
}


