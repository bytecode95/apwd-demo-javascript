$(document).ready(loadScript)

function loadScript(){
    $("#btn").click(function(){
        $("#text").hide();
    })

    $(".text-2").mouseenter(function(){
        $(".text-2").hide();
    })
}

