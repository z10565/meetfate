document.addEventListener('DOMContentLoaded', function () {
    var select = document.getElementById('countries');
    var flags = document.querySelectorAll('.countryflags img');

    select.addEventListener('change', function () {
        var selectedValue = select.value;
        flags.forEach(function (flag) {
            if (flag.classList.contains(selectedValue)) {
                flag.classList.add('active');
            } else {
                flag.classList.remove('active');
            }
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    let passchange = document.getElementById("passchange");
    let PopUpWrapper = document.querySelector(".popForm");
    let closeBtn = document.querySelector(".close");

    passchange.addEventListener("click", popForm);
    closeBtn.addEventListener("click", closepopUp);

    function popForm() {
        PopUpWrapper.style.display = "flex";
    }

    function closepopUp() {
        PopUpWrapper.style.display = "none";
    }
});
document.getElementById('countries').addEventListener('change', function() {
    var selectedCountry = this.value;
    if (selectedCountry === 'ru') {
      var russiaFlags = document.getElementsByClassName('russia');
      var usaFlags = document.getElementsByClassName('USA');
      for (var i = 0; i < russiaFlags.length; i++) {
        russiaFlags[i].style.display = 'block';
      }
      for (var i = 0; i < usaFlags.length; i++) {
        usaFlags[i].style.display = 'none';
      }
    } else if (selectedCountry === 'usa') {
      var russiaFlags = document.getElementsByClassName('russia');
      var usaFlags = document.getElementsByClassName('USA');
      for (var i = 0; i < usaFlags.length; i++) {
        usaFlags[i].style.display = 'block';
      }
      for (var i = 0; i < russiaFlags.length; i++) {
        russiaFlags[i].style.display = 'none';
      }
    }
  });
