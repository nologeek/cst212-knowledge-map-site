(function () {
  "use strict";

  var scheduled = new WeakMap();

  function svgNode(name, attributes) {
    var node = document.createElementNS("http://www.w3.org/2000/svg", name);
    Object.keys(attributes || {}).forEach(function (key) { node.setAttribute(key, attributes[key]); });
    return node;
  }

  function point(node, rootRect, side) {
    var rect = node.getBoundingClientRect();
    var x = rect.left - rootRect.left + rect.width / 2;
    var y = rect.top - rootRect.top + rect.height / 2;
    if (side === "top") y = rect.top - rootRect.top;
    if (side === "bottom") y = rect.bottom - rootRect.top;
    return { x: x, y: y };
  }

  function curve(from, to) {
    var distance = Math.max(34, Math.abs(to.y - from.y) * .42);
    var direction = to.y >= from.y ? 1 : -1;
    return "M " + from.x + " " + from.y + " C " + from.x + " " + (from.y + distance * direction) + ", " + to.x + " " + (to.y - distance * direction) + ", " + to.x + " " + to.y;
  }

  function wire(svg, from, to, className, markerId) {
    var path = svgNode("path", {
      d: curve(from, to),
      class: "atlas-ai-wire " + (className || ""),
      "marker-end": "url(#" + markerId + ")"
    });
    svg.appendChild(path);
  }

  function junction(svg, at) {
    svg.appendChild(svgNode("circle", { cx: at.x, cy: at.y, r: 3.2, class: "atlas-ai-junction" }));
  }

  function prepareSvg(stage, type) {
    var svg = stage.querySelector('.atlas-ai-connectivity[data-atlas-connectivity="' + type + '"]');
    if (!svg) {
      svg = svgNode("svg", {
        class: "atlas-ai-connectivity atlas-ai-connectivity--" + type,
        "data-atlas-connectivity": type,
        "aria-hidden": "true",
        preserveAspectRatio: "none"
      });
      stage.prepend(svg);
    }
    while (svg.firstChild) svg.removeChild(svg.firstChild);
    var defs = svgNode("defs");
    var markerId = "atlas-ai-arrow-" + type;
    var marker = svgNode("marker", { id: markerId, viewBox: "0 0 10 10", refX: "8", refY: "5", markerWidth: "6", markerHeight: "6", orient: "auto-start-reverse" });
    marker.appendChild(svgNode("path", { d: "M 0 0 L 10 5 L 0 10 z", fill: "#70ded8" }));
    defs.appendChild(marker);
    svg.appendChild(defs);
    return { svg: svg, markerId: markerId };
  }

  function drawDiagram02(stage) {
    var prepared = prepareSvg(stage, "d2");
    if (!stage.classList.contains("is-ai-lens")) return;
    var source = stage.querySelector('.d2is-ai-entry[data-d2is-detail="technology-ai"]');
    var technology = stage.querySelector('.d2is-component[data-d2is-detail="technology"]');
    if (!source || !technology) return;
    source.classList.add("atlas-ai-source");
    technology.classList.add("atlas-ai-source");
    var rect = stage.getBoundingClientRect();
    prepared.svg.setAttribute("viewBox", "0 0 " + rect.width + " " + rect.height);
    wire(prepared.svg, point(technology, rect, "bottom"), point(source, rect, "top"), "is-entry", prepared.markerId);
    var pairs = [
      ["ai-people", "people", false],
      ["ai-processes", "processes", false],
      ["ai-information", "information", false],
      ["rules-ai", "rules", true]
    ];
    pairs.forEach(function (pair) {
      var relationship = stage.querySelector('[data-d2is-detail="' + pair[0] + '"]');
      var target = stage.querySelector('[data-d2is-detail="' + pair[1] + '"]');
      if (!relationship || !target) return;
      relationship.classList.add("atlas-ai-edge");
      target.classList.add("atlas-ai-target");
      var sourcePoint = point(source, rect, "bottom");
      var relationshipTop = point(relationship, rect, "top");
      var relationshipBottom = point(relationship, rect, "bottom");
      var targetPoint = point(target, rect, pair[2] ? "bottom" : "bottom");
      if (pair[2]) {
        wire(prepared.svg, targetPoint, relationshipTop, "is-governance", prepared.markerId);
        wire(prepared.svg, relationshipTop, sourcePoint, "is-governance", prepared.markerId);
      } else {
        wire(prepared.svg, sourcePoint, relationshipTop, "is-trunk", prepared.markerId);
        wire(prepared.svg, relationshipBottom, targetPoint, "", prepared.markerId);
      }
      junction(prepared.svg, relationshipTop);
    });
  }

  function drawDiagram03(stage) {
    var prepared = prepareSvg(stage, "d3");
    if (!stage.classList.contains("is-ai-lens")) return;
    var technology = stage.querySelector('.d3bp-support-node[data-d3bp-detail="technology"]');
    var hub = stage.querySelector('.d3bp-ai-hub[data-d3bp-detail="ai-overview"]');
    if (!technology || !hub) return;
    technology.classList.add("atlas-ai-source");
    hub.classList.add("atlas-ai-source");
    var rect = stage.getBoundingClientRect();
    prepared.svg.setAttribute("viewBox", "0 0 " + rect.width + " " + rect.height);
    wire(prepared.svg, point(technology, rect, "bottom"), point(hub, rect, "top"), "is-entry", prepared.markerId);
    var pairs = [
      ["ai-input", "input"],
      ["ai-information", "information"],
      ["ai-activity", "activity"],
      ["ai-decision", "decision"]
    ];
    pairs.forEach(function (pair) {
      var relationship = stage.querySelector('[data-d3bp-detail="' + pair[0] + '"]');
      var targets = stage.querySelectorAll('[data-d3bp-detail="' + pair[1] + '"]');
      if (!relationship || !targets.length) return;
      relationship.classList.add("atlas-ai-edge");
      var relationTop = point(relationship, rect, "top");
      wire(prepared.svg, point(hub, rect, "bottom"), relationTop, "is-trunk", prepared.markerId);
      junction(prepared.svg, relationTop);
      targets.forEach(function (target) {
        target.classList.add("atlas-ai-target");
        wire(prepared.svg, point(relationship, rect, "top"), point(target, rect, "bottom"), pair[0] === "ai-decision" ? "is-governance" : "", prepared.markerId);
      });
    });
  }

  function schedule(stage, type) {
    if (scheduled.get(stage)) cancelAnimationFrame(scheduled.get(stage));
    scheduled.set(stage, requestAnimationFrame(function () {
      scheduled.delete(stage);
      if (type === "d2") drawDiagram02(stage);
      else drawDiagram03(stage);
    }));
  }

  function setup(stage, type) {
    if (!stage || stage.dataset.atlasConnectivityReady) return;
    stage.dataset.atlasConnectivityReady = type;
    var observer = new MutationObserver(function (records) {
      if (records.some(function (record) { return record.attributeName === "class"; })) schedule(stage, type);
    });
    observer.observe(stage, { attributes: true, attributeFilter: ["class"] });
    if (window.ResizeObserver) new ResizeObserver(function () { schedule(stage, type); }).observe(stage);
    schedule(stage, type);
  }

  function scan() {
    setup(document.querySelector('.d2is-stage[data-diagram02="true"]'), "d2");
    setup(document.querySelector('.d3bp-stage[data-diagram03="true"]'), "d3");
  }

  var documentObserver = new MutationObserver(scan);
  function start() {
    scan();
    documentObserver.observe(document.documentElement, { childList: true, subtree: true });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start, { once: true });
  else start();
}());
