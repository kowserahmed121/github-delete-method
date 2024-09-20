//   document.getElementById("textId").addEventListener("focus", function () {
    //     console.log("complete the work");
    //   });
    //   document.getElementById("textId").addEventListener("blur", function () {
    //     console.log("complete the work blur");
    //   });

    document.getElementById("textId").addEventListener("keyup", function(event){
        const myValue = event.target.value;
        const delBtn = document.getElementById("nonExistingButton")
        if(myValue === "delete"){
            delBtn.removeAttribute("disabled")
        } else {
            delBtn.setAttribute("disabled", true)
        }
    })

  document.getElementById("nonExistingButton").addEventListener("click", function () {
        const myHead = document.getElementById("my-head");
        myHead.style.display = "none"
  });