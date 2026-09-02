// Lightweight client-side password gate.
//
// NOT real security — the password below is plain text in this file, and
// anyone with devtools can bypass this entirely by running
// sessionStorage.setItem('interview_dashboard_gate_ok','1') in the console.
// It exists only because GitHub Pages on a free-plan account has no
// private-visibility option, so the content would otherwise be reachable by
// anyone with the URL. Combined with robots.txt + noindex meta tags, this
// keeps the dashboards out of search engines and away from casual visitors.
// Fine for unsensitive interview notes — not for anything truly sensitive.
(function(){
  'use strict';

  var STORAGE_KEY = 'interview_dashboard_gate_ok';
  var PASSWORD = 'Lupine-Krokus-34';

  document.documentElement.style.visibility = 'hidden';

  var ok = false;
  try{ ok = sessionStorage.getItem(STORAGE_KEY) === '1'; }catch(e){}

  if(!ok){
    for(var attempts = 0; attempts < 5 && !ok; attempts++){
      var input = window.prompt('Privater Bereich – bitte Passwort eingeben:\n(Private area – please enter the password:)');
      if(input === null){ break; }
      if(input === PASSWORD){
        ok = true;
        try{ sessionStorage.setItem(STORAGE_KEY, '1'); }catch(e){}
      }
    }
  }

  window.__authGateOk = ok;
  document.documentElement.style.visibility = 'visible';

  if(!ok){
    document.title = 'Zugriff verweigert';
    document.documentElement.innerHTML =
      '<head><meta charset="UTF-8"><meta name="robots" content="noindex, nofollow"></head>' +
      '<body style="margin:0;min-height:100vh;display:flex;align-items:center;justify-content:center;' +
      'font-family:-apple-system,BlinkMacSystemFont,\'Segoe UI\',Roboto,sans-serif;background:#15181A;color:#F3F1EA;">' +
      '<div style="text-align:center;"><div style="font-size:18px;font-weight:900;margin-bottom:8px;">Zugriff verweigert</div>' +
      '<div style="font-size:13px;color:#9AA192;">Seite neu laden, um es erneut zu versuchen.</div></div></body>';
  }
})();
