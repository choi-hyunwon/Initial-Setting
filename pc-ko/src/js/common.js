/**
 * --------------------------------------------------------------------------
 *  common.js
 * --------------------------------------------------------------------------
 */

var front = front || {};


front.common = front.common || {};

front.common = (function () {

  var init = function() {
    this.a();
    this.commonHandler();
    this.scrollHeader();

  };

  var a = function () {
    $('a[href="#"]').on('click', function (e) {
      e.preventDefault();
    });
  }
  var scrollHeader = function () {
    var scrollableElement = document.body; //document.getElementById('scrollableElement');
    scrollableElement.addEventListener('wheel', checkScrollDirection);
    // console.log(scrollableElement);
  }

  function checkScrollDirection(event) {
    // console.log('scrollableElement');
    // console.log(event.deltaY < 0);
    // console.log(window.pageYOffset);
    if (event.deltaY < 0) {
      // console.log('UP');
      if (window.pageYOffset > 124){
        $('.header').show()
            .css({'position': 'fixed','top':'0'})
            .addClass('header-sm')
      } else {
        $('.header').show()
            .css({'position': 'relative'})
            .removeClass('header-sm');
        $('.header-main').show()
            .css({'position': 'absolute'})
      }
    } else {
      // console.log('Down');
      // console.log(window.scrollY);
      if (window.pageYOffset > 124){
        $('.header').hide()
      }
    }
  }

  var commonHandler = function () {
    $('._btnTooltip').on('click',function (){
        $('.text-box').hide();
        $(this).siblings().show();
      })

    $('._btnTooltipClose').on('click',function (){
        $(this).parent().hide();
      })

    $('._fileUpload .form-control-file').on('change', function(){
      var target = $(this).parent().find('.file-box');
      if(typeof(this.files) !='undefined'){
        if(this.files.length == 0){
          target.removeClass('withFile').text(target.data('default'));
        }
        else {
          var file = this.files[0];
          var name = file.name;
          target.parent().addClass('withFile');
          target.html('<span>'+ name +'</span><a href="#" class="btn-delete"><em class="sr-only">file delete</em></a>');
        }
      }
      return false;
    });

    if(!$('.full-bg.macrogen.no-bg').length) {
      if($('.full-bg.macrogen').length) {
        if($('html, body').scrollTop() === 0) {
          // 서브 배경 애니메이션
          var sub = setTimeout(function() {
            // console.log($('html, body').scrollTop())
            if($('html, body').scrollTop() !== 0) clearTimeout(sub)
            else $('html, body').animate({scrollTop: 980}, 200);
          }, 3000);
        }
      }
      // 스크롤 애니메이션
      AOS.init();
    }

    // 연혁 인터랙션
    $(document).ready(function (){
      $(window).on('resize scroll',function() {
        // 공통
        var currentPosition = $(window).scrollTop();
        var gap = 50;
        var gapYear = 79;

        // 첫 번째 섹션
        var firstSectionItem1 = $('#information .desc-info ul').eq(0).offset().top - gap
        var firstSectionItem2 = $('#information .desc-info ul').eq(1).offset().top - gap
        var firstSectionItem3 = $('#information .desc-info ul').eq(2).offset().top - gap
        var firstSectionScrollStart = currentPosition - firstSectionItem1 + 123;
        var $firstInformationYear = $('#information').find('.year-info');

        if(currentPosition > firstSectionItem1 && currentPosition < firstSectionItem2) {
          $firstInformationYear.css({'top' : firstSectionScrollStart },{'position' : 'fixed'});
          $firstInformationYear.find('li').eq(0).addClass('active').siblings().removeClass('active')
        } else if(currentPosition > firstSectionItem2 && currentPosition < firstSectionItem3) {
          $firstInformationYear.css({'top' : firstSectionScrollStart - gapYear },{'position' : 'fixed'});
          $firstInformationYear.find('li').eq(1).addClass('active').siblings().removeClass('active')
        } else if(currentPosition > firstSectionItem3) {
          $firstInformationYear.css({'top' : firstSectionScrollStart - (gapYear * 2) },{'position' : 'fixed'});
          $firstInformationYear.find('li').eq(2).addClass('active').siblings().removeClass('active')
        } else {
          $firstInformationYear.find('li').eq(0).css({'top' : 'auto' },{'position' : 'absolute'});
        }

        // 두 번째 섹션
        var secondSectionItem1 = $('#information2 .desc-info ul').eq(0).offset().top - gap
        var secondSectionItem2 = $('#information2 .desc-info ul').eq(1).offset().top - gap
        var secondSectionItem3 = $('#information2 .desc-info ul').eq(2).offset().top - gap
        var secondSectionItem4 = $('#information2 .desc-info ul').eq(3).offset().top - gap
        var secondSectionItem5 = $('#information2 .desc-info ul').eq(4).offset().top - gap
        var secondSectionItem6 = $('#information2 .desc-info ul').eq(5).offset().top - gap
        var secondSectionItem7 = $('#information2 .desc-info ul').eq(6).offset().top - gap
        var secondSectionItem8 = $('#information2 .desc-info ul').eq(7).offset().top - gap
        var secondSectionItem9 = $('#information2 .desc-info ul').eq(8).offset().top - gap
        var secondSectionItem10 = $('#information2 .desc-info ul').eq(9).offset().top - gap
        var secondSectionScrollStart = currentPosition - secondSectionItem1 + 123;
        var $secondInformationYear = $('#information2').find('.year-info');

        if(currentPosition > secondSectionItem1 && currentPosition < secondSectionItem2) {
          $secondInformationYear.css({'top' : secondSectionScrollStart },{'position' : 'fixed'});
          $secondInformationYear.find('li').eq(0).addClass('active').siblings().removeClass('active')
        } else if(currentPosition > secondSectionItem2 && currentPosition < secondSectionItem3) {
          $secondInformationYear.css({'top' : secondSectionScrollStart - gapYear },{'position' : 'fixed'});
          $secondInformationYear.find('li').eq(1).addClass('active').siblings().removeClass('active')
        } else if(currentPosition > secondSectionItem3 && currentPosition < secondSectionItem4) {
          $secondInformationYear.css({'top' : secondSectionScrollStart - (gapYear * 2) },{'position' : 'fixed'});
          $secondInformationYear.find('li').eq(2).addClass('active').siblings().removeClass('active')
        } else if(currentPosition > secondSectionItem4 && currentPosition < secondSectionItem5) {
          $secondInformationYear.css({'top' : secondSectionScrollStart - (gapYear * 3) },{'position' : 'fixed'});
          $secondInformationYear.find('li').eq(3).addClass('active').siblings().removeClass('active')
        } else if(currentPosition > secondSectionItem5 && currentPosition < secondSectionItem6) {
          $secondInformationYear.css({'top' : secondSectionScrollStart - (gapYear * 4) },{'position' : 'fixed'});
          $secondInformationYear.find('li').eq(4).addClass('active').siblings().removeClass('active')
        } else if(currentPosition > secondSectionItem6 && currentPosition < secondSectionItem7) {
          $secondInformationYear.css({'top' : secondSectionScrollStart - (gapYear * 5) },{'position' : 'fixed'});
          $secondInformationYear.find('li').eq(5).addClass('active').siblings().removeClass('active')
        } else if(currentPosition > secondSectionItem7 && currentPosition < secondSectionItem8) {
          $secondInformationYear.css({'top' : secondSectionScrollStart - (gapYear * 6) },{'position' : 'fixed'});
          $secondInformationYear.find('li').eq(6).addClass('active').siblings().removeClass('active')
        } else if(currentPosition > secondSectionItem8 && currentPosition < secondSectionItem9) {
          $secondInformationYear.css({'top' : secondSectionScrollStart - (gapYear * 7) },{'position' : 'fixed'});
          $secondInformationYear.find('li').eq(7).addClass('active').siblings().removeClass('active')
        } else if(currentPosition > secondSectionItem9 && currentPosition < secondSectionItem10) {
          $secondInformationYear.css({'top' : secondSectionScrollStart - (gapYear * 8) },{'position' : 'fixed'});
          $secondInformationYear.find('li').eq(8).addClass('active').siblings().removeClass('active')
        } else if(currentPosition > secondSectionItem10) {
          $secondInformationYear.css({'top' : secondSectionScrollStart - (gapYear * 9) },{'position' : 'fixed'});
          $secondInformationYear.find('li').eq(9).addClass('active').siblings().removeClass('active')
        } else {
          $secondInformationYear.find('li').eq(0).css({'top' : 'auto' },{'position' : 'absolute'});
        }

        // 세 번째 섹션
        var thirdSectionItem1 = $('#information3 .desc-info ul').eq(0).offset().top - gap
        var thirdSectionItem2 = $('#information3 .desc-info ul').eq(1).offset().top - gap
        var thirdSectionItem3 = $('#information3 .desc-info ul').eq(2).offset().top - gap
        var thirdSectionItem4 = $('#information3 .desc-info ul').eq(3).offset().top - gap
        console.log(currentPosition)
        console.log(thirdSectionItem4)
        var thirdSectionScrollStart = currentPosition - thirdSectionItem1 + 123;
        var $thirdInformationYear = $('#information3').find('.year-info');

        if(currentPosition > thirdSectionItem1 && currentPosition < thirdSectionItem2) {
          $thirdInformationYear.css({'top' : thirdSectionScrollStart },{'position' : 'fixed'});
          $thirdInformationYear.find('li').eq(0).addClass('active').siblings().removeClass('active')
        } else if(currentPosition > thirdSectionItem2 && currentPosition < thirdSectionItem3) {
          $thirdInformationYear.css({'top' : thirdSectionScrollStart - gapYear },{'position' : 'fixed'});
          $thirdInformationYear.find('li').eq(1).addClass('active').siblings().removeClass('active')
        } else if(currentPosition > thirdSectionItem3 && currentPosition < thirdSectionItem4) {
          $thirdInformationYear.css({'top' : thirdSectionScrollStart - (gapYear * 2) },{'position' : 'fixed'});
          $thirdInformationYear.find('li').eq(2).addClass('active').siblings().removeClass('active')
        } else if(currentPosition > 9000) {
          $thirdInformationYear.css({'top' : thirdSectionScrollStart - (gapYear * 3) },{'position' : 'fixed'});
          $thirdInformationYear.find('li').eq(3).addClass('active').siblings().removeClass('active')
        } else {
          $thirdInformationYear.find('li').eq(0).css({'top' : 'auto' },{'position' : 'absolute'});
        }
      });
    })
  }



  return {
    a : a,
    commonHandler : commonHandler,
    scrollHeader : scrollHeader,
    init : init,
  }
})();

$(function () {
  front.common.init();
});
