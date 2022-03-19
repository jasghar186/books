$("document").ready(function() {
    // declare variables
    let elements = $("body *");
    let counter = 0;


    for (let i = 0; i < elements.length; i++) {
        elements[counter].setAttribute("tabindex" , i)
        counter++
    }
    
     // stick header on top with window scroll event
     $(window).scroll(function () {
        let windowScrolled = $(window).scrollTop();
        let breakPoint = $("body").offset().top = 100
        if (windowScrolled > breakPoint) {
            $("header").css({ "position": "fixed", "top": "0",  "box-shadow": "0px 2px 10px 0px rgba(252,252,252,0.35) " , "background" : "#000000a5" })
        } else {

            $("header").css({ "position": "absolute",  "box-shadow": "0px 2px 10px 0px rgba(252,252,252,0)", "background" : "transparent"})
        }

    })
})

