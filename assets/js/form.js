$('#sign-up-form').submit(function() {
    event.preventDefault();
    
    let submission = {
       company: $('#company').val(),
       city: $("#city").val(),
       fname: $("#fname").val(),
       lname: $("#lname").val(),
       email: $("#email").val(),
       title: $("#title").val()
    }
    // needs for recaptacha ready
    grecaptcha.ready(function() {
        // do request for recaptcha token
        // response is promise with passed token
        grecaptcha.execute('6LcpB-IUAAAAAEpymRWuTGs_DO7PIsegE-Bv-u2k', {action: 'submit_form'}).then((token) => {
           // add token to form
           $('#sign-up-form').prepend(`<input type="hidden" name="g-recaptcha-response" value="${token}">`);
           submission.token = token;
           $.post("contact.php",submission, function(result) {
                if(result && result.trim() == 'Success') {
                    alert('Thanks for your submission.')
                } else {
                    alert('Submission failed.  Spammer detected.')
                }
             });
        });;
    });
});