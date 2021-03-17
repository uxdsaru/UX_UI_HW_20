console.log("Your index.js file is loaded correctly!");

// Process Section
$(document).ready(function () {
    if ($(window).scrollTop() > 1200) {
        $("#navbar").css('opacity', '100');
    }

    $(document).on('scroll', function () {
        if ($(window).scrollTop() < 1200) {
            $("#navbar").css('opacity', '0'); 
        }

        if ($(window).scrollTop() > 1200) {
            $("#navbar").css('opacity', '100');
        }

        // Back to Top Button
        if ($(window).scrollTop() < 150) {
            $('.back-to-top').css('opacity', '0');
        }

        if ($(window).scrollTop() > 150) {
            $('.back-to-top').css('opacity', '100');
        }
    });
});