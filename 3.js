webpackJsonp([3],{1883:function(e,t,a){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=a(0),l=a.n(o),c=a(2),m=a.n(c),g=a(830),u=a(8),d=a(7),v=a(70),b=a(5),_=a.n(b),f=a(16),p=a(4),h=a(62),y=a(21),E=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),k="-----BEGIN BITSHARES SIGNED MESSAGE-----",S="-----END BITSHARES SIGNED MESSAGE-----",M=function(){function e(){n(this,e)}return E(e,[{key:"parseMessage",value:function(e){var t=void 0,a=void 0,n=void 0,s=void 0;try{t=e.split(k)[1],a=t.split("-----BEGIN META-----"),t=a[0].replace(/^\n|\n$/g,""),n=a[1].split("-----BEGIN SIGNATURE-----"),a=n[0].trim(),n=n[1].split(S)[0].trim(),s=t+"\n"+a}catch(e){throw new Error(_.a.translate("account.signedmessages.invalidformat"))}var i=void 0,r=void 0,o=void 0,l=void 0;if(a)try{i=a.split("account="),i=i[1].split("\n")[0].trim(),r=a.split("memokey="),r=r[1].split("\n")[0].trim(),o=a.split("block="),o=o[1].split("\n")[0].trim(),l=a.split("timestamp="),l=l[1].split("\n")[0].trim()}catch(e){throw new Error(_.a.translate("account.signedmessages.invalidformat"))}return{content:t,meta:{account:i,key:r,block:o,timestamp:l},signed:s,signature:n}}},{key:"verifyMemo",value:function(e){var t=void 0;if(t="string"==typeof e||e instanceof String?this.parseMessage(e):e,null==p.b.getAccount(t.meta.account))throw new Error(_.a.translate("account.signedmessages.invaliduser"));var a=!1;try{a=p.k.fromHex(t.signature).verifyBuffer(t.signed,p.i.fromPublicKeyString(t.meta.key))}catch(e){throw new Error(_.a.translate("account.signedmessages.errorverifying"))}if(!a)throw new Error(_.a.translate("account.signedmessages.invalidsignature"));return t}},{key:"signMessage",value:function(e,t){return new Promise(function(a,n){Promise.resolve(h.a.unlock()).then(function(){try{var s=e.get("options").get("memo_key");/111111111111111111111/.test(s)&&(s=null);var i=void 0;if(t&&s&&!(i=y.a.getPrivateKey(s)))throw new Error(_.a.translate("account.signedmessages.invalidkey"));var r=p.b.getObject("2.1.0").get("last_irreversible_block_num"),o=new Date,l="account="+e.get("name")+"\nmemokey="+s+"\nblock="+r+"\ntimestamp="+o.toUTCString(),c=t+"\n"+l;setTimeout(function(){try{var e=p.k.signBuffer(c,i,s),r=k+"\n"+t+"\n-----BEGIN META-----\n"+l+"\n-----BEGIN SIGNATURE-----\n"+e.toHex()+"\n"+S;a(r)}catch(e){n(e)}},0)}catch(e){n(e)}})})}}]),e}(),w=f.a.createActions(M),C=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),T=function(e){function t(e){s(this,t);var a=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={tabsm_memo_key:a.props.account.get("options").get("memo_key"),tabsm_popup:"",tabsm_message_text:null,tabsm_message_signed:null,tabvm_popup:"",tabvm_message_signed:null,tabvm_verified:null,tabvm_message_signed_and_verified:null,tabvm_flag_verifyonchange:!1},a}return r(t,e),C(t,[{key:"_tabSMSignAction",value:function(e){var t=this;e.preventDefault();try{var a=this.props.account.get("options").get("memo_key");if(this.state.tabsm_memo_key!==a)throw Error(_.a.translate("account.signedmessages.keymismatch"));this.state.tabsm_message_text&&(this._tabSMPopMessage(_.a.translate("account.signedmessages.signing"),0),w.signMessage(this.props.account,this.state.tabsm_message_text).then(function(e){t.setState({tabsm_message_signed:e,tabsm_popup:""})}).catch(function(e){t._tabSMPopMessage(e.message),t.setState({tabsm_message_signed:null})}))}catch(e){this._tabSMPopMessage(e.message),this.setState({tabsm_message_signed:null})}}},{key:"_tabSMHandleChange",value:function(e){this.setState({tabsm_message_text:e.target.value})}},{key:"_tabSMHandleChangeKey",value:function(e){this.setState({tabsm_memo_key:e})}},{key:"_tabSMCopyToClipBoard",value:function(e){if(""!==e.target.value){e.target.focus(),e.target.select();try{var t=document.execCommand("copy");this._tabSMPopMessage(t?_.a.translate("account.signedmessages.copysuccessful"):_.a.translate("account.signedmessages.copyunsuccessful"))}catch(e){this._tabSMPopMessage(_.a.translate("account.signedmessages.copyunsuccessful"))}}}},{key:"_tabSMPopMessage",value:function(e){var t=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3e3;this.setState({tabsm_popup:e}),""!==e&&a>0&&setTimeout(function(){t.setState({tabsm_popup:""})},a)}},{key:"_tabVMAction",value:function(e){var t=this;e.preventDefault(),this.setState({tabvm_message_signed_and_verified:null,tabvm_verified:!1}),this.state.tabvm_message_signed&&(this._tabVMPopMessage(_.a.translate("account.signedmessages.verifying"),0),setTimeout(function(){try{var e=w.verifyMemo(t.state.tabvm_message_signed);t.setState({tabvm_message_signed_and_verified:e,tabvm_verified:!0,tabvm_popup:""})}catch(e){t._tabVMPopMessage(e.message),t.setState({tabvm_message_signed_and_verified:null,tabvm_verified:!1})}},0))}},{key:"_tabVMHandleChange",value:function(e){this.setState({tabvm_message_signed:e.target.value,tabvm_verified:!1,tabvm_message_signed_and_verified:null}),this.state.tabvm_flag_verifyonchange&&this._tabVMAction(e)}},{key:"_tabVMPopMessage",value:function(e){var t=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3e3;this.setState({tabvm_popup:e}),""!==e&&a>0&&setTimeout(function(){t.setState({tabvm_popup:""})},a)}},{key:"_tabVMToggleVerifyOnChange",value:function(){this.setState({tabvm_flag_verifyonchange:!this.state.tabvm_flag_verifyonchange})}},{key:"render",value:function(){return l.a.createElement("div",{className:"grid-content app-tables no-padding",ref:"appTables"},l.a.createElement("div",{className:"content-block small-12"},l.a.createElement("div",{className:"tabs-container generic-bordered-box"},l.a.createElement(v.b,{className:"account-tabs",tabsClass:"account-overview no-padding bordered-header content-block",setting:"accountSignedMessagesTab",contentClass:"grid-content shrink small-vertical medium-horizontal no-padding",segmented:!1},l.a.createElement(v.a,{title:"account.signedmessages.signmessage"},l.a.createElement("div",{className:"grid-content",style:{overflowX:"hidden"}},l.a.createElement("div",{className:"content-block no-margin"},l.a.createElement("h3",null,l.a.createElement(m.a,{content:"account.signedmessages.signmessage"}))),l.a.createElement(g.a,{ref:"memo_key",value:this.state.tabsm_memo_key,label:"account.perm.memo_public_key",placeholder:"Public Key",tabIndex:7,onChange:this._tabSMHandleChangeKey.bind(this),disableActionButton:!0}),l.a.createElement("br",null),l.a.createElement("textarea",{rows:"10",value:this.state.tabsm_message_text,onChange:this._tabSMHandleChange.bind(this),placeholder:_.a.translate("account.signedmessages.entermessage")}),l.a.createElement("span",null,l.a.createElement("button",{className:"button",onClick:this._tabSMSignAction.bind(this)},l.a.createElement(m.a,{content:"account.signedmessages.sign"})),l.a.createElement("text",{style:{color:"gray"}},this.state.tabsm_popup)),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("textarea",{rows:"14",value:this.state.tabsm_message_signed,style:{editable:!1},placeholder:_.a.translate("account.signedmessages.automaticcreation"),onClick:this._tabSMCopyToClipBoard.bind(this)}))),l.a.createElement(v.a,{title:"account.signedmessages.verifymessage"},l.a.createElement("div",{className:"grid-content",style:{overflowX:"hidden"}},l.a.createElement("div",{className:"content-block no-margin"},l.a.createElement("h3",null,l.a.createElement(m.a,{content:"account.signedmessages.verifymessage"})),l.a.createElement("div",{style:{float:"right",marginTop:"0.1em",marginBottom:"0.5em"}},l.a.createElement("table",null,l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("label",null,l.a.createElement(m.a,{content:"account.signedmessages.verifyonchange"}))),l.a.createElement("td",null,l.a.createElement("div",{className:"switch",onClick:this._tabVMToggleVerifyOnChange.bind(this)},l.a.createElement("input",{type:"checkbox",checked:this.state.tabvm_flag_verifyonchange,value:_.a.translate("account.signedmessages.verifyonchange")}),l.a.createElement("label",null))))))),l.a.createElement("textarea",{rows:"10",value:this.state.tabvm_message_signed,onChange:this._tabVMHandleChange.bind(this),placeholder:_.a.translate("account.signedmessages.entermessage")}),l.a.createElement("span",null,l.a.createElement("button",{className:"button",onClick:this._tabVMAction.bind(this)},l.a.createElement(m.a,{content:"account.signedmessages.verify"})),l.a.createElement("text",{style:{color:"gray"}},this.state.tabvm_popup),null!==this.state.tabvm_verified&&l.a.createElement("div",{style:{float:"right"}},"Message is:",l.a.createElement("div",{style:{backgroundColor:this.state.tabvm_verified?"green":"red"}},l.a.createElement("label",null,this.state.tabvm_verified?"verified":"not verified"))),this.state.tabvm_verified&&null!==this.state.tabvm_message_signed_and_verified&&l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement("div",{style:{color:"gray"}},l.a.createElement("fieldset",null,l.a.createElement("legend",{style:{color:"white",weight:"bold"}},"Verified message from ",this.state.tabvm_message_signed_and_verified.meta.account),l.a.createElement("pre",null,this.state.tabvm_message_signed_and_verified.content),l.a.createElement("span",{style:{fontSize:"small",float:"right"}},"Signed on ",this.state.tabvm_message_signed_and_verified.meta.timestamp)))))))))))}}]),t}(l.a.Component);T.propTypes={account:u.a.ChainAccount.isRequired},T=Object(d.a)(T);t.default=T}});
//# sourceMappingURL=3.js.map