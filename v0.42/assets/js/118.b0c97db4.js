(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{809:function(e,i,t){"use strict";t.r(i);var l=t(1),o=Object(l.a)({},(function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"recommended-folder-structure"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#recommended-folder-structure"}},[e._v("#")]),e._v(" Recommended Folder Structure")]),e._v(" "),t("p",{attrs:{synopsis:""}},[e._v("This document outlines the recommended structure of Cosmos SDK modules. These ideas are meant to be applied as suggestions. Application developers are encouraged to improve upon and contribute to module structure and development design.")]),e._v(" "),t("h2",{attrs:{id:"structure"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#structure"}},[e._v("#")]),e._v(" Structure")]),e._v(" "),t("p",[e._v("A typical Cosmos SDK module can be structured as follows:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"eC97bW9kdWxlfQrilJzilIDilIAgY2xpZW50CuKUgsKgwqAg4pSc4pSA4pSAIGNsaQrilILCoMKgIOKUgiAgIOKUnOKUgOKUgCBxdWVyeS5nbwrilILCoMKgIOKUgsKgwqAg4pSU4pSA4pSAIHR4LmdvCuKUgsKgwqAg4pSU4pSA4pSAIHJlc3QK4pSCwqDCoCAgICAg4pSc4pSA4pSAIHF1ZXJ5LmdvCuKUgsKgwqAgICAgIOKUlOKUgOKUgCB0eC5nbwrilJzilIDilIAgZXhwb3J0ZWQK4pSCwqDCoCDilJTilIDilIAgZXhwb3J0ZWQuZ28K4pSc4pSA4pSAIGtlZXBlcgrilILCoMKgIOKUnOKUgOKUgCBpbnZhcmlhbnRzLmdvCuKUgsKgwqAg4pSc4pSA4pSAIGdlbmVzaXMuZ28K4pSCwqDCoCDilJzilIDilIAga2VlcGVyLmdvCuKUgsKgwqAg4pSc4pSA4pSAIG1zZ19zZXJ2ZXIuZ28K4pSCwqDCoCDilJzilIDilIAgLi4uCuKUgsKgwqAg4pSU4pSA4pSAIHF1ZXJpZXIuZ28K4pSCwqDCoCDilJTilIDilIAgZ3JwY19xdWVyeS5nbwrilJzilIDilIAgdHlwZXMK4pSCICAg4pSc4pSA4pSAIGNvZGVjLmdvCuKUgiAgIOKUnOKUgOKUgCBlcnJvcnMuZ28K4pSCICAg4pSc4pSA4pSAIGV2ZW50cy5nbwrilIIgICDilJzilIDilIAgZXhwZWN0ZWRfa2VlcGVycy5nbwrilIIgICDilJzilIDilIAgZ2VuZXNpcy5nbwrilIIgICDilJzilIDilIAga2V5cy5nbwrilIIgICDilJzilIDilIAgbXNncy5nbwrilIIgICDilJzilIDilIAgcGFyYW1zLmdvCuKUgiAgIOKUnOKUgOKUgCB0eXBlcy5wcm90bwrilIIgICDilJzilIDilIAgLi4uCuKUgiAgIOKUlOKUgOKUgCBxdWVyaWVyLmdvCuKUgiAgIOKUlOKUgOKUgCB7bW9kdWxlX25hbWV9LnBiLmdvCuKUgiAgIOKUlOKUgOKUgCBxdWVyeS5wYi5nbwrilIIgICDilJTilIDilIAgZ2VuZXNpcy5wYi5nbwrilJzilIDilIAgc2ltdWxhdGlvbgrilILCoMKgIOKUnOKUgOKUgCBkZWNvZGVyLmdvCuKUgsKgwqAg4pSc4pSA4pSAIGdlbmVzaXMuZ28K4pSCwqDCoCDilJzilIDilIAgb3BlcmF0aW9ucy5nbwrilILCoMKgIOKUnOKUgOKUgCBwYXJhbXMuZ28K4pSCwqDCoCDilJTilIDilIAgcHJvcG9zYWxzLmdvCuKUnOKUgOKUgCBhYmNpLmdvCuKUnOKUgOKUgCBoYW5kbGVyLmdvCuKUnOKUgOKUgCAuLi4K4pSU4pSA4pSAIG1vZHVsZS5nbwo="}}),e._v(" "),t("ul",[t("li",[t("code",[e._v("abci.go")]),e._v(": The module's "),t("code",[e._v("BeginBlocker")]),e._v(" and "),t("code",[e._v("EndBlocker")]),e._v(" implementations (if any).")]),e._v(" "),t("li",[t("code",[e._v("client/")]),e._v(": The module's CLI and REST client functionality implementation and\ntesting.")]),e._v(" "),t("li",[t("code",[e._v("exported/")]),e._v(": The module's exported types -- typically type interfaces. If a module\nrelies on other module keepers, it is expected to receive them as interface\ncontracts through the "),t("code",[e._v("expected_keepers.go")]),e._v(" (which are detailed below) design to\navoid having a direct dependency on the implementing module. However, these\ncontracts can define methods that operate on and/or return types that are specific\nto the contract's implementing module and this is where "),t("code",[e._v("exported/")]),e._v(" comes into play.\nTypes defined here allow for "),t("code",[e._v("expected_keepers.go")]),e._v(" in other modules to define\ncontracts that use single canonical types. This pattern allows for code to remain\nDRY and also alleviates import cycle chaos.")]),e._v(" "),t("li",[t("code",[e._v("handler.go")]),e._v(": The module's message handlers.")]),e._v(" "),t("li",[t("code",[e._v("keeper/")]),e._v(": The module's keeper implementation along with any auxiliary\nimplementations such as the querier and invariants.")]),e._v(" "),t("li",[t("code",[e._v("types/")]),e._v(": The module's type definitions such as messages, "),t("code",[e._v("KVStore")]),e._v(" keys,\nparameter types, Protocol Buffer definitions, and "),t("code",[e._v("expected_keepers.go")]),e._v(" contracts.")]),e._v(" "),t("li",[t("code",[e._v("module.go")]),e._v(": The module's implementation of the "),t("code",[e._v("AppModule")]),e._v(" and "),t("code",[e._v("AppModuleBasic")]),e._v("\ninterfaces.")]),e._v(" "),t("li",[t("code",[e._v("simulation/")]),e._v(": The module's simulation package defines all the required functions\nused on the blockchain simulator: randomized genesis state, parameters, weighted\noperations, proposal contents and types decoders.")])]),e._v(" "),t("h2",{attrs:{hide:"",id:"next"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#next"}},[e._v("#")]),e._v(" Next")]),e._v(" "),t("p",{attrs:{hide:""}},[e._v("Learn about "),t("RouterLink",{attrs:{to:"/building-modules/errors.html"}},[e._v("Errors")])],1)],1)}),[],!1,null,null,null);i.default=o.exports}}]);