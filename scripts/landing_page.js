function show_relations(lang) {
  var related = {
    "javascript": ["css", "html", "php", "express", "nodejs"],
    "html": ["css", "javascript", "php"],
    "css": ["html", "javascript", "php"],
    "python": ["flask"],
    "c": ["linux"],
    "php": ["html", "css", "javascript"],
    "express": ["javascript", "nodejs"],
    "flask": ["python"],
    "nodejs": ["javascript", "express"],
    "linux": ["c"],
    "inkscape": ["figma", "gimp"],
    "figma": ["gimp", "inkscape"],
    "gimp": ["figma", "inkscape"],
    "git": []
  }[lang]
  if (related == null) return;
  for (element of document.querySelectorAll("#me button")) {
    element.classList.remove("lang_related");
    element.classList.remove("lang_not_related");
    if (related.includes(element.id.split("lang_btn_")[1])) {
      element.classList.add("lang_related");
    }
    else if (element.id != "lang_btn_"+lang) {
      element.classList.add("lang_not_related");
    }
  }
}

function typeEffect(element, text) {
  i = 1
  
  element.classList.add("fade_out")

  setTimeout( function () {

  interval = setInterval(function () {
    element.classList.remove("fade_out")
    element.innerText = text.slice(0, i);
    i++;
    if (i == text.length+1) {
      clearInterval(interval)
    }
  }, 20)
  }, 100)
}

window.onload = function () {
  for (element of document.querySelectorAll("#me button")) {
    element.onclick = function () 
    {
      show_relations(this.id.split("lang_btn_")[1]);
      this.classList.add("lang_related");
    }
  }

  document.getElementById("name").onclick = function () {
    if (this.innerText == "Wervice") {
      typeEffect(this, "Constantin")
    }
    else {
      typeEffect(this, "Wervice")
    }
  }
}
