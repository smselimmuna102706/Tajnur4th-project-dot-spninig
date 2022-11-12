

function myLoading(){
      const spinLoading = document.getElementById("main-section");
      spinLoading.style.display = "block";
      var first = document.getElementById("first");
      if ( first.innerHTML.length > 3 ){
            first.innerHTML = "";
      }
      else {
            first.innerHTML += ".";
      }
       
}

window.setInterval(myLoading,500);




















