(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{803:function(e,t,s){"use strict";s.r(t);var a=s(1),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"msg-services"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#msg-services"}},[e._v("#")]),e._v(" "),s("code",[e._v("Msg")]),e._v(" Services")]),e._v(" "),s("p",{attrs:{synopsis:""}},[e._v("A "),s("code",[e._v("Msg")]),e._v(" Service processes "),s("RouterLink",{attrs:{to:"/building-modules/messages-and-queries.html#messages"}},[e._v("messages")]),e._v(". "),s("code",[e._v("Msg")]),e._v(" Services are specific to the module in which they are defined, and only process messages defined within the said module. They are called from "),s("code",[e._v("BaseApp")]),e._v(" during "),s("RouterLink",{attrs:{to:"/core/baseapp.html#delivertx"}},[s("code",[e._v("DeliverTx")])]),e._v(".")],1),e._v(" "),s("h2",{attrs:{id:"pre-requisite-readings"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pre-requisite-readings"}},[e._v("#")]),e._v(" Pre-requisite Readings")]),e._v(" "),s("ul",[s("li",{attrs:{prereq:""}},[s("RouterLink",{attrs:{to:"/building-modules/module-manager.html"}},[e._v("Module Manager")])],1),e._v(" "),s("li",{attrs:{prereq:""}},[s("RouterLink",{attrs:{to:"/building-modules/messages-and-queries.html"}},[e._v("Messages and Queries")])],1)]),e._v(" "),s("h2",{attrs:{id:"implementation-of-a-module-msg-service"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#implementation-of-a-module-msg-service"}},[e._v("#")]),e._v(" Implementation of a module "),s("code",[e._v("Msg")]),e._v(" service")]),e._v(" "),s("p",[e._v("All "),s("code",[e._v("Msg")]),e._v(" processing is done by a "),s("RouterLink",{attrs:{to:"/building-modules/messages-and-queries.html#msg-services"}},[s("code",[e._v("Msg")])]),e._v(" protobuf service. Each module should define a "),s("code",[e._v("Msg")]),e._v(" service, which will be responsible for request and response serialization.")],1),e._v(" "),s("p",[e._v("As further described in "),s("RouterLink",{attrs:{to:"/architecture/adr-031-msg-service.html"}},[e._v("ADR 031")]),e._v(", this approach has the advantage of clearly specifying return types and generating server and client code.")],1),e._v(" "),s("p",[e._v("Based on the definition of the "),s("code",[e._v("Msg")]),e._v(" service, Protobuf generates a "),s("code",[e._v("MsgServer")]),e._v(" interface. It is the role of the module developer to implement this interface, by implementing the state transition logic that should happen upon receival of each "),s("code",[e._v("Msg")]),e._v(". As an example, here is the generated "),s("code",[e._v("MsgServer")]),e._v(" interface for "),s("code",[e._v("x/bank")]),e._v(", which exposes two "),s("code",[e._v("Msg")]),e._v("s:")]),e._v(" "),s("p",[s("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gTXNnU2VydmVyIGlzIHRoZSBzZXJ2ZXIgQVBJIGZvciBNc2cgc2VydmljZS4KdHlwZSBNc2dTZXJ2ZXIgaW50ZXJmYWNlIHsKCS8vIFNlbmQgZGVmaW5lcyBhIG1ldGhvZCBmb3Igc2VuZGluZyBjb2lucyBmcm9tIG9uZSBhY2NvdW50IHRvIGFub3RoZXIgYWNjb3VudC4KCVNlbmQoY29udGV4dC5Db250ZXh0LCAqTXNnU2VuZCkgKCpNc2dTZW5kUmVzcG9uc2UsIGVycm9yKQoJLy8gTXVsdGlTZW5kIGRlZmluZXMgYSBtZXRob2QgZm9yIHNlbmRpbmcgY29pbnMgZnJvbSBzb21lIGFjY291bnRzIHRvIG90aGVyIGFjY291bnRzLgoJTXVsdGlTZW5kKGNvbnRleHQuQ29udGV4dCwgKk1zZ011bHRpU2VuZCkgKCpNc2dNdWx0aVNlbmRSZXNwb25zZSwgZXJyb3IpCn0="}})],1),e._v(" "),s("p",[e._v("When possible, the existing module's "),s("RouterLink",{attrs:{to:"/building-modules/keeper.html"}},[s("code",[e._v("Keeper")])]),e._v(" should implement "),s("code",[e._v("MsgServer")]),e._v(", otherwise a "),s("code",[e._v("msgServer")]),e._v(" struct that embeds the "),s("code",[e._v("Keeper")]),e._v(" can be created, typically in "),s("code",[e._v("./keeper/msg_server.go")]),e._v(":")],1),e._v(" "),s("p",[s("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBtc2dTZXJ2ZXIgc3RydWN0IHsKCUtlZXBlcgp9"}})],1),e._v(" "),s("p",[s("code",[e._v("msgServer")]),e._v(" methods can retrieve the "),s("code",[e._v("sdk.Context")]),e._v(" from the "),s("code",[e._v("context.Context")]),e._v(" parameter method using the "),s("code",[e._v("sdk.UnwrapSDKContext")]),e._v(":")]),e._v(" "),s("p",[s("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"CWN0eCA6PSBzZGsuVW53cmFwU0RLQ29udGV4dChnb0N0eCkK"}})],1),e._v(" "),s("p",[s("code",[e._v("Msg")]),e._v(" processing usually follows these 2 steps:")]),e._v(" "),s("ul",[s("li",[e._v("First, they perform "),s("em",[e._v("stateful")]),e._v(" checks to make sure the "),s("code",[e._v("message")]),e._v(" is valid. At this stage, the "),s("code",[e._v("message")]),e._v("'s "),s("code",[e._v("ValidateBasic()")]),e._v(" method has already been called, meaning "),s("em",[e._v("stateless")]),e._v(" checks on the message (like making sure parameters are correctly formatted) have already been performed. Checks performed in the "),s("code",[e._v("msgServer")]),e._v(" method can be more expensive and require access to the state. For example, a "),s("code",[e._v("msgServer")]),e._v(" method for a "),s("code",[e._v("transfer")]),e._v(" message might check that the sending account has enough funds to actually perform the transfer. To access the state, the "),s("code",[e._v("msgServer")]),e._v(" method needs to call the "),s("RouterLink",{attrs:{to:"/building-modules/keeper.html"}},[s("code",[e._v("keeper")]),e._v("'s")]),e._v(" getter functions.")],1),e._v(" "),s("li",[e._v("Then, if the checks are successful, the "),s("code",[e._v("msgServer")]),e._v(" method calls the "),s("RouterLink",{attrs:{to:"/building-modules/keeper.html"}},[s("code",[e._v("keeper")]),e._v("'s")]),e._v(" setter functions to actually perform the state transition.")],1)]),e._v(" "),s("p",[e._v("Before returning, "),s("code",[e._v("msgServer")]),e._v(" methods generally emit one or more "),s("RouterLink",{attrs:{to:"/core/events.html"}},[e._v("events")]),e._v(" via the "),s("code",[e._v("EventManager")]),e._v(" held in the "),s("code",[e._v("ctx")]),e._v(":")],1),e._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Y3R4LkV2ZW50TWFuYWdlcigpLkVtaXRFdmVudCgKCQlzZGsuTmV3RXZlbnQoCgkJCWV2ZW50VHlwZSwgIC8vIGUuZy4gc2RrLkV2ZW50VHlwZU1lc3NhZ2UgZm9yIGEgbWVzc2FnZSwgdHlwZXMuQ3VzdG9tRXZlbnRUeXBlIGZvciBhIGN1c3RvbSBldmVudCBkZWZpbmVkIGluIHRoZSBtb2R1bGUKCQkJc2RrLk5ld0F0dHJpYnV0ZShhdHRyaWJ1dGVLZXksIGF0dHJpYnV0ZVZhbHVlKSwKCQkpLAogICAgKQo="}}),e._v(" "),s("p",[e._v("These events are relayed back to the underlying consensus engine and can be used by service providers to implement services around the application. Click "),s("RouterLink",{attrs:{to:"/core/events.html"}},[e._v("here")]),e._v(" to learn more about events.")],1),e._v(" "),s("p",[e._v("The invoked "),s("code",[e._v("msgServer")]),e._v(" method returns a "),s("code",[e._v("proto.Message")]),e._v(" response and an "),s("code",[e._v("error")]),e._v(". These return values are then wrapped into an "),s("code",[e._v("*sdk.Result")]),e._v(" or an "),s("code",[e._v("error")]),e._v(" using "),s("code",[e._v("sdk.WrapServiceResult(ctx sdk.Context, res proto.Message, err error)")]),e._v(":")]),e._v(" "),s("p",[s("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"CQkJcmV0dXJuIHNkay5XcmFwU2VydmljZVJlc3VsdChjdHgsIHJlc01zZywgZXJyKQ=="}})],1),e._v(" "),s("p",[e._v("This method takes care of marshaling the "),s("code",[e._v("res")]),e._v(" parameter to protobuf and attaching any events on the "),s("code",[e._v("ctx.EventManager()")]),e._v(" to the "),s("code",[e._v("sdk.Result")]),e._v(".")]),e._v(" "),s("p",[s("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"Ly8gUmVzdWx0IGlzIHRoZSB1bmlvbiBvZiBSZXNwb25zZUZvcm1hdCBhbmQgUmVzcG9uc2VDaGVja1R4LgptZXNzYWdlIFJlc3VsdCB7CiAgb3B0aW9uIChnb2dvcHJvdG8uZ29wcm90b19nZXR0ZXJzKSA9IGZhbHNlOwoKICAvLyBEYXRhIGlzIGFueSBkYXRhIHJldHVybmVkIGZyb20gbWVzc2FnZSBvciBoYW5kbGVyIGV4ZWN1dGlvbi4gSXQgTVVTVCBiZQogIC8vIGxlbmd0aCBwcmVmaXhlZCBpbiBvcmRlciB0byBzZXBhcmF0ZSBkYXRhIGZyb20gbXVsdGlwbGUgbWVzc2FnZSBleGVjdXRpb25zLgogIGJ5dGVzIGRhdGEgPSAxOwoKICAvLyBMb2cgY29udGFpbnMgdGhlIGxvZyBpbmZvcm1hdGlvbiBmcm9tIG1lc3NhZ2Ugb3IgaGFuZGxlciBleGVjdXRpb24uCiAgc3RyaW5nIGxvZyA9IDI7CgogIC8vIEV2ZW50cyBjb250YWlucyBhIHNsaWNlIG9mIEV2ZW50IG9iamVjdHMgdGhhdCB3ZXJlIGVtaXR0ZWQgZHVyaW5nIG1lc3NhZ2UKICAvLyBvciBoYW5kbGVyIGV4ZWN1dGlvbi4KICByZXBlYXRlZCB0ZW5kZXJtaW50LmFiY2kuRXZlbnQgZXZlbnRzID0gMyBbKGdvZ29wcm90by5udWxsYWJsZSkgPSBmYWxzZV07Cn0="}})],1),e._v(" "),s("h2",{attrs:{id:"legacy-amino-msgs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#legacy-amino-msgs"}},[e._v("#")]),e._v(" Legacy Amino "),s("code",[e._v("Msg")]),e._v("s")]),e._v(" "),s("h3",{attrs:{id:"handler-type"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#handler-type"}},[e._v("#")]),e._v(" "),s("code",[e._v("handler")]),e._v(" type")]),e._v(" "),s("p",[e._v("The "),s("code",[e._v("handler")]),e._v(" type defined in the Cosmos SDK will be deprecated in favor of "),s("a",{attrs:{href:"#implementation-of-a-module-msg-service"}},[s("code",[e._v("Msg")]),e._v(" Services")]),e._v(".")]),e._v(" "),s("p",[e._v("Here is the typical structure of a "),s("code",[e._v("handler")]),e._v(" function:")]),e._v(" "),s("p",[s("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBIYW5kbGVyIGZ1bmMoY3R4IENvbnRleHQsIG1zZyBNc2cpICgqUmVzdWx0LCBlcnJvcik="}})],1),e._v(" "),s("p",[e._v("Let us break it down:")]),e._v(" "),s("ul",[s("li",[e._v("The "),s("RouterLink",{attrs:{to:"/building-modules/messages-and-queries.html#messages"}},[s("code",[e._v("Msg")])]),e._v(" is the actual object being processed.")],1),e._v(" "),s("li",[e._v("The "),s("RouterLink",{attrs:{to:"/core/context.html"}},[s("code",[e._v("Context")])]),e._v(" contains all the necessary information needed to process the "),s("code",[e._v("msg")]),e._v(", as well as a branch of the latest state. If the "),s("code",[e._v("msg")]),e._v(" is successfully processed, the branched version of the state contained in the "),s("code",[e._v("ctx")]),e._v(" will be written to the main state (branch).")],1),e._v(" "),s("li",[e._v("The ["),s("code",[e._v("*Result")]),e._v("] returned to "),s("code",[e._v("BaseApp")]),e._v(" contains (among other things) information on the execution of the "),s("code",[e._v("handler")]),e._v(" and "),s("RouterLink",{attrs:{to:"/core/events.html"}},[e._v("events")]),e._v(".")],1)]),e._v(" "),s("p",[e._v("Module "),s("code",[e._v("handler")]),e._v("s are typically implemented in a "),s("code",[e._v("./handler.go")]),e._v(" file inside the module's folder. The "),s("RouterLink",{attrs:{to:"/building-modules/module-manager.html"}},[e._v("module manager")]),e._v(" is used to add the module's "),s("code",[e._v("handler")]),e._v("s to the\n"),s("RouterLink",{attrs:{to:"/core/baseapp.html#message-routing"}},[e._v("application's "),s("code",[e._v("router")])]),e._v(" via the "),s("code",[e._v("Route()")]),e._v(" method. Typically,\nthe manager's "),s("code",[e._v("Route()")]),e._v(" method simply constructs a Route that calls a "),s("code",[e._v("NewHandler()")]),e._v(" method defined in "),s("code",[e._v("handler.go")]),e._v(".")],1),e._v(" "),s("p",[s("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gUm91dGUgcmV0dXJucyB0aGUgbWVzc2FnZSByb3V0aW5nIGtleSBmb3IgdGhlIGdvdiBtb2R1bGUuCmZ1bmMgKGFtIEFwcE1vZHVsZSkgUm91dGUoKSBzZGsuUm91dGUgewoJcmV0dXJuIHNkay5OZXdSb3V0ZSh0eXBlcy5Sb3V0ZXJLZXksIE5ld0hhbmRsZXIoYW0ua2VlcGVyKSkKfQ=="}})],1),e._v(" "),s("h3",{attrs:{id:"implementation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#implementation"}},[e._v("#")]),e._v(" Implementation")]),e._v(" "),s("p",[s("code",[e._v("NewHandler")]),e._v(" function dispatches a "),s("code",[e._v("Msg")]),e._v(" to appropriate handler function, usually by using a switch statement:")]),e._v(" "),s("p",[s("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gTmV3SGFuZGxlciByZXR1cm5zIGEgaGFuZGxlciBmb3IgJnF1b3Q7YmFuayZxdW90OyB0eXBlIG1lc3NhZ2VzLgpmdW5jIE5ld0hhbmRsZXIoayBrZWVwZXIuS2VlcGVyKSBzZGsuSGFuZGxlciB7CglyZXR1cm4gZnVuYyhjdHggc2RrLkNvbnRleHQsIG1zZyBzZGsuTXNnKSAoKnNkay5SZXN1bHQsIGVycm9yKSB7CgkJY3R4ID0gY3R4LldpdGhFdmVudE1hbmFnZXIoc2RrLk5ld0V2ZW50TWFuYWdlcigpKQoKCQlzd2l0Y2ggbXNnIDo9IG1zZy4odHlwZSkgewoJCWNhc2UgKnR5cGVzLk1zZ1NlbmQ6CgkJCXJldHVybiBoYW5kbGVNc2dTZW5kKGN0eCwgaywgbXNnKQoKCQljYXNlICp0eXBlcy5Nc2dNdWx0aVNlbmQ6CgkJCXJldHVybiBoYW5kbGVNc2dNdWx0aVNlbmQoY3R4LCBrLCBtc2cpCgoJCWRlZmF1bHQ6CgkJCXJldHVybiBuaWwsIHNka2Vycm9ycy5XcmFwZihzZGtlcnJvcnMuRXJyVW5rbm93blJlcXVlc3QsICZxdW90O3VucmVjb2duaXplZCBiYW5rIG1lc3NhZ2UgdHlwZTogJVQmcXVvdDssIG1zZykKCQl9Cgl9Cn0="}})],1),e._v(" "),s("p",[e._v("First, "),s("code",[e._v("NewHandler")]),e._v(" function sets a new "),s("code",[e._v("EventManager")]),e._v(" to the context to isolate events per "),s("code",[e._v("msg")]),e._v(".\nThen, a simple switch calls the appropriate "),s("code",[e._v("handler")]),e._v(" based on the "),s("code",[e._v("Msg")]),e._v(" type.")]),e._v(" "),s("p",[e._v("In this regard, "),s("code",[e._v("handler")]),e._v("s functions need to be implemented for each module "),s("code",[e._v("Msg")]),e._v(". This will also involve manual handler registration of "),s("code",[e._v("Msg")]),e._v(" types.\n"),s("code",[e._v("handler")]),e._v("s functions should return a "),s("code",[e._v("*Result")]),e._v(" and an "),s("code",[e._v("error")]),e._v(".")]),e._v(" "),s("h2",{attrs:{id:"telemetry"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#telemetry"}},[e._v("#")]),e._v(" Telemetry")]),e._v(" "),s("p",[e._v("New "),s("RouterLink",{attrs:{to:"/core/telemetry.html"}},[e._v("telemetry metrics")]),e._v(" can be created from "),s("code",[e._v("msgServer")]),e._v(" methods when handling messages.")],1),e._v(" "),s("p",[e._v("This is an example from the "),s("code",[e._v("x/auth/vesting")]),e._v(" module:")]),e._v(" "),s("p",[s("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"CWRlZmVyIGZ1bmMoKSB7CgkJdGVsZW1ldHJ5LkluY3JDb3VudGVyKDEsICZxdW90O25ldyZxdW90OywgJnF1b3Q7YWNjb3VudCZxdW90OykKCgkJZm9yIF8sIGEgOj0gcmFuZ2UgbXNnLkFtb3VudCB7CgkJCWlmIGEuQW1vdW50LklzSW50NjQoKSB7CgkJCQl0ZWxlbWV0cnkuU2V0R2F1Z2VXaXRoTGFiZWxzKAoJCQkJCVtdc3RyaW5neyZxdW90O3R4JnF1b3Q7LCAmcXVvdDttc2cmcXVvdDssICZxdW90O2NyZWF0ZV92ZXN0aW5nX2FjY291bnQmcXVvdDt9LAoJCQkJCWZsb2F0MzIoYS5BbW91bnQuSW50NjQoKSksCgkJCQkJW11tZXRyaWNzLkxhYmVse3RlbGVtZXRyeS5OZXdMYWJlbCgmcXVvdDtkZW5vbSZxdW90OywgYS5EZW5vbSl9LAoJCQkJKQoJCQl9CgkJfQoJfSgp"}})],1),e._v(" "),s("h2",{attrs:{hide:"",id:"next"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#next"}},[e._v("#")]),e._v(" Next")]),e._v(" "),s("p",{attrs:{hide:""}},[e._v("Learn about "),s("RouterLink",{attrs:{to:"/building-modules/query-services.html"}},[e._v("query services")])],1)],1)}),[],!1,null,null,null);t.default=o.exports}}]);