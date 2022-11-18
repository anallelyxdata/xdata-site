$(window).on("load", function () {

    $(".loader").fadeOut(200);

    $('#toggle').click(function() {
        $(this).toggleClass('active');
        $('#carouselSolucionesMobile').toggleClass('open');
    });

     $("#quiero").click(function(){
          $("#quiero-reveal").slideToggle("slow");
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

    // ADN
        $('#adn-cuadro_circulo1').mouseenter(function(){
            $('.carousel-item_adn').removeClass('active');
            $('#carousel-item_adn1').addClass('active');
            $('.adn-cuadro_circulo').css('background-color', '#bcbcbc');
            $('.adn-cuadro_circulo:nth-child(1)').css('background-color', '#b79a3a');
            $('.adn-cuadro_circulo').css('color', '#bcbcbc');
            $('.adn-cuadro_circulo:nth-child(1)').css('color', '#fff');
            $('.adn-linea').css('display', 'none');
            $('.adn-linea.linea1').css('display', 'block');
            $('.nosotros-adn_cuadro').css('background-image', "url('https://x-data.mx/tercera/img/adn.png'), url('https://x-data.mx/tercera/img/adn-puntos1.png')");
        });
        $('#adn-cuadro_circulo2').mouseenter(function(){
            $('.carousel-item_adn').removeClass('active');
            $('#carousel-item_adn2').addClass('active');
            $('.adn-cuadro_circulo').css('background-color', '#bcbcbc');
            $('.adn-cuadro_circulo:nth-child(2)').css('background-color', '#2bbdb1');
            $('.adn-cuadro_circulo').css('color', '#bcbcbc');
            $('.adn-cuadro_circulo:nth-child(2)').css('color', '#fff');
            $('.adn-linea').css('display', 'none');
            $('.adn-linea.linea2').css('display', 'block');
            $('.nosotros-adn_cuadro').css('background-image', "url('https://x-data.mx/tercera/img/adn.png'), url('https://x-data.mx/tercera/img/adn-puntos2.png')");
        });
        $('#adn-cuadro_circulo3').mouseenter(function(){
            $('.carousel-item_adn').removeClass('active');
            $('#carousel-item_adn3').addClass('active');
            $('.adn-cuadro_circulo').css('background-color', '#bcbcbc');
            $('.adn-cuadro_circulo:nth-child(3)').css('background-color', '#21aece');
            $('.adn-cuadro_circulo').css('color', '#bcbcbc');
            $('.adn-cuadro_circulo:nth-child(3)').css('color', '#fff');
            $('.adn-linea').css('display', 'none');
            $('.adn-linea.linea3').css('display', 'block');
            $('.nosotros-adn_cuadro').css('background-image', "url('https://x-data.mx/tercera/img/adn.png'), url('https://x-data.mx/tercera/img/adn-puntos3.png')");
        });
        $('#adn-cuadro_circulo4').mouseenter(function(){
            $('.carousel-item_adn').removeClass('active');
            $('#carousel-item_adn4').addClass('active');
            $('.adn-cuadro_circulo').css('background-color', '#bcbcbc');
            $('.adn-cuadro_circulo:nth-child(4)').css('background-color', '#78e1d3');
            $('.adn-cuadro_circulo').css('color', '#bcbcbc');
            $('.adn-cuadro_circulo:nth-child(4)').css('color', '#00394c');
            $('.adn-linea').css('display', 'none');
            $('.adn-linea.linea4').css('display', 'block');
            $('.nosotros-adn_cuadro').css('background-image', "url('https://x-data.mx/tercera/img/adn.png'), url('https://x-data.mx/tercera/img/adn-puntos4.png')");
        });

    // casos de exito

        $("#indicator-grande-logistica").mouseenter(function(){ 
            if($('#carousel-item-logistica').hasClass('active')){
              $("#indicator-grande-logistica").css("opacity", 1);
            }else{
              $("#indicator-grande-logistica").css("opacity", 1);
            } 
        });
        $("#indicator-grande-logistica").mouseleave(function(){ 
            if($('#carousel-item-logistica').hasClass('active')){
                $("#indicator-grande-logistica").css("opacity", 1);
            }else{
              $("#indicator-grande-logistica").css("opacity", .25);
            } 
        });
        $("#indicator-grande-people").mouseenter(function(){ 
            if($('#carousel-item-people').hasClass('active')){
              $("#indicator-grande-people").css("opacity", 1);
            }else{
              $("#indicator-grande-people").css("opacity", 1);
            } 
        });
        $("#indicator-grande-people").mouseleave(function(){ 
            if($('#carousel-item-people').hasClass('active')){
                $("#indicator-grande-people").css("opacity", 1);
            }else{
              $("#indicator-grande-people").css("opacity", .25);
            } 
        });   
        $("#indicator-grande-pricing").mouseenter(function(){ 
            if($('#carousel-item-pricing').hasClass('active')){
              $("#indicator-grande-pricing").css("opacity", 1);
            }else{
              $("#indicator-grande-pricing").css("opacity", 1);
            } 
        });
        $("#indicator-grande-pricing").mouseleave(function(){ 
            if($('#carousel-item-pricing').hasClass('active')){
                $("#indicator-grande-pricing").css("opacity", 1);
            }else{
              $("#indicator-grande-pricing").css("opacity", .25);
            } 
        })    

        $("#indicator-grande-logistica").mouseenter(function(){
            $("#carousel-item-logistica").addClass("active");
            $("#carousel-item-pricing").removeClass("active");
            $("#carousel-item-people").removeClass("active");
            $("#indicator-grande-logistica").css("opacity", 1);
            $("#indicator-grande-people").css("opacity", .25);
            $("#indicator-grande-pricing").css("opacity", .25);
            $("#indicators-logistica-circulo").addClass("active");
            $("#indicators-people-circulo").removeClass("active");
            $("#indicators-pricing-circulo").removeClass("active");

        });
        $("#indicator-grande-people").mouseenter(function(){
            $("#carousel-item-people").addClass("active");
            $("#carousel-item-pricing").removeClass("active");
            $("#carousel-item-logistica").removeClass("active");
            $("#indicator-grande-people").css("opacity", 1);
            $("#indicator-grande-logistica").css("opacity", .25);
            $("#indicator-grande-pricing").css("opacity", .25);
            $("#indicators-people-circulo").addClass("active");
            $("#indicators-logistica-circulo").removeClass("active");
            $("#indicators-pricing-circulo").removeClass("active");
        });
        $("#indicator-grande-pricing").mouseenter(function(){
            $("#carousel-item-pricing").addClass("active");
            $("#carousel-item-people").removeClass("active");
            $("#carousel-item-logistica").removeClass("active");
            $("#indicator-grande-pricing").css("opacity", 1);
            $("#indicator-grande-logistica").css("opacity", .25);
            $("#indicator-grande-people").css("opacity", .25);
            $("#indicators-pricing-circulo").addClass("active");
            $("#indicators-people-circulo").removeClass("active");
            $("#indicators-logistica-circulo").removeClass("active");
        });

        $("#indicators-logistica-circulo").click(function(){
            $("#indicator-grande-logistica").css("opacity", 1);
            $("#indicator-grande-pricing").css("opacity", .25);
            $("#indicator-grande-people").css("opacity", .25);
        });
        $("#indicators-people-circulo").click(function(){
            $("#indicator-grande-people").css("opacity", 1);
            $("#indicator-grande-pricing").css("opacity", .25);
            $("#indicator-grande-logistica").css("opacity", .25);
        });
        $("#indicators-pricing-circulo").click(function(){
            $("#indicator-grande-pricing").css("opacity", 1);
            $("#indicator-grande-logistica").css("opacity", .25);
            $("#indicator-grande-people").css("opacity", .25);
        });

        $("#carousel-control-prev-exito").click(function(){
            if($("#carousel-item-logistica").hasClass("active")){
                $("#indicator-grande-logistica").css("opacity", 1);
                $("#indicator-grande-people").css("opacity", .25);
                $("#indicator-grande-pricing").css("opacity", .25);
            }
            if($("#carousel-item-pricing").hasClass("active")){
                $("#indicator-grande-pricing").css("opacity", 1);
                $("#indicator-grande-logistica").css("opacity", .25);
                $("#indicator-grande-people").css("opacity", .25);
            }
            if($("#carousel-item-people").hasClass("active")){
                $("#indicator-grande-people").css("opacity", 1);
                $("#indicator-grande-logistica").css("opacity", .25);
                $("#indicator-grande-pricing").css("opacity", .25);
            }
        });
        $("#carousel-control-next-exito").click(function(){
            if($("#carousel-item-logistica").hasClass("active")){
                $("#indicator-grande-logistica").css("opacity", 1);
                $("#indicator-grande-people").css("opacity", .25);
                $("#indicator-grande-pricing").css("opacity", .25);
            }
            if($("#carousel-item-pricing").hasClass("active")){
                $("#indicator-grande-pricing").css("opacity", 1);
                $("#indicator-grande-logistica").css("opacity", .25);
                $("#indicator-grande-people").css("opacity", .25);
            }
            if($("#carousel-item-people").hasClass("active")){
                $("#indicator-grande-people").css("opacity", 1);
                $("#indicator-grande-logistica").css("opacity", .25);
                $("#indicator-grande-pricing").css("opacity", .25);
            }
        });

    // soluciones

        $('#productos-tab').mouseenter(function(){
            $('#servicios').removeClass('active');
            $('#servicios').removeClass('show');
            $('#productos').addClass('active');
            $('#productos').addClass('show');
            $('#servicios-tab').removeClass('active');
            $('#productos-tab').addClass('active');
        });
        $('#servicios-tab').mouseenter(function(){
            $('#productos').removeClass('active');
            $('#productos').removeClass('show');
            $('#servicios').addClass('active');
            $('#servicios').addClass('show');
            $('#productos-tab').removeClass('active');
            $('#servicios-tab').addClass('active');
        });
        $('#pills-dashboards-tab').mouseenter(function(){
            $('.tab-content-servicios .tab-pane').removeClass('active');
            $('.tab-content-servicios .tab-pane').removeClass('show');
            $('#pills-dashboards').addClass('active');
            $('#pills-dashboards').addClass('show');
            $('.nav-pills-servicios .nav-link').removeClass('active');
            $('#pills-dashboards-tab').addClass('active');
        });
        $('#pills-dataviz-tab').mouseenter(function(){
            $('.tab-content-servicios .tab-pane').removeClass('active');
            $('.tab-content-servicios .tab-pane').removeClass('show');
            $('#pills-dataviz').addClass('active');
            $('#pills-dataviz').addClass('show');
            $('.nav-pills-servicios .nav-link').removeClass('active');
            $('#pills-dataviz-tab').addClass('active');
        });
        $('#pills-analitica-tab').mouseenter(function(){
            $('.tab-content-servicios .tab-pane').removeClass('active');
            $('.tab-content-servicios .tab-pane').removeClass('show');
            $('#pills-analitica').addClass('active');
            $('#pills-analitica').addClass('show');
            $('.nav-pills-servicios .nav-link').removeClass('active');
            $('#pills-analitica-tab').addClass('active');
        });
        $('#pills-consultoria-tab').mouseenter(function(){
            $('.tab-content-servicios .tab-pane').removeClass('active');
            $('.tab-content-servicios .tab-pane').removeClass('show');
            $('#pills-consultoria').addClass('active');
            $('#pills-consultoria').addClass('show');
            $('.nav-pills-servicios .nav-link').removeClass('active');
            $('#pills-consultoria-tab').addClass('active');
        });
        $('#pills-baiwa-tab').mouseenter(function(){
            $('.tab-content-productos .tab-pane').removeClass('active');
            $('.tab-content-productos .tab-pane').removeClass('show');
            $('#pills-baiwa').addClass('active');
            $('#pills-baiwa').addClass('show');
            $('.nav-pills-productos .nav-link').removeClass('active');
            $('#pills-baiwa-tab').addClass('active');
        });
        $('#pills-datalake-tab').mouseenter(function(){
            $('.tab-content-productos .tab-pane').removeClass('active');
            $('.tab-content-productos .tab-pane').removeClass('show');
            $('#pills-datalake').addClass('active');
            $('#pills-datalake').addClass('show');
            $('.nav-pills-productos .nav-link').removeClass('active');
            $('#pills-datalake-tab').addClass('active');
        });
        $('#pills-energymap-tab').mouseenter(function(){
            $('.tab-content-productos .tab-pane').removeClass('active');
            $('.tab-content-productos .tab-pane').removeClass('show');
            $('#pills-energymap').addClass('active');
            $('#pills-energymap').addClass('show');
            $('.nav-pills-productos .nav-link').removeClass('active');
            $('#pills-energymap-tab').addClass('active');
        });

    // logos
    
        var cambioLogo1 = document.getElementById('image1'),
            imgList1 = [
          "https://x-data.mx/img/logos/logo-gascom.png",
          "https://x-data.mx/img/logos/logo-royal-canin.png",
        ];
        function changeImage1 (cambioLogo1, imgList1) {
          setInterval(function(){
            randomImage = Math.floor( Math.random() * imgList1.length);
            cambioLogo1.style.backgroundImage = "url('" + imgList1[randomImage] + "')";
          }, 2800);
        }
        changeImage1(cambioLogo1, imgList1);     

        var cambioLogo2 = document.getElementById('image2'),
            imgList2 = [
          "https://x-data.mx/img/logos/logo-nadro.png",
          "https://x-data.mx/img/logos/logo-alsea.png",
        ];
        function changeImage2 (cambioLogo2, imgList2) {
          setInterval(function(){
            randomImage = Math.floor( Math.random() * imgList2.length);
            cambioLogo2.style.backgroundImage = "url('" + imgList2[randomImage] + "')";
          }, 2800);
        }
        changeImage2(cambioLogo2, imgList2);    

        var cambioLogo3 = document.getElementById('image3'),
            imgList3 = [
          "https://x-data.mx/img/logos/logo-proquifa.png",
          "https://x-data.mx/img/logos/logo-bohn.png",
        ];
        function changeImage3 (cambioLogo3, imgList3) {
          setInterval(function(){
            randomImage = Math.floor( Math.random() * imgList3.length);
            cambioLogo3.style.backgroundImage = "url('" + imgList3[randomImage] + "')";
          }, 2800);
        }
        changeImage3(cambioLogo3, imgList3);   

   loadTrack(track_index);

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

var myCarousel = document.getElementById('carouselExampleIndicators');

myCarousel.addEventListener('slid.bs.carousel', function () {
  if($("#carousel-item-logistica").hasClass("active")){
      $("#indicator-grande-logistica").css("opacity", 1);
      $("#indicator-grande-people").css("opacity", .25);
      $("#indicator-grande-pricing").css("opacity", .25);
  }
  if($("#carousel-item-pricing").hasClass("active")){
      $("#indicator-grande-pricing").css("opacity", 1);
      $("#indicator-grande-logistica").css("opacity", .25);
      $("#indicator-grande-people").css("opacity", .25);
  }
  if($("#carousel-item-people").hasClass("active")){
      $("#indicator-grande-people").css("opacity", 1);
      $("#indicator-grande-logistica").css("opacity", .25);
      $("#indicator-grande-pricing").css("opacity", .25);
  }
})

// Ebooks
    $("#valuacion-descarga-btn").click(function(){
        $("#valuacion-reveal").slideToggle("slow");
        $("#datadriven-fake-reveal").slideToggle("slow");
    });

    $("#datadriven-descarga-btn").click(function(){
      $("#datadriven-reveal").slideToggle("slow");
       $("#valuacion-fake-reveal").slideToggle("slow");
    });


if (window.innerWidth >= 576) {
    var s = skrollr.init();
}

// Banner video
    var vid = document.getElementById("video-banner"); 

    function playVid() { 
        vid.currentTime = 0
        vid.play(); 
    } 
    function stopVid() { 
        vid.pause(); 
    } 


//  redes



    // Pixel linkedin



  

