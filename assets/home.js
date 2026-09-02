// Homepage logic: loads /data/employers.json, renders employer cards, and
// opens a modal with that employer's jobs (newest interview/application date
// first). Clicking a job navigates to its dashboard. Add a new employer or
// job by editing data/employers.json only — nothing here needs to change.
(function(){
  'use strict';

  if(window.__authGateOk === false){ return; }

  var grid = document.getElementById('employerGrid');
  var overlay = document.getElementById('overlay');
  var modalTitle = document.getElementById('modalTitle');
  var modalBody = document.getElementById('modalBody');
  var modalClose = document.getElementById('modalClose');

  function closeModal(){
    overlay.classList.remove('show');
    document.body.style.overflow = '';
  }
  modalClose.addEventListener('click', closeModal);
  overlay.addEventListener('click', function(e){ if(e.target === overlay){ closeModal(); } });
  document.addEventListener('keydown', function(e){ if(e.key === 'Escape'){ closeModal(); } });

  function openEmployer(employer){
    var jobs = (employer.jobs || []).slice().sort(function(a, b){
      return (b.date || '').localeCompare(a.date || '');
    });

    modalTitle.textContent = employer.employer;

    if(jobs.length === 0){
      modalBody.innerHTML = '<div class="empty-state">Noch keine Jobs hinterlegt.</div>';
    } else {
      modalBody.innerHTML = '<ul class="joblist">' + jobs.map(function(job){
        var dateLabel = formatDate(job.date);
        return '<li data-href="' + job.dashboardPath + '">' +
          '<div class="jtitle">' + escapeHtml(job.title) + '</div>' +
          '<div class="jdate">' + dateLabel + '</div>' +
        '</li>';
      }).join('') + '</ul>';

      modalBody.querySelectorAll('.joblist li').forEach(function(li){
        li.addEventListener('click', function(){
          window.location.href = li.dataset.href;
        });
      });
    }

    overlay.classList.add('show');
    document.body.style.overflow = 'hidden';
  }

  function formatDate(iso){
    if(!iso) return '';
    var parts = iso.split('-');
    if(parts.length !== 3) return iso;
    var months = ['Jan','Feb','Mär','Apr','Mai','Jun','Jul','Aug','Sep','Okt','Nov','Dez'];
    var m = parseInt(parts[1], 10) - 1;
    return parts[2] + '. ' + (months[m] || parts[1]) + ' ' + parts[0];
  }

  function escapeHtml(s){
    var div = document.createElement('div');
    div.textContent = s;
    return div.innerHTML;
  }

  fetch('data/employers.json')
    .then(function(res){
      if(!res.ok) throw new Error('Could not load employers.json (HTTP ' + res.status + ')');
      return res.json();
    })
    .then(function(data){
      var employers = data.employers || [];
      if(employers.length === 0){
        grid.innerHTML = '<div class="empty-state">Noch keine Arbeitgeber hinterlegt.</div>';
        return;
      }
      grid.innerHTML = employers.map(function(emp, i){
        var jobCount = (emp.jobs || []).length;
        var jobLabel = jobCount === 1 ? '1 Job' : jobCount + ' Jobs';
        return '<div class="employer-card" data-index="' + i + '">' +
          '<div class="ename">' + escapeHtml(emp.employer) + '</div>' +
          '<div class="ejobs">' + jobLabel + '</div>' +
        '</div>';
      }).join('');

      grid.querySelectorAll('.employer-card').forEach(function(card){
        card.addEventListener('click', function(){
          openEmployer(employers[card.dataset.index]);
        });
      });
    })
    .catch(function(err){
      grid.innerHTML = '<div class="empty-state">Arbeitgeberliste konnte nicht geladen werden: ' + escapeHtml(err.message) + '</div>';
      console.error(err);
    });
})();
