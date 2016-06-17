//career-center JavaScript 
$(".select-prompt .select-item span").each(function(index) {
                $(this).click(function(){

						$(this).find("li").hide();
						var sitem="item"+(index+1);
						$("#"+sitem).find("li").removeClass("obj"+(index+1));
						if($(".obj1").length==0&&$(".obj2").length==0&&$(".obj3").length==0&&$(".obj4").length==0&&$(".obj5").length==0&&$(".obj6").length==0&&$(".obj7").length==0){
							$(".all-cal").hide();
							$(".null").show();
							};
					});
            });
			$(".select-place").click(function(){
				  $("dd").slideToggle();
				  });
		    $(".select-place dd").click(function(){
			$("#place-name").html($(this).text()+" &nbsp;<span class='angle-down'></span>");
			$(".select-place dd").Toggle();
			 });
			$(".search-hot a").click(function(){
				$(".keywords").val($(this).text());
			});
			
			var b=0;
			$("#item1 li").click(function(){
				$(this).toggleClass("obj1");
				var i=".obj1";
				b=1;
					if(b=1){
						$(i).removeClass("obj1");
						$(this).addClass("obj1");
					}
				$(".null").hide();
				$(".select-prompt .select-item span").eq(0).html("<li>"+$(this).text()+"</li>");
				});
				$("#item2 li").click(function(){
				$(this).toggleClass("obj2");
				var i=".obj2";
				b=1;
					if(b=1){
						$(i).removeClass("obj2");
						$(this).addClass("obj2");
					}
				$(".null").hide();
				$(".select-prompt .select-item span").eq(1).html("<li>"+$(this).text()+"</li>");
				});
				$("#item3 li").click(function(){
				$(this).toggleClass("obj3");
				var i=".obj3";
				b=1;
					if(b=1){
						$(i).removeClass("obj3");
						$(this).addClass("obj3");
					}
				$(".null").hide();
				$(".select-prompt .select-item span").eq(2).html("<li>"+$(this).text()+"</li>");
				});
				$("#item4 li").click(function(){
				$(this).toggleClass("obj4");
				var i=".obj4";
				b=1;
					if(b=1){
						$(i).removeClass("obj4");
						$(this).addClass("obj4");
					}
				$(".null").hide();
				$(".select-prompt .select-item span").eq(3).html("<li>"+$(this).text()+"</li>");
				});
				
				$("#item5 li").click(function(){
				$(this).toggleClass("obj5");
				var i=".obj5";
				b=1;
					if(b=1){
						$(i).removeClass("obj5");
						$(this).addClass("obj5");
					}
				$(".null").hide();
				$(".select-prompt .select-item span").eq(4).html("<li>"+$(this).text()+"</li>");
				});
			    $("#item6 li").click(function(){
				$(this).toggleClass("obj6");
				var i=".obj6";
				b=1;
					if(b=1){
						$(i).removeClass("obj6");
						$(this).addClass("obj6");
					}
				$(".null").hide();
				$(".select-prompt .select-item span").eq(5).html("<li>"+$(this).text()+"</li>");
				});
				$("#item7 li").click(function(){
				$(this).toggleClass("obj7");
				var i=".obj7";
				b=1;
					if(b=1){
						$(i).removeClass("obj7");
						$(this).addClass("obj7");
					}
				$(".null").hide();
				$(".select-prompt .select-item span").eq(6).html("<li>"+$(this).text()+"</li>");
				});
				$(".select-item-box .select-item li").click(function(){
					$(".all-cal").css("display","block");
				});
				$(".all-cal").click(function(){
					$(".select-prompt .select-item li").hide();
					$(".select-item li").removeClass("obj1 obj2 obj3 obj4 obj5 obj6 obj7");
					$(".null").show();
					});