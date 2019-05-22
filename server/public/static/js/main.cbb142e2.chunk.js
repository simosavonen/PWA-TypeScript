(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(2),o=a.n(c),l=(a(10),a(3)),i=function(){return r.a.createElement("div",{className:"navbar is-spaced"},r.a.createElement("div",{className:"navbar-brand"},"PWA-TypeScript"))},s=function(e){var t=e.data,a=function(e){switch(e){case"clear-day":return"/images/climacons/Sun.svg";case"clear-night":return"/images/climacons/Moon.svg";case"rain":return"/images/climacons/Cloud-Rain.svg";case"snow":return"/images/climacons/Cloud-Snow.svg";case"sleet":return"/images/climacons/Cloud-Hail.svg";case"wind":return"/images/climacons/Wind.svg";case"fog":return"/images/climacons/Cloud-Fog.svg";case"cloudy":return"/images/climacons/Cloud.svg";case"partly-cloudy-day":return"/images/climacons/Cloud-Sun.svg";case"partly-cloudy-night":return"/images/climacons/Cloud-Moon.svg";default:return""}};return t?(console.log(t),r.a.createElement("div",{className:"columns is-centered"},r.a.createElement("div",{className:"card column is-two-thirds"},r.a.createElement("header",{className:"card-header"},r.a.createElement("p",{className:"card-header-title is-centered",style:{fontSize:"5vw"}},"Turku, Finland")),r.a.createElement("div",{className:"card-content level is-mobile"},r.a.createElement("div",{className:"level-item"},r.a.createElement("figure",{className:"image"},r.a.createElement("img",{src:a(t.currently.icon),alt:t.currently.icon,style:{width:"15vw",transform:"scale(1.6,1.6)"},title:t.currently.summary}))),r.a.createElement("div",{className:"level-item",style:{fontSize:"10vw"}},t.currently.temperature),r.a.createElement("div",{className:"level-item",style:{fontSize:"10vw"}},"\xb0C")),r.a.createElement("footer",{className:"card-footer level"},t.daily.data.slice(1,6).map(function(e){return r.a.createElement("div",{key:e.time,className:"level-item has-text-centered"},r.a.createElement("div",null,r.a.createElement("h3",{className:"title has-text-black",style:{fontSize:"2vw",padding:"2vw"}},(t=e.time,["Sun.","Mon.","Tue.","Wed.","Thu.","Fri.","Sat."][new Date(1e3*t).getDay()])),r.a.createElement("h2",{className:"title has-text-black",style:{fontSize:"3vw"}},e.temperatureHigh,"\xa0\xb0C"),r.a.createElement("figure",{className:"image"},r.a.createElement("img",{src:a(e.icon),alt:e.icon,style:{width:"10vw"},title:e.summary}))));var t}))))):r.a.createElement("div",null,"Loading...")},m=(a(11),function(){var e=Object(n.useState)(),t=Object(l.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)(function(){var e=localStorage.getItem("weatherData");if(e){var t=JSON.parse(e);c(t)}},[]),Object(n.useEffect)(function(){fetch("/forecast/").then(function(e){return e.json()}).catch(function(){return null}).then(function(e){localStorage.setItem("weatherData",JSON.stringify(e)),c(e)})},[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{className:"hero is-info is-bold is-large"},r.a.createElement("nav",{className:"hero-header"},r.a.createElement(i,null)),r.a.createElement("main",{className:"hero-body has-text-centered"},r.a.createElement(s,{data:a})),r.a.createElement("section",{className:"hero-foot has-text-centered"},"hero footer")),r.a.createElement("footer",{className:"footer has-text-centered"},r.a.createElement("p",null,"PWA TypeScript demo app - by Simo Savonen."),"Replicates the ",r.a.createElement("a",{href:"https://codelabs.developers.google.com/codelabs/your-first-pwapp/"},"Google Codelabs example")," but uses React for the front-end, and TypeScript instead of plain JS.",r.a.createElement("p",null,r.a.createElement("a",{href:"https://darksky.net/poweredby/"},"Powered by Dark Sky API"),", weather icons designed by ",r.a.createElement("a",{href:"http://adamwhitcroft.com/climacons/"},"@adamwhitcroft"))))}),d=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function u(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}o.a.render(r.a.createElement(m,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/service-worker.js");d?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):u(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):u(t,e)})}}()},4:function(e,t,a){e.exports=a(12)}},[[4,1,2]]]);
//# sourceMappingURL=main.cbb142e2.chunk.js.map