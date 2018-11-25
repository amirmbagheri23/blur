/*
 * Blur framework has been generated with AmirMohammad Bagheri for using in the ASP.Net MVC or Php.
 * Please dont remove the help comment. For use the Blur framework, include blur.js and blur.css in your project.
 * Blur framework must work with jquery and need jquery for using of the Blur framework.
 * Blur framework need to FontAwesome 4 or later for working currently.
 * Blur framework built for Fa language and maybe not working with En languages.
 * Generated date: 2018-11-25 15:21 - AmirMohammad Bagheri (Farakaraweb)
 */

/**
 * ShowAlert: Show Custome Alert box.
 * @param {string} message
 * @param {string} title
 * @param {string} link
 * @param {string} color
 */
function ShowAlert(message, title, link, color) {
    //Image
    var alert_icon = document.createElement("I");
    alert_icon.className = "fa fa-question-circle blur_alert_icon";
    //Overlly Box
    var overlly_box = document.createElement("DIV");
    overlly_box.className = "blur_overlly_box";
    overlly_box.id = "blur_overlly_box";
    //Message title
    var title_label = document.createElement("LABEL");
    title_label.className = "blur_title";
    title_label.innerHTML = "<i class='fa fa-square' style='margin-left: 5px;'></i>" + title;
    //Alert Header
    var alertHead = document.createElement("DIV");
    //Set color
    if (color != null && color != "") {
        alertHead.style = "background-color:" + color.toString() + " !important;";
    }
    //End
    alertHead.className = "blur_header";
    alertHead.appendChild(title_label);
    //Message tag
    var label = document.createElement("LABEL");
    label.className = "blur_message";
    label.innerHTML = message;
    //Alert Box
    var alertBody = document.createElement("DIV");
    $(alertBody).attr("id", "blurAlert");
    alertBody.className = "blur_body";
    alertBody.appendChild(alertHead);
    alertBody.appendChild(alert_icon);
    alertBody.appendChild(label);
    alertBody.style = "display: none;";
    //Action Buttons
    var acceptBtn = document.createElement("A");
    acceptBtn.className = "blur_accept_btn";
    acceptBtn.innerHTML = "تایید";
    $(acceptBtn).attr("onclick", "AcceptAlert(" + "'" + link + "'" + ")");
    var cancelBtn = document.createElement("A");
    cancelBtn.className = "blur_cancel_btn";
    cancelBtn.innerHTML = "انصراف";
    $(cancelBtn).attr("onclick", "CloseAlert();");
    var actionButtons = document.createElement("DIV");
    actionButtons.style = "display: block !important; padding: 5px !important; margin-bottom: 5px !important; direction: rtl !important; text-align: right !important; margin-top: 10px !important;";
    actionButtons.appendChild(acceptBtn);
    actionButtons.appendChild(cancelBtn);
    alertBody.appendChild(actionButtons);
    //Finish
    document.body.appendChild(overlly_box);
    document.body.appendChild(alertBody);
    $(alertBody).fadeIn(200);
}

function CloseAlert() {
    $('#blur_overlly_box').fadeOut(200);
    $('#blurAlert').fadeOut(200);
    setTimeout(function() {
            $('#blur_overlly_box').remove();
            $('#blurAlert').remove();
        },
        250);
}

function AcceptAlert(link) {
    window.location = link;
}

//Loading Box
/**
 * Show Loading Box for holding user for complete loading page.
 * @param {number} time
 */
function ShowLoadingBox(time) {
    var overlly_box = document.createElement("DIV");
    overlly_box.className = "blur_overlly_box";
    overlly_box.id = "blur_overlly_box_loading";
    //End
    var dots = [];
    for (var i = 0; i < 5; i++) {
        var dotDiv = document.createElement("DIV");
        dotDiv.className = "cssload-dot";
        dotDiv.id = "dot_" + i;
        dots.push(dotDiv);
    }
    //Loading Animate
    var parentDiv = document.createElement("DIV");
    parentDiv.id = "loading_dots_parent";
    parentDiv.className = "cssload-dots";
    parentDiv.style = "z-index: 1002;";
    for (var i = 0; i < 5; i++) {
        parentDiv.appendChild(dots[i]);
    }
    document.body.appendChild(overlly_box);
    document.body.appendChild(parentDiv);
    //End
    if (time == null) {
        window.addEventListener("load",
            function(event) {
                $("#blur_overlly_box_loading").fadeOut(200);
                $("#loading_dots_parent").fadeOut(200);
                setTimeout(function() {
                    $('#blur_overlly_box_loading').remove();
                    $('#loading_dots_parent').remove();
                }, 250);
            });
    } else {
        setTimeout(function() {
            $("#blur_overlly_box_loading").fadeOut(200);
            $("#loading_dots_parent").fadeOut(200);
            setTimeout(function () {
                $('#blur_overlly_box_loading').remove();
                $('#loading_dots_parent').remove();
            }, 250);
        }, time);
    }
}

function CloseLoadingBox() {
    $("#blur_overlly_box_loading").fadeOut(200);
    $("#loading_dots_parent").fadeOut(200);
    setTimeout(function () {
        $('#blur_overlly_box_loading').remove();
        $('#loading_dots_parent').remove();
    }, 250);
}

/* Image Preview */
/**
 * Show Image Preview
 * @param {string} imagePath
 */
function ShowImagePreview(imagePath) {
    //Overlly
    var overlly_box = document.createElement("DIV");
    overlly_box.className = "blur_overlly_box";
    overlly_box.id = "blur_overlly_box_image";
    //End

    //Image
    var image = document.createElement("img");
    image.src = imagePath;

    //Image Preview Box
    var image_box = document.createElement("DIV");
    image_box.className = "blur_image_box";
    image_box.id = "blur_image_box_show";
    image_box.appendChild(image);
    //End

    //Close Button
    var image_close = document.createElement("a");
    image_close.className = "image_close_btn";
    image_close.innerHTML = "&times;";
    image_close.id = "blur_image_box_close_btn";
    $(image_close).attr("onclick", "CloseImagePreview();");
    //End

    //Finish
    document.body.appendChild(overlly_box);
    document.body.appendChild(image_close);
    document.body.appendChild(image_box);
    $(overlly_box).fadeIn(200);
    $(image_close).fadeIn(200);
    $(image_box).fadeIn(200);
}

function CloseImagePreview() {
    $("#blur_overlly_box_image").fadeOut(200);
    $("#blur_image_box_show").fadeOut(200);
    $("#blur_image_box_close_btn").fadeOut(200);
    setTimeout(function() {
        $("#blur_overlly_box_image").remove();
        $("#blur_image_box_show").remove();
        $("#blur_image_box_close_btn").remove();
    }, 250);
}
