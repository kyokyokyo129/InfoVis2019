
(function () {

    var slider = [];

    var output = [];

    var input = [];

    var dragging = [];

    var value = [];

    var width = [];

    for (var i = 1; i < 9; i++) {

        slider[i] = document.getElementById('slider' + i);

        output[i] = document.getElementById('slider' + i + 'o');

        input[i] = slider[i].getElementsByTagName('input')[0];

        dragging[i] = false;

        value[i] = output[i].value;

        width[i] = input[i].clientWidth / 2;

    }



    var set_value = function () {

        // つまみのサイズ(input.clientWidth)だけ位置を調整

        for (var i = 1; i < 9; i++) {

            input[i].style.left = (value[i] - input[i].clientWidth / 2) + 'px';

            output[i].value = value[i];

        }

    };

    set_value();



// 目盛り部分をクリックしたとき

    slider[1].onclick = function (evt) {

        dragging[1] = true;

        document.onmousemove(evt);

        document.onmouseup();

    };

    slider[2].onclick = function (evt) {

        dragging[2] = true;

        document.onmousemove(evt);

        document.onmouseup();

    };

    slider[3].onclick = function (evt) {

        dragging[3] = true;

        document.onmousemove(evt);

        document.onmouseup();

    };

    slider[4].onclick = function (evt) {

        dragging[4] = true;

        document.onmousemove(evt);

        document.onmouseup();

    };

    slider[5].onclick = function (evt) {

        dragging[5] = true;

        document.onmousemove(evt);

        document.onmouseup();

    };

    slider[6].onclick = function (evt) {

        dragging[6] = true;

        document.onmousemove(evt);

        document.onmouseup();

    };

    slider[7].onclick = function (evt) {

        dragging[7] = true;

        document.onmousemove(evt);

        document.onmouseup();

    };

    slider[8].onclick = function (evt) {

        dragging[8] = true;

        document.onmousemove(evt);

        document.onmouseup();

    };



// ドラッグ開始

    input[1].onmousedown = function (evt) {

        dragging[1] = true;

        return false;

    };

    input[2].onmousedown = function (evt) {

        dragging[2] = true;

        return false;

    };

    input[3].onmousedown = function (evt) {

        dragging[3] = true;

        return false;

    };

    input[4].onmousedown = function (evt) {

        dragging[4] = true;

        return false;

    };

    input[5].onmousedown = function (evt) {

        dragging[5] = true;

        return false;

    };

    input[6].onmousedown = function (evt) {

        dragging[6] = true;

        return false;

    };

    input[7].onmousedown = function (evt) {

        dragging[7] = true;

        return false;

    };

    input[8].onmousedown = function (evt) {

        dragging[8] = true;

        return false;

    };



// ドラッグ終了

    document.onmouseup = function (evt) {

        for (var i = 1; i < 9; i++) {

            if (dragging[i]) {

                dragging[i] = false;

                output[i].value = value[i];

            }

        }

    };

    document.onmousemove = function (evt) {

        for (var i = 1; i < 9; i++) {

            if (dragging[i]) {

                // ドラッグ途中

                if (!evt) {

                    evt = window.event;

                }

                var left = evt.clientX;

                var rect = slider[i].getBoundingClientRect();

                // マウス座標とスライダーの位置関係で値を決める

                value[i] = Math.round(left - rect.left - width[i]);

                // スライダーからはみ出したとき

                if (value[i] < 0) {

                    value[i] = 0;

                } else if (value[i] > slider[i].clientWidth) {

                    value[i] = slider[i].clientWidth;

                }

                set_value();

                return false;

            }

        }

    };

})();
