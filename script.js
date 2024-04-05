const header = document.querySelector("header");

window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",window.scrollY > 120);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
};

window.onscroll = () =>{
    menu.classList.remove('bx-x');
    navlist.classList.remove('active');
};

document.getElementById("downloadButton").addEventListener("click", function() {
    // Create an invisible link element
    var link = document.createElement("a");
    link.download = "Aditi_Joshi_CV.pdf"; // Specify the file name for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });