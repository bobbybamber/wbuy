/* CeX list checker - runs as a bookmarklet on uk.webuy.com.
   FILMS is injected by tools/build.py from the spreadsheet.
   Each film: [title, year, owned, want, sheet] where want is a list of formats: "DVD","BR","4K".
   Stock check: CeX's search index has a "stores" facet listing the stores holding each item,
   so one filtered search per batch of films answers "what's in stock at this store". */
(function () {
  var FILMS = [["Soldier of Orange",1977,"DVD",["BR","4K"],"WW2"],["Blitz",2024,"Apple TV",["DVD","BR","4K"],"WW2"],["Angels One Five",1952,"Blu-Ray",["4K"],"WW2"],["Casablanca",1942,"Blu-Ray",["4K"],"WW2"],["Darkest Hour",2017,"Blu-Ray",["4K"],"WW2"],["Dunkirk",2017,"Blu-Ray",["4K"],"WW2"],["The First Of The Few",1942,"Blu-Ray",["4K"],"WW2"],["Their Finest",2016,"Blu-Ray",["4K"],"WW2"],["Cross of Honour",2012,"DVD",["BR","4K"],"WW2"],["Dunkirk",1958,"DVD",["BR","4K"],"WW2"],["Hope and Glory",1987,"DVD",["BR","4K"],"WW2"],["Mrs Miniver",1942,"DVD",["BR","4K"],"WW2"],["Operation Amsterdam",1959,"DVD",["BR","4K"],"WW2"],["Reach For The Sky",1956,"DVD",["BR","4K"],"WW2"],["Suite Franciase",2014,"DVD",["BR","4K"],"WW2"],["The Battle Of River Plate",1956,"DVD",["BR","4K"],"WW2"],["The Captive Heart",1946,"DVD",["BR","4K"],"WW2"],["The Cruel Sea",1953,"DVD",["BR","4K"],"WW2"],["The Kings Choice",2016,"DVD",["BR","4K"],"WW2"],["Battle of Britain",1969,"DVD, BR",["4K"],"WW2"],["Fortress of War",2010,"Blu-Ray",["4K"],"WW2"],["Inglorius Bastards",2009,"Blu-Ray",["4K"],"WW2"],["The Railway Man",2013,"Blu-Ray",["4K"],"WW2"],["Tora, Tora, Tora",1970,"Blu-Ray",["4K"],"WW2"],["Action in the North Atlantic",1943,"",["DVD","BR","4K"],"WW2"],["No Man Is An Island",1962,"",["DVD","BR","4K"],"WW2"],["Das Boot",1981,"DVD",["BR","4K"],"WW2"],["Europa Europa",1992,"DVD",["BR","4K"],"WW2"],["Flying Tigers",1942,"DVD",["BR","4K"],"WW2"],["From Here To Eternity",1953,"DVD",["BR","4K"],"WW2"],["In Harms Way",1965,"DVD",["BR","4K"],"WW2"],["Operation Daybreak",1975,"DVD",["BR","4K"],"WW2"],["Sink The Bismark",1960,"DVD",["BR","4K"],"WW2"],["The Desert Rats",1953,"DVD",["BR","4K"],"WW2"],["The One That Got Away",1957,"DVD",["BR","4K"],"WW2"],["The Silver Fleet",1943,"DVD",["BR","4K"],"WW2"],["They Were Expendable",1945,"DVD",["BR","4K"],"WW2"],["Pearl Harbor",2001,"DVD, BR",["4K"],"WW2"],["Midway",1976,"Blu-Ray",["4K"],"WW2"],["Conspiracy",2001,"",["DVD","BR","4K"],"WW2"],["Destination Tokyo",1943,"",["DVD","BR","4K"],"WW2"],["Die Wannseekonferenz",1984,"",["DVD","BR","4K"],"WW2"],["Fat Man and Little Boy",1989,"",["DVD","BR","4K"],"WW2"],["Guadalcanal Diary",1943,"",["DVD","BR","4K"],"WW2"],["Gung Ho",1943,"",["DVD","BR","4K"],"WW2"],["King Rat",1965,"",["DVD","BR","4K"],"WW2"],["Sea of Sand",1958,"",["DVD","BR","4K"],"WW2"],["The Big Red One",1980,"",["DVD","BR","4K"],"WW2"],["633 Squadron",1964,"DVD",["BR","4K"],"WW2"],["Army of Shadows",1969,"DVD",["BR","4K"],"WW2"],["The Diary of Anne Frank",1959,"",["DVD","BR","4K"],"WW2"],["The Gallant Hours",1960,"Downloaded",["DVD","BR","4K"],"WW2"],["Colditz Story",1955,"DVD",["BR","4K"],"WW2"],["The Hill",1965,"Downloaded",["DVD","BR","4K"],"WW2"],["The Long, The Short and The Tall",1961,"",["DVD","BR","4K"],"WW2"],["Enemy At The Gates",2001,"DVD",["BR","4K"],"WW2"],["Ice Cold In Alex",1958,"DVD",["BR","4K"],"WW2"],["Stalingrad",1993,"DVD",["BR","4K"],"WW2"],["The Thin Red Line",1964,"",["DVD","BR","4K"],"WW2"],["The Cockleshell Heroes",1955,"DVD",["BR","4K"],"WW2"],["They Fought For Their Country",1975,"",["DVD","BR","4K"],"WW2"],["Thirty Seconds Over Tokyo",1944,"",["DVD","BR","4K"],"WW2"],["The Desert Fox",1951,"DVD",["BR","4K"],"WW2"],["Tobruk",1967,"Downloaded",["DVD","BR","4K"],"WW2"],["The Devils Brigade",1968,"DVD",["BR","4K"],"WW2"],["The Malta Story",1953,"DVD",["BR","4K"],"WW2"],["Very Important Person",1961,"",["DVD","BR","4K"],"WW2"],["To End All Wars",2001,"DVD",["BR","4K"],"WW2"],["Twelve O'Clock High",1949,"DVD",["BR","4K"],"WW2"],["Uprising",2001,"DVD",["BR","4K"],"WW2"],["The Thin Red Line",1998,"DVD, BR",["4K"],"WW2"],["Merry Christmas, Mr Lawrence",1983,"DVD",["BR","4K"],"WW2"],["The Heroes of Telemark",1965,"DVD",["BR","4K"],"WW2"],["The Pianist",2002,"DVD",["BR","4K"],"WW2"],["The Small Back Room",1943,"DVD",["BR","4K"],"WW2"],["Cross of Iron",1977,"Blu-Ray",["4K"],"WW2"],["Days of Glory",2006,"Blu-Ray",["4K"],"WW2"],["Play Dirty",1969,"Blu-Ray",["4K"],"WW2"],["The Man Who Never Was",1956,"Blu-Ray",["4K"],"WW2"],["A Man Escaped",1956,"",["DVD","BR","4K"],"WW2"],["A Walk In The Sun",1945,"Downloaded",["DVD","BR","4K"],"WW2"],["Albert RN",1953,"Downloaded",["DVD","BR","4K"],"WW2"],["Come and See",1985,"Downloaded",["DVD","BR","4K"],"WW2"],["Patton",1970,"DVD",["BR","4K"],"WW2"],["Danger Within",1959,"",["DVD","BR","4K"],"WW2"],["Run Silent Run Deep",1958,"DVD",["BR","4K"],"WW2"],["The 12th Man",2017,"DVD",["BR","4K"],"WW2"],["The Dam Busters",1955,"DVD",["BR","4K"],"WW2"],["The Enemy Below",1957,"DVD",["BR","4K"],"WW2"],["Objective, Burma!",1945,"",["DVD","BR","4K"],"WW2"],["The Wooden Horse",1950,"DVD",["BR","4K"],"WW2"],["Where Eagles Dare",1968,"DVD",["BR","4K"],"WW2"],["Story Of G.I. Joe",1945,"",["DVD","BR","4K"],"WW2"],["The Birdmen",1971,"",["DVD","BR","4K"],"WW2"],["The Counterfeit Traitors",1962,"",["DVD","BR","4K"],"WW2"],["The Password Is Courage",1962,"",["DVD","BR","4K"],"WW2"],["The Scarlet And The Black",1983,"Downloaded",["DVD","BR","4K"],"WW2"],["Triple Cross",1966,"",["DVD","BR","4K"],"WW2"],["Above Us The Waves",1955,"DVD",["BR","4K"],"WW2"],["Anzio",1968,"DVD",["BR","4K"],"WW2"],["Appointment in London",1953,"DVD",["BR","4K"],"WW2"],["Escape from Sobibor",1987,"DVD",["BR","4K"],"WW2"],["Hellcats Of The Navy",1957,"DVD",["BR","4K"],"WW2"],["Odette",1950,"BR",["4K"],"WW2"],["The McKenzie Break",1970,"DVD",["BR","4K"],"WW2"],["Inglorius Bastards",1978,"Blu-Ray",["4K"],"WW2"],["A Bridge Too Far",1977,"DVD",["BR","4K"],"WW2"],["Battle of the Bulge",1965,"DVD",["BR","4K"],"WW2"],["Black Book",2006,"DVD",["BR","4K"],"WW2"],["I Was Monty's Double",1958,"DVD",["BR","4K"],"WW2"],["Memphis Belle",1990,"DVD",["BR","4K"],"WW2"],["Rommel",2012,"DVD",["BR","4K"],"WW2"],["Saving Private Ryan",1998,"DVD",["BR","4K"],"WW2"],["Stalag 17",1953,"DVD",["BR","4K"],"WW2"],["The Caine Mutiny",1954,"DVD",["BR","4K"],"WW2"],["The Dirty Dozen",1967,"DVD",["BR","4K"],"WW2"],["The Longest Day",1962,"DVD",["BR","4K"],"WW2"],["The Monuments Men",2014,"DVD",["BR","4K"],"WW2"],["The Train",1964,"DVD",["BR","4K"],"WW2"],["The Way Back",2010,"DVD",["BR","4K"],"WW2"],["Ill Met By Moonlight",1957,"",["DVD","BR","4K"],"WW2"],["Kanal",1957,"",["DVD","BR","4K"],"WW2"],["Pressure",2026,"",["DVD","BR","4K"],"WW2"],["Von Ryan's Express",1965,"DVD, BR",["4K"],"WW2"],["The Battleground",1949,"",["DVD","BR","4K"],"WW2"],["Carve Her Name With Pride",1958,"DVD",["BR","4K"],"WW2"],["Operation Crossbow",1965,"DVD",["BR","4K"],"WW2"],["To Hell And Back",1955,"DVD",["BR","4K"],"WW2"],["Fury",2014,"Blu-Ray",["4K"],"WW2"],["Hacksaw Ridge",2016,"Blu-Ray",["4K"],"WW2"],["Flags of our Fathers",2006,"DVD",["BR","4K"],"WW2"],["Letters From Iwo Jima",2006,"DVD",["BR","4K"],"WW2"],["Empire Of The Sun",1987,"",["DVD","BR","4K"],"WW2"],["Downfall",2004,"DVD",["BR","4K"],"WW2"],["Hiroshima",1995,"",["DVD","BR","4K"],"WW2"],["Hitler: The Last Ten Days",1973,"",["DVD","BR","4K"],"WW2"],["Land of Mine",2015,"",["DVD","BR","4K"],"WW2"],["Dresden",2006,"DVD",["BR","4K"],"WW2"],["Sands of Iwo Jima",1949,"",["DVD","BR","4K"],"WW2"],["The Bridge",1959,"",["DVD","BR","4K"],"WW2"],["The Bunker",1980,"Downloaded",["DVD","BR","4K"],"WW2"],["Truman",1995,"",["DVD","BR","4K"],"WW2"],["The Best Years Of Our Lives",1946,"DVD",["BR","4K"],"WW2"],["Judgment at Nuremburg",1961,"",["DVD","BR","4K"],"WW2"],["The People vs. Fritz Bauer",2015,"",["DVD","BR","4K"],"WW2"],["The Keeper (Trautmann)",null,"",["DVD","BR","4K"],"WW2"],["Air Force One",1997,"DVD",["BR","4K"],"2025_Movies"],["Alien Autopsy",2006,"DVD",["BR","4K"],"2025_Movies"],["American Made",2017,"DVD",["BR","4K"],"2025_Movies"],["Amistad",1997,"DVD",["BR","4K"],"2025_Movies"],["Amundsen",2019,"DVD",["BR","4K"],"2025_Movies"],["Brassed Off",1996,"DVD",["BR","4K"],"2025_Movies"],["Bullitt",1968,"DVD",["BR","4K"],"2025_Movies"],["Buster",1988,"DVD",["BR","4K"],"2025_Movies"],["Capone",1975,"DVD",["BR","4K"],"2025_Movies"],["Elizabeth: The Golden Age",2007,"DVD",["BR","4K"],"2025_Movies"],["Fences",2016,"DVD",["BR","4K"],"2025_Movies"],["Flight",2012,"DVD",["BR","4K"],"2025_Movies"],["In The Electric Mist",2009,"DVD",["BR","4K"],"2025_Movies"],["J Edgar",2011,"DVD",["BR","4K"],"2025_Movies"],["Lawless",2012,"Blu-Ray",["4K"],"2025_Movies"],["Masters and Commanders",2003,"DVD",["BR","4K"],"2025_Movies"],["McVicar",1980,"DVD",["BR","4K"],"2025_Movies"],["Miller's Crossing",1990,"DVD",["BR","4K"],"2025_Movies"],["Munich",2005,"DVD",["BR","4K"],"2025_Movies"],["Once Upon A Time In America",1984,"Blu-Ray",["4K"],"2025_Movies"],["Only The Brave",2017,"DVD",["BR","4K"],"2025_Movies"],["Philadelphia",1993,"DVD",["BR","4K"],"2025_Movies"],["Pirates of Tortuga",1961,"DVD",["BR","4K"],"2025_Movies"],["Road To Perdition",2002,"DVD",["BR","4K"],"2025_Movies"],["Robbery",1967,"DVD",["BR","4K"],"2025_Movies"],["Sir Francis Drake (TV)",1961,"DVD",["BR","4K"],"2025_Movies"],["Sometimes Always Never",2018,"DVD",["BR","4K"],"2025_Movies"],["State Of Play",2009,"DVD",["BR","4K"],"2025_Movies"],["Syriana",2005,"DVD",["BR","4K"],"2025_Movies"],["Terror on the Brittanic",1974,"DVD",["BR","4K"],"2025_Movies"],["The Boat That Rocked",2009,"DVD",["BR","4K"],"2025_Movies"],["The Bookshop",2017,"DVD",["BR","4K"],"2025_Movies"],["The Bounty",1984,"DVD",["BR","4K"],"2025_Movies"],["The Company Men",2010,"DVD",["BR","4K"],"2025_Movies"],["The Good Shepherd",2006,"DVD",["BR","4K"],"2025_Movies"],["The Guernsey Literary & Potato Peel Pie Society",2018,"DVD",["BR","4K"],"2025_Movies"],["The League Of Gentleman",1960,"Blu-Ray",["4K"],"2025_Movies"],["The Man Who Was Never There",1956,"DVD",["BR","4K"],"2025_Movies"],["The Mercy",2017,"DVD",["BR","4K"],"2025_Movies"],["US Marshals",1998,"DVD",["BR","4K"],"2025_Movies"],["84 Charing Cross Road",1987,"",["DVD","BR","4K"],"2025_Movies"],["Black Robe",1991,"",["DVD","BR","4K"],"2025_Movies"],["Blockers",2018,"",["DVD","BR","4K"],"2025_Movies"],["Booksmart",2019,"",["DVD","BR","4K"],"2025_Movies"],["Brighton Rock",1948,"",["DVD","BR","4K"],"2025_Movies"],["Clerks",1994,"",["DVD","BR","4K"],"2025_Movies"],["Cobb",1994,"",["DVD","BR","4K"],"2025_Movies"],["Detroit",2017,"",["DVD","BR","4K"],"2025_Movies"],["Devil in a Blue Dress",1995,"",["DVD","BR","4K"],"2025_Movies"],["Fire Over England",1937,"",["DVD","BR","4K"],"2025_Movies"],["Flash Of Genius",2008,"",["DVD","BR","4K"],"2025_Movies"],["Fools Gold",2008,"",["DVD","BR","4K"],"2025_Movies"],["He Who Rides A Tiger",1965,"",["DVD","BR","4K"],"2025_Movies"],["Heat",1996,"",["DVD","BR","4K"],"2025_Movies"],["JFK",1991,"",["DVD","BR","4K"],"2025_Movies"],["Last Man Standing",1996,"",["DVD","BR","4K"],"2025_Movies"],["Live By Night",2016,"",["DVD","BR","4K"],"2025_Movies"],["Lone Star",1996,"",["DVD","BR","4K"],"2025_Movies"],["Mississippi Grind",2015,"",["DVD","BR","4K"],"2025_Movies"],["Mississippi Masala",1991,"",["DVD","BR","4K"],"2025_Movies"],["Mr Nice",2010,"",["DVD","BR","4K"],"2025_Movies"],["Mutiny On The Bounty",1935,"",["DVD","BR","4K"],"2025_Movies"],["Ocean's Eleven",1960,"",["DVD","BR","4K"],"2025_Movies"],["Paradise Alley",1978,"",["DVD","BR","4K"],"2025_Movies"],["Plymouth Adventure",1952,"",["DVD","BR","4K"],"2025_Movies"],["Pride",2014,"",["DVD","BR","4K"],"2025_Movies"],["Quiz Show",1994,"",["DVD","BR","4K"],"2025_Movies"],["Risky Business",1983,"",["DVD","BR","4K"],"2025_Movies"],["Rounders",1998,"",["DVD","BR","4K"],"2025_Movies"],["Seven Seas To Calais",1962,"",["DVD","BR","4K"],"2025_Movies"],["Sexy Beast",2000,"",["DVD","BR","4K"],"2025_Movies"],["Sir Francis Drake",1935,"",["DVD","BR","4K"],"2025_Movies"],["The Bedford Incident",1965,"",["DVD","BR","4K"],"2025_Movies"],["The Buccaneers (TV)",1956,"",["DVD","BR","4K"],"2025_Movies"],["The Buccanneers",1956,"",["DVD","BR","4K"],"2025_Movies"],["The Cincinnatti Kid",1965,"",["DVD","BR","4K"],"2025_Movies"],["The Client",1994,"",["DVD","BR","4K"],"2025_Movies"],["The Finest Hours",2016,"",["DVD","BR","4K"],"2025_Movies"],["The Homesman",2014,"",["DVD","BR","4K"],"2025_Movies"],["The Hunted",2003,"",["DVD","BR","4K"],"2025_Movies"],["The Informant",2009,"",["DVD","BR","4K"],"2025_Movies"],["The Last Picture Show",1971,"",["DVD","BR","4K"],"2025_Movies"],["The Riddle Of The Sands",1979,"",["DVD","BR","4K"],"2025_Movies"],["The Roaring Twenties",1939,"",["DVD","BR","4K"],"2025_Movies"],["The St Valentines Day Massacre",1967,"",["DVD","BR","4K"],"2025_Movies"],["The Sunset Limited",2011,"",["DVD","BR","4K"],"2025_Movies"],["The Talented Mr Ripley",1999,"",["DVD","BR","4K"],"2025_Movies"],["The Vikings",1958,"",["DVD","BR","4K"],"2025_Movies"],["Thirteen Days",2000,"DVD",["BR","4K"],"2025_Movies"],["Trumbo",2015,"",["DVD","BR","4K"],"2025_Movies"],["Unforgiven",1992,"",["DVD","BR","4K"],"2025_Movies"],["Wild Bunch",1969,"",["DVD","BR","4K"],"2025_Movies"],["Bourne Identity",1988,"",["DVD","BR","4K"],"2025_Movies"],["Bulworth",1998,"",["DVD","BR","4K"],"2025_Movies"],["How Green Was My Valley",1941,"",["DVD","BR","4K"],"2025_Movies"],["Matewan",1987,"",["DVD","BR","4K"],"2025_Movies"],["The Molly Maguires",1970,"",["DVD","BR","4K"],"2025_Movies"],["Germinal",1993,"",["DVD","BR","4K"],"2025_Movies"],["Heart of the Beast",2026,"",["DVD","BR","4K"],"2025_Movies"],["The Invite",2026,"",["DVD","BR","4K"],"2025_Movies"],["The Drama",2026,"",["DVD","BR","4K"],"2025_Movies"],["Saipan",2025,"",["DVD","BR","4K"],"2025_Movies"],["Pressure",2026,"",["DVD","BR","4K"],"2025_Movies"],["Power Ballad",2026,"",["DVD","BR","4K"],"2025_Movies"],["The Sheep Detectives",2026,"",["DVD","BR","4K"],"2025_Movies"]];
  var BUILT = "25 Nov 2026";
  var API = "https://wss2.cex.uk.webuy.io/v3";
  var LS = "cexListChecker.store";
  var debug = [];

  if (location.hostname.indexOf("webuy.com") < 0) {
    alert("Open uk.webuy.com first, then tap the bookmark again.");
    location.href = "https://uk.webuy.com/";
    return;
  }
  var old = document.getElementById("cexlc");
  if (old) old.remove();

  /* ---------- UI ---------- */
  var box = document.createElement("div");
  box.id = "cexlc";
  box.innerHTML =
    '<style>#cexlc{position:fixed;inset:0;z-index:2147483647;background:#fff;color:#111;font:15px/1.4 system-ui,sans-serif;overflow:auto;padding:12px}' +
    '#cexlc *{box-sizing:border-box}#cexlc h2{font-size:18px;margin:0 0 8px}#cexlc .x{position:absolute;right:12px;top:8px;font-size:26px;background:none;border:0;color:#111}' +
    '#cexlc input,#cexlc button.go,#cexlc button.near{width:100%;font-size:16px;padding:10px;margin:4px 0;border-radius:8px;border:1px solid #999;background:#fff;color:#111}' +
    '#cexlc button.go{background:#c00;color:#fff;border:0;font-weight:600}#cexlc button.go:disabled{opacity:.5}#cexlc .st{color:#555;margin:8px 0}' +
    '#cexlc .sug button{display:block;width:100%;text-align:left;padding:10px;border:0;border-bottom:1px solid #eee;background:#fafafa;color:#111;font-size:16px}' +
    '#cexlc .chosen{font-weight:600;margin:6px 0}' +
    '#cexlc .r{display:block;padding:10px;border:1px solid #ddd;border-radius:8px;margin:6px 0;color:#111;text-decoration:none}' +
    '#cexlc .t{font-weight:600}#cexlc .tag{display:inline-block;font-size:12px;padding:1px 6px;border-radius:4px;margin-right:6px;color:#fff}' +
    '#cexlc .W{background:#070}#cexlc .U{background:#036}#cexlc .p{float:right;font-weight:700}#cexlc .m{font-size:13px;color:#555}' +
    '#cexlc textarea{width:100%;height:200px;font-size:11px}#cexlc a.dbg{font-size:13px;color:#555}</style>' +
    '<button class="x" id="cexlc-x">&times;</button><h2>My list checker</h2>' +
    '<input id="cexlc-q" type="search" placeholder="Type a store name, e.g. Southend" autocomplete="off">' +
    '<div class="sug" id="cexlc-sug"></div>' +
    '<button class="near" id="cexlc-near">Use nearest store</button>' +
    '<div class="chosen" id="cexlc-chosen"></div>' +
    '<button class="go" id="cexlc-go" disabled>Check this store</button>' +
    '<div class="st" id="cexlc-st">' + FILMS.length + ' films on list (updated ' + BUILT + ')</div>' +
    '<div id="cexlc-out"></div><p><a href="#" class="dbg" id="cexlc-dbg">Show debug info</a></p><div id="cexlc-dbo"></div>';
  document.body.appendChild(box);
  var $ = function (id) { return document.getElementById("cexlc-" + id); };
  $("x").onclick = function () { box.remove(); };
  var status = function (s) { $("st").textContent = s; };

  $("dbg").onclick = function (e) {
    e.preventDefault();
    $("dbo").innerHTML = '<textarea readonly></textarea>';
    $("dbo").firstChild.value = JSON.stringify(debug, null, 1).slice(0, 60000);
  };

  function getJSON(url, opts) {
    return fetch(url, opts).then(function (r) {
      if (!r.ok) return r.text().then(function (t) { throw new Error(r.status + " from " + url.split("?")[0] + ": " + t.slice(0, 200)); });
      return r.json();
    });
  }
  function norm(s) {
    return String(s || "").toLowerCase().replace(/&/g, "and").replace(/\(.*?\)|\[.*?\]/g, " ")
      .replace(/[^a-z0-9 ]/g, "").replace(/\b(the|a|an)\b/g, " ").replace(/\s+/g, " ").trim();
  }
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; });
  }
  function fmtOf(cat, name) {
    var s = (cat + " " + name).toLowerCase();
    if (/4k|uhd/.test(s)) return "4K";
    if (/blu/.test(s)) return "BR";
    if (/dvd/.test(s)) return "DVD";
    return null;
  }

  /* ---------- CeX site settings (search keys live in the site's own state) ---------- */
  function pinia() {
    try { return document.querySelector("#__nuxt").__vue_app__.config.globalProperties.$pinia; } catch (e) { return null; }
  }
  function siteSettings() {
    try {
      var st = pinia()._s.get("appsettings-store");
      var a = st && st.appsettings;
      if (a && a.algoliaAppId) return a;
    } catch (e) { debug.push({ settingsErr: String(e) }); }
    return null;
  }

  /* ---------- Store picker ---------- */
  var stores = [], chosen = null;
  function choose(s) {
    chosen = s;
    $("chosen").textContent = s ? "Store: " + s.storeName : "";
    $("go").disabled = !s;
    $("sug").innerHTML = "";
    $("q").value = "";
    if (s) { try { localStorage.setItem(LS, s.storeName); } catch (e) {} }
  }
  $("q").oninput = function () {
    var q = this.value.trim().toLowerCase();
    if (!q) { $("sug").innerHTML = ""; return; }
    var hits = stores.filter(function (s) { return String(s.storeName).toLowerCase().indexOf(q) >= 0; }).slice(0, 8);
    $("sug").innerHTML = hits.length ? "" : '<div class="m">No store matches "' + esc(q) + '"</div>';
    hits.forEach(function (s) {
      var b = document.createElement("button");
      b.type = "button";
      b.textContent = s.storeName;
      b.onclick = function () { choose(s); };
      $("sug").appendChild(b);
    });
  };
  $("near").onclick = function () {
    if (!navigator.geolocation) return status("Your browser can't share location. Type the store name instead.");
    status("Finding your nearest store…");
    navigator.geolocation.getCurrentPosition(function (p) {
      var best = null, bd = 1e9;
      stores.forEach(function (s) {
        var la = parseFloat(s.latitude), lo = parseFloat(s.longitude);
        if (isNaN(la) || isNaN(lo)) return;
        var d = Math.pow(la - p.coords.latitude, 2) + Math.pow((lo - p.coords.longitude) * 0.6, 2);
        if (d < bd) { bd = d; best = s; }
      });
      if (best) { choose(best); status("Nearest store: " + best.storeName); }
      else status("Couldn't work out the nearest store. Type the name instead.");
    }, function () { status("Location was blocked. Type the store name instead."); }, { timeout: 10000 });
  };

  getJSON(API + "/stores").then(function (j) {
    stores = (((j || {}).response || {}).data || {}).stores || [];
    debug.push({ storeCount: stores.length, storeSample: stores[0] });
    stores.sort(function (a, b) { return String(a.storeName).localeCompare(String(b.storeName)); });
    var last = null;
    try { last = localStorage.getItem(LS); } catch (e) {}
    var prev = stores.filter(function (s) { return s.storeName === last; })[0];
    if (prev) choose(prev);
  }).catch(function (e) {
    status("Couldn't load the store list: " + e.message);
    debug.push({ storesErr: String(e) });
  });

  /* ---------- Search, filtered to one store ---------- */
  function searchHost(s) {
    if (s.isAlgoliaProxyEnabled) return "https://search.webuy.io";
    return "https://" + s.algoliaAppId + "-dsn.algolia.net";
  }
  function searchAll(settings, store) {
    var url = searchHost(settings) + "/1/indexes/*/queries?x-algolia-api-key=" + encodeURIComponent(settings.algoliaSearchAppKey) +
      "&x-algolia-application-id=" + encodeURIComponent(settings.algoliaAppId);
    var filter = 'stores:"' + String(store.storeName).replace(/"/g, '\\"') + '" AND sellPrice > 0';
    var chunks = [];
    for (var i = 0; i < FILMS.length; i += 50) chunks.push(FILMS.slice(i, i + 50));
    var done = 0;
    return Promise.all(chunks.map(function (ch) {
      var body = { requests: ch.map(function (f) {
        return { indexName: settings.algoliaIndexName, query: f[0], hitsPerPage: 20, filters: filter,
          attributesToRetrieve: ["*"] };
      }) };
      return getJSON(url, { method: "POST", headers: { "content-type": "application/x-www-form-urlencoded" }, body: JSON.stringify(body) })
        .then(function (j) {
          done += ch.length;
          status("Searching " + store.storeName + "… " + done + "/" + FILMS.length);
          return j.results.map(function (r) { return r.hits || []; });
        }).catch(function (e) {
          debug.push({ searchErr: String(e) });
          return ch.map(function () { return null; });
        });
    })).then(function (parts) {
      return [].concat.apply([], parts);
    });
  }

  /* Pick the CeX products that match a film and a wanted format. */
  function matches(film, hits) {
    var t = norm(film[0]), yr = film[1], out = [];
    hits.forEach(function (h) {
      var name = h.boxName || "";
      var cat = h.categoryFriendlyName || h.categoryName || "";
      var fmt = fmtOf(cat, name);
      if (!fmt || film[3].indexOf(fmt) < 0) return;
      var n = norm(name);
      if (n !== t && n.indexOf(t + " ") !== 0) return;
      if (/season|series|box ?set|trilogy/i.test(name) && !/season|series/i.test(film[0])) return;
      var y = (name.match(/\b(19[2-9]\d|20[0-3]\d)\b/) || [])[1];
      if (yr && y && Math.abs(+y - yr) > 1) return;
      out.push({ id: h.boxId, name: name, fmt: fmt, cat: cat, price: h.sellPrice, yearOk: !!(yr && y) || !yr });
    });
    return out;
  }

  /* ---------- Run ---------- */
  $("go").onclick = function () {
    var store = chosen;
    if (!store) return status("Pick a store first.");
    $("go").disabled = true;
    $("out").innerHTML = "";
    var settings = siteSettings();
    if (!settings) {
      status("Couldn't read CeX's search settings. Let the page finish loading, then try again.");
      $("go").disabled = false;
      return;
    }
    debug.push({ index: settings.algoliaIndexName, proxy: settings.isAlgoliaProxyEnabled, store: store.storeName });
    searchAll(settings, store).then(function (hitLists) {
      var failed = hitLists.filter(function (h) { return h === null; }).length;
      var sample = hitLists.filter(function (h) { return h && h.length; })[0];
      if (sample) debug.push({ hitSample: sample[0] });
      var found = [], raw = [];
      FILMS.forEach(function (f, i) {
        matches(f, hitLists[i] || []).forEach(function (m) { m.film = f; found.push(m); });
        if (raw.length < 6 && hitLists[i] && hitLists[i].length) raw.push({ film: f[0] + " (" + f[1] + ")", cex: hitLists[i].slice(0, 3) });
      });
      debug.push({ rawRecords: raw });
      found.sort(function (a, b) {
        return (a.film[2] ? 1 : 0) - (b.film[2] ? 1 : 0) || String(a.film[0]).localeCompare(b.film[0]);
      });
      if (failed === FILMS.length) {
        status("The search didn't work. Tap Show debug info below and send it to Claude.");
        return;
      }
      status((found.length ? store.storeName + ": " + found.length + " in stock" : "Nothing from your list in " + store.storeName + " right now.") +
        (failed ? " (" + failed + " films couldn't be checked; see debug info)" : ""));
      $("out").innerHTML = found.map(function (c) {
        var up = !!c.film[2];
        return '<a class="r" href="/product-detail?id=' + encodeURIComponent(c.id) + '">' +
          '<span class="p">' + (c.price != null ? "£" + Number(c.price).toFixed(2) : "") + "</span>" +
          '<span class="tag ' + (up ? "U" : "W") + '">' + (up ? "UPGRADE" : "WANTED") + "</span>" +
          '<span class="t">' + esc(c.film[0]) + (c.film[1] ? " (" + c.film[1] + ")" : "") + "</span><br>" +
          '<span class="m">' + c.fmt + (up ? " · you own: " + esc(c.film[2]) : "") +
          (c.yearOk ? "" : " · check it's the right version") + " · " + esc(c.film[4]) + "<br>" + esc(c.name) + "</span></a>";
      }).join("");
    }).catch(function (e) {
      status("Something went wrong: " + e.message + " (see debug info)");
      debug.push({ runErr: String(e) });
    }).then(function () { $("go").disabled = false; });
  };
})();
