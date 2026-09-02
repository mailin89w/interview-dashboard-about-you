// Reusable shell for every interview dashboard.
// Reads window.DASHBOARD_DATA (set by the job's content.js) and renders the
// topbar, sidebar, 3x3 grid, and modal. Behavior (lang switch, theme switch,
// modal, tabs, accordion) is identical across every dashboard.
(function(){
  'use strict';

  if(window.__authGateOk === false){ return; }

  var DATA = window.DASHBOARD_DATA;
  if(!DATA){
    console.error('DASHBOARD_DATA is missing — make sure content.js is loaded before dashboard-template.js.');
    return;
  }

  var PERSON = { name: 'Daniela Klein', avatar: '../../../assets/avatar-daniela.jpg' };

  var UI_LABELS = {
    de: {
      topbarTitle: 'Interview-Dashboard',
      eckdatenLbl: 'Eckdaten',
      rolleLbl: 'Rolle', standortLbl: 'Standort', interviewLbl: 'Interview', gehaltLbl: 'Gehalt',
      anzeigeLbl: 'Aus der Anzeige', forderungLbl: 'Meine Forderung', minimumLbl: 'Mein Minimum'
    },
    en: {
      topbarTitle: 'Interview Dashboard',
      eckdatenLbl: 'Key Facts',
      rolleLbl: 'Role', standortLbl: 'Location', interviewLbl: 'Interview', gehaltLbl: 'Salary',
      anzeigeLbl: 'From the job ad', forderungLbl: 'My ask', minimumLbl: 'My minimum'
    }
  };

  if(document.title !== undefined){ document.title = DATA.documentTitle || document.title; }

  document.body.innerHTML =
    '<div class="topbar">' +
      '<div class="tb-left"><a href="../../../index.html" id="homeLink"></a></div>' +
      '<div class="tb-right">' +
        '<div class="seg" id="langSeg"><button data-lang="de" class="active">DE</button><button data-lang="en">EN</button></div>' +
        '<div class="seg" id="themeSeg"><button data-theme-btn="light" class="active">Light</button><button data-theme-btn="dark">Dark</button></div>' +
      '</div>' +
    '</div>' +
    '<div class="layout">' +
      '<aside class="sidebar">' +
        '<div class="avatar"><img src="' + PERSON.avatar + '" alt="' + PERSON.name + '"></div>' +
        '<div class="sb-name">' + PERSON.name + '</div>' +
        '<div class="sb-role" id="sbRole"></div>' +
        '<div class="eckdaten">' +
          '<h4 id="eckdatenLbl"></h4>' +
          '<div class="eck-row"><div class="eck-k" id="rolleLbl"></div><div class="eck-v" id="rolleVal"></div></div>' +
          '<div class="eck-row"><div class="eck-k" id="standortLbl"></div><div class="eck-v" id="standortVal"></div></div>' +
          '<div class="eck-row"><div class="eck-k" id="interviewLbl"></div><div class="eck-v" id="interviewVal"></div></div>' +
          '<div class="eck-row">' +
            '<div class="eck-k" id="gehaltLbl"></div>' +
            '<div class="eck-salary">' +
              '<div class="s"><span class="l" id="anzeigeLbl"></span><span class="n" id="anzeigeVal"></span></div>' +
              '<div class="s"><span class="l" id="forderungLbl"></span><span class="n" id="forderungVal"></span></div>' +
              '<div class="s"><span class="l" id="minimumLbl"></span><span class="n" id="minimumVal"></span></div>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</aside>' +
      '<main class="main">' +
        '<div class="intro"><h1 id="introTitle"></h1><p id="introText"></p></div>' +
        '<div class="grid" id="grid">' +
          [1,2,3,4,5,6,7,8,9].map(function(n){
            return '<div class="gbox" data-box="' + n + '"><div class="gnum">' + n + '</div><div class="gtitle"></div></div>';
          }).join('') +
        '</div>' +
      '</main>' +
    '</div>' +
    '<div class="overlay" id="overlay">' +
      '<div class="modal">' +
        '<div class="modal-head">' +
          '<div class="mnum" id="modalNum">1</div>' +
          '<h2 id="modalTitle">Titel</h2>' +
          '<button class="modal-close" id="modalClose">✕</button>' +
        '</div>' +
        '<div class="modal-body" id="modalBody"></div>' +
      '</div>' +
    '</div>';

  var currentLang = 'de';
  var currentTheme = 'light';
  var currentOpenBox = null;

  try{
    var savedLang = localStorage.getItem('interview_dashboard_lang');
    var savedTheme = localStorage.getItem('interview_dashboard_theme');
    if(savedLang === 'de' || savedLang === 'en') currentLang = savedLang;
    if(savedTheme === 'light' || savedTheme === 'dark') currentTheme = savedTheme;
  }catch(e){}

  var overlay = document.getElementById('overlay');
  var modalBody = document.getElementById('modalBody');
  var modalTitle = document.getElementById('modalTitle');
  var modalNum = document.getElementById('modalNum');

  function applyLang(lang){
    currentLang = lang;
    var ui = UI_LABELS[lang];
    var facts = DATA.facts[lang];

    document.documentElement.lang = lang;
    var homeLink = document.getElementById('homeLink');
    homeLink.textContent = ui.topbarTitle;
    homeLink.title = lang === 'de' ? 'Zur Startseite' : 'Back to overview';
    document.getElementById('sbRole').innerHTML = facts.roleSubtitle;
    document.getElementById('eckdatenLbl').textContent = ui.eckdatenLbl;
    document.getElementById('rolleLbl').textContent = ui.rolleLbl;
    document.getElementById('rolleVal').textContent = facts.role;
    document.getElementById('standortLbl').textContent = ui.standortLbl;
    document.getElementById('standortVal').textContent = facts.location;
    document.getElementById('interviewLbl').textContent = ui.interviewLbl;
    document.getElementById('interviewVal').textContent = facts.interviewDate;
    document.getElementById('gehaltLbl').textContent = ui.gehaltLbl;
    document.getElementById('anzeigeLbl').textContent = ui.anzeigeLbl;
    document.getElementById('anzeigeVal').textContent = facts.salaryAd;
    document.getElementById('forderungLbl').textContent = ui.forderungLbl;
    document.getElementById('forderungVal').textContent = facts.salaryAsk;
    document.getElementById('minimumLbl').textContent = ui.minimumLbl;
    document.getElementById('minimumVal').textContent = facts.salaryMin;
    document.getElementById('introTitle').textContent = facts.introTitle;
    document.getElementById('introText').innerHTML = facts.introText;

    document.querySelectorAll('.gbox').forEach(function(box){
      var n = box.dataset.box;
      box.querySelector('.gtitle').textContent = DATA.titles[n][lang];
    });

    document.querySelectorAll('#langSeg button').forEach(function(b){
      b.classList.toggle('active', b.dataset.lang === lang);
    });

    if(currentOpenBox){ openModal(currentOpenBox); }

    try{ localStorage.setItem('interview_dashboard_lang', lang); }catch(e){}
  }

  function applyTheme(theme){
    currentTheme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    document.querySelectorAll('#themeSeg button').forEach(function(b){
      b.classList.toggle('active', b.dataset.themeBtn === theme);
    });
    try{ localStorage.setItem('interview_dashboard_theme', theme); }catch(e){}
  }

  function openModal(n){
    currentOpenBox = n;
    modalNum.textContent = n;
    modalTitle.textContent = DATA.titles[n][currentLang];
    modalBody.innerHTML = DATA.content[currentLang][n];
    overlay.classList.add('show');
    document.body.style.overflow = 'hidden';
  }
  function closeModal(){
    currentOpenBox = null;
    overlay.classList.remove('show');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.gbox').forEach(function(box){
    box.addEventListener('click', function(){ openModal(box.dataset.box); });
  });
  document.getElementById('modalClose').addEventListener('click', closeModal);
  overlay.addEventListener('click', function(e){ if(e.target === overlay){ closeModal(); } });
  document.addEventListener('keydown', function(e){ if(e.key === 'Escape'){ closeModal(); } });

  modalBody.addEventListener('click', function(e){
    var tabBtn = e.target.closest('.mtab');
    if(tabBtn){
      var tabsWrap = tabBtn.closest('.mtabs');
      var group = tabsWrap.dataset.group;
      var target = tabBtn.dataset.tab;
      tabsWrap.querySelectorAll('.mtab').forEach(function(b){ b.classList.toggle('active', b===tabBtn); });
      modalBody.querySelectorAll('.mtabpanel[data-group="'+group+'"]').forEach(function(p){ p.classList.toggle('active', p.dataset.panel===target); });
      return;
    }
    var accHead = e.target.closest('.macc-head');
    if(accHead){
      accHead.closest('.macc').classList.toggle('open');
      return;
    }
  });

  document.querySelectorAll('#langSeg button').forEach(function(b){
    b.addEventListener('click', function(){ applyLang(b.dataset.lang); });
  });
  document.querySelectorAll('#themeSeg button').forEach(function(b){
    b.addEventListener('click', function(){ applyTheme(b.dataset.themeBtn); });
  });

  applyLang(currentLang);
  applyTheme(currentTheme);
})();
