function initListeners() {
    $("#hamburger-icon").on("click", function (e) {
        // this.classList.toggle("open");
        document.body.classList.toggle('open');
    })

    $(".cover").on("click", function (e) {
        // this.classList.toggle("open");
        document.body.classList.toggle('open');
    })
}

$(document).ready(function(){
    initListeners();
})