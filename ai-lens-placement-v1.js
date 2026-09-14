(function () {
  "use strict";

  function placeDiagram01() {
    var stage = document.querySelector('.d1l-stage');
    if (!stage) return false;
    var figure = stage.closest('figure');
    var control = figure && figure.querySelector('.d1l-lens-control');
    var aiNode = stage.querySelector('.d1l-ai');
    if (!control || !aiNode) return false;
    stage.classList.add('has-contextual-ai-control');
    if (!control.classList.contains('d1l-lens-inline')) {
      control.classList.add('d1l-lens-inline');
      aiNode.parentElement.insertBefore(control, aiNode);
    }
    return true;
  }

  function placeDiagram02() {
    var stage = document.querySelector('.d2is-stage[data-diagram02="true"]');
    if (!stage) return false;
    var figure = stage.closest('figure');
    var control = figure && figure.querySelector('.d2is-lens-control');
    var aiNode = stage.querySelector('.d2is-ai-entry');
    if (!control || !aiNode) return false;
    if (!control.classList.contains('d2is-lens-inline')) {
      control.classList.add('d2is-lens-inline');
      aiNode.parentElement.insertBefore(control, aiNode);
    }
    return true;
  }

  function placeDiagram03() {
    var stage = document.querySelector('.d3bp-stage[data-diagram03="true"]');
    if (!stage) return false;
    var figure = stage.closest('figure');
    var control = figure && figure.querySelector('.d3bp-lens-control');
    var support = stage.querySelector('.d3bp-support');
    if (!control || !support) return false;
    var gateway = stage.querySelector('.d3bp-lens-gateway');
    if (!gateway) {
      gateway = document.createElement('div');
      gateway.className = 'd3bp-lens-gateway';
      gateway.setAttribute('aria-label', document.documentElement.lang === 'en' ? 'Technology and AI Lens' : 'Tecnología y capa IA');
      var preview = document.createElement('div');
      preview.className = 'd3bp-ai-preview';
      preview.innerHTML = '<small>TECHNOLOGY → AI</small><strong><span class="is-off">IA · OFF</span><span class="is-on">IA · ON</span></strong>';
      gateway.appendChild(control);
      gateway.appendChild(preview);
      support.insertAdjacentElement('afterend', gateway);
    } else if (!gateway.contains(control)) {
      gateway.insertBefore(control, gateway.firstChild);
    }
    return true;
  }

  function placeAll() {
    return placeDiagram01() && placeDiagram02() && placeDiagram03();
  }

  function start() {
    var attempts = 0;
    function retry() {
      attempts += 1;
      if (!placeAll() && attempts < 24) window.setTimeout(retry, 180);
    }
    retry();
    var week = document.getElementById('week-1');
    if (!week) return;
    var scheduled = false;
    new MutationObserver(function () {
      if (scheduled) return;
      scheduled = true;
      window.setTimeout(function () { scheduled = false; placeAll(); }, 60);
    }).observe(week, { childList: true, subtree: true });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start, { once: true });
  else start();
}());
