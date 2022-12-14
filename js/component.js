class Navbar extends HTMLElement{
	connectedCallback(){
		this.innerHTML=`
		<nav class="navDesktop d-none d-xl-flex navbar" id="navbar">
			<div class="container">
				<a class="navbar-brand" href="https://x-data.mx/">
					<img src="https://x-data.mx/img/logos/x-data.svg" alt="logotipo-xdata">
				</a>
				<ul class="navDesktop-ul">
					<li class="nav-item">
						<a class="nav-link pagescroll" aria-current="true" href="https://x-data.mx/#nosotros" onclick="">Nosotros</a>
					</li>
					<li class="nav-item nav-item-soluciones" onclick="navlinksoluciones()">
						<a class="nav-link pagescroll" aria-current="true" onclick="">Soluciones <img id="dropdown-soluciones_img" src="https://x-data.mx/img/icons/dropdown-soluciones.svg" alt=""></a>
					</li>
						<div id="menuSoluciones" class="navlinksoluciones">
							<div class="grid-soluciones">
								<div class="nav navlinksoluciones-buttons" id="v-pills-tab" role="tablist" aria-orientation="vertical">
									<button class="nav-link active" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Productos</button>
									<button class="nav-link " id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Servicios</button>
									<button class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Industrias</button>
								</div>
								<div class="tab-content" id="v-pills-tabContent">
									<div class="tab-pane fade show active" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
										<div class="soluciones-tab">
											<a href="https://x-data.mx/baiwa">
												<div class="soluciones-tab-ind">
													<img id="soluciones-baiwa-icon" src="https://x-data.mx/img/icons/baiwa-icon.png" alt="">
													<div>
														<p class="tab-ind-titulo">Baiwa</p>
														<p class="tab-ind-p">Transforma tu ??rea de Recursos Humanos en data driven. Dise??a tu estrategia utilizando recursos tecnol??gicos donde contemples las necesidades de tu empresa y tus colaboradores. Reduce la rotaci??n, contrata de manera inteligente y promueve activos valiosos dentro de tu organizaci??n.</p>
													</div>
												</div>
											</a>
											<div class="soluciones-tab-ind">
												<img src="https://x-data.mx/img/energy-map.png" alt="">
												<div>
													<p class="tab-ind-titulo">Energy Map</p>
													<p class="tab-ind-p">A trav??s de un tablero ejecutivo, monitorea en tiempo real el precio de la energ??a el??ctrica, gas natural y otros factores que puedan alterar estos indicadores, como el tipo de cambio, INPC, etc.</p>
												</div>
											</div>
											<div class="soluciones-tab-ind">
												<img src="https://x-data.mx/img/data-lake.png" alt="">
												<div>
													<p class="tab-ind-titulo">Data Lake</p>
													<p class="tab-ind-p">Todos tus datos en un mismo lugar. Crea un repositorio para almacenar, gestionar, indexar y disponer de todos los datos estructurados o no estructurados que generes, de manera sencilla y autom??tica; con la capacidad de digerir altos vol??menes de informaci??n.</p>
												</div>
											</div>
										</div>
									</div>
									<!-- Servicios -->
									<div class="tab-pane fade " id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
										<div class="soluciones-tab">
											<div class="soluciones-tab-ind">
												<img src="https://x-data.mx/img/analitica-avanzada.png" alt="">
												<div>
													<p class="tab-ind-titulo">Anal??tica Avanzada</p>
													<p class="tab-ind-p">Centraliza y analiza la data de tu organizaci??n para identicar oportunidades de negocio y resolver problemas. Deja que los datos hablen por s?? mismos y te muestren c??mo se est?? comportando tu mercado.</p>
												</div>
											</div>
											<div class="soluciones-tab-ind">
												<img src="https://x-data.mx/img/dashboards.png" alt="">
												<div>
													<p class="tab-ind-titulo">Dashboards</p>
													<p class="tab-ind-p">Toma el control de tu empresa usando herramientas que te permitan monitorear la informaci??n de tu negocio en tiempo real. Toma decisiones basadas en datos duros, apoy??ndote de tableros f??ciles de leer. Descubre insights valiosos dentro de tu informaci??n y empodera a toda tu empresa con ellos.</p>
												</div>
											</div>
											<div class="soluciones-tab-ind">
												<img src="https://x-data.mx/img/dataviz.png" alt="">
												<div>
													<p class="tab-ind-titulo">Dataviz</p>
													<p class="tab-ind-p">Muestra a tu audiencia sets de datos complejos de una manera atractiva y f??cil de digerir. La visualizaci??n de datos es la intersecci??n entre la ciencia y el arte de mostrar informaci??n, lo cual hace mucho m??s f??cil identicar insights clave.</p>
												</div>
											</div>
											<div class="soluciones-tab-ind">
												<img src="https://x-data.mx/img/arquitectura-de-datos.png" alt="">
												<div>
													<p class="tab-ind-titulo">Consultor??a en arquitectura de datos</p>
													<p class="tab-ind-p">Tu empresa genera grandes vol??menes de datos y procesarlos es un reto que nosotros te ayudamos a resolver. S??mate a las mejores pr??cticas de la industria para almacenar y estructurar la informaci??n, permiti??ndote tener una mayor escalabilidad y colaboraci??n en ujos de datos.</p>
												</div>
											</div>
											
										</div>
									</div>
									<!-- Industrias -->
									<div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
										<!-- Transporte -->
										<div class="transporte-grid">
											<div class="nav-transporte nav flex-column me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
												<button class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-t1" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">
													<img src="https://x-data.mx/img/logistica-y-transporte.png" alt="">
													<p class="titulo-industrias">Log??stica y transporte</p>
												</button>
												<button class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-t2" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">
													<img src="https://x-data.mx/img/manufactura.png" alt="">
													<p class="titulo-industrias">Manufactura</p>
												</button>
												<button class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-t3" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">
													<img src="https://x-data.mx/img/retail.png" alt="">
													<p class="titulo-industrias">Retail y bienes de consumo</p>
												</button>
												<button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-t4" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">
													<img src="https://x-data.mx/img/salud-y-farmaceutica.png" alt="">
													<p class="titulo-industrias">Salud y farmac??utica</p>
												</button>
											</div>
											<div class="tab-content" id="v-pills-tabContent">
												<div class="tab-pane fade show active" id="v-pills-t1" role="tabpanel" aria-labelledby="v-pills-home-tab">
													<img src="https://x-data.mx/img/logistica-y-transporte.png" alt="">
													<p class="tab-transporte-titulo">Log??stica y transporte</p>
													<p class="tab-transporte-p">Optimiza rutas y tiempos de entrega con la centralizaci??n de datos y el an??lisis de tendencias. 
													</p>
												</div>
												<div class="tab-pane fade" id="v-pills-t2" role="tabpanel" aria-labelledby="v-pills-profile-tab">
													<img src="https://x-data.mx/img/manufactura.png" alt="">
													<p class="tab-transporte-titulo">Manufactura</p>
													<p class="tab-transporte-p">Eleva la calidad de producci??n, mide el desempe??o de la planta, reduce el riesgo de incidentes en tu personal, y genera predicciones sustentadas en datos utilizando nuestras herramientas.</p>
												</div>
												<div class="tab-pane fade" id="v-pills-t3" role="tabpanel" aria-labelledby="v-pills-messages-tab">
													<img src="https://x-data.mx/img/retail.png" alt="">
													<p class="tab-transporte-titulo">Retail y bienes de consumo</p>
													<p class="tab-transporte-p">Consolidamos la informaci??n de ventas, inventarios, devoluciones, ??rdenes de compra y facturas pendientes de pago dentro de una misma plataforma, para facilitar la comunicaci??n con tus clientes, analizar el desempe??o de tus principales canales de venta y monitorear la salud de tu empresa.</p>
												</div>
												<div class="tab-pane fade" id="v-pills-t4" role="tabpanel" aria-labelledby="v-pills-settings-tab">
													<img src="https://x-data.mx/img/salud-y-farmaceutica.png" alt="">
													<p class="tab-transporte-titulo">Salud y farmac??utica</p>
													<p class="tab-transporte-p">Analiza la demanda, venta, distribuci??n y comportamiento de los productos del sector para mejorar la operaci??n y asegurar la disponibilidad del producto en todo el pa??s.</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					<!-- Termina men?? soluciones -->
					<li class="nav-item">
	<a href="https://x-data.mx/blog/" class="nav-link pagescroll" aria-current="true" onclick="">Blog</a>
</li><li class="nav-item">
	<a href="https://x-data.mx/prensa" class="nav-link pagescroll" aria-current="true" onclick="">Prensa</a>
</li>
					<!-- <li class="nav-item">
						<a class="nav-link pagescroll" aria-current="true" onclick="">NFT</a>
					</li>
					<li class="nav-item">
						<a class="nav-link pagescroll" aria-current="true" onclick="">Dataviz</a>
					</li> -->
					<li class="nav-item">
						<a href="https://x-data.mx/contacto" class="nav-link pagescroll" aria-current="true" onclick="">Contacto</a>
					</li>
					<li class="nav-item">
						<div class="navMob-dropdown_lang dropdown">
						  <button class="dropbtn btn " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
						    ES
						    <img src="https://x-data.mx/img/icons/dropdown-soluciones.svg" alt="">
						  </button>
						  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
						    <li><a class="dropdown-item" href="https://x-data.mx/home">EN</a></li>
						  </ul>
						</div>
					</li>
				</ul>
			</div>
		</nav>
		<div class="nav-mobile-all">
			<div class="navMobile d-xl-none">
				<img src="https://x-data.mx/img/logos/x-data.svg" alt="">
				<div class="navMobile-header">
					<!-- dropdown EN/ES -->
					<div class="navMob-dropdown_lang dropdown">
					  <button class="dropbtn btn " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
					    ES
					    <img src="https://x-data.mx/img/icons/dropdown-soluciones.svg" alt="">
					  </button>
					  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
					    <li><a class="dropdown-item" href="https://x-data.mx/home">EN</a></li>
					  </ul>
					</div>
					<!-- Termina dropdown EN/ES -->
					<div class="button_container" id="toggle">
					  <span class="top"></span>
					  <span class="middle"></span>
					  <span class="bottom"></span>
					</div>
				</div>
			</div>
			<!-- Carousel -->
			<div id="carouselSolucionesMobile"  class="carousel slide carousel-soluciones-mobile" data-bs-ride="carousel" data-bs-interval="false">
			  <div class="carousel-inner">
			  	<!-- Item de opciones principales -->
			    <div class="carousel-item active" id="soluciones-mobile-item1">
			      <div class="overlay d-xl-none" id="overlay">
			        <nav class="overlay-menu">
			          <ul>
			            <li class="navMobile-li-interno"><a href="#nosotros">Nosotros</a></li>
			            <li class="navMobile-li-soluciones"><a href="#" id="navMobile-ir-a-soluciones">Soluciones <img src="https://x-data.mx/img/icons/flecha-soluciones-mobile.svg" alt=""></a></li>
			            <li><a href="https://x-data.mx/blog/">Blog</a></li><li><a href="https://x-data.mx/prensa">Prensa</a></li>
			            <!-- <li><a href="#">NFT</a></li> -->
			            <!-- <li><a href="#">Dataviz</a></li> -->
			            <li><a href="https://x-data.mx/contacto">Contacto</a></li>
			            <li>
			            	<div class="navMobile-social">
			            		<a href="https://twitter.com/xdatamx" target="_blank">
			            			<img src="https://x-data.mx/img/icons/fr-tw.svg" alt="">
			            		</a>
			            		<a href="https://www.instagram.com/xdatamx/" target="_blank">
			            			<img src="https://x-data.mx/img/icons/fr-ig.svg" alt="">
			            		</a>
			            		<a href="https://www.linkedin.com/company/x-data/" target="_blank">
			            			<img src="https://x-data.mx/img/icons/fr-in.svg" alt="">
			            		</a>
			            		<a href="https://www.facebook.com/XDATAMX/" target="_blank">
			            			<img src="https://x-data.mx/img/icons/fr-fb.svg" alt="">
			            		</a>
			            	</div>
			            </li>
			          </ul>
			        </nav>
			      </div>
			    </div>
			    <!-- Item de opciones secundarias -->
			    <div class="carousel-item" id="soluciones-mobile-item2">
			    	<div class="soluciones-mobile-item2-container">
			    		<div class="navMobile-regresar" id="navMobile-ir-a-principal-de-soluciones">
			    			<p><img id="navMobile-flecha-atras" src="https://x-data.mx/img/icons/flecha-soluciones-mobile.svg" alt="">Soluciones</p>
			    		</div>
			    		<div class="soluciones-mobile-item2-opciones">
			    			<ul>
			    				<li id="navMobile-ir-a-servicios">
			    					<p>Servicios<img class="soluciones-flecha-next" src="https://x-data.mx/img/icons/flecha-soluciones-mobile.svg" alt=""></p>
			    				</li>
			    				<li id="navMobile-ir-a-productos">
			    					<p>Productos<img class="soluciones-flecha-next" src="https://x-data.mx/img/icons/flecha-soluciones-mobile.svg" alt=""></p>
			    				</li>
			    				<li id="navMobile-ir-a-industrias">
			    					<p>Industrias<img class="soluciones-flecha-next" src="https://x-data.mx/img/icons/flecha-soluciones-mobile.svg" alt=""></p>
			    				</li>
			    			</ul>
			    		</div>
			    	</div>
			     	
			    </div>
			    <!-- Item de servicios -->
			    <div class="carousel-item" id="soluciones-mobile-item3">
			    	<div class="soluciones-mobile-item2-container">
			    		<div class="navMobile-regresar" id="navMobile-regresar-a-soluciones-de-servicios">
			    			<p><img id="navMobile-flecha-atras" src="https://x-data.mx/img/icons/flecha-soluciones-mobile.svg" alt="">Servicios</p>
			    		</div>
			    		<div class="soluciones-mobile-item2-opciones op2">
			    			<ul>
			    				<li id="ir-a-analitica">
			    					<p><span> <img src="https://x-data.mx/img/analitica-avanzada.png" alt="">Anal??tica avanzada</span><img class="soluciones-flecha-next" src="https://x-data.mx/img/icons/flecha-soluciones-mobile.svg" alt=""></p>
			    				</li>
			    				<li id="ir-a-dash">
			    					<p><span> <img src="https://x-data.mx/img/dashboards.png" alt="">Dashboards</span><img class="soluciones-flecha-next" src="https://x-data.mx/img/icons/flecha-soluciones-mobile.svg" alt=""></p>
			    				</li>
			    				<li id="ir-a-dataviz">
			    					<p><span> <img src="https://x-data.mx/img/dataviz.png" alt="">Dataviz</span><img class="soluciones-flecha-next" src="https://x-data.mx/img/icons/flecha-soluciones-mobile.svg" alt=""></p>
			    				</li>
			    				<li id="ir-a-consultoria">
			    					<p><span> <img src="https://x-data.mx/img/arquitectura-de-datos.png" alt="">Consultor??a en arquitectura de datos</span><img class="soluciones-flecha-next" src="https://x-data.mx/img/icons/flecha-soluciones-mobile.svg" alt=""></p>
			    				</li>
			    			</ul>
			    		</div>
			    	</div>
			     	
			    </div>
			    <!-- Item de anal??tica avanzada -->
			    <div class="carousel-item" id="soluciones-mobile-item6">
			    	<div class="soluciones-mobile-item2-container">
			    		<div class="navMobile-regresar" id="navMobile-regresar-de-analitica">
			    			<p><img id="navMobile-flecha-atras" src="https://x-data.mx/img/icons/flecha-soluciones-mobile.svg" alt="">Servicios</p>
			    		</div>
			    		<div class="soluciones-mobile-item2-opciones">
			    			<ul class="soluciones-ul-container">
			    				<img src="https://x-data.mx/img/analitica-avanzada.png" alt="">
			    				<p class="ul-container-titulo">Anal??tica Avanzada</p>
			    				<p>Centraliza y analiza la data de tu organizaci??n para identicar oportunidades de negocio y resolver problemas. Deja que los datos hablen por s?? mismos y te muestren c??mo se est?? comportando tu mercado.</p>
			    			</ul>
			    		</div>
			    	</div>	
			    </div>
			     <!-- Item de dashboards -->
			    <div class="carousel-item" id="soluciones-mobile-item7">
			    	<div class="soluciones-mobile-item2-container">
			    		<div class="navMobile-regresar" id="navMobile-regresar-de-dash">
			    			<p><img id="navMobile-flecha-atras" src="https://x-data.mx/img/icons/flecha-soluciones-mobile.svg" alt="">Servicios</p>
			    		</div>
			    		<div class="soluciones-mobile-item2-opciones">
			    			<ul class="soluciones-ul-container">
			    				<img src="https://x-data.mx/img/dashboards.png" alt="">
			    				<p class="ul-container-titulo">Dashboards</p>
			    				<p>Toma el control de tu empresa usando herramientas que te permitan monitorear la informaci??n de tu negocio en tiempo real. Toma decisiones basadas en datos duros, apoy??ndote de tableros f??ciles de leer. Descubre insights valiosos dentro de tu informaci??n y empodera a toda tu empresa con ellos.</p>
			    			</ul>
			    		</div>
			    	</div>	
			    </div>
			     <!-- Item de dataviz -->
			    <div class="carousel-item" id="soluciones-mobile-item8">
			    	<div class="soluciones-mobile-item2-container">
			    		<div class="navMobile-regresar" id="navMobile-regresar-de-dataviz">
			    			<p><img id="navMobile-flecha-atras" src="https://x-data.mx/img/icons/flecha-soluciones-mobile.svg" alt="">Servicios</p>
			    		</div>
			    		<div class="soluciones-mobile-item2-opciones">
			    			<ul class="soluciones-ul-container">
			    				<img src="https://x-data.mx/img/dataviz.png" alt="">
			    				<p class="ul-container-titulo">Dataviz</p>
			    				<p>Muestra a tu audiencia sets de datos complejos de una manera atractiva y f??cil de digerir. La visualizaci??n de datos es la intersecci??n entre la ciencia y el arte de mostrar informaci??n, lo cual hace mucho m??s f??cil identicar insights clave.</p>
			    			</ul>
			    		</div>
			    	</div>	
			    </div>
			     <!-- Item de consultoria -->
			    <div class="carousel-item" id="soluciones-mobile-item9">
			    	<div class="soluciones-mobile-item2-container">
			    		<div class="navMobile-regresar" id="navMobile-regresar-de-consultoria">
			    			<p><img id="navMobile-flecha-atras" src="https://x-data.mx/img/icons/flecha-soluciones-mobile.svg" alt="">Servicios</p>
			    		</div>
			    		<div class="soluciones-mobile-item2-opciones">
			    			<ul class="soluciones-ul-container">
			    				<img src="https://x-data.mx/img/arquitectura-de-datos.png" alt="">
			    				<p class="ul-container-titulo">Consultor??a en arquitectura de datos</p>
			    				<p>Tu empresa genera grandes vol??menes de datos y procesarlos es un reto que nosotros te ayudamos a resolver. S??mate a las mejores pr??cticas de la industria para almacenar y estructurar la informaci??n, permiti??ndote tener una mayor escalabilidad y colaboraci??n en ujos de datos.</p>
			    			</ul>
			    		</div>
			    	</div>	
			    </div>

			    <!-- Item de productos -->
			    <div class="carousel-item" id="soluciones-mobile-item4">
			    	<div class="soluciones-mobile-item2-container">
			    		<div class="navMobile-regresar" id="navMobile-regresar-a-soluciones-de-productos">
			    			<p><img id="navMobile-flecha-atras" src="https://x-data.mx/img/icons/flecha-soluciones-mobile.svg" alt="">Productos</p>
			    		</div>
			    		<div class="soluciones-mobile-item2-opciones op2">
			    			<ul>
			    				<li>
			    					<a href="https://x-data.mx/baiwa">
			    						<p><span><img src="https://x-data.mx/img/baiwa-icon.png" alt="">Baiwa</span><img class="soluciones-flecha-next" src="https://x-data.mx/img/icons/flecha-soluciones-mobile.svg" alt=""></p>
			    					</a>
			    					
			    				</li>
			    				<li id="ir-a-datalake">
			    					<p><span><img src="https://x-data.mx/img/data-lake.png" alt="">Data Lake</span><img class="soluciones-flecha-next" src="https://x-data.mx/img/icons/flecha-soluciones-mobile.svg" alt=""></p>
			    				</li>
			    				<li id="ir-a-energymap">
			    					<p><span><img src="https://x-data.mx/img/energy-map.png" alt="">Energy Map</span><img class="soluciones-flecha-next" src="https://x-data.mx/img/icons/flecha-soluciones-mobile.svg" alt=""></p>
			    				</li>
			    			</ul>
			    		</div>
			    	</div>
			    </div>
			     <!-- Item de baiwa -->
			    <div class="carousel-item" id="soluciones-mobile-item10">
			    	<div class="soluciones-mobile-item2-container">
			    		<div class="navMobile-regresar" id="navMobile-regresar-de-baiwa">
			    			<p><img id="navMobile-flecha-atras" src="https://x-data.mx/img/icons/flecha-soluciones-mobile.svg" alt="">Productos</p>
			    		</div>
			    		<div class="soluciones-mobile-item2-opciones">
			    			<ul class="soluciones-ul-container">
			    				<img src="https://x-data.mx/img/baiwa-icon.png" alt="">
			    				<p class="ul-container-titulo">Baiwa</p>
			    				<p>Transforma tu ??rea de Recursos Humanos en data driven. Dise??a tu estrategia utilizando recursos tecnol??gicos donde contemples las necesidades de tu empresa y tus colaboradores. Reduce la rotaci??n, contrata de manera inteligente y promueve activos valiosos dentro de tu organizaci??n.</p>
			    			</ul>
			    		</div>
			    	</div>	
			    </div>
			     <!-- Item de data lake -->
			    <div class="carousel-item" id="soluciones-mobile-item11">
			    	<div class="soluciones-mobile-item2-container">
			    		<div class="navMobile-regresar" id="navMobile-regresar-de-datalake">
			    			<p><img id="navMobile-flecha-atras" src="https://x-data.mx/img/icons/flecha-soluciones-mobile.svg" alt="">Productos</p>
			    		</div>
			    		<div class="soluciones-mobile-item2-opciones">
			    			<ul class="soluciones-ul-container">
			    				<img src="https://x-data.mx/img/data-lake.png" alt="">
			    				<p class="ul-container-titulo">Data Lake</p>
			    				<p>Todos tus datos en un mismo lugar. Crea un repositorio para almacenar, gestionar, indexar y disponer de todos los datos estructurados o no estructurados que generes, de manera sencilla y autom??tica; con la capacidad de digerir altos vol??menes de informaci??n.</p>
			    			</ul>
			    		</div>
			    	</div>	
			    </div>
			     <!-- Item de energy map -->
			    <div class="carousel-item" id="soluciones-mobile-item12">
			    	<div class="soluciones-mobile-item2-container">
			    		<div class="navMobile-regresar" id="navMobile-regresar-de-energymap">
			    			<p><img id="navMobile-flecha-atras" src="https://x-data.mx/img/icons/flecha-soluciones-mobile.svg" alt="">Productos</p>
			    		</div>
			    		<div class="soluciones-mobile-item2-opciones">
			    			<ul class="soluciones-ul-container">
			    				<img src="https://x-data.mx/img/energy-map.png" alt="">
			    				<p class="ul-container-titulo">Energy Map</p>
			    				<p>A trav??s de un tablero ejecutivo, monitorea en tiempo real el precio de la energ??a el??ctrica, gas natural y otros factores que puedan alterar estos indicadores, como el tipo de cambio, INPC, etc.</p>
			    			</ul>
			    		</div>
			    	</div>	
			    </div>


			    <!-- Item de industrias -->
			    <div class="carousel-item" id="soluciones-mobile-item5">
			    	<div class="soluciones-mobile-item2-container">
			    		<div class="navMobile-regresar" id="navMobile-regresar-a-soluciones-de-industrias">
			    			<p><img id="navMobile-flecha-atras" src="https://x-data.mx/img/icons/flecha-soluciones-mobile.svg" alt="">Industrias</p>
			    		</div>
			    		<div class="soluciones-mobile-item2-opciones op2">
			    			<ul>
			    				<li id="ir-a-logistica">
			    					<p><span><img src="https://x-data.mx/img/logistica-y-transporte.png" alt="">Log??stica y transporte</span><img class="soluciones-flecha-next" src="https://x-data.mx/img/icons/flecha-soluciones-mobile.svg" alt=""></p>
			    				</li>
			    				<li id="ir-a-manufactura">
			    					<p><span><img src="https://x-data.mx/img/manufactura.png" alt="">Manufactura</span><img class="soluciones-flecha-next" src="https://x-data.mx/img/icons/flecha-soluciones-mobile.svg" alt=""></p>
			    				</li>
			    				<li id="ir-a-retail">
			    					<p><span><img src="https://x-data.mx/img/retail.png" alt="">Retail y bienes de consumo</span><img class="soluciones-flecha-next" src="https://x-data.mx/img/icons/flecha-soluciones-mobile.svg" alt=""></p>
			    				</li>
			    				<li id="ir-a-salud">
			    					<p><span><img src="https://x-data.mx/img/salud-y-farmaceutica.png" alt="">Salud y farmac??utica</span><img class="soluciones-flecha-next" src="https://x-data.mx/img/icons/flecha-soluciones-mobile.svg" alt=""></p>
			    				</li>
			    			</ul>
			    		</div>
			    	</div>		     	
			    </div>
			     <!-- Item de logistica -->
			    <div class="carousel-item" id="soluciones-mobile-item13">
			    	<div class="soluciones-mobile-item2-container">
			    		<div class="navMobile-regresar" id="navMobile-regresar-de-logistica">
			    			<p><img id="navMobile-flecha-atras" src="https://x-data.mx/img/icons/flecha-soluciones-mobile.svg" alt="">Industrias</p>
			    		</div>
			    		<div class="soluciones-mobile-item2-opciones">
			    			<ul class="soluciones-ul-container">
			    				<img src="https://x-data.mx/img/logistica-y-transporte.png" alt="">
			    				<p class="ul-container-titulo">Log??stica y transporte</p>
			    				<p>Optimiza rutas y tiempos de entrega con la centralizaci??n de datos y el an??lisis de tendencias</p>
			    			</ul>
			    		</div>
			    	</div>	
			    </div>
			     <!-- Item de manufactura -->
			    <div class="carousel-item" id="soluciones-mobile-item14">
			    	<div class="soluciones-mobile-item2-container">
			    		<div class="navMobile-regresar" id="navMobile-regresar-de-manufactura">
			    			<p><img id="navMobile-flecha-atras" src="https://x-data.mx/img/icons/flecha-soluciones-mobile.svg" alt="">Industrias</p>
			    		</div>
			    		<div class="soluciones-mobile-item2-opciones">
			    			<ul class="soluciones-ul-container">
			    				<img src="https://x-data.mx/img/manufactura.png" alt="">
			    				<p class="ul-container-titulo">Manufactura</p>
			    				<p>Eleva la calidad de producci??n, mide el desempe??o de la planta, reduce el riesgo de incidentes en tu personal, y genera predicciones sustentadas en datos utilizando nuestras herramientas.</p>
			    			</ul>
			    		</div>
			    	</div>	
			    </div>
			     <!-- Item de retail -->
			    <div class="carousel-item" id="soluciones-mobile-item15">
			    	<div class="soluciones-mobile-item2-container">
			    		<div class="navMobile-regresar" id="navMobile-regresar-de-retail">
			    			<p><img id="navMobile-flecha-atras" src="https://x-data.mx/img/icons/flecha-soluciones-mobile.svg" alt="">Industrias</p>
			    		</div>
			    		<div class="soluciones-mobile-item2-opciones">
			    			<ul class="soluciones-ul-container">
			    				<img src="https://x-data.mx/img/retail.png" alt="">
			    				<p class="ul-container-titulo">Retail y bienes de consumo</p>
			    				<p>Consolidamos la informaci??n de ventas, inventarios, devoluciones, ??rdenes de compra y facturas pendientes de pago dentro de una misma plataforma, para facilitar la comunicaci??n con tus clientes, analizar el desempe??o de tus principales canales de venta y monitorear la salud de tu empresa.</p>
			    			</ul>
			    		</div>
			    	</div>	
			    </div>
			     <!-- Item de salud -->
			    <div class="carousel-item" id="soluciones-mobile-item16">
			    	<div class="soluciones-mobile-item2-container">
			    		<div class="navMobile-regresar" id="navMobile-regresar-de-salud">
			    			<p><img id="navMobile-flecha-atras" src="https://x-data.mx/img/icons/flecha-soluciones-mobile.svg" alt="">Industrias</p>
			    		</div>
			    		<div class="soluciones-mobile-item2-opciones">
			    			<ul class="soluciones-ul-container">
			    				<img src="https://x-data.mx/img/salud-y-farmaceutica.png" alt="">
			    				<p class="ul-container-titulo">Salud y farmace??tica</p>
			    				<p>Analiza la demanda, venta, distribuci??n y comportamiento de los productos del sector para mejorar la operaci??n y asegurar la disponibilidad del producto en todo el pa??s.</p>
			    			</ul>
			    		</div>
			    	</div>	
			    </div>

			  </div>
			</div>
		</div>`
	}
}

customElements.define('app-navbar', Navbar);