$(window).on("load", function () {

    $('#toggle').click(function() {
        $(this).toggleClass('active');
        $('#carouselSolucionesMobile').toggleClass('open');
    });

    $('.navMobile-li-interno').click(function() {
        $('#carouselSolucionesMobile').removeClass('open');
        $('.button_container').removeClass('active');
    });

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

    // Emociones carousel
        $('.emociones-card1').click(function() {
            $('.carousel-emociones .carousel-item').removeClass('active');
            $('.carousel-emociones .carousel-item1').addClass('active');
        });
        $('.emociones-card2').click(function() {
            $('.carousel-emociones .carousel-item').removeClass('active');
            $('.carousel-emociones .carousel-item2').addClass('active');
        });
        $('.emociones-card3').click(function() {
            $('.carousel-emociones .carousel-item').removeClass('active');
            $('.carousel-emociones .carousel-item3').addClass('active');
        });
        $('.emociones-card4').click(function() {
            $('.carousel-emociones .carousel-item').removeClass('active');
            $('.carousel-emociones .carousel-item4').addClass('active');
        });
        $('.emociones-card5').click(function() {
            $('.carousel-emociones .carousel-item').removeClass('active');
            $('.carousel-emociones .carousel-item5').addClass('active');
        });
        $('.emociones-card6').click(function() {
            $('.carousel-emociones .carousel-item').removeClass('active');
            $('.carousel-emociones .carousel-item6').addClass('active');
        });

    // cerebro mob
        $('.cuadroe.miedo').mouseenter(function() {
            $('.bc-miedo').css('display','block');
            $('.bc').not('.bc-miedo').css('display','none');
        });
        $('.cuadroe.sorpresa').mouseenter(function() {
            $('.bc-sorpresa').css('display','block');
            $('.bc').not('.bc-sorpresa').css('display','none');
        });
        $('.cuadroe.ira').mouseenter(function() {
            $('.bc-ira').css('display','block');
            $('.bc').not('.bc-ira').css('display','none');
        });
        $('.cuadroe.disgusto').mouseenter(function() {
            $('.bc-disgusto').css('display','block');
            $('.bc').not('.bc-disgusto').css('display','none');
        });
        $('.cuadroe.tristeza').mouseenter(function() {
            $('.bc-tristeza').css('display','block');
            $('.bc').not('.bc-tristeza').css('display','none');
        });
        $('.cuadroe.felicidad').mouseenter(function() {
            $('.bc-felicidad').css('display','block');
            $('.bc').not('.bc-felicidad').css('display','none');
        });

    if (window.innerWidth >= 576) {
        var s = skrollr.init();
        
    }


});

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