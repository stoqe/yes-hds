parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"vZyd":[function(require,module,exports) {
var e=instantsearch({indexName:"hds_zones",searchClient:algoliasearch("6H4RUOWB7Q","c4920017f671d06dd4796aaa89d05112")});e.addWidgets([instantsearch.widgets.searchBox({container:"#searchbox"}),instantsearch.widgets.clearRefinements({container:"#clear-refinements"}),instantsearch.widgets.refinementList({container:"#filters",attribute:"Delivery_State"}),instantsearch.widgets.hits({container:"#hits",templates:{item:'\n<span> \n<span class="hit-suburb">{{Suburb}}</span>\n          <span class="hit-name">\n {{#helpers.highlight}}{ "attribute": "Zone Name" }{{/helpers.highlight}}\n </span>\n    <span class="hit-postcode">\n  {{#helpers.highlight}}{ "attribute": "Postcode" }{{/helpers.highlight}}\n </span>\n      <span class="hit-state">{{Delivery_State}},</span>\n     <span class="hit-postcode">{{Postcode}}</span>\n     <span class="hit-zone">{{Zone Name}}</span>\n        <span class="hit-day">{{Day Of Week}}</span>\n    <span class="hit-start">{{DefaultStart}} - </span>\n       <span class="hit-finish">{{DefaultFinish}}</span>\n        </span>\n      '}}),instantsearch.widgets.pagination({container:"#pagination"})]),e.start();
},{}]},{},["vZyd"], null)
//# sourceMappingURL=/app.066b175f.js.map