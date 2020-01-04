countLike();
$(document).ready(function() {
    $('#btn').click(like);
});

function countLike() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {

        chrome.tabs.sendMessage(tabs[0].id, { fbLike: "getLike" }, function(response) {
            $("#num").html(response.soLike);
            console.log(response.soLike);
        });
    });
}

function like() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {

        chrome.tabs.sendMessage(tabs[0].id, { fbLike: "like" }, function(response) {
            $("#text").html('đã like');
            $('#btn').remove();
        });
    });
}