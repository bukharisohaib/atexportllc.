jQuery(document).ready(function($) {
    jQuery("#blue").click(function() {
        jQuery("#color").attr("href", "css/colors/blue.css");
        return false;
    });
    jQuery("#green").click(function() {
        jQuery("#color").attr("href", "css/colors/green.css");
        return false;
    });
    jQuery("#red").click(function() {
        jQuery("#color").attr("href", "css/colors/red.css");
        return false;
    });

    jQuery("#yellow").click(function() {
        jQuery("#color").attr("href", "css/colors/yellow.css");
        return false;
    });
    jQuery("#brown").click(function() {
        jQuery("#color").attr("href", "css/colors/brown.css");
        jQuery(".logo img").attr("src", "images/logo.png");
        return false;
    });
    jQuery("#cyan").click(function() {
        jQuery("#color").attr("href", "css/colors/cyan.css");
        jQuery(".logo img").attr("src", "images/logo.png");
        return false;
    });
    jQuery("#purple").click(function() {
        jQuery("#color").attr("href", "css/colors/purple.css");
        return false;
    });
    jQuery("#sky-blue").click(function() {
        jQuery("#color").attr("href", "css/colors/sky-blue.css");
        return false;
    });

    jQuery("#gray").click(function() {
        jQuery("#color").attr("href", "css/colors/gray.css");

        return false;
    });

    jQuery("#black").click(function() {
        jQuery("#color").attr("href", "css/colors/black.css");
        return false;
    });


    jQuery("#default").click(function() {
        jQuery("#color").attr("href", "css/colors/sky-default.css");
        return false;
    });


    jQuery("#white").click(function() {
        jQuery("#color").attr("href", "css/colors/white.css");
        return false;
    });

    jQuery("#light").click(function() {
        jQuery("#color").attr("href", "css/light.css");
        return false;
    });

    jQuery("#dark").click(function() {
        jQuery("#color").attr("href", "css/dark.css");
        return false;
    });

    jQuery("#peter-river").click(function() {
        jQuery("#color").attr("href", "css/colors/peter-river.css");
        return false;
    });

    jQuery("#nephritis").click(function() {
        jQuery("#color").attr("href", "css/colors/nephritis.css");
        return false;
    });
    jQuery("#amethyst").click(function() {
        jQuery("#color").attr("href", "css/colors/amethyst.css");
        return false;
    });
    jQuery("#wet-asphalt").click(function() {
        jQuery("#color").attr("href", "css/colors/wet-asphalt.css");
        return false;
    });

    jQuery("#night-shade").click(function() {
        jQuery("#color").attr("href", "css/colors/night-shade.css");
        return false;
    });

    jQuery("#sun-flowers").click(function() {
        jQuery("#color").attr("href", "css/colors/sun-flowers.css");
        return false;
    });

    jQuery("#orange").click(function() {
        jQuery("#color").attr("href", "css/colors/orange.css");
        return false;
    });

    jQuery("#carrot").click(function() {
        jQuery("#color").attr("href", "css/colors/carrot.css");
        return false;
    });


    jQuery("#alizarin").click(function() {
        jQuery("#color").attr("href", "css/colors/alizarin.css");
        return false;
    });
    jQuery("#silver").click(function() {
        jQuery("#color").attr("href", "css/colors/silver.css");
        return false;
    });

    jQuery("#green-sea").click(function() {
        jQuery("#color").attr("href", "css/colors/green-sea.css");
        return false;
    });

    jQuery(".layouts #boxed").click(function(e) {
        e.preventDefault();
        jQuery("body").addClass("boxed-layout");
    });
    jQuery(".layouts #wide").click(function(e) {
        e.preventDefault();
        jQuery("body").removeClass("boxed-layout");
    });

    // Picker buttton
    jQuery(".picker_close").click(function(e) {
        e.preventDefault();
        jQuery("#choose_color").toggleClass("position");
    });
});