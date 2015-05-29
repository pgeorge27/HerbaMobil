var self = $.mobile.HerbaMobil = {
		/**
		 * [init metodo principal de la app, crea todos los productos en bd]
		 * @return {[type]} [description]
		 */
		 init : function(){
		 	console.log("*************En init");
		 	crearProductosVnz();
		 	crearProductosUsa();
		 	crearProductosUsaEspanol();
		 	crearProductosBrasil();
		 	crearProductosCa();
		 	crearProductosChile();
		 	crearProductosAruba();
		 },

		 connection : null,
			/**
			 * [openDatabase metodo que tiene todos parametros para abrir la BD]
			 * @return {[type]} [description]
			 */
			 openDatabase : function(){
			 	console.log("*************En openDatabase");
			 	self.connection = window.openDatabase("HerbaMobil", "1.0", "Productos HerbaLife", 200000);				
			 },

			/**
			 * [cargarProductos carga los productos de bd]
			 * @param  {[type]} categoria [categoria de los productos]
			 * @param  {[type]} pais      [pais de los productos]
			 * @return {[type]}           [description]
			 */
			 cargarProductos: function(tabla,categoria){
			 	console.log("*************En cargarProductos");
			 	self.transaction(function(tx){
			 		consulta = 'SELECT id, nombre, foto, categoria FROM ' + tabla +  ' ';
			 		if (categoria != 0) {
			 			consulta +=   ' WHERE  categoria == ' + categoria + ' ';
			 		};
			 		tx.executeSql(consulta,[],function(tx,rs){
			 			if(rs.rows.length >0){
			 				var lista = $('<ul/>');
			 				for(var i=0; i<rs.rows.length;i++){
			 					var item = rs.rows.item(i);
			 					lista.append(
			 						$('<li/>').append(
			 							$('<a/>').data('item',item).attr('href','productoDetalles.html?id='+item.id)
			 							.attr('data-ajax','false')
			 							.append(
			 								$('<h2/>').text(item.nombre)
			 								)
			 							.append(
			 								$('<img/>').attr('src', item.foto).attr('style', 'height:100%; width:100%').attr('class','fondo-blanco')
			 								)
			 							.append(
			 								$('<p/>').text(item.nombre)
			 								)
			 							).attr('class', item.categoria)
			 						);								
			 				}

			 				$('#items').empty().append(lista.children()).listview('refresh');
			 			}

			 		},self.error);
			 	},self.error);
			},
			/**
			 * [transaction establece la coneccion]
			 * @param  {Function} fn  [callback]
			 * @param  {[type]}   err [callback]
			 * @param  {[type]}   suc [callback]
			 * @return {[type]}       [description]
			 */
			 transaction : function(fn,err,suc){
			 	console.log("*************En transaction");
			 	if(self.connection==null){
			 		self.openDatabase();
			 	}

			 	self.connection.transaction(fn);				
			 },

			/**
			 * [obtenerProducto metodo que obtiene el producto a mostrar
			 * el producto es obtenido mediante la url con getUrlVars()]
			 * @return {[type]} [description]
			 */
			 obtenerProducto : function(tabla) {
			 	console.log("Dentro de obtenerProductos");
			 	self.transaction(function(tx){
			 		consulta = 'SELECT * FROM ' + tabla +  ' where id == ' + self.getUrlVars()["id"] + ' ';
			 		tx.executeSql(consulta,[],function(tx,rs){
						//if(rs.rows.length >0){
							//for(var i=0; i<rs.rows.length;i++){
								var item = rs.rows.item(0);
								tema = '';
								categoria = item.categoria;
								console.log("Valor de categoria " + item.categoria);
								if(categoria == '1'){tema = 'a';}
								else if(categoria == '2'){tema = 'b';}
								else if(categoria == '3'){tema = 'c';}
								else{tema = 'd';}
								self.changeGlobalTheme(tema);
								self.agregarTexto(item);					
							//}
						//}
					},self.error);
			 	},self.error);
			 },

			/**
			 * [getUrlVars metodo que obtiene la url actual
			 * luego obtiene el valor despues del ?
			 * y devuelve el valor ID]
			 * @return {[type]} [description]
			 */
			 getUrlVars: function() {
			 	console.log("Dentro de getUrlVars");
			 	var vars = [], hash;
			 	var hashes = window.location.href.slice(
			 		window.location.href.indexOf('?') + 1).split('&');
			 	for ( var i = 0; i < hashes.length; i++) {
			 		hash = hashes[i].split('=');
			 		vars.push(hash[0]);
			 		vars[hash[0]] = hash[1];
			 	}
			 	return vars;
			 },

			/**
			 * [agregarTexto metodo que agrega el texto en la pagina
			 * detalles del producto, evalua su valor y en caso de
			 * tene N/A elimina ese campo]
			 * @param  {[type]} item [description]
			 * @return {[type]}      [description]
			 */
			 agregarTexto : function(item){
			 	$('#foto-val').attr('src', item.foto);
			 	$('#nombre-val').text(item.nombre);
			 	if(item.descripcion == "N/A" || item.descripcion == null || item.descripcion.trim()==''){
			 		$('#contentDescripcion').css('display', 'none');
			 	}else{
			 		$('#descripcion-val').text(item.descripcion);
			 	}
			 	if(item.sabores == "N/A" || item.sabores == null || item.sabores.trim()==''){
			 		$('#contentSabores').css('display', 'none');
			 	}else{
			 		$("#sabores-val").text(item.sabores);
			 	}
			 	if(item.beneficios == "N/A" || item.beneficios == null || item.beneficios.trim()==''){
			 		$('#contentBeneficios').css('display', 'none');
			 	}else{
			 		$('#beneficios-val').text(item.beneficios);
			 	}
			 	if(item.detalles == "N/A" || item.detalles == null || item.detalles.trim()==''){
			 		$('#contentDetalles').css('display', 'none');
			 	}else{
			 		$('#detalles-val').text(item.detalles);
			 	}
			 	if(item.uso == "N/A" || item.uso == null || item.uso.trim()==''){
			 		$('#contentUsos').css('display', 'none');
			 	}else{
			 		$('#usos-val').text(item.uso);
			 	}
			 	if(item.indicacion == "N/A" || item.indicacion == null || item.indicacion.trim()==''){
			 		$('#contentIndicacion').css('display', 'none');
			 	}else{
			 		$('#indicacion-val').text(item.indicacion );
			 	}
			 	if(item.ingrediente == "N/A" || item.ingrediente == null || item.ingrediente.trim()==''){
			 		$('#contentIngrediente').css('display', 'none');
			 	}else{
			 		$('#ingrediente-val').text(item.ingrediente);
			 	}
			 	console.log(' Valor de ingrediente ' + item.ingrediente);				
			 },

			/**
			 * [changeGlobalTheme metodo que cambia el tema
			 * segun sea la categoria del producto]
			 * @param  {[type]} theme [arreglo con las categorias disponibles]
			 * @return {[type]}       [description]
			 */
			 changeGlobalTheme: function(theme){
			    // These themes will be cleared, add more
			    // swatch letters as needed.
			    var themes = "a b c d e";
			    // Updates the theme for all elements that match the
			    // CSS selector with the specified theme class.
			    function setTheme(cssSelector, themeClass, theme)
			    {
			    	$(cssSelector)
			    	.removeClass(themes.split(" ").join(" " + themeClass + "-"))
			    	.addClass(themeClass + "-" + theme)
			    	.attr("data-theme", theme);
			    }
			    setTheme(".ui-collapsible-heading .ui-btn-icon-left .ui-btn-inner", "ui-btn-up", theme);
			},

			/**
			 * [error genera una Dialog con el error]
			 * @param  {[type]} err [almacena el error]
			 * @return {[type]}     [description]
			 */
			 error : function (err){
			 	alert('Error code : ' + err.code + ' msg:'+err.message);
			 },

			/**
			 * [getData obtiene la categoria y el pais del Select en Index]
			 * @param  {[type]} dropdown [Categoria seleccionada]
			 * @param  {[type]} pais     [Pais Actual]
			 * @return {[type]}          [description]
			 */
			 getData: function (tabla,dropdown) {
			    categoria = dropdown.options[dropdown.selectedIndex].value;//Obtenemos la categoria seleccionada
			    self.cargarProductos(tabla,categoria);//Consultamos los productos segun categoria y pais
			}			

};