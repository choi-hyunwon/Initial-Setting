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
  };

  var a = function () {
    $('a[href="#"]').on('click', function (e) {
      e.preventDefault();
    });
  }

  var commonHandler = function () {
    $(".header").sticky({topSpacing:0});

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
          target.html(`<span>${name}</span><a href="#" class="btn-delete"><em class="sr-only">file delete</em></a>`);
        }
      }
      return false;
    });
  }

  return {
    a : a,
    commonHandler : commonHandler,
    init : init
  }
})();

$(function () {
  front.common.init();
});
