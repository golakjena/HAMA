;(function(HAMA, $, undefined){
	var device = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

	$(function(){
		if(!device){
			//$("#dAbout").css({display:"block"});
			$("#mAbout").css({display:"none"});
			$("#aboutHama").css({display:"none"});

		}
		else{
			//$("#dAbout").css({display:"none"});
			$("#mAbout").css({display:"none"});
			$("#aboutHama").css({display:"none"});
		}

	});


	// Homepage
	HAMA.homePage = (function(){

		function _homePage(){

			this.mobileNav = function(){
				$(".btnMobileNav").on("click", function(){
					var display = $(".topNav").css("display");
					if(display == "none"){
						$(".topNav").stop(true, true).slideDown(300);
					}
					else{
						$(".topNav").stop(true, true).slideUp(300);	
					}
				});

				$(".btnProfile").on("click", function(){
					var display = $(".loginNav").css("display");
					if(display == "none"){
						$(".loginNav").stop(true, true).slideDown(300);
					}
					else{
						$(".loginNav").stop(true, true).slideUp(300);	
					}
				});

				/*$("#mAbout").on("click", function(){
					var display = $(this).closest("li").find("ul").css("display");
					if(display == "none"){
						$(this).closest("li").find("ul").stop(true, true).slideDown(300);
					}
					else{
						$(this).closest("li").find("ul").stop(true, true).slideUp(300);	
					}
				});*/

			}

			function bannerAnimation(){
				$(".homeHeaderContent").waypoint(function(){
					TweenMax.staggerFrom([$(".homeHeaderContent h1"),$(".homeHeaderContent h3")], 2, {bottom:-100, opacity:0, delay:0.3, ease:Expo.easeOut}, 0.2);
				},{
					offset:"50%",
					triggerOnce:true
				});
			}

			function gotoUrl(){
				$(".heighlightList li").each(function(){
					$(this).on("click", function(){
						window.location.href = $(this).attr("data-href");
					});
				});
			}

			this.init = function(){
				HAMA.homePage.mobileNav();
				gotoUrl();
				if(!device){
					bannerAnimation();
				}
			}
		}

		return new _homePage();
	})();


	// Aboutus
	HAMA.aboutUs = (function(){

		function _aboutUs(){

			this.headingAnimation = function(){
				$(".heading").waypoint(function(){
					TweenLite.from($(".heading"), 1, {scale:0, opacity:0, ease:Expo.easeOut})
				},{
					offset:"50%",
					triggerOnce:true
				});
			}

			function chapters(){
				$(".chapterList li").css({opacity:0});
				$(".chapterList").waypoint(function(){
					$(".chapterList li").css({opacity:1});
					TweenMax.staggerFrom($(".chapterList li"), 2, {scale:0, opacity:0, delay:0.3, ease:Expo.easeOut}, 0.2);
				},{
					offset:"50%",
					triggerOnce:true
				});
			}

			this.init = function(){
				HAMA.homePage.mobileNav();
				if(!device){
					HAMA.aboutUs.headingAnimation();
					chapters();
				}
			}
		}

		return new _aboutUs();
	})();

	// Board Members
	HAMA.boardMembers = (function(){

		function _boardMembers(){

			function boardMemberList(){
				TweenMax.staggerFrom($(".boardMemberList li"), 2, {scale:0, opacity:0, delay:0.3, ease:Expo.easeOut}, 0.2);
			}

			this.init = function(){
				HAMA.homePage.mobileNav();
				if(!device){
					HAMA.aboutUs.headingAnimation();
					boardMemberList();
				}
			}
		}

		return new _boardMembers();
	})();

	// Contactus
	HAMA.contactUs = (function(){

		function _contactUs(){

			function boardMemberList(){
				TweenMax.staggerFrom($(".contactList li"), 2, {bottom:-100, opacity:0, delay:0.3, ease:Expo.easeOut}, 0.2);
			}

			this.init = function(){
				HAMA.homePage.mobileNav();
				if(!device){
					HAMA.aboutUs.headingAnimation();
					boardMemberList();
				}
			}
		}

		return new _contactUs();
	})();

	// Events
	HAMA.events = (function(){

		function _events(){

			function eventList(){
				TweenMax.staggerFrom($(".eventBox"), 2, {bottom:-50, opacity:0, delay:0.3, ease:Expo.easeOut}, 0.2);
			}

			this.init = function(){
				HAMA.homePage.mobileNav();
				if(!device){
					HAMA.aboutUs.headingAnimation();
					eventList();
				}
			}
		}

		return new _events();
	})();

	// Member
	HAMA.member = (function(){

		function _member(){

			function memberList(){
				TweenMax.staggerFrom($(".memberList li"), 2, {bottom:-50, opacity:0, delay:0.3, ease:Expo.easeOut}, 0.2);
			}

			this.init = function(){
				HAMA.homePage.mobileNav();
				if(!device){
					HAMA.aboutUs.headingAnimation();
					memberList();
				}
			}
		}

		return new _member();
	})();

})(window.HAMA = window.HAMA || {}, jQuery);


