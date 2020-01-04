function count_Like() {
    var number = $('._6a-y._3l2t._18vj').length;
    return number;
}
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.fbLike === "getLike") {
            var countLikes = count_Like();
            sendResponse({ soLike: countLikes })
        }
        if (request.fbLike === "like") {
            like();
            // sendResponse({ soLike: countLikes })
        }
    }
)

function like() {
    $like_btn = $("._6a-y._3l2t._18vj");
    $love_btb = document.querySelectorAll('span[data-testid=reaction_2')
    $like_btn.each(function(index) {
        this.click()

    });
}