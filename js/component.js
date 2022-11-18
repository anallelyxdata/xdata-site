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
														<p class="tab-ind-p">Transforma tu área de Recursos Humanos en data driven. Diseña tu estrategia utilizando recursos tecnológicos donde contemples las necesidades de tu empresa y tus colaboradores. Reduce la rotación, contrata de manera inteligente y promueve activos valiosos dentro de tu organización.</p>
													</div>
												</div>
											</a>
											<div class="soluciones-tab-ind">
												<img src="https://x-data.mx/img/energy-map.png" alt="">
												<div>
													<p class="tab-ind-titulo">Energy Map</p>
													<p class="tab-ind-p">A través de un tablero ejecutivo, monitorea en tiempo real el precio de la energía eléctrica, gas natural y otros factores que puedan alterar estos indicadores, como el tipo de cambio, INPC, etc.</p>
												</div>
											</div>
											<div class="soluciones-tab-ind">
												<img src="https://x-data.mx/img/data-lake.png" alt="">
												<div>
													<p class="tab-ind-titulo">Data Lake</p>
													<p class="tab-ind-p">Todos tus datos en un mismo lugar. Crea un repositorio para almacenar, gestionar, indexar y disponer de todos los datos estructurados o no estructurados que generes, de manera sencilla y automática; con la capacidad de digerir altos volúmenes de información.</p>
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
													<p class="tab-ind-titulo">Analítica Avanzada</p>
													<p class="tab-ind-p">Centraliza y analiza la data de tu organización para identicar oportunidades de negocio y resolver problemas. Deja que los datos hablen por sí mismos y te muestren cómo se está comportando tu mercado.</p>
												</div>
											</div>
											<div class="soluciones-tab-ind">
												<img src="https://x-data.mx/img/dashboards.png" alt="">
												<div>
													<p class="tab-ind-titulo">Dashboards</p>
													<p class="tab-ind-p">Toma el control de tu empresa usando herramientas que te permitan monitorear la información de tu negocio en tiempo real. Toma decisiones basadas en datos duros, apoyándote de tableros fáciles de leer. Descubre insights valiosos dentro de tu información y empodera a toda tu empresa con ellos.</p>
												</div>
											</div>
											<div class="soluciones-tab-ind">
												<img src="https://x-data.mx/img/dataviz.png" alt="">
												<div>
													<p class="tab-ind-titulo">Dataviz</p>
													<p class="tab-ind-p">Muestra a tu audiencia sets de datos complejos de una manera atractiva y fácil de digerir. La visualización de datos es la intersección entre la ciencia y el arte de mostrar información, lo cual hace mucho más fácil identicar insights clave.</p>
												</div>
											</div>
											<div class="soluciones-tab-ind">
												<img src="https://x-data.mx/img/arquitectura-de-datos.png" alt="">
												<div>
													<p class="tab-ind-titulo">Consultoría en arquitectura de datos</p>
													<p class="tab-ind-p">Tu empresa genera grandes volúmenes de datos y procesarlos es un reto que nosotros te ayudamos a resolver. Súmate a las mejores prácticas de la industria para almacenar y estructurar la información, permitiéndote tener una mayor escalabilidad y colaboración en ujos de datos.</p>
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
													<p class="titulo-industrias">Logística y transporte</p>
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
													<p class="titulo-industrias">Salud y farmacéutica</p>
												</button>
											</div>
											<div class="tab-content" id="v-pills-tabContent">
												<div class="tab-pane fade show active" id="v-pills-t1" role="tabpanel" aria-labelledby="v-pills-home-tab">
													<img src="https://x-data.mx/img/logistica-y-transporte.png" alt="">
													<p class="tab-transporte-titulo">Logística y transporte</p>
													<p class="tab-transporte-p">Optimiza rutas y tiempos de entrega con la centralización de datos y el análisis de tendencias. 
													</p>
												</div>
												<div class="tab-pane fade" id="v-pills-t2" role="tabpanel" aria-labelledby="v-pills-profile-tab">
													<img src="https://x-data.mx/img/manufactura.png" alt="">
													<p class="tab-transporte-titulo">Manufactura</p>
													<p class="tab-transporte-p">Eleva la calidad de producción, mide el desempeño de la planta, reduce el riesgo de incidentes en tu personal, y genera predicciones sustentadas en datos utilizando nuestras herramientas.</p>
												</div>
												<div class="tab-pane fade" id="v-pills-t3" role="tabpanel" aria-labelledby="v-pills-messages-tab">
													<img src="https://x-data.mx/img/retail.png" alt="">
													<p class="tab-transporte-titulo">Retail y bienes de consumo</p>
													<p class="tab-transporte-p">Consolidamos la información de ventas, inventarios, devoluciones, órdenes de compra y facturas pendientes de pago dentro de una misma plataforma, para facilitar la comunicación con tus clientes, analizar el desempeño de tus principales canales de venta y monitorear la salud de tu empresa.</p>
												</div>
												<div class="tab-pane fade" id="v-pills-t4" role="tabpanel" aria-labelledby="v-pills-settings-tab">
													<img src="https://x-data.mx/img/salud-y-farmaceutica.png" alt="">
													<p class="tab-transporte-titulo">Salud y farmacéutica</p>
													<p class="tab-transporte-p">Analiza la demanda, venta, distribución y comportamiento de los productos del sector para mejorar la operación y asegurar la disponibilidad del producto en todo el país.</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					<!-- Termina menú soluciones -->
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
			    					<p><span> <img src="https://x-data.mx/img/analitica-avanzada.png" alt="">Analítica avanzada</span><img class="soluciones-flecha-next" src="https://x-data.mx/img/icons/flecha-soluciones-mobile.svg" alt=""></p>
			    				</li>
			    				<li id="ir-a-dash">
			    					<p><span> <img src="https://x-data.mx/img/dashboards.png" alt="">Dashboards</span><img class="soluciones-flecha-next" src="https://x-data.mx/img/icons/flecha-soluciones-mobile.svg" alt=""></p>
			    				</li>
			    				<li id="ir-a-dataviz">
			    					<p><span> <img src="https://x-data.mx/img/dataviz.png" alt="">Dataviz</span><img class="soluciones-flecha-next" src="https://x-data.mx/img/icons/flecha-soluciones-mobile.svg" alt=""></p>
			    				</li>
			    				<li id="ir-a-consultoria">
			    					<p><span> <img src="https://x-data.mx/img/arquitectura-de-datos.png" alt="">Consultoría en arquitectura de datos</span><img class="soluciones-flecha-next" src="https://x-data.mx/img/icons/flecha-soluciones-mobile.svg" alt=""></p>
			    				</li>
			    			</ul>
			    		</div>
			    	</div>
			     	
			    </div>
			    <!-- Item de analítica avanzada -->
			    <div class="carousel-item" id="soluciones-mobile-item6">
			    	<div class="soluciones-mobile-item2-container">
			    		<div class="navMobile-regresar" id="navMobile-regresar-de-analitica">
			    			<p><img id="navMobile-flecha-atras" src="https://x-data.mx/img/icons/flecha-soluciones-mobile.svg" alt="">Servicios</p>
			    		</div>
			    		<div class="soluciones-mobile-item2-opciones">
			    			<ul class="soluciones-ul-container">
			    				<img src="https://x-data.mx/img/analitica-avanzada.png" alt="">
			    				<p class="ul-container-titulo">Analítica Avanzada</p>
			    				<p>Centraliza y analiza la data de tu organización para identicar oportunidades de negocio y resolver problemas. Deja que los datos hablen por sí mismos y te muestren cómo se está comportando tu mercado.</p>
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
			    				<p>Toma el control de tu empresa usando herramientas que te permitan monitorear la información de tu negocio en tiempo real. Toma decisiones basadas en datos duros, apoyándote de tableros fáciles de leer. Descubre insights valiosos dentro de tu información y empodera a toda tu empresa con ellos.</p>
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
			    				<p>Muestra a tu audiencia sets de datos complejos de una manera atractiva y fácil de digerir. La visualización de datos es la intersección entre la ciencia y el arte de mostrar información, lo cual hace mucho más fácil identicar insights clave.</p>
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
			    				<p class="ul-container-titulo">Consultoría en arquitectura de datos</p>
			    				<p>Tu empresa genera grandes volúmenes de datos y procesarlos es un reto que nosotros te ayudamos a resolver. Súmate a las mejores prácticas de la industria para almacenar y estructurar la información, permitiéndote tener una mayor escalabilidad y colaboración en ujos de datos.</p>
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
			    				<p>Transforma tu área de Recursos Humanos en data driven. Diseña tu estrategia utilizando recursos tecnológicos donde contemples las necesidades de tu empresa y tus colaboradores. Reduce la rotación, contrata de manera inteligente y promueve activos valiosos dentro de tu organización.</p>
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
			    				<p>Todos tus datos en un mismo lugar. Crea un repositorio para almacenar, gestionar, indexar y disponer de todos los datos estructurados o no estructurados que generes, de manera sencilla y automática; con la capacidad de digerir altos volúmenes de información.</p>
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
			    				<p>A través de un tablero ejecutivo, monitorea en tiempo real el precio de la energía eléctrica, gas natural y otros factores que puedan alterar estos indicadores, como el tipo de cambio, INPC, etc.</p>
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
			    					<p><span><img src="https://x-data.mx/img/logistica-y-transporte.png" alt="">Logística y transporte</span><img class="soluciones-flecha-next" src="https://x-data.mx/img/icons/flecha-soluciones-mobile.svg" alt=""></p>
			    				</li>
			    				<li id="ir-a-manufactura">
			    					<p><span><img src="https://x-data.mx/img/manufactura.png" alt="">Manufactura</span><img class="soluciones-flecha-next" src="https://x-data.mx/img/icons/flecha-soluciones-mobile.svg" alt=""></p>
			    				</li>
			    				<li id="ir-a-retail">
			    					<p><span><img src="https://x-data.mx/img/retail.png" alt="">Retail y bienes de consumo</span><img class="soluciones-flecha-next" src="https://x-data.mx/img/icons/flecha-soluciones-mobile.svg" alt=""></p>
			    				</li>
			    				<li id="ir-a-salud">
			    					<p><span><img src="https://x-data.mx/img/salud-y-farmaceutica.png" alt="">Salud y farmacéutica</span><img class="soluciones-flecha-next" src="https://x-data.mx/img/icons/flecha-soluciones-mobile.svg" alt=""></p>
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
			    				<p class="ul-container-titulo">Logística y transporte</p>
			    				<p>Optimiza rutas y tiempos de entrega con la centralización de datos y el análisis de tendencias</p>
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
			    				<p>Eleva la calidad de producción, mide el desempeño de la planta, reduce el riesgo de incidentes en tu personal, y genera predicciones sustentadas en datos utilizando nuestras herramientas.</p>
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
			    				<p>Consolidamos la información de ventas, inventarios, devoluciones, órdenes de compra y facturas pendientes de pago dentro de una misma plataforma, para facilitar la comunicación con tus clientes, analizar el desempeño de tus principales canales de venta y monitorear la salud de tu empresa.</p>
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
			    				<p class="ul-container-titulo">Salud y farmaceútica</p>
			    				<p>Analiza la demanda, venta, distribución y comportamiento de los productos del sector para mejorar la operación y asegurar la disponibilidad del producto en todo el país.</p>
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