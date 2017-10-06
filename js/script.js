$(document).ready(function() {
    $("#fullpage").fullpage({
        anchors: ["home", "about", "service", "offering", "contact"],
        menu: ".nav",
        autoScrolling: false,
        scrollingSpeed: 500,
        resize: !0,
        touchSensitivity: 7,
        normalScrollElementTouchThreshold: 3,
    });
});