$( document ).ready(function() {
     /* активация кнопок подсказки*/
    $(".modal-hint span").click(function () {
        $(".hint-container__text").removeClass("on");
            var block =$(this).closest('.hint-container').find('.hint-container__text');
            block.addClass("on");
          return false;
      });
    $(document).click(function(event) {
        $(".hint-container__text").removeClass("on");
      event.stopPropagation();
    });/* спрятать кнопку подсказки */
});