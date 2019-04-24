
$(document).ready(function () {

    $('#contact_form').validate({ 
        rules: {
            firstname: {
                required: true,
                minlength: 5
            },
            lastname: {
                required: true,
                minlength: 5
            },
            email: {
                required: true,
                email: true
                
            }
        },
        //For Demo purposes
        submitHandler: function (form) { 
            alert('valid form submitted'); 
            return false; 
        }
    });
    $(".form-wrapper__header__button > a ").click(function () {

        $header = $(this);
        //getting the next element
        $content = $header.parent().parent().next();
        $buttoncontainer = $header.parent();
        //open up the content needed - toggle the slide- if visible, slide up, if not slidedown.
        $content.slideToggle(500, function () {
            //execute this after slideToggle is done
            //change text of header based on visibility of content div
            $header.text(function () {
                //change text based on condition
                return $content.is(":visible") ? "x" : "Get in Touch";
            });
    
            if($header.text() == "x"){
                $buttoncontainer.addClass('isOpen');
                $buttoncontainer.removeClass('isClosed');
            }
            else{
                $buttoncontainer.addClass('isClosed');
                $buttoncontainer.removeClass('isOpen');
            }
        });
    
    });

});

