(function () {
    var list = document.querySelector('.content-ul');
    var num = 0, timers = 2000, li = list.children[0].cloneNode(true), listHeight = 30;
    list.appendChild(li);
    setInterval(moveNext, timers);
    function moveNext() {
        var from = num * listHeight;
        num++;
        var to = num * listHeight;
        var total = 500, interval = 10; // 变化的总时间,变化的间隔时间
        var times = total / interval;   // 变化的次数
        var total_time = (to - from) / times;   // 每次变化的量
        var timeID = setInterval(() => {
            from += total_time;
            if (from >= to) {
                clearInterval(timeID);
                if (num === list.children.length - 1) {
                    from = 0;
                    num = 0;
                }
            }
            list.scrollTop = from;
        }, interval);
    }
})()