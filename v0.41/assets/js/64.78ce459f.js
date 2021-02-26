(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{747:function(t,e,r){"use strict";r.r(e);var a=r(1),i=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"architecture-decision-records-adr"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#architecture-decision-records-adr"}},[t._v("#")]),t._v(" Architecture Decision Records (ADR)")]),t._v(" "),r("p",[t._v("This is a location to record all high-level architecture decisions in the Cosmos-SDK.")]),t._v(" "),r("p",[t._v("An Architectural Decision ("),r("strong",[t._v("AD")]),t._v(") is a software design choice that addresses a functional or non-functional requirement that is architecturally significant.\nAn Architecturally Significant Requirement ("),r("strong",[t._v("ASR")]),t._v(") is a requirement that has a measurable effect on a software system’s architecture and quality.\nAn Architectural Decision Record ("),r("strong",[t._v("ADR")]),t._v(") captures a single AD, such as often done when writing personal notes or meeting minutes; the collection of ADRs created and maintained in a project constitute its decision log. All these are within the topic of Architectural Knowledge Management (AKM).")]),t._v(" "),r("p",[t._v("You can read more about the ADR concept in this "),r("a",{attrs:{href:"https://product.reverb.com/documenting-architecture-decisions-the-reverb-way-a3563bb24bd0#.78xhdix6t",target:"_blank",rel:"noopener noreferrer"}},[t._v("blog post"),r("OutboundLink")],1),t._v(".")]),t._v(" "),r("h2",{attrs:{id:"rationale"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#rationale"}},[t._v("#")]),t._v(" Rationale")]),t._v(" "),r("p",[t._v("ADRs are intended to be the primary mechanism for proposing new feature designs and new processes, for collecting community input on an issue, and for documenting the design decisions.\nAn ADR should provide:")]),t._v(" "),r("ul",[r("li",[t._v("Context on the relevant goals and the current state")]),t._v(" "),r("li",[t._v("Proposed changes to achieve the goals")]),t._v(" "),r("li",[t._v("Summary of pros and cons")]),t._v(" "),r("li",[t._v("References")]),t._v(" "),r("li",[t._v("Changelog")])]),t._v(" "),r("p",[t._v("Note the distinction between an ADR and a spec. The ADR provides the context, intuition, reasoning, and\njustification for a change in architecture, or for the architecture of something\nnew. The spec is much more compressed and streamlined summary of everything as\nit stands today.")]),t._v(" "),r("p",[t._v("If recorded decisions turned out to be lacking, convene a discussion, record the new decisions here, and then modify the code to match.")]),t._v(" "),r("h2",{attrs:{id:"creating-new-adr"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#creating-new-adr"}},[t._v("#")]),t._v(" Creating new ADR")]),t._v(" "),r("p",[t._v("Read about the "),r("RouterLink",{attrs:{to:"/architecture/PROCESS.html"}},[t._v("PROCESS")]),t._v(".")],1),t._v(" "),r("h2",{attrs:{id:"adr-table-of-contents"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#adr-table-of-contents"}},[t._v("#")]),t._v(" ADR Table of Contents")]),t._v(" "),r("h3",{attrs:{id:"accepted"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#accepted"}},[t._v("#")]),t._v(" Accepted")]),t._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/architecture/adr-001-coin-source-tracing.html"}},[t._v("ADR 001: Coin Source Tracing")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/architecture/adr-002-docs-structure.html"}},[t._v("ADR 002: SDK Documentation Structure")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/architecture/adr-004-split-denomination-keys.html"}},[t._v("ADR 004: Split Denomination Keys")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/architecture/adr-006-secret-store-replacement.html"}},[t._v("ADR 006: Secret Store Replacement")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/architecture/adr-009-evidence-module.html"}},[t._v("ADR 009: Evidence Module")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/architecture/adr-010-modular-antehandler.html"}},[t._v("ADR 010: Modular AnteHandler")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/architecture/adr-019-protobuf-state-encoding.html"}},[t._v("ADR 019: Protocol Buffer State Encoding")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/architecture/adr-020-protobuf-transaction-encoding.html"}},[t._v("ADR 020: Protocol Buffer Transaction Encoding")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/architecture/adr-021-protobuf-query-encoding.html"}},[t._v("ADR 021: Protocol Buffer Query Encoding")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/architecture/adr-023-protobuf-naming.html"}},[t._v("ADR 023: Protocol Buffer Naming and Versioning")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/architecture/adr-026-ibc-client-recovery-mechanisms.html"}},[t._v("ADR 026: IBC Client Recovery Mechanisms")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/architecture/adr-029-fee-grant-module.html"}},[t._v("ADR 029: Fee Grant Module")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/architecture/adr-031-msg-service.html"}},[t._v("ADR 031: Protobuf Msg Services")])],1)]),t._v(" "),r("h3",{attrs:{id:"proposed"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#proposed"}},[t._v("#")]),t._v(" Proposed")]),t._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/architecture/adr-003-dynamic-capability-store.html"}},[t._v("ADR 003: Dynamic Capability Store")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/architecture/adr-011-generalize-genesis-accounts.html"}},[t._v("ADR 011: Generalize Genesis Accounts")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/architecture/adr-012-state-accessors.html"}},[t._v("ADR 012: State Accessors")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/architecture/adr-013-metrics.html"}},[t._v("ADR 013: Metrics")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/architecture/adr-015-ibc-packet-receiver.html"}},[t._v("ADR 015: IBC Packet Receiver")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/architecture/adr-016-validator-consensus-key-rotation.html"}},[t._v("ADR 016: Validator Consensus Key Rotation")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/architecture/adr-017-historical-header-module.html"}},[t._v("ADR 017: Historical Header Module")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/architecture/adr-018-extendable-voting-period.html"}},[t._v("ADR 018: Extendable Voting Periods")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/architecture/adr-022-custom-panic-handling.html"}},[t._v("ADR 022: Custom baseapp panic handling")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/architecture/adr-024-coin-metadata.html"}},[t._v("ADR 024: Coin Metadata")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/architecture/adr-025-ibc-passive-channels.html"}},[t._v("ADR 025: IBC Passive Channels")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/architecture/adr-027-deterministic-protobuf-serialization.html"}},[t._v("ADR 027: Deterministic Protobuf Serialization")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/architecture/adr-028-public-key-addresses.html"}},[t._v("ADR 028: Public Key Addresses")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/architecture/adr-032-typed-events.html"}},[t._v("ADR 032: Typed Events")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/architecture/adr-035-rosetta-api-support.html"}},[t._v("ADR 035: Rosetta API Support")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/architecture/adr-037-gov-split-vote.html"}},[t._v("ADR 037: Governance Split Votes")])],1)])])}),[],!1,null,null,null);e.default=i.exports}}]);