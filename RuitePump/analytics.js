var analytics_click_statistics;
var analyticsFun = function () {
	var s=function(n, v){
		var d=new Date();
		d.setTime(new Date(d.toLocaleDateString()).getTime()+24*3600*1000-1);
		document.cookie=n+'='+escape(v)+';expires='+d.toGMTString();
	};
	var g=function(n){
		var r=new RegExp('(^| )'+n+'=([^;]*)(;|$)');
		var d=document.cookie.match(r);
		return d?unescape(d[2]):'';
	};
	var n=0;
	var d=g('a_s_id');
	if(d==''){
		d='n15ebjgi0vo4e667bkhtbevbk2';
		n=1;
	}
	s('a_s_id', d);
	let time0=window.performance.timing.domInteractive || 0;
	let time1=window.performance.timing.requestStart || 0;
	var c=[];
	c.push('url='+encodeURIComponent(window.location.href));
	c.push('referrer='+encodeURIComponent(document.referrer));
	c.push('number=Iic1bFlKAQ==');
	c.push('new_visitors='+n);
	c.push('session_id='+d);
	if (time0 > 0 && time1 > 0) {
		c.push('LoadTime='+(time0-time1));
	}
	c.push('rand='+Math.random());
	$('body[id]').size() && c.push('page_par_id='+$('body').attr('id'));
	if (typeof ueeshop_config.ipCountry !== 'undefined') c.push('ipCountry='+ueeshop_config.ipCountry);
	(new Image).src='//analytics.myshoptago.com/analytics/?'+c.join('&');
	analytics_click_statistics=function(p){
		c.push('position='+p);
		c.push('click=1');
		$.ajax({
			url:'//analytics.myshoptago.com/analytics/?'+c.join('&'),
			async:true
		});
	};
}
if (typeof jQuery !== 'undefined') {
	$(function () {
		analyticsFun()
	});
} else {
	(function(){
		analyticsFun()
	})();
}
