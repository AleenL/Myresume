
			var getYourAgeBtn = $('.getYourAgeBtn'),
				satrtPath = $('.beginPath'),
				getYourAge = $('.getYourAge').find('input'),
				getParentAge = $('.getParentAge').find('input'),
				loadPage = $('.shadow')
				
			$('#yourLeft').fullpage({
				scrollingSpeed: 800,
				anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7', 'page8'],
				afterRender: function() {
					$.fn.fullpage.setAllowScrolling(false);
					var leftBox = $('.lifeBox'),
						newTr ='<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>',	
						newArray = []
					for(let i = 0; i < 30; i++) {
						newArray.push(newTr)
					}
					newArray.forEach(function(e){
						for(let i=0;i<leftBox.length;i++){
							leftBox.eq(i).find('table').append(e)
						}
					})
					
				},
				afterLoad: function(anchorLink, index){
					function judgeNumber(node){
						var nodeNume = node.val()
						newNum = parseInt(nodeNume)
						if(newNum>0&&newNum<75&&nodeNume.length<=2){
							node.parent().find('.errorMessage').html('输入数字即可')
							node.parent().find('.errorMessage').css('color','#999')
							return true
						}else{
							node.parent().find('.errorMessage').html('请输入正确的数值')
							node.parent().find('.errorMessage').css('color','red')
							return false
						}
					}
					if(index == 2){
						getYourAgeBtn.on('click',function(){
							judgeNumber(getYourAge)
							$.fn.fullpage.moveTo('page3',0)
						})
					}
					if(index == 3){
						satrtPath.on('click',function(){
							judgeNumber(getParentAge)
							var weAge = parseInt(getParentAge.val())-parseInt(getYourAge.val())
							if(weAge<10){
								getParentAge.parent().find('.errorMessage').html('父母的年龄至少比你大10岁吧？')
								getParentAge.parent().find('.errorMessage').css('color','red')
								return false
							}
							if(!judgeNumber(getParentAge)) return false;
							loadPage.fadeIn(1000)
							loadPage.find('p').addClass('jello-horizontal')
							setTimeout(function(){
								loadPage.fadeOut(1000)
								$.fn.fullpage.moveTo('page4',0)
							},4000)

						})
					}
					if(index == 4){
						var alltd4 = $('.section4 td'),
							yourLifeBox = parseInt(getYourAge.val())*12,
							spanYear = $('.section4 p span')

						spanYear.html(getYourAge.val())
						for(let i=0;i<(yourLifeBox-1);i++){
							alltd4.eq(i).addClass('color-change-2x')
						}
					}
					if(index == 5){
						var alltd5 = $('.section5 td'),
							yourLifeBox = parseInt(getYourAge.val())*12,
							yourSupBox = parseInt((900-yourLifeBox)*0.666),
							numberStart = (900-yourSupBox)
						for(let i=numberStart;i<(900);i++){
							alltd5.eq(i).addClass('color-change-2x')
						}
					}
					if(index == 6){
						var alltd6 = $('.section6 td'),
							spanYear6 = $('.section6 p span'),
							yourParentBox = parseInt(getParentAge.val())*12
							spanYear6.html(getParentAge.val())
						for(let i=yourParentBox;i<900;i++){
							alltd6.eq(i).addClass('color-change-2x')
						}
					}
					if(index == 7){
						var	alltd7 = $('.section7 td'),
							ParentSupMonBox = 900 - parseInt((getParentAge.val()*24)/30)
						for(let i=ParentSupMonBox;i<900;i++){
							alltd7.eq(i).addClass('color-change-2x')
						}
					}
					if(index == 8){
						var	alltd8 = $('.section8 td'),
						ParentSupDayBox = 900 - parseInt(((76 - parseInt(getYourAge.val()))*2)/30)

						if(ParentSupDayBox<=1){
							alltd8.eq(899).addClass('color-change-2x')
						}else{
							for(let i=ParentSupDayBox;i<900;i++){
								alltd8.eq(i).addClass('color-change-2x')
							}
						}
					}
				},
			})