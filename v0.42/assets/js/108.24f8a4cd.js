(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{679:function(e,t,s){"use strict";s.r(t);var a=s(1),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"module-genesis"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#module-genesis"}},[e._v("#")]),e._v(" Module Genesis")]),e._v(" "),s("p",{attrs:{synopsis:""}},[e._v("Modules generally handle a subset of the state and, as such, they need to define the related subset of the genesis file as well as methods to initialize, verify and export it.")]),e._v(" "),s("h2",{attrs:{id:"pre-requisite-readings"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pre-requisite-readings"}},[e._v("#")]),e._v(" Pre-requisite Readings")]),e._v(" "),s("ul",[s("li",{attrs:{prereq:""}},[s("RouterLink",{attrs:{to:"/building-modules/module-manager.html"}},[e._v("Module Manager")])],1),e._v(" "),s("li",{attrs:{prereq:""}},[s("RouterLink",{attrs:{to:"/building-modules/keeper.html"}},[e._v("Keepers")])],1)]),e._v(" "),s("h2",{attrs:{id:"type-definition"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#type-definition"}},[e._v("#")]),e._v(" Type Definition")]),e._v(" "),s("p",[e._v("The subset of the genesis state defined from a given module is generally defined in a "),s("code",[e._v("genesis.proto")]),e._v(" file ("),s("RouterLink",{attrs:{to:"/core/encoding.html#gogoproto"}},[e._v("more info")]),e._v(" on how to define protobuf messages). The struct defining the module's subset of the genesis state is usually called "),s("code",[e._v("GenesisState")]),e._v(" and contains all the module-related values that need to be initialized during the genesis process.")],1),e._v(" "),s("p",[e._v("See an example of "),s("code",[e._v("GenesisState")]),e._v(" protobuf message definition from the "),s("code",[e._v("auth")]),e._v(" module:")]),e._v(" "),s("p",[s("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"c3ludGF4ID0gJnF1b3Q7cHJvdG8zJnF1b3Q7OwpwYWNrYWdlIGNvc21vcy5hdXRoLnYxYmV0YTE7CgppbXBvcnQgJnF1b3Q7Z29vZ2xlL3Byb3RvYnVmL2FueS5wcm90byZxdW90OzsKaW1wb3J0ICZxdW90O2dvZ29wcm90by9nb2dvLnByb3RvJnF1b3Q7OwppbXBvcnQgJnF1b3Q7Y29zbW9zL2F1dGgvdjFiZXRhMS9hdXRoLnByb3RvJnF1b3Q7OwoKb3B0aW9uIGdvX3BhY2thZ2UgPSAmcXVvdDtnaXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL3gvYXV0aC90eXBlcyZxdW90OzsKCi8vIEdlbmVzaXNTdGF0ZSBkZWZpbmVzIHRoZSBhdXRoIG1vZHVsZSdzIGdlbmVzaXMgc3RhdGUuCm1lc3NhZ2UgR2VuZXNpc1N0YXRlIHsKICAvLyBwYXJhbXMgZGVmaW5lcyBhbGwgdGhlIHBhcmFtYXRlcnMgb2YgdGhlIG1vZHVsZS4KICBQYXJhbXMgcGFyYW1zID0gMSBbKGdvZ29wcm90by5udWxsYWJsZSkgPSBmYWxzZV07CgogIC8vIGFjY291bnRzIGFyZSB0aGUgYWNjb3VudHMgcHJlc2VudCBhdCBnZW5lc2lzLgogIHJlcGVhdGVkIGdvb2dsZS5wcm90b2J1Zi5BbnkgYWNjb3VudHMgPSAyOwp9Cg=="}})],1),e._v(" "),s("p",[e._v("Next we present the main genesis-related methods that need to be implemented by module developers in order for their module to be used in Cosmos SDK applications.")]),e._v(" "),s("h3",{attrs:{id:"defaultgenesis"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#defaultgenesis"}},[e._v("#")]),e._v(" "),s("code",[e._v("DefaultGenesis")])]),e._v(" "),s("p",[e._v("The "),s("code",[e._v("DefaultGenesis()")]),e._v(" method is a simple method that calls the constructor function for "),s("code",[e._v("GenesisState")]),e._v(" with the default value for each parameter. See an example from the "),s("code",[e._v("auth")]),e._v(" module:")]),e._v(" "),s("p",[s("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gRGVmYXVsdEdlbmVzaXMgcmV0dXJucyBkZWZhdWx0IGdlbmVzaXMgc3RhdGUgYXMgcmF3IGJ5dGVzIGZvciB0aGUgYXV0aAovLyBtb2R1bGUuCmZ1bmMgKEFwcE1vZHVsZUJhc2ljKSBEZWZhdWx0R2VuZXNpcyhjZGMgY29kZWMuSlNPTk1hcnNoYWxlcikganNvbi5SYXdNZXNzYWdlIHsKCXJldHVybiBjZGMuTXVzdE1hcnNoYWxKU09OKHR5cGVzLkRlZmF1bHRHZW5lc2lzU3RhdGUoKSkKfQ=="}})],1),e._v(" "),s("h3",{attrs:{id:"validategenesis"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#validategenesis"}},[e._v("#")]),e._v(" "),s("code",[e._v("ValidateGenesis")])]),e._v(" "),s("p",[e._v("The "),s("code",[e._v("ValidateGenesis(genesisState GenesisState)")]),e._v(" method is called to verify that the provided "),s("code",[e._v("genesisState")]),e._v(" is correct. It should perform validity checks on each of the parameter listed in "),s("code",[e._v("GenesisState")]),e._v(". See an example from the "),s("code",[e._v("auth")]),e._v(" module:")]),e._v(" "),s("p",[s("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gVmFsaWRhdGVHZW5lc2lzIHBlcmZvcm1zIGJhc2ljIHZhbGlkYXRpb24gb2YgYXV0aCBnZW5lc2lzIGRhdGEgcmV0dXJuaW5nIGFuCi8vIGVycm9yIGZvciBhbnkgZmFpbGVkIHZhbGlkYXRpb24gY3JpdGVyaWEuCmZ1bmMgVmFsaWRhdGVHZW5lc2lzKGRhdGEgR2VuZXNpc1N0YXRlKSBlcnJvciB7CglpZiBlcnIgOj0gZGF0YS5QYXJhbXMuVmFsaWRhdGUoKTsgZXJyICE9IG5pbCB7CgkJcmV0dXJuIGVycgoJfQoKCWdlbkFjY3MsIGVyciA6PSBVbnBhY2tBY2NvdW50cyhkYXRhLkFjY291bnRzKQoJaWYgZXJyICE9IG5pbCB7CgkJcmV0dXJuIGVycgoJfQoKCXJldHVybiBWYWxpZGF0ZUdlbkFjY291bnRzKGdlbkFjY3MpCn0="}})],1),e._v(" "),s("h2",{attrs:{id:"other-genesis-methods"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#other-genesis-methods"}},[e._v("#")]),e._v(" Other Genesis Methods")]),e._v(" "),s("p",[e._v("Other than the methods related directly to "),s("code",[e._v("GenesisState")]),e._v(", module developers are expected to implement two other methods as part of the "),s("RouterLink",{attrs:{to:"/building-modules/module-manager.html#appmodulegenesis"}},[s("code",[e._v("AppModuleGenesis")]),e._v(" interface")]),e._v(" (only if the module needs to initialize a subset of state in genesis). These methods are "),s("a",{attrs:{href:"#initgenesis"}},[s("code",[e._v("InitGenesis")])]),e._v(" and "),s("a",{attrs:{href:"#exportgenesis"}},[s("code",[e._v("ExportGenesis")])]),e._v(".")],1),e._v(" "),s("h3",{attrs:{id:"initgenesis"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#initgenesis"}},[e._v("#")]),e._v(" "),s("code",[e._v("InitGenesis")])]),e._v(" "),s("p",[e._v("The "),s("code",[e._v("InitGenesis")]),e._v(" method is executed during "),s("RouterLink",{attrs:{to:"/core/baseapp.html#initchain"}},[s("code",[e._v("InitChain")])]),e._v(" when the application is first started. Given a "),s("code",[e._v("GenesisState")]),e._v(", it initializes the subset of the state managed by the module by using the module's "),s("RouterLink",{attrs:{to:"/building-modules/keeper.html"}},[s("code",[e._v("keeper")])]),e._v(" setter function on each parameter within the "),s("code",[e._v("GenesisState")]),e._v(".")],1),e._v(" "),s("p",[e._v("The "),s("RouterLink",{attrs:{to:"/building-modules/module-manager.html#manager"}},[e._v("module manager")]),e._v(" of the application is responsible for calling the "),s("code",[e._v("InitGenesis")]),e._v(" method of each of the application's modules, in order. This order is set by the application developer via the manager's "),s("code",[e._v("SetOrderGenesisMethod")]),e._v(", which is called in the "),s("RouterLink",{attrs:{to:"/basics/app-anatomy.html#constructor-function"}},[e._v("application's constructor function")])],1),e._v(" "),s("p",[e._v("See an example of "),s("code",[e._v("InitGenesis")]),e._v(" from the "),s("code",[e._v("auth")]),e._v(" module")]),e._v(" "),s("p",[s("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBJbml0R2VuZXNpcyhjdHggc2RrLkNvbnRleHQsIGFrIGtlZXBlci5BY2NvdW50S2VlcGVyLCBkYXRhIHR5cGVzLkdlbmVzaXNTdGF0ZSkgewoJYWsuU2V0UGFyYW1zKGN0eCwgZGF0YS5QYXJhbXMpCgoJYWNjb3VudHMsIGVyciA6PSB0eXBlcy5VbnBhY2tBY2NvdW50cyhkYXRhLkFjY291bnRzKQoJaWYgZXJyICE9IG5pbCB7CgkJcGFuaWMoZXJyKQoJfQoJYWNjb3VudHMgPSB0eXBlcy5TYW5pdGl6ZUdlbmVzaXNBY2NvdW50cyhhY2NvdW50cykKCglmb3IgXywgYSA6PSByYW5nZSBhY2NvdW50cyB7CgkJYWNjIDo9IGFrLk5ld0FjY291bnQoY3R4LCBhKQoJCWFrLlNldEFjY291bnQoY3R4LCBhY2MpCgl9CgoJYWsuR2V0TW9kdWxlQWNjb3VudChjdHgsIHR5cGVzLkZlZUNvbGxlY3Rvck5hbWUpCn0="}})],1),e._v(" "),s("h3",{attrs:{id:"exportgenesis"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#exportgenesis"}},[e._v("#")]),e._v(" "),s("code",[e._v("ExportGenesis")])]),e._v(" "),s("p",[e._v("The "),s("code",[e._v("ExportGenesis")]),e._v(" method is executed whenever an export of the state is made. It takes the latest known version of the subset of the state managed by the module and creates a new "),s("code",[e._v("GenesisState")]),e._v(" out of it. This is mainly used when the chain needs to be upgraded via a hard fork.")]),e._v(" "),s("p",[e._v("See an example of "),s("code",[e._v("ExportGenesis")]),e._v(" from the "),s("code",[e._v("auth")]),e._v(" module.")]),e._v(" "),s("p",[s("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBFeHBvcnRHZW5lc2lzKGN0eCBzZGsuQ29udGV4dCwgYWsga2VlcGVyLkFjY291bnRLZWVwZXIpICp0eXBlcy5HZW5lc2lzU3RhdGUgewoJcGFyYW1zIDo9IGFrLkdldFBhcmFtcyhjdHgpCgoJdmFyIGdlbkFjY291bnRzIHR5cGVzLkdlbmVzaXNBY2NvdW50cwoJYWsuSXRlcmF0ZUFjY291bnRzKGN0eCwgZnVuYyhhY2NvdW50IHR5cGVzLkFjY291bnRJKSBib29sIHsKCQlnZW5BY2NvdW50IDo9IGFjY291bnQuKHR5cGVzLkdlbmVzaXNBY2NvdW50KQoJCWdlbkFjY291bnRzID0gYXBwZW5kKGdlbkFjY291bnRzLCBnZW5BY2NvdW50KQoJCXJldHVybiBmYWxzZQoJfSkKCglyZXR1cm4gdHlwZXMuTmV3R2VuZXNpc1N0YXRlKHBhcmFtcywgZ2VuQWNjb3VudHMpCn0="}})],1),e._v(" "),s("h2",{attrs:{hide:"",id:"next"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#next"}},[e._v("#")]),e._v(" Next")]),e._v(" "),s("p",{attrs:{hide:""}},[e._v("Learn about "),s("RouterLink",{attrs:{to:"/building-modules/module-interfaces.html"}},[e._v("modules interfaces")])],1)])}),[],!1,null,null,null);t.default=o.exports}}]);