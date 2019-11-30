{
  init();
}

function init () {
  document.body.addEventListener("keyup", function(e) {
    if (e.keyCode == 13) {
      const usernameSubmit = document.getElementById("usernameInput");
      if(usernameSubmit) {
        usernameSubmit.submit();
      }
    }
  });
}

