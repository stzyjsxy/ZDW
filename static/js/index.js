window.onload = function(){                             //重写窗体加载的事件
	$(".business_title1 ").click(function(){//财经
		setTimeout(function(){
			$(".business_connect1").scrollTop(0);
		},100);
	}
	);
	$(".business_title2 ").click(function(){
		setTimeout(function(){
			$(".business_connect1").scrollTop(388);
		},100);
	}
	);

}