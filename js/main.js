$(function(){
    // $('선택할요소').offset().top
    let aboutNum = $('#about').offset().top
    console.log(aboutNum)
    
    let pfNum = $('#portfolio').offset().top
    console.log(pfNum)

    let conNum = $('#Contact').offset().top
    console.log(conNum)
   

    // 클릭이벤트
    // $('.gnb li:eq(0) a').click(function(){
    //     $("html,body").animate({scrollTop:0})
    //     $(this).css({color:'yellow'})

    // })
    // $('.gnb li:eq(1) a').click(function(){
    //     $("html,body").animate({scrollTop:aboutNum})
    //     $(this).css({color:'yellow'})

    // })
    // $('.gnb li:eq(2)').click(function(){
    //     $("html,body").animate({scrollTop:pfNum})

    // })
    // $('.gnb li:eq(3)').click(function(){
    //     $("html,body").animate({scrollTop:conNum})

    // })
    // 페이지 내에서 링크위치로 스크롤바를 이동하고 글자색 노란색으로 변경

    $('.gnb ul li a').click(function(){
        let name = $($(this).attr('href'))
        console.log(name)
        let target = $($(this).attr('href')).offset().top
        console.log(target)
        $('body,html').animate({scrollTop:target},1000)
    })

    // 스크롤바를 스크롤하는 동안
    $(window).scroll(function(){
       let num = $(this).scrollTop()//얼만큼 스크롤 됐는지
       console.log(num)

       $('.xy').text(num)
       // 영역별 home 구간
    if(num > 0 && num < pfNum){
        $('.gnb li a').css({color:'#fff'})
        
        $('.gnb li:eq(0) a').css({color:'#E1D8DF'})
        $('.quick').css({transition:'all 0.5s ease'})
    }
    if(num >= pfNum && num <= aboutNum ){
        $('.gnb li a').css({color:'#fff'})
        
        $('.gnb li:eq(1) a').css({color:'#E1D8DF'})
    }
    if(num >= aboutNum && num <= conNum){
        $('.gnb li a').css({color:'#fff'})
        
        $('.gnb li:eq(2) a').css({color:'#E1D8DF'})
    }
    if(num >= conNum){
        $('.gnb li a').css({color:'#fff'})
        
        $('.gnb li:eq(3) a').css({color:'#E1D8DF'})
    }

        
    if(num >= pfNum ){
        $('.quick').css({right:90});
    }else{
        $('.quick').css({right:-200});
    }
    
    
  
  

    })
    // $('.modal_popup').hide();


    // $('.menu').click(function(){
    //     $(this).next().show();
    //     $('body,html').css({overflow:'hidden'})
    // })
    // $('.btn_model').click(function(){
    //     $('.modal_popup').hide();
    //     $('body,html').css({overflow:'auto'})
    // })
   
})
$(function(){
    $('#portfolio .inner .list li a').lightBox({
        overlayBgColor:'#000', //cover
        overlayOpacity:0.8, //투명도
        imageLoading:"./images/lightbox-ico-loading.gif",// 로딩이미지
        imageBtnClose:"./images/lightbox-btn-close.gif", //닫기버튼이미지
        imageBtnPrev:"./images/lightbox-btn-prev.gif", //이전버튼
        imageBtnNext:"./images/lightbox-btn-next.gif", //다음버튼
        containerResizeSpeed:500,//모달 팝업창 속도 조정


        txtImage:"작품" //작품
    })
})




