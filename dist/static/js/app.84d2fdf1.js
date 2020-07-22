(function(e){function t(t){for(var a,o,r=t[0],c=t[1],d=t[2],l=0,h=[];l<r.length;l++)o=r[l],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&h.push(i[o][0]),i[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);u&&u(t);while(h.length)h.shift()();return n.push.apply(n,d||[]),s()}function s(){for(var e,t=0;t<n.length;t++){for(var s=n[t],a=!0,o=1;o<s.length;o++){var c=s[o];0!==i[c]&&(a=!1)}a&&(n.splice(t--,1),e=r(r.s=s[0]))}return e}var a={},i={app:0},n=[];function o(e){return r.p+"static/js/"+({about:"about"}[e]||e)+"."+{about:"347e7793"}[e]+".js"}function r(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.e=function(e){var t=[],s=i[e];if(0!==s)if(s)t.push(s[2]);else{var a=new Promise((function(t,a){s=i[e]=[t,a]}));t.push(s[2]=a);var n,c=document.createElement("script");c.charset="utf-8",c.timeout=120,r.nc&&c.setAttribute("nonce",r.nc),c.src=o(e);var d=new Error;n=function(t){c.onerror=c.onload=null,clearTimeout(l);var s=i[e];if(0!==s){if(s){var a=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+n+")",d.name="ChunkLoadError",d.type=a,d.request=n,s[1](d)}i[e]=void 0}};var l=setTimeout((function(){n({type:"timeout",target:c})}),12e4);c.onerror=c.onload=n,document.head.appendChild(c)}return Promise.all(t)},r.m=e,r.c=a,r.d=function(e,t,s){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(s,a,function(t){return e[t]}.bind(null,a));return s},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="../dist/",r.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],d=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var u=d;n.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"034f":function(e,t,s){"use strict";var a=s("85ec"),i=s.n(a);i.a},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("div",{attrs:{id:"nav"}},[s("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),s("router-link",{attrs:{to:"/Calibration"}},[e._v("Calibration")]),e._v(" | "),s("router-link",{attrs:{to:"/about"}},[e._v("About")])],1),s("keep-alive",[s("router-view")],1)],1)},n=[],o=(s("034f"),s("2877")),r={},c=Object(o["a"])(r,i,n,!1,null,null,null),d=c.exports,l=(s("d3b7"),s("8c4f")),u=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"home"},[s("CalibrationOld",{attrs:{msg:"Loading"}})],1)},h=[],v=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{ref:"app",attrs:{id:"app"}},[s("div",{staticClass:"webcamOld"},[s("video",{ref:"videoSrc",staticClass:"webcamOld-video",attrs:{width:e.videoWidth,height:e.videoHeight},on:{canplay:e.onSourceReady}},[e._v("Your browser does not support this application.")]),s("canvas",{ref:"canvasOld",staticClass:"webcam-canvas",attrs:{width:e.videoWidth,height:e.videoHeight}})]),s("p",{staticClass:"msgOld"},[e._v(e._s(e.msg))])])},f=[],p=(s("b0c0"),s("3191")),g=s.n(p),m="../dist/",w=null,b={name:"app",data:function(){return{videoWidth:window.innerWidth,videoHeight:window.innerHeight,stream:null,stats:null,canvasCtx:null,faceClassifier:null,detectMat:null,videoCap:null,faceVect:null,processTimer:null,msg:""}},methods:{startCamera:function(){var e={qvga:{width:{exact:640},height:{exact:480}},vga:{width:{exact:640},height:{exact:480}},advanced:[{focusMode:"manual",focusDistance:100.33}]},t=e["qvga"];t||(t=!0);var s=this;navigator.mediaDevices?navigator.mediaDevices.getUserMedia({video:t,audio:!1}).then((function(e){s.setMsg("getUserMedia success"),s.stream=e,s.$refs.videoSrc.srcObject=e,s.$refs.videoSrc.play()})).catch((function(e){console.log("Camera Error: "+e.name+" "+e.message)})):navigator.getUserMedia?alert("Only support getUserMedia"):alert("Media device not supported")},stopCamera:function(){this.stream&&(this.setMsg("stopCamera"),this.stopVideoProcessing(),this.$refs.videoSrc.pause(),this.$refs.videoSrc.srcObject=null,this.stream.getVideoTracks()[0].stop(),this.stream=null)},onSourceReady:function(){this.setMsg("onSourceReady."),this.videoWidth=this.$refs.videoSrc.videoWidth,this.videoHeight=this.$refs.videoSrc.videoHeight,this.canvasCtx=this.$refs.canvasOld.getContext("2d"),console.log("get window size "+window.innerWidth+" : "+window.innerHeight),this.startVideoProcessing()},initStats:function(){this.stats=new g.a,this.stats.showPanel(0),this.$refs.app.appendChild(this.stats.dom)},loadOpenCv:function(){var e=this;if(window.WebAssembly){this.setMsg("loading OpenCv.js");var t=document.createElement("script");t.type="text/javascript",t.async="async",t.src="".concat(m,"libs/opencv.js"),document.body.appendChild(t),t.onload=function(){e.setMsg("OpenCV.js is loaded.")},window.Module={wasmBinaryFile:"".concat(m,"libs/opencv_js.wasm"),preRun:function(){e.setMsg("loading haarcascade_frontalface_default.xml"),window.Module.FS_createPreloadedFile("/","haarcascade_frontalface","".concat(m,"data/haarcascade_frontalface_default.xml"),!0,!1)},_main:function(){e.setMsg("OpenCV.js is ready."),w=window.cv,e.startVideoProcessing()}}}else this.setMsg("Your web browser doesn't support WebAssembly.","warn")},startVideoProcessing:function(){this.stream||this.setMsg("Please startup your webcam.","warn")},stopVideoProcessing:function(){cancelAnimationFrame(this.processTimer)},processVideo:function(){this.$refs.videoSrc?(this.stats.begin(),this.videoCap.read(this.srcMat),w.cvtColor(this.srcMat,this.detectMat,w.COLOR_RGBA2GRAY,0),w.pyrDown(this.detectMat,this.detectMat),w.pyrDown(this.detectMat,this.detectMat),this.faceClassifier.detectMultiScale(this.detectMat,this.faceVect,1.1,3,0),this.drawFace(),this.processTimer=requestAnimationFrame(this.processVideo)):this.setMsg("Video stream not found.","warn")},drawFace:function(){this.canvasCtx.clearRect(0,0,this.videoWidth,this.videoHeight);for(var e=0;e<this.faceVect.size();++e){var t=this.faceVect.get(e);t.width>0&&t.height>0&&(this.canvasCtx.lineWidth=2,this.canvasCtx.strokeStyle="red",this.canvasCtx.strokeRect(4*t.x,4*t.y,4*t.width,4*t.height))}},setMsg:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"log";this.msg=e,console[t](e)}},mounted:function(){console.log('current url : "https://readlensnumberdev.coastalvision.cn"'),this.startCamera()},beforeDestroy:function(){console.log("destroy"),this.stopCamera()}},C=b,y=(s("decb"),Object(o["a"])(C,v,f,!1,null,null,null)),M=y.exports,O={name:"Home",components:{CalibrationOld:M}},x=O,_=Object(o["a"])(x,u,h,!1,null,null,null),S=_.exports,j=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"CalibrationNew"},[s("CalibrationNew",{attrs:{msg:"Loading"}})],1)},$=[],P=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{ref:"app",attrs:{id:"app"}},[s("div",{staticClass:"webcam"},[s("video",{ref:"videoSrc",staticClass:"webcam-video",attrs:{playsinline:"true",width:e.videoWidth,height:e.videoHeight},on:{canplay:e.onSourceReady}},[e._v("Your browser does not support this application.")]),s("canvas",{ref:"canvasVideo",staticClass:"webcam-canvas",attrs:{width:e.videoWidth,height:e.videoHeight}}),s("canvas",{ref:"lenCanvas"})]),s("p",{staticClass:"msg"},[e._v(e._s(e.msg))])])},V=[],T=(s("4160"),"../dist/"),W={name:"app",data:function(){return{videoWidth:1920,videoHeight:1080,stream:null,stats:null,canvasCtx:null,msg:"",canvasTimer:null}},methods:{startCamera:function(){var e={qvga:{width:{exact:640},height:{exact:480}},vga:{width:{exact:640},height:{exact:480}},advanced:[{focusMode:"manual",focusDistance:100.33}]},t=e["qvga"];t||(t=!0);var s=this;navigator.mediaDevices?navigator.mediaDevices.getUserMedia({video:t,audio:!1}).then((function(e){s.setMsg("getUserMedia success"),s.stream=e,s.$refs.videoSrc.srcObject=e,s.$refs.videoSrc.play()})).catch((function(e){console.log("Camera Error: "+e.name+" "+e.message)})):navigator.getUserMedia?alert("Only support getUserMedia"):alert("Media device not supported")},stopCamera:function(){this.stream&&(this.setMsg("stopCamera"),this.stopVideoProcessing(),this.$refs.videoSrc.pause(),this.$refs.videoSrc.srcObject=null,this.stream.getVideoTracks()[0].stop(),this.stream=null)},onSourceReady:function(){this.setMsg("onSourceReady."),this.videoWidth=this.$refs.videoSrc.videoWidth,this.videoHeight=this.$refs.videoSrc.videoHeight,this.canvasCtx=this.$refs.canvasVideo.getContext("2d"),console.log(this.videoWidth,this.videoHeight),this.startVideoProcessing()},initStats:function(){this.stats=new g.a,this.stats.showPanel(0),this.$refs.app.appendChild(this.stats.dom)},loadOpenCv:function(){var e=this;if(window.WebAssembly)if(this.$store.state.lensCv)console.log("cached Done"),this.createTemplateMatch();else{this.setMsg("loading templateMatch.js");var t=document.createElement("script");t.type="text/javascript",t.async="async",t.src="".concat(T,"libs/templateMatch.js"),document.body.appendChild(t),t.onload=function(){e.setMsg("templateMatch.js is loaded.")},window.Module={wasmBinaryFile:"".concat(T,"libs/templateMatch.wasm")};var s=this;window.Module.onRuntimeInitialized=function(){console.log("Done"),s.$store.state.lensCv=window.Module,s.createTemplateMatch()}}else this.setMsg("Your web browser doesn't support WebAssembly.","warn")},createTemplateMatch:function(){var e=this.$store.state.lensCv.createTemplate(60,!1);this.loadTemplateMatchPattern(e,60)},loadTemplateMatchPattern:function(e,t){for(var s=this.$refs.lenCanvas,a=s.getContext("2d"),i=[],n=0;n<t*t;n++)i.push(e[n]),i.push(e[n]),i.push(e[n]),i.push(255);s.width=t,s.height=t;var o=a.createImageData(t,t);o.data.set?o.data.set(i):i.forEach((function(e,t){o.data[t]=e})),a.putImageData(o,0,0)},startVideoProcessing:function(){if(this.stream){var e=this;this.canvasTimer=setTimeout((function(){e.canvasCtx.drawImage(e.$refs.videoSrc,0,0,e.videoWidth,e.videoHeight),e.startVideoProcessing()}),30)}else this.setMsg("Please startup your webcam.","warn")},stopVideoProcessing:function(){cancelAnimationFrame(this.processTimer)},processVideo:function(){this.$refs.videoSrc?this.stats.begin():this.setMsg("Video stream not found.","warn")},setMsg:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"log";this.msg=e,console[t](e)}},mounted:function(){console.log('current url : "https://readlensnumberdev.coastalvision.cn" : '+this.$store.state.title),this.startCamera(),this.loadOpenCv()},beforeDestroy:function(){this.stopCamera(),clearInterval(this.canvasTimer)}},k=W,H=(s("f6bd"),Object(o["a"])(k,P,V,!1,null,null,null)),A=H.exports,D={name:"Calibration",components:{CalibrationNew:A}},E=D,R=Object(o["a"])(E,j,$,!1,null,null,null),F=R.exports;a["a"].use(l["a"]);var U=[{path:"/",name:"Home",component:S},{path:"/Calibration",name:"Calibration",component:F},{path:"/about",name:"About",component:function(){return s.e("about").then(s.bind(null,"36df"))}}],q=new l["a"]({base:"../dist/",routes:U}),L=q,N=s("9483");Object(N["a"])("".concat("../dist/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var I=s("2f62");a["a"].use(I["a"]);var Y=new I["a"].Store({state:{title:"Lenscopy",lensCv:null}});a["a"].config.productionTip=!1,new a["a"]({store:Y,router:L,render:function(e){return e(d)}}).$mount("#app")},"688c":function(e,t,s){},"85ec":function(e,t,s){},d280:function(e,t,s){},decb:function(e,t,s){"use strict";var a=s("d280"),i=s.n(a);i.a},f6bd:function(e,t,s){"use strict";var a=s("688c"),i=s.n(a);i.a}});
//# sourceMappingURL=app.84d2fdf1.js.map