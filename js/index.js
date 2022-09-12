// 点击"I am over 21"后，隐藏弹窗与遮罩层
$(function () {
    $(".mask .popup .right").click(function(){
        $(".mask").css("display", "none");
    });
});

// 获取页面滚动位置，判断导航栏是否粘在顶部
$(function () {
    $(window).scroll(getScrollTop);
    function getScrollTop() {
        let scroll_top = $(window).scrollTop();
        if(scroll_top < 52) {
            $(".top .navigation").css("position", "relative"); 
        }else {
            $(".top .navigation").css("position", "fixed");
        }
    }
});

// 鼠标移动到导航栏product下拉显示隐藏
$(function () {
    $(".top .pull-down").hover(function(){
        $(".top .product").css("display", "flex");
    }, function(){
        $(".top .product").css("display", "none");
    });
});

// banner轮播图
const bannerSwiper = new Swiper('.banner .swiper', {
    autoplay: true,     // 自动播放
    delay: 5000,        // 自动播放时间，单位毫秒
    speed: 300,         // 切换幻灯片时间，单位毫秒
    loop: true,         // 循环模式，看起来像是无限循环
    navigation: {       // 开启前进后退按钮
        nextEl: '.banner .swiper-button-next',
        prevEl: '.banner .swiper-button-prev',
    },
    pagination: {       // 开启分页器，轮播图的小圆点
        el: '.banner .swiper-pagination',
        clickable: true,    //点击小圆点切换到相应的幻灯片
    },
});

// banner轮播图，鼠标移出隐藏按钮，移入显示按钮
$(function () {
    $(".banner .swiper").hover(function(){
        $(".banner .swiper-button-prev, .banner .swiper-button-next").css("display", "block");
    }, function(){
        $(".banner .swiper-button-prev, .banner .swiper-button-next").css("display", "none");
    });
});

// 产品展示
const containerSwiper = new Swiper('.container .swiper', {
    autoplay: true,     // 自动播放
    delay: 5000,        // 自动播放时间，单位毫秒
    speed: 1000,        // 切换幻灯片时间，单位毫秒
    navigation: {       // 开启前进后退按钮
        nextEl: '.container .swiper-button-next',
        prevEl: '.container .swiper-button-prev',
    },
    slidesPerView: 1,
    breakpoints: {
        320: {          // 当屏幕宽度大于等于320
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1280: {
            slidesPerView: 3,
        },
        2560: {
            slidesPerView: 4,
        },
        4096: {
            slidesPerView: 5,
        }
    },
});