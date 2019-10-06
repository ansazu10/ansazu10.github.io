//	HYPE.documents["drawingCanvas"]

(function(){(function m(){function k(a,b,c,d){var e=!1;null==window[a]&&(null==window[b]?(window[b]=[],window[b].push(m),a=document.getElementsByTagName("head")[0],b=document.createElement("script"),e=l,false==!0&&(e=""),b.type="text/javascript",""!=d&&(b.integrity=d,b.setAttribute("crossorigin","anonymous")),b.src=e+"/"+c,a.appendChild(b)):window[b].push(m),e=!0);return e}var l="drawingCanvas.hyperesources",f="drawingCanvas",g="drawingcanvas_hype_container";if(false==
!1)try{for(var c=document.getElementsByTagName("script"),a=0;a<c.length;a++){var d=c[a].src,b=null!=d?d.indexOf("/drawingcanvas_hype_generated_script.js"):-1;if(-1!=b){l=d.substr(0,b);break}}}catch(p){}c=navigator.userAgent.match(/MSIE (\d+\.\d+)/);c=parseFloat(c&&c[1])||null;d=!0==(null!=window.HYPE_654F||null!=window.HYPE_dtl_654F)||false==!0||null!=c&&10>c;a=!0==d?"HYPE-654.full.min.js":"HYPE-654.thin.min.js";c=!0==d?"F":"T";d=d?"":
"";if(false==!1&&(a=k("HYPE_654"+c,"HYPE_dtl_654"+c,a,d),false==!0&&(a=a||k("HYPE_w_654","HYPE_wdtl_654","HYPE-654.waypoints.min.js","")),false==!0&&(a=a||k("Matter","HYPE_pdtl_654","HYPE-654.physics.min.js","")),a))return;d=window.HYPE.documents;if(null!=d[f]){b=1;a=f;do f=""+a+"-"+b++;while(null!=d[f]);for(var e=document.getElementsByTagName("div"),
b=!1,a=0;a<e.length;a++)if(e[a].id==g&&null==e[a].getAttribute("HYP_dn")){var b=1,h=g;do g=""+h+"-"+b++;while(null!=document.getElementById(g));e[a].id=g;b=!0;break}if(!1==b)return}b=[];b=[{name:"painterSetUp",source:"function(hypeDocument, element, event) {\n mandala = document.getElementById(\"canvasSignature\");\n\ncontext = mandala.getContext(\"2d\");\nwith(context)\n{\nstrokeStyle = 'rgb(50,50,50)';\nfillStyle =  'rgb(50,50,50)';\nlineWidth = 6;\nmiterLimit = 2;\nlineCap= \"round\";\nglobalAlpha = 1;\n}\n\n \n\n}",identifier:"1161"},{name:"setColor",source:"function(hypeDocument, element, event) {$('.colorpicker').css('border-width', '0px')\t\n$(element).css({'border-width': '5px', 'border-color': 'white', 'border-style': 'solid'})\ncontext.strokeStyle = element.style.backgroundColor;\ncontext.fillStyle = element.style.backgroundColor;\n$('.strokes').css({'background-color': context.strokeStyle })\n}",identifier:"3252"},{name:"setStroke",source:"function(hypeDocument, element, event) {$('.strokes').css('border-width', '0px')\t\n$(element).css({'border-width': '5px', 'border-color': 'white', 'border-style': 'solid'})\n\t\ncontext.lineWidth = hypeDocument.getElementProperty(element, 'width')/10*6;\n}",identifier:"3253"},{name:"paintPath",source:"function(hypeDocument, element, event) {            var drawImage = {\n               \n               start: function (coors, bol) {\n                  context.beginPath();\n                  context.moveTo(coors.x, coors.y);\n               },\n               move: function (coors, bol) {\n                  if (bol) {\n                     context.lineTo(coors.x, coors.y);\n                     context.stroke();\n                  }\n               },\n               end: function (coors, bol) {\n                  if (bol) {\n                  this.move(coors);\n                  drawImage[\"end\"](coors, false);\n                  }\n               }\n            };\n            \n            draw(event);\n\n \n            function draw(event) {\n            \n            var thisCoords = element.getBoundingClientRect();\n \t\t\tvar minusTop = thisCoords.top;\n \t\t\tvar minusLeft = thisCoords.left;\n\n            var coors = {\n                  x: event['hypeGestureXPosition'] - minusLeft,\n                  y: event['hypeGestureYPosition'] - minusTop\n            };\n\n            drawImage[event.hypeGesturePhase](coors, true);\n            }\n\n\t\n}",identifier:"3278"},{name:"paintDot",source:"function(hypeDocument, element, event) {var thisCoords = element.getBoundingClientRect();\n \t\t\tvar minusTop = thisCoords.top;\n \t\t\tvar minusLeft = thisCoords.left;\n\t\t\tvar currDimension = context.lineWidth;\n\t\t\tvar currRadius = currDimension/2;\n            var pos = {\n                  x: (event.clientX - minusLeft) - context.lineWidth/2,\n                  y: (event.clientY - minusTop)  - context.lineWidth/2\n            };\n\nroundRect(context, pos.x, pos.y, currDimension, currDimension, currRadius, true, false) \n\t\n/**\n * Draws a rounded rectangle using the current state of the canvas. \n * If you omit the last three params, it will draw a rectangle \n * outline with a 5 pixel border radius \n * @param {CanvasRenderingContext2D} ctx\n * @param {Number} x The top left x coordinate\n * @param {Number} y The top left y coordinate \n * @param {Number} width The width of the rectangle \n * @param {Number} height The height of the rectangle\n * @param {Number} radius The corner radius. Defaults to 5;\n * @param {Boolean} fill Whether to fill the rectangle. Defaults to false.\n * @param {Boolean} stroke Whether to stroke the rectangle. Defaults to true.\n */\nfunction roundRect(ctx, x, y, width, height, radius, fill, stroke) {\n  if (typeof stroke == \"undefined\" ) {\n    stroke = true;\n  }\n  if (typeof radius === \"undefined\") {\n    radius = 5;\n  }\n  ctx.beginPath();\n  ctx.moveTo(x + radius, y);\n  ctx.lineTo(x + width - radius, y);\n  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);\n  ctx.lineTo(x + width, y + height - radius);\n  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);\n  ctx.lineTo(x + radius, y + height);\n  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);\n  ctx.lineTo(x, y + radius);\n  ctx.quadraticCurveTo(x, y, x + radius, y);\n  ctx.closePath();\n  if (stroke) {\n    ctx.stroke();\n  }\n  if (fill) {\n    ctx.fill();\n  }        \n}\n\t\n\t\n}",identifier:"3279"},{name:"dataUrl",source:"function(hypeDocument, element, event) {\tvar fredaImg = document.getElementById('fredaImg');\n\tcontext.drawImage(fredaImg, 27,\t15, 598,600);\n\t\n\nvar dataURL = mandala.toDataURL('image/png');\nvar name = setRandomNbr() + '.png';\nvar el = \"\\\"\" + name + \"\\\"\" ;\n\t$.ajax({\n  type: \"POST\",\n  url: \"mandala.php\",\n  data: { \n     imgBase64: dataURL,\n     fileName: name,\n     arrayElement: el\n  }\n}).done(function(o) {\n \t//hypeDocument.setElementProperty(fredaOrig, 'opacity', 0);\n\t//hypeDocument.continueTimelineNamed('showroom', hypeDocument.kDirectionForward, false)\n\thypeDocument.showNextScene(hypeDocument.kSceneTransitionCrossfade, 1.1)\n});\n\n\t\n     \n                \nfunction setRandomNbr() {\naNbr = 10000 + 9999999*(Math.random());\naNbr = Math.round(aNbr);\nreturn aNbr;\n}\n}",identifier:"3281"},{name:"gallery",source:"function(hypeDocument, element, event) {//$(\".HYPE_scene[aria-hidden='false']\").not(\".HYPE_element\").css('overflow-x', 'visible');\n//$('#' + hypeDocument.documentId()).css('overflow-x', 'visible');\n//$(\".HYPE_scene[aria-hidden='false']\").not(\".HYPE_element\").addClass( \"smooth\" );\n\n$('#galleryContainer').css({  '-webkit-overflow-scrolling': 'touch',  'overflow-x': 'scroll',  'overflow-y': 'hidden'})\n\nshowGallery();\n\t\n\t\tfunction showGallery(){\n$.ajaxSetup({\ncache: false\n});\n\t\t$.get( \"filesSaved.txt\")\n\t\t\n\t\t.done(function( data ) {\n\t\tdataString = data;\n\t\tcut = dataString.length - 2;\n\t\tdataString = dataString.slice(0,cut);\n\t\tjsonString = \"[\" +  dataString + \"]\"\n\t\tconsole.log(jsonString);\n\t\tvar tmpArray = JSON.parse(jsonString);\n\t\t//$(\".HYPE_scene[aria-hidden='false']\").not(\".HYPE_element\").css('width', tmpArray.length*728 + 'px');\n\t\ttmpArray = tmpArray.reverse();\n\t\t$('#gallery').css('width', tmpArray.length*728 + 'px')\n\t\t\n\t\tvar cLeft = 0;\n\n\t\tfor (i = 0; i < tmpArray.length; i++) {\n\t\t\n\t\tvar imgContainer = '<div class=\\\"gallery\\\" id=\\\"' + tmpArray[i] + '\\\" style=\\\"left: ' + cLeft + 'px;\\\"></div>';\n\t\tcLeft += 728;\n   \t\t $('#gallery').append(imgContainer);\n   \t\t if(i<2){document.getElementById(tmpArray[i]).style.backgroundImage = 'url(mandalas/'+ tmpArray[i] +')';document.getElementById(tmpArray[i]).style.opacity = 1;}\n\t\t}\n\t\t\n\t\t})\n\n\t\t.fail(function(e) {\n\t\tconsole.log(e)\n\t\tshowGallery();\n\t\t});\n\t\t\n\t\t}\n\n\n\n\t\n}",identifier:"3297"},{name:"flowPics",source:"function(hypeDocument, element, event) {//var thisScene = $(\".HYPE_scene[aria-hidden='false']\").not(\".HYPE_element\");\nvar thisScene = $('#galleryContainer');\n\nthisScene.scrollLeft(0);\n\ncheckForBgImagesLoad();\n\nthisScene.scroll(function(){\n\n var nowScrollLeft = $(this).scrollLeft();\n if(Math.abs(lastScrollLeft - nowScrollLeft) >= delta){\n if (nowScrollLeft > lastScrollLeft){\n //scroll down\n  console.log('scrollLeft')\n\n checkForBgImagesLoad();\n } else {\n//scroll up\n }\n lastScrollLeft = nowScrollLeft;\n }\n });\n\n\n\n\nfunction checkForBgImagesLoad()\n{\nvar viewPortWidth = (window.innerWidth ||  (window.document.documentElement.clientWidth || window.document.body.clientWidth));\n$('.gallery').each(function( index ) {\nvar currElement = hypeDocument.getElementById($(this).attr('id'));\nvar thisLeft = currElement.getBoundingClientRect().left;\nconsole.log(thisLeft)\nif(thisLeft <= viewPortWidth)\n{\nconsole.log('inView')\nif(currElement.style.backgroundImage === '')\n{\nconsole.log('bgCheckFalse')\n$(this).css('background-image', 'url(mandalas/'  + currElement.id + ')');\nconsole.log($(this).css('background-image'));\n$(this).animate({\n    opacity: 1,\n   \n  }, 500, function() {\n    // Animation complete.\n  });\n  \n  \n};\n};\n\nif(thisLeft > viewPortWidth && thisLeft < viewPortWidth +  parseInt($(this).css('width')))\n{\n//console.log('drawingCanvas.hyperesources/'  + currElement.id + '')\nvar ni = new Image(); ni.src = 'mandalas/'  + currElement.id + '';\n}\n\n});\n\n\n}\n\n\t\n}",identifier:"3298"},{name:"resetClassGalleryContainer",source:"function(hypeDocument, element, event) {$('#galleryContainer').css({'overflow', 'hidden'});\n}",identifier:"3304"}];e={};h={};for(a=0;a<b.length;a++)try{h[b[a].identifier]=b[a].name,e[b[a].name]=eval("(function(){return "+b[a].source+"})();")}catch(n){window.console&&window.console.log(n),e[b[a].name]=function(){}}c=new window["HYPE_654"+c](f,g,{"3":{n:"kievitslabot-book.eot"},"12":{n:"2A383B_B_0.eot"},"21":{n:"zva-webfont-Roman.eot"},"4":{n:"kievitslabot-book.ttf"},"30":{p:1,n:"pulpo_malvado_linea.png",g:"1015",t:"@1x"},"13":{n:"2A383B_B_0.ttf"},"5":{n:"kievitslabot-book.woff"},"22":{n:"zva-webfont-Roman.otf"},"6":{n:"kievitslabot-bookitalic.eot"},"31":{p:1,n:"pulpo_malvado_linea-1.png",g:"3305",o:true,t:"@1x"},"14":{n:"2A383B_B_0.woff"},"7":{n:"kievitslabot-bookitalic.ttf"},"23":{n:"zva-webfont-Roman.ttf"},"32":{p:1,n:"pulpo_malvado_linea-1_2x.png",g:"3305",o:true,t:"@2x"},"15":{n:"2A383B_1_0.eot"},"8":{n:"kievitslabot-bookitalic.woff"},"24":{n:"zva-webfont-Roman.woff"},"9":{n:"2A383B_3_0.eot"},"33":{p:1,n:"p1_fullbkg.jpg",g:"3307",t:"@1x"},"16":{n:"2A383B_1_0.ttf"},"25":{n:"anzeigenfont.eot"},"34":{p:1,n:"marco.jpg",g:"3308",t:"@1x"},"17":{n:"2A383B_1_0.woff"},"26":{n:"anzeigenfont.otf"},"35":{p:1,n:"marco.png",g:"3310",t:"@1x"},"18":{n:"2A383B_8_0.eot"},"27":{n:"anzeigenfont.ttf"},"36":{p:1,n:"pulpo_malvado1.png",g:"3351",o:true,t:"@1x"},"19":{n:"2A383B_8_0.ttf"},"28":{n:"anzeigenfont.woff"},"-1":{n:"PIE.htc"},"37":{p:1,n:"pulpo_malvado1_2x.png",g:"3351",o:true,t:"@2x"},"29":{n:"jquery-1.11.0.min.js"},"-2":{n:"blank.gif"},"38":{p:1,n:"reset.png",g:"3349",o:true,t:"@1x"},"39":{p:1,n:"reset_2x.png",g:"3349",o:true,t:"@2x"},"10":{n:"2A383B_3_0.ttf"},"0":{n:"kievitslabot-black.eot"},"1":{n:"kievitslabot-black.ttf"},"11":{n:"2A383B_3_0.woff"},"2":{n:"kievitslabot-black.woff"},"20":{n:"2A383B_8_0.woff"}},l,["<style>\n@font-face{ \n\tfont-family: 'kievit_slab_otblack';\n\tsrc: url('drawingCanvas.hyperesources/kievitslabot-black.eot');\n\tsrc: url('drawingCanvas.hyperesources/kievitslabot-black.eot?#iefix') format('embedded-opentype'),\n\t     url('drawingCanvas.hyperesources/kievitslabot-black.woff') format('woff'),\n\t     url('drawingCanvas.hyperesources/kievitslabot-black.ttf') format('truetype'),\n\t     url('drawingCanvas.hyperesources/kievitslabot-black.svg#webfont') format('svg');\n}\n</style>","<style>\n@font-face{ \n\tfont-family: 'kievit_slab_otbook_italic';\n\tsrc: url('drawingCanvas.hyperesources/kievitslabot-bookitalic.eot');\n\tsrc: url('drawingCanvas.hyperesources/kievitslabot-bookitalic.eot?#iefix') format('embedded-opentype'),\n\t     url('drawingCanvas.hyperesources/kievitslabot-bookitalic.woff') format('woff'),\n\t     url('drawingCanvas.hyperesources/kievitslabot-bookitalic.ttf') format('truetype'),\n\t     url('drawingCanvas.hyperesources/kievitslabot-bookitalic.svg#webfont') format('svg');\n}\n</style>","<style>\n@font-face{ \n\tfont-family: 'kievit_slab_otbook';\n\tsrc: url('drawingCanvas.hyperesources/kievitslabot-book.eot');\n\tsrc: url('drawingCanvas.hyperesources/kievitslabot-book.eot?#iefix') format('embedded-opentype'),\n\t     url('drawingCanvas.hyperesources/kievitslabot-book.woff') format('woff'),\n\t     url('drawingCanvas.hyperesources/kievitslabot-book.ttf') format('truetype'),\n\t     url('drawingCanvas.hyperesources/kievitslabot-book.svg#webfont') format('svg');\n}\n</style>","<style>\n@import url(\"//hello.myfonts.net/count/2a383b\");\n@font-face {font-family: 'GloberBold';src: url('drawingCanvas.hyperesources/2A383B_3_0.eot');src: url('drawingCanvas.hyperesources/2A383B_3_0.eot?#iefix') format('embedded-opentype'),url('drawingCanvas.hyperesources/2A383B_3_0.woff') format('woff'),url('drawingCanvas.hyperesources/2A383B_3_0.ttf') format('truetype');}\n</style>","<style>\n@import url(\"//hello.myfonts.net/count/2a383b\");\n@font-face {font-family: 'GloberRegular';src: url('drawingCanvas.hyperesources/2A383B_B_0.eot');src: url('drawingCanvas.hyperesources/2A383B_B_0.eot?#iefix') format('embedded-opentype'),url('drawingCanvas.hyperesources/2A383B_B_0.woff') format('woff'),url('drawingCanvas.hyperesources/2A383B_B_0.ttf') format('truetype');}\n </style>","<style>\n@import url(\"//hello.myfonts.net/count/2a383b\");\n@font-face {font-family: 'GloberBook';src: url('drawingCanvas.hyperesources/2A383B_1_0.eot');src: url('drawingCanvas.hyperesources/2A383B_1_0.eot?#iefix') format('embedded-opentype'),url('drawingCanvas.hyperesources/2A383B_1_0.woff') format('woff'),url('drawingCanvas.hyperesources/2A383B_1_0.ttf') format('truetype');}\n </style>","  <style>\n@import url(\"//hello.myfonts.net/count/2a383b\");\n@font-face {font-family: 'GloberLight';src: url('drawingCanvas.hyperesources/2A383B_8_0.eot');src: url('drawingCanvas.hyperesources/2A383B_8_0.eot?#iefix') format('embedded-opentype'),url('drawingCanvas.hyperesources/2A383B_8_0.woff') format('woff'),url('drawingCanvas.hyperesources/2A383B_8_0.ttf') format('truetype');}\n </style>","\t\t<style type='text/css'>\n\n@font-face {\n\tfont-family: 'zva-webfont-Roman';\n\tsrc: url('drawingCanvas.hyperesources/zva-webfont-Roman.eot?') format('eot'), \n\t     url('drawingCanvas.hyperesources/zva-webfont-Roman.otf')  format('opentype'),\n\t     url('drawingCanvas.hyperesources/zva-webfont-Roman.woff') format('woff'), \n\t     url('drawingCanvas.hyperesources/zva-webfont-Roman.ttf')  format('truetype'),\n\t     url('drawingCanvas.hyperesources/zva-webfont-Roman.svg#zva-webfont-Roman') format('svg');\n}\n\n</style>","<style>\n@font-face {\n  font-family: 'anzeigenfont';\n  src: url('drawingCanvas.hyperesources/anzeigenfont.eot?93676806');\n  src: url('drawingCanvas.hyperesources/anzeigenfont.eot?93676806#iefix') format('embedded-opentype'),\n       url('drawingCanvas.hyperesources/anzeigenfont.woff?93676806') format('woff'),\n       url('drawingCanvas.hyperesources/anzeigenfont.ttf?93676806') format('truetype'),\n       url('drawingCanvas.hyperesources/anzeigenfont.svg?93676806#anzeigenfont') format('svg');\n  font-weight: normal;\n  font-style: normal;\n}\n</style>"],e,[{n:"Start",o:"853",X:[0]}],
[{o:"860",A:{a:[{p:4,h:"1161"}]},p:"600px",a:100,Y:1240,Z:800,b:100,cA:false,c:"#FFF",L:[],bY:1,d:1240,U:{},T:{"3212_pressed":{q:false,z:1,i:"3212_pressed",n:"3212_pressed",a:[{f:"c",y:0,z:1,i:"e",e:0.3,s:1,o:"3366"},{f:"c",y:0,z:1,i:"S",e:0,s:0,o:"3366"},{f:"c",y:0,z:1,i:"T",e:0,s:0,o:"3366"},{f:"c",y:0,z:1,i:"Q",e:10,s:0,o:"3366"},{f:"c",y:0,z:1,i:"R",e:"#000",s:"#000",o:"3366"},{y:1,i:"e",s:0.3,z:0,o:"3366",f:"c"},{y:1,i:"S",s:0,z:0,o:"3366",f:"c"},{y:1,i:"T",s:0,z:0,o:"3366",f:"c"},{y:1,i:"Q",s:10,z:0,o:"3366",f:"c"},{y:1,i:"R",s:"#000",z:0,o:"3366",f:"c"}],f:30,b:[]},"3224_pressed":{q:false,z:1,i:"3224_pressed",n:"3224_pressed",a:[{f:"c",y:0,z:1,i:"e",e:0.3,s:1,o:"3368"},{f:"c",y:0,z:1,i:"S",e:0,s:0,o:"3368"},{f:"c",y:0,z:1,i:"T",e:0,s:0,o:"3368"},{f:"c",y:0,z:1,i:"Q",e:10,s:0,o:"3368"},{f:"c",y:0,z:1,i:"R",e:"#000",s:"#000",o:"3368"},{y:1,i:"e",s:0.3,z:0,o:"3368",f:"c"},{y:1,i:"S",s:0,z:0,o:"3368",f:"c"},{y:1,i:"T",s:0,z:0,o:"3368",f:"c"},{y:1,i:"Q",s:10,z:0,o:"3368",f:"c"},{y:1,i:"R",s:"#000",z:0,o:"3368",f:"c"}],f:30,b:[]},"3241_pressed":{q:false,z:1,i:"3241_pressed",n:"3241_pressed",a:[{f:"c",y:0,z:1,i:"e",e:0.3,s:1,o:"3359"},{f:"c",y:0,z:1,i:"Q",e:10,s:0,o:"3359"},{f:"c",y:0,z:1,i:"e",e:0.3,s:1,o:"3360"},{f:"c",y:0,z:1,i:"Q",e:10,s:0,o:"3360"},{y:1,i:"e",s:0.3,z:0,o:"3359",f:"c"},{y:1,i:"Q",s:10,z:0,o:"3359",f:"c"},{y:1,i:"e",s:0.3,z:0,o:"3360",f:"c"},{y:1,i:"Q",s:10,z:0,o:"3360",f:"c"}],f:30,b:[]},"3216_pressed":{q:false,z:1,i:"3216_pressed",n:"3216_pressed",a:[{f:"c",y:0,z:1,i:"e",e:0.3,s:1,o:"3381"},{f:"c",y:0,z:1,i:"S",e:0,s:0,o:"3381"},{f:"c",y:0,z:1,i:"T",e:0,s:0,o:"3381"},{f:"c",y:0,z:1,i:"Q",e:10,s:0,o:"3381"},{f:"c",y:0,z:1,i:"R",e:"#000",s:"#000",o:"3381"},{y:1,i:"e",s:0.3,z:0,o:"3381",f:"c"},{y:1,i:"S",s:0,z:0,o:"3381",f:"c"},{y:1,i:"T",s:0,z:0,o:"3381",f:"c"},{y:1,i:"Q",s:10,z:0,o:"3381",f:"c"},{y:1,i:"R",s:"#000",z:0,o:"3381",f:"c"}],f:30,b:[]},"3228_pressed":{q:false,z:1,i:"3228_pressed",n:"3228_pressed",a:[{f:"c",y:0,z:1,i:"e",e:0.3,s:1,o:"3370"},{f:"c",y:0,z:1,i:"S",e:0,s:0,o:"3370"},{f:"c",y:0,z:1,i:"T",e:0,s:0,o:"3370"},{f:"c",y:0,z:1,i:"Q",e:10,s:0,o:"3370"},{f:"c",y:0,z:1,i:"R",e:"#000",s:"#000",o:"3370"},{y:1,i:"e",s:0.3,z:0,o:"3370",f:"c"},{y:1,i:"S",s:0,z:0,o:"3370",f:"c"},{y:1,i:"T",s:0,z:0,o:"3370",f:"c"},{y:1,i:"Q",s:10,z:0,o:"3370",f:"c"},{y:1,i:"R",s:"#000",z:0,o:"3370",f:"c"}],f:30,b:[]},"3208_pressed":{q:false,z:1,i:"3208_pressed",n:"3208_pressed",a:[{f:"c",y:0,z:1,i:"e",e:0.3,s:1,o:"3364"},{f:"c",y:0,z:1,i:"S",e:0,s:0,o:"3364"},{f:"c",y:0,z:1,i:"T",e:0,s:0,o:"3364"},{f:"c",y:0,z:1,i:"Q",e:10,s:0,o:"3364"},{f:"c",y:0,z:1,i:"R",e:"#000",s:"#000",o:"3364"},{y:1,i:"e",s:0.3,z:0,o:"3364",f:"c"},{y:1,i:"S",s:0,z:0,o:"3364",f:"c"},{y:1,i:"T",s:0,z:0,o:"3364",f:"c"},{y:1,i:"Q",s:10,z:0,o:"3364",f:"c"},{y:1,i:"R",s:"#000",z:0,o:"3364",f:"c"}],f:30,b:[]},"3267_pressed":{q:false,z:1,i:"3267_pressed",n:"3267_pressed",a:[{f:"c",y:0,z:1,i:"e",e:0.3,s:1,o:"3374"},{f:"c",y:0,z:1,i:"S",e:0,s:0,o:"3374"},{f:"c",y:0,z:1,i:"T",e:0,s:0,o:"3374"},{f:"c",y:0,z:1,i:"Q",e:10,s:0,o:"3374"},{f:"c",y:0,z:1,i:"R",e:"#000",s:"#000",o:"3374"},{y:1,i:"e",s:0.3,z:0,o:"3374",f:"c"},{y:1,i:"S",s:0,z:0,o:"3374",f:"c"},{y:1,i:"T",s:0,z:0,o:"3374",f:"c"},{y:1,i:"Q",s:10,z:0,o:"3374",f:"c"},{y:1,i:"R",s:"#000",z:0,o:"3374",f:"c"}],f:30,b:[]},"3353":{q:false,z:0,i:"3353",n:"reset",a:[],f:30,b:[]},"3244_pressed":{q:false,z:1,i:"3244_pressed",n:"3244_pressed",a:[{f:"c",y:0,z:1,i:"e",e:0.3,s:1,o:"3385"},{f:"c",y:0,z:1,i:"S",e:0,s:0,o:"3385"},{f:"c",y:0,z:1,i:"T",e:0,s:0,o:"3385"},{f:"c",y:0,z:1,i:"Q",e:10,s:0,o:"3385"},{f:"c",y:0,z:1,i:"R",e:"#000",s:"#000",o:"3385"},{y:1,i:"e",s:0.3,z:0,o:"3385",f:"c"},{y:1,i:"S",s:0,z:0,o:"3385",f:"c"},{y:1,i:"T",s:0,z:0,o:"3385",f:"c"},{y:1,i:"Q",s:10,z:0,o:"3385",f:"c"},{y:1,i:"R",s:"#000",z:0,o:"3385",f:"c"}],f:30,b:[]},"3240_pressed":{q:false,z:1,i:"3240_pressed",n:"3240_pressed",a:[{f:"c",y:0,z:1,i:"e",e:0.3,s:1,o:"3358"},{f:"c",y:0,z:1,i:"Q",e:10,s:0,o:"3358"},{y:1,i:"e",s:0.3,z:0,o:"3358",f:"c"},{y:1,i:"Q",s:10,z:0,o:"3358",f:"c"}],f:30,b:[]},"3238_pressed":{q:false,z:1,i:"3238_pressed",n:"3238_pressed",a:[{f:"c",y:0,z:1,i:"e",e:0.3,s:1,o:"3356"},{f:"c",y:0,z:1,i:"Q",e:10,s:0,o:"3356"},{y:1,i:"e",s:0.3,z:0,o:"3356",f:"c"},{y:1,i:"Q",s:10,z:0,o:"3356",f:"c"}],f:30,b:[]},kTimelineDefaultIdentifier:{q:false,z:1.02,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{f:"c",y:0,z:1.02,i:"e",e:0,s:1,o:"3379"},{f:"c",y:0,z:1.02,i:"cY",e:"1",s:"0",o:"3379"},{y:1.02,i:"e",s:0,z:0,o:"3379",f:"c"},{y:1.02,i:"cY",s:"1",z:0,o:"3379",f:"c"}],f:30,b:[]},"3220_pressed":{q:false,z:1,i:"3220_pressed",n:"3220_pressed",a:[{f:"c",y:0,z:1,i:"e",e:0.3,s:1,o:"3383"},{f:"c",y:0,z:1,i:"S",e:0,s:0,o:"3383"},{f:"c",y:0,z:1,i:"T",e:0,s:0,o:"3383"},{f:"c",y:0,z:1,i:"Q",e:10,s:0,o:"3383"},{f:"c",y:0,z:1,i:"R",e:"#000",s:"#000",o:"3383"},{y:1,i:"e",s:0.3,z:0,o:"3383",f:"c"},{y:1,i:"S",s:0,z:0,o:"3383",f:"c"},{y:1,i:"T",s:0,z:0,o:"3383",f:"c"},{y:1,i:"Q",s:10,z:0,o:"3383",f:"c"},{y:1,i:"R",s:"#000",z:0,o:"3383",f:"c"}],f:30,b:[]},"3232_pressed":{q:false,z:1,i:"3232_pressed",n:"3232_pressed",a:[{f:"c",y:0,z:1,i:"e",e:0.3,s:1,o:"3372"},{f:"c",y:0,z:1,i:"S",e:0,s:0,o:"3372"},{f:"c",y:0,z:1,i:"T",e:0,s:0,o:"3372"},{f:"c",y:0,z:1,i:"Q",e:10,s:0,o:"3372"},{f:"c",y:0,z:1,i:"R",e:"#000",s:"#000",o:"3372"},{y:1,i:"e",s:0.3,z:0,o:"3372",f:"c"},{y:1,i:"S",s:0,z:0,o:"3372",f:"c"},{y:1,i:"T",s:0,z:0,o:"3372",f:"c"},{y:1,i:"Q",s:10,z:0,o:"3372",f:"c"},{y:1,i:"R",s:"#000",z:0,o:"3372",f:"c"}],f:30,b:[]},"3285_pressed":{q:false,z:1,i:"3285_pressed",n:"3285_pressed",a:[{f:"c",y:0,z:1,i:"e",e:0.3,s:1,o:"3360"},{f:"c",y:0,z:1,i:"Q",e:10,s:0,o:"3360"},{y:1,i:"e",s:0.3,z:0,o:"3360",f:"c"},{y:1,i:"Q",s:10,z:0,o:"3360",f:"c"}],f:30,b:[]},"3239_pressed":{q:false,z:1,i:"3239_pressed",n:"3239_pressed",a:[{f:"c",y:0,z:1,i:"e",e:0.3,s:1,o:"3357"},{f:"c",y:0,z:1,i:"Q",e:10,s:0,o:"3357"},{y:1,i:"e",s:0.3,z:0,o:"3357",f:"c"},{y:1,i:"Q",s:10,z:0,o:"3357",f:"c"}],f:30,b:[]}},bZ:180,O:["3362","3379","3377","3376","3354","3375","3378","3355","3356","3361","3357","3374","3373","3358","3359","3385","3384","3360","3371","3372","3370","3369","3368","3367","3383","3382","3381","3380","3366","3365","3364","3363"],n:"Untitled Layout","_":0,v:{"3376":{aI:0,c:1032,d:730,r:"inline",I:"None",J:"None",K:"None",g:"rgba(255, 255, 255, 0.000)",L:"None",aP:"pointer",M:0,bN:{a:[{p:4,h:"3278"}]},w:"<canvas id=\"canvasSignature\" width=\"1097px\" height=\"745px\" style=\"border:0px solid rgb(255,255,255);\"></canvas>",bF:"3375",j:"absolute",x:"visible",N:0,B:"#D8DDE4",P:0,aB:{a:[{p:4,h:"3279"}]},C:"#D8DDE4",O:0,A:"#D8DDE4",D:"#D8DDE4",aK:0,z:4,aJ:0,aA:{a:[{p:4,h:"3279"}]},a:-2,aL:0,k:"div",b:-30},"3365":{x:"visible",k:"div",c:50,d:51,z:7,a:16,j:"absolute",bF:"3362",b:1001},"3354":{bD:"none",x:"hidden",k:"div",c:1240,d:795,z:3,i:"wrapper",a:0,bS:109,j:"absolute",b:5},"3380":{x:"visible",k:"div",c:50,d:50,z:12,a:16,j:"absolute",bF:"3362",b:936},"3359":{b:154,z:7,K:"None",c:15,cP:"strokes",d:15,L:"None",M:0,e:1,bD:"none",N:0,O:0,g:"#323232",P:0,bF:"3355",Q:0,R:"#000",j:"absolute",S:0,k:"div",aI:"50%",T:0,aJ:"50%",aK:"50%",aL:"50%",A:"#D8DDE4",B:"#D8DDE4",C:"#D8DDE4",aN:"3319_pressed",D:"#D8DDE4",aA:{a:[{p:4,h:"3253"}]},aP:"pointer",x:"visible",I:"None",a:29,J:"None"},"3385":{b:1,z:3,K:"None",c:50,cP:"colorpicker",d:50,L:"None",M:0,e:1,bD:"none",N:0,dB:"button",O:0,g:"#9CC014",P:0,bF:"3384",Q:0,R:"#000",j:"absolute",S:0,k:"div",aI:15,T:0,aJ:15,aK:15,aL:15,A:"#D8DDE4",B:"#D8DDE4",C:"#D8DDE4",aN:"3341_pressed",D:"#D8DDE4",aA:{a:[{p:4,h:"3252"}]},aP:"pointer",x:"visible",I:"None",a:1,J:"None"},"3374":{b:0,z:2,K:"None",c:50,cP:"colorpicker",d:50,L:"None",M:0,e:1,bD:"none",N:0,O:0,g:"#000",P:0,bF:"3373",Q:0,R:"#000",j:"absolute",S:0,k:"div",aI:15,T:0,aJ:15,aK:15,aL:15,A:"#D8DDE4",B:"#D8DDE4",C:"#D8DDE4",aN:"3329_pressed",D:"#D8DDE4",aA:{a:[{p:4,h:"3252"}]},aP:"pointer",x:"visible",I:"None",a:-1,J:"None"},"3363":{x:"visible",k:"div",c:51,d:51,z:2,a:16,j:"absolute",bF:"3362",b:1070},"3379":{h:"3351",p:"no-repeat",x:"visible",a:-57,q:"100% 100%",b:-45,j:"absolute",bF:"3375",r:"inline",cY:"0",z:8,d:800,dB:"img",cQ:0.9,e:1,k:"div",c:1148,cR:0.9},"3368":{b:0,z:3,K:"None",c:50,cP:"colorpicker",d:50,L:"None",M:0,e:1,bD:"none",N:0,O:0,g:"#BF40FF",P:0,bF:"3367",Q:0,R:"#000",j:"absolute",S:0,k:"div",aI:15,T:0,aJ:15,aK:15,aL:15,A:"#D8DDE4",B:"#D8DDE4",C:"#D8DDE4",aN:"3335_pressed",D:"#D8DDE4",aA:{a:[{p:4,h:"3252"}]},aP:"pointer",x:"visible",I:"None",a:0,J:"None"},"3357":{b:70,z:5,K:"None",c:35,cP:"strokes",d:35,L:"None",M:0,e:1,bD:"none",N:0,O:0,g:"#323232",P:0,bF:"3355",Q:0,R:"#000",j:"absolute",S:0,k:"div",aI:"50%",T:0,aJ:"50%",aK:"50%",aL:"50%",A:"#D8DDE4",B:"#D8DDE4",C:"#D8DDE4",aN:"3317_pressed",D:"#D8DDE4",aA:{a:[{p:4,h:"3253"}]},aP:"pointer",x:"visible",I:"None",a:19,J:"None"},"3383":{b:0,z:3,K:"None",c:50,cP:"colorpicker",d:50,L:"None",M:0,e:1,bD:"none",N:0,O:0,g:"#FF40CC",P:0,bF:"3382",Q:0,R:"#000",j:"absolute",S:0,k:"div",aI:15,T:0,aJ:15,aK:15,aL:15,A:"#D8DDE4",B:"#D8DDE4",C:"#D8DDE4",aN:"3337_pressed",D:"#D8DDE4",aA:{a:[{p:4,h:"3252"}]},aP:"pointer",x:"visible",I:"None",a:0,J:"None"},"3372":{b:1,z:3,K:"None",c:50,cP:"colorpicker",d:50,L:"None",M:0,e:1,bD:"none",N:0,dB:"button",O:0,g:"#07DCF3",P:0,bF:"3371",Q:0,R:"#000",j:"absolute",S:0,k:"div",aI:15,T:0,aJ:15,aK:15,aL:15,A:"#D8DDE4",B:"#D8DDE4",C:"#D8DDE4",aN:"3331_pressed",D:"#D8DDE4",aA:{a:[{p:4,h:"3252"}]},aP:"pointer",x:"visible",I:"None",a:0,J:"None"},"3361":{x:"visible",a:1158,b:78,j:"absolute",bF:"3354",c:59,k:"div",z:13,d:509,cQ:1.2,f:0,cR:1.2},"3377":{p:"no-repeat",c:1148,q:"100% 100%",d:800,r:"inline",cQ:0.9,bD:"none",cR:0.9,aP:"auto",h:"3305",i:"fredaOrig",w:"",bF:"3375",j:"absolute",x:"visible",aI:200,k:"div",aJ:200,z:7,aK:200,cN:"none",a:-57,aL:200,b:-45},"3366":{b:1,z:3,K:"None",c:50,cP:"colorpicker",d:50,L:"None",M:0,e:1,bD:"none",N:0,O:0,g:"#FF9F40",P:0,bF:"3365",Q:0,R:"#000",j:"absolute",S:0,k:"div",aI:15,T:0,aJ:15,aK:15,aL:15,A:"#D8DDE4",B:"#D8DDE4",C:"#D8DDE4",aN:"3343_pressed",D:"#D8DDE4",aA:{a:[{p:4,h:"3252"}]},aP:"pointer",x:"visible",I:"None",a:0,J:"None"},"3355":{x:"visible",a:1077,aI:20,b:27,j:"absolute",aJ:20,z:12,k:"div",bF:"3354",d:207,aK:20,c:71,aL:20,g:"#E8EBED"},"3381":{b:0,z:3,K:"None",c:50,cP:"colorpicker",d:50,L:"None",M:0,e:1,bD:"none",N:0,O:0,g:"#FF4040",P:0,bF:"3380",Q:0,R:"#000",j:"absolute",S:0,k:"div",aI:15,T:0,aJ:15,aK:15,aL:15,A:"#D8DDE4",B:"#D8DDE4",C:"#D8DDE4",aN:"3339_pressed",D:"#D8DDE4",aA:{a:[{p:4,h:"3252"}]},aP:"pointer",x:"visible",I:"None",a:0,J:"None"},"3370":{b:2,z:3,K:"None",c:50,cP:"colorpicker",d:50,L:"None",M:0,e:1,bD:"none",N:0,O:0,g:"#4050FF",P:0,bF:"3369",Q:0,R:"#000",j:"absolute",S:0,k:"div",aI:15,T:0,aJ:15,aK:15,aL:15,A:"#D8DDE4",B:"#D8DDE4",C:"#D8DDE4",aN:"3333_pressed",D:"#D8DDE4",aA:{a:[{p:4,h:"3252"}]},aP:"pointer",x:"visible",I:"None",a:0,J:"None"},"3375":{x:"visible",k:"div",c:1030,d:700,z:11,i:"artwork",r:"inline",a:47,j:"absolute",bF:"3354",b:27},"3364":{b:1,z:3,K:"None",c:50,cP:"colorpicker",d:50,L:"None",M:0,e:1,bD:"none",N:0,O:0,g:"#FFFF40",P:0,bF:"3363",Q:0,R:"#000",j:"absolute",S:0,k:"div",aI:15,T:0,aJ:15,aK:15,aL:15,A:"#D8DDE4",B:"#D8DDE4",C:"#D8DDE4",aN:"3325_pressed",D:"#D8DDE4",aA:{a:[{p:4,h:"3252"}]},aP:"pointer",x:"visible",I:"None",a:0,J:"None"},"3369":{x:"visible",k:"div",c:50,d:53,z:27,a:16,j:"absolute",bF:"3362",b:736},"3358":{b:117,z:6,K:"None",c:25,cP:"strokes",d:25,L:"None",M:0,e:1,bD:"none",N:0,O:0,g:"#323232",P:0,bF:"3355",Q:0,R:"#000",j:"absolute",S:0,k:"div",aI:"50%",T:0,aJ:"50%",aK:"50%",aL:"50%",A:"#D8DDE4",B:"#D8DDE4",C:"#D8DDE4",aN:"3318_pressed",D:"#D8DDE4",aA:{a:[{p:4,h:"3253"}]},aP:"pointer",x:"visible",I:"None",a:24,J:"None"},"3384":{x:"visible",k:"div",c:50,d:52,z:42,a:16,j:"absolute",bF:"3362",b:602},"3373":{x:"visible",k:"div",c:49,d:50,z:43,a:17,j:"absolute",bF:"3362",b:537},"3362":{x:"visible",cQ:0.85,k:"div",cR:0.85,c:261,d:602,z:1,a:-25,bF:"3361",j:"absolute",b:-498},"3378":{p:"no-repeat",c:499,q:"100% 100%",d:499,r:"inline",cQ:0.13,cR:0.13,aP:"pointer",h:"3349",bF:"3354",j:"absolute",x:"visible",aA:{a:[{d:1.1,p:1,g:1,f:3}]},k:"div",aB:{a:[{p:0}]},dB:"img",z:14,bH:0,bI:1,a:863,b:27},"3367":{x:"visible",k:"div",c:50,d:51,z:22,a:16,j:"absolute",bF:"3362",b:804},"3356":{b:8,z:3,K:"None",c:50,cP:"strokes",d:50,L:"None",M:0,e:1,bD:"none",N:0,O:0,g:"#323232",P:0,bF:"3355",Q:0,R:"#000",j:"absolute",S:0,k:"div",aI:"50%",T:0,aJ:"50%",aK:"50%",aL:"50%",A:"#D8DDE4",B:"#D8DDE4",C:"#D8DDE4",aN:"3316_pressed",D:"#D8DDE4",aA:{a:[{p:4,h:"3253"}]},aP:"pointer",x:"visible",I:"None",a:11,J:"None"},"3382":{x:"visible",k:"div",c:50,d:51,z:17,a:16,j:"absolute",bF:"3362",b:870},"3371":{x:"visible",k:"div",c:50,d:52,z:32,a:16,j:"absolute",bF:"3362",b:669},"3360":{b:182,z:8,K:"None",c:10,cP:"strokes",d:10,L:"None",M:0,e:1,bD:"none",N:0,O:0,g:"#323232",P:0,bF:"3355",Q:0,R:"#000",j:"absolute",S:0,k:"div",aI:"50%",T:0,aJ:"50%",aK:"50%",aL:"50%",A:"#D8DDE4",B:"#D8DDE4",C:"#D8DDE4",aN:"3320_pressed",D:"#D8DDE4",aA:{a:[{p:4,h:"3253"}]},aP:"pointer",x:"visible",I:"None",a:31,J:"None"}}}],{},h,{},null,false,false,-1,true,false,false,true,true);d[f]=c.API;document.getElementById(g).setAttribute("HYP_dn",f);c.z_o(this.body)})();})();
