//	HYPE.documents["FlipFlap"]

(function(){(function k(){function l(a,b,d){var c=!1;null==window[a]&&(null==window[b]?(window[b]=[],window[b].push(k),a=document.getElementsByTagName("head")[0],b=document.createElement("script"),c=h,false==!0&&(c=""),b.type="text/javascript",b.src=c+"/"+d,a.appendChild(b)):window[b].push(k),c=!0);return c}var h="FlipFlap.hyperesources",c="FlipFlap",e="flipflap_hype_container";if(false==!1)try{for(var f=document.getElementsByTagName("script"),
a=0;a<f.length;a++){var b=f[a].src,d=null!=b?b.indexOf("/flipflap_hype_generated_script.js"):-1;if(-1!=d){h=b.substr(0,d);break}}}catch(n){}if(false==!1&&(a=navigator.userAgent.match(/MSIE (\d+\.\d+)/),a=parseFloat(a&&a[1])||null,a=l("HYPE_598","HYPE_dtl_598",!0==(null!=a&&10>a||false==!0)?"HYPE-598.full.min.js":"HYPE-598.thin.min.js"),false==!0&&(a=a||l("HYPE_w_598","HYPE_wdtl_598","HYPE-598.waypoints.min.js")),a))return;f=window.HYPE.documents;
if(null!=f[c]){b=1;a=c;do c=""+a+"-"+b++;while(null!=f[c]);d=document.getElementsByTagName("div");b=!1;for(a=0;a<d.length;a++)if(d[a].id==e&&null==d[a].getAttribute("HYP_dn")){var b=1,g=e;do e=""+g+"-"+b++;while(null!=document.getElementById(e));d[a].id=e;b=!0;break}if(!1==b)return}b=[];b=[];d={};g={};for(a=0;a<b.length;a++)try{g[b[a].identifier]=b[a].name,d[b[a].name]=eval("(function(){return "+b[a].source+"})();")}catch(m){window.console&&window.console.log(m),d[b[a].name]=
function(){}}a=new HYPE_598(c,e,{"1":{p:1,n:"iniciar.png",g:"10",t:"@1x"},"-2":{n:"blank.gif"},"-1":{n:"PIE.htc"},"2":{p:1,n:"extras.png",g:"17",t:"@1x"},"0":{p:1,n:"glub-flush-paf.png",g:"8",t:"@1x"}},h,[],d,[{n:"Cover",o:"1",X:[0]}],[{o:"3",p:"600px",a:100,Y:1240,Z:800,b:100,cA:false,c:"#FFFFFF",L:[{a:[{},{p:0}],B:"Personalizado"}],bY:1,d:1240,U:{},T:{kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Control temporal principal",z:1.1,b:[],a:[{f:"c",y:0,z:1,i:"e",e:1,s:0,o:"19"},{f:"c",y:0,z:1.1,i:"cY",e:"0",s:"1",o:"21"},{f:"c",y:1,z:0.1,i:"e",e:1,s:0,o:"20"},{y:1,i:"e",s:1,z:0,o:"19",f:"c"},{y:1.1,i:"e",s:1,z:0,o:"20",f:"c"},{y:1.1,i:"cY",s:"0",z:0,o:"21",f:"c"}],f:30}},bZ:180,O:["19","20","21"],n:"Dise\u00f1o sin t\u00edtulo","_":0,v:{"20":{h:"10",p:"no-repeat",x:"visible",a:1063,q:"100% 100%",b:722,j:"absolute",bS:146,z:2,k:"div",dB:"img",d:62,c:161,r:"inline",e:0},"21":{h:"17",p:"no-repeat",x:"visible",a:49,q:"100% 100%",b:729,j:"absolute",cY:"1",z:3,k:"div",bS:146,d:48,dB:"img",c:124,r:"inline"},"19":{w:"",h:"8",p:"no-repeat",x:"visible",a:91,q:"100% 100%",b:5,j:"absolute",dB:"img",z:1,k:"div",bS:146,d:717,c:956,r:"inline",e:0}}}],{},g,{},
(function (shouldShow, mainContentContainer) {
	var loadingPageID = mainContentContainer.id + "_loading";
	var loadingDiv = document.getElementById(loadingPageID);

	if(shouldShow == true) {
		if(loadingDiv == null) {	
			loadingDiv = document.createElement("div");
			loadingDiv.id = loadingPageID;
			loadingDiv.style.cssText = "overflow:hidden;position:absolute;width:150px;top:40%;left:0;right:0;margin:auto;padding:2px;border:3px solid #BBB;background-color:#EEE;border-radius:10px;text-align:center;font-family:Helvetica,Sans-Serif;font-size:13px;font-weight:700;color:#AAA;z-index:100000;";
			loadingDiv.innerHTML = "Cargando";
			mainContentContainer.appendChild(loadingDiv);
		}
 
		loadingDiv.style.display = "block";
		loadingDiv.removeAttribute("aria-hidden");
		mainContentContainer.setAttribute("aria-busy", true);
	} else {
		loadingDiv.style.display = "none";
		loadingDiv.setAttribute("aria-hidden", true);
		mainContentContainer.removeAttribute("aria-busy");
	}
})

,false,true,-1,true,true,false,true);f[c]=a.API;document.getElementById(e).setAttribute("HYP_dn",
c);a.z_o(this.body)})();})();
