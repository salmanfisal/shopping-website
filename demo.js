// main.js
$(document).ready(function() {
    $(".imagesSelect").click(function(){
       const selectedImg =  $(this).attr("src")
       $(".imagesSelect").removeClass("selected")
       $(this).addClass("selected")
       $(".productImages").attr("src",selectedImg)

       $(".imageContainer").fadeIn()
    });
  
    // $(document).click(function(event){
    //     if(!$(event.target).closest(".imageSection",".imageContainer").length){
    //         $(".imageContainer").fadeOut()
    //     }

    // })
    // $(".productImages").mousemove(function(e) {
    //     // Calculate the position of the magnifier based on mouse coordinates
    //     const magnifier = $(".magnifier");
    //     const imageContainer = $(".imageContainer");
    //     const offsetX = e.pageX - imageContainer.offset().left - magnifier.width() / 2;
    //     const offsetY = e.pageY - imageContainer.offset().top - magnifier.height() / 2;

    //     // Set the position of the magnifier
    //     magnifier.css({
    //         left: offsetX,
    //         top: offsetY
    //     });

    //     // Update the background image position to match the magnifier position
    //     magnifier.css({
    //         "background-position": `-${offsetX}px -${offsetY}px`
    //     });
    // });
});


