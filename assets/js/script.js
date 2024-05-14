document.addEventListener("DOMContentLoaded", function () {

  alert('Website is still under construction!');

});


document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("assault").addEventListener("click", function () {
    document.getElementById("assault").classList.toggle("verborgen");
  }
  );

  document.getElementById("toonVerhaalAsh").addEventListener("click", function () {
    document.getElementById("verhaalAsh").classList.toggle("verborgen");
  }
  );
});