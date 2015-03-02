function validateForm() {
    var eMail = document.forms["ss-form"]["entry.193196971"].value;

    //For Email Validation
    var atpos = eMail.indexOf("@");
    var dotpos = eMail.lastIndexOf(".");

//Email
    if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=eMail.length) {
        alert("Please enter a valid email address.");
        //ga('send', 'event',  'Form', 'Error', 'EmailAddress');
        $('#entry_193196971').addClass('error');
        return false;
    }
    else if ( $('#entry_404726157').val() == "" ){
        alert("Please select a tour date.");
        //ga('send', 'event',  'Form', 'Error', 'EmailAddress');
        $('#entry_404726157').addClass('error');
        return false;
    }
    else{
        window.submitted=true;
    }
}

//Error Red Glow OFF
$(function(){
    $('#entry_2080480129').keyup(function(){
        $(this).removeClass('error');
    });
    $('#entry_471668626').keyup(function(){
        $(this).removeClass('error');
    });
    $('#entry_193196971').keyup(function(){
        $(this).removeClass('error');
    });
    $('#entry_1845520799').keyup(function(){
        $(this).removeClass('error');
    });
});

//No Spaces

//Add - onkeyup="nospaces(this)" to input fields

function nospaces(t){
    if(t.value.match(/\s/g)){
        ga('send', 'event',  'Form', 'Error', 'Spaces');
        alert('Sorry, no spaces allowed!');
        t.value=t.value.replace(/\s/g,'');
    }
}


//SHOW ZIP CODE//
$(function(){
    setInterval(function(){
        if($('#entry_404726157').val() === "ZIP"){
            $('#hider').show()
        }
        else{
            $('#hider').hide()
        }
    }, 100)
});

//Validate Zip//
$('#ss-submit').on('click', function(){
    if($('#entry_404726157').val() === "ZIP"){
        if($('#entry_684406722').val().length < 5 ){
            alert('Please enter a valid Zip Code.');
            return false;
        }
        else{
            return true;
        }
    }
});
