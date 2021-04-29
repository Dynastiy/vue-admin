    //Side Navigation bar
  function navbtn(){
    let side =  document.getElementById("mySidebar");
    let content = document.getElementById("main");
    let navheader = document.getElementById("nav-header");
    if (side.style.width !== "50px"){
        side.style.width = "50px";
        content.style.marginLeft = "50px";
        navheader.style.marginLeft = "45px";
    }
    else{
        side.style.width = "250px";
        content.style.marginLeft = "250px";
        navheader.style.marginLeft = "245px";
    }
        side.classList.toggle("collapsed");
    }

  //Dropdown 
    var dropdown = document.getElementsByClassName("dropdown-btn");
    // var icc = document.getElementById("iconnn");
    // icc.textContent = '\u02C5';
    var i;

    for (i = 0; i < dropdown.length; i++) {
    var openShareDown = dropdown[i]
    openShareDown.addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
    dropdownContent.style.display = "none";
    icc.textContent = '\u02C5';
    } else {
    dropdownContent.style.display = "block";
    icc.textContent = '\u02C4';
    }
    });
    }