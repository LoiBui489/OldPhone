$(document).ready(function () {
    let deg = 0;
    let y2 = window.scrollY + $(".arrow").offset().top // X
    let count = 0;

    function back() {
        deg = 0;
        $(".numbers").css({
            "transform": `rotate(${deg}deg)`
        });

        $(".number").css({
            "transform": `rotate(-${deg}deg)`
        });
    }

    $(".number").on("click", function () {
        let num = $(this);
        count++;
        let y = window.scrollY + $(num).offset().top // Y
        let x = window.scrollY + $(num).offset().left // X
        let x2 = window.scrollY + $(".arrow").offset().left // X
        let add = 40;

        let rotate = setInterval(function() {
            y = window.scrollY + $(num).offset().top // Y
            x = window.scrollY + $(num).offset().left // X
            deg = deg + add;

            $(".numbers").css({
                "transition": "all 0.5s",
                "transform": `rotate(${deg}deg)`
            });
    
            $(".number").css({
                "transition": "all 0.5s",
                "transform": `rotate(-${deg}deg)`
            });

            if (y > y2 && x > x2 - 50) {
                back();
                console.log();
                $("p").html($("p").html().replace("_", $(num).html()));
            }

            if (deg == 0) {
                clearInterval(rotate);
            }
        }, 100);
    });

    $(".clear").click(function (e) { 
        e.preventDefault();
        $("p").html("__________");
        count = 0;
    });

    $(".undo").click(function (e) { 
        e.preventDefault();
        if (count != 0) {
            let str = $("p").html();
            str = str.substring(0, count - 1) + str.substring(count) + "_";
            $("p").html(str);
            count --;
        }
    });
});