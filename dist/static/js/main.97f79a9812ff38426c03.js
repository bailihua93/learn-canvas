!function(r){var n={};function i(t){if(n[t])return n[t].exports;var e=n[t]={i:t,l:!1,exports:{}};return r[t].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=r,i.c=n,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s="4a8b63e925f44201b374")}({"4a8b63e925f44201b374":function(t,e){function n(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var r=document.getElementById("canvas"),i=r.getContext("2d"),h=r.width,l=r.height,u=[],f=function(){function s(t,e,r,n,i){var o=5<arguments.length&&void 0!==arguments[5]?arguments[5]:2,a=6<arguments.length&&void 0!==arguments[6]?arguments[6]:"#757575";!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,s),this.x=t,this.y=e,this.vx=r,this.vy=n,this.size=o,this.color=a,this.index=i}var t,e,r;return t=s,(e=[{key:"draw",value:function(){i.save(),i.fillStyle=this.color,i.arc(this.x,this.y,this.size,0,2*Math.PI,!0),this.drawIine(),(this.x>=h-this.size||this.x<=0+this.size)&&(this.vx=-this.vx),(this.y>=l-this.size||this.y<=0+this.size)&&(this.vy=-this.vy),this.x+=this.vx,this.y+=this.vy,i.fill(),i.beginPath(),i.restore()}},{key:"drawIine",value:function(){for(var t=0;t<u.length;t++)if(t!==this.index){var e=Math.abs(this.x-u[t].x),r=Math.abs(this.y-u[t].y),n=Math.sqrt(e*e+r*r);n<=200&&(i.strokeStyle="rgba(189, 189, 189, ".concat(n/200,")"),i.moveTo(this.x,this.y),i.lineTo(u[t].x,u[t].y),i.stroke())}}}])&&n(t.prototype,e),r&&n(t,r),s}();!function(){for(var t=0;t<50;t++){var e=Math.floor(2*Math.random()),r=Math.floor(2*Math.random()),n=Math.floor(Math.random()*h),i=Math.floor(Math.random()*l),o=Math.floor(3*Math.random()+1),a=Math.floor(3*Math.random()+1),s=new f(n,i,o=1===e?o:-o,a=1===r?a:-a,t);u.push(s)}}(),window.requestAnimationFrame(function t(){i.save(),i.clearRect(0,0,h,l);for(var e=0;e<u.length;e++)u[e].draw();i.restore(),window.requestAnimationFrame(t)})}});