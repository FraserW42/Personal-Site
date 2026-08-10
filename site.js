function esc(s){
  return String(s == null ? "" : s)
    .replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
}

function rich(s){
  return esc(s)
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a class="body-link" href="$2">$1</a>')
    .replace(/\*([^*]+)\*/g, '<em>$1</em>');
}

function paras(text){
  return String(text || "").trim().split(/\n\s*\n/)
    .map(function(p){
      var line = p.trim().replace(/\s*\n\s*/g, " ").replace(/[ \t]{2,}/g, " ");
      return "<p>" + rich(line) + "</p>";
    })
    .join("");
}

function typeTitle(el, text){
  var reduce = window.matchMedia &&
               window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  el.innerHTML = '<span class="typed"></span><span class="caret" aria-hidden="true"></span>';
  var out = el.querySelector(".typed");

  el.setAttribute("aria-label", text);
  if(reduce){ out.textContent = text; return; }

  var i = 0;
  (function step(){
    out.textContent = text.slice(0, i);
    if(i++ <= text.length) setTimeout(step, 85);
  })();
}

function chrome(current) {
  typeTitle(document.querySelector(".site-title"), SITE.name);

  document.querySelector(".site-nav").innerHTML =
    '<a href="index.html" class="' + (current === "work" ? "current" : "") + '">Work</a>' +
    '<a href="profile.html" class="' + (current === "profile" ? "current" : "") + '">Profile</a>';

  document.title = SITE.name + (current === "profile" ? " — Profile" : " — Work");
}

function renderWork(){
  chrome("work");

  document.querySelector(".pieces").innerHTML = WORKS.map(function(w, i){

    var awards = "";
    if(w.awards && w.awards.length){
      awards = '<div class="block">' +
               w.awards.map(function(a){ return '<p>' + esc(a) + '</p>'; }).join("") +
               '</div>';
    }

    var credits = "";
    if(w.credits && w.credits.length){
      credits = '<div class="block"><p class="label">Credits</p><ul class="credits">' +
                w.credits.map(function(c){
                  return '<li><span class="k">' + esc(c.role) + '</span>' +
                         '<span class="v">' + esc(c.name) + '</span></li>';
                }).join("") +
                '</ul></div>';
    }

    var titleHtml = w.video
      ? '<a class="title-link" href="' + esc(w.video) + '" target="_blank" rel="noopener noreferrer">' +
          esc(w.title) + '<span class="title-link-icon" aria-hidden="true"> ▶</span>' +
        '</a>'
      : esc(w.title);

    return '' +
      '<article class="piece" id="piece-' + i + '">' +

        '<div class="stage">' +
          '<button class="still-btn" type="button" aria-expanded="false" aria-controls="details-' + i + '">' +
            '<img src="' + esc(w.still) + '" alt="' + esc(w.title) + '" onerror="this.style.display=\'none\'">' +
          '</button>' +
        '</div>' +

        '<div class="piece-details" id="details-' + i + '">' +
          '<h2>' + titleHtml + '</h2>' +
          (w.meta ? '<p class="meta">' + esc(w.meta) + '</p>' : '') +
          paras(w.description) +
          awards +
          credits +
          '<button class="caret-btn" type="button">' +
            '<span class="caret-icon" aria-hidden="true">^</span>' +
          '</button>' +
        '</div>' +

      '</article>';
  }).join("");

  wirePieces();
}

function wirePieces(){
  document.querySelectorAll(".piece").forEach(function(piece){
    var btn = piece.querySelector(".still-btn");

    function toggle(){
      var open = piece.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    }

    btn.addEventListener("click", toggle);

    piece.querySelector(".caret-btn").addEventListener("click", function(){
      piece.classList.remove("open");
      btn.setAttribute("aria-expanded", "false");
      if(piece.scrollIntoView){
        piece.scrollIntoView({ block:"nearest", behavior:"smooth" });
      }
    });
  });
}

/* ---------- PROFILE ---------- */
function renderProfile(){
  chrome("profile");

  var shot = document.querySelector(".headshot");
  if(SITE.headshot){
    shot.src = SITE.headshot;
    shot.alt = "Photograph of " + SITE.name;
    shot.onerror = function(){ shot.style.display = "none"; };
  } else {
    shot.style.display = "none";
  }

  document.querySelector(".role").textContent = SITE.role || "";
  document.querySelector(".bio").innerHTML = paras(SITE.bio);

  var rows = "";
  if(SITE.email)     rows += '<p><span class="k">Email</span><span class="v">' + esc(SITE.email) + '</span></p>';
  if(SITE.instagram) rows += '<p><span class="k">Instagram</span><span class="v">' + esc(SITE.instagram) + '</span></p>';
  document.querySelector(".contact").innerHTML = rows;
}
