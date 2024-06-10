// Garden Gnome Software - Skin
// Pano2VR 6.1.13/18080
// Filename: 1simpleggex_v6.ggsk
// Generated 2024-06-10T18:09:59

function pano2vrSkin(player,base) {
	player.addVariable('opt_zoom', 2, true);
	player.addVariable('opt_autorotate', 2, true);
	player.addVariable('opt_gyro', 2, true);
	player.addVariable('opt_fullscreen', 2, true);
	player.addVariable('opt_loader', 2, true);
	player.addVariable('opt_loader_mulires', 2, true);
	player.addVariable('vis_info_popup', 2, false);
	player.addVariable('vis_timer', 2, true);
	player.addVariable('maps', 2, false);
	player.addVariable('POLIGON', 2, false);
	player.addVariable('vis_info_popup_1', 2, false);
	player.addVariable('poly_target', 0, "");
	player.addVariable('poly_target2', 0, "");
	player.addVariable('stertscreen_pc', 2, true);
	player.addVariable('startscreen_ios', 2, true);
	var me=this;
	var skin=this;
	var flag=false;
	var skinKeyPressed = 0;
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=[];
	this.elementMouseOver=[];
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	if (typeof document.body.style['transform'] == 'undefined') {
		for(var i=0;i<prefixes.length;i++) {
			if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
				cssPrefix='-' + prefixes[i].toLowerCase() + '-';
				domTransition=prefixes[i] + 'Transition';
				domTransform=prefixes[i] + 'Transform';
			}
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	this.callNodeChange=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggNodeChange) {
				e.ggNodeChange();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; me.callNodeChange(me.divSkin); });
	
	var parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me._rectangle_1=document.createElement('div');
		el.ggId="Rectangle 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #000000;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 427px;';
		hs+='left : -4px;';
		hs+='position : absolute;';
		hs+='top : -8px;';
		hs+='visibility : hidden;';
		hs+='width : 543px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._rectangle_1.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._rectangle_1);
		el=me._auto_rotate=document.createElement('div');
		el.ggId="Auto Rotate";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._auto_rotate.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._auto_rotate.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getOS() == 5)) || 
				((player.getOS() == 4))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._auto_rotate.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._auto_rotate.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._auto_rotate.style[domTransition]='';
				if (me._auto_rotate.ggCurrentLogicStateVisible == 0) {
					me._auto_rotate.style.visibility="hidden";
					me._auto_rotate.ggVisible=false;
				}
				else {
					me._auto_rotate.style.visibility=(Number(me._auto_rotate.style.opacity)>0||!me._auto_rotate.style.opacity)?'inherit':'hidden';
					me._auto_rotate.ggVisible=true;
				}
			}
		}
		me._auto_rotate.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._dreapta=document.createElement('div');
		el.ggId="dreapta";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 85%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 120px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._dreapta.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dreapta.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_74=document.createElement('div');
		el.ggId="Rectangle 7";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_74.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_74.onmouseover=function (e) {
			me.elementMouseOver['rectangle_74']=true;
		}
		me._rectangle_74.onmouseout=function (e) {
			me.elementMouseOver['rectangle_74']=false;
		}
		me._rectangle_74.ontouchend=function (e) {
			me.elementMouseOver['rectangle_74']=false;
		}
		me._rectangle_74.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._dreapta.appendChild(me._rectangle_74);
		el=me._rectangle_73=document.createElement('div');
		el.ggId="Rectangle 7";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 20px;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_73.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_73.onmouseover=function (e) {
			me.elementMouseOver['rectangle_73']=true;
		}
		me._rectangle_73.onmouseout=function (e) {
			me.elementMouseOver['rectangle_73']=false;
		}
		me._rectangle_73.ontouchend=function (e) {
			me.elementMouseOver['rectangle_73']=false;
		}
		me._rectangle_73.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._dreapta.appendChild(me._rectangle_73);
		el=me._rectangle_72=document.createElement('div');
		el.ggId="Rectangle 7";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 60px;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_72.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_72.onmouseover=function (e) {
			me.elementMouseOver['rectangle_72']=true;
		}
		me._rectangle_72.onmouseout=function (e) {
			me.elementMouseOver['rectangle_72']=false;
		}
		me._rectangle_72.ontouchend=function (e) {
			me.elementMouseOver['rectangle_72']=false;
		}
		me._rectangle_72.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._dreapta.appendChild(me._rectangle_72);
		me._auto_rotate.appendChild(me._dreapta);
		el=me._stanga=document.createElement('div');
		el.ggId="stanga";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 85%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 120px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._stanga.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._stanga.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_71=document.createElement('div');
		el.ggId="Rectangle 7";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 60px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_71.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_71.onmouseover=function (e) {
			me.elementMouseOver['rectangle_71']=true;
		}
		me._rectangle_71.onmouseout=function (e) {
			me.elementMouseOver['rectangle_71']=false;
		}
		me._rectangle_71.ontouchend=function (e) {
			me.elementMouseOver['rectangle_71']=false;
		}
		me._rectangle_71.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._stanga.appendChild(me._rectangle_71);
		el=me._rectangle_70=document.createElement('div');
		el.ggId="Rectangle 7";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_70.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_70.onmouseover=function (e) {
			me.elementMouseOver['rectangle_70']=true;
		}
		me._rectangle_70.onmouseout=function (e) {
			me.elementMouseOver['rectangle_70']=false;
		}
		me._rectangle_70.ontouchend=function (e) {
			me.elementMouseOver['rectangle_70']=false;
		}
		me._rectangle_70.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._stanga.appendChild(me._rectangle_70);
		el=me._rectangle_7=document.createElement('div');
		el.ggId="Rectangle 7";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_7.onmouseover=function (e) {
			me.elementMouseOver['rectangle_7']=true;
		}
		me._rectangle_7.onmouseout=function (e) {
			me.elementMouseOver['rectangle_7']=false;
		}
		me._rectangle_7.ontouchend=function (e) {
			me.elementMouseOver['rectangle_7']=false;
		}
		me._rectangle_7.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._stanga.appendChild(me._rectangle_7);
		me._auto_rotate.appendChild(me._stanga);
		me.divSkin.appendChild(me._auto_rotate);
		el=me._controller=document.createElement('div');
		el.ggId="Controller";
		el.ggDx=-5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 5px;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._controller.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._controller.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('stertscreen_pc') == true)) || 
				((player.getVariableValue('startscreen_ios') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._controller.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._controller.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._controller.style[domTransition]='left 0s, bottom 0s, opacity 500ms ease 0ms';
				if (me._controller.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._controller.style.bottom='-100px';
					me._controller.ggUpdatePosition(true);
				}
				else {
					me._controller.ggDx=-5;
					me._controller.style.bottom='5px';
					me._controller.ggUpdatePosition(true);
				}
			}
		}
		me._controller.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_timer') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._controller.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._controller.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._controller.style[domTransition]='left 0s, bottom 0s, opacity 500ms ease 0ms';
				if (me._controller.ggCurrentLogicStateAlpha == 0) {
					me._controller.style.visibility=me._controller.ggVisible?'inherit':'hidden';
					me._controller.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._controller.style.opacity == 0.0) { me._controller.style.visibility="hidden"; } }, 505);
					me._controller.style.opacity=0;
				}
			}
		}
		me._controller.onmouseover=function (e) {
			me.elementMouseOver['controller']=true;
		}
		me._controller.onmouseout=function (e) {
			me.elementMouseOver['controller']=false;
		}
		me._controller.ontouchend=function (e) {
			me.elementMouseOver['controller']=false;
		}
		me._controller.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._controller_slider=document.createElement('div');
		el.ggId="controller_slider";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='right : 128px;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._controller_slider.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._controller_slider.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getOS() == 1))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._controller_slider.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._controller_slider.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._controller_slider.style[domTransition]='right 0s, top 0s, ' + cssPrefix + 'transform 0s, opacity 500ms ease 0ms';
				if (me._controller_slider.ggCurrentLogicStatePosition == 0) {
					me._controller_slider.style.right='201px';
					this.ggDy = -7;
					me._controller_slider.ggUpdatePosition(true);
				}
				else {
					me._controller_slider.style.right='128px';
					me._controller_slider.ggDy=0;
					me._controller_slider.ggUpdatePosition(true);
				}
			}
		}
		me._controller_slider.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getOS() == 1))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._controller_slider.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._controller_slider.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._controller_slider.style[domTransition]='right 0s, top 0s, ' + cssPrefix + 'transform 0s, opacity 500ms ease 0ms';
				if (me._controller_slider.ggCurrentLogicStateScaling == 0) {
					me._controller_slider.ggParameter.sx = 1.49;
					me._controller_slider.ggParameter.sy = 1.49;
					me._controller_slider.style[domTransform]=parameterToTransform(me._controller_slider.ggParameter);
				}
				else {
					me._controller_slider.ggParameter.sx = 1;
					me._controller_slider.ggParameter.sy = 1;
					me._controller_slider.style[domTransform]=parameterToTransform(me._controller_slider.ggParameter);
				}
			}
		}
		me._controller_slider.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_timer') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._controller_slider.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._controller_slider.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._controller_slider.style[domTransition]='right 0s, top 0s, ' + cssPrefix + 'transform 0s, opacity 500ms ease 0ms';
				if (me._controller_slider.ggCurrentLogicStateAlpha == 0) {
					me._controller_slider.style.visibility=me._controller_slider.ggVisible?'inherit':'hidden';
					me._controller_slider.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._controller_slider.style.opacity == 0.0) { me._controller_slider.style.visibility="hidden"; } }, 505);
					me._controller_slider.style.opacity=0;
				}
			}
		}
		me._controller_slider.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._enter_vr=document.createElement('div');
		els=me._enter_vr__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGhlaWdodD0iMzJweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCIgdmlld0JveD0iLTMzNDUuMjUgLTI2MDYgMzIgMzIiIHhtbG'+
			'5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeD0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMzJweCIgdmVyc2lvbj0iMS4xIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IC0zMzQ1LjI1IC0yNjA2IDMyIDMyIj4KIDxnIGlkPSJMYXllcl8xIi8+CiA8ZyBpZD0iRWJlbmVfMSI+CiAgPGc+CiAgIDxnPgogICAgPHBhdGggZmlsbD0iIzFBMTcxQiIgZD0iTS0zMzI5LjI0OS0yNjAyLjVjLTYuODkyLDAtMTIuNSw1LjYwNy0xMi41LDEyLjVzNS42MDcsMTIuNSwxMi41LDEyLjVjNi44OTMsMCwxMi41LTUuNjA3LDEyLjUtMTIuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5'+
			'O1MtMzMyMi4zNTUtMjYwMi41LTMzMjkuMjQ5LTI2MDIuNXogTS0zMzI5LjI0OS0yNTgwLjEzMmMtNS40NDEsMC05Ljg3LTQuNDI3LTkuODctOS44NjhjMC01LjQ0Miw0LjQyOS05Ljg2OSw5Ljg3LTkuODY5JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzUuNDQyLDAsOS44Nyw0LjQyOCw5Ljg3LDkuODY5Qy0zMzE5LjM3OC0yNTg0LjU2LTMzMjMuODA1LTI1ODAuMTMyLTMzMjkuMjQ5LTI1ODAuMTMyeiIvPgogICAgPHBhdGggZmlsbD0iIzFBMTcxQiIgZD0iTS0zMzIxLjU4OS0yNTkzLjgwOGMtMC45LTEuMjYtMi4zOTktMS40MjItMy42MDQtMS40MjJoLTEuNzA0di0xLjY0NmMwLTAuNj'+
			'Y4LTAuNTQyLTEuMjA5LTEuMjEtMS4yMDkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtoLTIuMjgxYy0wLjY2OCwwLTEuMjEsMC41NDEtMS4yMSwxLjIwOXYxLjY0NmgtMS43MDJjLTEuMjA1LDAtMi43MDQsMC4xNjItMy42MDYsMS40MjJjLTAuNjg4LDAuOTYxLTEuMDA3LDIuMjItMS4wMDcsMy45NjMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMCwyLjEsMC42MDEsMy44MTcsMS42MDksNC41OTNjMC44ODEsMC42NzksMS41MDYsMC43OTMsMi41NzMsMC43OTNjMS4yNTgsMCwyLjIxNC0wLjQ5LDIuOTgyLTAuODgzJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAuNTc5'+
			'LTAuMjk3LDEuMDM2LTAuNTMxLDEuNTAxLTAuNTMxczAuOTIzLDAuMjM0LDEuNTAyLDAuNTMyYzAuNzY3LDAuMzkzLDEuNzI0LDAuODgyLDIuOTgyLDAuODgyJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzEuMDY1LDAsMS42OS0wLjExNCwyLjU3Mi0wLjc5MmMxLjAwOS0wLjc3NiwxLjYxMS0yLjQ5MywxLjYxMS00LjU5NUMtMzMyMC41ODEtMjU5MS41ODgtMzMyMC45MDItMjU5Mi44NDgtMzMyMS41ODktMjU5My44MDh6JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7IE0tMzMyMy42NjctMjU4Ny4xNjhjLTAuMzM1LDAuMjU5LTAuMzc4LDAuMjkyLTEuMDk3LDAuMjkyYy0wLjY3NS'+
			'wwLTEuMjMzLTAuMjg3LTEuODc5LTAuNjE4JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0wLjcyOS0wLjM3My0xLjU1Ny0wLjc5Ni0yLjYwNS0wLjc5NnMtMS44NzUsMC40MjMtMi42MDQsMC43OTZjLTAuNjQ2LDAuMzMyLTEuMjA0LDAuNjE4LTEuODc5LDAuNjE4JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0wLjcxOSwwLTAuNzYyLTAuMDMzLTEuMDk2LTAuMjkyYy0wLjE0Mi0wLjExMi0wLjY2OC0wLjg5My0wLjY2OC0yLjY3N2MwLTEuMTk3LDAuMTgxLTIuMDMzLDAuNTU1LTIuNTU1JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAuMTI2LTAuMTc2LDAuNDM0LTAu'+
			'NDExLDEuNjQtMC40MTFoOC4xMDdjMS4yMDUsMCwxLjUxMiwwLjIzNCwxLjYzOCwwLjQxMWMwLjM3NCwwLjUyMiwwLjU1NiwxLjM1OCwwLjU1NiwyLjU1NSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O0MtMzMyMy0yNTg4LjA2LTMzMjMuNTI3LTI1ODcuMjgtMzMyMy42NjctMjU4Ny4xNjh6Ii8+CiAgIDwvZz4KICAgPGcgb3BhY2l0eT0iMC40Ij4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNLTMzMjkuMjQ5LTI2MDIuNWMtNi44OTIsMC0xMi41LDUuNjA3LTEyLjUsMTIuNXM1LjYwNywxMi41LDEyLjUsMTIuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OT'+
			'smI3g5O2M2Ljg5MywwLDEyLjUtNS42MDcsMTIuNS0xMi41Uy0zMzIyLjM1NS0yNjAyLjUtMzMyOS4yNDktMjYwMi41eiBNLTMzMjkuMjQ5LTI1ODAuMTMyYy01LjQ0MSwwLTkuODctNC40MjctOS44Ny05Ljg2OCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLTUuNDQyLDQuNDI5LTkuODY5LDkuODctOS44NjljNS40NDIsMCw5Ljg3LDQuNDI4LDkuODcsOS44NjlDLTMzMTkuMzc4LTI1ODQuNTYtMzMyMy44MDUtMjU4MC4xMzItMzMyOS4yNDktMjU4MC4xMzJ6IiBzdHJva2U9IiMxQTE3MUIiLz4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNLTMzMjEu'+
			'NTg5LTI1OTMuODA4Yy0wLjktMS4yNi0yLjM5OS0xLjQyMi0zLjYwNC0xLjQyMmgtMS43MDR2LTEuNjQ2JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAtMC42NjgtMC41NDItMS4yMDktMS4yMS0xLjIwOWgtMi4yODFjLTAuNjY4LDAtMS4yMSwwLjU0MS0xLjIxLDEuMjA5djEuNjQ2aC0xLjcwMmMtMS4yMDUsMC0yLjcwNCwwLjE2Mi0zLjYwNiwxLjQyMiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC42ODgsMC45NjEtMS4wMDcsMi4yMi0xLjAwNywzLjk2M2MwLDIuMSwwLjYwMSwzLjgxNywxLjYwOSw0LjU5M2MwLjg4MSwwLjY3OSwxLjUwNiwwLjc5MywyLjU3MywwLjc5My'+
			'YjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MxLjI1OCwwLDIuMjE0LTAuNDksMi45ODItMC44ODNjMC41NzktMC4yOTcsMS4wMzYtMC41MzEsMS41MDEtMC41MzFzMC45MjMsMC4yMzQsMS41MDIsMC41MzImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMC43NjcsMC4zOTMsMS43MjQsMC44ODIsMi45ODIsMC44ODJjMS4wNjUsMCwxLjY5LTAuMTE0LDIuNTcyLTAuNzkyYzEuMDA5LTAuNzc2LDEuNjExLTIuNDkzLDEuNjExLTQuNTk1JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Qy0zMzIwLjU4MS0yNTkxLjU4OC0zMzIwLjkwMi0yNTkyLjg0OC0zMzIxLjU4OS0yNTkzLjgw'+
			'OHogTS0zMzIzLjY2Ny0yNTg3LjE2OGMtMC4zMzUsMC4yNTktMC4zNzgsMC4yOTItMS4wOTcsMC4yOTImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuNjc1LDAtMS4yMzMtMC4yODctMS44NzktMC42MThjLTAuNzI5LTAuMzczLTEuNTU3LTAuNzk2LTIuNjA1LTAuNzk2cy0xLjg3NSwwLjQyMy0yLjYwNCwwLjc5NiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC42NDYsMC4zMzItMS4yMDQsMC42MTgtMS44NzksMC42MThjLTAuNzE5LDAtMC43NjItMC4wMzMtMS4wOTYtMC4yOTJjLTAuMTQyLTAuMTEyLTAuNjY4LTAuODkzLTAuNjY4LTIuNjc3JiN4ZDsmI3hhOyYjeDk7Ji'+
			'N4OTsmI3g5OyYjeDk7YzAtMS4xOTcsMC4xODEtMi4wMzMsMC41NTUtMi41NTVjMC4xMjYtMC4xNzYsMC40MzQtMC40MTEsMS42NC0wLjQxMWg4LjEwN2MxLjIwNSwwLDEuNTEyLDAuMjM0LDEuNjM4LDAuNDExJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAuMzc0LDAuNTIyLDAuNTU2LDEuMzU4LDAuNTU2LDIuNTU1Qy0zMzIzLTI1ODguMDYtMzMyMy41MjctMjU4Ny4yOC0zMzIzLjY2Ny0yNTg3LjE2OHoiIHN0cm9rZT0iIzFBMTcxQiIvPgogICA8L2c+CiAgIDxnPgogICAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjZmZmZmZmIiBkPSJNLTMzMjkuMjQ5LTI2MDIuNWMtNi44'+
			'OTIsMC0xMi41LDUuNjA3LTEyLjUsMTIuNXM1LjYwNywxMi41LDEyLjUsMTIuNWM2Ljg5MywwLDEyLjUtNS42MDcsMTIuNS0xMi41JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Uy0zMzIyLjM1NS0yNjAyLjUtMzMyOS4yNDktMjYwMi41eiBNLTMzMjkuMjQ5LTI1ODAuMTMyYy01LjQ0MSwwLTkuODctNC40MjctOS44Ny05Ljg2OGMwLTUuNDQyLDQuNDI5LTkuODY5LDkuODctOS44NjkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjNS40NDIsMCw5Ljg3LDQuNDI4LDkuODcsOS44NjlDLTMzMTkuMzc4LTI1ODQuNTYtMzMyMy44MDUtMjU4MC4xMzItMzMyOS4yNDktMjU4MC4xMzJ6Ii'+
			'8+CiAgICA8cGF0aCBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiNmZmZmZmYiIGQ9Ik0tMzMyMS41ODktMjU5My44MDhjLTAuOS0xLjI2LTIuMzk5LTEuNDIyLTMuNjA0LTEuNDIyaC0xLjcwNHYtMS42NDZjMC0wLjY2OC0wLjU0Mi0xLjIwOS0xLjIxLTEuMjA5JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7aC0yLjI4MWMtMC42NjgsMC0xLjIxLDAuNTQxLTEuMjEsMS4yMDl2MS42NDZoLTEuNzAyYy0xLjIwNSwwLTIuNzA0LDAuMTYyLTMuNjA2LDEuNDIyYy0wLjY4OCwwLjk2MS0xLjAwNywyLjIyLTEuMDA3LDMuOTYzJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAsMi4xLDAuNjAx'+
			'LDMuODE3LDEuNjA5LDQuNTkzYzAuODgxLDAuNjc5LDEuNTA2LDAuNzkzLDIuNTczLDAuNzkzYzEuMjU4LDAsMi4yMTQtMC40OSwyLjk4Mi0wLjg4MyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLjU3OS0wLjI5NywxLjAzNi0wLjUzMSwxLjUwMS0wLjUzMXMwLjkyMywwLjIzNCwxLjUwMiwwLjUzMmMwLjc2NywwLjM5MywxLjcyNCwwLjg4MiwyLjk4MiwwLjg4MiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MxLjA2NSwwLDEuNjktMC4xMTQsMi41NzItMC43OTJjMS4wMDktMC43NzYsMS42MTEtMi40OTMsMS42MTEtNC41OTVDLTMzMjAuNTgxLTI1OTEuNTg4LTMzMjAuOTAyLT'+
			'I1OTIuODQ4LTMzMjEuNTg5LTI1OTMuODA4eiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5OyBNLTMzMjMuNjY3LTI1ODcuMTY4Yy0wLjMzNSwwLjI1OS0wLjM3OCwwLjI5Mi0xLjA5NywwLjI5MmMtMC42NzUsMC0xLjIzMy0wLjI4Ny0xLjg3OS0wLjYxOCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC43MjktMC4zNzMtMS41NTctMC43OTYtMi42MDUtMC43OTZzLTEuODc1LDAuNDIzLTIuNjA0LDAuNzk2Yy0wLjY0NiwwLjMzMi0xLjIwNCwwLjYxOC0xLjg3OSwwLjYxOCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC43MTksMC0wLjc2Mi0wLjAzMy0xLjA5Ni0wLjI5'+
			'MmMtMC4xNDItMC4xMTItMC42NjgtMC44OTMtMC42NjgtMi42NzdjMC0xLjE5NywwLjE4MS0yLjAzMywwLjU1NS0yLjU1NSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLjEyNi0wLjE3NiwwLjQzNC0wLjQxMSwxLjY0LTAuNDExaDguMTA3YzEuMjA1LDAsMS41MTIsMC4yMzQsMS42MzgsMC40MTFjMC4zNzQsMC41MjIsMC41NTYsMS4zNTgsMC41NTYsMi41NTUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtDLTMzMjMtMjU4OC4wNi0zMzIzLjUyNy0yNTg3LjI4LTMzMjMuNjY3LTI1ODcuMTY4eiIvPgogICA8L2c+CiAgIDxnPgogICAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlLX'+
			'dpZHRoPSIwLjIiIGQ9Ik0tMzMyOS4yNDktMjYwMi41Yy02Ljg5MiwwLTEyLjUsNS42MDctMTIuNSwxMi41czUuNjA3LDEyLjUsMTIuNSwxMi41JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzYuODkzLDAsMTIuNS01LjYwNywxMi41LTEyLjVTLTMzMjIuMzU1LTI2MDIuNS0zMzI5LjI0OS0yNjAyLjV6IE0tMzMyOS4yNDktMjU4MC4xMzJjLTUuNDQxLDAtOS44Ny00LjQyNy05Ljg3LTkuODY4JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAtNS40NDIsNC40MjktOS44NjksOS44Ny05Ljg2OWM1LjQ0MiwwLDkuODcsNC40MjgsOS44Nyw5Ljg2OUMtMzMxOS4zNzgtMjU4NC41Ni0z'+
			'MzIzLjgwNS0yNTgwLjEzMi0zMzI5LjI0OS0yNTgwLjEzMnoiIHN0cm9rZT0iIzFBMTcxQiIvPgogICAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIwLjIiIGQ9Ik0tMzMyMS41ODktMjU5My44MDhjLTAuOS0xLjI2LTIuMzk5LTEuNDIyLTMuNjA0LTEuNDIyaC0xLjcwNHYtMS42NDYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMC0wLjY2OC0wLjU0Mi0xLjIwOS0xLjIxLTEuMjA5aC0yLjI4MWMtMC42NjgsMC0xLjIxLDAuNTQxLTEuMjEsMS4yMDl2MS42NDZoLTEuNzAyYy0xLjIwNSwwLTIuNzA0LDAuMTYyLTMuNjA2LDEuNDIyJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5Oy'+
			'YjeDk7Yy0wLjY4OCwwLjk2MS0xLjAwNywyLjIyLTEuMDA3LDMuOTYzYzAsMi4xLDAuNjAxLDMuODE3LDEuNjA5LDQuNTkzYzAuODgxLDAuNjc5LDEuNTA2LDAuNzkzLDIuNTczLDAuNzkzJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzEuMjU4LDAsMi4yMTQtMC40OSwyLjk4Mi0wLjg4M2MwLjU3OS0wLjI5NywxLjAzNi0wLjUzMSwxLjUwMS0wLjUzMXMwLjkyMywwLjIzNCwxLjUwMiwwLjUzMiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLjc2NywwLjM5MywxLjcyNCwwLjg4MiwyLjk4MiwwLjg4MmMxLjA2NSwwLDEuNjktMC4xMTQsMi41NzItMC43OTJjMS4wMDktMC43NzYs'+
			'MS42MTEtMi40OTMsMS42MTEtNC41OTUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtDLTMzMjAuNTgxLTI1OTEuNTg4LTMzMjAuOTAyLTI1OTIuODQ4LTMzMjEuNTg5LTI1OTMuODA4eiBNLTMzMjMuNjY3LTI1ODcuMTY4Yy0wLjMzNSwwLjI1OS0wLjM3OCwwLjI5Mi0xLjA5NywwLjI5MiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC42NzUsMC0xLjIzMy0wLjI4Ny0xLjg3OS0wLjYxOGMtMC43MjktMC4zNzMtMS41NTctMC43OTYtMi42MDUtMC43OTZzLTEuODc1LDAuNDIzLTIuNjA0LDAuNzk2JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0wLjY0NiwwLjMzMi0xLj'+
			'IwNCwwLjYxOC0xLjg3OSwwLjYxOGMtMC43MTksMC0wLjc2Mi0wLjAzMy0xLjA5Ni0wLjI5MmMtMC4xNDItMC4xMTItMC42NjgtMC44OTMtMC42NjgtMi42NzcmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMC0xLjE5NywwLjE4MS0yLjAzMywwLjU1NS0yLjU1NWMwLjEyNi0wLjE3NiwwLjQzNC0wLjQxMSwxLjY0LTAuNDExaDguMTA3YzEuMjA1LDAsMS41MTIsMC4yMzQsMS42MzgsMC40MTEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMC4zNzQsMC41MjIsMC41NTYsMS4zNTgsMC41NTYsMi41NTVDLTMzMjMtMjU4OC4wNi0zMzIzLjUyNy0yNTg3LjI4LTMzMjMuNjY3LTI1ODcu'+
			'MTY4eiIgc3Ryb2tlPSIjMUExNzFCIi8+CiAgIDwvZz4KICA8L2c+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiIvPgo8L3N2Zz4K';
		me._enter_vr__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._enter_vr__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGhlaWdodD0iMzJweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCIgdmlld0JveD0iLTMzNDUuMjUgLTI1NzEuMzMzIDMyIDMyIi'+
			'B4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjMycHgiIHZlcnNpb249IjEuMSIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAtMzM0NS4yNSAtMjU3MS4zMzMgMzIgMzIiPgogPGcgaWQ9IkxheWVyXzEiLz4KIDxnIGlkPSJFYmVuZV8xIj4KICA8Zz4KICAgPGc+CiAgICA8cGF0aCBmaWxsPSIjMUExNzFCIiBkPSJNLTMzMjkuMjUtMjU2OS4wODNjLTcuNTgxLDAtMTMuNzUsNi4xNjgtMTMuNzUsMTMuNzQ5YzAsNy41ODMsNi4xNjgsMTMuNzUsMTMuNzUsMTMuNzUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjNy41'+
			'ODMsMCwxMy43NS02LjE2NywxMy43NS0xMy43NUMtMzMxNS41LTI1NjIuOTE1LTMzMjEuNjY3LTI1NjkuMDgzLTMzMjkuMjUtMjU2OS4wODN6IE0tMzMyOS4yNS0yNTQ0LjQ3OSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtNS45ODUsMC0xMC44NTctNC44NjktMTAuODU3LTEwLjg1NWMwLTUuOTg2LDQuODcyLTEwLjg1NSwxMC44NTctMTAuODU1YzUuOTg3LDAsMTAuODU3LDQuODcxLDEwLjg1NywxMC44NTUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtDLTMzMTguMzkzLTI1NDkuMzQ5LTMzMjMuMjYyLTI1NDQuNDc5LTMzMjkuMjUtMjU0NC40Nzl6Ii8+CiAgICA8cGF0aCBmaW'+
			'xsPSIjMUExNzFCIiBkPSJNLTMzMjAuODI1LTI1NTkuNTIxYy0wLjk5LTEuMzg3LTIuNjM5LTEuNTY0LTMuOTY1LTEuNTY0aC0xLjg3NXYtMS44MTJjMC0wLjczNC0wLjU5Ni0xLjMzLTEuMzMxLTEuMzMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtoLTIuNTA5Yy0wLjczNSwwLTEuMzMxLDAuNTk2LTEuMzMxLDEuMzN2MS44MTJoLTEuODczYy0xLjMyNSwwLTIuOTc0LDAuMTc4LTMuOTY3LDEuNTY0Yy0wLjc1NiwxLjA1Ny0xLjEwNywyLjQ0Mi0xLjEwNyw0LjM1OSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLDIuMzEsMC42NjIsNC4xOTksMS43Nyw1LjA1M2MwLjk2OSwwLjc0'+
			'NywxLjY1NywwLjg3MywyLjgzMSwwLjg3M2MxLjM4NCwwLDIuNDM2LTAuNTM5LDMuMjgxLTAuOTcxJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAuNjM3LTAuMzI3LDEuMTQtMC41ODQsMS42NTEtMC41ODRjMC41MTIsMCwxLjAxNSwwLjI1NywxLjY1MiwwLjU4NGMwLjg0NCwwLjQzMiwxLjg5NywwLjk3LDMuMjgxLDAuOTcmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMS4xNzEsMCwxLjg1OS0wLjEyNSwyLjgzLTAuODcxYzEuMTA5LTAuODU0LDEuNzcyLTIuNzQzLDEuNzcyLTUuMDU0Qy0zMzE5LjcxNS0yNTU3LjA4MS0zMzIwLjA2OC0yNTU4LjQ2Ni0zMzIwLjgyNS0yNTU5Lj'+
			'UyMXomI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTsgTS0zMzIzLjExMS0yNTUyLjIxOGMtMC4zNjksMC4yODUtMC40MTYsMC4zMjEtMS4yMDYsMC4zMjFjLTAuNzQyLDAtMS4zNTctMC4zMTUtMi4wNjctMC42NzkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuODAyLTAuNDExLTEuNzEyLTAuODc2LTIuODY2LTAuODc2Yy0xLjE1MywwLTIuMDYyLDAuNDY1LTIuODY1LDAuODc2Yy0wLjcxLDAuMzY0LTEuMzI1LDAuNjc5LTIuMDY3LDAuNjc5JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0wLjc5MSwwLTAuODM4LTAuMDM2LTEuMjA1LTAuMzJjLTAuMTU2LTAuMTIzLTAu'+
			'NzM1LTAuOTgxLTAuNzM1LTIuOTQ1YzAtMS4zMTcsMC4yLTIuMjM2LDAuNjEtMi44MTEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMC4xMzgtMC4xOTQsMC40NzctMC40NTIsMS44MDMtMC40NTJoOC45MThjMS4zMjYsMCwxLjY2MywwLjI1NywxLjgwMSwwLjQ1MmMwLjQxMiwwLjU3NSwwLjYxMSwxLjQ5NCwwLjYxMSwyLjgxMSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O0MtMzMyMi4zNzctMjU1My4xOTktMzMyMi45NTYtMjU1Mi4zNDEtMzMyMy4xMTEtMjU1Mi4yMTh6Ii8+CiAgIDwvZz4KICAgPGcgb3BhY2l0eT0iMC40Ij4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZS'+
			'13aWR0aD0iMS41IiBkPSJNLTMzMjkuMjUtMjU2OS4wODNjLTcuNTgxLDAtMTMuNzUsNi4xNjgtMTMuNzUsMTMuNzQ5JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAsNy41ODMsNi4xNjgsMTMuNzUsMTMuNzUsMTMuNzVjNy41ODMsMCwxMy43NS02LjE2NywxMy43NS0xMy43NUMtMzMxNS41LTI1NjIuOTE1LTMzMjEuNjY3LTI1NjkuMDgzLTMzMjkuMjUtMjU2OS4wODN6JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7IE0tMzMyOS4yNS0yNTQ0LjQ3OWMtNS45ODUsMC0xMC44NTctNC44NjktMTAuODU3LTEwLjg1NWMwLTUuOTg2LDQuODcyLTEwLjg1NSwxMC44NTctMTAuODU1JiN4'+
			'ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzUuOTg3LDAsMTAuODU3LDQuODcxLDEwLjg1NywxMC44NTVDLTMzMTguMzkzLTI1NDkuMzQ5LTMzMjMuMjYyLTI1NDQuNDc5LTMzMjkuMjUtMjU0NC40Nzl6IiBzdHJva2U9IiMxQTE3MUIiLz4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNLTMzMjAuODI1LTI1NTkuNTIxYy0wLjk5LTEuMzg3LTIuNjM5LTEuNTY0LTMuOTY1LTEuNTY0aC0xLjg3NSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O3YtMS44MTJjMC0wLjczNC0wLjU5Ni0xLjMzLTEuMzMxLTEuMzNoLTIuNTA5Yy0wLjczNSwwLTEuMzMxLDAuNT'+
			'k2LTEuMzMxLDEuMzN2MS44MTJoLTEuODczYy0xLjMyNSwwLTIuOTc0LDAuMTc4LTMuOTY3LDEuNTY0JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0wLjc1NiwxLjA1Ny0xLjEwNywyLjQ0Mi0xLjEwNyw0LjM1OWMwLDIuMzEsMC42NjIsNC4xOTksMS43Nyw1LjA1M2MwLjk2OSwwLjc0NywxLjY1NywwLjg3MywyLjgzMSwwLjg3MyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MxLjM4NCwwLDIuNDM2LTAuNTM5LDMuMjgxLTAuOTcxYzAuNjM3LTAuMzI3LDEuMTQtMC41ODQsMS42NTEtMC41ODRjMC41MTIsMCwxLjAxNSwwLjI1NywxLjY1MiwwLjU4NCYjeGQ7JiN4YTsmI3g5OyYj'+
			'eDk7JiN4OTsmI3g5O2MwLjg0NCwwLjQzMiwxLjg5NywwLjk3LDMuMjgxLDAuOTdjMS4xNzEsMCwxLjg1OS0wLjEyNSwyLjgzLTAuODcxYzEuMTA5LTAuODU0LDEuNzcyLTIuNzQzLDEuNzcyLTUuMDU0JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Qy0zMzE5LjcxNS0yNTU3LjA4MS0zMzIwLjA2OC0yNTU4LjQ2Ni0zMzIwLjgyNS0yNTU5LjUyMXogTS0zMzIzLjExMS0yNTUyLjIxOGMtMC4zNjksMC4yODUtMC40MTYsMC4zMjEtMS4yMDYsMC4zMjEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuNzQyLDAtMS4zNTctMC4zMTUtMi4wNjctMC42NzljLTAuODAyLTAuNDExLTEuNz'+
			'EyLTAuODc2LTIuODY2LTAuODc2Yy0xLjE1MywwLTIuMDYyLDAuNDY1LTIuODY1LDAuODc2JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0wLjcxLDAuMzY0LTEuMzI1LDAuNjc5LTIuMDY3LDAuNjc5Yy0wLjc5MSwwLTAuODM4LTAuMDM2LTEuMjA1LTAuMzJjLTAuMTU2LTAuMTIzLTAuNzM1LTAuOTgxLTAuNzM1LTIuOTQ1JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAtMS4zMTcsMC4yLTIuMjM2LDAuNjEtMi44MTFjMC4xMzgtMC4xOTQsMC40NzctMC40NTIsMS44MDMtMC40NTJoOC45MThjMS4zMjYsMCwxLjY2MywwLjI1NywxLjgwMSwwLjQ1MiYjeGQ7JiN4YTsmI3g5OyYj'+
			'eDk7JiN4OTsmI3g5O2MwLjQxMiwwLjU3NSwwLjYxMSwxLjQ5NCwwLjYxMSwyLjgxMUMtMzMyMi4zNzctMjU1My4xOTktMzMyMi45NTYtMjU1Mi4zNDEtMzMyMy4xMTEtMjU1Mi4yMTh6IiBzdHJva2U9IiMxQTE3MUIiLz4KICAgPC9nPgogICA8Zz4KICAgIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iI2ZmZmZmZiIgZD0iTS0zMzI5LjI1LTI1NjkuMDgzYy03LjU4MSwwLTEzLjc1LDYuMTY4LTEzLjc1LDEzLjc0OWMwLDcuNTgzLDYuMTY4LDEzLjc1LDEzLjc1LDEzLjc1JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzcuNTgzLDAsMTMuNzUtNi4xNjcsMTMuNzUtMTMuNzVDLTMzMT'+
			'UuNS0yNTYyLjkxNS0zMzIxLjY2Ny0yNTY5LjA4My0zMzI5LjI1LTI1NjkuMDgzeiBNLTMzMjkuMjUtMjU0NC40NzkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTUuOTg1LDAtMTAuODU3LTQuODY5LTEwLjg1Ny0xMC44NTVjMC01Ljk4Niw0Ljg3Mi0xMC44NTUsMTAuODU3LTEwLjg1NWM1Ljk4NywwLDEwLjg1Nyw0Ljg3MSwxMC44NTcsMTAuODU1JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Qy0zMzE4LjM5My0yNTQ5LjM0OS0zMzIzLjI2Mi0yNTQ0LjQ3OS0zMzI5LjI1LTI1NDQuNDc5eiIvPgogICAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjZmZmZmZmIiBkPSJN'+
			'LTMzMjAuODI1LTI1NTkuNTIxYy0wLjk5LTEuMzg3LTIuNjM5LTEuNTY0LTMuOTY1LTEuNTY0aC0xLjg3NXYtMS44MTJjMC0wLjczNC0wLjU5Ni0xLjMzLTEuMzMxLTEuMzMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtoLTIuNTA5Yy0wLjczNSwwLTEuMzMxLDAuNTk2LTEuMzMxLDEuMzN2MS44MTJoLTEuODczYy0xLjMyNSwwLTIuOTc0LDAuMTc4LTMuOTY3LDEuNTY0Yy0wLjc1NiwxLjA1Ny0xLjEwNywyLjQ0Mi0xLjEwNyw0LjM1OSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLDIuMzEsMC42NjIsNC4xOTksMS43Nyw1LjA1M2MwLjk2OSwwLjc0NywxLjY1NywwLjg3MywyLj'+
			'gzMSwwLjg3M2MxLjM4NCwwLDIuNDM2LTAuNTM5LDMuMjgxLTAuOTcxJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAuNjM3LTAuMzI3LDEuMTQtMC41ODQsMS42NTEtMC41ODRjMC41MTIsMCwxLjAxNSwwLjI1NywxLjY1MiwwLjU4NGMwLjg0NCwwLjQzMiwxLjg5NywwLjk3LDMuMjgxLDAuOTcmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMS4xNzEsMCwxLjg1OS0wLjEyNSwyLjgzLTAuODcxYzEuMTA5LTAuODU0LDEuNzcyLTIuNzQzLDEuNzcyLTUuMDU0Qy0zMzE5LjcxNS0yNTU3LjA4MS0zMzIwLjA2OC0yNTU4LjQ2Ni0zMzIwLjgyNS0yNTU5LjUyMXomI3hkOyYjeGE7JiN4'+
			'OTsmI3g5OyYjeDk7JiN4OTsgTS0zMzIzLjExMS0yNTUyLjIxOGMtMC4zNjksMC4yODUtMC40MTYsMC4zMjEtMS4yMDYsMC4zMjFjLTAuNzQyLDAtMS4zNTctMC4zMTUtMi4wNjctMC42NzkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuODAyLTAuNDExLTEuNzEyLTAuODc2LTIuODY2LTAuODc2Yy0xLjE1MywwLTIuMDYyLDAuNDY1LTIuODY1LDAuODc2Yy0wLjcxLDAuMzY0LTEuMzI1LDAuNjc5LTIuMDY3LDAuNjc5JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0wLjc5MSwwLTAuODM4LTAuMDM2LTEuMjA1LTAuMzJjLTAuMTU2LTAuMTIzLTAuNzM1LTAuOTgxLTAuNzM1LT'+
			'IuOTQ1YzAtMS4zMTcsMC4yLTIuMjM2LDAuNjEtMi44MTEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMC4xMzgtMC4xOTQsMC40NzctMC40NTIsMS44MDMtMC40NTJoOC45MThjMS4zMjYsMCwxLjY2MywwLjI1NywxLjgwMSwwLjQ1MmMwLjQxMiwwLjU3NSwwLjYxMSwxLjQ5NCwwLjYxMSwyLjgxMSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O0MtMzMyMi4zNzctMjU1My4xOTktMzMyMi45NTYtMjU1Mi4zNDEtMzMyMy4xMTEtMjU1Mi4yMTh6Ii8+CiAgIDwvZz4KICAgPGc+CiAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjAuMiIgZD0iTS0zMzI5LjI1LTI1Njku'+
			'MDgzYy03LjU4MSwwLTEzLjc1LDYuMTY4LTEzLjc1LDEzLjc0OSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLDcuNTgzLDYuMTY4LDEzLjc1LDEzLjc1LDEzLjc1YzcuNTgzLDAsMTMuNzUtNi4xNjcsMTMuNzUtMTMuNzVDLTMzMTUuNS0yNTYyLjkxNS0zMzIxLjY2Ny0yNTY5LjA4My0zMzI5LjI1LTI1NjkuMDgzeiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5OyBNLTMzMjkuMjUtMjU0NC40NzljLTUuOTg1LDAtMTAuODU3LTQuODY5LTEwLjg1Ny0xMC44NTVjMC01Ljk4Niw0Ljg3Mi0xMC44NTUsMTAuODU3LTEwLjg1NSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2M1Lj'+
			'k4NywwLDEwLjg1Nyw0Ljg3MSwxMC44NTcsMTAuODU1Qy0zMzE4LjM5My0yNTQ5LjM0OS0zMzIzLjI2Mi0yNTQ0LjQ3OS0zMzI5LjI1LTI1NDQuNDc5eiIgc3Ryb2tlPSIjMUExNzFCIi8+CiAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjAuMiIgZD0iTS0zMzIwLjgyNS0yNTU5LjUyMWMtMC45OS0xLjM4Ny0yLjYzOS0xLjU2NC0zLjk2NS0xLjU2NGgtMS44NzUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTt2LTEuODEyYzAtMC43MzQtMC41OTYtMS4zMy0xLjMzMS0xLjMzaC0yLjUwOWMtMC43MzUsMC0xLjMzMSwwLjU5Ni0xLjMzMSwxLjMzdjEuODEyaC0xLjg3M2MtMS4z'+
			'MjUsMC0yLjk3NCwwLjE3OC0zLjk2NywxLjU2NCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC43NTYsMS4wNTctMS4xMDcsMi40NDItMS4xMDcsNC4zNTljMCwyLjMxLDAuNjYyLDQuMTk5LDEuNzcsNS4wNTNjMC45NjksMC43NDcsMS42NTcsMC44NzMsMi44MzEsMC44NzMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMS4zODQsMCwyLjQzNi0wLjUzOSwzLjI4MS0wLjk3MWMwLjYzNy0wLjMyNywxLjE0LTAuNTg0LDEuNjUxLTAuNTg0YzAuNTEyLDAsMS4wMTUsMC4yNTcsMS42NTIsMC41ODQmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMC44NDQsMC40MzIsMS44OT'+
			'csMC45NywzLjI4MSwwLjk3YzEuMTcxLDAsMS44NTktMC4xMjUsMi44My0wLjg3MWMxLjEwOS0wLjg1NCwxLjc3Mi0yLjc0MywxLjc3Mi01LjA1NCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O0MtMzMxOS43MTUtMjU1Ny4wODEtMzMyMC4wNjgtMjU1OC40NjYtMzMyMC44MjUtMjU1OS41MjF6IE0tMzMyMy4xMTEtMjU1Mi4yMThjLTAuMzY5LDAuMjg1LTAuNDE2LDAuMzIxLTEuMjA2LDAuMzIxJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0wLjc0MiwwLTEuMzU3LTAuMzE1LTIuMDY3LTAuNjc5Yy0wLjgwMi0wLjQxMS0xLjcxMi0wLjg3Ni0yLjg2Ni0wLjg3NmMtMS4xNTMsMC0y'+
			'LjA2MiwwLjQ2NS0yLjg2NSwwLjg3NiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC43MSwwLjM2NC0xLjMyNSwwLjY3OS0yLjA2NywwLjY3OWMtMC43OTEsMC0wLjgzOC0wLjAzNi0xLjIwNS0wLjMyYy0wLjE1Ni0wLjEyMy0wLjczNS0wLjk4MS0wLjczNS0yLjk0NSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLTEuMzE3LDAuMi0yLjIzNiwwLjYxLTIuODExYzAuMTM4LTAuMTk0LDAuNDc3LTAuNDUyLDEuODAzLTAuNDUyaDguOTE4YzEuMzI2LDAsMS42NjMsMC4yNTcsMS44MDEsMC40NTImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMC40MTIsMC41NzUsMC42MT'+
			'EsMS40OTQsMC42MTEsMi44MTFDLTMzMjIuMzc3LTI1NTMuMTk5LTMzMjIuOTU2LTI1NTIuMzQxLTMzMjMuMTExLTI1NTIuMjE4eiIgc3Ryb2tlPSIjMUExNzFCIi8+CiAgIDwvZz4KICA8L2c+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiIvPgo8L3N2Zz4K';
		me._enter_vr__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="enter_vr";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._enter_vr.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._enter_vr.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.hasVR() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._enter_vr.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._enter_vr.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._enter_vr.style[domTransition]='';
				if (me._enter_vr.ggCurrentLogicStateVisible == 0) {
					me._enter_vr.style.visibility=(Number(me._enter_vr.style.opacity)>0||!me._enter_vr.style.opacity)?'inherit':'hidden';
					me._enter_vr.ggVisible=true;
				}
				else {
					me._enter_vr.style.visibility="hidden";
					me._enter_vr.ggVisible=false;
				}
			}
		}
		me._enter_vr.onclick=function (e) {
			player.enterVR();
		}
		me._enter_vr.onmouseover=function (e) {
			me._enter_vr__img.style.visibility='hidden';
			me._enter_vr__imgo.style.visibility='inherit';
		}
		me._enter_vr.onmouseout=function (e) {
			me._enter_vr__img.style.visibility='inherit';
			me._enter_vr__imgo.style.visibility='hidden';
		}
		me._enter_vr.ggUpdatePosition=function (useTransition) {
		}
		me._controller_slider.appendChild(me._enter_vr);
		el=me._gyro=document.createElement('div');
		el.ggId="gyro";
		el.ggDx=32;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._gyro.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gyro.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('opt_gyro') == true)) && 
				((player.getGyroAvailable() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._gyro.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._gyro.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._gyro.style[domTransition]='';
				if (me._gyro.ggCurrentLogicStateVisible == 0) {
					me._gyro.style.visibility=(Number(me._gyro.style.opacity)>0||!me._gyro.style.opacity)?'inherit':'hidden';
					me._gyro.ggVisible=true;
				}
				else {
					me._gyro.style.visibility="hidden";
					me._gyro.ggVisible=false;
				}
			}
		}
		me._gyro.onclick=function (e) {
			player.stopAutorotate();
			player.setUseGyro(!(player.getUseGyro()));
		}
		me._gyro.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._gyro_on=document.createElement('div');
		els=me._gyro_on__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjAvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvVFIvMjAwMS9SRUMtU1ZHLTIwMDEwOTA0L0RURC9zdmcxMC5kdGQnPgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM6Z3JhcGg9Imh0dHA6Ly9ucy5hZG9iZS5jb20vR3JhcGhzLzEuMC8iIGhlaWdodD0iMzJweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLz'+
			'E5OTkveGxpbmsiIHk9IjBweCIgdmlld0JveD0iLTM1MDYuNjY3IC0yNjA2IDMyIDMyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6aT0iaHR0cDovL25zLmFkb2JlLmNvbS9BZG9iZUlsbHVzdHJhdG9yLzEwLjAvIiB4bWxuczphPSJodHRwOi8vbnMuYWRvYmUuY29tL0Fkb2JlU1ZHVmlld2VyRXh0ZW5zaW9ucy8zLjAvIiB3aWR0aD0iMzJweCIgdmVyc2lvbj0iMS4wIiB4bWxuczp4PSJodHRwOi8vbnMuYWRvYmUuY29tL0V4dGVuc2liaWxpdHkvMS4wLyIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAtMzUwNi42Njcg'+
			'LTI2MDYgMzIgMzIiPgogPGcgaWQ9IkxheWVyXzEiLz4KIDxnIGlkPSJFYmVuZV8xIj4KICA8Zz4KICAgPGcgb3BhY2l0eT0iMC40Ij4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNLTM0OTIuMDgxLTI1OTAuMzVjMC4xNzIsMC41MDIsMC42NDIsMC44MTcsMS4xNDUsMC44MTcmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMC4xMywwLDAuMjYyLTAuMDIxLDAuMzkyLTAuMDY1YzAuNjMyLTAuMjE2LDAuOTY5LTAuOTA0LDAuNzUyLTEuNTM3bC0yLjA4My02LjA4Yy0wLjIxNi0wLjYzMS0wLjkwNi0wLjk2Ni0xLjUzNi0wLjc1MiYjeGQ7JiN4YTsmI3g5Oy'+
			'YjeDk7JiN4OTsmI3g5O2MtMC42MzMsMC4yMTYtMC45NjksMC45MDQtMC43NTMsMS41MzZMLTM0OTIuMDgxLTI1OTAuMzV6IiBzdHJva2U9IiMxQTE3MUIiLz4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNLTM0OTAuNjY3LTI2MDIuNWMtNi44OTIsMC0xMi40OTksNS42MDctMTIuNDk5LDEyLjUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtzNS42MDcsMTIuNSwxMi40OTksMTIuNXMxMi41LTUuNjA3LDEyLjUtMTIuNVMtMzQ4My43NzUtMjYwMi41LTM0OTAuNjY3LTI2MDIuNXogTS0zNDkwLjY2Ny0yNTc5LjkxOSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4'+
			'OTsmI3g5O2MtNS41NTgsMC0xMC4wOC00LjUyMS0xMC4wOC0xMC4wODFjMC01LjU1OSw0LjUyMi0xMC4wOCwxMC4wOC0xMC4wOGM1LjU1OSwwLDEwLjA4MSw0LjUyMSwxMC4wODEsMTAuMDgmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtDLTM0ODAuNTg2LTI1ODQuNDQxLTM0ODUuMTA4LTI1NzkuOTE5LTM0OTAuNjY3LTI1NzkuOTE5eiIgc3Ryb2tlPSIjMUExNzFCIi8+CiAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTS0zNDgyLjQ0MS0yNTkyLjk1N2MtMC42NzItMS45NjEtMi44NDctMy4xMzItNS44MTctMy4xMzImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeD'+
			'k7JiN4OTtjLTAuNzY0LDAtMS41NjIsMC4wODktMi4zNjUsMC4yNDZsMC43OTIsMi4zMTFjMC41MzYtMC4wODgsMS4wNjUtMC4xMzgsMS41NzMtMC4xMzhjMS44MzIsMCwzLjIxNiwwLjU4OCwzLjUyOCwxLjQ5OCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLjQ3NiwxLjM4Ny0xLjQ0OSwzLjc3Ni00Ljk3MSw0Ljk4M2MtMS4xNjQsMC4zOTgtMi4zNTksMC42MS0zLjQ1NiwwLjYxYy0xLjgzMiwwLTMuMjE2LTAuNTg4LTMuNTI4LTEuNDk3JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0wLjM4Ni0xLjEyOSwwLjgxMS0yLjkxNywzLjE2My00LjE5NWwtMC43OTEtMi4zMDljLTMu'+
			'NTMsMS43OTItNS41MjUsNC43NjQtNC42NjEsNy4yODhjMC42NzIsMS45NjEsMi44NDcsMy4xMzIsNS44MTcsMy4xMzImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMC45ODUsMCwyLjAyNS0wLjEzOCwzLjA2MS0wLjM5NmwwLjU5OCwxLjc0M2MwLjE3MiwwLjUwMiwwLjY0MiwwLjgxOCwxLjE0NSwwLjgxOGMwLjEzLDAsMC4yNjMtMC4wMjEsMC4zOTMtMC4wNjUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMC42MzEtMC4yMTcsMC45NjktMC45MDQsMC43NTEtMS41MzdsLTAuNTk3LTEuNzQxQy0zNDgzLjg0My0yNTg3LjA3Ny0zNDgxLjUyMi0yNTkwLjI3MS0zNDgyLjQ0MS0yNT'+
			'kyLjk1N3oiIHN0cm9rZT0iIzFBMTcxQiIvPgogICA8L2c+CiAgIDxnPgogICAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjAuMiIgZD0iTS0zNDkyLjA4MS0yNTkwLjM1YzAuMTcyLDAuNTAyLDAuNjQyLDAuODE3LDEuMTQ1LDAuODE3JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAuMTMsMCwwLjI2Mi0wLjAyMSwwLjM5Mi0wLjA2NWMwLjYzMi0wLjIxNiwwLjk2OS0wLjkwNCwwLjc1Mi0xLjUzN2wtMi4wODMtNi4wOGMtMC4yMTYtMC42MzEtMC45MDYtMC45NjYtMS41MzYtMC43NTImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtj'+
			'LTAuNjMzLDAuMjE2LTAuOTY5LDAuOTA0LTAuNzUzLDEuNTM2TC0zNDkyLjA4MS0yNTkwLjM1eiIgc3Ryb2tlPSIjMDAwMDAwIi8+CiAgICA8cGF0aCBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMC4yIiBkPSJNLTM0OTAuNjY3LTI2MDIuNWMtNi44OTIsMC0xMi40OTksNS42MDctMTIuNDk5LDEyLjUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtzNS42MDcsMTIuNSwxMi40OTksMTIuNXMxMi41LTUuNjA3LDEyLjUtMTIuNVMtMzQ4My43NzUtMjYwMi41LTM0OTAuNjY3LTI2MDIuNXogTS0zNDkwLjY2Ny0yNTc5LjkxOSYjeGQ7JiN4YTsmI3g5OyYjeD'+
			'k7JiN4OTsmI3g5O2MtNS41NTgsMC0xMC4wOC00LjUyMS0xMC4wOC0xMC4wODFjMC01LjU1OSw0LjUyMi0xMC4wOCwxMC4wOC0xMC4wOGM1LjU1OSwwLDEwLjA4MSw0LjUyMSwxMC4wODEsMTAuMDgmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtDLTM0ODAuNTg2LTI1ODQuNDQxLTM0ODUuMTA4LTI1NzkuOTE5LTM0OTAuNjY3LTI1NzkuOTE5eiIgc3Ryb2tlPSIjMDAwMDAwIi8+CiAgICA8cGF0aCBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMC4yIiBkPSJNLTM0ODIuNDQxLTI1OTIuOTU3Yy0wLjY3Mi0xLjk2MS0yLjg0Ny0zLjEzMi01LjgxNy0zLjEz'+
			'MiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC43NjQsMC0xLjU2MiwwLjA4OS0yLjM2NSwwLjI0NmwwLjc5MiwyLjMxMWMwLjUzNi0wLjA4OCwxLjA2NS0wLjEzOCwxLjU3My0wLjEzOGMxLjgzMiwwLDMuMjE2LDAuNTg4LDMuNTI4LDEuNDk4JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAuNDc2LDEuMzg3LTEuNDQ5LDMuNzc2LTQuOTcxLDQuOTgzYy0xLjE2NCwwLjM5OC0yLjM1OSwwLjYxLTMuNDU2LDAuNjFjLTEuODMyLDAtMy4yMTYtMC41ODgtMy41MjgtMS40OTcmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuMzg2LTEuMTI5LDAuODExLTIuOTE3LDMuMT'+
			'YzLTQuMTk1bC0wLjc5MS0yLjMwOWMtMy41MywxLjc5Mi01LjUyNSw0Ljc2NC00LjY2MSw3LjI4OGMwLjY3MiwxLjk2MSwyLjg0NywzLjEzMiw1LjgxNywzLjEzMiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLjk4NSwwLDIuMDI1LTAuMTM4LDMuMDYxLTAuMzk2bDAuNTk4LDEuNzQzYzAuMTcyLDAuNTAyLDAuNjQyLDAuODE4LDEuMTQ1LDAuODE4YzAuMTMsMCwwLjI2My0wLjAyMSwwLjM5My0wLjA2NSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLjYzMS0wLjIxNywwLjk2OS0wLjkwNCwwLjc1MS0xLjUzN2wtMC41OTctMS43NDFDLTM0ODMuODQzLTI1ODcuMDc3LTM0ODEu'+
			'NTIyLTI1OTAuMjcxLTM0ODIuNDQxLTI1OTIuOTU3eiIgc3Ryb2tlPSIjMDAwMDAwIi8+CiAgIDwvZz4KICA8L2c+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiIvPgo8L3N2Zz4K';
		me._gyro_on__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._gyro_on__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjAvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvVFIvMjAwMS9SRUMtU1ZHLTIwMDEwOTA0L0RURC9zdmcxMC5kdGQnPgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM6Z3JhcGg9Imh0dHA6Ly9ucy5hZG9iZS5jb20vR3JhcGhzLzEuMC8iIGhlaWdodD0iMzJweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLz'+
			'E5OTkveGxpbmsiIHk9IjBweCIgdmlld0JveD0iLTM1MDYuNjY3IC0yNTcxLjMzMyAzMiAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOmk9Imh0dHA6Ly9ucy5hZG9iZS5jb20vQWRvYmVJbGx1c3RyYXRvci8xMC4wLyIgeG1sbnM6YT0iaHR0cDovL25zLmFkb2JlLmNvbS9BZG9iZVNWR1ZpZXdlckV4dGVuc2lvbnMvMy4wLyIgd2lkdGg9IjMycHgiIHZlcnNpb249IjEuMCIgeG1sbnM6eD0iaHR0cDovL25zLmFkb2JlLmNvbS9FeHRlbnNpYmlsaXR5LzEuMC8iIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgLTM1MDYu'+
			'NjY3IC0yNTcxLjMzMyAzMiAzMiI+CiA8ZyBpZD0iTGF5ZXJfMSIvPgogPGcgaWQ9IkViZW5lXzEiPgogIDxnPgogICA8ZyBvcGFjaXR5PSIwLjQiPgogICAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik0tMzQ5Mi4yMjMtMjU1NS43MThjMC4xODksMC41NTIsMC43MDYsMC44OTksMS4yNTksMC44OTkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMC4xNDMsMCwwLjI4OS0wLjAyMywwLjQzMS0wLjA3MmMwLjY5Ni0wLjIzOCwxLjA2NS0wLjk5NSwwLjgyOC0xLjY5bC0yLjI5MS02LjY4OGMtMC4yMzgtMC42OTQtMC45OTctMS4wNjMtMS42ODktMC44MjcmI3hkOy'+
			'YjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuNjk2LDAuMjM4LTEuMDY1LDAuOTk0LTAuODI4LDEuNjg5TC0zNDkyLjIyMy0yNTU1LjcxOHoiIHN0cm9rZT0iIzFBMTcxQiIvPgogICAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik0tMzQ5MC42NjctMjU2OS4wODNjLTcuNTgxLDAtMTMuNzQ5LDYuMTY4LTEzLjc0OSwxMy43NSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLDcuNTgyLDYuMTY4LDEzLjc1LDEzLjc0OSwxMy43NWM3LjU4MiwwLDEzLjc1LTYuMTY3LDEzLjc1LTEzLjc1Qy0zNDc2LjkxNy0yNTYyLjkxNi0zNDgzLjA4NS0yNTY5LjA4My0zNDkw'+
			'LjY2Ny0yNTY5LjA4M3omI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTsgTS0zNDkwLjY2Ny0yNTQ0LjI0NWMtNi4xMTMsMC0xMS4wODctNC45NzQtMTEuMDg3LTExLjA4OWMwLTYuMTE0LDQuOTc0LTExLjA4OCwxMS4wODctMTEuMDg4JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzYuMTE0LDAsMTEuMDg5LDQuOTc0LDExLjA4OSwxMS4wODhDLTM0NzkuNTc4LTI1NDkuMjE5LTM0ODQuNTUzLTI1NDQuMjQ1LTM0OTAuNjY3LTI1NDQuMjQ1eiIgc3Ryb2tlPSIjMUExNzFCIi8+CiAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTS0zNDgxLjYxOS0yNTU4Lj'+
			'U4NmMtMC43NC0yLjE1OC0zLjEzMi0zLjQ0Ni02LjM5OS0zLjQ0NiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC44NCwwLTEuNzE4LDAuMDk4LTIuNjAxLDAuMjdsMC44NzEsMi41NDJjMC41OS0wLjA5NywxLjE3Mi0wLjE1MSwxLjczLTAuMTUxYzIuMDE1LDAsMy41MzgsMC42NDcsMy44ODEsMS42NDcmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMC41MjMsMS41MjYtMS41OTQsNC4xNTQtNS40NjgsNS40ODFjLTEuMjgsMC40MzgtMi41OTUsMC42NzEtMy44MDEsMC42NzFjLTIuMDE1LDAtMy41MzgtMC42NDctMy44OC0xLjY0NyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsm'+
			'I3g5O2MtMC40MjUtMS4yNDIsMC44OTItMy4yMDgsMy40NzktNC42MTVsLTAuODctMi41NGMtMy44ODMsMS45NzEtNi4wNzcsNS4yNC01LjEyNyw4LjAxN2MwLjczOSwyLjE1NywzLjEzMiwzLjQ0NSw2LjM5OCwzLjQ0NSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MxLjA4MywwLDIuMjI4LTAuMTUyLDMuMzY3LTAuNDM2bDAuNjU3LDEuOTE3YzAuMTksMC41NTMsMC43MDYsMC44OTksMS4yNTksMC44OTljMC4xNDMsMCwwLjI4OS0wLjAyMywwLjQzMi0wLjA3MiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLjY5NC0wLjIzOSwxLjA2Ni0wLjk5NSwwLjgyNy0xLjY5bC0wLjY1Ni'+
			'0xLjkxNUMtMzQ4My4xNjEtMjU1Mi4xMTgtMzQ4MC42MDctMjU1NS42MzEtMzQ4MS42MTktMjU1OC41ODZ6IiBzdHJva2U9IiMxQTE3MUIiLz4KICAgPC9nPgogICA8Zz4KICAgIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIwLjIiIGQ9Ik0tMzQ5Mi4yMjMtMjU1NS43MThjMC4xODksMC41NTIsMC43MDYsMC44OTksMS4yNTksMC44OTkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMC4xNDMsMCwwLjI4OS0wLjAyMywwLjQzMS0wLjA3MmMwLjY5Ni0wLjIzOCwxLjA2NS0wLjk5NSwwLjgyOC0xLjY5bC0yLjI5MS02LjY4OGMtMC4yMzgtMC42'+
			'OTQtMC45OTctMS4wNjMtMS42ODktMC44MjcmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuNjk2LDAuMjM4LTEuMDY1LDAuOTk0LTAuODI4LDEuNjg5TC0zNDkyLjIyMy0yNTU1LjcxOHoiIHN0cm9rZT0iIzAwMDAwMCIvPgogICAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjAuMiIgZD0iTS0zNDkwLjY2Ny0yNTY5LjA4M2MtNy41ODEsMC0xMy43NDksNi4xNjgtMTMuNzQ5LDEzLjc1JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAsNy41ODIsNi4xNjgsMTMuNzUsMTMuNzQ5LDEzLjc1YzcuNTgyLDAsMTMuNzUtNi4xNjcsMT'+
			'MuNzUtMTMuNzVDLTM0NzYuOTE3LTI1NjIuOTE2LTM0ODMuMDg1LTI1NjkuMDgzLTM0OTAuNjY3LTI1NjkuMDgzeiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5OyBNLTM0OTAuNjY3LTI1NDQuMjQ1Yy02LjExMywwLTExLjA4Ny00Ljk3NC0xMS4wODctMTEuMDg5YzAtNi4xMTQsNC45NzQtMTEuMDg4LDExLjA4Ny0xMS4wODgmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjNi4xMTQsMCwxMS4wODksNC45NzQsMTEuMDg5LDExLjA4OEMtMzQ3OS41NzgtMjU0OS4yMTktMzQ4NC41NTMtMjU0NC4yNDUtMzQ5MC42NjctMjU0NC4yNDV6IiBzdHJva2U9IiMwMDAwMDAiLz4KICAgIDxwYXRo'+
			'IGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIwLjIiIGQ9Ik0tMzQ4MS42MTktMjU1OC41ODZjLTAuNzQtMi4xNTgtMy4xMzItMy40NDYtNi4zOTktMy40NDYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuODQsMC0xLjcxOCwwLjA5OC0yLjYwMSwwLjI3bDAuODcxLDIuNTQyYzAuNTktMC4wOTcsMS4xNzItMC4xNTEsMS43My0wLjE1MWMyLjAxNSwwLDMuNTM4LDAuNjQ3LDMuODgxLDEuNjQ3JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAuNTIzLDEuNTI2LTEuNTk0LDQuMTU0LTUuNDY4LDUuNDgxYy0xLjI4LDAuNDM4LTIuNTk1LDAuNj'+
			'cxLTMuODAxLDAuNjcxYy0yLjAxNSwwLTMuNTM4LTAuNjQ3LTMuODgtMS42NDcmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuNDI1LTEuMjQyLDAuODkyLTMuMjA4LDMuNDc5LTQuNjE1bC0wLjg3LTIuNTRjLTMuODgzLDEuOTcxLTYuMDc3LDUuMjQtNS4xMjcsOC4wMTdjMC43MzksMi4xNTcsMy4xMzIsMy40NDUsNi4zOTgsMy40NDUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMS4wODMsMCwyLjIyOC0wLjE1MiwzLjM2Ny0wLjQzNmwwLjY1NywxLjkxN2MwLjE5LDAuNTUzLDAuNzA2LDAuODk5LDEuMjU5LDAuODk5YzAuMTQzLDAsMC4yODktMC4wMjMsMC40MzItMC4wNzIm'+
			'I3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMC42OTQtMC4yMzksMS4wNjYtMC45OTUsMC44MjctMS42OWwtMC42NTYtMS45MTVDLTM0ODMuMTYxLTI1NTIuMTE4LTM0ODAuNjA3LTI1NTUuNjMxLTM0ODEuNjE5LTI1NTguNTg2eiIgc3Ryb2tlPSIjMDAwMDAwIi8+CiAgIDwvZz4KICA8L2c+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiIvPgo8L3N2Zz4K';
		me._gyro_on__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="gyro_on";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._gyro_on.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gyro_on.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getUseGyro() == false))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._gyro_on.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._gyro_on.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._gyro_on.style[domTransition]='opacity 500ms ease 0ms';
				if (me._gyro_on.ggCurrentLogicStateAlpha == 0) {
					me._gyro_on.style.visibility=me._gyro_on.ggVisible?'inherit':'hidden';
					me._gyro_on.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._gyro_on.style.opacity == 0.0) { me._gyro_on.style.visibility="hidden"; } }, 505);
					me._gyro_on.style.opacity=0;
				}
			}
		}
		me._gyro_on.onclick=function (e) {
			if (player.transitionsDisabled) {
				me._gyro_on.style[domTransition]='none';
			} else {
				me._gyro_on.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._gyro_on.style.opacity='0';
			me._gyro_on.style.visibility='hidden';
			if (player.transitionsDisabled) {
				me._gyro_off.style[domTransition]='none';
			} else {
				me._gyro_off.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._gyro_off.style.opacity='1';
			me._gyro_off.style.visibility=me._gyro_off.ggVisible?'inherit':'hidden';
		}
		me._gyro_on.onmouseover=function (e) {
			me._gyro_on__img.style.visibility='hidden';
			me._gyro_on__imgo.style.visibility='inherit';
		}
		me._gyro_on.onmouseout=function (e) {
			me._gyro_on__img.style.visibility='inherit';
			me._gyro_on__imgo.style.visibility='hidden';
		}
		me._gyro_on.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._gyro.appendChild(me._gyro_on);
		el=me._gyro_off=document.createElement('div');
		els=me._gyro_off__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjAvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvVFIvMjAwMS9SRUMtU1ZHLTIwMDEwOTA0L0RURC9zdmcxMC5kdGQnPgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM6Z3JhcGg9Imh0dHA6Ly9ucy5hZG9iZS5jb20vR3JhcGhzLzEuMC8iIGhlaWdodD0iMzJweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLz'+
			'E5OTkveGxpbmsiIHk9IjBweCIgdmlld0JveD0iLTM0NjkuMjUgLTI2MDYgMzIgMzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeD0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxuczppPSJodHRwOi8vbnMuYWRvYmUuY29tL0Fkb2JlSWxsdXN0cmF0b3IvMTAuMC8iIHhtbG5zOmE9Imh0dHA6Ly9ucy5hZG9iZS5jb20vQWRvYmVTVkdWaWV3ZXJFeHRlbnNpb25zLzMuMC8iIHdpZHRoPSIzMnB4IiB2ZXJzaW9uPSIxLjAiIHhtbG5zOng9Imh0dHA6Ly9ucy5hZG9iZS5jb20vRXh0ZW5zaWJpbGl0eS8xLjAvIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IC0zNDY5LjI1IC0y'+
			'NjA2IDMyIDMyIj4KIDxnIGlkPSJMYXllcl8xIj4KICA8Zz4KICAgPGcgb3BhY2l0eT0iMC40Ij4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNLTM0NTQuNjA2LTI1OTAuMjgzYzAuMTcsMC40OTgsMC42MzYsMC44MSwxLjEzNCwwLjgxJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAuMTI4LDAsMC4yNi0wLjAyMSwwLjM4OS0wLjA2NWMwLjYyNi0wLjIxNSwwLjk1OS0wLjg5NiwwLjc0NS0xLjUyMmwtMi4wNjQtNi4wMjNjLTAuMjE0LTAuNjI2LTAuODk0LTAuOTU4LTEuNTIyLTAuNzQ1JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0wLjYyNi'+
			'wwLjIxNS0wLjk1OSwwLjg5Ni0wLjc0NSwxLjUyMUwtMzQ1NC42MDYtMjU5MC4yODN6IiBzdHJva2U9IiMxQTE3MUIiLz4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNLTM0NTMuMjUtMjYwMi40OTljLTYuODkyLDAtMTIuNSw1LjYwNy0xMi41LDEyLjQ5OSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLDYuODkzLDUuNjA3LDEyLjUsMTIuNSwxMi41czEyLjUtNS42MDcsMTIuNS0xMi41Qy0zNDQwLjc1LTI1OTYuODkyLTM0NDYuMzU3LTI2MDIuNDk5LTM0NTMuMjUtMjYwMi40OTl6IE0tMzQ1My4yNS0yNTgwLjEzMSYjeGQ7JiN4YTsmI3g5OyYjeDk7'+
			'JiN4OTsmI3g5O2MtNS40NDIsMC05Ljg3LTQuNDI3LTkuODctOS44NjlzNC40MjgtOS44NjksOS44Ny05Ljg2OXM5Ljg3LDQuNDI4LDkuODcsOS44NjlTLTM0NDcuODA3LTI1ODAuMTMxLTM0NTMuMjUtMjU4MC4xMzF6IiBzdHJva2U9IiMxQTE3MUIiLz4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNLTM0NDguNzQ5LTI1ODUuNDYxbC0xLjg3OS0wLjk0MWwwLjk0MS0xLjg3OCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLjIyOS0wLjQ2LDAuMDQzLTEuMDE5LTAuNDE1LTEuMjQ5Yy0wLjQ1OS0wLjIyOS0xLjAyLTAuMDQzLTEuMjQ5LDAuNDE2bC0wLj'+
			'k0LDEuODc3bC0xLjg3OC0wLjk0JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0wLjQ2LTAuMjI5LTEuMDE5LTAuMDQ0LTEuMjUsMC40MTZjLTAuMjI5LDAuNDYtMC4wNDIsMS4wMiwwLjQxNiwxLjI0OWwxLjg3OCwwLjk0bC0wLjk0MSwxLjg3OCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC4yMjksMC40NTgtMC4wNDMsMS4wMTgsMC40MTUsMS4yNDhjMC4yMywwLjExNSwwLjQ4NiwwLjEyNSwwLjcxMSwwLjA1YzAuMjI1LTAuMDc1LDAuNDI0LTAuMjM2LDAuNTM5LTAuNDY1bDAuOTQtMS44NzgmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtsMS44NzgsMC45NDFjMC4y'+
			'MjksMC4xMTYsMC40ODMsMC4xMjYsMC43MDgsMC4wNTFjMC4yMjYtMC4wNzUsMC40MjUtMC4yMzcsMC41NC0wLjQ2NiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O0MtMzQ0OC4xMDQtMjU4NC42NzItMzQ0OC4yOS0yNTg1LjIzMi0zNDQ4Ljc0OS0yNTg1LjQ2MXoiIHN0cm9rZT0iIzFBMTcxQiIvPgogICAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik0tMzQ1NS4zMzItMjU4NS44NTZjLTAuMjk2LTAuMTQ4LTAuNTI2LTAuMzc2LTAuNjg0LTAuNjQyJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0xLjY0MS0wLjA2OS0yLjg2Ni0wLjYyNi0zLjE1My0xLj'+
			'Q2OWMtMC4yMjItMC42NDcsMC4wOS0xLjUxOCwwLjg1NC0yLjM4OGMwLjU3Ny0wLjY1OCwxLjM3NS0xLjI2OCwyLjMtMS43NzNsLTAuNzg0LTIuMjkxJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0xLjMyNSwwLjY2OS0yLjQ3MiwxLjUxOC0zLjMxOCwyLjQ4MmMtMS4zNjYsMS41NTctMS44MzUsMy4yNDItMS4zMiw0Ljc0NmMwLjY2NSwxLjk0MiwyLjgyLDMuMTAyLDUuNzYyLDMuMTAyJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAuMzMxLDAsMC42NjgtMC4wMTYsMS4wMDktMC4wNDZsMC41NTctMS4xMDlMLTM0NTUuMzMyLTI1ODUuODU2eiIgc3Ryb2tlPSIjMUExNzFCIi8+'+
			'CiAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTS0zNDQ1LjA1OC0yNTkyLjgwMmMtMC42NjYtMS45NDMtMi44Mi0zLjEwMy01Ljc2Mi0zLjEwMyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC43NTEsMC0xLjUzNCwwLjA4Ni0yLjMyMiwwLjIzOWwwLjc4NiwyLjI5MWMwLjUyNC0wLjA4NSwxLjA0Mi0wLjEzNCwxLjUzNy0wLjEzNGMxLjgxNSwwLDMuMTg3LDAuNTgzLDMuNDk1LDEuNDg0JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAuMjIyLDAuNjQ2LTAuMDksMS41MTYtMC44NTQsMi4zODZjLTAuMjA2LDAuMjM1LTAuNDQ0LDAuNDYyLTAuNz'+
			'AyLDAuNjgyYzAuMDU0LDAuMzMyLDAuMDEyLDAuNjgzLTAuMTUsMS4wMDVsLTAuNjEyLDEuMjIzJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7bDEuMDU3LDAuNTI5YzAuODU4LTAuNTQ2LDEuNjA4LTEuMTc0LDIuMjA4LTEuODU3Qy0zNDQ1LjAxMi0yNTg5LjYxNC0zNDQ0LjU0My0yNTkxLjI5OS0zNDQ1LjA1OC0yNTkyLjgwMnoiIHN0cm9rZT0iIzFBMTcxQiIvPgogICA8L2c+CiAgIDxnPgogICAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjAuMiIgZD0iTS0zNDU0LjYwNi0yNTkwLjI4M2MwLjE3LDAuNDk4LDAuNjM2LDAuODEsMS4xMzQs'+
			'MC44MSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLjEyOCwwLDAuMjYtMC4wMjEsMC4zODktMC4wNjVjMC42MjYtMC4yMTUsMC45NTktMC44OTYsMC43NDUtMS41MjJsLTIuMDY0LTYuMDIzYy0wLjIxNC0wLjYyNi0wLjg5NC0wLjk1OC0xLjUyMi0wLjc0NSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC42MjYsMC4yMTUtMC45NTksMC44OTYtMC43NDUsMS41MjFMLTM0NTQuNjA2LTI1OTAuMjgzeiIgc3Ryb2tlPSIjMDAwMDAwIi8+CiAgICA8cGF0aCBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMC4yIiBkPSJNLTM0NTMuMjUtMjYwMi'+
			'40OTljLTYuODkyLDAtMTIuNSw1LjYwNy0xMi41LDEyLjQ5OSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLDYuODkzLDUuNjA3LDEyLjUsMTIuNSwxMi41czEyLjUtNS42MDcsMTIuNS0xMi41Qy0zNDQwLjc1LTI1OTYuODkyLTM0NDYuMzU3LTI2MDIuNDk5LTM0NTMuMjUtMjYwMi40OTl6IE0tMzQ1My4yNS0yNTgwLjEzMSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtNS40NDIsMC05Ljg3LTQuNDI3LTkuODctOS44NjlzNC40MjgtOS44NjksOS44Ny05Ljg2OXM5Ljg3LDQuNDI4LDkuODcsOS44NjlTLTM0NDcuODA3LTI1ODAuMTMxLTM0NTMuMjUtMjU4MC4xMzF6IiBzdHJv'+
			'a2U9IiMwMDAwMDAiLz4KICAgIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIwLjIiIGQ9Ik0tMzQ0OC43NDktMjU4NS40NjFsLTEuODc5LTAuOTQxbDAuOTQxLTEuODc4JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAuMjI5LTAuNDYsMC4wNDMtMS4wMTktMC40MTUtMS4yNDljLTAuNDU5LTAuMjI5LTEuMDItMC4wNDMtMS4yNDksMC40MTZsLTAuOTQsMS44NzdsLTEuODc4LTAuOTQmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuNDYtMC4yMjktMS4wMTktMC4wNDQtMS4yNSwwLjQxNmMtMC4yMjksMC40Ni0wLjA0MiwxLjAyLD'+
			'AuNDE2LDEuMjQ5bDEuODc4LDAuOTRsLTAuOTQxLDEuODc4JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0wLjIyOSwwLjQ1OC0wLjA0MywxLjAxOCwwLjQxNSwxLjI0OGMwLjIzLDAuMTE1LDAuNDg2LDAuMTI1LDAuNzExLDAuMDVjMC4yMjUtMC4wNzUsMC40MjQtMC4yMzYsMC41MzktMC40NjVsMC45NC0xLjg3OCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2wxLjg3OCwwLjk0MWMwLjIyOSwwLjExNiwwLjQ4MywwLjEyNiwwLjcwOCwwLjA1MWMwLjIyNi0wLjA3NSwwLjQyNS0wLjIzNywwLjU0LTAuNDY2JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Qy0zNDQ4LjEwNC0y'+
			'NTg0LjY3Mi0zNDQ4LjI5LTI1ODUuMjMyLTM0NDguNzQ5LTI1ODUuNDYxeiIgc3Ryb2tlPSIjMDAwMDAwIi8+CiAgICA8cGF0aCBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMC4yIiBkPSJNLTM0NTUuMzMyLTI1ODUuODU2Yy0wLjI5Ni0wLjE0OC0wLjUyNi0wLjM3Ni0wLjY4NC0wLjY0MiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMS42NDEtMC4wNjktMi44NjYtMC42MjYtMy4xNTMtMS40NjljLTAuMjIyLTAuNjQ3LDAuMDktMS41MTgsMC44NTQtMi4zODhjMC41NzctMC42NTgsMS4zNzUtMS4yNjgsMi4zLTEuNzczbC0wLjc4NC0yLjI5MSYjeG'+
			'Q7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMS4zMjUsMC42NjktMi40NzIsMS41MTgtMy4zMTgsMi40ODJjLTEuMzY2LDEuNTU3LTEuODM1LDMuMjQyLTEuMzIsNC43NDZjMC42NjUsMS45NDIsMi44MiwzLjEwMiw1Ljc2MiwzLjEwMiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLjMzMSwwLDAuNjY4LTAuMDE2LDEuMDA5LTAuMDQ2bDAuNTU3LTEuMTA5TC0zNDU1LjMzMi0yNTg1Ljg1NnoiIHN0cm9rZT0iIzAwMDAwMCIvPgogICAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjAuMiIgZD0iTS0zNDQ1LjA1OC0yNTkyLjgwMmMtMC42'+
			'NjYtMS45NDMtMi44Mi0zLjEwMy01Ljc2Mi0zLjEwMyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC43NTEsMC0xLjUzNCwwLjA4Ni0yLjMyMiwwLjIzOWwwLjc4NiwyLjI5MWMwLjUyNC0wLjA4NSwxLjA0Mi0wLjEzNCwxLjUzNy0wLjEzNGMxLjgxNSwwLDMuMTg3LDAuNTgzLDMuNDk1LDEuNDg0JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAuMjIyLDAuNjQ2LTAuMDksMS41MTYtMC44NTQsMi4zODZjLTAuMjA2LDAuMjM1LTAuNDQ0LDAuNDYyLTAuNzAyLDAuNjgyYzAuMDU0LDAuMzMyLDAuMDEyLDAuNjgzLTAuMTUsMS4wMDVsLTAuNjEyLDEuMjIzJiN4ZDsmI3hhOyYjeD'+
			'k7JiN4OTsmI3g5OyYjeDk7bDEuMDU3LDAuNTI5YzAuODU4LTAuNTQ2LDEuNjA4LTEuMTc0LDIuMjA4LTEuODU3Qy0zNDQ1LjAxMi0yNTg5LjYxNC0zNDQ0LjU0My0yNTkxLjI5OS0zNDQ1LjA1OC0yNTkyLjgwMnoiIHN0cm9rZT0iIzAwMDAwMCIvPgogICA8L2c+CiAgPC9nPgogPC9nPgogPGcgaWQ9IkViZW5lXzEiLz4KIDxnIGlkPSJMYXllcl8yIi8+Cjwvc3ZnPgo=';
		me._gyro_off__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._gyro_off__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjAvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvVFIvMjAwMS9SRUMtU1ZHLTIwMDEwOTA0L0RURC9zdmcxMC5kdGQnPgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM6Z3JhcGg9Imh0dHA6Ly9ucy5hZG9iZS5jb20vR3JhcGhzLzEuMC8iIGhlaWdodD0iMzJweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLz'+
			'E5OTkveGxpbmsiIHk9IjBweCIgdmlld0JveD0iLTM0NjkuMjUgLTI1NzEuMzMzIDMyIDMyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6aT0iaHR0cDovL25zLmFkb2JlLmNvbS9BZG9iZUlsbHVzdHJhdG9yLzEwLjAvIiB4bWxuczphPSJodHRwOi8vbnMuYWRvYmUuY29tL0Fkb2JlU1ZHVmlld2VyRXh0ZW5zaW9ucy8zLjAvIiB3aWR0aD0iMzJweCIgdmVyc2lvbj0iMS4wIiB4bWxuczp4PSJodHRwOi8vbnMuYWRvYmUuY29tL0V4dGVuc2liaWxpdHkvMS4wLyIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAtMzQ2OS4y'+
			'NSAtMjU3MS4zMzMgMzIgMzIiPgogPGcgaWQ9IkxheWVyXzEiPgogIDxnPgogICA8ZyBvcGFjaXR5PSIwLjQiPgogICAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik0tMzQ1NC43NDItMjU1NS42NDVjMC4xODgsMC41NDcsMC43LDAuODkxLDEuMjQ4LDAuODkxJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAuMTQxLDAsMC4yODYtMC4wMjIsMC40MjctMC4wNzFjMC42ODgtMC4yMzYsMS4wNTUtMC45ODYsMC44MTktMS42NzRsLTIuMjcxLTYuNjI1Yy0wLjIzNS0wLjY4OS0wLjk4My0xLjA1NC0xLjY3NS0wLjgyJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeD'+
			'k7Yy0wLjY4OCwwLjIzNi0xLjA1NSwwLjk4Ni0wLjgxOSwxLjY3NEwtMzQ1NC43NDItMjU1NS42NDV6IiBzdHJva2U9IiMxQTE3MUIiLz4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNLTM0NTMuMjUtMjU2OS4wODNjLTcuNTgxLDAtMTMuNzUsNi4xNjgtMTMuNzUsMTMuNzQ5JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAsNy41ODIsNi4xNjgsMTMuNzUsMTMuNzUsMTMuNzVjNy41ODIsMCwxMy43NS02LjE2NywxMy43NS0xMy43NUMtMzQzOS41LTI1NjIuOTE1LTM0NDUuNjY4LTI1NjkuMDgzLTM0NTMuMjUtMjU2OS4wODN6JiN4ZDsmI3hhOyYjeDk7'+
			'JiN4OTsmI3g5OyYjeDk7IE0tMzQ1My4yNS0yNTQ0LjQ3OWMtNS45ODYsMC0xMC44NTctNC44Ny0xMC44NTctMTAuODU1YzAtNS45ODUsNC44NzEtMTAuODU2LDEwLjg1Ny0xMC44NTZjNS45ODcsMCwxMC44NTYsNC44NzEsMTAuODU2LDEwLjg1NiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O0MtMzQ0Mi4zOTMtMjU0OS4zNDgtMzQ0Ny4yNjMtMjU0NC40NzktMzQ1My4yNS0yNTQ0LjQ3OXoiIHN0cm9rZT0iIzFBMTcxQiIvPgogICAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik0tMzQ0OC4yOTgtMjU1MC4zNDFsLTIuMDY3LTEuMDM1bDEuMDM2LTIuMDY2JiN4ZD'+
			'smI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAuMjUyLTAuNTA2LDAuMDQ4LTEuMTItMC40NTctMS4zNzRjLTAuNTA1LTAuMjUyLTEuMTIyLTAuMDQ4LTEuMzc0LDAuNDU3bC0xLjAzNCwyLjA2NWwtMi4wNjYtMS4wMzQmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuNTA2LTAuMjUyLTEuMTIxLTAuMDQ4LTEuMzc1LDAuNDU3Yy0wLjI1MiwwLjUwNi0wLjA0NywxLjEyMiwwLjQ1NywxLjM3NGwyLjA2NiwxLjAzNGwtMS4wMzYsMi4wNjYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuMjUyLDAuNTA0LTAuMDQ3LDEuMTE5LDAuNDU3LDEuMzczYzAuMjUzLDAuMTI2LDAuNTM0'+
			'LDAuMTM4LDAuNzgzLDAuMDU1YzAuMjQ4LTAuMDgzLDAuNDY3LTAuMjYsMC41OTItMC41MTJsMS4wMzUtMi4wNjYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtsMi4wNjYsMS4wMzVjMC4yNTIsMC4xMjcsMC41MzEsMC4xMzksMC43NzksMC4wNTZjMC4yNDktMC4wODMsMC40NjgtMC4yNjEsMC41OTQtMC41MTMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtDLTM0NDcuNTktMjU0OS40NzQtMzQ0Ny43OTQtMjU1MC4wODktMzQ0OC4yOTgtMjU1MC4zNDF6IiBzdHJva2U9IiMxQTE3MUIiLz4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNLTM0NTUuNT'+
			'QtMjU1MC43NzZjLTAuMzI2LTAuMTY0LTAuNTc5LTAuNDE0LTAuNzUyLTAuNzA3JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0xLjgwNS0wLjA3Ni0zLjE1Mi0wLjY4OS0zLjQ2OS0xLjYxNWMtMC4yNDUtMC43MTIsMC4wOTktMS42NjksMC45MzktMi42MjZjMC42MzUtMC43MjQsMS41MTItMS4zOTUsMi41My0xLjk1MWwtMC44NjItMi41MiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMS40NTcsMC43MzYtMi43MTksMS42Ny0zLjY0OSwyLjczMWMtMS41MDMsMS43MTItMi4wMTksMy41NjYtMS40NTIsNS4yMmMwLjczMSwyLjEzNiwzLjEwMiwzLjQxMiw2LjMzOCwzLjQxMiYj'+
			'eGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLjM2MywwLDAuNzM0LTAuMDE4LDEuMTA5LTAuMDUxbDAuNjEyLTEuMjJMLTM0NTUuNTQtMjU1MC43NzZ6IiBzdHJva2U9IiMxQTE3MUIiLz4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNLTM0NDQuMjM4LTI1NTguNDE2Yy0wLjczMy0yLjEzOC0zLjEwMi0zLjQxMy02LjMzOC0zLjQxMyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC44MjYsMC0xLjY4NywwLjA5NS0yLjU1NSwwLjI2M2wwLjg2NCwyLjUyYzAuNTc2LTAuMDkzLDEuMTQ2LTAuMTQ3LDEuNjktMC4xNDdjMS45OTYsMCwzLjUwNSwwLj'+
			'Y0MSwzLjg0NCwxLjYzMiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLjI0NSwwLjcxLTAuMDk5LDEuNjY3LTAuOTM5LDIuNjI0Yy0wLjIyNywwLjI1OC0wLjQ4OCwwLjUwOC0wLjc3MiwwLjc1YzAuMDU5LDAuMzY1LDAuMDEzLDAuNzUxLTAuMTY1LDEuMTA2bC0wLjY3MywxLjM0NSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2wxLjE2MywwLjU4MmMwLjk0NC0wLjYwMSwxLjc2OS0xLjI5MSwyLjQyOS0yLjA0M0MtMzQ0NC4xODgtMjU1NC45MDktMzQ0My42NzItMjU1Ni43NjMtMzQ0NC4yMzgtMjU1OC40MTZ6IiBzdHJva2U9IiMxQTE3MUIiLz4KICAgPC9nPgogICA8Zz4KICAg'+
			'IDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIwLjIiIGQ9Ik0tMzQ1NC43NDItMjU1NS42NDVjMC4xODgsMC41NDcsMC43LDAuODkxLDEuMjQ4LDAuODkxJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAuMTQxLDAsMC4yODYtMC4wMjIsMC40MjctMC4wNzFjMC42ODgtMC4yMzYsMS4wNTUtMC45ODYsMC44MTktMS42NzRsLTIuMjcxLTYuNjI1Yy0wLjIzNS0wLjY4OS0wLjk4My0xLjA1NC0xLjY3NS0wLjgyJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0wLjY4OCwwLjIzNi0xLjA1NSwwLjk4Ni0wLjgxOSwxLjY3NEwtMzQ1NC43ND'+
			'ItMjU1NS42NDV6IiBzdHJva2U9IiMwMDAwMDAiLz4KICAgIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIwLjIiIGQ9Ik0tMzQ1My4yNS0yNTY5LjA4M2MtNy41ODEsMC0xMy43NSw2LjE2OC0xMy43NSwxMy43NDkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMCw3LjU4Miw2LjE2OCwxMy43NSwxMy43NSwxMy43NWM3LjU4MiwwLDEzLjc1LTYuMTY3LDEzLjc1LTEzLjc1Qy0zNDM5LjUtMjU2Mi45MTUtMzQ0NS42NjgtMjU2OS4wODMtMzQ1My4yNS0yNTY5LjA4M3omI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTsgTS0zNDUzLjI1LTI1'+
			'NDQuNDc5Yy01Ljk4NiwwLTEwLjg1Ny00Ljg3LTEwLjg1Ny0xMC44NTVjMC01Ljk4NSw0Ljg3MS0xMC44NTYsMTAuODU3LTEwLjg1NmM1Ljk4NywwLDEwLjg1Niw0Ljg3MSwxMC44NTYsMTAuODU2JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Qy0zNDQyLjM5My0yNTQ5LjM0OC0zNDQ3LjI2My0yNTQ0LjQ3OS0zNDUzLjI1LTI1NDQuNDc5eiIgc3Ryb2tlPSIjMDAwMDAwIi8+CiAgICA8cGF0aCBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMC4yIiBkPSJNLTM0NDguMjk4LTI1NTAuMzQxbC0yLjA2Ny0xLjAzNWwxLjAzNi0yLjA2NiYjeGQ7JiN4YTsmI3'+
			'g5OyYjeDk7JiN4OTsmI3g5O2MwLjI1Mi0wLjUwNiwwLjA0OC0xLjEyLTAuNDU3LTEuMzc0Yy0wLjUwNS0wLjI1Mi0xLjEyMi0wLjA0OC0xLjM3NCwwLjQ1N2wtMS4wMzQsMi4wNjVsLTIuMDY2LTEuMDM0JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0wLjUwNi0wLjI1Mi0xLjEyMS0wLjA0OC0xLjM3NSwwLjQ1N2MtMC4yNTIsMC41MDYtMC4wNDcsMS4xMjIsMC40NTcsMS4zNzRsMi4wNjYsMS4wMzRsLTEuMDM2LDIuMDY2JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0wLjI1MiwwLjUwNC0wLjA0NywxLjExOSwwLjQ1NywxLjM3M2MwLjI1MywwLjEyNiwwLjUzNCwwLjEzOCww'+
			'Ljc4MywwLjA1NWMwLjI0OC0wLjA4MywwLjQ2Ny0wLjI2LDAuNTkyLTAuNTEybDEuMDM1LTIuMDY2JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7bDIuMDY2LDEuMDM1YzAuMjUyLDAuMTI3LDAuNTMxLDAuMTM5LDAuNzc5LDAuMDU2YzAuMjQ5LTAuMDgzLDAuNDY4LTAuMjYxLDAuNTk0LTAuNTEzJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Qy0zNDQ3LjU5LTI1NDkuNDc0LTM0NDcuNzk0LTI1NTAuMDg5LTM0NDguMjk4LTI1NTAuMzQxeiIgc3Ryb2tlPSIjMDAwMDAwIi8+CiAgICA8cGF0aCBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMC4yIi'+
			'BkPSJNLTM0NTUuNTQtMjU1MC43NzZjLTAuMzI2LTAuMTY0LTAuNTc5LTAuNDE0LTAuNzUyLTAuNzA3JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0xLjgwNS0wLjA3Ni0zLjE1Mi0wLjY4OS0zLjQ2OS0xLjYxNWMtMC4yNDUtMC43MTIsMC4wOTktMS42NjksMC45MzktMi42MjZjMC42MzUtMC43MjQsMS41MTItMS4zOTUsMi41My0xLjk1MWwtMC44NjItMi41MiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMS40NTcsMC43MzYtMi43MTksMS42Ny0zLjY0OSwyLjczMWMtMS41MDMsMS43MTItMi4wMTksMy41NjYtMS40NTIsNS4yMmMwLjczMSwyLjEzNiwzLjEwMiwzLjQxMiw2'+
			'LjMzOCwzLjQxMiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLjM2MywwLDAuNzM0LTAuMDE4LDEuMTA5LTAuMDUxbDAuNjEyLTEuMjJMLTM0NTUuNTQtMjU1MC43NzZ6IiBzdHJva2U9IiMwMDAwMDAiLz4KICAgIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIwLjIiIGQ9Ik0tMzQ0NC4yMzgtMjU1OC40MTZjLTAuNzMzLTIuMTM4LTMuMTAyLTMuNDEzLTYuMzM4LTMuNDEzJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0wLjgyNiwwLTEuNjg3LDAuMDk1LTIuNTU1LDAuMjYzbDAuODY0LDIuNTJjMC41NzYtMC4wOTMsMS4xNDYtMC'+
			'4xNDcsMS42OS0wLjE0N2MxLjk5NiwwLDMuNTA1LDAuNjQxLDMuODQ0LDEuNjMyJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAuMjQ1LDAuNzEtMC4wOTksMS42NjctMC45MzksMi42MjRjLTAuMjI3LDAuMjU4LTAuNDg4LDAuNTA4LTAuNzcyLDAuNzVjMC4wNTksMC4zNjUsMC4wMTMsMC43NTEtMC4xNjUsMS4xMDZsLTAuNjczLDEuMzQ1JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7bDEuMTYzLDAuNTgyYzAuOTQ0LTAuNjAxLDEuNzY5LTEuMjkxLDIuNDI5LTIuMDQzQy0zNDQ0LjE4OC0yNTU0LjkwOS0zNDQzLjY3Mi0yNTU2Ljc2My0zNDQ0LjIzOC0yNTU4LjQxNnoiIHN0cm9r'+
			'ZT0iIzAwMDAwMCIvPgogICA8L2c+CiAgPC9nPgogPC9nPgogPGcgaWQ9IkViZW5lXzEiLz4KIDxnIGlkPSJMYXllcl8yIi8+Cjwvc3ZnPgo=';
		me._gyro_off__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="gyro_off";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._gyro_off.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gyro_off.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getUseGyro() == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._gyro_off.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._gyro_off.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._gyro_off.style[domTransition]='opacity 500ms ease 0ms';
				if (me._gyro_off.ggCurrentLogicStateAlpha == 0) {
					me._gyro_off.style.visibility=me._gyro_off.ggVisible?'inherit':'hidden';
					me._gyro_off.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._gyro_off.style.opacity == 0.0) { me._gyro_off.style.visibility="hidden"; } }, 505);
					me._gyro_off.style.opacity=0;
				}
			}
		}
		me._gyro_off.onclick=function (e) {
			if (player.transitionsDisabled) {
				me._gyro_off.style[domTransition]='none';
			} else {
				me._gyro_off.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._gyro_off.style.opacity='0';
			me._gyro_off.style.visibility='hidden';
			if (player.transitionsDisabled) {
				me._gyro_on.style[domTransition]='none';
			} else {
				me._gyro_on.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._gyro_on.style.opacity='1';
			me._gyro_on.style.visibility=me._gyro_on.ggVisible?'inherit':'hidden';
		}
		me._gyro_off.onmouseover=function (e) {
			me._gyro_off__img.style.visibility='hidden';
			me._gyro_off__imgo.style.visibility='inherit';
		}
		me._gyro_off.onmouseout=function (e) {
			me._gyro_off__img.style.visibility='inherit';
			me._gyro_off__imgo.style.visibility='hidden';
		}
		me._gyro_off.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._gyro.appendChild(me._gyro_off);
		me._controller_slider.appendChild(me._gyro);
		el=me._autorotate_buttons=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="autorotate_buttons";
		el.ggDx=64;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._autorotate_buttons.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._autorotate_buttons.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('opt_autorotate') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._autorotate_buttons.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._autorotate_buttons.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._autorotate_buttons.style[domTransition]='';
				if (me._autorotate_buttons.ggCurrentLogicStateVisible == 0) {
					me._autorotate_buttons.style.visibility=(Number(me._autorotate_buttons.style.opacity)>0||!me._autorotate_buttons.style.opacity)?'inherit':'hidden';
					me._autorotate_buttons.ggVisible=true;
				}
				else {
					me._autorotate_buttons.style.visibility="hidden";
					me._autorotate_buttons.ggVisible=false;
				}
			}
		}
		me._autorotate_buttons.onclick=function (e) {
			player.setUseGyro(false);
			player.toggleAutorotate();
		}
		me._autorotate_buttons.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._autorotate_start=document.createElement('div');
		els=me._autorotate_start__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgaGVpZ2h0PSIzMnB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMzIgMzIiIGJhc2VQcm9maWxlPSJiYXNpYyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3'+
			'ZnIiB4PSIwcHgiIGlkPSJMYXllcl8xIiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMzJweCIgdmVyc2lvbj0iMS4xIj4KIDxnIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2U9IiMzQzNDM0MiIG9wYWNpdHk9IjAuNCI+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0zLjUsMTZjMC02LjkwNCw1LjU5Ni0xMi41LDEyLjUtMTIuNWwwLDBjNi45MDQsMCwxMi40OTksNS41OTYsMTIuNSwxMi41bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC4wMDEsNi45MDQtNS41OTYsMTIuNDk5LTEyLjUsMTIuNWwwLDBDOS4wOTYsMjguNDk5LDMuNSwyMi45MDQsMy41LDE2TDMuNSwxNnogTTguODUz'+
			'LDguODU0JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0xLjgzMSwxLjgzMy0yLjk2LDQuMzUyLTIuOTYsNy4xNDdsMCwwYzAsMi43OTQsMS4xMjksNS4zMTQsMi45Niw3LjE0N2wwLDBjMS44MzIsMS44Myw0LjM1MiwyLjk2LDcuMTQ3LDIuOTZsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzIuNzk1LDAsNS4zMTQtMS4xMyw3LjE0Ny0yLjk2bDAsMGMxLjgzMS0xLjgzMywyLjk1OS00LjM1MywyLjk2LTcuMTQ3bDAsMGMtMC4wMDEtMi43OTUtMS4xMjktNS4zMTQtMi45Ni03LjE0N2wwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTEuODMzLTEuODMyLTQuMz'+
			'UzLTIuOTYtNy4xNDctMi45NmwwLDBDMTMuMjA1LDUuODk0LDEwLjY4Niw3LjAyMiw4Ljg1Myw4Ljg1NEw4Ljg1Myw4Ljg1NHoiLz4KICA8L2c+CiAgPHBhdGggZD0iTTE4LjA3LDIwLjAwMWMtMC4xNzQtMC42MzgsMC4yMDMtMS4yOTUsMC44NDEtMS40NjlsMCwwYzEuMTM0LTAuMzA2LDIuMDU1LTAuNzg5LDIuNjMzLTEuMzA1bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC41ODQtMC41MjYsMC43OTctMS4wMDgsMC43OTgtMS40NDRsMCwwYy0wLjAwMi0wLjMxLTAuMTAyLTAuNjE3LTAuMzU5LTAuOTdsMCwwYy0wLjI1Ni0wLjM1LTAuNjc4LTAuNzIxLTEuMjQ3LTEuMDQ1bDAsMCYjeGQ7'+
			'JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTEuMTM3LTAuNjU2LTIuODQtMS4xMS00LjczNS0xLjEwNmwwLDBjLTEuNDIyLTAuMDAxLTIuNzM1LDAuMjUtMy43ODMsMC42NTdsMCwwYy0xLjA1MSwwLjQwMi0xLjgxOSwwLjk2OS0yLjIwMSwxLjQ5NWwwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0wLjI1NywwLjM1NC0wLjM1NiwwLjY2MS0wLjM1OCwwLjk3bDAsMGMwLjAwMSwwLjI4OCwwLjA4NywwLjU3MSwwLjMwNiwwLjg5NWwwLDBjMC4yMTcsMC4zMjEsMC41NzUsMC42NjYsMS4wNjUsMC45NzhsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2gwLjAwMWMwLjU1NywwLjM1NiwwLjcyLDEuMD'+
			'k2LDAuMzY0LDEuNjUybDAsMGMtMC4zNTUsMC41NTctMS4wOTUsMC43Mi0xLjY1MiwwLjM2NGwwLDBjLTAuNzA2LTAuNDUxLTEuMzEtMC45OTQtMS43NTUtMS42NDZsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC40NDQtMC42NDctMC43MjMtMS40MjMtMC43MjItMi4yNDNsMCwwYy0wLjAwMS0wLjg4MywwLjMyMS0xLjcxMiwwLjgyNy0yLjM5MmwwLDBjMC41MDctMC42ODQsMS4xODgtMS4yNDQsMS45ODMtMS43bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMS41OTItMC45MDcsMy42NTctMS40MTksNS45MjUtMS40MjNsMCwwYzEuNywwLDMuMjg4LDAuMjkzLDQuNjQ2LDAuODE4'+
			'bDAsMGMxLjM1NSwwLjUyOSwyLjQ5OCwxLjI4MSwzLjI2MSwyLjMwNWwwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuNTA2LDAuNjgsMC44MjksMS41MDgsMC44MjYsMi4zOTJsMCwwYzAuMDAxLDEuMjg4LTAuNjY4LDIuNDEzLTEuNjAyLDMuMjMzbDAsMGMtMC45NDIsMC44MzItMi4xNzgsMS40MzgtMy41OTQsMS44MjVsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC4xMDQsMC4wMjgtMC4yMTEsMC4wNDItMC4zMTQsMC4wNDJsMCwwQzE4LjY5NiwyMC44ODQsMTguMjE0LDIwLjUzMywxOC4wNywyMC4wMDFMMTguMDcsMjAuMDAxeiIvPgogIDxwYXRoIGQ9Ik0xNi4zOTYsMjMuNj'+
			'IxbC0zLjM3My0zLjAzOWMtMC4yNTEtMC4yMjYtMC4zOTYtMC41NTEtMC4zOTYtMC44ODlsMCwwYzAtMC4zMzcsMC4xNDYtMC42NjMsMC4zOTYtMC44ODkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7bDAsMGwzLjM3NC0zLjAzOWMwLjQ5MS0wLjQ0MiwxLjI0Ny0wLjQwMywxLjY4OSwwLjA4OGwwLDBjMC40NDIsMC40OTEsMC40MDIsMS4yNDctMC4wODgsMS42ODlsMCwwbC0yLjM4NiwyLjE1bDIuMzg2LDIuMTQ5JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjQ5LDAuNDQyLDAuNTMsMS4xOTksMC4wODgsMS42OWwwLDBjLTAuMjM2LDAuMjYyLTAuNTYyLDAuMzk1LTAuODksMC4zOTVsMCwwQzE2'+
			'LjkxMiwyMy45MjgsMTYuNjI1LDIzLjgyNiwxNi4zOTYsMjMuNjIxJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0wxNi4zOTYsMjMuNjIxeiIvPgogPC9nPgogPGcgZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjAuMiIgc3Ryb2tlPSIjMDAwMDAwIj4KICA8Zz4KICAgPHBhdGggZD0iTTMuNSwxNmMwLTYuOTA0LDUuNTk2LTEyLjUsMTIuNS0xMi41bDAsMGM2LjkwNCwwLDEyLjQ5OSw1LjU5NiwxMi41LDEyLjVsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0wLjAwMSw2LjkwNC01LjU5NiwxMi40OTktMTIuNSwxMi41bDAsMEM5LjA5NiwyOC40OT'+
			'ksMy41LDIyLjkwNCwzLjUsMTZMMy41LDE2eiBNOC44NTMsOC44NTQmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTEuODMxLDEuODMzLTIuOTYsNC4zNTItMi45Niw3LjE0N2wwLDBjMCwyLjc5NCwxLjEyOSw1LjMxNCwyLjk2LDcuMTQ3bDAsMGMxLjgzMiwxLjgzLDQuMzUyLDIuOTYsNy4xNDcsMi45NmwwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMi43OTUsMCw1LjMxNC0xLjEzLDcuMTQ3LTIuOTZsMCwwYzEuODMxLTEuODMzLDIuOTU5LTQuMzUzLDIuOTYtNy4xNDdsMCwwYy0wLjAwMS0yLjc5NS0xLjEyOS01LjMxNC0yLjk2LTcuMTQ3bDAsMCYjeGQ7JiN4YTsmI3g5'+
			'OyYjeDk7JiN4OTsmI3g5O2MtMS44MzMtMS44MzItNC4zNTMtMi45Ni03LjE0Ny0yLjk2bDAsMEMxMy4yMDUsNS44OTQsMTAuNjg2LDcuMDIyLDguODUzLDguODU0TDguODUzLDguODU0eiIvPgogIDwvZz4KICA8cGF0aCBkPSJNMTguMDcsMjAuMDAxYy0wLjE3NC0wLjYzOCwwLjIwMy0xLjI5NSwwLjg0MS0xLjQ2OWwwLDBjMS4xMzQtMC4zMDYsMi4wNTUtMC43ODksMi42MzMtMS4zMDVsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjU4NC0wLjUyNiwwLjc5Ny0xLjAwOCwwLjc5OC0xLjQ0NGwwLDBjLTAuMDAyLTAuMzEtMC4xMDItMC42MTctMC4zNTktMC45N2wwLDBjLTAuMjU2LTAuMz'+
			'UtMC42NzgtMC43MjEtMS4yNDctMS4wNDVsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMS4xMzctMC42NTYtMi44NC0xLjExLTQuNzM1LTEuMTA2bDAsMGMtMS40MjItMC4wMDEtMi43MzUsMC4yNS0zLjc4MywwLjY1N2wwLDBjLTEuMDUxLDAuNDAyLTEuODE5LDAuOTY5LTIuMjAxLDEuNDk1bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTAuMjU3LDAuMzU0LTAuMzU2LDAuNjYxLTAuMzU4LDAuOTdsMCwwYzAuMDAxLDAuMjg4LDAuMDg3LDAuNTcxLDAuMzA2LDAuODk1bDAsMGMwLjIxNywwLjMyMSwwLjU3NSwwLjY2NiwxLjA2NSwwLjk3OGwwLDAmI3hkOyYjeGE7JiN4OTsmI3g5'+
			'OyYjeDk7aDAuMDAxYzAuNTU3LDAuMzU2LDAuNzIsMS4wOTYsMC4zNjQsMS42NTJsMCwwYy0wLjM1NSwwLjU1Ny0xLjA5NSwwLjcyLTEuNjUyLDAuMzY0bDAsMGMtMC43MDYtMC40NTEtMS4zMS0wLjk5NC0xLjc1NS0xLjY0NmwwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0wLjQ0NC0wLjY0Ny0wLjcyMy0xLjQyMy0wLjcyMi0yLjI0M2wwLDBjLTAuMDAxLTAuODgzLDAuMzIxLTEuNzEyLDAuODI3LTIuMzkybDAsMGMwLjUwNy0wLjY4NCwxLjE4OC0xLjI0NCwxLjk4My0xLjdsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MxLjU5Mi0wLjkwNywzLjY1Ny0xLjQxOSw1LjkyNS0xLjQyM2'+
			'wwLDBjMS43LDAsMy4yODgsMC4yOTMsNC42NDYsMC44MThsMCwwYzEuMzU1LDAuNTI5LDIuNDk4LDEuMjgxLDMuMjYxLDIuMzA1bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC41MDYsMC42OCwwLjgyOSwxLjUwOCwwLjgyNiwyLjM5MmwwLDBjMC4wMDEsMS4yODgtMC42NjgsMi40MTMtMS42MDIsMy4yMzNsMCwwYy0wLjk0MiwwLjgzMi0yLjE3OCwxLjQzOC0zLjU5NCwxLjgyNWwwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0wLjEwNCwwLjAyOC0wLjIxMSwwLjA0Mi0wLjMxNCwwLjA0MmwwLDBDMTguNjk2LDIwLjg4NCwxOC4yMTQsMjAuNTMzLDE4LjA3LDIwLjAwMUwxOC4wNywy'+
			'MC4wMDF6Ii8+CiAgPHBhdGggZD0iTTE2LjM5NiwyMy42MjFsLTMuMzczLTMuMDM5Yy0wLjI1MS0wLjIyNi0wLjM5Ni0wLjU1MS0wLjM5Ni0wLjg4OWwwLDBjMC0wLjMzNywwLjE0Ni0wLjY2MywwLjM5Ni0wLjg4OSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtsMCwwbDMuMzc0LTMuMDM5YzAuNDkxLTAuNDQyLDEuMjQ3LTAuNDAzLDEuNjg5LDAuMDg4bDAsMGMwLjQ0MiwwLjQ5MSwwLjQwMiwxLjI0Ny0wLjA4OCwxLjY4OWwwLDBsLTIuMzg2LDIuMTVsMi4zODYsMi4xNDkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuNDksMC40NDIsMC41MywxLjE5OSwwLjA4OCwxLjY5bDAsMGMtMC4yMzYsMC'+
			'4yNjItMC41NjIsMC4zOTUtMC44OSwwLjM5NWwwLDBDMTYuOTEyLDIzLjkyOCwxNi42MjUsMjMuODI2LDE2LjM5NiwyMy42MjEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7TDE2LjM5NiwyMy42MjF6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._autorotate_start__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._autorotate_start__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgaGVpZ2h0PSIzMnB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMzIgMzIiIGJhc2VQcm9maWxlPSJiYXNpYyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3'+
			'ZnIiB4PSIwcHgiIGlkPSJMYXllcl8xIiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMzJweCIgdmVyc2lvbj0iMS4xIj4KIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LDE2KSBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtMTYsLTE2KSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZT0iIzNDM0MzQyIgb3BhY2l0eT0iMC40Ij4KICA8Zz4KICAgPHBhdGggZD0iTTMuNSwxNmMwLTYuOTA0LDUuNTk2LTEyLjUsMTIuNS0xMi41bDAsMGM2LjkwNCwwLDEyLjQ5OSw1LjU5NiwxMi41LDEyLjVsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0wLjAwMSw2LjkwNC01LjU5NiwxMi40OTkt'+
			'MTIuNSwxMi41bDAsMEM5LjA5NiwyOC40OTksMy41LDIyLjkwNCwzLjUsMTZMMy41LDE2eiBNOC44NTMsOC44NTQmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTEuODMxLDEuODMzLTIuOTYsNC4zNTItMi45Niw3LjE0N2wwLDBjMCwyLjc5NCwxLjEyOSw1LjMxNCwyLjk2LDcuMTQ3bDAsMGMxLjgzMiwxLjgzLDQuMzUyLDIuOTYsNy4xNDcsMi45NmwwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMi43OTUsMCw1LjMxNC0xLjEzLDcuMTQ3LTIuOTZsMCwwYzEuODMxLTEuODMzLDIuOTU5LTQuMzUzLDIuOTYtNy4xNDdsMCwwYy0wLjAwMS0yLjc5NS0xLjEyOS01LjMxNC0yLj'+
			'k2LTcuMTQ3bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMS44MzMtMS44MzItNC4zNTMtMi45Ni03LjE0Ny0yLjk2bDAsMEMxMy4yMDUsNS44OTQsMTAuNjg2LDcuMDIyLDguODUzLDguODU0TDguODUzLDguODU0eiIvPgogIDwvZz4KICA8cGF0aCBkPSJNMTguMDcsMjAuMDAxYy0wLjE3NC0wLjYzOCwwLjIwMy0xLjI5NSwwLjg0MS0xLjQ2OWwwLDBjMS4xMzQtMC4zMDYsMi4wNTUtMC43ODksMi42MzMtMS4zMDVsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjU4NC0wLjUyNiwwLjc5Ny0xLjAwOCwwLjc5OC0xLjQ0NGwwLDBjLTAuMDAyLTAuMzEtMC4xMDItMC42MTct'+
			'MC4zNTktMC45N2wwLDBjLTAuMjU2LTAuMzUtMC42NzgtMC43MjEtMS4yNDctMS4wNDVsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMS4xMzctMC42NTYtMi44NC0xLjExLTQuNzM1LTEuMTA2bDAsMGMtMS40MjItMC4wMDEtMi43MzUsMC4yNS0zLjc4MywwLjY1N2wwLDBjLTEuMDUxLDAuNDAyLTEuODE5LDAuOTY5LTIuMjAxLDEuNDk1bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTAuMjU3LDAuMzU0LTAuMzU2LDAuNjYxLTAuMzU4LDAuOTdsMCwwYzAuMDAxLDAuMjg4LDAuMDg3LDAuNTcxLDAuMzA2LDAuODk1bDAsMGMwLjIxNywwLjMyMSwwLjU3NSwwLjY2NiwxLjA2NSwwLj'+
			'k3OGwwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7aDAuMDAxYzAuNTU3LDAuMzU2LDAuNzIsMS4wOTYsMC4zNjQsMS42NTJsMCwwYy0wLjM1NSwwLjU1Ny0xLjA5NSwwLjcyLTEuNjUyLDAuMzY0bDAsMGMtMC43MDYtMC40NTEtMS4zMS0wLjk5NC0xLjc1NS0xLjY0NmwwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0wLjQ0NC0wLjY0Ny0wLjcyMy0xLjQyMy0wLjcyMi0yLjI0M2wwLDBjLTAuMDAxLTAuODgzLDAuMzIxLTEuNzEyLDAuODI3LTIuMzkybDAsMGMwLjUwNy0wLjY4NCwxLjE4OC0xLjI0NCwxLjk4My0xLjdsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MxLjU5Mi0wLjkw'+
			'NywzLjY1Ny0xLjQxOSw1LjkyNS0xLjQyM2wwLDBjMS43LDAsMy4yODgsMC4yOTMsNC42NDYsMC44MThsMCwwYzEuMzU1LDAuNTI5LDIuNDk4LDEuMjgxLDMuMjYxLDIuMzA1bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC41MDYsMC42OCwwLjgyOSwxLjUwOCwwLjgyNiwyLjM5MmwwLDBjMC4wMDEsMS4yODgtMC42NjgsMi40MTMtMS42MDIsMy4yMzNsMCwwYy0wLjk0MiwwLjgzMi0yLjE3OCwxLjQzOC0zLjU5NCwxLjgyNWwwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0wLjEwNCwwLjAyOC0wLjIxMSwwLjA0Mi0wLjMxNCwwLjA0MmwwLDBDMTguNjk2LDIwLjg4NCwxOC4yMTQsMj'+
			'AuNTMzLDE4LjA3LDIwLjAwMUwxOC4wNywyMC4wMDF6Ii8+CiAgPHBhdGggZD0iTTE2LjM5NiwyMy42MjFsLTMuMzczLTMuMDM5Yy0wLjI1MS0wLjIyNi0wLjM5Ni0wLjU1MS0wLjM5Ni0wLjg4OWwwLDBjMC0wLjMzNywwLjE0Ni0wLjY2MywwLjM5Ni0wLjg4OSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtsMCwwbDMuMzc0LTMuMDM5YzAuNDkxLTAuNDQyLDEuMjQ3LTAuNDAzLDEuNjg5LDAuMDg4bDAsMGMwLjQ0MiwwLjQ5MSwwLjQwMiwxLjI0Ny0wLjA4OCwxLjY4OWwwLDBsLTIuMzg2LDIuMTVsMi4zODYsMi4xNDkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuNDksMC40NDIsMC41MywxLjE5'+
			'OSwwLjA4OCwxLjY5bDAsMGMtMC4yMzYsMC4yNjItMC41NjIsMC4zOTUtMC44OSwwLjM5NWwwLDBDMTYuOTEyLDIzLjkyOCwxNi42MjUsMjMuODI2LDE2LjM5NiwyMy42MjEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7TDE2LjM5NiwyMy42MjF6Ii8+CiA8L2c+CiA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNiwxNikgc2NhbGUoMS4xKSB0cmFuc2xhdGUoLTE2LC0xNikiIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIwLjIiIHN0cm9rZT0iIzAwMDAwMCI+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0zLjUsMTZjMC02LjkwNCw1LjU5Ni0xMi41LDEyLjUtMTIuNWwwLD'+
			'BjNi45MDQsMCwxMi40OTksNS41OTYsMTIuNSwxMi41bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC4wMDEsNi45MDQtNS41OTYsMTIuNDk5LTEyLjUsMTIuNWwwLDBDOS4wOTYsMjguNDk5LDMuNSwyMi45MDQsMy41LDE2TDMuNSwxNnogTTguODUzLDguODU0JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0xLjgzMSwxLjgzMy0yLjk2LDQuMzUyLTIuOTYsNy4xNDdsMCwwYzAsMi43OTQsMS4xMjksNS4zMTQsMi45Niw3LjE0N2wwLDBjMS44MzIsMS44Myw0LjM1MiwyLjk2LDcuMTQ3LDIuOTZsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzIuNzk1LDAs'+
			'NS4zMTQtMS4xMyw3LjE0Ny0yLjk2bDAsMGMxLjgzMS0xLjgzMywyLjk1OS00LjM1MywyLjk2LTcuMTQ3bDAsMGMtMC4wMDEtMi43OTUtMS4xMjktNS4zMTQtMi45Ni03LjE0N2wwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTEuODMzLTEuODMyLTQuMzUzLTIuOTYtNy4xNDctMi45NmwwLDBDMTMuMjA1LDUuODk0LDEwLjY4Niw3LjAyMiw4Ljg1Myw4Ljg1NEw4Ljg1Myw4Ljg1NHoiLz4KICA8L2c+CiAgPHBhdGggZD0iTTE4LjA3LDIwLjAwMWMtMC4xNzQtMC42MzgsMC4yMDMtMS4yOTUsMC44NDEtMS40NjlsMCwwYzEuMTM0LTAuMzA2LDIuMDU1LTAuNzg5LDIuNjMzLTEuMzA1bD'+
			'AsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC41ODQtMC41MjYsMC43OTctMS4wMDgsMC43OTgtMS40NDRsMCwwYy0wLjAwMi0wLjMxLTAuMTAyLTAuNjE3LTAuMzU5LTAuOTdsMCwwYy0wLjI1Ni0wLjM1LTAuNjc4LTAuNzIxLTEuMjQ3LTEuMDQ1bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTEuMTM3LTAuNjU2LTIuODQtMS4xMS00LjczNS0xLjEwNmwwLDBjLTEuNDIyLTAuMDAxLTIuNzM1LDAuMjUtMy43ODMsMC42NTdsMCwwYy0xLjA1MSwwLjQwMi0xLjgxOSwwLjk2OS0yLjIwMSwxLjQ5NWwwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0wLjI1NywwLjM1NC0wLjM1Niww'+
			'LjY2MS0wLjM1OCwwLjk3bDAsMGMwLjAwMSwwLjI4OCwwLjA4NywwLjU3MSwwLjMwNiwwLjg5NWwwLDBjMC4yMTcsMC4zMjEsMC41NzUsMC42NjYsMS4wNjUsMC45NzhsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2gwLjAwMWMwLjU1NywwLjM1NiwwLjcyLDEuMDk2LDAuMzY0LDEuNjUybDAsMGMtMC4zNTUsMC41NTctMS4wOTUsMC43Mi0xLjY1MiwwLjM2NGwwLDBjLTAuNzA2LTAuNDUxLTEuMzEtMC45OTQtMS43NTUtMS42NDZsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC40NDQtMC42NDctMC43MjMtMS40MjMtMC43MjItMi4yNDNsMCwwYy0wLjAwMS0wLjg4MywwLjMyMS0xLj'+
			'cxMiwwLjgyNy0yLjM5MmwwLDBjMC41MDctMC42ODQsMS4xODgtMS4yNDQsMS45ODMtMS43bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMS41OTItMC45MDcsMy42NTctMS40MTksNS45MjUtMS40MjNsMCwwYzEuNywwLDMuMjg4LDAuMjkzLDQuNjQ2LDAuODE4bDAsMGMxLjM1NSwwLjUyOSwyLjQ5OCwxLjI4MSwzLjI2MSwyLjMwNWwwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuNTA2LDAuNjgsMC44MjksMS41MDgsMC44MjYsMi4zOTJsMCwwYzAuMDAxLDEuMjg4LTAuNjY4LDIuNDEzLTEuNjAyLDMuMjMzbDAsMGMtMC45NDIsMC44MzItMi4xNzgsMS40MzgtMy41OTQsMS44MjVs'+
			'MCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC4xMDQsMC4wMjgtMC4yMTEsMC4wNDItMC4zMTQsMC4wNDJsMCwwQzE4LjY5NiwyMC44ODQsMTguMjE0LDIwLjUzMywxOC4wNywyMC4wMDFMMTguMDcsMjAuMDAxeiIvPgogIDxwYXRoIGQ9Ik0xNi4zOTYsMjMuNjIxbC0zLjM3My0zLjAzOWMtMC4yNTEtMC4yMjYtMC4zOTYtMC41NTEtMC4zOTYtMC44ODlsMCwwYzAtMC4zMzcsMC4xNDYtMC42NjMsMC4zOTYtMC44ODkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7bDAsMGwzLjM3NC0zLjAzOWMwLjQ5MS0wLjQ0MiwxLjI0Ny0wLjQwMywxLjY4OSwwLjA4OGwwLDBjMC40NDIsMC40OTEsMC40MD'+
			'IsMS4yNDctMC4wODgsMS42ODlsMCwwbC0yLjM4NiwyLjE1bDIuMzg2LDIuMTQ5JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjQ5LDAuNDQyLDAuNTMsMS4xOTksMC4wODgsMS42OWwwLDBjLTAuMjM2LDAuMjYyLTAuNTYyLDAuMzk1LTAuODksMC4zOTVsMCwwQzE2LjkxMiwyMy45MjgsMTYuNjI1LDIzLjgyNiwxNi4zOTYsMjMuNjIxJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0wxNi4zOTYsMjMuNjIxeiIvPgogPC9nPgo8L3N2Zz4K';
		me._autorotate_start__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="autorotate_start";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._autorotate_start.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._autorotate_start.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getIsAutorotating() == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._autorotate_start.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._autorotate_start.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._autorotate_start.style[domTransition]='opacity 500ms ease 0ms';
				if (me._autorotate_start.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._autorotate_start.style.opacity == 0.0) { me._autorotate_start.style.visibility="hidden"; } }, 505);
					me._autorotate_start.style.opacity=0;
				}
				else {
					me._autorotate_start.style.visibility=me._autorotate_start.ggVisible?'inherit':'hidden';
					me._autorotate_start.style.opacity=1;
				}
			}
		}
		me._autorotate_start.onmouseover=function (e) {
			me._autorotate_start__img.style.visibility='hidden';
			me._autorotate_start__imgo.style.visibility='inherit';
		}
		me._autorotate_start.onmouseout=function (e) {
			me._autorotate_start__img.style.visibility='inherit';
			me._autorotate_start__imgo.style.visibility='hidden';
		}
		me._autorotate_start.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._autorotate_buttons.appendChild(me._autorotate_start);
		el=me._autorotate_stop=document.createElement('div');
		els=me._autorotate_stop__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgaGVpZ2h0PSIzMnB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMzIgMzIiIGJhc2VQcm9maWxlPSJiYXNpYyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3'+
			'ZnIiB4PSIwcHgiIGlkPSJMYXllcl8xIiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMzJweCIgdmVyc2lvbj0iMS4xIj4KIDxnIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2U9IiMzQzNDM0MiIG9wYWNpdHk9IjAuNCI+CiAgPHBhdGggZD0iTTE2LDMuNUM5LjA5NiwzLjUsMy41LDkuMDk2LDMuNSwxNmMwLDYuOTA0LDUuNTk2LDEyLjUsMTIuNSwxMi41YzYuOTAzLDAsMTIuNDk5LTUuNTk2LDEyLjUtMTIuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7QzI4LjQ5OCw5LjA5NiwyMi45MDMsMy41LDE2LDMuNXogTTIzLjE0NiwyMy4xNDdjLTEuODMzLDEuODMxLTQuMzUyLDIuOTU5LTcuMTQ2LDIuOTYx'+
			'Yy0yLjc5Ni0wLjAwMi01LjMxNS0xLjEzLTcuMTQ3LTIuOTYxJiN4ZDsmI3hhOyYjeDk7JiN4OTtDNy4wMjEsMjEuMzE0LDUuODkzLDE4Ljc5NSw1Ljg5MiwxNmMwLjAwMS0yLjc5NSwxLjEzLTUuMzE0LDIuOTYxLTcuMTQ3YzEuODMzLTEuODMxLDQuMzUyLTIuOTU5LDcuMTQ3LTIuOTYmI3hkOyYjeGE7JiN4OTsmI3g5O2MyLjc5NSwwLjAwMSw1LjMxMywxLjEzLDcuMTQ2LDIuOTZjMS44MzEsMS44MzMsMi45Niw0LjM1MiwyLjk2LDcuMTQ3UzI0Ljk3OCwyMS4zMTQsMjMuMTQ2LDIzLjE0N3ogTTIzLjkwNywxMy4zOTImI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC43NjMtMS4wMjQtMS45MDYtMS43Nz'+
			'YtMy4yNjItMi4zMDVDMTkuMjg3LDEwLjU2MiwxNy43LDEwLjI3LDE2LDEwLjI2OWMtMi4yNjgsMC4wMDMtNC4zMzMsMC41MTYtNS45MjUsMS40MjQmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC43OTUsMC40NTYtMS40NzcsMS4wMTYtMS45ODMsMS43Yy0wLjUwNSwwLjY4LTAuODI4LDEuNTA4LTAuODI2LDIuMzkyYy0wLjAwMiwwLjgxOSwwLjI3NiwxLjU5NSwwLjcyMiwyLjI0MyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNDQ1LDAuNjUxLDEuMDQ5LDEuMTk0LDEuNzU1LDEuNjQ2YzAuMTk5LDAuMTI4LDAuNDIzLDAuMTg4LDAuNjQzLDAuMTg4YzAuMzk1LDAsMC43ODEtMC4xOTUsMS4wMDktMC41NTMm'+
			'I3hkOyYjeGE7JiN4OTsmI3g5O2MwLjM1Ni0wLjU1NywwLjE5My0xLjI5Ni0wLjM2My0xLjY1MWwtMC4wMDEtMC4wMDFjLTAuNDktMC4zMTItMC44NDgtMC42NTUtMS4wNjUtMC45NzdjLTAuMjE4LTAuMzI0LTAuMzA0LTAuNjA4LTAuMzA2LTAuODk2JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4wMDItMC4zMSwwLjEwMi0wLjYxNywwLjM1OC0wLjk3MWMwLjM4MS0wLjUyNSwxLjE1LTEuMDkyLDIuMi0xLjQ5NWMxLjA0OC0wLjQwNiwyLjM2MS0wLjY1OCwzLjc4My0wLjY1NyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzEuODk1LTAuMDAzLDMuNTk5LDAuNDUxLDQuNzM0LDEuMTA3YzAuNTY5LDAuMzI1LDAuOT'+
			'kyLDAuNjk2LDEuMjQ4LDEuMDQ1YzAuMjU4LDAuMzU0LDAuMzU2LDAuNjYxLDAuMzU4LDAuOTcxJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4wMDUsMC41MDMtMC4zMDUsMS4xMDUtMS4xMzUsMS43MTJjLTAuNTM2LDAuMzg3LTAuNjU2LDEuMTM1LTAuMjcxLDEuNjcxYzAuMzg3LDAuNTM1LDEuMTM1LDAuNjU2LDEuNjcxLDAuMjcxJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMS4yMTItMC44NjcsMi4xMjMtMi4xMywyLjEyNy0zLjY1M0MyNC43MzUsMTQuOSwyNC40MTIsMTQuMDcyLDIzLjkwNywxMy4zOTJ6IE0xOS4zNjQsMTYuMTgyYy0wLjQ2OC0wLjQ2Ny0xLjIyNi0wLjQ2Ny0xLjY5MiwwJiN4ZDsmI3hh'+
			'OyYjeDk7JiN4OTtsLTEuNTU3LDEuNTU4bC0xLjU1OC0xLjU1OGMtMC40NjctMC40NjctMS4yMjQtMC40NjctMS42OTEsMGMtMC40NjcsMC40NjctMC40NjcsMS4yMjUsMCwxLjY5MmwxLjU1NywxLjU1N2wtMS41NTcsMS41NTcmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC40NjcsMC40NjgtMC40NjcsMS4yMjYsMCwxLjY5MmMwLjIzMywwLjIzMywwLjU0LDAuMzUxLDAuODQ2LDAuMzUxYzAuMzA3LDAsMC42MTItMC4xMTcsMC44NDYtMC4zNTFsMS41NTgtMS41NThsMS41NTcsMS41NTgmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjIzMywwLjIzMywwLjU0LDAuMzUxLDAuODQ2LDAuMzUxYzAuMzA3LDAsMC'+
			'42MTItMC4xMTcsMC44NDctMC4zNTFjMC40NjctMC40NjcsMC40NjctMS4yMjUsMC0xLjY5MmwtMS41NTgtMS41NTdsMS41NTgtMS41NTcmI3hkOyYjeGE7JiN4OTsmI3g5O0MxOS44MzEsMTcuNDA2LDE5LjgzMSwxNi42NDgsMTkuMzY0LDE2LjE4MnoiLz4KIDwvZz4KIDxnIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIwLjIiIHN0cm9rZT0iIzAwMDAwMCI+CiAgPHBhdGggZD0iTTE2LDMuNUM5LjA5NiwzLjUsMy41LDkuMDk2LDMuNSwxNmMwLDYuOTA0LDUuNTk2LDEyLjUsMTIuNSwxMi41YzYuOTAzLDAsMTIuNDk5LTUuNTk2LDEyLjUtMTIuNSYjeGQ7JiN4'+
			'YTsmI3g5OyYjeDk7QzI4LjQ5OCw5LjA5NiwyMi45MDMsMy41LDE2LDMuNXogTTIzLjE0NiwyMy4xNDdjLTEuODMzLDEuODMxLTQuMzUyLDIuOTU5LTcuMTQ2LDIuOTYxYy0yLjc5Ni0wLjAwMi01LjMxNS0xLjEzLTcuMTQ3LTIuOTYxJiN4ZDsmI3hhOyYjeDk7JiN4OTtDNy4wMjEsMjEuMzE0LDUuODkzLDE4Ljc5NSw1Ljg5MiwxNmMwLjAwMS0yLjc5NSwxLjEzLTUuMzE0LDIuOTYxLTcuMTQ3YzEuODMzLTEuODMxLDQuMzUyLTIuOTU5LDcuMTQ3LTIuOTYmI3hkOyYjeGE7JiN4OTsmI3g5O2MyLjc5NSwwLjAwMSw1LjMxMywxLjEzLDcuMTQ2LDIuOTZjMS44MzEsMS44MzMsMi45Niw0LjM1MiwyLj'+
			'k2LDcuMTQ3UzI0Ljk3OCwyMS4zMTQsMjMuMTQ2LDIzLjE0N3ogTTIzLjkwNywxMy4zOTImI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC43NjMtMS4wMjQtMS45MDYtMS43NzYtMy4yNjItMi4zMDVDMTkuMjg3LDEwLjU2MiwxNy43LDEwLjI3LDE2LDEwLjI2OWMtMi4yNjgsMC4wMDMtNC4zMzMsMC41MTYtNS45MjUsMS40MjQmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC43OTUsMC40NTYtMS40NzcsMS4wMTYtMS45ODMsMS43Yy0wLjUwNSwwLjY4LTAuODI4LDEuNTA4LTAuODI2LDIuMzkyYy0wLjAwMiwwLjgxOSwwLjI3NiwxLjU5NSwwLjcyMiwyLjI0MyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNDQ1LDAu'+
			'NjUxLDEuMDQ5LDEuMTk0LDEuNzU1LDEuNjQ2YzAuMTk5LDAuMTI4LDAuNDIzLDAuMTg4LDAuNjQzLDAuMTg4YzAuMzk1LDAsMC43ODEtMC4xOTUsMS4wMDktMC41NTMmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjM1Ni0wLjU1NywwLjE5My0xLjI5Ni0wLjM2My0xLjY1MWwtMC4wMDEtMC4wMDFjLTAuNDktMC4zMTItMC44NDgtMC42NTUtMS4wNjUtMC45NzdjLTAuMjE4LTAuMzI0LTAuMzA0LTAuNjA4LTAuMzA2LTAuODk2JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4wMDItMC4zMSwwLjEwMi0wLjYxNywwLjM1OC0wLjk3MWMwLjM4MS0wLjUyNSwxLjE1LTEuMDkyLDIuMi0xLjQ5NWMxLjA0OC0wLjQwNi'+
			'wyLjM2MS0wLjY1OCwzLjc4My0wLjY1NyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzEuODk1LTAuMDAzLDMuNTk5LDAuNDUxLDQuNzM0LDEuMTA3YzAuNTY5LDAuMzI1LDAuOTkyLDAuNjk2LDEuMjQ4LDEuMDQ1YzAuMjU4LDAuMzU0LDAuMzU2LDAuNjYxLDAuMzU4LDAuOTcxJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4wMDUsMC41MDMtMC4zMDUsMS4xMDUtMS4xMzUsMS43MTJjLTAuNTM2LDAuMzg3LTAuNjU2LDEuMTM1LTAuMjcxLDEuNjcxYzAuMzg3LDAuNTM1LDEuMTM1LDAuNjU2LDEuNjcxLDAuMjcxJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMS4yMTItMC44NjcsMi4xMjMtMi4xMywyLjEyNy0zLjY1M0My'+
			'NC43MzUsMTQuOSwyNC40MTIsMTQuMDcyLDIzLjkwNywxMy4zOTJ6IE0xOS4zNjQsMTYuMTgyYy0wLjQ2OC0wLjQ2Ny0xLjIyNi0wLjQ2Ny0xLjY5MiwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtsLTEuNTU3LDEuNTU4bC0xLjU1OC0xLjU1OGMtMC40NjctMC40NjctMS4yMjQtMC40NjctMS42OTEsMGMtMC40NjcsMC40NjctMC40NjcsMS4yMjUsMCwxLjY5MmwxLjU1NywxLjU1N2wtMS41NTcsMS41NTcmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC40NjcsMC40NjgtMC40NjcsMS4yMjYsMCwxLjY5MmMwLjIzMywwLjIzMywwLjU0LDAuMzUxLDAuODQ2LDAuMzUxYzAuMzA3LDAsMC42MTItMC4xMTcsMC44ND'+
			'YtMC4zNTFsMS41NTgtMS41NThsMS41NTcsMS41NTgmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjIzMywwLjIzMywwLjU0LDAuMzUxLDAuODQ2LDAuMzUxYzAuMzA3LDAsMC42MTItMC4xMTcsMC44NDctMC4zNTFjMC40NjctMC40NjcsMC40NjctMS4yMjUsMC0xLjY5MmwtMS41NTgtMS41NTdsMS41NTgtMS41NTcmI3hkOyYjeGE7JiN4OTsmI3g5O0MxOS44MzEsMTcuNDA2LDE5LjgzMSwxNi42NDgsMTkuMzY0LDE2LjE4MnoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._autorotate_stop__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._autorotate_stop__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgaGVpZ2h0PSIzMnB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMzIgMzIiIGJhc2VQcm9maWxlPSJiYXNpYyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3'+
			'ZnIiB4PSIwcHgiIGlkPSJMYXllcl8xIiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMzJweCIgdmVyc2lvbj0iMS4xIj4KIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LDE2KSBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtMTYsLTE2KSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZT0iIzNDM0MzQyIgb3BhY2l0eT0iMC40Ij4KICA8cGF0aCBkPSJNMTYsMy41QzkuMDk2LDMuNSwzLjUsOS4wOTYsMy41LDE2YzAsNi45MDQsNS41OTYsMTIuNSwxMi41LDEyLjVjNi45MDMsMCwxMi40OTktNS41OTYsMTIuNS0xMi41JiN4ZDsmI3hhOyYjeDk7JiN4OTtDMjguNDk4LDkuMDk2LDIyLjkwMywzLjUs'+
			'MTYsMy41eiBNMjMuMTQ2LDIzLjE0N2MtMS44MzMsMS44MzEtNC4zNTIsMi45NTktNy4xNDYsMi45NjFjLTIuNzk2LTAuMDAyLTUuMzE1LTEuMTMtNy4xNDctMi45NjEmI3hkOyYjeGE7JiN4OTsmI3g5O0M3LjAyMSwyMS4zMTQsNS44OTMsMTguNzk1LDUuODkyLDE2YzAuMDAxLTIuNzk1LDEuMTMtNS4zMTQsMi45NjEtNy4xNDdjMS44MzMtMS44MzEsNC4zNTItMi45NTksNy4xNDctMi45NiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzIuNzk1LDAuMDAxLDUuMzEzLDEuMTMsNy4xNDYsMi45NmMxLjgzMSwxLjgzMywyLjk2LDQuMzUyLDIuOTYsNy4xNDdTMjQuOTc4LDIxLjMxNCwyMy4xNDYsMjMuMTQ3ei'+
			'BNMjMuOTA3LDEzLjM5MiYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjc2My0xLjAyNC0xLjkwNi0xLjc3Ni0zLjI2Mi0yLjMwNUMxOS4yODcsMTAuNTYyLDE3LjcsMTAuMjcsMTYsMTAuMjY5Yy0yLjI2OCwwLjAwMy00LjMzMywwLjUxNi01LjkyNSwxLjQyNCYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjc5NSwwLjQ1Ni0xLjQ3NywxLjAxNi0xLjk4MywxLjdjLTAuNTA1LDAuNjgtMC44MjgsMS41MDgtMC44MjYsMi4zOTJjLTAuMDAyLDAuODE5LDAuMjc2LDEuNTk1LDAuNzIyLDIuMjQzJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC40NDUsMC42NTEsMS4wNDksMS4xOTQsMS43NTUsMS42NDZjMC4xOTksMC4x'+
			'MjgsMC40MjMsMC4xODgsMC42NDMsMC4xODhjMC4zOTUsMCwwLjc4MS0wLjE5NSwxLjAwOS0wLjU1MyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMzU2LTAuNTU3LDAuMTkzLTEuMjk2LTAuMzYzLTEuNjUxbC0wLjAwMS0wLjAwMWMtMC40OS0wLjMxMi0wLjg0OC0wLjY1NS0xLjA2NS0wLjk3N2MtMC4yMTgtMC4zMjQtMC4zMDQtMC42MDgtMC4zMDYtMC44OTYmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjAwMi0wLjMxLDAuMTAyLTAuNjE3LDAuMzU4LTAuOTcxYzAuMzgxLTAuNTI1LDEuMTUtMS4wOTIsMi4yLTEuNDk1YzEuMDQ4LTAuNDA2LDIuMzYxLTAuNjU4LDMuNzgzLTAuNjU3JiN4ZDsmI3hhOyYjeD'+
			'k7JiN4OTtjMS44OTUtMC4wMDMsMy41OTksMC40NTEsNC43MzQsMS4xMDdjMC41NjksMC4zMjUsMC45OTIsMC42OTYsMS4yNDgsMS4wNDVjMC4yNTgsMC4zNTQsMC4zNTYsMC42NjEsMC4zNTgsMC45NzEmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjAwNSwwLjUwMy0wLjMwNSwxLjEwNS0xLjEzNSwxLjcxMmMtMC41MzYsMC4zODctMC42NTYsMS4xMzUtMC4yNzEsMS42NzFjMC4zODcsMC41MzUsMS4xMzUsMC42NTYsMS42NzEsMC4yNzEmI3hkOyYjeGE7JiN4OTsmI3g5O2MxLjIxMi0wLjg2NywyLjEyMy0yLjEzLDIuMTI3LTMuNjUzQzI0LjczNSwxNC45LDI0LjQxMiwxNC4wNzIsMjMuOTA3LDEzLjM5'+
			'MnogTTE5LjM2NCwxNi4xODJjLTAuNDY4LTAuNDY3LTEuMjI2LTAuNDY3LTEuNjkyLDAmI3hkOyYjeGE7JiN4OTsmI3g5O2wtMS41NTcsMS41NThsLTEuNTU4LTEuNTU4Yy0wLjQ2Ny0wLjQ2Ny0xLjIyNC0wLjQ2Ny0xLjY5MSwwYy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNSwwLDEuNjkybDEuNTU3LDEuNTU3bC0xLjU1NywxLjU1NyYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQ2NywwLjQ2OC0wLjQ2NywxLjIyNiwwLDEuNjkyYzAuMjMzLDAuMjMzLDAuNTQsMC4zNTEsMC44NDYsMC4zNTFjMC4zMDcsMCwwLjYxMi0wLjExNywwLjg0Ni0wLjM1MWwxLjU1OC0xLjU1OGwxLjU1NywxLjU1OCYjeGQ7Ji'+
			'N4YTsmI3g5OyYjeDk7YzAuMjMzLDAuMjMzLDAuNTQsMC4zNTEsMC44NDYsMC4zNTFjMC4zMDcsMCwwLjYxMi0wLjExNywwLjg0Ny0wLjM1MWMwLjQ2Ny0wLjQ2NywwLjQ2Ny0xLjIyNSwwLTEuNjkybC0xLjU1OC0xLjU1N2wxLjU1OC0xLjU1NyYjeGQ7JiN4YTsmI3g5OyYjeDk7QzE5LjgzMSwxNy40MDYsMTkuODMxLDE2LjY0OCwxOS4zNjQsMTYuMTgyeiIvPgogPC9nPgogPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIiBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMC4yIiBzdHJva2U9IiMwMDAw'+
			'MDAiPgogIDxwYXRoIGQ9Ik0xNiwzLjVDOS4wOTYsMy41LDMuNSw5LjA5NiwzLjUsMTZjMCw2LjkwNCw1LjU5NiwxMi41LDEyLjUsMTIuNWM2LjkwMywwLDEyLjQ5OS01LjU5NiwxMi41LTEyLjUmI3hkOyYjeGE7JiN4OTsmI3g5O0MyOC40OTgsOS4wOTYsMjIuOTAzLDMuNSwxNiwzLjV6IE0yMy4xNDYsMjMuMTQ3Yy0xLjgzMywxLjgzMS00LjM1MiwyLjk1OS03LjE0NiwyLjk2MWMtMi43OTYtMC4wMDItNS4zMTUtMS4xMy03LjE0Ny0yLjk2MSYjeGQ7JiN4YTsmI3g5OyYjeDk7QzcuMDIxLDIxLjMxNCw1Ljg5MywxOC43OTUsNS44OTIsMTZjMC4wMDEtMi43OTUsMS4xMy01LjMxNCwyLjk2MS03Lj'+
			'E0N2MxLjgzMy0xLjgzMSw0LjM1Mi0yLjk1OSw3LjE0Ny0yLjk2JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMi43OTUsMC4wMDEsNS4zMTMsMS4xMyw3LjE0NiwyLjk2YzEuODMxLDEuODMzLDIuOTYsNC4zNTIsMi45Niw3LjE0N1MyNC45NzgsMjEuMzE0LDIzLjE0NiwyMy4xNDd6IE0yMy45MDcsMTMuMzkyJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNzYzLTEuMDI0LTEuOTA2LTEuNzc2LTMuMjYyLTIuMzA1QzE5LjI4NywxMC41NjIsMTcuNywxMC4yNywxNiwxMC4yNjljLTIuMjY4LDAuMDAzLTQuMzMzLDAuNTE2LTUuOTI1LDEuNDI0JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNzk1LDAuNDU2LTEuNDc3'+
			'LDEuMDE2LTEuOTgzLDEuN2MtMC41MDUsMC42OC0wLjgyOCwxLjUwOC0wLjgyNiwyLjM5MmMtMC4wMDIsMC44MTksMC4yNzYsMS41OTUsMC43MjIsMi4yNDMmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjQ0NSwwLjY1MSwxLjA0OSwxLjE5NCwxLjc1NSwxLjY0NmMwLjE5OSwwLjEyOCwwLjQyMywwLjE4OCwwLjY0MywwLjE4OGMwLjM5NSwwLDAuNzgxLTAuMTk1LDEuMDA5LTAuNTUzJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4zNTYtMC41NTcsMC4xOTMtMS4yOTYtMC4zNjMtMS42NTFsLTAuMDAxLTAuMDAxYy0wLjQ5LTAuMzEyLTAuODQ4LTAuNjU1LTEuMDY1LTAuOTc3Yy0wLjIxOC0wLjMyNC0wLjMwNC'+
			'0wLjYwOC0wLjMwNi0wLjg5NiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMDAyLTAuMzEsMC4xMDItMC42MTcsMC4zNTgtMC45NzFjMC4zODEtMC41MjUsMS4xNS0xLjA5MiwyLjItMS40OTVjMS4wNDgtMC40MDYsMi4zNjEtMC42NTgsMy43ODMtMC42NTcmI3hkOyYjeGE7JiN4OTsmI3g5O2MxLjg5NS0wLjAwMywzLjU5OSwwLjQ1MSw0LjczNCwxLjEwN2MwLjU2OSwwLjMyNSwwLjk5MiwwLjY5NiwxLjI0OCwxLjA0NWMwLjI1OCwwLjM1NCwwLjM1NiwwLjY2MSwwLjM1OCwwLjk3MSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMDA1LDAuNTAzLTAuMzA1LDEuMTA1LTEuMTM1LDEuNzEyYy0wLjUzNiwwLjM4'+
			'Ny0wLjY1NiwxLjEzNS0wLjI3MSwxLjY3MWMwLjM4NywwLjUzNSwxLjEzNSwwLjY1NiwxLjY3MSwwLjI3MSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzEuMjEyLTAuODY3LDIuMTIzLTIuMTMsMi4xMjctMy42NTNDMjQuNzM1LDE0LjksMjQuNDEyLDE0LjA3MiwyMy45MDcsMTMuMzkyeiBNMTkuMzY0LDE2LjE4MmMtMC40NjgtMC40NjctMS4yMjYtMC40NjctMS42OTIsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7bC0xLjU1NywxLjU1OGwtMS41NTgtMS41NThjLTAuNDY3LTAuNDY3LTEuMjI0LTAuNDY3LTEuNjkxLDBjLTAuNDY3LDAuNDY3LTAuNDY3LDEuMjI1LDAsMS42OTJsMS41NTcsMS41NTdsLTEuNTU3LD'+
			'EuNTU3JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNDY3LDAuNDY4LTAuNDY3LDEuMjI2LDAsMS42OTJjMC4yMzMsMC4yMzMsMC41NCwwLjM1MSwwLjg0NiwwLjM1MWMwLjMwNywwLDAuNjEyLTAuMTE3LDAuODQ2LTAuMzUxbDEuNTU4LTEuNTU4bDEuNTU3LDEuNTU4JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4yMzMsMC4yMzMsMC41NCwwLjM1MSwwLjg0NiwwLjM1MWMwLjMwNywwLDAuNjEyLTAuMTE3LDAuODQ3LTAuMzUxYzAuNDY3LTAuNDY3LDAuNDY3LTEuMjI1LDAtMS42OTJsLTEuNTU4LTEuNTU3bDEuNTU4LTEuNTU3JiN4ZDsmI3hhOyYjeDk7JiN4OTtDMTkuODMxLDE3LjQwNiwxOS44MzEsMTYu'+
			'NjQ4LDE5LjM2NCwxNi4xODJ6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._autorotate_stop__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="autorotate_stop";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._autorotate_stop.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._autorotate_stop.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getIsAutorotating() == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._autorotate_stop.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._autorotate_stop.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._autorotate_stop.style[domTransition]='opacity 500ms ease 0ms';
				if (me._autorotate_stop.ggCurrentLogicStateAlpha == 0) {
					me._autorotate_stop.style.visibility=me._autorotate_stop.ggVisible?'inherit':'hidden';
					me._autorotate_stop.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._autorotate_stop.style.opacity == 0.0) { me._autorotate_stop.style.visibility="hidden"; } }, 505);
					me._autorotate_stop.style.opacity=0;
				}
			}
		}
		me._autorotate_stop.onmouseover=function (e) {
			me._autorotate_stop__img.style.visibility='hidden';
			me._autorotate_stop__imgo.style.visibility='inherit';
		}
		me._autorotate_stop.onmouseout=function (e) {
			me._autorotate_stop__img.style.visibility='inherit';
			me._autorotate_stop__imgo.style.visibility='hidden';
		}
		me._autorotate_stop.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._autorotate_buttons.appendChild(me._autorotate_stop);
		me._controller_slider.appendChild(me._autorotate_buttons);
		el=me._zoomout=document.createElement('div');
		els=me._zoomout__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgaGVpZ2h0PSIzMnB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMzIgMzIiIGJhc2VQcm9maWxlPSJiYXNpYyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3'+
			'ZnIiB4PSIwcHgiIGlkPSJMYXllcl8xIiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMzJweCIgdmVyc2lvbj0iMS4xIj4KIDxnIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2U9IiMzQzNDM0MiIG9wYWNpdHk9IjAuNCI+CiAgPHBhdGggZD0iTTIxLjc1OCwxNC44MDRIMTAuMjQxYy0wLjY2LDAtMS4xOTYsMC41MzUtMS4xOTYsMS4xOTZjMCwwLjY2MSwwLjUzNiwxLjE5NiwxLjE5NiwxLjE5NmgxMS41MTcmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuNjYxLDAsMS4xOTctMC41MzYsMS4xOTctMS4xOTZDMjIuOTU1LDE1LjMzOSwyMi40MTksMTQuODA0LDIxLjc1OCwxNC44MDR6IE0xNiwz'+
			'LjVDOS4wOTYsMy41LDMuNSw5LjA5NiwzLjUsMTYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAsNi45MDMsNS41OTYsMTIuNDk5LDEyLjUsMTIuNWM2LjkwMy0wLjAwMSwxMi40OTktNS41OTcsMTIuNS0xMi41QzI4LjQ5OSw5LjA5NiwyMi45MDMsMy41LDE2LDMuNXogTTIzLjE0NiwyMy4xNDYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0xLjgzMiwxLjgzMS00LjM1MiwyLjk2LTcuMTQ2LDIuOTZzLTUuMzE0LTEuMTI5LTcuMTQ2LTIuOTZDNy4wMjIsMjEuMzE0LDUuODk0LDE4Ljc5NSw1Ljg5MywxNiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC4wMDEtMi43OTUsMS4xMjktNS4zMTQsMi'+
			'45NjEtNy4xNDdjMS44MzMtMS44MzEsNC4zNTItMi45Niw3LjE0Ni0yLjk2MWMyLjc5NSwwLjAwMSw1LjMxMywxLjEzLDcuMTQ2LDIuOTYxJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MxLjgzMiwxLjgzMywyLjk2LDQuMzUyLDIuOTYxLDcuMTQ3QzI2LjEwNiwxOC43OTUsMjQuOTc5LDIxLjMxNCwyMy4xNDYsMjMuMTQ2eiIvPgogPC9nPgogPGcgZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjAuMiIgc3Ryb2tlPSIjMDAwMDAwIj4KICA8cGF0aCBkPSJNMjEuNzU4LDE0LjgwNEgxMC4yNDFjLTAuNjYsMC0xLjE5NiwwLjUzNS0xLjE5NiwxLjE5NmMwLDAuNjYx'+
			'LDAuNTM2LDEuMTk2LDEuMTk2LDEuMTk2aDExLjUxNyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC42NjEsMCwxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5NkMyMi45NTUsMTUuMzM5LDIyLjQxOSwxNC44MDQsMjEuNzU4LDE0LjgwNHogTTE2LDMuNUM5LjA5NiwzLjUsMy41LDkuMDk2LDMuNSwxNiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMCw2LjkwMyw1LjU5NiwxMi40OTksMTIuNSwxMi41YzYuOTAzLTAuMDAxLDEyLjQ5OS01LjU5NywxMi41LTEyLjVDMjguNDk5LDkuMDk2LDIyLjkwMywzLjUsMTYsMy41eiBNMjMuMTQ2LDIzLjE0NiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTEuODMyLD'+
			'EuODMxLTQuMzUyLDIuOTYtNy4xNDYsMi45NnMtNS4zMTQtMS4xMjktNy4xNDYtMi45NkM3LjAyMiwyMS4zMTQsNS44OTQsMTguNzk1LDUuODkzLDE2JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjAwMS0yLjc5NSwxLjEyOS01LjMxNCwyLjk2MS03LjE0N2MxLjgzMy0xLjgzMSw0LjM1Mi0yLjk2LDcuMTQ2LTIuOTYxYzIuNzk1LDAuMDAxLDUuMzEzLDEuMTMsNy4xNDYsMi45NjEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzEuODMyLDEuODMzLDIuOTYsNC4zNTIsMi45NjEsNy4xNDdDMjYuMTA2LDE4Ljc5NSwyNC45NzksMjEuMzE0LDIzLjE0NiwyMy4xNDZ6Ii8+CiA8L2c+Cjwvc3ZnPgo='+
			'';
		me._zoomout__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._zoomout__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgaGVpZ2h0PSIzMnB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMzIgMzIiIGJhc2VQcm9maWxlPSJiYXNpYyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3'+
			'ZnIiB4PSIwcHgiIGlkPSJMYXllcl8xIiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMzJweCIgdmVyc2lvbj0iMS4xIj4KIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LDE2KSBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtMTYsLTE2KSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZT0iIzNDM0MzQyIgb3BhY2l0eT0iMC40Ij4KICA8cGF0aCBkPSJNMjEuNzU4LDE0LjgwNEgxMC4yNDFjLTAuNjYsMC0xLjE5NiwwLjUzNS0xLjE5NiwxLjE5NmMwLDAuNjYxLDAuNTM2LDEuMTk2LDEuMTk2LDEuMTk2aDExLjUxNyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC42NjEsMCwxLjE5Ny0wLjUzNiwx'+
			'LjE5Ny0xLjE5NkMyMi45NTUsMTUuMzM5LDIyLjQxOSwxNC44MDQsMjEuNzU4LDE0LjgwNHogTTE2LDMuNUM5LjA5NiwzLjUsMy41LDkuMDk2LDMuNSwxNiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMCw2LjkwMyw1LjU5NiwxMi40OTksMTIuNSwxMi41YzYuOTAzLTAuMDAxLDEyLjQ5OS01LjU5NywxMi41LTEyLjVDMjguNDk5LDkuMDk2LDIyLjkwMywzLjUsMTYsMy41eiBNMjMuMTQ2LDIzLjE0NiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTEuODMyLDEuODMxLTQuMzUyLDIuOTYtNy4xNDYsMi45NnMtNS4zMTQtMS4xMjktNy4xNDYtMi45NkM3LjAyMiwyMS4zMTQsNS44OTQsMTguNzk1LD'+
			'UuODkzLDE2JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjAwMS0yLjc5NSwxLjEyOS01LjMxNCwyLjk2MS03LjE0N2MxLjgzMy0xLjgzMSw0LjM1Mi0yLjk2LDcuMTQ2LTIuOTYxYzIuNzk1LDAuMDAxLDUuMzEzLDEuMTMsNy4xNDYsMi45NjEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzEuODMyLDEuODMzLDIuOTYsNC4zNTIsMi45NjEsNy4xNDdDMjYuMTA2LDE4Ljc5NSwyNC45NzksMjEuMzE0LDIzLjE0NiwyMy4xNDZ6Ii8+CiA8L2c+CiA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNiwxNikgc2NhbGUoMS4xKSB0cmFuc2xhdGUoLTE2LC0xNikiIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0i'+
			'I2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIwLjIiIHN0cm9rZT0iIzAwMDAwMCI+CiAgPHBhdGggZD0iTTIxLjc1OCwxNC44MDRIMTAuMjQxYy0wLjY2LDAtMS4xOTYsMC41MzUtMS4xOTYsMS4xOTZjMCwwLjY2MSwwLjUzNiwxLjE5NiwxLjE5NiwxLjE5NmgxMS41MTcmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuNjYxLDAsMS4xOTctMC41MzYsMS4xOTctMS4xOTZDMjIuOTU1LDE1LjMzOSwyMi40MTksMTQuODA0LDIxLjc1OCwxNC44MDR6IE0xNiwzLjVDOS4wOTYsMy41LDMuNSw5LjA5NiwzLjUsMTYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAsNi45MDMsNS41OTYsMTIuNDk5LDEyLjUsMT'+
			'IuNWM2LjkwMy0wLjAwMSwxMi40OTktNS41OTcsMTIuNS0xMi41QzI4LjQ5OSw5LjA5NiwyMi45MDMsMy41LDE2LDMuNXogTTIzLjE0NiwyMy4xNDYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0xLjgzMiwxLjgzMS00LjM1MiwyLjk2LTcuMTQ2LDIuOTZzLTUuMzE0LTEuMTI5LTcuMTQ2LTIuOTZDNy4wMjIsMjEuMzE0LDUuODk0LDE4Ljc5NSw1Ljg5MywxNiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC4wMDEtMi43OTUsMS4xMjktNS4zMTQsMi45NjEtNy4xNDdjMS44MzMtMS44MzEsNC4zNTItMi45Niw3LjE0Ni0yLjk2MWMyLjc5NSwwLjAwMSw1LjMxMywxLjEzLDcuMTQ2LDIuOTYxJiN4'+
			'ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MxLjgzMiwxLjgzMywyLjk2LDQuMzUyLDIuOTYxLDcuMTQ3QzI2LjEwNiwxOC43OTUsMjQuOTc5LDIxLjMxNCwyMy4xNDYsMjMuMTQ2eiIvPgogPC9nPgo8L3N2Zz4K';
		me._zoomout__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="zoomout";
		el.ggDx=128;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._zoomout.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._zoomout.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('opt_zoom') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._zoomout.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._zoomout.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._zoomout.style[domTransition]='';
				if (me._zoomout.ggCurrentLogicStateVisible == 0) {
					me._zoomout.style.visibility=(Number(me._zoomout.style.opacity)>0||!me._zoomout.style.opacity)?'inherit':'hidden';
					me._zoomout.ggVisible=true;
				}
				else {
					me._zoomout.style.visibility="hidden";
					me._zoomout.ggVisible=false;
				}
			}
		}
		me._zoomout.onmouseover=function (e) {
			me._zoomout__img.style.visibility='hidden';
			me._zoomout__imgo.style.visibility='inherit';
		}
		me._zoomout.onmouseout=function (e) {
			me._zoomout__img.style.visibility='inherit';
			me._zoomout__imgo.style.visibility='hidden';
			me.elementMouseDown['zoomout']=false;
		}
		me._zoomout.onmousedown=function (e) {
			me.elementMouseDown['zoomout']=true;
		}
		me._zoomout.onmouseup=function (e) {
			me.elementMouseDown['zoomout']=false;
		}
		me._zoomout.ontouchend=function (e) {
			me.elementMouseDown['zoomout']=false;
		}
		me._zoomout.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._controller_slider.appendChild(me._zoomout);
		el=me._zoomin=document.createElement('div');
		els=me._zoomin__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgaGVpZ2h0PSIzMnB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMzIgMzIiIGJhc2VQcm9maWxlPSJiYXNpYyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3'+
			'ZnIiB4PSIwcHgiIGlkPSJMYXllcl8xIiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMzJweCIgdmVyc2lvbj0iMS4xIj4KIDxnIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2U9IiMzQzNDM0MiIG9wYWNpdHk9IjAuNCI+CiAgPHBhdGggZD0iTTIyLjA2MSwxNC44MDNoLTQuODY0VjkuOTM4YzAtMC42NjEtMC41MzYtMS4xOTctMS4xOTctMS4xOTdjLTAuNjYsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5N3Y0Ljg2NSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtIOS45MzhjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTdjMCwwLjY2LDAuNTM2LDEuMTk2LDEuMTk2LDEuMTk2aDQuODY2'+
			'djQuODY1YzAsMC42NiwwLjUzNiwxLjE5NiwxLjE5NiwxLjE5NiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC42NjEsMCwxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5NnYtNC44NjVoNC44NjRjMC42NjEsMCwxLjE5Ni0wLjUzNiwxLjE5Ni0xLjE5NkMyMy4yNTcsMTUuMzM5LDIyLjcyMiwxNC44MDMsMjIuMDYxLDE0LjgwM3omI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7IE0xNiwzLjVDOS4wOTYsMy41LDMuNSw5LjA5NiwzLjUsMTZjMCw2LjkwMyw1LjU5NiwxMi40OTksMTIuNSwxMi41YzYuOTAzLTAuMDAxLDEyLjQ5OS01LjU5NywxMi41LTEyLjUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7QzI4Lj'+
			'Q5OSw5LjA5NiwyMi45MDMsMy41LDE2LDMuNXogTTIzLjE0NiwyMy4xNDZjLTEuODMyLDEuODMxLTQuMzUyLDIuOTYtNy4xNDYsMi45NnMtNS4zMTQtMS4xMjktNy4xNDYtMi45NiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDNy4wMjIsMjEuMzE0LDUuODk0LDE4Ljc5NSw1Ljg5MywxNmMwLjAwMS0yLjc5NSwxLjEyOS01LjMxNCwyLjk2MS03LjE0N2MxLjgzMy0xLjgzMSw0LjM1Mi0yLjk2LDcuMTQ2LTIuOTYxJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MyLjc5NSwwLjAwMSw1LjMxMywxLjEzLDcuMTQ2LDIuOTYxYzEuODMyLDEuODMzLDIuOTYsNC4zNTIsMi45NjEsNy4xNDdDMjYuMTA2LDE4'+
			'Ljc5NSwyNC45NzksMjEuMzE0LDIzLjE0NiwyMy4xNDZ6Ii8+CiA8L2c+CiA8ZyBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMC4yIiBzdHJva2U9IiMwMDAwMDAiPgogIDxwYXRoIGQ9Ik0yMi4wNjEsMTQuODAzaC00Ljg2NFY5LjkzOGMwLTAuNjYxLTAuNTM2LTEuMTk3LTEuMTk3LTEuMTk3Yy0wLjY2LDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTd2NC44NjUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7SDkuOTM4Yy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk3YzAsMC42NiwwLjUzNiwxLjE5NiwxLjE5NiwxLjE5Nmg0Ljg2NnY0Ljg2NWMwLDAuNj'+
			'YsMC41MzYsMS4xOTYsMS4xOTYsMS4xOTYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuNjYxLDAsMS4xOTctMC41MzYsMS4xOTctMS4xOTZ2LTQuODY1aDQuODY0YzAuNjYxLDAsMS4xOTYtMC41MzYsMS4xOTYtMS4xOTZDMjMuMjU3LDE1LjMzOSwyMi43MjIsMTQuODAzLDIyLjA2MSwxNC44MDN6JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyBNMTYsMy41QzkuMDk2LDMuNSwzLjUsOS4wOTYsMy41LDE2YzAsNi45MDMsNS41OTYsMTIuNDk5LDEyLjUsMTIuNWM2LjkwMy0wLjAwMSwxMi40OTktNS41OTcsMTIuNS0xMi41JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0MyOC40OTksOS4wOTYsMjIu'+
			'OTAzLDMuNSwxNiwzLjV6IE0yMy4xNDYsMjMuMTQ2Yy0xLjgzMiwxLjgzMS00LjM1MiwyLjk2LTcuMTQ2LDIuOTZzLTUuMzE0LTEuMTI5LTcuMTQ2LTIuOTYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7QzcuMDIyLDIxLjMxNCw1Ljg5NCwxOC43OTUsNS44OTMsMTZjMC4wMDEtMi43OTUsMS4xMjktNS4zMTQsMi45NjEtNy4xNDdjMS44MzMtMS44MzEsNC4zNTItMi45Niw3LjE0Ni0yLjk2MSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMi43OTUsMC4wMDEsNS4zMTMsMS4xMyw3LjE0NiwyLjk2MWMxLjgzMiwxLjgzMywyLjk2LDQuMzUyLDIuOTYxLDcuMTQ3QzI2LjEwNiwxOC43OTUsMjQuOTc5LD'+
			'IxLjMxNCwyMy4xNDYsMjMuMTQ2eiIvPgogPC9nPgo8L3N2Zz4K';
		me._zoomin__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._zoomin__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgaGVpZ2h0PSIzMnB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMzIgMzIiIGJhc2VQcm9maWxlPSJiYXNpYyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3'+
			'ZnIiB4PSIwcHgiIGlkPSJMYXllcl8xIiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMzJweCIgdmVyc2lvbj0iMS4xIj4KIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LDE2KSBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtMTYsLTE2KSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZT0iIzNDM0MzQyIgb3BhY2l0eT0iMC40Ij4KICA8cGF0aCBkPSJNMjIuMDYxLDE0LjgwM2gtNC44NjRWOS45MzhjMC0wLjY2MS0wLjUzNi0xLjE5Ny0xLjE5Ny0xLjE5N2MtMC42NiwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk3djQuODY1JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0g5LjkzOGMtMC42NjEsMC0x'+
			'LjE5NiwwLjUzNi0xLjE5NiwxLjE5N2MwLDAuNjYsMC41MzYsMS4xOTYsMS4xOTYsMS4xOTZoNC44NjZ2NC44NjVjMCwwLjY2LDAuNTM2LDEuMTk2LDEuMTk2LDEuMTk2JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjY2MSwwLDEuMTk3LTAuNTM2LDEuMTk3LTEuMTk2di00Ljg2NWg0Ljg2NGMwLjY2MSwwLDEuMTk2LTAuNTM2LDEuMTk2LTEuMTk2QzIzLjI1NywxNS4zMzksMjIuNzIyLDE0LjgwMywyMi4wNjEsMTQuODAzeiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsgTTE2LDMuNUM5LjA5NiwzLjUsMy41LDkuMDk2LDMuNSwxNmMwLDYuOTAzLDUuNTk2LDEyLjQ5OSwxMi41LDEyLjVjNi45MD'+
			'MtMC4wMDEsMTIuNDk5LTUuNTk3LDEyLjUtMTIuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDMjguNDk5LDkuMDk2LDIyLjkwMywzLjUsMTYsMy41eiBNMjMuMTQ2LDIzLjE0NmMtMS44MzIsMS44MzEtNC4zNTIsMi45Ni03LjE0NiwyLjk2cy01LjMxNC0xLjEyOS03LjE0Ni0yLjk2JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0M3LjAyMiwyMS4zMTQsNS44OTQsMTguNzk1LDUuODkzLDE2YzAuMDAxLTIuNzk1LDEuMTI5LTUuMzE0LDIuOTYxLTcuMTQ3YzEuODMzLTEuODMxLDQuMzUyLTIuOTYsNy4xNDYtMi45NjEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzIuNzk1LDAuMDAxLDUuMzEzLDEu'+
			'MTMsNy4xNDYsMi45NjFjMS44MzIsMS44MzMsMi45Niw0LjM1MiwyLjk2MSw3LjE0N0MyNi4xMDYsMTguNzk1LDI0Ljk3OSwyMS4zMTQsMjMuMTQ2LDIzLjE0NnoiLz4KIDwvZz4KIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LDE2KSBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtMTYsLTE2KSIgZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjAuMiIgc3Ryb2tlPSIjMDAwMDAwIj4KICA8cGF0aCBkPSJNMjIuMDYxLDE0LjgwM2gtNC44NjRWOS45MzhjMC0wLjY2MS0wLjUzNi0xLjE5Ny0xLjE5Ny0xLjE5N2MtMC42NiwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk3dj'+
			'QuODY1JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0g5LjkzOGMtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5N2MwLDAuNjYsMC41MzYsMS4xOTYsMS4xOTYsMS4xOTZoNC44NjZ2NC44NjVjMCwwLjY2LDAuNTM2LDEuMTk2LDEuMTk2LDEuMTk2JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjY2MSwwLDEuMTk3LTAuNTM2LDEuMTk3LTEuMTk2di00Ljg2NWg0Ljg2NGMwLjY2MSwwLDEuMTk2LTAuNTM2LDEuMTk2LTEuMTk2QzIzLjI1NywxNS4zMzksMjIuNzIyLDE0LjgwMywyMi4wNjEsMTQuODAzeiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsgTTE2LDMuNUM5LjA5NiwzLjUsMy41LDku'+
			'MDk2LDMuNSwxNmMwLDYuOTAzLDUuNTk2LDEyLjQ5OSwxMi41LDEyLjVjNi45MDMtMC4wMDEsMTIuNDk5LTUuNTk3LDEyLjUtMTIuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDMjguNDk5LDkuMDk2LDIyLjkwMywzLjUsMTYsMy41eiBNMjMuMTQ2LDIzLjE0NmMtMS44MzIsMS44MzEtNC4zNTIsMi45Ni03LjE0NiwyLjk2cy01LjMxNC0xLjEyOS03LjE0Ni0yLjk2JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0M3LjAyMiwyMS4zMTQsNS44OTQsMTguNzk1LDUuODkzLDE2YzAuMDAxLTIuNzk1LDEuMTI5LTUuMzE0LDIuOTYxLTcuMTQ3YzEuODMzLTEuODMxLDQuMzUyLTIuOTYsNy4xNDYtMi45Nj'+
			'EmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzIuNzk1LDAuMDAxLDUuMzEzLDEuMTMsNy4xNDYsMi45NjFjMS44MzIsMS44MzMsMi45Niw0LjM1MiwyLjk2MSw3LjE0N0MyNi4xMDYsMTguNzk1LDI0Ljk3OSwyMS4zMTQsMjMuMTQ2LDIzLjE0NnoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._zoomin__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="zoomin";
		el.ggDx=96;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._zoomin.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._zoomin.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('opt_zoom') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._zoomin.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._zoomin.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._zoomin.style[domTransition]='';
				if (me._zoomin.ggCurrentLogicStateVisible == 0) {
					me._zoomin.style.visibility=(Number(me._zoomin.style.opacity)>0||!me._zoomin.style.opacity)?'inherit':'hidden';
					me._zoomin.ggVisible=true;
				}
				else {
					me._zoomin.style.visibility="hidden";
					me._zoomin.ggVisible=false;
				}
			}
		}
		me._zoomin.onmouseover=function (e) {
			me._zoomin__img.style.visibility='hidden';
			me._zoomin__imgo.style.visibility='inherit';
		}
		me._zoomin.onmouseout=function (e) {
			me._zoomin__img.style.visibility='inherit';
			me._zoomin__imgo.style.visibility='hidden';
			me.elementMouseDown['zoomin']=false;
		}
		me._zoomin.onmousedown=function (e) {
			me.elementMouseDown['zoomin']=true;
		}
		me._zoomin.onmouseup=function (e) {
			me.elementMouseDown['zoomin']=false;
		}
		me._zoomin.ontouchend=function (e) {
			me.elementMouseDown['zoomin']=false;
		}
		me._zoomin.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._controller_slider.appendChild(me._zoomin);
		me._controller.appendChild(me._controller_slider);
		el=me._container_2=document.createElement('div');
		el.ggId="Container 2";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 24px;';
		hs+='left : 15px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._container_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._text_1=document.createElement('div');
		els=me._text_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1";
		el.ggDy=6;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 10px;';
		hs+='left : 28px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 31px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #19ff00;';
		hs+='background: rgba(25,255,0,0);';
		hs+='border: 1px solid #ffffff;';
		hs+='border: 1px solid rgba(255,255,255,0);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='color: rgba(255,255,255,0.843137);';
		hs+='font-size: 9px;';
		hs+='font-weight: bold;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_1.ggUpdateText=function() {
			var hs=me.ggUserdata.title;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_1.ggUpdateText();
		player.addListener('changenode', function() {
			me._text_1.ggUpdateText();
		});
		el.appendChild(els);
		me._text_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_1.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getOS() == 1))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._text_1.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._text_1.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._text_1.style[domTransition]='left 0s, top 0s, ' + cssPrefix + 'transform 0s, color 0s';
				if (me._text_1.ggCurrentLogicStatePosition == 0) {
					me._text_1.style.left='55px';
					this.ggDy = -1;
					me._text_1.ggUpdatePosition(true);
				}
				else {
					me._text_1.style.left='28px';
					me._text_1.ggDy=6;
					me._text_1.ggUpdatePosition(true);
				}
			}
		}
		me._text_1.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getOS() == 1))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._text_1.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._text_1.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._text_1.style[domTransition]='left 0s, top 0s, ' + cssPrefix + 'transform 0s, color 0s';
				if (me._text_1.ggCurrentLogicStateScaling == 0) {
					me._text_1.ggParameter.sx = 1.5;
					me._text_1.ggParameter.sy = 1.5;
					me._text_1.style[domTransform]=parameterToTransform(me._text_1.ggParameter);
				}
				else {
					me._text_1.ggParameter.sx = 1;
					me._text_1.ggParameter.sy = 1;
					me._text_1.style[domTransform]=parameterToTransform(me._text_1.ggParameter);
				}
			}
		}
		me._text_1.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((me.ggUserdata.description == "DORMITOR"))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._text_1.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._text_1.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._text_1__text.style[domTransition]='left 0s, top 0s, ' + cssPrefix + 'transform 0s, color 0s';
				if (me._text_1.ggCurrentLogicStateTextColor == 0) {
					me._text_1__text.style.color="rgba(0,0,0,1)";
				}
				else {
					me._text_1__text.style.color="rgba(255,255,255,0.843137)";
				}
			}
		}
		me._text_1.onclick=function (e) {
			player.setVariableValue('maps', true);
		}
		me._text_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._container_2.appendChild(me._text_1);
		el=me._text_1_1=document.createElement('div');
		els=me._text_1_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1_1";
		el.ggDy=-4;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 21px;';
		hs+='left : 28px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 42px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #19ff00;';
		hs+='background: rgba(25,255,0,0);';
		hs+='border: 1px solid #ffffff;';
		hs+='border: 1px solid rgba(255,255,255,0);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 13px;';
		hs+='font-weight: bold;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_1_1.ggUpdateText=function() {
			var hs=me.ggUserdata.description;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_1_1.ggUpdateText();
		player.addListener('changenode', function() {
			me._text_1_1.ggUpdateText();
		});
		el.appendChild(els);
		me._text_1_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_1_1.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getOS() == 1))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._text_1_1.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._text_1_1.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._text_1_1.style[domTransition]='left 0s, top 0s, ' + cssPrefix + 'transform 0s, color 0s';
				if (me._text_1_1.ggCurrentLogicStatePosition == 0) {
					me._text_1_1.style.left='58px';
					this.ggDy = -16;
					me._text_1_1.ggUpdatePosition(true);
				}
				else {
					me._text_1_1.style.left='28px';
					me._text_1_1.ggDy=-4;
					me._text_1_1.ggUpdatePosition(true);
				}
			}
		}
		me._text_1_1.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getOS() == 1))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._text_1_1.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._text_1_1.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._text_1_1.style[domTransition]='left 0s, top 0s, ' + cssPrefix + 'transform 0s, color 0s';
				if (me._text_1_1.ggCurrentLogicStateScaling == 0) {
					me._text_1_1.ggParameter.sx = 1.5;
					me._text_1_1.ggParameter.sy = 1.5;
					me._text_1_1.style[domTransform]=parameterToTransform(me._text_1_1.ggParameter);
				}
				else {
					me._text_1_1.ggParameter.sx = 1;
					me._text_1_1.ggParameter.sy = 1;
					me._text_1_1.style[domTransform]=parameterToTransform(me._text_1_1.ggParameter);
				}
			}
		}
		me._text_1_1.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((me.ggUserdata.description == "DORMITOR"))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._text_1_1.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._text_1_1.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._text_1_1__text.style[domTransition]='left 0s, top 0s, ' + cssPrefix + 'transform 0s, color 0s';
				if (me._text_1_1.ggCurrentLogicStateTextColor == 0) {
					me._text_1_1__text.style.color="rgba(0,0,0,1)";
				}
				else {
					me._text_1_1__text.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me._text_1_1.onclick=function (e) {
			player.setVariableValue('maps', true);
		}
		me._text_1_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._container_2.appendChild(me._text_1_1);
		el=me._image_3=document.createElement('div');
		els=me._image_3__img=document.createElement('img');
		els.className='ggskin ggskin_image_3';
		hs=basePath + 'images/image_3.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 24px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_3.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getOS() == 1))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._image_3.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._image_3.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._image_3.style[domTransition]='left 0s, bottom 0s, ' + cssPrefix + 'transform 0s';
				if (me._image_3.ggCurrentLogicStatePosition == 0) {
					me._image_3.style.left='9px';
					me._image_3.style.bottom='9px';
				}
				else {
					me._image_3.style.left='0px';
					me._image_3.style.bottom='0px';
				}
			}
		}
		me._image_3.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getOS() == 1))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._image_3.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._image_3.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._image_3.style[domTransition]='left 0s, bottom 0s, ' + cssPrefix + 'transform 0s';
				if (me._image_3.ggCurrentLogicStateScaling == 0) {
					me._image_3.ggParameter.sx = 1.5;
					me._image_3.ggParameter.sy = 1.5;
					me._image_3.style[domTransform]=parameterToTransform(me._image_3.ggParameter);
				}
				else {
					me._image_3.ggParameter.sx = 1;
					me._image_3.ggParameter.sy = 1;
					me._image_3.style[domTransform]=parameterToTransform(me._image_3.ggParameter);
				}
			}
		}
		me._image_3.onclick=function (e) {
			player.setVariableValue('maps', true);
		}
		me._image_3.ggUpdatePosition=function (useTransition) {
		}
		me._container_2.appendChild(me._image_3);
		me._controller.appendChild(me._container_2);
		el=me._element_alpha_timer=document.createElement('div');
		el.ggTimestamp=this.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=1000;
		el.ggId="element_alpha_timer";
		el.ggDy=-19;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 457px;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._element_alpha_timer.ggIsActive=function() {
			return (me._element_alpha_timer.ggTimestamp + me._element_alpha_timer.ggTimeout) >= me.ggCurrentTime;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._element_alpha_timer.ggDeactivate=function () {
			player.setVariableValue('vis_timer', true);
		}
		me._element_alpha_timer.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._controller.appendChild(me._element_alpha_timer);
		me.divSkin.appendChild(me._controller);
		el=me.__3d_mouse=document.createElement('div');
		el.ggId="3D Mouse";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__3d_mouse.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__3d_mouse.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._float_cursor=document.createElement('div');
		el.ggId="float_cursor";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 50px;';
		hs+='left : 100px;';
		hs+='position : absolute;';
		hs+='top : 100px;';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:none;';
		hs+='transform-style: preserve-3d; cursor: none !important;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._float_cursor.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._float_cursor.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.hotspot.title == "hide")) && 
				((player.getOS() == 1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._float_cursor.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._float_cursor.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._float_cursor.style[domTransition]='';
				if (me._float_cursor.ggCurrentLogicStateVisible == 0) {
					me._float_cursor.style.visibility=(Number(me._float_cursor.style.opacity)>0||!me._float_cursor.style.opacity)?'inherit':'hidden';
					me._float_cursor.ggVisible=true;
				}
				else {
					me._float_cursor.style.visibility="hidden";
					me._float_cursor.ggVisible=false;
				}
			}
		}
		me._float_cursor.ggUpdatePosition=function (useTransition) {
		}
		el=me._ring_white=document.createElement('div');
		el.ggId="ring_white";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+=cssPrefix + 'border-radius : 999px;';
		hs+='border-radius : 999px;';
		hs+='border : 8px solid rgba(225,225,225,0.607843);';
		hs+='cursor : default;';
		hs+='height : 30px;';
		hs+='left : -25px;';
		hs+='position : absolute;';
		hs+='top : -25px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:none;';
		hs+='transform:translate3d(0px,0px,0px);';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ring_white.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ring_white.ggUpdatePosition=function (useTransition) {
		}
		me._float_cursor.appendChild(me._ring_white);
		me.__3d_mouse.appendChild(me._float_cursor);
		el=me._hide_system_cursor=document.createElement('div');
		el.ggId="hide_system_cursor";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		hs+='cursor: none !important; pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hide_system_cursor.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._hide_system_cursor.ggUpdatePosition=function (useTransition) {
		}
		me.__3d_mouse.appendChild(me._hide_system_cursor);
		el=me.__code=document.createElement('div');
		els=me.__code__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="_code";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 37px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 66px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 68px;';
		hs+='height: 39px;';
		hs+='pointer-events: none;';
		hs+='background: #ffffff;';
		hs+='border: 1px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 2px 0px 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="";
me._float_cursor.ggMousePos={ x: -1, y:0 };
me._float_cursor.ggUpdateCursor=function() {
	let el=me._float_cursor;
	let pt=player.getPositionAngles(el.ggMousePos.x,el.ggMousePos.y);
	let style=el.style;
	if ((pt.tilt>=0) || (el.ggMousePos.x<0)) {
		style.visibility="hidden";
	} else {
		let vs=player.getViewerSize();
		let dist=200; // size of the graphic
		let x=-dist*Math.tan((pt.tilt-90.0) * Math.PI/180.0);
		let hs="";
		let cp=player.getCurrentPerspective();
		hs += 'translate3d(0px,0px,-1000px) perspective(' + cp + 'px) ';
		hs += 'translate3d(0px,0px,' + cp + 'px) '; // move camera to the center
		hs += 'rotateX(' + (90.0+player.getTilt()).toFixed(10) + 'deg) ';
		hs += 'rotateZ(' + (player.getPan()+pt.pan).toFixed(10)  + 'deg) ';
		hs += 'translate3d(' + 0 + 'px,' + x + 'px,' + (-dist) + 'px) ';
		style.transform=hs;
		style.transformOrigin = '0% 0%';
		style.left = vs.width / 2 + "px";
		style.top = vs.height / 2 + "px";
		style.visibility=el.ggVisible?'inherit':'hidden';
	}
    if (me._hide_system_cursor) me._hide_system_cursor.style.visibility=style.visibility=='hidden'?'hidden':'inherit';
}
me.divSkin.addEventListener('mousemove', e => {
	let el=me._float_cursor;
	let rect = me.divSkin.getBoundingClientRect();
	el.ggMousePos.x=e.clientX - rect.left;
	el.ggMousePos.y=e.clientY - rect.top;
	el.ggUpdateCursor();
});
me.player.on("positionchanged", () => {
	me._float_cursor.ggUpdateCursor();
});
		el.appendChild(els);
		me.__code.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__code.ggUpdatePosition=function (useTransition) {
		}
		me.__3d_mouse.appendChild(me.__code);
		me.divSkin.appendChild(me.__3d_mouse);
		el=me._poligon_enter_ferestre_usi=document.createElement('div');
		el.ggId="Poligon Enter (ferestre usi)";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._poligon_enter_ferestre_usi.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._poligon_enter_ferestre_usi.onmouseover=function (e) {
			me.elementMouseOver['poligon_enter_ferestre_usi']=true;
		}
		me._poligon_enter_ferestre_usi.onmouseout=function (e) {
			me.elementMouseOver['poligon_enter_ferestre_usi']=false;
		}
		me._poligon_enter_ferestre_usi.ontouchend=function (e) {
			me.elementMouseOver['poligon_enter_ferestre_usi']=false;
		}
		me._poligon_enter_ferestre_usi.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me.divSkin.appendChild(me._poligon_enter_ferestre_usi);
		el=me._poligon_info_dialog=document.createElement('div');
		el.ggId="Poligon Info Dialog";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._poligon_info_dialog.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._poligon_info_dialog.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._poligoane=document.createElement('div');
		el.ggId="Poligoane";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._poligoane.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._poligoane.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('POLIGON') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('POLIGON') == false))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._poligoane.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._poligoane.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._poligoane.style[domTransition]='';
				if (me._poligoane.ggCurrentLogicStateVisible == 0) {
					me._poligoane.style.visibility=(Number(me._poligoane.style.opacity)>0||!me._poligoane.style.opacity)?'inherit':'hidden';
					me._poligoane.ggVisible=true;
				}
				else if (me._poligoane.ggCurrentLogicStateVisible == 1) {
					me._poligoane.style.visibility="hidden";
					me._poligoane.ggVisible=false;
				}
				else {
					me._poligoane.style.visibility="hidden";
					me._poligoane.ggVisible=false;
				}
			}
		}
		me._poligoane.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._rectangle_5=document.createElement('div');
		el.ggId="Rectangle 5";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : rgba(0,0,0,0.615686);';
		hs+='border : 1px solid rgba(0,0,0,0.568627);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_5.onclick=function (e) {
			player.setVariableValue('POLIGON', false);
		}
		me._rectangle_5.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._poligoane.appendChild(me._rectangle_5);
		el=me._rectangle_3=document.createElement('div');
		el.ggId="Rectangle 3";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 16px;';
		hs+='border-radius : 16px;';
		hs+='background : rgba(129,129,129,0.521569);';
		hs+='border : 2px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 350px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 500px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_3.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._titlu0=document.createElement('div');
		els=me._titlu0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Titlu";
		el.ggDx=0;
		el.ggDy=-141;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 34px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 200px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 202px;';
		hs+='height: 36px;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0);';
		hs+='border: 1px solid #000000;';
		hs+='border: 1px solid rgba(0,0,0,0);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 24px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 2px 0px 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._titlu0.ggUpdateText=function() {
			var hs=player.getVariableValue('poly_target2');
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._titlu0.ggUpdateText();
		player.addListener('timer', function() {
			me._titlu0.ggUpdateText();
		});
		el.appendChild(els);
		me._titlu0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._titlu0.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 2;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._rectangle_3.appendChild(me._titlu0);
		el=me._descriere2=document.createElement('div');
		els=me._descriere2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Descriere";
		el.ggDx=0;
		el.ggDy=12;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 250px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 470px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 472px;';
		hs+='height: 252px;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0);';
		hs+='border: 1px solid #000000;';
		hs+='border: 1px solid rgba(0,0,0,0);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 24px;';
		hs+='font-weight: 500;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 2px 0px 2px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._descriere2.ggUpdateText=function() {
			var hs=player.getVariableValue('poly_target');
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._descriere2.ggUpdateText();
		player.addListener('timer', function() {
			me._descriere2.ggUpdateText();
		});
		el.appendChild(els);
		me._descriere2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._descriere2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 2;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._rectangle_3.appendChild(me._descriere2);
		el=me._ht_info_close=document.createElement('div');
		els=me._ht_info_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBoZWlnaHQ9IjMycHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDMyIDMyIiB4bWxucz0iaHR0cDovL3'+
			'd3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgaWQ9IkxheWVyXzEiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZlcnNpb249IjEuMSIgd2lkdGg9IjMycHgiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIj4KIDxnIG9wYWNpdHk9IjAuNCI+CiAgPHBhdGggc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZT0iIzNDM0MzQyIgZD0iTTIxLjEzMiwxOS40MzlMMTcuNjkyLDE2bDMuNDQtMy40NGMwLjQ2OC0wLjQ2NywwLjQ2OC0xLjIyNSwwLTEuNjkzJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNDY3LTAuNDY3LTEuMjI1LTAuNDY3LTEuNjkxLDAuMDAxTDE2LDE0LjMwOGwtMy40NDEtMy40NDFj'+
			'LTAuNDY3LTAuNDY3LTEuMjI0LTAuNDY3LTEuNjkxLDAuMDAxJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNDY3LDAuNDY3LTAuNDY3LDEuMjI0LDAsMS42OUwxNC4zMDksMTZsLTMuNDQsMy40NGMtMC40NjcsMC40NjctMC40NjcsMS4yMjYsMCwxLjY5MmMwLjQ2NywwLjQ2NywxLjIyNiwwLjQ2NywxLjY5MiwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtsMy40NC0zLjQ0bDMuNDM5LDMuNDM5YzAuNDY4LDAuNDY4LDEuMjI1LDAuNDY4LDEuNjkxLDAuMDAxQzIxLjU5OSwyMC42NjQsMjEuNiwxOS45MDcsMjEuMTMyLDE5LjQzOXogTTI0LjgzOSw3LjE2MSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy00Ljg4Mi00Lj'+
			'g4Mi0xMi43OTYtNC44ODItMTcuNjc4LDBjLTQuODgxLDQuODgxLTQuODgxLDEyLjc5NSwwLDE3LjY3OGM0Ljg4MSw0Ljg4LDEyLjc5Niw0Ljg4LDE3LjY3OCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtDMjkuNzIsMTkuOTU2LDI5LjcyLDEyLjA0MiwyNC44MzksNy4xNjF6IE0xNiwyNi4xMDZjLTIuNTg5LTAuMDAxLTUuMTctMC45ODUtNy4xNDYtMi45NjFTNS44OTUsMTguNTksNS44OTQsMTYmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLTIuNTkxLDAuOTg0LTUuMTcsMi45Ni03LjE0N0MxMC44Myw2Ljg3OCwxMy40MDksNS44OTQsMTYsNS44OTRjMi41OTEsMC4wMDEsNS4xNywwLjk4NCw3LjE0NywyLjk1'+
			'OSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzEuOTc2LDEuOTc3LDIuOTU3LDQuNTU2LDIuOTYsNy4xNDdjLTAuMDAxLDIuNTkxLTAuOTg1LDUuMTY5LTIuOTYsNy4xNDhDMjEuMTY5LDI1LjEyMiwxOC41OTEsMjYuMTA2LDE2LDI2LjEwNnoiLz4KIDwvZz4KIDxnPgogIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIwLjIiIHN0cm9rZT0iIzAwMDAwMCIgZD0iTTIxLjEzMiwxOS40MzlMMTcuNjkyLDE2bDMuNDQtMy40NGMwLjQ2OC0wLjQ2NywwLjQ2OC0xLjIyNSwwLTEuNjkzJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNDY3LTAuNDY3LTEuMjI1LTAuNDY3LT'+
			'EuNjkxLDAuMDAxTDE2LDE0LjMwOGwtMy40NDEtMy40NDFjLTAuNDY3LTAuNDY3LTEuMjI0LTAuNDY3LTEuNjkxLDAuMDAxJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNDY3LDAuNDY3LTAuNDY3LDEuMjI0LDAsMS42OUwxNC4zMDksMTZsLTMuNDQsMy40NGMtMC40NjcsMC40NjctMC40NjcsMS4yMjYsMCwxLjY5MmMwLjQ2NywwLjQ2NywxLjIyNiwwLjQ2NywxLjY5MiwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtsMy40NC0zLjQ0bDMuNDM5LDMuNDM5YzAuNDY4LDAuNDY4LDEuMjI1LDAuNDY4LDEuNjkxLDAuMDAxQzIxLjU5OSwyMC42NjQsMjEuNiwxOS45MDcsMjEuMTMyLDE5LjQzOXogTTI0LjgzOSw3'+
			'LjE2MSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy00Ljg4Mi00Ljg4Mi0xMi43OTYtNC44ODItMTcuNjc4LDBjLTQuODgxLDQuODgxLTQuODgxLDEyLjc5NSwwLDE3LjY3OGM0Ljg4MSw0Ljg4LDEyLjc5Niw0Ljg4LDE3LjY3OCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtDMjkuNzIsMTkuOTU2LDI5LjcyLDEyLjA0MiwyNC44MzksNy4xNjF6IE0xNiwyNi4xMDZjLTIuNTg5LTAuMDAxLTUuMTctMC45ODUtNy4xNDYtMi45NjFTNS44OTUsMTguNTksNS44OTQsMTYmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLTIuNTkxLDAuOTg0LTUuMTcsMi45Ni03LjE0N0MxMC44Myw2Ljg3OCwxMy40MDksNS44OTQsMTYsNS44OT'+
			'RjMi41OTEsMC4wMDEsNS4xNywwLjk4NCw3LjE0NywyLjk1OSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzEuOTc2LDEuOTc3LDIuOTU3LDQuNTU2LDIuOTYsNy4xNDdjLTAuMDAxLDIuNTkxLTAuOTg1LDUuMTY5LTIuOTYsNy4xNDhDMjEuMTY5LDI1LjEyMiwxOC41OTEsMjYuMTA2LDE2LDI2LjEwNnoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_info_close__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_info_close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBoZWlnaHQ9IjMycHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDMyIDMyIiB4bWxucz0iaHR0cDovL3'+
			'd3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgaWQ9IkxheWVyXzEiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZlcnNpb249IjEuMSIgd2lkdGg9IjMycHgiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIj4KIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LDE2KSBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtMTYsLTE2KSIgb3BhY2l0eT0iMC40Ij4KICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlPSIjM0MzQzNDIiBkPSJNMjEuMTMyLDE5LjQzOUwxNy42OTMsMTZsMy40MzktMy40NGMwLjQ2OC0wLjQ2NywwLjQ2OC0xLjIyNiwwLjAwMS0xLjY5MyYjeGQ7JiN4YTsmI3g5OyYj'+
			'eDk7Yy0wLjQ2Ny0wLjQ2Ny0xLjIyNS0wLjQ2Ny0xLjY5MiwwLjAwMWwtMy40NCwzLjQ0bC0zLjQ0MS0zLjQ0MWMtMC40NjgtMC40NjgtMS4yMjUtMC40NjctMS42OTMsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNSwwLDEuNjkyTDE0LjMwOSwxNmwtMy40NCwzLjQ0Yy0wLjQ2NywwLjQ2Ni0wLjQ2NywxLjIyNCwwLDEuNjkxYzAuNDY3LDAuNDY3LDEuMjI2LDAuNDY3LDEuNjkyLDAuMDAxJiN4ZDsmI3hhOyYjeDk7JiN4OTtsMy40NC0zLjQ0bDMuNDQsMy40MzljMC40NjgsMC40NjgsMS4yMjQsMC40NjcsMS42OTEsMEMyMS41OTgsMjAuNjY0LDIxLjYsMTkuOT'+
			'A3LDIxLjEzMiwxOS40Mzl6IE0yNC44MzksNy4xNjEmI3hkOyYjeGE7JiN4OTsmI3g5O2MtNC44ODItNC44ODItMTIuNzk2LTQuODgyLTE3LjY3OCwwYy00Ljg4MSw0Ljg4MS00Ljg4MSwxMi43OTYsMCwxNy42NzhjNC44ODIsNC44ODEsMTIuNzk2LDQuODgxLDE3LjY3OCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtDMjkuNzIsMTkuOTU3LDI5LjcyMSwxMi4wNDMsMjQuODM5LDcuMTYxeiBNMTYsMjYuMTA2Yy0yLjU5LDAtNS4xNzEtMC45ODQtNy4xNDYtMi45NTlDNi44NzgsMjEuMTcsNS44OTUsMTguNTkxLDUuODk0LDE2JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0yLjU5MSwwLjk4My01LjE3LDIuOTU5'+
			'LTcuMTQ3YzEuOTc3LTEuOTc2LDQuNTU2LTIuOTU5LDcuMTQ4LTIuOTZjMi41OTEsMC4wMDEsNS4xNywwLjk4NCw3LjE0NywyLjk1OSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzEuOTc1LDEuOTc3LDIuOTU3LDQuNTU2LDIuOTU5LDcuMTQ3Yy0wLjAwMSwyLjU5Mi0wLjk4NCw1LjE3LTIuOTYsNy4xNDhDMjEuMTcsMjUuMTIzLDE4LjU5MSwyNi4xMDcsMTYsMjYuMTA2eiIvPgogPC9nPgogPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KICA8cGF0aCBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMC4yIi'+
			'BzdHJva2U9IiMwMDAwMDAiIGQ9Ik0yMS4xMzIsMTkuNDM5TDE3LjY5MywxNmwzLjQzOS0zLjQ0JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC40NjgtMC40NjcsMC40NjgtMS4yMjYsMC4wMDEtMS42OTNjLTAuNDY3LTAuNDY3LTEuMjI1LTAuNDY3LTEuNjkyLDAuMDAxbC0zLjQ0LDMuNDRsLTMuNDQxLTMuNDQxJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNDY4LTAuNDY4LTEuMjI1LTAuNDY3LTEuNjkzLDBjLTAuNDY3LDAuNDY3LTAuNDY3LDEuMjI1LDAsMS42OTJMMTQuMzA5LDE2bC0zLjQ0LDMuNDRjLTAuNDY3LDAuNDY2LTAuNDY3LDEuMjI0LDAsMS42OTEmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjQ2'+
			'NywwLjQ2NywxLjIyNiwwLjQ2NywxLjY5MiwwLjAwMWwzLjQ0LTMuNDRsMy40NCwzLjQzOWMwLjQ2OCwwLjQ2OCwxLjIyNCwwLjQ2NywxLjY5MSwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtDMjEuNTk4LDIwLjY2NCwyMS42LDE5LjkwNywyMS4xMzIsMTkuNDM5eiBNMjQuODM5LDcuMTYxYy00Ljg4Mi00Ljg4Mi0xMi43OTYtNC44ODItMTcuNjc4LDBjLTQuODgxLDQuODgxLTQuODgxLDEyLjc5NiwwLDE3LjY3OCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzQuODgyLDQuODgxLDEyLjc5Niw0Ljg4MSwxNy42NzgsMEMyOS43MiwxOS45NTcsMjkuNzIxLDEyLjA0MywyNC44MzksNy4xNjF6IE0xNiwyNi4xMDZjLT'+
			'IuNTksMC01LjE3MS0wLjk4NC03LjE0Ni0yLjk1OSYjeGQ7JiN4YTsmI3g5OyYjeDk7QzYuODc4LDIxLjE3LDUuODk1LDE4LjU5MSw1Ljg5NCwxNmMwLTIuNTkxLDAuOTgzLTUuMTcsMi45NTktNy4xNDdjMS45NzctMS45NzYsNC41NTYtMi45NTksNy4xNDgtMi45NiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzIuNTkxLDAuMDAxLDUuMTcsMC45ODQsNy4xNDcsMi45NTljMS45NzUsMS45NzcsMi45NTcsNC41NTYsMi45NTksNy4xNDdjLTAuMDAxLDIuNTkyLTAuOTg0LDUuMTctMi45Niw3LjE0OCYjeGQ7JiN4YTsmI3g5OyYjeDk7QzIxLjE3LDI1LjEyMywxOC41OTEsMjYuMTA3LDE2LDI2LjEwNnoiLz4K'+
			'IDwvZz4KPC9zdmc+Cg==';
		me._ht_info_close__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_info_close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_info_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_info_close.onclick=function (e) {
			player.setVariableValue('POLIGON', false);
		}
		me._ht_info_close.onmouseover=function (e) {
			me._ht_info_close__img.style.visibility='hidden';
			me._ht_info_close__imgo.style.visibility='inherit';
		}
		me._ht_info_close.onmouseout=function (e) {
			me._ht_info_close__img.style.visibility='inherit';
			me._ht_info_close__imgo.style.visibility='hidden';
		}
		me._ht_info_close.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_3.appendChild(me._ht_info_close);
		me._poligoane.appendChild(me._rectangle_3);
		me._poligon_info_dialog.appendChild(me._poligoane);
		el=me._poligon_info=document.createElement('div');
		el.ggId="Poligon Info";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._poligon_info.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._poligon_info.onclick=function (e) {
			player.setVariableValue('poly_target', player.hotspot.description);
			player.setVariableValue('poly_target2', player.hotspot.title);
			player.setVariableValue('POLIGON', true);
		}
		me._poligon_info.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._poligon_info_dialog.appendChild(me._poligon_info);
		me.divSkin.appendChild(me._poligon_info_dialog);
		el=me._google_maps=document.createElement('div');
		el.ggId="Google Maps";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._google_maps.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._google_maps.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('maps') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._google_maps.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._google_maps.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._google_maps.style[domTransition]='';
				if (me._google_maps.ggCurrentLogicStateVisible == 0) {
					me._google_maps.style.visibility=(Number(me._google_maps.style.opacity)>0||!me._google_maps.style.opacity)?'inherit':'hidden';
					me._google_maps.ggVisible=true;
				}
				else {
					me._google_maps.style.visibility="hidden";
					me._google_maps.ggVisible=false;
				}
			}
		}
		me._google_maps.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._rectangle_4=document.createElement('div');
		el.ggId="Rectangle 4";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : rgba(0,0,0,0.627451);';
		hs+='border : 1px solid rgba(0,0,0,0.627451);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_4.onclick=function (e) {
			player.setVariableValue('maps', false);
		}
		me._rectangle_4.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._google_maps.appendChild(me._rectangle_4);
		el=me._container_10=document.createElement('div');
		el.ggId="Container 1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 50%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._container_10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_10.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._iframe_3d0=document.createElement('div');
		els=me._iframe_3d0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="iframe_3d";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 95%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 95%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0.705882);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,0);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		hs+="border-radius: 50px 15px 50px 15px;";
		els.setAttribute('style',hs);
		els.innerHTML="<iframe width=\"100%\" height=\"100%\" marginheight=\"0\" marginwidth=\"0\" frameborder=\"0\" style=\"float:left; margin-left:0px\" allowfullscreen=\"true\" webkitallowfullscreen=\"true\" mozallowfullscreen=\"true\" src=\"https:\/\/maps.google.com\/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=bucuresti+(Bucuresti)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed\"><a href=\"https:\/\/www.gps.ie\/\">gps vehicle tracker<\/a><\/iframe>";
		el.appendChild(els);
		me._iframe_3d0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._iframe_3d0.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._container_10.appendChild(me._iframe_3d0);
		el=me._info_popup_close0=document.createElement('div');
		els=me._info_popup_close0__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB5PSIwcHgiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIGJhc2VQcm9maWxlPSJ0aW55IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgaWQ9IkxheWVyXzEiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZlcnNpb249IjEuMSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xMzUuMywzNTcuM2MtMjEuOS0yMS45LTU3LjUtMjEuOS03OS40LDBjLTIxLjksMjEuOS0yMS45LDU3LjUsMCw3OS40YzIxLjksMjEuOSw1Ny41LDIxLjksNzkuNCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtTLTExMy40LDM3OS4yLTEzNS4zLDM1Ny4zeiBNLTE0NS44LDQxMi43YzAuOCwwLjgsMC44LDEuNS0wLjEsMi40bC0xMC45LDEwLjljLTAuNCwwLjQtMC44LDAuNS0xLjMsMC41Yy0wLjUsMC0wLjktMC4xLTEuMS0wLjQmI3hkOyYjeGE7JiN4OTsmI3g5O2wtMTUuOC0xNS44bC0xNS43LDE1LjdjLTAuNCwwLjQtMC44LDAuNS0x'+
			'LjMsMC41cy0wLjktMC4xLTEuMS0wLjRsLTExLjEtMTEuMWMtMC4zLTAuMy0wLjQtMC42LTAuNC0xLjFjMC0wLjUsMC4xLTAuOSwwLjUtMS4zJiN4ZDsmI3hhOyYjeDk7JiN4OTtsMTUuNy0xNS43bC0xNS44LTE1LjhjLTAuMy0wLjMtMC40LTAuNi0wLjQtMS4xYzAtMC41LDAuMS0wLjksMC41LTEuM2wxMC45LTEwLjljMC45LTAuOSwxLjctMC45LDIuNC0wLjFsMTUuOCwxNS44bDE1LjctMTUuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuOS0wLjksMS43LTAuOSwyLjQtMC4xbDExLjEsMTEuMWMwLjgsMC44LDAuOCwxLjUtMC4xLDIuNGwtMTUuNywxNS43TC0xNDUuOCw0MTIuN3oiLz4KIDwvZz4KID'+
			'xnIGlkPSJMYXllcl8yIj4KICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE2MS42LDM5Ni45bDE1LjgsMTUuOGMwLjgsMC44LDAuOCwxLjUtMC4xLDIuNGwtMTAuOSwxMC45Yy0wLjQsMC40LTAuOCwwLjUtMS4zLDAuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjUsMC0wLjktMC4xLTEuMS0wLjRsLTE1LjgtMTUuOGwtMTUuNywxNS43Yy0wLjQsMC40LTAuOCwwLjUtMS4zLDAuNXMtMC45LTAuMS0xLjEtMC40bC0xMS4xLTExLjFjLTAuMy0wLjMtMC40LTAuNi0wLjQtMS4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0wLjUsMC4xLTAuOSwwLjUtMS4zbDE1LjctMTUuN2wtMTUuOC0xNS44Yy0wLjMt'+
			'MC4zLTAuNC0wLjYtMC40LTEuMWMwLTAuNSwwLjEtMC45LDAuNS0xLjNsMTAuOS0xMC45YzAuOS0wLjksMS43LTAuOSwyLjQtMC4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtsMTUuOCwxNS44bDE1LjctMTUuN2MwLjktMC45LDEuNy0wLjksMi40LTAuMWwxMS4xLDExLjFjMC44LDAuOCwwLjgsMS41LTAuMSwyLjRMLTE2MS42LDM5Ni45eiIvPgogPC9nPgo8L3N2Zz4K';
		me._info_popup_close0__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._info_popup_close0__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB5PSIwcHgiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIGJhc2VQcm9maWxlPSJ0aW55IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgaWQ9IkxheWVyXzEiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZlcnNpb249IjEuMSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xMzAuOSwzNTIuOWMtMjQuNC0yNC40LTYzLjgtMjQuNC04OC4yLDBjLTI0LjQsMjQuNC0yNC40LDYzLjgsMCw4OC4yYzI0LjQsMjQuNCw2My44LDI0LjQsODguMiwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtTLTEwNi41LDM3Ny4zLTEzMC45LDM1Mi45eiBNLTE0Mi41LDQxNC41YzAuOCwwLjgsMC44LDEuNy0wLjEsMi43bC0xMi4yLDEyLjJjLTAuNCwwLjQtMC44LDAuNi0xLjQsMC42Yy0wLjYsMC0xLTAuMS0xLjMtMC40JiN4ZDsmI3hhOyYjeDk7JiN4OTtsLTE3LjUtMTcuNWwtMTcuNCwxNy40Yy0wLjQsMC40LTAuOCwwLjYtMS40'+
			'LDAuNmMtMC42LDAtMS0wLjEtMS4zLTAuNGwtMTIuMy0xMi4zYy0wLjMtMC4zLTAuNC0wLjctMC40LTEuM2MwLTAuNiwwLjEtMSwwLjYtMS40JiN4ZDsmI3hhOyYjeDk7JiN4OTtsMTcuNC0xNy40bC0xNy41LTE3LjVjLTAuMy0wLjMtMC40LTAuNy0wLjQtMS4zYzAtMC42LDAuMS0xLDAuNi0xLjRsMTIuMi0xMi4yYzEtMSwxLjgtMSwyLjctMC4xbDE3LjUsMTcuNWwxNy40LTE3LjQmI3hkOyYjeGE7JiN4OTsmI3g5O2MxLTEsMS44LTEsMi43LTAuMWwxMi4zLDEyLjNjMC44LDAuOCwwLjgsMS43LTAuMSwyLjdsLTE3LjQsMTcuNEwtMTQyLjUsNDE0LjV6Ii8+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMi'+
			'I+CiAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNjAuMSwzOTYuOWwxNy41LDE3LjVjMC44LDAuOCwwLjgsMS43LTAuMSwyLjdsLTEyLjIsMTIuMmMtMC40LDAuNC0wLjgsMC42LTEuNCwwLjYmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC42LDAtMS0wLjEtMS4zLTAuNGwtMTcuNS0xNy41bC0xNy40LDE3LjRjLTAuNCwwLjQtMC44LDAuNi0xLjQsMC42Yy0wLjYsMC0xLTAuMS0xLjMtMC40bC0xMi4zLTEyLjNjLTAuMy0wLjMtMC40LTAuNy0wLjQtMS4zJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0wLjYsMC4xLTEsMC42LTEuNGwxNy40LTE3LjRsLTE3LjUtMTcuNWMtMC4zLTAuMy0wLjQtMC43LTAu'+
			'NC0xLjNjMC0wLjYsMC4xLTEsMC42LTEuNGwxMi4yLTEyLjJjMS0xLDEuOC0xLDIuNy0wLjFsMTcuNSwxNy41JiN4ZDsmI3hhOyYjeDk7JiN4OTtsMTcuNC0xNy40YzEtMSwxLjgtMSwyLjctMC4xbDEyLjMsMTIuM2MwLjgsMC44LDAuOCwxLjctMC4xLDIuN0wtMTYwLjEsMzk2Ljl6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._info_popup_close0__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="info_popup_close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 20px;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._info_popup_close0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_popup_close0.onclick=function (e) {
			player.setVariableValue('maps', false);
		}
		me._info_popup_close0.onmouseover=function (e) {
			me._info_popup_close0__img.style.visibility='hidden';
			me._info_popup_close0__imgo.style.visibility='inherit';
		}
		me._info_popup_close0.onmouseout=function (e) {
			me._info_popup_close0__img.style.visibility='inherit';
			me._info_popup_close0__imgo.style.visibility='hidden';
		}
		me._info_popup_close0.ggUpdatePosition=function (useTransition) {
		}
		me._container_10.appendChild(me._info_popup_close0);
		me._google_maps.appendChild(me._container_10);
		me.divSkin.appendChild(me._google_maps);
		el=me._startscreen_pc=document.createElement('div');
		el.ggId="Startscreen PC";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._startscreen_pc.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._startscreen_pc.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('stertscreen_pc') == true)) && 
				((player.getOS() == 1)) || 
				((player.getOS() == 2)) || 
				((player.getOS() == 3)) || 
				((player.getOS() == 0))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('stertscreen_pc') == true)) && 
				((player.getOS() == 4)) || 
				((player.getOS() == 5))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._startscreen_pc.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._startscreen_pc.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._startscreen_pc.style[domTransition]='';
				if (me._startscreen_pc.ggCurrentLogicStateVisible == 0) {
					me._startscreen_pc.style.visibility=(Number(me._startscreen_pc.style.opacity)>0||!me._startscreen_pc.style.opacity)?'inherit':'hidden';
					me._startscreen_pc.ggVisible=true;
				}
				else if (me._startscreen_pc.ggCurrentLogicStateVisible == 1) {
					me._startscreen_pc.style.visibility="hidden";
					me._startscreen_pc.ggVisible=false;
				}
				else {
					me._startscreen_pc.style.visibility="hidden";
					me._startscreen_pc.ggVisible=false;
				}
			}
		}
		me._startscreen_pc.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._rectangle_20=document.createElement('div');
		el.ggId="Rectangle 2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : rgba(0,0,0,0.490196);';
		hs+='border : 1px solid rgba(0,0,0,0.392157);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_20.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_20.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._startscreen_pc.appendChild(me._rectangle_20);
		el=me._container_5=document.createElement('div');
		el.ggId="Container 5";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 30px;';
		hs+='cursor : pointer;';
		hs+='height : 100px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._container_5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_5.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['container_5'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._container_5.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._container_5.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._container_5.style[domTransition]='' + cssPrefix + 'transform 1000ms ease 0ms';
				if (me._container_5.ggCurrentLogicStateScaling == 0) {
					me._container_5.ggParameter.sx = 1.2;
					me._container_5.ggParameter.sy = 1.2;
					me._container_5.style[domTransform]=parameterToTransform(me._container_5.ggParameter);
				}
				else {
					me._container_5.ggParameter.sx = 1;
					me._container_5.ggParameter.sy = 1;
					me._container_5.style[domTransform]=parameterToTransform(me._container_5.ggParameter);
				}
			}
		}
		me._container_5.onmouseover=function (e) {
			me.elementMouseOver['container_5']=true;
			me._container_5.logicBlock_scaling();
		}
		me._container_5.onmouseout=function (e) {
			me.elementMouseOver['container_5']=false;
			me._container_5.logicBlock_scaling();
		}
		me._container_5.ontouchend=function (e) {
			me.elementMouseOver['container_5']=false;
			me._container_5.logicBlock_scaling();
		}
		me._container_5.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._descriere1=document.createElement('div');
		els=me._descriere1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="DESCRIERE";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 12px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.89999;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 47px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0);';
		hs+='border: 1px solid #000000;';
		hs+='border: 1px solid rgba(0,0,0,0);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='color: rgba(255,255,255,0.882353);';
		hs+='font-size: 9px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="APAS\u0102";
		el.appendChild(els);
		me._descriere1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._descriere1.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['descriere1'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._descriere1.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._descriere1.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._descriere1.style[domTransition]='opacity 1000ms ease 0ms';
				if (me._descriere1.ggCurrentLogicStateAlpha == 0) {
					me._descriere1.style.visibility=me._descriere1.ggVisible?'inherit':'hidden';
					me._descriere1.style.opacity=1;
				}
				else {
					me._descriere1.style.visibility=me._descriere1.ggVisible?'inherit':'hidden';
					me._descriere1.style.opacity=0.89999;
				}
			}
		}
		me._descriere1.onmouseover=function (e) {
			me.elementMouseOver['descriere1']=true;
			me._descriere1.logicBlock_alpha();
		}
		me._descriere1.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._descriere1__text)
					return;
				}
			}
			me.elementMouseOver['descriere1']=false;
			me._descriere1.logicBlock_alpha();
		}
		me._descriere1.ontouchend=function (e) {
			me.elementMouseOver['descriere1']=false;
			me._descriere1.logicBlock_alpha();
		}
		me._descriere1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 2;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((49-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._container_5.appendChild(me._descriere1);
		el=me._button_10=document.createElement('div');
		els=me._button_10__img=document.createElement('img');
		els.className='ggskin ggskin_button_10';
		hs=basePath + 'images/button_10.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Button 1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 100px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.89999;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_10.onclick=function (e) {
			player.openNext("{node1}","");
			player.setVariableValue('stertscreen_pc', false);
			player.setVariableValue('startscreen_ios', false);
		}
		me._button_10.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._container_5.appendChild(me._button_10);
		me._startscreen_pc.appendChild(me._container_5);
		el=me._titlu_si_descriere_2=document.createElement('div');
		el.ggId="TITLU SI DESCRIERE 2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._titlu_si_descriere_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._titlu_si_descriere_2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._text_3=document.createElement('div');
		els=me._text_3__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 3";
		el.ggDx=0;
		el.ggDy=71;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 287px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0.588235);';
		hs+='border: 3px solid #ffffff;';
		hs+='border: 3px solid rgba(255,255,255,0.588235);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='border-radius: 4px;';
		hs+=cssPrefix + 'border-radius: 4px;';
		hs+='color: #000000;';
		hs+='font-size: 21px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 6px 7px 6px 7px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="VIZUALIZEAZA MAI MULTE";
		el.appendChild(els);
		me._text_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_3.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['text_3'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._text_3.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._text_3.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._text_3__text.style[domTransition]='background-color 1000ms ease 0ms, border-color 1000ms ease 0ms';
				if (me._text_3.ggCurrentLogicStateBackgroundColor == 0) {
					me._text_3__text.style.backgroundColor="rgba(255,255,255,0.784314)";
				}
				else {
					me._text_3__text.style.backgroundColor="rgba(255,255,255,0.588235)";
				}
			}
		}
		me._text_3.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((me.elementMouseOver['text_3'] == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._text_3.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._text_3.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._text_3__text.style[domTransition]='background-color 1000ms ease 0ms, border-color 1000ms ease 0ms';
				if (me._text_3.ggCurrentLogicStateBorderColor == 0) {
					me._text_3__text.style.borderColor="rgba(255,255,255,0.784314)";
				}
				else {
					me._text_3__text.style.borderColor="rgba(255,255,255,0.588235)";
				}
			}
		}
		me._text_3.onmouseover=function (e) {
			me.elementMouseOver['text_3']=true;
			me._text_3.logicBlock_backgroundcolor();
			me._text_3.logicBlock_bordercolor();
		}
		me._text_3.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._text_3__text)
					return;
				}
			}
			me.elementMouseOver['text_3']=false;
			me._text_3.logicBlock_backgroundcolor();
			me._text_3.logicBlock_bordercolor();
		}
		me._text_3.ontouchend=function (e) {
			me.elementMouseOver['text_3']=false;
			me._text_3.logicBlock_backgroundcolor();
			me._text_3.logicBlock_bordercolor();
		}
		me._text_3.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 6;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((297-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._titlu_si_descriere_2.appendChild(me._text_3);
		el=me._text_20=document.createElement('div');
		els=me._text_20__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 2";
		el.ggDx=0;
		el.ggDy=-8;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 25px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 359px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='0% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0);';
		hs+='border: 1px solid #000000;';
		hs+='border: 1px solid rgba(0,0,0,0);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='color: rgba(255,255,255,0.882353);';
		hs+='font-size: 17px;';
		hs+='font-weight: bolder;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Bucuresti, Sector 4, zona Vitan-Barzesti";
		el.appendChild(els);
		me._text_20.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_20.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 2;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((361-this.ggTextDiv.offsetWidth)*0) + 'px';
		}
		me._titlu_si_descriere_2.appendChild(me._text_20);
		me._startscreen_pc.appendChild(me._titlu_si_descriere_2);
		el=me._sus0=document.createElement('div');
		el.ggId="SUS";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._sus0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._sus0.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._text_212=document.createElement('div');
		els=me._text_212__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 21";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='opacity : 0.89999;';
		hs+='position : absolute;';
		hs+='right : 100px;';
		hs+='top : 50px;';
		hs+='visibility : inherit;';
		hs+='width : 177px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='right: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0);';
		hs+='border: 0px solid #000000;';
		hs+='border: 0px solid rgba(0,0,0,0);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='color: rgba(255,255,255,0.882353);';
		hs+='font-size: 21px;';
		hs+='font-weight: bold;';
		hs+='text-align: right;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="DESPRE";
		el.appendChild(els);
		me._text_212.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_212.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['text_212'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._text_212.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._text_212.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._text_212.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._text_212.ggCurrentLogicStateScaling == 0) {
					me._text_212.ggParameter.sx = 1.1;
					me._text_212.ggParameter.sy = 1.1;
					me._text_212.style[domTransform]=parameterToTransform(me._text_212.ggParameter);
				}
				else {
					me._text_212.ggParameter.sx = 1;
					me._text_212.ggParameter.sy = 1;
					me._text_212.style[domTransform]=parameterToTransform(me._text_212.ggParameter);
				}
			}
		}
		me._text_212.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['text_212'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._text_212.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._text_212.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._text_212.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._text_212.ggCurrentLogicStateAlpha == 0) {
					me._text_212.style.visibility=me._text_212.ggVisible?'inherit':'hidden';
					me._text_212.style.opacity=1;
				}
				else {
					me._text_212.style.visibility=me._text_212.ggVisible?'inherit':'hidden';
					me._text_212.style.opacity=0.89999;
				}
			}
		}
		me._text_212.onmouseover=function (e) {
			me.elementMouseOver['text_212']=true;
			me._text_212.logicBlock_scaling();
			me._text_212.logicBlock_alpha();
		}
		me._text_212.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._text_212__text)
					return;
				}
			}
			me.elementMouseOver['text_212']=false;
			me._text_212.logicBlock_scaling();
			me._text_212.logicBlock_alpha();
		}
		me._text_212.ontouchend=function (e) {
			me.elementMouseOver['text_212']=false;
			me._text_212.logicBlock_scaling();
			me._text_212.logicBlock_alpha();
		}
		me._text_212.ggUpdatePosition=function (useTransition) {
		}
		me._sus0.appendChild(me._text_212);
		el=me._text_2=document.createElement('div');
		els=me._text_2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 2";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 48px;';
		hs+='visibility : inherit;';
		hs+='width : 141px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0);';
		hs+='border: 0px solid #000000;';
		hs+='border: 0px solid rgba(0,0,0,0);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='color: rgba(255,255,255,0.941176);';
		hs+='font-size: 23px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="BINE AI VENIT<br\/>LA TURUL APARTAMENTULUI";
		el.appendChild(els);
		me._text_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_2.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['text_2'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._text_2.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._text_2.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._text_2.style[domTransition]='' + cssPrefix + 'transform 2000ms ease 0ms';
				if (me._text_2.ggCurrentLogicStateScaling == 0) {
					me._text_2.ggParameter.sx = 1.05;
					me._text_2.ggParameter.sy = 1.05;
					me._text_2.style[domTransform]=parameterToTransform(me._text_2.ggParameter);
				}
				else {
					me._text_2.ggParameter.sx = 1;
					me._text_2.ggParameter.sy = 1;
					me._text_2.style[domTransform]=parameterToTransform(me._text_2.ggParameter);
				}
			}
		}
		me._text_2.onmouseover=function (e) {
			me.elementMouseOver['text_2']=true;
			me._text_2.logicBlock_scaling();
		}
		me._text_2.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._text_2__text)
					return;
				}
			}
			me.elementMouseOver['text_2']=false;
			me._text_2.logicBlock_scaling();
		}
		me._text_2.ontouchend=function (e) {
			me.elementMouseOver['text_2']=false;
			me._text_2.logicBlock_scaling();
		}
		me._text_2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((139-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._sus0.appendChild(me._text_2);
		el=me._text_211=document.createElement('div');
		els=me._text_211__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 21";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 28px;';
		hs+='left : 100px;';
		hs+='opacity : 0.89999;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : inherit;';
		hs+='width : 81px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0);';
		hs+='border: 0px solid #000000;';
		hs+='border: 0px solid rgba(0,0,0,0);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='color: rgba(255,255,255,0.882353);';
		hs+='font-size: 21px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="ACASA";
		el.appendChild(els);
		me._text_211.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_211.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['text_211'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._text_211.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._text_211.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._text_211.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._text_211.ggCurrentLogicStateScaling == 0) {
					me._text_211.ggParameter.sx = 1.1;
					me._text_211.ggParameter.sy = 1.1;
					me._text_211.style[domTransform]=parameterToTransform(me._text_211.ggParameter);
				}
				else {
					me._text_211.ggParameter.sx = 1;
					me._text_211.ggParameter.sy = 1;
					me._text_211.style[domTransform]=parameterToTransform(me._text_211.ggParameter);
				}
			}
		}
		me._text_211.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['text_211'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._text_211.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._text_211.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._text_211.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._text_211.ggCurrentLogicStateAlpha == 0) {
					me._text_211.style.visibility=me._text_211.ggVisible?'inherit':'hidden';
					me._text_211.style.opacity=1;
				}
				else {
					me._text_211.style.visibility=me._text_211.ggVisible?'inherit':'hidden';
					me._text_211.style.opacity=0.89999;
				}
			}
		}
		me._text_211.onmouseover=function (e) {
			me.elementMouseOver['text_211']=true;
			me._text_211.logicBlock_scaling();
			me._text_211.logicBlock_alpha();
		}
		me._text_211.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._text_211__text)
					return;
				}
			}
			me.elementMouseOver['text_211']=false;
			me._text_211.logicBlock_scaling();
			me._text_211.logicBlock_alpha();
		}
		me._text_211.ontouchend=function (e) {
			me.elementMouseOver['text_211']=false;
			me._text_211.logicBlock_scaling();
			me._text_211.logicBlock_alpha();
		}
		me._text_211.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((79-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._sus0.appendChild(me._text_211);
		me._startscreen_pc.appendChild(me._sus0);
		el=me._container_1=document.createElement('div');
		el.ggId="Container 1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 23%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 100px;';
		hs+='visibility : hidden;';
		hs+='width : 34%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._container_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._iframe_3d=document.createElement('div');
		els=me._iframe_3d__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="iframe_3d";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 95%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 95%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0);';
		hs+='border: 1px solid #000000;';
		hs+='border: 1px solid rgba(0,0,0,0);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='color: rgba(0,0,0,0);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		hs+="border-radius: 50px 15px 50px 15px;";
		els.setAttribute('style',hs);
		els.innerHTML="<iframe width=\"100%\" height=\"100%\" marginheight=\"0\" marginwidth=\"0\" frameborder=\"0\" style=\"float:left; margin-left:0px\" allowfullscreen=\"true\" webkitallowfullscreen=\"true\" mozallowfullscreen=\"true\" src=\"https:\/\/maps.google.com\/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=bucuresti+(Bucuresti)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed\"><a href=\"https:\/\/www.gps.ie\/\">gps vehicle tracker<\/a><\/iframe>";
		el.appendChild(els);
		me._iframe_3d.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._iframe_3d.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._container_1.appendChild(me._iframe_3d);
		el=me._info_popup_close=document.createElement('div');
		els=me._info_popup_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB5PSIwcHgiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIGJhc2VQcm9maWxlPSJ0aW55IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgaWQ9IkxheWVyXzEiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZlcnNpb249IjEuMSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xMzUuMywzNTcuM2MtMjEuOS0yMS45LTU3LjUtMjEuOS03OS40LDBjLTIxLjksMjEuOS0yMS45LDU3LjUsMCw3OS40YzIxLjksMjEuOSw1Ny41LDIxLjksNzkuNCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtTLTExMy40LDM3OS4yLTEzNS4zLDM1Ny4zeiBNLTE0NS44LDQxMi43YzAuOCwwLjgsMC44LDEuNS0wLjEsMi40bC0xMC45LDEwLjljLTAuNCwwLjQtMC44LDAuNS0xLjMsMC41Yy0wLjUsMC0wLjktMC4xLTEuMS0wLjQmI3hkOyYjeGE7JiN4OTsmI3g5O2wtMTUuOC0xNS44bC0xNS43LDE1LjdjLTAuNCwwLjQtMC44LDAuNS0x'+
			'LjMsMC41cy0wLjktMC4xLTEuMS0wLjRsLTExLjEtMTEuMWMtMC4zLTAuMy0wLjQtMC42LTAuNC0xLjFjMC0wLjUsMC4xLTAuOSwwLjUtMS4zJiN4ZDsmI3hhOyYjeDk7JiN4OTtsMTUuNy0xNS43bC0xNS44LTE1LjhjLTAuMy0wLjMtMC40LTAuNi0wLjQtMS4xYzAtMC41LDAuMS0wLjksMC41LTEuM2wxMC45LTEwLjljMC45LTAuOSwxLjctMC45LDIuNC0wLjFsMTUuOCwxNS44bDE1LjctMTUuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuOS0wLjksMS43LTAuOSwyLjQtMC4xbDExLjEsMTEuMWMwLjgsMC44LDAuOCwxLjUtMC4xLDIuNGwtMTUuNywxNS43TC0xNDUuOCw0MTIuN3oiLz4KIDwvZz4KID'+
			'xnIGlkPSJMYXllcl8yIj4KICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE2MS42LDM5Ni45bDE1LjgsMTUuOGMwLjgsMC44LDAuOCwxLjUtMC4xLDIuNGwtMTAuOSwxMC45Yy0wLjQsMC40LTAuOCwwLjUtMS4zLDAuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjUsMC0wLjktMC4xLTEuMS0wLjRsLTE1LjgtMTUuOGwtMTUuNywxNS43Yy0wLjQsMC40LTAuOCwwLjUtMS4zLDAuNXMtMC45LTAuMS0xLjEtMC40bC0xMS4xLTExLjFjLTAuMy0wLjMtMC40LTAuNi0wLjQtMS4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0wLjUsMC4xLTAuOSwwLjUtMS4zbDE1LjctMTUuN2wtMTUuOC0xNS44Yy0wLjMt'+
			'MC4zLTAuNC0wLjYtMC40LTEuMWMwLTAuNSwwLjEtMC45LDAuNS0xLjNsMTAuOS0xMC45YzAuOS0wLjksMS43LTAuOSwyLjQtMC4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtsMTUuOCwxNS44bDE1LjctMTUuN2MwLjktMC45LDEuNy0wLjksMi40LTAuMWwxMS4xLDExLjFjMC44LDAuOCwwLjgsMS41LTAuMSwyLjRMLTE2MS42LDM5Ni45eiIvPgogPC9nPgo8L3N2Zz4K';
		me._info_popup_close__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._info_popup_close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB5PSIwcHgiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIGJhc2VQcm9maWxlPSJ0aW55IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgaWQ9IkxheWVyXzEiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZlcnNpb249IjEuMSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xMzAuOSwzNTIuOWMtMjQuNC0yNC40LTYzLjgtMjQuNC04OC4yLDBjLTI0LjQsMjQuNC0yNC40LDYzLjgsMCw4OC4yYzI0LjQsMjQuNCw2My44LDI0LjQsODguMiwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtTLTEwNi41LDM3Ny4zLTEzMC45LDM1Mi45eiBNLTE0Mi41LDQxNC41YzAuOCwwLjgsMC44LDEuNy0wLjEsMi43bC0xMi4yLDEyLjJjLTAuNCwwLjQtMC44LDAuNi0xLjQsMC42Yy0wLjYsMC0xLTAuMS0xLjMtMC40JiN4ZDsmI3hhOyYjeDk7JiN4OTtsLTE3LjUtMTcuNWwtMTcuNCwxNy40Yy0wLjQsMC40LTAuOCwwLjYtMS40'+
			'LDAuNmMtMC42LDAtMS0wLjEtMS4zLTAuNGwtMTIuMy0xMi4zYy0wLjMtMC4zLTAuNC0wLjctMC40LTEuM2MwLTAuNiwwLjEtMSwwLjYtMS40JiN4ZDsmI3hhOyYjeDk7JiN4OTtsMTcuNC0xNy40bC0xNy41LTE3LjVjLTAuMy0wLjMtMC40LTAuNy0wLjQtMS4zYzAtMC42LDAuMS0xLDAuNi0xLjRsMTIuMi0xMi4yYzEtMSwxLjgtMSwyLjctMC4xbDE3LjUsMTcuNWwxNy40LTE3LjQmI3hkOyYjeGE7JiN4OTsmI3g5O2MxLTEsMS44LTEsMi43LTAuMWwxMi4zLDEyLjNjMC44LDAuOCwwLjgsMS43LTAuMSwyLjdsLTE3LjQsMTcuNEwtMTQyLjUsNDE0LjV6Ii8+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMi'+
			'I+CiAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNjAuMSwzOTYuOWwxNy41LDE3LjVjMC44LDAuOCwwLjgsMS43LTAuMSwyLjdsLTEyLjIsMTIuMmMtMC40LDAuNC0wLjgsMC42LTEuNCwwLjYmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC42LDAtMS0wLjEtMS4zLTAuNGwtMTcuNS0xNy41bC0xNy40LDE3LjRjLTAuNCwwLjQtMC44LDAuNi0xLjQsMC42Yy0wLjYsMC0xLTAuMS0xLjMtMC40bC0xMi4zLTEyLjNjLTAuMy0wLjMtMC40LTAuNy0wLjQtMS4zJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0wLjYsMC4xLTEsMC42LTEuNGwxNy40LTE3LjRsLTE3LjUtMTcuNWMtMC4zLTAuMy0wLjQtMC43LTAu'+
			'NC0xLjNjMC0wLjYsMC4xLTEsMC42LTEuNGwxMi4yLTEyLjJjMS0xLDEuOC0xLDIuNy0wLjFsMTcuNSwxNy41JiN4ZDsmI3hhOyYjeDk7JiN4OTtsMTcuNC0xNy40YzEtMSwxLjgtMSwyLjctMC4xbDEyLjMsMTIuM2MwLjgsMC44LDAuOCwxLjctMC4xLDIuN0wtMTYwLjEsMzk2Ljl6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._info_popup_close__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="info_popup_close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 20px;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._info_popup_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_popup_close.onmouseover=function (e) {
			me._info_popup_close__img.style.visibility='hidden';
			me._info_popup_close__imgo.style.visibility='inherit';
		}
		me._info_popup_close.onmouseout=function (e) {
			me._info_popup_close__img.style.visibility='inherit';
			me._info_popup_close__imgo.style.visibility='hidden';
		}
		me._info_popup_close.ggUpdatePosition=function (useTransition) {
		}
		me._container_1.appendChild(me._info_popup_close);
		me._startscreen_pc.appendChild(me._container_1);
		me.divSkin.appendChild(me._startscreen_pc);
		el=me._startscreen_ios=document.createElement('div');
		el.ggId="Startscreen IOS";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._startscreen_ios.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._startscreen_ios.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('startscreen_ios') == true)) && 
				((player.getOS() == 1)) || 
				((player.getOS() == 2)) || 
				((player.getOS() == 3)) || 
				((player.getOS() == 0))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('startscreen_ios') == true)) && 
				((player.getOS() == 4)) || 
				((player.getOS() == 5))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._startscreen_ios.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._startscreen_ios.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._startscreen_ios.style[domTransition]='';
				if (me._startscreen_ios.ggCurrentLogicStateVisible == 0) {
					me._startscreen_ios.style.visibility="hidden";
					me._startscreen_ios.ggVisible=false;
				}
				else if (me._startscreen_ios.ggCurrentLogicStateVisible == 1) {
					me._startscreen_ios.style.visibility=(Number(me._startscreen_ios.style.opacity)>0||!me._startscreen_ios.style.opacity)?'inherit':'hidden';
					me._startscreen_ios.ggVisible=true;
				}
				else {
					me._startscreen_ios.style.visibility="hidden";
					me._startscreen_ios.ggVisible=false;
				}
			}
		}
		me._startscreen_ios.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._rectangle_2=document.createElement('div');
		el.ggId="Rectangle 2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : rgba(0,0,0,0.490196);';
		hs+='border : 1px solid rgba(0,0,0,0.392157);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._startscreen_ios.appendChild(me._rectangle_2);
		el=me._container_4=document.createElement('div');
		el.ggId="Container 4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._container_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_4.ggUpdatePosition=function (useTransition) {
		}
		el=me._container_3=document.createElement('div');
		el.ggId="Container 3";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 350px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 500px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._container_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_3.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._button_1=document.createElement('div');
		els=me._button_1__img=document.createElement('img');
		els.className='ggskin ggskin_button_1';
		hs=basePath + 'images/button_1.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Button 1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='bottom : 33px;';
		hs+='cursor : pointer;';
		hs+='height : 72px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.79999;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 72px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_1.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['button_1'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._button_1.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._button_1.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._button_1.style[domTransition]='' + cssPrefix + 'transform 1000ms ease 0ms, opacity 1000ms ease 0ms';
				if (me._button_1.ggCurrentLogicStateScaling == 0) {
					me._button_1.ggParameter.sx = 1.1;
					me._button_1.ggParameter.sy = 1.1;
					me._button_1.style[domTransform]=parameterToTransform(me._button_1.ggParameter);
				}
				else {
					me._button_1.ggParameter.sx = 1;
					me._button_1.ggParameter.sy = 1;
					me._button_1.style[domTransform]=parameterToTransform(me._button_1.ggParameter);
				}
			}
		}
		me._button_1.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['button_1'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._button_1.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._button_1.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._button_1.style[domTransition]='' + cssPrefix + 'transform 1000ms ease 0ms, opacity 1000ms ease 0ms';
				if (me._button_1.ggCurrentLogicStateAlpha == 0) {
					me._button_1.style.visibility=me._button_1.ggVisible?'inherit':'hidden';
					me._button_1.style.opacity=1;
				}
				else {
					me._button_1.style.visibility=me._button_1.ggVisible?'inherit':'hidden';
					me._button_1.style.opacity=0.79999;
				}
			}
		}
		me._button_1.onclick=function (e) {
			player.openNext("{node1}","");
			player.setVariableValue('startscreen_ios', false);
			player.setVariableValue('stertscreen_pc', false);
		}
		me._button_1.onmouseover=function (e) {
			me.elementMouseOver['button_1']=true;
			me._button_1.logicBlock_scaling();
			me._button_1.logicBlock_alpha();
		}
		me._button_1.onmouseout=function (e) {
			me.elementMouseOver['button_1']=false;
			me._button_1.logicBlock_scaling();
			me._button_1.logicBlock_alpha();
		}
		me._button_1.ontouchend=function (e) {
			me.elementMouseOver['button_1']=false;
			me._button_1.logicBlock_scaling();
			me._button_1.logicBlock_alpha();
		}
		me._button_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._container_3.appendChild(me._button_1);
		el=me._descriere0=document.createElement('div');
		els=me._descriere0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="DESCRIERE";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : 30.43%;';
		hs+='height : 23px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.89999;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 130px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0);';
		hs+='border: 1px solid #000000;';
		hs+='border: 1px solid rgba(0,0,0,0);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='color: rgba(255,255,255,0.882353);';
		hs+='font-size: 17px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="APAS\u0102";
		el.appendChild(els);
		me._descriere0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._descriere0.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['descriere0'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._descriere0.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._descriere0.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._descriere0.style[domTransition]='opacity 1000ms ease 0ms';
				if (me._descriere0.ggCurrentLogicStateAlpha == 0) {
					me._descriere0.style.visibility=me._descriere0.ggVisible?'inherit':'hidden';
					me._descriere0.style.opacity=1;
				}
				else {
					me._descriere0.style.visibility=me._descriere0.ggVisible?'inherit':'hidden';
					me._descriere0.style.opacity=0.89999;
				}
			}
		}
		me._descriere0.onmouseover=function (e) {
			me.elementMouseOver['descriere0']=true;
			me._descriere0.logicBlock_alpha();
		}
		me._descriere0.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._descriere0__text)
					return;
				}
			}
			me.elementMouseOver['descriere0']=false;
			me._descriere0.logicBlock_alpha();
		}
		me._descriere0.ontouchend=function (e) {
			me.elementMouseOver['descriere0']=false;
			me._descriere0.logicBlock_alpha();
		}
		me._descriere0.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 2;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((132-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._container_3.appendChild(me._descriere0);
		me._container_4.appendChild(me._container_3);
		el=me._titlu_si_descriere=document.createElement('div');
		el.ggId="TITLU SI DESCRIERE";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._titlu_si_descriere.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._titlu_si_descriere.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._descriere=document.createElement('div');
		els=me._descriere__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="DESCRIERE";
		el.ggDx=0;
		el.ggDy=4;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 23px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.89999;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 336px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0);';
		hs+='border: 1px solid #000000;';
		hs+='border: 1px solid rgba(0,0,0,0);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='color: rgba(255,255,255,0.882353);';
		hs+='font-size: 13px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Bucuresti, Sector 4, zona Weinder";
		el.appendChild(els);
		me._descriere.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._descriere.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['descriere'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._descriere.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._descriere.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._descriere.style[domTransition]='opacity 1000ms ease 0ms';
				if (me._descriere.ggCurrentLogicStateAlpha == 0) {
					me._descriere.style.visibility=me._descriere.ggVisible?'inherit':'hidden';
					me._descriere.style.opacity=1;
				}
				else {
					me._descriere.style.visibility=me._descriere.ggVisible?'inherit':'hidden';
					me._descriere.style.opacity=0.89999;
				}
			}
		}
		me._descriere.onmouseover=function (e) {
			me.elementMouseOver['descriere']=true;
			me._descriere.logicBlock_alpha();
		}
		me._descriere.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._descriere__text)
					return;
				}
			}
			me.elementMouseOver['descriere']=false;
			me._descriere.logicBlock_alpha();
		}
		me._descriere.ontouchend=function (e) {
			me.elementMouseOver['descriere']=false;
			me._descriere.logicBlock_alpha();
		}
		me._descriere.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 2;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((338-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._titlu_si_descriere.appendChild(me._descriere);
		el=me._titlu=document.createElement('div');
		els=me._titlu__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="TITLU";
		el.ggDx=0;
		el.ggDy=-8;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 60px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.89999;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 336px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0);';
		hs+='border: 1px solid #000000;';
		hs+='border: 1px solid rgba(0,0,0,0);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='color: rgba(255,255,255,0.882353);';
		hs+='font-size: 23px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="BINE AI VENIT<br\/>TURUL APARTAMENTULUI";
		el.appendChild(els);
		me._titlu.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._titlu.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['titlu'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._titlu.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._titlu.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._titlu.style[domTransition]='' + cssPrefix + 'transform 1000ms ease 0ms, opacity 1000ms ease 0ms';
				if (me._titlu.ggCurrentLogicStateScaling == 0) {
					me._titlu.ggParameter.sx = 1.05;
					me._titlu.ggParameter.sy = 1.05;
					me._titlu.style[domTransform]=parameterToTransform(me._titlu.ggParameter);
				}
				else {
					me._titlu.ggParameter.sx = 1;
					me._titlu.ggParameter.sy = 1;
					me._titlu.style[domTransform]=parameterToTransform(me._titlu.ggParameter);
				}
			}
		}
		me._titlu.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['titlu'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._titlu.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._titlu.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._titlu.style[domTransition]='' + cssPrefix + 'transform 1000ms ease 0ms, opacity 1000ms ease 0ms';
				if (me._titlu.ggCurrentLogicStateAlpha == 0) {
					me._titlu.style.visibility=me._titlu.ggVisible?'inherit':'hidden';
					me._titlu.style.opacity=1;
				}
				else {
					me._titlu.style.visibility=me._titlu.ggVisible?'inherit':'hidden';
					me._titlu.style.opacity=0.89999;
				}
			}
		}
		me._titlu.onmouseover=function (e) {
			me.elementMouseOver['titlu']=true;
			me._titlu.logicBlock_scaling();
			me._titlu.logicBlock_alpha();
		}
		me._titlu.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._titlu__text)
					return;
				}
			}
			me.elementMouseOver['titlu']=false;
			me._titlu.logicBlock_scaling();
			me._titlu.logicBlock_alpha();
		}
		me._titlu.ontouchend=function (e) {
			me.elementMouseOver['titlu']=false;
			me._titlu.logicBlock_scaling();
			me._titlu.logicBlock_alpha();
		}
		me._titlu.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 2;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((338-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._titlu_si_descriere.appendChild(me._titlu);
		me._container_4.appendChild(me._titlu_si_descriere);
		el=me._sus=document.createElement('div');
		el.ggId="SUS";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 350px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 500px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._sus.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._sus.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_210=document.createElement('div');
		els=me._text_210__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 21";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 25px;';
		hs+='opacity : 0.89999;';
		hs+='position : absolute;';
		hs+='right : 3%;';
		hs+='top : 7%;';
		hs+='visibility : inherit;';
		hs+='width : 177px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='right: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0);';
		hs+='border: 1px solid #000000;';
		hs+='border: 1px solid rgba(0,0,0,0);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='color: rgba(255,255,255,0.882353);';
		hs+='font-size: 23px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="CONTACTEAZA";
		el.appendChild(els);
		me._text_210.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_210.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['text_210'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._text_210.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._text_210.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._text_210.style[domTransition]='' + cssPrefix + 'transform 1000ms ease 0ms, opacity 1000ms ease 0ms';
				if (me._text_210.ggCurrentLogicStateScaling == 0) {
					me._text_210.ggParameter.sx = 1.05;
					me._text_210.ggParameter.sy = 1.05;
					me._text_210.style[domTransform]=parameterToTransform(me._text_210.ggParameter);
				}
				else {
					me._text_210.ggParameter.sx = 1;
					me._text_210.ggParameter.sy = 1;
					me._text_210.style[domTransform]=parameterToTransform(me._text_210.ggParameter);
				}
			}
		}
		me._text_210.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['text_210'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._text_210.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._text_210.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._text_210.style[domTransition]='' + cssPrefix + 'transform 1000ms ease 0ms, opacity 1000ms ease 0ms';
				if (me._text_210.ggCurrentLogicStateAlpha == 0) {
					me._text_210.style.visibility=me._text_210.ggVisible?'inherit':'hidden';
					me._text_210.style.opacity=1;
				}
				else {
					me._text_210.style.visibility=me._text_210.ggVisible?'inherit':'hidden';
					me._text_210.style.opacity=0.89999;
				}
			}
		}
		me._text_210.onmouseover=function (e) {
			me.elementMouseOver['text_210']=true;
			me._text_210.logicBlock_scaling();
			me._text_210.logicBlock_alpha();
		}
		me._text_210.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._text_210__text)
					return;
				}
			}
			me.elementMouseOver['text_210']=false;
			me._text_210.logicBlock_scaling();
			me._text_210.logicBlock_alpha();
		}
		me._text_210.ontouchend=function (e) {
			me.elementMouseOver['text_210']=false;
			me._text_210.logicBlock_scaling();
			me._text_210.logicBlock_alpha();
		}
		me._text_210.ggUpdatePosition=function (useTransition) {
		}
		me._sus.appendChild(me._text_210);
		el=me._text_21=document.createElement('div');
		els=me._text_21__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 21";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 28px;';
		hs+='left : 3%;';
		hs+='opacity : 0.89999;';
		hs+='position : absolute;';
		hs+='top : 7%;';
		hs+='visibility : inherit;';
		hs+='width : 81px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0);';
		hs+='border: 1px solid #000000;';
		hs+='border: 1px solid rgba(0,0,0,0);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='color: rgba(255,255,255,0.882353);';
		hs+='font-size: 23px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="ACASA";
		el.appendChild(els);
		me._text_21.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_21.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['text_21'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._text_21.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._text_21.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._text_21.style[domTransition]='' + cssPrefix + 'transform 1000ms ease 0ms, opacity 1000ms ease 0ms';
				if (me._text_21.ggCurrentLogicStateScaling == 0) {
					me._text_21.ggParameter.sx = 1.05;
					me._text_21.ggParameter.sy = 1.05;
					me._text_21.style[domTransform]=parameterToTransform(me._text_21.ggParameter);
				}
				else {
					me._text_21.ggParameter.sx = 1;
					me._text_21.ggParameter.sy = 1;
					me._text_21.style[domTransform]=parameterToTransform(me._text_21.ggParameter);
				}
			}
		}
		me._text_21.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['text_21'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._text_21.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._text_21.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._text_21.style[domTransition]='' + cssPrefix + 'transform 1000ms ease 0ms, opacity 1000ms ease 0ms';
				if (me._text_21.ggCurrentLogicStateAlpha == 0) {
					me._text_21.style.visibility=me._text_21.ggVisible?'inherit':'hidden';
					me._text_21.style.opacity=1;
				}
				else {
					me._text_21.style.visibility=me._text_21.ggVisible?'inherit':'hidden';
					me._text_21.style.opacity=0.89999;
				}
			}
		}
		me._text_21.onmouseover=function (e) {
			me.elementMouseOver['text_21']=true;
			me._text_21.logicBlock_scaling();
			me._text_21.logicBlock_alpha();
		}
		me._text_21.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._text_21__text)
					return;
				}
			}
			me.elementMouseOver['text_21']=false;
			me._text_21.logicBlock_scaling();
			me._text_21.logicBlock_alpha();
		}
		me._text_21.ontouchend=function (e) {
			me.elementMouseOver['text_21']=false;
			me._text_21.logicBlock_scaling();
			me._text_21.logicBlock_alpha();
		}
		me._text_21.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((83-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._sus.appendChild(me._text_21);
		me._container_4.appendChild(me._sus);
		me._startscreen_ios.appendChild(me._container_4);
		me.divSkin.appendChild(me._startscreen_ios);
		player.addListener('sizechanged', function() {
			me.updateSize(me.divSkin);
		});
		player.addListener('playerstatechanged', function() {
			player.setVariableValue('pos_enter_vr', "0");
			if (
				(
					((player.getVariableValue('opt_zoom') == true)) && 
					((player.hasVR() == true))
				)
			) {
				player.setVariableValue('pos_enter_vr', player.getVariableValue('pos_enter_vr') + Number("2"));
			}
			if (
				(
					((player.getVariableValue('opt_autorotate') == true)) && 
					((player.hasVR() == true))
				)
			) {
				player.setVariableValue('pos_enter_vr', player.getVariableValue('pos_enter_vr') + Number("1"));
			}
			if (
				(
					((player.getVariableValue('opt_info') == true)) && 
					((player.hasVR() == true))
				)
			) {
				player.setVariableValue('pos_enter_vr', player.getVariableValue('pos_enter_vr') + Number("1"));
			}
			if (
				(
					((player.getVariableValue('opt_thumbnail') == true)) && 
					((player.getIsTour() == true)) && 
					((player.hasVR() == true))
				)
			) {
				player.setVariableValue('pos_enter_vr', player.getVariableValue('pos_enter_vr') + Number("1"));
			}
			if (
				(
					((player.getVariableValue('opt_projection') == true)) && 
					((player.hasVR() == true))
				)
			) {
				player.setVariableValue('pos_enter_vr', player.getVariableValue('pos_enter_vr') + Number("1"));
			}
			if (
				(
					((player.getVariableValue('opt_gyro') == true)) && 
					((player.getGyroAvailable() == true)) && 
					((player.hasVR() == true))
				)
			) {
				player.setVariableValue('pos_enter_vr', player.getVariableValue('pos_enter_vr') + Number("1"));
			}
			if (
				(
					((player.getVariableValue('opt_fullscreen') == true)) && 
					((player.hasVR() == true)) && 
					((player.getOS() != 4))
				)
			) {
				player.setVariableValue('pos_enter_vr', player.getVariableValue('pos_enter_vr') + Number("1"));
			}
			player.setVariableValue('pos_gyro', "0");
			if (
				(
					((player.getVariableValue('opt_zoom') == true)) && 
					((player.getGyroAvailable() == true))
				)
			) {
				player.setVariableValue('pos_gyro', player.getVariableValue('pos_gyro') + Number("2"));
			}
			if (
				(
					((player.getVariableValue('opt_autorotate') == true)) && 
					((player.getGyroAvailable() == true))
				)
			) {
				player.setVariableValue('pos_gyro', player.getVariableValue('pos_gyro') + Number("1"));
			}
			if (
				(
					((player.getVariableValue('opt_info') == true)) && 
					((player.getGyroAvailable() == true))
				)
			) {
				player.setVariableValue('pos_gyro', player.getVariableValue('pos_gyro') + Number("1"));
			}
			if (
				(
					((player.getVariableValue('opt_thumbnail') == true)) && 
					((player.getIsTour() == true)) && 
					((player.getGyroAvailable() == true))
				)
			) {
				player.setVariableValue('pos_gyro', player.getVariableValue('pos_gyro') + Number("1"));
			}
			if (
				(
					((player.getVariableValue('opt_projection') == true)) && 
					((player.getGyroAvailable() == true))
				)
			) {
				player.setVariableValue('pos_gyro', player.getVariableValue('pos_gyro') + Number("1"));
			}
			player.setVariableValue('pos_autorotate', "0");
			if (
				(
					((player.getVariableValue('opt_zoom') == true))
				)
			) {
				player.setVariableValue('pos_autorotate', player.getVariableValue('pos_autorotate') + Number("2"));
			}
		});
	};
	this.hotspotProxyClick=function(id, url) {
		if (id=='panoinfo') {
			me._poligon_info.onclick();
		}
	}
	this.hotspotProxyDoubleClick=function(id, url) {
	}
	me.hotspotProxyOver=function(id, url) {
		if (id=='intrare') {
			me._poligon_enter_ferestre_usi.onmouseover();
		}
	}
	me.hotspotProxyOut=function(id, url) {
		if (id=='intrare') {
			me._poligon_enter_ferestre_usi.onmouseout();
		}
	}
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		me.ggCurrentTime=new Date().getTime();
		if (me.elementMouseOver['rectangle_74']) {
			player.changePanLog(-0.1,true);
		}
		if (me.elementMouseOver['rectangle_73']) {
			player.changePanLog(-0.05,true);
		}
		if (me.elementMouseOver['rectangle_72']) {
			player.changePanLog(-0.02,true);
		}
		if (me.elementMouseOver['rectangle_71']) {
			player.changePanLog(0.02,true);
		}
		if (me.elementMouseOver['rectangle_70']) {
			player.changePanLog(0.05,true);
		}
		if (me.elementMouseOver['rectangle_7']) {
			player.changePanLog(0.1,true);
		}
		if (me.elementMouseOver['controller']) {
			if (
				(
					((player.getVariableValue('opt_autohide') == true))
				)
			) {
			}
		}
		if (me.elementMouseDown['zoomout']) {
			player.changeFovLog(0.5,true);
		}
		if (me.elementMouseDown['zoomin']) {
			player.changeFovLog(-0.5,true);
		}
		if (me._element_alpha_timer.ggLastIsActive!=me._element_alpha_timer.ggIsActive()) {
			me._element_alpha_timer.ggLastIsActive=me._element_alpha_timer.ggIsActive();
			if (me._element_alpha_timer.ggLastIsActive) {
			} else {
				player.setVariableValue('vis_timer', true);
			}
		}
		if (me.elementMouseOver['poligon_enter_ferestre_usi']) {
			player.openNext(player.hotspot.url,"$(fwd)");
		}
	};
	player.addListener('timer', me.skinTimerEvent);
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px;}'));
	document.head.appendChild(style);
	me._controller.logicBlock_position();
	me._controller.logicBlock_alpha();
	me._controller_slider.logicBlock_alpha();
	me._gyro.logicBlock_visible();
	me._gyro_on.logicBlock_alpha();
	me._gyro_off.logicBlock_alpha();
	me._autorotate_buttons.logicBlock_visible();
	me._autorotate_start.logicBlock_alpha();
	me._autorotate_stop.logicBlock_alpha();
	me._zoomout.logicBlock_visible();
	me._zoomin.logicBlock_visible();
	me._text_1.logicBlock_textcolor();
	me._text_1_1.logicBlock_textcolor();
	me._float_cursor.logicBlock_visible();
	me._poligoane.logicBlock_visible();
	me._google_maps.logicBlock_visible();
	me._startscreen_pc.logicBlock_visible();
	me._startscreen_ios.logicBlock_visible();
	me._auto_rotate.logicBlock_visible();
	me._controller_slider.logicBlock_position();
	me._controller_slider.logicBlock_scaling();
	me._text_1.logicBlock_position();
	me._text_1.logicBlock_scaling();
	me._text_1_1.logicBlock_position();
	me._text_1_1.logicBlock_scaling();
	me._image_3.logicBlock_position();
	me._image_3.logicBlock_scaling();
	me._enter_vr.logicBlock_visible();
	player.addListener('changenode', function(args) { me._controller.logicBlock_position();me._controller.logicBlock_alpha();me._controller_slider.logicBlock_alpha();me._gyro.logicBlock_visible();me._gyro_on.logicBlock_alpha();me._gyro_off.logicBlock_alpha();me._autorotate_buttons.logicBlock_visible();me._autorotate_start.logicBlock_alpha();me._autorotate_stop.logicBlock_alpha();me._zoomout.logicBlock_visible();me._zoomin.logicBlock_visible();me._text_1.logicBlock_textcolor();me._text_1_1.logicBlock_textcolor();me._float_cursor.logicBlock_visible();me._poligoane.logicBlock_visible();me._google_maps.logicBlock_visible();me._startscreen_pc.logicBlock_visible();me._startscreen_ios.logicBlock_visible(); });
	player.addListener('configloaded', function(args) { me._auto_rotate.logicBlock_visible();me._controller_slider.logicBlock_position();me._controller_slider.logicBlock_scaling();me._gyro.logicBlock_visible();me._text_1.logicBlock_position();me._text_1.logicBlock_scaling();me._text_1_1.logicBlock_position();me._text_1_1.logicBlock_scaling();me._image_3.logicBlock_position();me._image_3.logicBlock_scaling();me._float_cursor.logicBlock_visible();me._startscreen_pc.logicBlock_visible();me._startscreen_ios.logicBlock_visible(); });
	player.addListener('autorotatechanged', function(args) { me._autorotate_start.logicBlock_alpha();me._autorotate_stop.logicBlock_alpha(); });
	player.addListener('gyroavailable', function(args) { me._gyro.logicBlock_visible(); });
	player.addListener('gyrochanged', function(args) { me._gyro_on.logicBlock_alpha();me._gyro_off.logicBlock_alpha(); });
	player.addListener('vrchanged', function(args) { me._enter_vr.logicBlock_visible(); });
	player.addListener('activehotspotchanged', function(args) { me._text_1.logicBlock_textcolor();me._text_1_1.logicBlock_textcolor();me._float_cursor.logicBlock_visible(); });
	player.addListener('varchanged_vis_timer', function(args) { me._controller.logicBlock_alpha();me._controller_slider.logicBlock_alpha(); });
	player.addListener('varchanged_stertscreen_pc', function(args) { me._controller.logicBlock_position();me._startscreen_pc.logicBlock_visible(); });
	player.addListener('varchanged_startscreen_ios', function(args) { me._controller.logicBlock_position();me._startscreen_ios.logicBlock_visible(); });
	player.addListener('varchanged_maps', function(args) { me._google_maps.logicBlock_visible(); });
	player.addListener('varchanged_POLIGON', function(args) { me._poligoane.logicBlock_visible(); });
	player.addListener('varchanged_opt_gyro', function(args) { me._gyro.logicBlock_visible(); });
	player.addListener('varchanged_opt_autorotate', function(args) { me._autorotate_buttons.logicBlock_visible(); });
	player.addListener('varchanged_opt_zoom', function(args) { me._zoomout.logicBlock_visible();me._zoomin.logicBlock_visible(); });
	me.skinTimerEvent();
};