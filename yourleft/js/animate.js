


 window.onload = function(){
 	
	var getYourAgeBtn = $('.getYourAgeBtn'),
		satrtPath = $('.beginPath'),
		getYourAge = $('.getYourAge').find('input'),
		getParentAge = $('.getParentAge').find('input'),
		loadPage = $('.shadow'),
		loadPage = $('.loadPage')
		
	loadPage.fadeOut()
	$('#yourLeft').fullpage({
		scrollingSpeed: 800,
		anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7', 'page8', 'page9'],
		afterRender: function() {
			$.fn.fullpage.setAllowScrolling(false);
			var leftBox = $('.lifeBox'),
				newTr = '<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>',
				newArray = []
			for(let i = 0; i < 30; i++) {
				newArray.push(newTr)
			}
			newArray.forEach(function(e) {
				for(let i = 0; i < leftBox.length; i++) {
					leftBox.eq(i).find('table').append(e)
				}
			})

			document.addEventListener('DOMContentLoaded', function() {
				function audioAutoPlay() {
					var audio = document.getElementById('bg-music');
					audio.play();
					document.addEventListener("WeixinJSBridgeReady", function() {
						audio.play();
					}, false);
				}
				audioAutoPlay();
			});

		},
		afterLoad: function(anchorLink, index) {
			function judgeNumber(node) {
				var nodeNume = node.val()
				newNum = parseInt(nodeNume)
				if(newNum > 0 && newNum < 75 && nodeNume.length <= 2) {
					node.parent().find('.errorMessage').html('输入数字即可')
					node.parent().find('.errorMessage').css('color', '#999')
					return true
				} else {
					node.parent().find('.errorMessage').html('请输入正确的数值')
					node.parent().find('.errorMessage').css('color', 'red')
					return false
				}
			}
			if(index == 2) {
				getYourAgeBtn.on('click', function() {
					judgeNumber(getYourAge)
					$.fn.fullpage.moveTo('page3', 0)
				})
			}
			if(index == 3) {
				satrtPath.on('click', function() {
					judgeNumber(getParentAge)
					var weAge = parseInt(getParentAge.val()) - parseInt(getYourAge.val())
					if(weAge < 10) {
						getParentAge.parent().find('.errorMessage').html('父母的年龄至少比你大10岁吧？')
						getParentAge.parent().find('.errorMessage').css('color', 'red')
						return false
					}
					if(!judgeNumber(getParentAge)) return false;
					loadPage.fadeIn(1000)
					loadPage.find('p').addClass('jello-horizontal')
					setTimeout(function() {
						loadPage.fadeOut(1000)
						$.fn.fullpage.moveTo('page4', 0)
					}, 4000)

				})
			}
			if(index == 4) {
				var alltd4 = $('.section4 td'),
					yourLifeBox = parseInt(getYourAge.val()) * 12,
					spanYear = $('.section4 p span'),
					bottomText = $('.section4 h4')

				spanYear.html(getYourAge.val())
				if(getYourAge.val() < 20) {
					bottomText.html("春风得意马蹄疾，一日看遍长安花")
				} else if(getYourAge.val() >= 20 && getYourAge.val() < 40) {
					bottomText.html("而立之年不啻过,十分减尽少年豪")
				} else if(getYourAge.val() >= 40 && getYourAge.val() < 60) {
					bottomText.html("公道世间唯白发，贵人头上不曾饶")
				} else {
					bottomText.html("世间何物催人老，半是鸡声半马蹄")
				}
				for(let i = 0; i < (yourLifeBox - 1); i++) {
					alltd4.eq(i).addClass('color-change-2x')
				}
			}
			if(index == 5) {
				var alltd5 = $('.section5 td'),
					yourLifeBox = parseInt(getYourAge.val()) * 12,
					yourSupBox = parseInt((900 - yourLifeBox) * 0.666),
					numberStart = (900 - yourSupBox)
				for(let i = numberStart; i < (900); i++) {
					alltd5.eq(i).addClass('color-change-2x')
				}
				bottomText5 = $('.section5 h4')
				bottomText5.html('生前何必久睡，死后自会长眠')
			}
			if(index == 6) {
				var alltd6 = $('.section6 td'),
					spanYear6 = $('.section6 p span'),
					yourParentBox = parseInt(getParentAge.val()) * 12,
					bottomText6 = $('.section6 h4')

				if(getParentAge.val() < 40) {
					bottomText6.html("慈母手中线，游子身上衣")
				} else if(getParentAge.val() >= 40 && getParentAge.val() < 50) {
					bottomText6.html("慈母倚门情，游子行路苦")
				} else if(getParentAge.val() >= 50 && getParentAge.val() < 70) {
					bottomText6.html("搴帏拜母河梁去，白发愁看泪眼枯")
				} else {
					bottomText6.html("尊前慈母在，浪子不觉寒")
				}
				spanYear6.html(getParentAge.val())
				for(let i = yourParentBox; i < 900; i++) {
					alltd6.eq(i).addClass('color-change-2x')
				}
			}
			if(index == 7) {
				var alltd7 = $('.section7 td'),
					ParentSupMonBox = parseInt(900 - (900 - getParentAge.val() * 12) * 2 / 30)
				for(let i = ParentSupMonBox; i < 900; i++) {
					alltd7.eq(i).addClass('color-change-2x')
				}
			}
			if(index == 8) {
				var alltd8 = $('.section8 td'),
					ParentSupDayBox = parseInt(900 - (75 - getParentAge.val()) * 2 / 30)
				console.log((75 - getParentAge.val()) * 2 / 30)
				if(ParentSupDayBox <= 899) {
					alltd8.eq(899).addClass('color-change-2x')
				} else {
					for(let i = ParentSupDayBox; i < 900; i++) {
						alltd8.eq(i).addClass('color-change-2x')
					}
				}
			}
		},
	})
 }