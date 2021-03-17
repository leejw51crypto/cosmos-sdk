(window.webpackJsonp=window.webpackJsonp||[]).push([[153],{685:function(e,t,n){"use strict";n.r(t);var a=n(1),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"overview"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),n("p",{attrs:{synopsis:""}},[e._v("Learn what IBC is, its components and use cases.")]),e._v(" "),n("h2",{attrs:{id:"what-is-the-interblockchain-communication-protocol-ibc"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#what-is-the-interblockchain-communication-protocol-ibc"}},[e._v("#")]),e._v(" What is the Interblockchain Communication Protocol (IBC)?")]),e._v(" "),n("p",[e._v("This document serves as a guide for developers who want to write their own Inter-blockchain\nCommunication Protocol (IBC) applications for custom "),n("a",{attrs:{href:"https://github.com/cosmos/ics/blob/master/ibc/4_IBC_USECASES.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("use-cases"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("p",[e._v("Due to the modular design of the IBC protocol, IBC\napplication developers do not need to concern themselves with the low-level details of clients,\nconnections, and proof verification. Nevertheless a brief explanation of the lower levels of the\nstack is given so that application developers may have a high-level understanding of the IBC\nprotocol. Then the document goes into detail on the abstraction layer most relevant for application\ndevelopers (channels and ports), and describes how to define your own custom packets, and\n"),n("code",[e._v("IBCModule")]),e._v(" callbacks.")]),e._v(" "),n("p",[e._v("To have your module interact over IBC you must: bind to a port(s), define your own packet data (and\noptionally acknowledgement) structs as well as how to encode/decode them, and implement the\n"),n("code",[e._v("IBCModule")]),e._v(" interface. Below is a more detailed explanation of how to write an IBC application\nmodule correctly.")]),e._v(" "),n("h2",{attrs:{id:"components-overview"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#components-overview"}},[e._v("#")]),e._v(" Components Overview")]),e._v(" "),n("h3",{attrs:{id:"clients"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#clients"}},[e._v("#")]),e._v(" "),n("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/tree/master/x/ibc/core/02-client",target:"_blank",rel:"noopener noreferrer"}},[e._v("Clients"),n("OutboundLink")],1)]),e._v(" "),n("p",[e._v("IBC Clients are light clients (identified by a unique client-id) that track the consensus states of\nother blockchains, along with the proof spec necessary to properly verify proofs against the\nclient's consensus state. A client may be associated with any number of connections to multiple\nchains. The supported IBC clients are:")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/tree/master/x/ibc/light-clients/06-solomachine",target:"_blank",rel:"noopener noreferrer"}},[e._v("Solo Machine light client"),n("OutboundLink")],1),e._v(": devices such as phones, browsers, or laptops.")]),e._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/tree/master/x/ibc/light-clients/07-tendermint",target:"_blank",rel:"noopener noreferrer"}},[e._v("Tendermint light client"),n("OutboundLink")],1),e._v(": The default for SDK-based chains,")]),e._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/tree/master/x/ibc/light-clients/09-localhost",target:"_blank",rel:"noopener noreferrer"}},[e._v("Localhost (loopback) client"),n("OutboundLink")],1),e._v(": Useful for\ntesting, simulation and relaying packets to modules on the same application.")])]),e._v(" "),n("h3",{attrs:{id:"connections"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#connections"}},[e._v("#")]),e._v(" "),n("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/tree/master/x/ibc/core/03-connection",target:"_blank",rel:"noopener noreferrer"}},[e._v("Connections"),n("OutboundLink")],1)]),e._v(" "),n("p",[e._v("Connections encapsulate two "),n("code",[e._v("ConnectionEnd")]),e._v(" objects on two seperate blockchains. Each\n"),n("code",[e._v("ConnectionEnd")]),e._v(" is associated with a client of the other blockchain (ie counterparty blockchain).\nThe connection handshake is responsible for verifying that the light clients on each chain are\ncorrect for their respective counterparties. Connections, once established, are responsible for\nfacilitation all cross-chain verification of IBC state. A connection may be associated with any\nnumber of channels.")]),e._v(" "),n("h3",{attrs:{id:"proofs-and-paths"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#proofs-and-paths"}},[e._v("#")]),e._v(" "),n("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/tree/master/x/ibc/core/23-commitment",target:"_blank",rel:"noopener noreferrer"}},[e._v("Proofs"),n("OutboundLink")],1),e._v(" and "),n("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/tree/master/x/ibc/core/24-host",target:"_blank",rel:"noopener noreferrer"}},[e._v("Paths"),n("OutboundLink")],1)]),e._v(" "),n("p",[e._v("In IBC, blockchains do not directly pass messages to each other over the network. Instead, to\ncommunicate, a blockchain will commit some state to a specifically defined path reserved for a\nspecific message type and a specific counterparty (perhaps storing a specific connectionEnd as part\nof a handshake, or a packet intended to be relayed to a module on the counterparty chain). A relayer\nprocess monitors for updates to these paths, and will relay messages, by submitting the data stored\nunder the path along with a proof to the counterparty chain. The paths that all IBC implementations\nmust use for committing IBC messages is defined in\n"),n("a",{attrs:{href:"https://github.com/cosmos/ics/tree/master/spec/ics-024-host-requirements",target:"_blank",rel:"noopener noreferrer"}},[e._v("ICS-24"),n("OutboundLink")],1),e._v(" and the proof\nformat that all implementations must be able to produce and verify is defined in this "),n("a",{attrs:{href:"https://github.com/confio/ics23",target:"_blank",rel:"noopener noreferrer"}},[e._v("ICS-23 implementation"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("h3",{attrs:{id:"capabilities"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#capabilities"}},[e._v("#")]),e._v(" "),n("RouterLink",{attrs:{to:"/ibc/ocap.html"}},[e._v("Capabilities")])],1),e._v(" "),n("p",[e._v("IBC is intended to work in execution environements where modules do not necessarily trust each\nother. Thus IBC must authenticate module actions on ports and channels so that only modules with the\nappropriate permissions can use them. This is accomplished using "),n("RouterLink",{attrs:{to:"/architecture/adr-003-dynamic-capability-store.html"}},[e._v("dynamic\ncapabilities")]),e._v(". Upon binding to a port or\ncreating a channel for a module, IBC will return a dynamic capability that the module must claim in\norder to use that port or channel. This prevents other modules from using that port or channel since\nthey will not own the appropriate capability.")],1),e._v(" "),n("p",[e._v("While the above is useful background information, IBC modules do not need to interact at all with\nthese lower-level abstractions. The relevant abstraction layer for IBC application developers is\nthat of channels and ports. IBC applications should be written as self-contained "),n("strong",[e._v("modules")]),e._v(". A\nmodule on one blockchain can thus communicate with other modules on other blockchains by sending,\nreceiving and acknowledging packets through channels, which are uniquely identified by the\n"),n("code",[e._v("(channelID, portID)")]),e._v(" tuple. A useful analogy is to consider IBC modules as internet applications on\na computer. A channel can then be conceptualized as an IP connection, with the IBC portID being\nanalogous to a IP port and the IBC channelID being analogous to an IP address. Thus, a single\ninstance of an IBC module may communicate on the same port with any number of other modules and and\nIBC will correctly route all packets to the relevant module using the (channelID, portID tuple). An\nIBC module may also communicate with another IBC module over multiple ports, with each\n"),n("code",[e._v("(portID<->portID)")]),e._v(" packet stream being sent on a different unique channel.")]),e._v(" "),n("h3",{attrs:{id:"ports"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ports"}},[e._v("#")]),e._v(" "),n("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/tree/master/x/ibc/core/05-port",target:"_blank",rel:"noopener noreferrer"}},[e._v("Ports"),n("OutboundLink")],1)]),e._v(" "),n("p",[e._v("An IBC module may bind to any number of ports. Each port must be identified by a unique "),n("code",[e._v("portID")]),e._v(".\nSince IBC is designed to be secure with mutually-distrusted modules operating on the same ledger,\nbinding a port will return a dynamic object capability. In order to take action on a particular port\n(eg open a channel with its portID), a module must provide the dynamic object capability to the IBC\nhandler. This prevents a malicious module from opening channels with ports it does not own. Thus,\nIBC modules are responsible for claiming the capability that is returned on "),n("code",[e._v("BindPort")]),e._v(".")]),e._v(" "),n("h3",{attrs:{id:"channels"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#channels"}},[e._v("#")]),e._v(" "),n("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/tree/master/x/ibc/core/04-channel",target:"_blank",rel:"noopener noreferrer"}},[e._v("Channels"),n("OutboundLink")],1)]),e._v(" "),n("p",[e._v("An IBC channel can be established between 2 IBC ports. Currently, a port is exclusively owned by a\nsingle module. IBC packets are sent over channels. Just as IP packets contain the destination IP\naddress and IP port as well as the source IP address and source IP port, IBC packets will contain\nthe destination portID and channelID as well as the source portID and channelID. This enables IBC to\ncorrectly route packets to the destination module, while also allowing modules receiving packets to\nknow the sender module.")]),e._v(" "),n("p",[e._v("A channel may be "),n("code",[e._v("ORDERED")]),e._v(", in which case, packets from a sending module must be processed by the\nreceiving module in the order they were sent. Or a channel may be "),n("code",[e._v("UNORDERED")]),e._v(", in which case packets\nfrom a sending module are processed in the order they arrive (may not be the order they were sent).")]),e._v(" "),n("p",[e._v("Modules may choose which channels they wish to communicate over with, thus IBC expects modules to\nimplement callbacks that are called during the channel handshake. These callbacks may do custom\nchannel initialization logic, if any return an error, the channel handshake will fail. Thus, by\nreturning errors on callbacks, modules can programatically reject and accept channels.")]),e._v(" "),n("p",[e._v("The channel handshake is a 4 step handshake. Briefly, if a given chain A wants to open a channel with\nchain B using an already established connection:")]),e._v(" "),n("ol",[n("li",[e._v("chain A sends a "),n("code",[e._v("ChanOpenInit")]),e._v(" message to signal a channel initialization attempt with chain B.")]),e._v(" "),n("li",[e._v("chain B sends a "),n("code",[e._v("ChanOpenTry")]),e._v(" message to try opening the channel on chain A.")]),e._v(" "),n("li",[e._v("chain A sends a "),n("code",[e._v("ChanOpenAck")]),e._v(" message to mark its channel end status as open.")]),e._v(" "),n("li",[e._v("chain B sends a "),n("code",[e._v("ChanOpenConfirm")]),e._v(" message to mark its channel end status as open.")])]),e._v(" "),n("p",[e._v("If all this happens successfully, the channel will be open on both sides. At each step in the handshake, the module\nassociated with the "),n("code",[e._v("ChannelEnd")]),e._v(" will have it's callback executed for that step of the handshake. So\non "),n("code",[e._v("ChanOpenInit")]),e._v(", the module on chain A will have its callback "),n("code",[e._v("OnChanOpenInit")]),e._v(" executed.")]),e._v(" "),n("p",[e._v("Just as ports came with dynamic capabilites, channel initialization will return a dynamic capability\nthat the module "),n("strong",[e._v("must")]),e._v(" claim so that they can pass in a capability to authenticate channel actions\nlike sending packets. The channel capability is passed into the callback on the first parts of the\nhandshake; either "),n("code",[e._v("OnChanOpenInit")]),e._v(" on the initializing chain or "),n("code",[e._v("OnChanOpenTry")]),e._v(" on the other chain.")]),e._v(" "),n("h3",{attrs:{id:"packets"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#packets"}},[e._v("#")]),e._v(" "),n("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/tree/master/x/ibc/core/04-channel",target:"_blank",rel:"noopener noreferrer"}},[e._v("Packets"),n("OutboundLink")],1)]),e._v(" "),n("p",[e._v("Modules communicate with each other by sending packets over IBC channels. As mentioned above, all\nIBC packets contain the destination "),n("code",[e._v("portID")]),e._v(" and "),n("code",[e._v("channelID")]),e._v(" along with the source "),n("code",[e._v("portID")]),e._v(" and\n"),n("code",[e._v("channelID")]),e._v(", this allows modules to know the sender module of a given packet. IBC packets also\ncontain a sequence to optionally enforce ordering. IBC packets also contain a "),n("code",[e._v("TimeoutTimestamp")]),e._v(" and\n"),n("code",[e._v("TimeoutHeight")]),e._v(", which when non-zero, will determine the deadline before which the receiving module\nmust process a packet. If the timeout passes without the packet being successfully received, the\nsending module can timeout the packet and take appropriate actions.")]),e._v(" "),n("p",[e._v("Modules send custom application data to each other inside the "),n("code",[e._v("Data []byte")]),e._v(" field of the IBC packet.\nThus, packet data is completely opaque to IBC handlers. It is incumbent on a sender module to encode\ntheir application-specific packet information into the "),n("code",[e._v("Data")]),e._v(" field of packets, and the receiver\nmodule to decode that "),n("code",[e._v("Data")]),e._v(" back to the original application data.")]),e._v(" "),n("h3",{attrs:{id:"receipts-and-timeouts"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#receipts-and-timeouts"}},[e._v("#")]),e._v(" "),n("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/tree/master/x/ibc/core/04-channel",target:"_blank",rel:"noopener noreferrer"}},[e._v("Receipts and Timeouts"),n("OutboundLink")],1)]),e._v(" "),n("p",[e._v("Since IBC works over a distributed network and relies on potentially faulty relayers to relay messages between ledgers,\nIBC must handle the case where a packet does not get sent to its destination in a timely manner or at all. Thus, packets must\nspecify a timeout height or timeout timestamp after which a packet can no longer be successfully received on the destination chain.")]),e._v(" "),n("p",[e._v("If the timeout does get reached, then a proof of packet timeout can be submitted to the original chain which can then perform\napplication-specific logic to timeout the packet, perhaps by rolling back the packet send changes (refunding senders any locked funds, etc).")]),e._v(" "),n("p",[e._v("In ORDERED channels, a timeout of a single packet in the channel will cause the channel to close. If packet sequence "),n("code",[e._v("n")]),e._v(" times out,\nthen no packet at sequence "),n("code",[e._v("k > n")]),e._v(" can be successfully received without violating the contract of ORDERED channels that packets are processed in the order that they are sent. Since ORDERED channels enforce this invariant, a proof that sequence "),n("code",[e._v("n")]),e._v(" hasn't been received on the destination chain by packet "),n("code",[e._v("n")]),e._v("'s specified timeout is sufficient to timeout packet "),n("code",[e._v("n")]),e._v(" and close the channel.")]),e._v(" "),n("p",[e._v("In the UNORDERED case, packets may be received in any order. Thus, IBC will write a packet receipt for each sequence it has received in the UNORDERED channel. This receipt contains no information, it is simply a marker intended to signify that the UNORDERED channel has received a packet at the specified sequence. To timeout a packet on an UNORDERED channel, one must provide a proof that a packet receipt does not exist for the packet's sequence by the specified timeout. Of course, timing out a packet on an UNORDERED channel will simply trigger the application specific timeout logic for that packet, and will not close the channel.")]),e._v(" "),n("p",[e._v("For this reason, most modules should use UNORDERED channels as they require less liveness guarantees to function effectively for users of that channel.")]),e._v(" "),n("h3",{attrs:{id:"acknowledgements"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#acknowledgements"}},[e._v("#")]),e._v(" "),n("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/tree/master/x/ibc/core/04-channel",target:"_blank",rel:"noopener noreferrer"}},[e._v("Acknowledgements"),n("OutboundLink")],1)]),e._v(" "),n("p",[e._v("Modules may also choose to write application-specific acknowledgements upon processing a packet. This may either be done synchronously on "),n("code",[e._v("OnRecvPacket")]),e._v(", if the module processes packets as soon as they are received from IBC module. Or they may be done asynchronously if module processes packets at some later point after receiving the packet.")]),e._v(" "),n("p",[e._v("Regardless, this acknowledgement data is opaque to IBC much like the packet "),n("code",[e._v("Data")]),e._v(" and will be treated by IBC as a simple byte string "),n("code",[e._v("[]byte")]),e._v(". It is incumbent on receiver modules to encode their acknowledgemnet in such a way that the sender module can decode it correctly. This should be decided through version negotiation during the channel handshake.")]),e._v(" "),n("p",[e._v("The acknowledgement may encode whether the packet processing succeeded or failed, along with additional information that will allow the sender module to take appropriate action.")]),e._v(" "),n("p",[e._v("Once the acknowledgement has been written by the receiving chain, a relayer will relay the acknowledgement back to the original sender module which will then execute application-specific acknowledgment logic using the contents of the acknowledgement. This may involve rolling back packet-send changes in the case of a failed acknowledgement (refunding senders).")]),e._v(" "),n("p",[e._v("Once an acknowledgement is received successfully on the original sender the chain, the IBC module deletes the corresponding packet commitment as it is no longer needed.")]),e._v(" "),n("h2",{attrs:{id:"further-readings-and-specs"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#further-readings-and-specs"}},[e._v("#")]),e._v(" Further Readings and Specs")]),e._v(" "),n("p",[e._v("If you want to learn more about IBC, check the following specifications:")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/cosmos/ics/blob/master/ibc/README.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("IBC specification overview"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("RouterLink",{attrs:{to:"/x/ibc/spec/"}},[e._v("IBC SDK specification")])],1)]),e._v(" "),n("h2",{attrs:{hide:"",id:"next"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#next"}},[e._v("#")]),e._v(" Next")]),e._v(" "),n("p",{attrs:{hide:""}},[e._v("Learn about how to "),n("RouterLink",{attrs:{to:"/ibc/integration.html"}},[e._v("integrate")]),e._v(" IBC to your application")],1)])}),[],!1,null,null,null);t.default=o.exports}}]);