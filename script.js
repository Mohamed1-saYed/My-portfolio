//Switching between buttons
let btn_Skils = document.getElementById("btn-skils");
let btn_Tools = document.getElementById("btn-tools");

let my_skiles = document.getElementById("my-skiles");
let my_tools = document.getElementById("my-tools");

btn_Tools.addEventListener("click",function(){
    btn_Skils.style.background = "var(--main-color)";
    btn_Tools.style.background = "#fec106c4";
    my_skiles.style.display = "none";
    my_tools.style.display = "flex";
})

btn_Skils.addEventListener("click",function(){
    btn_Skils.style.background = "#fec106c4";
    btn_Tools.style.background = "var(--main-color)";
    my_skiles.style.display = "flex";
    my_tools.style.display = "none";
})

//Show and Hide aside
let aside = document.querySelector("aside");
let main = document.querySelector("main");
let containerAll = document.getElementById("container-all");
let btnAside = document.getElementById("btnAside");

btnAside.addEventListener("click",function(){
    aside.classList.toggle("ShoweAside");
    main.classList.toggle("gridMain");
    containerAll.classList.toggle("ShowContainer-all")
})

//Show and Hide menu
let ul = document.getElementById("menu");
let ShowMenu = document.getElementById("ShowMenu");
let HideMenu = document.getElementById("HideMenu");

ShowMenu.addEventListener("click",function(){
    ul.classList.add("Show-and-Hide-ul");
})

HideMenu.addEventListener("click",function(){
    ul.classList.remove("Show-and-Hide-ul");
})

//h2 innerHTML
let h2 = document.getElementById("h2");

function TransText(text){
h2.innerHTML = text;
ul.classList.remove("Show-and-Hide-ul");
}


// Filter project
let BtnAll = document.getElementById("All");
let BtnHtmlCss = document.getElementById("HtmlCss");
let BtnHtmlCssJs = document.getElementById("HtmlCssJs");
let Btnclone = document.getElementById("clone");

let myProjectsContainer = document.getElementById("my-projects")

let myProjects = document.querySelectorAll("#my-projects > div");
let arrProjects = Array.from(myProjects);

let myhtmlCssProjects = document.querySelectorAll("#my-projects .htmlCss");
let arrhtmlCssProjects = Array.from(myhtmlCssProjects);

let myHtmlCssJsProjects = document.querySelectorAll("#my-projects .HtmlCssJs");
let arrHtmlCssJsProjects = Array.from(myHtmlCssJsProjects);

let mycloneProjects = document.querySelectorAll("#my-projects .clone");
let arrcloneJsProjects = Array.from(mycloneProjects);

BtnAll.addEventListener("click",function(){
    for(let i = 0 ; i < arrProjects.length ; i++){
      arrProjects[i].style.display = "block";
    }
    BtnAll.style.cssText = `background-color: #ffe4c4b0;
    color: var(--second-color);`
    BtnHtmlCssJs.style.cssText = `  color: var(--third-color);
    background-color: bisque;`
    Btnclone.style.cssText = `  color: var(--third-color);
    background-color: bisque;`
    BtnHtmlCss.style.cssText = `color: var(--third-color);
    background-color: bisque;`
  })
  

BtnHtmlCss.addEventListener("click",function(){
  myProjectsContainer.style.cssText = `grid-template-rows: repeat(1,200px)!important;`
  for(let i = 0 ; i < arrProjects.length ; i++){
    arrProjects[i].style.display = "none";
  }
  for(let i = 0 ; i < arrhtmlCssProjects.length ; i++){
    arrhtmlCssProjects[i].style.display = "block";
  }
  BtnAll.style.cssText = `  color: var(--third-color);
  background-color: bisque;`
  BtnHtmlCssJs.style.cssText = `  color: var(--third-color);
  background-color: bisque;`
  Btnclone.style.cssText = `  color: var(--third-color);
  background-color: bisque;`
  BtnHtmlCss.style.cssText = `background-color: #ffe4c4b0;
  color: var(--second-color);`
})

BtnHtmlCssJs.addEventListener("click",function(){
    for(let i = 0 ; i < arrProjects.length ; i++){
      arrProjects[i].style.display = "none";
    }
    for(let i = 0 ; i < arrHtmlCssJsProjects.length ; i++){
        arrHtmlCssJsProjects[i].style.display = "block";
    }
    BtnHtmlCssJs.style.cssText =`background-color: #ffe4c4b0;
    color: var(--second-color);`
    BtnAll.style.cssText = `  color: var(--third-color);
    background-color: bisque;`
    BtnHtmlCss.style.cssText = `color: var(--third-color);
    background-color: bisque;`
    Btnclone.style.cssText = `color: var(--third-color);
    background-color: bisque;`
  })

  Btnclone.addEventListener("click",function(){
    for(let i = 0 ; i < arrProjects.length ; i++){
      arrProjects[i].style.display = "none";
    }
    for(let i = 0 ; i < arrcloneJsProjects.length ; i++){
        arrcloneJsProjects[i].style.display = "block";
    }
    Btnclone.style.cssText = `background-color: #ffe4c4b0;
    color: var(--second-color);`
    BtnAll.style.cssText = `  color: var(--third-color);
    background-color: bisque;`
    BtnHtmlCss.style.cssText = `color: var(--third-color);
    background-color: bisque;`
    BtnHtmlCssJs.style.cssText =`color: var(--third-color);
    background-color: bisque;`
  })

 // MailJS

 let form = document.forms[0];

 form.addEventListener("submit",function(event){
event.preventDefault()
 })

 function sendMail(){
   let parms = {
    name: document.getElementById("name").value,
    message: document.getElementById("message").value,
    email:document.getElementById("email").value,
    PhoneNumber: document.getElementById("Phone-Number").value
   }
   emailjs.send("service_pyhllnl","template_tt2id55",parms).then(alert("Email Sent!"))
 }


