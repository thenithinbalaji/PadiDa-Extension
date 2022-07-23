var URLpath
var URLlist = []

chrome.tabs.query(
    { 
        active:true 
    },

    tabs=>{
        URLpath = tabs[0].url;
        let domain = (new URL(URLpath))
        URLpath = domain.hostname
    }
)

chrome.storage.local.get(["blockedlist"], function(items){
    
    console.log("Existing List = ", JSON.stringify(items))
    URLlist = items["blockedlist"]

    if(typeof URLlist === "undefined"){
        URLlist = []

        chrome.storage.local.set({ "blockedlist": URLlist }, function(){
        });
        
    }

});

window.onload = function(){

    const by = document.getElementById("buttonyes")
    if(by){
        by.addEventListener("click", clickedyes);
    }

    const bn = document.getElementById("buttonno")
    if(bn){
        bn.addEventListener("click", clickedno);
    }

}


function clickedyes(){

    URLlist.push(URLpath)
    URLlist = [...new Set(URLlist)];
    chrome.storage.local.set({ "blockedlist": URLlist }, function(){
    });

    chrome.storage.local.get(["blockedlist"], function(items){
        console.log("New (Added) List = ", JSON.stringify(items))
    });

    chrome.tabs.reload()
    window.close()
}

function clickedno(){

    var URLlistindex = URLlist.indexOf(URLpath);
    
    if(URLlistindex != -1)
    URLlist.splice(URLlistindex, 1)
   
    URLlist = [...new Set(URLlist)];
    chrome.storage.local.set({ "blockedlist": URLlist }, function(){
    });

    chrome.storage.local.get(["blockedlist"], function(items){
        console.log("New (Removed) List = ", JSON.stringify(items))
    });

    chrome.tabs.reload()
    window.close();
}