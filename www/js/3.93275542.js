(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"14de":function(t,e,n){},"3cd9":function(t,e,n){},"6f9f":function(t,e,n){"use strict";var r=n("a27e"),a=n.n(r);a.a},"94ff":function(t,e,n){"use strict";var r=n("3cd9"),a=n.n(r);a.a},"9f0d":function(t,e,n){"use strict";var r=n("14de"),a=n.n(r);a.a},a27e:function(t,e,n){},a9e3:function(t,e,n){},bc13b:function(t,e,n){"use strict";n.r(e);var r,a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-page",{attrs:{padding:""}},[n("div",{staticClass:"text-center"},[n("h2",{staticClass:"text-bold q-mt-lg"},[t._v("\n      Enter Lottery\n    ")]),n("h6",{staticClass:"q-mt-md"},[t._v("\n      Play lottery on-chain with off-chain game info\n    ")])]),n("div",{staticClass:"container q-py-xl"},[t.userAddress?t.isLoading?n("div",{staticClass:"row justify-center"},[n("q-spinner",{attrs:{color:t.color,size:"4em"}}),n("div",{staticClass:"col-xs-12 text-center q-mt-md"},[t._v("\n        Loading...\n      ")])],1):n("div",[t.proxyAddress?n("div",{staticClass:"row justify-center "},[n("deposit-with-wyre"),n("exit-pool")],1):n("div",{staticClass:"row justify-center "})]):n("div",{staticClass:"text-center"},[n("connect-wallet")],1)]),n("div",{staticClass:"row justify-center "},[t.drawNo?n("lottery-info"):t._e(),t.magayoInfo?n("magayo-oracle-info"):t._e()],1)])},o=[],s=(n("8e6e"),n("8a81"),n("ac6a"),n("cadf"),n("06db"),n("456d"),n("c47a")),i=n.n(s),c=n("2f62"),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"row justify-center"},[n("q-card",{staticClass:"col-auto card q-ma-md"},[n("h4",{staticClass:"q-mb-md"},[t._v("\n        Have a Wallet?\n      ")]),n("p",[t._v("Login with the wallet provider of your choice")]),n("br"),n("q-btn",{staticClass:"q-my-md",attrs:{label:"Connect Wallet",color:"primary",loading:t.isMainLoading},on:{click:function(e){return t.connectWallet()}}})],1),n("q-card",{staticClass:"col-auto card q-ma-md"},[n("h4",{staticClass:"q-mb-md"},[t._v("\n        Need a Wallet?\n      ")]),n("p",[t._v("Use Torus to connect with Google, Facebook, Reddit, Discord, or Twitch")]),n("q-btn",{staticClass:"q-my-md",attrs:{label:"Create Wallet",color:"primary",loading:t.isBackupLoading},on:{click:function(e){return t.connectWallet(!0)}}})],1)],1)])},u=[],d=n("967e"),f=n.n(d),m=(n("7f7f"),n("96cf"),n("fa84")),p=n.n(m),v=n("e7ea"),w=n("83cd");function b(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function y(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?b(Object(n),!0).forEach((function(e){i()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var g=[{walletName:"metamask"},{walletName:"torus"},{walletName:"opera"},{walletName:"dapper"}],h=[{walletName:"torus"}],x={name:"ConnectWallet",data:function(){return{isMainLoading:!1,isBackupLoading:!1}},computed:y({},Object(c["b"])({signer:function(t){return t.main.signer},userAddress:function(t){return t.main.userAddress},Lottery:function(t){return t.main.contracts.Lottery},MagayoOracle:function(t){return t.main.contracts.MagayoOracle}})),methods:{connectWallet:function(){var t=arguments,e=this;return p()(f.a.mark((function n(){var a,o,s,i,c;return f.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=t.length>0&&void 0!==t[0]&&t[0],n.prev=1,a?(e.isBackupLoading=!0,o=Object(w["a"])({walletSelect:{wallets:h},dappId:"df6bc329-8c80-40a9-93be-8ed71c3eac6d",networkId:4,darkMode:Boolean(e.$q.localStorage.getItem("isDark")),subscriptions:{wallet:function(t){r=t.provider}}})):(e.isMainLoading=!0,o=Object(w["a"])({walletSelect:{wallets:g},dappId:"df6bc329-8c80-40a9-93be-8ed71c3eac6d",networkId:4,darkMode:Boolean(e.$q.localStorage.getItem("isDark")),subscriptions:{wallet:function(t){r=t.provider}}})),n.next=5,o.walletSelect();case 5:return n.next=7,o.walletCheck();case 7:return n.next=9,e.$store.dispatch("main/setEthereumData",r);case 9:return n.next=11,e.$store.dispatch("main/setLotteryData");case 11:return n.next=13,e.MagayoOracle.game();case 13:return s=n.sent,n.next=16,e.MagayoOracle.games(s);case 16:return i=n.sent,c={name:v["ethers"].utils.parseBytes32String(i.name),country:v["ethers"].utils.parseBytes32String(i.country),state:v["ethers"].utils.parseBytes32String(i.state),mainDrawn:i.mainDrawn,mainMax:i.mainMax,mainMin:i.mainMin,bonusDrawn:i.bonusDrawn,bonusMax:i.bonusMax,bonusMin:i.bonusMin},n.next=20,e.$store.dispatch("main/setMagayoInfo",c);case 20:n.next=25;break;case 22:n.prev=22,n.t0=n["catch"](1),console.error(n.t0);case 25:return n.prev=25,e.isMainLoading=!1,e.isBackupLoading=!1,n.finish(25);case 29:case"end":return n.stop()}}),n,null,[[1,22,25,29]])})))()}}},O=x,C=(n("f424"),n("2877")),j=n("eebe"),_=n.n(j),D=n("f09f"),k=n("9c40"),L=Object(C["a"])(O,l,u,!1,null,"3acf935c",null),S=L.exports;_()(L,"components",{QCard:D["a"],QBtn:k["a"]});var P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.magayoInfo?n("div",{staticClass:"row justify-center",staticStyle:{"max-width":"900px"}},[n("q-card",{staticClass:"col text-center q-px-lg q-py-md q-ma-md",staticStyle:{"max-width":"400px"}},[n("q-card-section",[n("h6",[t._v("Step 1")]),n("h4",{staticClass:"text-bold"},[t._v("\n          Start Your Lucky Draw\n        ")])]),n("q-card-section",[n("q-btn",{attrs:{color:"primary",label:"Enter with 0.01 ETH",loading:t.isDepositLoading},on:{click:t.startLuckyDraw}}),n("div",{staticClass:"text-caption text-italic q-mt-md"},[t._v("\n          We will generate random number for you\n        ")]),t.ticketNumber?n("div",{staticClass:"row justify-between"},[n("div",{staticClass:"col-xs-5 text-left text-bold"},[t._v("\n            Ticket Number:\n          ")]),n("div",{staticClass:"col text-left"},[t._v("\n            "+t._s(t.ticketNumber)+"\n          ")])]):t._e()],1)],1)],1):t._e()])},q=[],M=(n("ee1d"),n("c5f6"),n("2a19")),N={methods:{formatCurrency:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:4,a="string"===typeof t?Number(t):t;a=a<0&&a>-1e-6?0:a;var o=a<0;if(void 0===a||null===a||Number.isNaN(a))return"$-";var s=a.toLocaleString(void 0,{minimumFractionDigits:n,maximumFractionDigits:r});return o&&e?"-$".concat(Math.abs(s)):e?"$".concat(s):"".concat(s)},formatPercent:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:4;if(void 0===t||null===t||Number.isNaN(t))return"-%";var r="string"===typeof t?Number(t):t;if(void 0===r||null===r||Number.isNaN(t))return"-%";var a=r.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:n});return e?"+".concat(a,"%"):"".concat(a,"%")},notifyUser:function(t,e){M["a"].create({color:t,message:e,timeout:"positive"===t.toLowerCase()?5e3:0,position:"top",actions:[{icon:"close",color:"white"}]})}}},I=n("bf0b4");function B(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function E(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?B(Object(n),!0).forEach((function(e){i()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):B(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var A={name:"DepositWithWyre",mixins:[N],data:function(){return{isDepositLoading:!1,isEntryLoading:!1,isEntryComplete:!1,isWaitingForPurchase:!1,contractAddress:void 0,pools:[{label:"ETH-BNT",value:"eth-bnt"}],ticketsAmount:void 0,selectedPool:null}},computed:E({},Object(c["b"])({signer:function(t){return t.main.signer},userAddress:function(t){return t.main.userAddress},proxyAddress:function(t){return t.main.proxy.address},ticketNumber:function(t){return t.main.proxy.ticketNumber},ethBalance:function(t){return t.main.proxy.ethBalance},bntBalance:function(t){return t.main.proxy.bntBalance},ethTokenBalance:function(t){return t.main.proxy.ethTokenBalance},ethBntBalance:function(t){return t.main.proxy.ethBntBalance},gasPrice:function(t){return t.main.gasPrice},FactoryContract:function(t){return t.main.contracts.Factory},LotteryWeb3:function(t){return t.main.contracts.LotteryWeb3},magayoInfo:function(t){return t.main.proxy.magayoInfo}})),methods:{startLuckyDraw:function(){var t=this;return p()(f.a.mark((function e(){var n;return f.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.isDepositLoading=!0,e.next=3,t.$store.dispatch("main/showTickets",t.magayoInfo);case 3:console.log(t.ticketNumber),n=Object(I["a"])({dappId:"df6bc329-8c80-40a9-93be-8ed71c3eac6d",networkId:4,darkMode:Boolean(t.$q.localStorage.getItem("isDark"))});try{t.LotteryWeb3.methods.buy(t.ticketNumber).send({from:t.userAddress,gasLimit:5e5,value:v["ethers"].utils.parseEther("0.01")}).on("transactionHash",function(){var t=p()(f.a.mark((function t(e){return f.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:console.log("txHash: ",e),n.hash(e);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).once("receipt",function(){var e=p()(f.a.mark((function e(n){return f.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("Transaction receipt: ",n),e.next=3,t.$store.dispatch("main/setLotteryData");case 3:t.isDepositLoading=!1;case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.log("Something went wrong. See the error message below."),console.error(e),t.notifyUser("negative",e.message),t.isDepositLoading=!1}))}catch(r){console.log("Something went wrong. See the error message below."),console.error(r),t.notifyUser("negative",r.message),t.isDepositLoading=!1}case 6:case"end":return e.stop()}}),e)})))()}}},W=A,$=(n("e49a"),n("a370")),T=n("27f9"),Q=Object(C["a"])(W,P,q,!1,null,"da1495e8",null),H=Q.exports;_()(Q,"components",{QCard:D["a"],QCardSection:$["a"],QInput:T["a"],QBtn:k["a"]});var F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.drawNo?n("q-card",{staticClass:"col text-center q-px-lg q-py-md q-ma-md",staticStyle:{"max-width":"450px"},attrs:{loading:t.isMainLoading}},[n("q-card-section",[n("h6",[t._v("Step 2 ")]),n("h4",{staticClass:"text-bold"},[t._v("\n        Check & Claim\n      ")])]),n("q-card-section",[n("div",{staticClass:"text-caption text-justify"},[t._v("\n        Select a draw number to claim reward\n      ")])]),n("q-card-section",[n("q-select",{staticClass:"q-mb-md",attrs:{filled:"",label:"draw number to claim with",options:t.options},model:{value:t.selectedDrawNo,callback:function(e){t.selectedDrawNo=e},expression:"selectedDrawNo"}}),n("div",{staticClass:"row"},[n("q-btn",{staticClass:"col-3",attrs:{color:"primary",label:"Check",loading:t.isMainLoading},on:{click:t.check}}),n("div",{staticClass:"col-6"}),n("q-btn",{staticClass:"col-3",attrs:{color:"primary",label:"Claim",loading:t.isMainLoading},on:{click:t.claim}})],1)],1)],1):t._e()],1)},R=[];function U(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function G(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?U(Object(n),!0).forEach((function(e){i()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):U(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var J={name:"ExitPool",mixins:[N],data:function(){return{isMainLoading:!1,recipientAddress:void 0,selectedDrawNo:void 0}},computed:G({},Object(c["b"])({provider:function(t){return t.main.provider},userAddress:function(t){return t.main.userAddress},proxyAddress:function(t){return t.main.proxy.address},ethBntBalance:function(t){return t.main.proxy.ethBntBalance},Lottery:function(t){return t.main.contracts.Lottery},MagayoOracle:function(t){return t.main.contracts.MagayoOracle},LotteryWeb3:function(t){return t.main.contracts.LotteryWeb3},options:function(t){return t.main.lottery.options},drawNo:function(t){return t.main.lottery.drawNo}})),methods:{setRecipientAddressToProxy:function(){this.recipientAddress=this.proxyAddress},check:function(){var t=this;return p()(f.a.mark((function e(){return f.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.isMainLoading=!0,e.next=3,t.$store.dispatch("main/setDrawNo",t.selectedDrawNo);case 3:return e.next=5,t.$store.dispatch("main/setLotteryData");case 5:t.isMainLoading=!1;case 6:case"end":return e.stop()}}),e)})))()},claim:function(t){var e=this;return p()(f.a.mark((function n(){var r;return f.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:t.commit,e.isMainLoading=!0,console.log("selectedDrawNo: ",e.selectedDrawNo),r=Object(I["a"])({dappId:"df6bc329-8c80-40a9-93be-8ed71c3eac6d",networkId:4,darkMode:Boolean(e.$q.localStorage.getItem("isDark"))});try{e.drawNo=e.selectedDrawNo,e.LotteryWeb3.methods.claim(e.selectedDrawNo).send({from:e.userAddress,gasLimit:5e5}).on("transactionHash",function(){var t=p()(f.a.mark((function t(e){return f.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:console.log("txHash: ",e),r.hash(e);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).once("receipt",function(){var t=p()(f.a.mark((function t(n){return f.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:console.log("Transaction receipt: ",n),e.isMainLoading=!1;case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){console.log("Something went wrong. See the error message below."),console.error(t),e.notifyUser("negative",t.message),e.isMainLoading=!1}))}catch(a){console.log("Something went wrong. See the error message below."),console.error(a),e.notifyUser("negative",a.message),e.isMainLoading=!1}case 5:case"end":return n.stop()}}),n)})))()}}},z=J,Y=(n("6f9f"),n("ddd8")),K=Object(C["a"])(z,F,R,!1,null,"5444cfc8",null),V=K.exports;_()(K,"components",{QCard:D["a"],QCardSection:$["a"],QSelect:Y["a"],QBtn:k["a"]});var X=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("q-card",{staticClass:"text-center col q-px-lg q-py-md q-ma-md",staticStyle:{"max-width":"400px"}},[n("q-card-section",[n("h4",{staticClass:"q-mb-md"},[t._v("\n        Magayo Oracle\n      ")])]),n("q-card-section",[n("div",{staticClass:"row justify-between"},[n("div",{staticClass:"col-xs-5 text-left text-bold"},[t._v("\n          Name:\n        ")]),n("div",{staticClass:"col text-left"},[t._v("\n          "+t._s(t.magayoInfo.name)+"\n        ")])]),n("div",{staticClass:"row justify-between"},[n("div",{staticClass:"col-xs-5 text-left text-bold"},[t._v("\n          Country:\n        ")]),n("div",{staticClass:"col text-left"},[t._v("\n          "+t._s(t.magayoInfo.country)+"\n        ")])]),n("div",{staticClass:"row justify-between"},[n("div",{staticClass:"col-xs-5 text-left text-bold"},[t._v("\n          State:\n        ")]),n("div",{staticClass:"col text-left"},[t._v("\n          "+t._s(t.magayoInfo.state)+"\n        ")])]),n("div",{staticClass:"row justify-between"},[n("div",{staticClass:"col-xs-5 text-left text-bold"},[t._v("\n          Main Drawn:\n        ")]),n("div",{staticClass:"col text-left"},[t._v("\n          "+t._s(t.magayoInfo.mainDrawn)+"\n        ")])]),n("div",{staticClass:"row justify-between"},[n("div",{staticClass:"col-xs-5 text-left text-bold"},[t._v("\n          Main Min:\n        ")]),n("div",{staticClass:"col text-left"},[t._v("\n          "+t._s(t.magayoInfo.mainMin)+"\n        ")])]),n("div",{staticClass:"row justify-between"},[n("div",{staticClass:"col-xs-5 text-left text-bold"},[t._v("\n          Main Max:\n        ")]),n("div",{staticClass:"col text-left"},[t._v("\n          "+t._s(t.magayoInfo.mainMax)+"\n        ")])]),n("div",{staticClass:"row justify-between"},[n("div",{staticClass:"col-xs-5 text-left text-bold"},[t._v("\n          Bonus Drawn:\n        ")]),n("div",{staticClass:"col text-left"},[t._v("\n          "+t._s(t.magayoInfo.bonusDrawn)+"\n        ")])]),n("div",{staticClass:"row justify-between"},[n("div",{staticClass:"col-xs-5 text-left text-bold"},[t._v("\n          Bonus Min:\n        ")]),n("div",{staticClass:"col text-left"},[t._v("\n          "+t._s(t.magayoInfo.bonusMin)+"\n        ")])]),n("div",{staticClass:"row justify-between"},[n("div",{staticClass:"col-xs-5 text-left text-bold"},[t._v("\n          Bonus Max:\n        ")]),n("div",{staticClass:"col text-left"},[t._v("\n          "+t._s(t.magayoInfo.bonusMax)+"\n        ")])])])],1)],1)},Z=[];function tt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function et(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?tt(Object(n),!0).forEach((function(e){i()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):tt(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var nt={name:"MagayoOracleInfo",data:function(){return{}},computed:et({},Object(c["b"])({magayoInfo:function(t){return t.main.proxy.magayoInfo}}))},rt=nt,at=(n("94ff"),Object(C["a"])(rt,X,Z,!1,null,"249fe29a",null)),ot=at.exports;_()(at,"components",{QCard:D["a"],QCardSection:$["a"]});var st=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"row justify-center"},[n("q-card",{staticClass:"col text-center q-px-lg q-py-md q-ma-md",staticStyle:{"max-width":"400px"}},[n("q-card-section",[n("h4",{staticClass:"q-mb-md"},[t._v("\n          Lottery Info\n        ")])]),n("q-card-section",[n("div",{staticClass:"row justify-between"},[n("div",{staticClass:"col-xs-5 text-left text-bold"},[t._v("\n            Game time:\n          ")]),n("div",{staticClass:"col text-left"},[t._v("\n            "+t._s(t.countdown)+"\n            "),"Closed"==t.drawState?n("q-btn",{staticClass:"col-3",attrs:{color:"primary",label:"Start New Game",loading:t.isStartLoading},on:{click:t.start}}):t._e(),"Closed"==t.drawState?n("small",[t._v("\n              Please note: More than 0.1 Link is required in the Lottery contract balance in order to start a new game\n            ")]):t._e()],1)]),n("div",{staticClass:"row justify-between"},[n("div",{staticClass:"col-xs-5 text-left text-bold"},[t._v("\n            Draw Number:\n          ")]),n("div",{staticClass:"col text-left"},[t._v("\n            "+t._s(t.drawNo)+"\n          ")])]),n("div",{staticClass:"row justify-between"},[n("div",{staticClass:"col-xs-5 text-left text-bold"},[t._v("\n            Entries\n          ")]),n("div",{staticClass:"col text-left"},[t._v("\n            "+t._s(t.entries)+"\n          ")])]),n("div",{staticClass:"row justify-between"},[n("div",{staticClass:"col-xs-5 text-left text-bold"},[t._v("\n            Reward Results\n          ")]),n("div",{staticClass:"col text-left"},[t._v("\n            "+t._s(t.results)+"\n          ")])]),n("div",{staticClass:"row justify-between"},[n("div",{staticClass:"col-xs-5 text-left text-bold"},[t._v("\n            Draw State:\n          ")]),n("div",{staticClass:"col text-left"},[t._v("\n            "+t._s(t.drawState)+"\n          ")])]),n("div",{staticClass:"row justify-between"},[n("div",{staticClass:"col-xs-5 text-left text-bold"},[t._v("\n            Total Draw Rewards:\n          ")]),n("div",{staticClass:"col text-left"},[t._v("\n            "+t._s(t.drawRewards)+"\n          ")])]),n("div",{staticClass:"row justify-between"},[n("div",{staticClass:"col-xs-5 text-left text-bold"},[t._v("\n            Drawn Numbers:\n          ")]),n("div",{staticClass:"col text-left"},[t._v("\n            "+t._s(t.drawNumbers)+"\n          ")])])])],1)],1)])},it=[];function ct(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function lt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?ct(Object(n),!0).forEach((function(e){i()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ct(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var ut={name:"LotteryInfo",data:function(){return{isStartLoading:!1,countdown:void 0}},mounted:function(){var t=this;return p()(f.a.mark((function e(){var n;return f.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=setInterval(p()(f.a.mark((function e(){var r,a,o,s,i,c,l;return f.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:r=(new Date).getTime(),a=new Date(1e3*t.startTime+1e3*t.duration).getTime(),o=a-r,s=Math.floor(o/864e5),i=Math.floor(o%864e5/36e5),c=Math.floor(o%36e5/6e4),l=Math.floor(o%6e4/1e3),t.countdown="".concat(s," Days ").concat(i," Hours ").concat(c," Minutes ").concat(l," Seconds"),o<0&&(clearInterval(n),t.countdown="No Active Game");case 9:case"end":return e.stop()}}),e)}))),1e3);case 1:case"end":return e.stop()}}),e)})))()},computed:lt({},Object(c["b"])({startTime:function(t){return t.main.lottery.startTime},duration:function(t){return t.main.lottery.duration},drawNo:function(t){return t.main.lottery.drawNo},drawState:function(t){return t.main.lottery.drawState},entries:function(t){return t.main.lottery.entries},results:function(t){return t.main.lottery.results},drawRewards:function(t){return t.main.lottery.drawRewards},drawNumbers:function(t){return t.main.lottery.drawNumbers},LotteryWeb3:function(t){return t.main.contracts.LotteryWeb3},userAddress:function(t){return t.main.userAddress}})),methods:{start:function(t){var e=this;return p()(f.a.mark((function n(){var r;return f.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:t.commit,e.isStartLoading=!0,r=Object(I["a"])({dappId:"df6bc329-8c80-40a9-93be-8ed71c3eac6d",networkId:4,darkMode:Boolean(e.$q.localStorage.getItem("isDark"))});try{e.LotteryWeb3.methods.startNewLottery().send({from:e.userAddress,gasLimit:5e5}).on("transactionHash",function(){var t=p()(f.a.mark((function t(e){return f.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:console.log("txHash: ",e),r.hash(e);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).once("receipt",function(){var t=p()(f.a.mark((function t(n){return f.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log("Transaction receipt: ",n),t.next=3,e.$store.dispatch("main/setLotteryData");case 3:e.isStartLoading=!1;case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){console.log("Something went wrong. See the error message below."),console.error(t),e.notifyUser("negative",t.message),e.isStartLoading=!1}))}catch(a){console.log("Something went wrong. See the error message below."),console.error(a),e.notifyUser("negative",a.message),e.isStartLoading=!1}case 4:case"end":return n.stop()}}),n)})))()}}},dt=ut,ft=(n("9f0d"),Object(C["a"])(dt,st,it,!1,null,"2316fc22",null)),mt=ft.exports;function pt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function vt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?pt(Object(n),!0).forEach((function(e){i()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):pt(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}_()(ft,"components",{QCard:D["a"],QCardSection:$["a"],QBtn:k["a"]});var wt={name:"Home",components:{ConnectWallet:S,DepositWithWyre:H,ExitPool:V,MagayoOracleInfo:ot,LotteryInfo:mt},computed:vt(vt({},Object(c["b"])({userAddress:function(t){return t.main.userAddress},proxyAddress:function(t){return t.main.proxy.address},drawNo:function(t){return t.main.lottery.drawNo},magayoInfo:function(t){return t.main.proxy.magayoInfo}})),{},{isLoading:function(){return void 0===this.proxyAddress},color:function(){return this.$q.dark.isActive?"accent":"primary"}})},bt=wt,yt=n("9989"),gt=n("0d59"),ht=Object(C["a"])(bt,a,o,!1,null,null,null);e["default"]=ht.exports;_()(ht,"components",{QPage:yt["a"],QSpinner:gt["a"]})},e0c2:function(t,e,n){},e49a:function(t,e,n){"use strict";var r=n("e0c2"),a=n.n(r);a.a},f424:function(t,e,n){"use strict";var r=n("a9e3"),a=n.n(r);a.a}}]);