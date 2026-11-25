/* Stable entry point loaded by the bookmark. It never changes, so CDN caching of the
   "main" branch doesn't matter: it asks GitHub for the latest commit and loads app.js
   pinned to that commit (pinned files are never stale). */
(function () {
  var R = "https://cdn.jsdelivr.net/gh/bobbybamber/wbuy@";
  function load(v) {
    var s = document.createElement("script");
    s.src = R + v + "/app.js";
    s.onerror = function () {
      var d = document.getElementById("cexlc");
      if (d) d.textContent = "Could not load the list checker. Check your connection and try again.";
    };
    document.body.appendChild(s);
  }
  fetch("https://api.github.com/repos/bobbybamber/wbuy/commits/main", { headers: { Accept: "application/vnd.github.sha" }, cache: "no-store" })
    .then(function (r) { if (!r.ok) throw new Error(r.status); return r.text(); })
    .then(function (sha) { load(sha.trim()); }, function () { load("main"); });
})();
