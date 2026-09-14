(function () {
  'use strict';
  var views = window.CST212W3Views = window.CST212W3Views || {};

  function model() { return window.CST212_W3.models.w3d_dictionary; }
  function localized(value, api) { return api.escape(api.text(value)); }
  function phrase(es, en, api) { return api.escape(api.tr(es, en)); }
  function node(name, className, label, api) {
    return api.node('w3d_' + name, className, label);
  }

  function entryMarkup(entry, api) {
    var store = entry.kindConcept === 'w3d_store';
    var fields = entry.composition.map(function (field) {
      return api.node(field, 'w3d-field', model().fieldNames[field]);
    }).join('');
    return '<div class="w3d-comparison" role="group" aria-label="' +
      phrase('Comparar el nombre del DFD con la entrada del diccionario', 'Compare the DFD name with the dictionary entry', api) + '">' +
      '<div class="w3d-reference"><span class="w3d-caption">' +
      node('dfd', 'w3d-term', api.tr('DFD: movimiento', 'DFD: movement'), api) + '</span>' +
      api.node(entry.kindConcept, 'w3d-name', api.text(entry.name)) + '</div>' +
      '<div class="w3d-correspondence"><span aria-hidden="true">&harr;</span>' +
      node('naming', 'w3d-term', api.tr('Mismo nombre', 'Same name'), api) + '</div>' +
      '<div class="w3d-reference"><span class="w3d-caption">' +
      node('dictionary', 'w3d-term', api.tr('DD: significado', 'DD: meaning'), api) + '</span>' +
      api.node(entry.concept, 'w3d-name', api.text(entry.name)) + '</div></div>' +
      '<dl class="w3d-definition">' +
      '<div class="w3d-definition-name"><dt>' + phrase('Nombre', 'Name', api) + '</dt><dd>' +
      api.node(entry.concept, 'w3d-inline', api.text(entry.name)) + '</dd></div>' +
      '<div class="w3d-definition-description"><dt>' +
      node('description', 'w3d-term', api.tr('Descripci\u00f3n', 'Description'), api) + '</dt><dd>' +
      localized(entry.description, api) + '</dd></div>' +
      '<div><dt>' + node('sourceDestination', 'w3d-term', api.tr('Origen', 'Source'), api) +
      '</dt><dd>' + api.node(entry.source.concept, 'w3d-inline', api.text(entry.source.label)) + '</dd></div>' +
      '<div><dt>' + node('sourceDestination', 'w3d-term', api.tr('Destino', 'Destination'), api) +
      '</dt><dd>' + api.node(entry.destination.concept, 'w3d-inline', api.text(entry.destination.label)) + '</dd></div>' +
      '<div class="w3d-composition"><dt>' +
      node('structure', 'w3d-term', api.tr('Composici\u00f3n posible', 'Possible composition'), api) +
      '<span class="w3d-illustrative">' + phrase('Ilustrativa', 'Illustrative', api) + '</span></dt>' +
      '<dd><div class="w3d-fields" role="group" aria-label="' +
      phrase('Elementos ilustrativos: abrir definici\u00f3n de cada campo', 'Illustrative elements: open each field definition', api) + '">' +
      fields + '</div></dd></div></dl>' +
      '<p class="w3d-entry-note">' + localized(entry.note, api) + '</p>' +
      '<p class="w3d-distinction">' +
      node('structure', 'w3d-inline', api.tr('Estructura', 'Structure'), api) +
      '<span aria-hidden="true"> &ne; </span><span class="w3d-sr">' + phrase('no es', 'is not', api) + ' </span>' +
      node('flow', 'w3d-inline', api.tr('flujo', 'flow'), api) +
      '<span class="w3d-distinction-text">' +
      (store ? phrase('Describe contenido y usos, sin elegir una tecnolog\u00eda.', 'Describes contents and uses without choosing a technology.', api) :
        phrase('Agrupar campos no indica c\u00f3mo se mueven.', 'Grouping fields does not show how they move.', api)) + '</span></p>';
  }

  views['05'] = {
    render: function (data, lang, api) {
      var dictionary = model();
      var initial = dictionary.entries.filter(function (entry) { return entry.key === dictionary.defaultEntry; })[0] || dictionary.entries[0];
      var options = dictionary.entries.map(function (entry) {
        return '<option value="' + api.escape(entry.key) + '"' + (entry === initial ? ' selected' : '') + '>' +
          localized(entry.name, api) + '</option>';
      }).join('');
      return '<div class="w3d"><div class="w3d-native">' +
        '<div class="w3d-toolbar"><div><p class="w3d-eyebrow">' + phrase('Diccionario en uso', 'Dictionary in use', api) +
        '</p><p class="w3d-instruction">' + phrase('Elige una entrada y explora sus elementos.', 'Choose an entry and explore its elements.', api) +
        '</p></div><label class="w3d-selector"><span>' + phrase('Entrada', 'Entry', api) + '</span>' +
        '<select data-w3d-select aria-label="' + phrase('Seleccionar entrada del diccionario', 'Select dictionary entry', api) + '">' +
        options + '</select></label></div>' +
        '<div class="w3d-entry" data-w3d-entry role="group" aria-label="' +
        phrase('Definici\u00f3n de la entrada seleccionada', 'Selected entry definition', api) + '">' +
        entryMarkup(initial, api) + '</div>' +
        '<p class="w3d-sr" data-w3d-announcement role="status" aria-live="polite" aria-atomic="true"></p>' +
        '</div><div class="w3d-support">' + api.support(data) + '</div></div>';
    },
    bind: function (figure, data, lang, api) {
      var root = figure.querySelector('.w3d');
      if (!root) { return function () {}; }
      var select = root.querySelector('[data-w3d-select]');
      var entryContainer = root.querySelector('[data-w3d-entry]');
      var announcement = root.querySelector('[data-w3d-announcement]');
      function onChange(event) {
        if (event.target !== select) { return; }
        var entry = model().entries.filter(function (item) { return item.key === select.value; })[0];
        if (!entry) { return; }
        // Replace only the local definition. The shell, support and current lens stay intact.
        entryContainer.innerHTML = entryMarkup(entry, api);
        announcement.textContent = api.tr('Entrada seleccionada: ', 'Selected entry: ') + api.text(entry.name) +
          api.tr('. Composici\u00f3n ilustrativa.', '. Illustrative composition.');
      }
      figure.addEventListener('change', onChange);
      return function () { figure.removeEventListener('change', onChange); };
    }
  };
}());
