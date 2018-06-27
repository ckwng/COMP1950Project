(function(d){
var acc = d.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var agenda = this.nextElementSibling;
    if (agenda.style.maxHeight){
      agenda.style.maxHeight = null;
    } else {
      agenda.style.maxHeight = agenda.scrollHeight + "px";
    } 
  });
}
  })(document);  