$(window).on("load", function () {

    $(".loader").fadeOut(200);

    $('.navMobile-li-interno').click(function() {
        $('#carouselSolucionesMobile').removeClass('open');
        $('.button_container').removeClass('active');
    });

    // redes


    // Menu soluciones mobile
        // Van
        $('#navMobile-ir-a-soluciones').click(function() {
            $('#soluciones-mobile-item1').removeClass('active');
            $('#soluciones-mobile-item2').addClass('active');
        });
        $('#navMobile-ir-a-servicios').click(function() {
            $('#soluciones-mobile-item2').removeClass('active');
            $('#soluciones-mobile-item3').addClass('active');
        });
        $('#navMobile-ir-a-productos').click(function() {
            $('#soluciones-mobile-item2').removeClass('active');
            $('#soluciones-mobile-item4').addClass('active');
        });
        $('#navMobile-ir-a-industrias').click(function() {
            $('#soluciones-mobile-item2').removeClass('active');
            $('#soluciones-mobile-item5').addClass('active');
        });
        $('#ir-a-analitica').click(function() {
            $('#soluciones-mobile-item3').removeClass('active');
            $('#soluciones-mobile-item6').addClass('active');
        });
        $('#ir-a-dash').click(function() {
            $('#soluciones-mobile-item3').removeClass('active');
            $('#soluciones-mobile-item7').addClass('active');
        });
        $('#ir-a-dataviz').click(function() {
            $('#soluciones-mobile-item3').removeClass('active');
            $('#soluciones-mobile-item8').addClass('active');
        });
        $('#ir-a-consultoria').click(function() {
            $('#soluciones-mobile-item3').removeClass('active');
            $('#soluciones-mobile-item9').addClass('active');
        });
        $('#ir-a-baiwa').click(function() {
            $('#soluciones-mobile-item4').removeClass('active');
            $('#soluciones-mobile-item10').addClass('active');
        });
        $('#ir-a-datalake').click(function() {
            $('#soluciones-mobile-item4').removeClass('active');
            $('#soluciones-mobile-item11').addClass('active');
        });
        $('#ir-a-energymap').click(function() {
            $('#soluciones-mobile-item4').removeClass('active');
            $('#soluciones-mobile-item12').addClass('active');
        });
        $('#ir-a-logistica').click(function() {
            $('#soluciones-mobile-item5').removeClass('active');
            $('#soluciones-mobile-item13').addClass('active');
        });
        $('#ir-a-manufactura').click(function() {
            $('#soluciones-mobile-item5').removeClass('active');
            $('#soluciones-mobile-item14').addClass('active');
        });
        $('#ir-a-retail').click(function() {
            $('#soluciones-mobile-item5').removeClass('active');
            $('#soluciones-mobile-item15').addClass('active');
        });
        $('#ir-a-salud').click(function() {
            $('#soluciones-mobile-item5').removeClass('active');
            $('#soluciones-mobile-item16').addClass('active');
        });

        // Regresan 

        $('#navMobile-ir-a-principal-de-soluciones').click(function() {
            $('#soluciones-mobile-item2').removeClass('active');
            $('#soluciones-mobile-item1').addClass('active');
        });
        $('#navMobile-regresar-a-soluciones-de-servicios').click(function() {
            $('#soluciones-mobile-item3').removeClass('active');
            $('#soluciones-mobile-item2').addClass('active');
        });
        $('#navMobile-regresar-a-soluciones-de-productos').click(function() {
            $('#soluciones-mobile-item4').removeClass('active');
            $('#soluciones-mobile-item2').addClass('active');
        });
        $('#navMobile-regresar-a-soluciones-de-industrias').click(function() {
            $('#soluciones-mobile-item5').removeClass('active');
            $('#soluciones-mobile-item2').addClass('active');
        });
        $('#navMobile-regresar-de-analitica').click(function() {
            $('#soluciones-mobile-item6').removeClass('active');
            $('#soluciones-mobile-item3').addClass('active');
        });
        $('#navMobile-regresar-de-dash').click(function() {
            $('#soluciones-mobile-item7').removeClass('active');
            $('#soluciones-mobile-item3').addClass('active');
        });
        $('#navMobile-regresar-de-dataviz').click(function() {
            $('#soluciones-mobile-item8').removeClass('active');
            $('#soluciones-mobile-item3').addClass('active');
        });
        $('#navMobile-regresar-de-consultoria').click(function() {
            $('#soluciones-mobile-item9').removeClass('active');
            $('#soluciones-mobile-item3').addClass('active');
        });
        $('#navMobile-regresar-de-baiwa').click(function() {
            $('#soluciones-mobile-item10').removeClass('active');
            $('#soluciones-mobile-item4').addClass('active');
        });
        $('#navMobile-regresar-de-datalake').click(function() {
            $('#soluciones-mobile-item11').removeClass('active');
            $('#soluciones-mobile-item4').addClass('active');
        });
        $('#navMobile-regresar-de-energymap').click(function() {
            $('#soluciones-mobile-item12').removeClass('active');
            $('#soluciones-mobile-item4').addClass('active');
        });
        $('#navMobile-regresar-de-logistica').click(function() {
            $('#soluciones-mobile-item13').removeClass('active');
            $('#soluciones-mobile-item5').addClass('active');
        });
        $('#navMobile-regresar-de-manufactura').click(function() {
            $('#soluciones-mobile-item14').removeClass('active');
            $('#soluciones-mobile-item5').addClass('active');
        });
        $('#navMobile-regresar-de-retail').click(function() {
            $('#soluciones-mobile-item15').removeClass('active');
            $('#soluciones-mobile-item5').addClass('active');
        });
        $('#navMobile-regresar-de-salud').click(function() {
            $('#soluciones-mobile-item16').removeClass('active');
            $('#soluciones-mobile-item5').addClass('active');
        });

});

// window.onscroll = function() {scrollFunction()};

 function navlinksoluciones(){
    if($('#menuSoluciones').css('display') === 'block'){
        $("#menuSoluciones").css('display','none');
        $("#dropdown-soluciones_img").css('transform','rotate(0deg)');
        $(".nav-item-soluciones .nav-link").css('color','var(--gris80)');
    }else{
        $(".nav-item-soluciones .nav-link").css('color','var(--navy)');
        $("#menuSoluciones").css('display','block');
        $("#dropdown-soluciones_img").css('transform','rotate(-180deg)');
    }
};



// Facebook

   
    // Pixel linkedin

setTimeout(function(){

    // Analytics
    window.dataLayer = window.dataLayer || [];

    function gtag() { dataLayer.push(arguments); }

    gtag('js', new Date());



    gtag('config', 'UA-167828137-1');

    // Facebook
    window.fbAsyncInit = function () {

        FB.init({

            xfbml: true,

            version: 'v10.0'

        });

    };

     (function (d, s, id) {

        var js, fjs = d.getElementsByTagName(s)[0];

        if (d.getElementById(id)) return;

        js = d.createElement(s); js.id = id;

        js.src = 'https://connect.facebook.net/es_LA/sdk/xfbml.customerchat.js';

        fjs.parentNode.insertBefore(js, fjs);

    }(document, 'script', 'facebook-jssdk'));

    

      _linkedin_partner_id = "3823636"; 
    window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || []; 
    window._linkedin_data_partner_ids.push(_linkedin_partner_id); 
    (function(l) { if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])}; 
    window.lintrk.q=[]} var s = document.getElementsByTagName("script")[0]; 
    var b = document.createElement("script"); b.type = "text/javascript";
    b.async = true; 
    b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js"; 
    s.parentNode.insertBefore(b, s);})(window.lintrk);
        

    // Pixel facebook
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window,document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
     fbq('init', '1855240141352431'); 
    fbq('track', 'PageView');


  }, 5000);
