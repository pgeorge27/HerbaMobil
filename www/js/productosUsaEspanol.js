/**
 * [crearProductosUsaEspanol funcion que crea los productos de Usa]
 * @return {[type]} [description]
 */
function crearProductosUsaEspanol (){
	console.log("*************En crearProductos USA");
	self.transaction(function(tx){
		tx.executeSql('DROP TABLE IF EXISTS ProductosUsaEspanol'); //Eliminamos la tabla productos la creamos nuevamente y cargamos todos los productos
		tx.executeSql('CREATE TABLE IF NOT EXISTS ProductosUsaEspanol (id INTEGER PRIMARY KEY ASC, nombre VARCHAR(50), categoria TEXT, descripcion TEXT, sabores VARCHAR(60), beneficios VARCHAR(60), detalles VARCHAR(60), uso VARCHAR(60), foto TEXT)');			     

		tx.executeSql('INSERT INTO ProductosUsaEspanol (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
			"Programa Básico", 
			"1", 
			"¡Emprende el camino hacia un estilo de vida saludable con este programa fácil de seguir! Al combinar la ciencia con deliciosos batidos, tés y suplementos dietéticos, el Programa Básico puede ayudarte a lograr un control de peso saludable‡ y Nutrición Celular.", 
			"Vainilla 1 Paquete, Bayas Silvestres 1 Paquete, Chocolate 1 Paquete, Cookies 'n Cream 1 Paquete, Cafe Latte 1 Paquete, Piña Colada 1 Paquete", 
			"Programa Básico para un control de peso saludable que incluye: Tres Productos Básicos: Fórmulas 1, 2 y 3 para apoyar la Nutrición Celular Té Herbal Concentrado (50 g)", 
			"Fórmula 1 Comida Saludable Mezcla Nutricional para Batido (750 g) Fórmula 2 Multivitamin Complex Fórmula 3 Cell Activator® Té Herbal Concentrado† (50 g)",
			"Elije el sabor que prefieras de Fórmula 1 Comida Saludable Mezcla Nutricional para Batido. Apoya tu programa de control de peso‡ agregando Reforzadores dirigidos a necesidades específicas.",
			"../imagenes/productos/usaEspanol/1/4799_quickstartprogram_frenchvanilla_us.jpg" 
			]);
		tx.executeSql('INSERT INTO ProductosUsaEspanol (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
			"Programa Avanzado", 
			"1", 
			"¿Listo para incrementar tu labor de control de peso? ‡ El Programa Avanzado contiene todos los productos del Programa Básico, y además incluye reforzadores adicionales como Total Control® y Cell-U-Loss®.", 
			"Vainilla 1 Paquete, Chocolate Holandés 1 Paquete, Cookies 'n Cream 1 Paquete, Bayas Silvestres 1 Paquete, Cafe Latte 1 Paquete, Piña Colada 1 Paquete", 
			"La cafeína en Total Control®† estimula tu metabolismo. Incluye Cell-U-Loss®, el cual está formulado con seda de maíz para apoyar la eliminación saludable de fluidos.", 
			"Fórmula 1 Comida Saludable Mezcla Nutricional para Batido (750 g) Formula 2 Multivitamin Complex Formula 3 Cell Activator® Té Herbal Concentrado† (50 g) Cell-U-Loss® Total Control®†",
			"Elije el sabor que prefieras de Fórmula 1 Comida Saludable Mezcla Nutricional para Batido. Apoya tu programa de control de peso‡ agregando Reforzadores dirigidos a necesidades específicas.",
			"../imagenes/productos/usaEspanol/1/4804_advancedprogram_frenchvanilla_us.jpg" 
			]);
		tx.executeSql('INSERT INTO ProductosUsaEspanol (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
			"Ultimate (Programa Total)", 
			"1", 
			"El Programa Total contiene tabletas de Snack Defense® para ayudar a mantener los niveles de azúcar en la sangre que ya se encuentran dentro de un rango normal, y Aminogen®‡ para descomponer proteínas en aminoácidos.", 
			"French Vanilla 1 Paquete, Cookies 'n Cream 1 Paquete, Cafe Latte 1 Paquete, Bayas Silvestres 1 Paquete, Piña Colada 1 Paquete, Chocolate Holandés 1 Paquete", 
			"Incluye TODOS los productos del Programa Avanzado y ADEMÁS:† Snack Defense® Aminogen®‡", 
			"Fórmula 1 Comida Saludable Mezcla Nutricional para Batido (750 g) Formula 2 Multivitamin Complex Formula 3 Cell Activator® Té Herbal Concentrado† (50 g) Cell-U-Loss® Total Control®† Snack Defense® Aminogen®‡",
			"Elije el sabor que prefieras de Fórmula 1 Comida Saludable Mezcla Nutricional para Batido. Apoya tu programa de control de peso§ agregando un producto con proteína que cumpla mejor con tus necesidades de proteína.",
			"../imagenes/productos/usaEspanol/1/4809_ultimateprogram_frenchvanilla_us.jpg" 
			]);
		tx.executeSql('INSERT INTO ProductosUsaEspanol (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
			"Fórmula 1 Comida Saludable Mezcla Nutricional para Batido", 
			"1", 
			"Disfrute de una comida saludable y equilibrada en cuestión de minutos! Estos batidos no sólo son fáciles de preparar, también son deliciosos. Con hasta 21 vitaminas esenciales y minerales – en una variedad de sabores – el controlar su peso nunca ha sido tan sabroso.", 
			"Vainilla 750g, Dulce de Leche 750g, Canela y Especias 750g, Caramelo Tostado 750g, Naranja y Vainilla 750g, Vainilla no transgénicos 750g, Menta con Chocolate 780g, Vainilla - Sin Alérgenos 810g, Chocolate 750g, Moras Silvestres 750g, Cookies 'n Cream 750g, Piña Colada 750g, Cafe Latte 780g, Kosher (Vainilla) 550g", 
			"Una comida saludable con hasta 21 vitaminas, minerales y nutrientes esenciales. 9g de proteína y fibra para contribuir al control de peso. 0 colesterol, 0 grasas trans. Fórmula 1 provee proteína y una nutrición equilibrada.", 
			"Los batidos Fórmula 1 contienen proteína, fibra y nutrientes esenciales que apoyan el metabolismo a nivel celular.",
			"Mezcle o agite 2 medidas (2 cucharadas rasas o 25gr.) de Fórmula 1 en 8 onzas de leche sin grasa o leche de soya. Pruébelo también con frutas frescas y hielo.",
			"../imagenes/productos/usaEspanol/1/101213_sku3106_400x400_us.jpg" 
			]);
		tx.executeSql('INSERT INTO ProductosUsaEspanol (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
			"Formula 1 + PDM On The Go24 g de Proteína",
			"1", 
			"¡Recibe un refuerzo de proteína! Esta combinación perfecta de Fórmula 1 sabor Galletas con Crema y Bebida de Proteína en Polvo sabor Vainilla te ofrece un delicioso y conveniente reemplazo de comida – a cualquier hora y en cualquier lugar. Con un rico sabor y textura cremosa, este producto te ayudará a consumir la cantidad de proteína que necesitas para apoyar tu estilo de vida activo y el envejecimiento normal.", 
			"Fórmula 1 Galletas con Crema y PDM sabor Vainilla 7 paquetes por bolsa", 
			"Nutrientes esenciales incluyendo 24 vitaminas y minerales. Comida rica en proteína (24 g por porción). Excelente fuente de fibra (9 g por porción).", 
			"Cada paquete contiene una porción de Fórmula 1 y una de Bebida de Proteína en Polvo para lograr una buena nutrición y control de peso.",
			"Mezcla o combina 1 paquete (53 g) de Formula 1 + PDM con 8 onzas de agua o leche descremada. Crea tus propias recetas de Formula 1 añadiendo fruta fresca y hielo.",
			"../imagenes/productos/usaEspanol/1/1235_f1pluspdm_24g_us.jpg" 
			]);
		tx.executeSql('INSERT INTO ProductosUsaEspanol (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
			"Fórmula 1 Comida Saludable Mezcla Nutricional para Batido, sabor Canela y Especias, Edición Limitada", 
			"1", 
			"Fórmula 1 Canela y Especias regresa por tiempo limitado. Este es el batido Fórmula 1 en el que confías, y con los deliciosos sabores naturales de calabaza y canela que te encantan. Esta temporada, llénate del espíritu festivo y vívelo a plenitud, al tiempo que mantienes tu estilo de vida saludable y activo. Pero apúrate, Fórmula 1 Canela y Especias estará disponible solo hasta agotar existencias.", 
			"Canela y Especias 750g", 
			"Una comida saludable con nutrientes, incluyendo proteína, fibra y 21 vitaminas y minerales. Contiene 9 g de proteína de soya, que contribuye a la salud del corazón. Una excelente fuente de vitaminas antioxidantes A (betacaroteno), C y E. Sin gluten.", 
			"",
			"",
			"../imagenes/productos/usaEspanol/1/1130_formula1_pumpkinspice_holiday2014_us.jpg" 
			]);
		tx.executeSql('INSERT INTO ProductosUsaEspanol (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
			"Edición Limitada de Fórmula 1 Comida Saludable Mezcla Nutricional para Batido, sabor Caramelo Tostado", 
			"1", 
			"La edición limitada de Fórmula 1 Caramelo Tostado tiene un sabor rico y cremoso para refrescar tu régimen diario, a la vez que te ayuda a mantener tu programa de control de peso por buen camino.", 
			"Caramelo Tostado 750g", 
			"Una comida saludable con nutrientes que incluyen proteína, fibra y 21 vitaminas y minerales. Contiene 9 g de proteína de soya, saludable para el corazón. Una excelente fuente de Vitaminas antioxidantes A (betacaroteno), C y E.", 
			"",
			"",
			"../imagenes/productos/usaEspanol/1/0191_formula1_pralinesandcream_us_400.jpg" 
			]);
		tx.executeSql('INSERT INTO ProductosUsaEspanol (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
			"Fórmula 1 Barrita de Comida Exprés, Galletas con Crema", 
			"1", 
			"La nueva Fórmula 1 Barrita de Comida Exprés es una manera deliciosa de disfrutar una comida nutritiva cuando quiera y donde quiera vaya. Con 21 vitaminas, minerales y nutrientes, estas deliciosas barras sabor a Galletas con Crema hacen más fácil que nunca poder ampliar sus opciones alimenticias y disfrutar de la experiencia de Fórmula 1 para llevar.", 
			"Galletas con Crema 7 barras por caja", 
			"Contiene 21 vitaminas y minerales. Con 15 g de proteína. 5 g de fibra saludable para ayudar a mantener su control de peso. En paquetes individuales listos para llevar. Sabor a Galletas con Crema.", 
			"La Fórmula 1 Barrita de Comida Exprés es una nueva forma para disfrutar de forma deliciosa, nutritiva y práctica la experiencia Fórmula 1. Cada barra en paquetes individuales proporciona el equilibro ideal de proteína y fibra para ayudar a satisfacer el apetito y suministrar energía duradera.",
			"Substituya una de sus comidas diarias con una comida nutritiva Fórmula 1 Barrita de Comida Exprés. Para perder peso, substituya dos de sus comidas diarias y consuma una comida nutritiva, como parte de una rutina saludable de control de peso.",
			"../imagenes/productos/usaEspanol/1/121018_f1mealbar_us_400.jpg" 
			]);
		tx.executeSql('INSERT INTO ProductosUsaEspanol (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
			"Fórmula 1 Comida Saludable Instantánea Mezcla Nutricional para Batido", 
			"1", 
			"¡Obtenga todas las proteínas, calcio y antioxidantes de los batidos Fórmula 1 tal como los prepara en casa! Excelente fuente de los antioxidantes de las vitaminas C y E. Disponible en sobres que puede llevar cómodamente, cada porción de Fórmula 1 Comida Saludable Instantánea Mezcla Nutricional para Batido está elaborada para mezclarse fácilmente con agua y convertirse en un rico, cremoso, y delicioso batido.", 
			"Sueño de vainilla Bote, Chocolate Envase", 
			"20g de proteína, 24 vitaminas y minerales, además del calcio de un vaso de 8 oz. de leche. Excelente fuente de los antioxidantes de las vitaminas C y E. Sin colesterol ni grasas trans. Solo agregue agua.", 
			"Los batidos Fórmula 1 contienen proteína, fibra y nutrientes esenciales que apoyan el metabolismo a nivel celular.",
			"Mezcle 1 paquete ó 2 medidas (52gr.) de Fórmula 1 Comida Saludable Instantánea Mezcla Nutricional para Batido en 8 onzas de agua. ¡Agite y listo!",
			"../imagenes/productos/usaEspanol/1/2795_f1instanthealthymeal_vanillacanister_400_us.jpg" 
			]);
		tx.executeSql('INSERT INTO ProductosUsaEspanol (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
			"Fórmula 1 + PDM On The Go17 g de Proteína", 
			"1", 
			"La combinación de Fórmula 1 + PDM On The Go, en un práctico paquete para llevar. Es una deliciosa comida alternativa, con un rico sabor y textura cremosa que le proporciona proteína y nutrición en cualquier momento, esté donde esté.", 
			"Galletas con crema y PDM vainilla 7 paquetes por caja", 
			"24 vitaminas y minerales Alto en proteína (17 g) Excelente fuente de fibra (5 g)", 
			"Una porción de Fórmula 1 + PDM On The Go para brindar nutrientes saludables y ayudar a controlar el peso.",
			"Batir o mezclar 1 paquete (39g) de Fórmula 1 + PDM On The Go con 8 fl. oz. de agua o leche descremada.",
			"../imagenes/productos/usaEspanol/1/3145_f1pluspdm_onthego_400_us.jpg" 
			]);
		tx.executeSql('INSERT INTO ProductosUsaEspanol (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
			"Fórmula 1 Comida Saludable Mezcla Nutricional para Batido – Sin Alérgenos", 
			"1", 
			"La solución perfecta para las alergias comunes a ciertos alimentos debido a que no contiene soya, lácteos ni gluten. Nadie se queda fuera de la experiencia de disfrutar el batido Fórmula 1.", 
			"Vainilla - Sin Alérgenos 810g", 
			"Les permite a las personas con intolerancias comunes a ciertos alimentos, disfrutar de todos los beneficios de los batidos Fórmula 1.", 
			"Una Mezcla Nutricional para Batido sabor Vainilla para aquellos con intolerancias a la soya, los lácteos y al gluten. El Sin Alérgenos,* Fórmula 1 Mezcla Nutricional para Batido le ayuda a mantener su programa de control de peso y recibir la nutrición que necesita.",
			"Alérgia a la soya: Mezcle con leche descremada, leche de arroz, o leche de almendra. Alérgia a los lácteos: Mezcle con leche de arroz, leche de almendras o leche de soya. Alérgia al gluten: Mezcle con leche descremada, leche de arroz o leche de soya. Alérgia a la soya, a los lácteos y al gluten: Mezcle con leche de arroz.",
			"../imagenes/productos/usaEspanol/1/102310_sku3117_us_400.jpg" 
			]);
		tx.executeSql('INSERT INTO ProductosUsaEspanol (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
			"Polvo de Proteína Personalizado", 
			"1", 
			"¡Obtén más proteína! La proteína te puede ayudar a permanecer satisfecho por más tiempo, y a mantener tu peso, tu condición física y a cumplir tus metas de salud. Satisface tus antojos agregando este polvo sin grasa a tus batidos o comidas.", 
			"12.7 oz (360g)", 
			"Ayuda a construir y mantener la masa muscular magra. Suplemento de proteína sin grasa para satisfacer el hambre. Contiene 5 g de proteína de soya y suero de leche, además de los 9 aminoácidos esenciales por porción.", 
			"El Polvo de Proteína Personalizado es muy práctico para aumentar el consumo de proteína, lo cual ayuda a mantener tu nivel de energía entre comidas y te ayuda a mantener la masa muscular magra. En polvo.",
			"Una cucharada (una porción) proporciona 5 g de proteína. Toma de 1 a 4 porciones por día. Esta fórmula básica y sin azúcar se puede agregar a tu batido Fórmula 1 o mezclar con otras comidas y bebidas, incluyendo cereales, yogur, salsas y sopas.",
			"../imagenes/productos/usaEspanol/1/persproteinpow_400_usen.jpg" 
			]);
		tx.executeSql('INSERT INTO ProductosUsaEspanol (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
			"Bebida de Proteína en Polvo", 
			"1", 
			"¡Controla tu hambre y mantente energizado con el poder de la proteína! Añade Bebida de Proteína en Polvo a tu batido favorito de Fórmula 1 para aumentar tu consumo de proteína a 24 g (sin agregar leche) o mézclala con agua para un nutritivo bocadillo de proteína.", 
			"Vainilla Bote de 616g, Chocolate Bote de 638g", 
			"24 vitaminas y minerales. 15 g de proteínas de soya por porción. 5 g de carbohidratos por porción.", 
			"Esta deliciosa bebida es un medio ideal para ingerir proteína durante el día. Incluye vitaminas antioxidantes C y E, y es fácil de disolver en agua, por lo que es ideal como bocadillo nutritivo o para darte un impulso de proteína mientras estás fuera. En polvo.",
			"Agita el bote suavemente antes de cada uso ya que el contenido podría asentarse. Mezcla o revuelve 2 cucharadas (29 g) de Bebida de Proteína en Polvo con 8 onzas de agua fría y ¡disfruta! Tómalo a media mañana y/o a media tarde para satisfacer el hambre y los antojos, y cumplir con tus requisitos diarios de consumo de proteína.",
			"../imagenes/productos/usaEspanol/1/100907_sku1122_us_400.jpg" 
			]);
		tx.executeSql('INSERT INTO ProductosUsaEspanol (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
			"Té Herbal Concentrado", 
			"1", 
			"El Té Herbal Concentrado contiene cafeína que estimula su metabolismo y provee sensación de energía. Para experiencia óptima, mezcle un poco menos de ½ de una cucharadita con 8 onzas de agua. Este té refrescante, de bajas calorías, está disponible en una variedad de sabores.", 
			"Canela 3.53 OZ (100g), Original 1.8oz, Original 3.53oz, Original 15 Paquetes, Limón 3.53oz, Frambuesa 3.53oz, Durazno 3.53oz, Limón 1.8oz, Frambuesa 1.8oz, Durazno 1.8oz", 
			"Estimula la actividad termogénica (metabolismo) Incrementa la sensación de energía. Proporciona apoyo antioxidante. Delicioso, instantáneo y bajo en calorías.", 
			"Este té refrescante, bajas calorías, contiene cafeína conocida por sus beneficios termogénicos provisorios (aumento del metabolismo).",
			"Mezcle un poco más de ½ cucharadita de té con 6 a 8 fl. Oz. de agua fría o caliente.",
			"../imagenes/productos/usaEspanol/1/0195_herbalteaconcentrate_cinnamon_us.jpg" 
			]);
		tx.executeSql('INSERT INTO ProductosUsaEspanol (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
			"Prolessa® Duo", 
			"1", 
			"Este producto de doble acción para el control de peso, formulado con ácido linoleico conjugado y una mezcla especializada de ingredientes, ayuda significativamente a reducir el consumo de calorías y promueve la pérdida de grasa corporal.", 
			"30 Días (Programa), 7 Días (Programa)", 
			"Una fórmula única que ayuda a reducir significativamente el consumo de calorías. El ácido linoleico conjugado ayuda a promover la pérdida de grasa corporal. Contiene una mezcla especializada de ingredientes que ayuda a crear la sensación de estar satisfecho. Sin estimulantes. Elaborado con ingredientes clínicamente probados.", 
			"Una fórmula única que ayuda a crear la sensación de estar lleno y apoya la pérdida de grasa corporal. Elaborado en la fábrica de Herbalife y siguiendo estrictamente las pautas de las Buenas Prácticas de Fabricación (GMP, por sus siglas en inglés). Disponible en programas de 7 y 30 días. Mezcla en polvo.",
			"Agrega una medida del polvo al día a tu batido favorito Herbalife® como reforzante, a leche, o tómalo con otros productos de proteína como la leche de soya o el yogur. Para mejores resultados, prepara tu batido como de costumbre, luego añade una medida del polvo de Prolessa® Duo y mézclalo por entre 5 y 10 segundos adicionales.",
			"../imagenes/productos/usaEspanol/1/121108_sku1076_us_400.jpg" 
			]);
		tx.executeSql('INSERT INTO ProductosUsaEspanol (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
			"Total Control®", 
			"1", 
			"Las tabletas Total Control® contienen una mezcla patentada de extractos de hierbas y cafeína que estimulan rápidamente el metabolismo y proporcionan una sensación de energía y estado de alerta.", 
			"Original 90 Tabletas. Original 3 Tabletas/Paquete, 20 Paquetes", 
			"Acelera el metabolismo. Aumenta el estado de alerta. Proporciona una sensación energética.", 
			"Este suplemento dietético contiene cafeína que estimula su metabolismo, proporciona una sensación de energía y aumenta el estado de alerta.",
			"Tome una tableta tres veces al día.",
			"../imagenes/productos/usaEspanol/1/110623_sku0077_us_400.jpg" 
			]);
		tx.executeSql('INSERT INTO ProductosUsaEspanol (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
			"Formula 2 Multivitamin Complex", 
			"1", 
			"Multivitamina de consumo diario en tabletas con 21 micronutrientes esenciales, incluyendo ácido fólico, calcio y hierro; y Vitaminas antioxidantes A (como betacaroteno), C y E.", 
			"Original 90 Tabletas", 
			"21 micronutrientes esenciales, incluyendo Vitaminas antioxidantes A (como betacaroteno), C y E. Contiene ácido fólico, calcio y hierro. Vitaminas antioxidantes (C, E y beta caroteno) que apoyan el sistema inmunológico. Promueve la salud de los huesos, la piel y el cabello.", 
			"Formulado científicamente para nutrir su cuerpo y lograr un metabolismo óptimo a nivel celular. Un Producto Básico para la Nutrición Celular.",
			"Tome una tableta tres veces al día con comidas. Puede ser parte de un programa personalizado Herbalife que incluye Fórmula 1 y Cell Activator.",
			"../imagenes/productos/usaEspanol/1/140325_multi_complex_sku3115_400.jpg" 
			]);
		tx.executeSql('INSERT INTO ProductosUsaEspanol (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
			"Snack Defense®", 
			"1", 
			"Mantén tu nivel saludable de azúcar en la sangre que ya se encuentra dentro de un rango normal con Snack Defense®, una exclusiva mezcla de hierbas que apoya a tu cuerpo en el procesamiento normal del azúcar en tus alimentos y bocadillos.* Como ventaja adicional, esta exclusiva mezcla de ingredientes botánicos y minerales no contiene cafeína, así que la puedes tomar a cualquier hora del día o de la noche.", 
			"60 Tabletas", 
			"La gimnema y el cromo ayudan a mantener el nivel del azúcar en la sangre que ya se encuentra dentro de un rango nomal. Una excelente fuente de cromo. Puede tomarse a cualquier hora del día o la noche.", 
			"La gimnema, un ingrediente clave en Snack Defense®, ayuda a mantener el nivel del azúcar en la sangre que ya se encuentra dentro de un rango nomal. En forma de tableta",
			"Adultos: tomen una tableta dos veces al día, sea de día o de noche.",
			"../imagenes/productos/usaEspanol/1/0079_snackdefense_400_us.jpg" 
			]);
		tx.executeSql('INSERT INTO ProductosUsaEspanol (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
			"Cell-U-Loss®", 
			"1", 
			"Formulado con seda de maíz, una hierba que se ha utilizado tradicionalmente para la eliminación saludable de agua.", 
			"Original 90 Tabletas", 
			"Contiene minerales que ayudan a mantener el equilibrio entre electrolitos y un nivel saludable de pH.", 
			"El extracto de seda de maíz contenido en este producto favorece nuestra estrategia de integración vertical: Del Cultivo a su Mesa. Y se produce en la fábrica en Changsha, China, propiedad de Herbalife. Magnesio, Calcio, Sodio, Potasio y Cloruro ayudan a mantener el equilibrio normal entre electrolitos y un nivel saludable de pH.",
			"Tomar 1 tableta 3 veces al día con comida.",
			"../imagenes/productos/usaEspanol/1/0111_celluloss_us.jpg" 
			]);
		tx.executeSql('INSERT INTO ProductosUsaEspanol (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
			"Formula 3 Cell Activator®", 
			"1", 
			"Formula 3 Cell Activator® apoya la absorción de micronutrientes y promueve la producción de energía celular.", 
			"Original 60 Cápsulas", 
			"Contiene sábila, la cual apoya al cuerpo en la absorción de micronutrientes. Apoya la producción de energía celular. Incluye ingredientes con función antioxidante para promover un envejecimiento saludable", 
			"El ácido alfa-lipoico es un antioxidante que combate los efectos del daño oxidativo producido por los radicales libres en las mitocondrias.* Las mitocondrias se consideran los “motores” celulares porque producen energía necesaria para numerosos procesos biológicos.",
			"Toma una cápsula dos veces al día con comidas o batidos.",
			"../imagenes/productos/usaEspanol/1/101213_sku3123_us_400.jpg" 
			]);
		tx.executeSql('INSERT INTO ProductosUsaEspanol (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
			"Thermo-Bond®", 
			"1", 
			"Thermo-Bond® está elaborado con sodio choleate y una mezcla de fibras que contiene celulosa, manzana, acacia, avena y cítricos.", 
			"90 Tabletas", 
			"", 
			"Las Directrices Dietéticas para los Estadounidenses recomiendan entre 25 a 30 g de fibra. Thermo-Bond® proporciona 2 g de fibra en una ingesta diaria de 6 tabletas.",
			"Tomar 1 tableta hasta 6 veces al día entre comidas. Tomar Thermo-Bond® con un vaso lleno de agua u otro líquido.",
			"../imagenes/productos/usaEspanol/1/0167_thermobond_new_us.jpg" 
			]);
		tx.executeSql('INSERT INTO ProductosUsaEspanol (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
			"Aminogen®†", 
			"1", 
			"Apoya a tu organismo a digerir las proteínas. Esta fórmula utiliza enzimas selectas que ayudan a tu cuerpo a descomponer cadenas de proteínas en aminoácidos, facilitando la absorción de estos nutrientes esenciales.", 
			"Original 60 Tabletas", 
			"Ayuda a descomponer proteínas en aminoácidos. Apoya la digestión de proteínas.", 
			"Aminogen®† apoya la digestión con enzimas especialmente seleccionadas. Disponible en tabletas.",
			"Tome una tableta con cada comida que contenga proteína.",
			"../imagenes/productos/usaEspanol/1/0101_aminogen_400.png" 
			]);
		tx.executeSql('INSERT INTO ProductosUsaEspanol (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
			"Nueces de Soya Tostadas", 
			"1", 
			"Este delicioso y crujiente antojo tostado en seco es el bocadillo ideal. Cada porción limitada contiene solo 100 calorías y está repleta con 9 gramos de proteína. Disponibles en sabores Chile con Limón y Con Sal.", 
			"Con sal 12 Paquetes/Caja. Chile con limón 12 Paquetes/Caja", 
			"100 calorías por porción. Buena fuente de proteína con 9 g por porción. Paquetes con porción limitada e información nutricional completa. Un conveniente, delicioso y nutritivo bocadillo para llevar adondequiera.", 
			"Cargadas de proteína, nuestras Nueces de Soya son el mejor bocadillo en cualquier momento y lugar. Disponibles en sabores aciditos: Chile con Limón y Con Sal.",
			"Disfruta 1 paquete de las nutritivas Nueces de Soya Tostadas como bocadillo una o dos veces al día.",
			"../imagenes/productos/usaEspanol/1/120406_sku3143_us_400.jpg" 
			]);
		tx.executeSql('INSERT INTO ProductosUsaEspanol (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
			"Barra de Proteína Deluxe", 
			"1", 
			"Al hablar de bocadillos sé exigente. Date un gusto y disfruta del chocolate con leche de la Barra de Proteína Deluxe, ¡sin culpas! Un bocadillo que es tan delicioso como nutritivo.", 
			"Almendra Vainilla 14 barras por caja. Limón Cítrico 14 barras por caja. Chocolate Maní 14 barras por caja", 
			"Barra masticable rica en sabor para satisfacer el hambre y sustentar tu energía. La proteína ayuda a desarrollar y mantener el músculo magro. Vitaminas esenciales y 10 g de proteína por porción.", 
			"La Barra de Proteína Deluxe contiene vitaminas esenciales y 10 g de proteína por porción para ayudar a satisfacer el hambre, mientras ayuda a desarrollar y mantener la masa muscular magra. Sin edulcorantes artificiales y con 140 calorías por barra. Disponible en tres sabores con cobertura de chocolate: Chocolate con Cacahuate, Vainilla con Almendras y Limón Cítrico.",
			"Una o dos barras al día para consumir bocadillos que sean nutritivos. Si quieres más variedad, prueba otros de nuestros deliciosos bocadillos ricos en proteína.",
			"../imagenes/productos/usaEspanol/1/0364_proteinbardeluxe_vanillaalmond_400_us.jpg" 
			]);
		tx.executeSql('INSERT INTO ProductosUsaEspanol (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
			"Barra de Proteína", 
			"1", 
			"¡Obtén tu proteína para llevar! La Barra de Proteína es un bocadillo de proteína ideal para darte energía durante el día. Esta deliciosa barra masticable contiene proteína, fibra soluble, vitaminas y minerales para ayudar a satisfacer el hambre.", 
			"Peanut Butter 14 Barras/Caja. Chocolate con Coco 14 Barras/Caja. Chocolate Fudge 14 Barras/Caja", 
			"Barras masticables con 23 vitaminas y minerales. 12 g de una mezcla de proteína de soya y proteína de suero de leche por porción. Ayuda a mantener la energía.", 
			"Al intentar perder peso o mantener un estilo de vida sano y activo, necesitas un bocadillo nutritivo que te proporcione una nutrición práctica y equilibrada. Cada Barra de Proteína Herbalife® proporciona 12 g de proteína más vitaminas y minerales para ayudarte a satisfacer el hambre y mantener tu energía. Disponible en tres sabores: Chocolate Fudge, Chocolate con Coco y Crema de Cacahuate",
			"Una o dos barras al día para consumir bocadillos que sean nutritivos y que te ayuden a controlar tu peso. Si quieres más variedad, prueba otros de nuestros deliciosos bocadillos ricos en proteína.",
			"../imagenes/productos/usaEspanol/1/120906_sku0290_us_400.jpg" 
			]);
		tx.executeSql('INSERT INTO ProductosUsaEspanol (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
			"Sopa en Polvo", 
			"1", 
			"Disfruta de un reconfortante y cálido sabor. La Crema de Pollo, Sopa en Polvo, te permite preparar en minutos una satisfactoria sopa sabor a pollo. ¡Es instantánea y buena para ti!", 
			"Pollo Cremoso 7 Paquetes/Caja", 
			"16 g de proteína por porción. 80 calorías por porción.", 
			"La comida alta en proteína te ayuda a sentirte satisfecho por más tiempo. Esta Sopa en Polvo se mezcla fácilmente en agua y para que puedas satisfacer tu hambre, ya sea en casa o fuera. Sopa en Polvo en prácticos paquetes individuales.",
			"Echa el contenido de un paquete en una taza o en un tazón. Agrega de 6 a 8 fl. oz. de agua muy caliente y revuelve hasta que la consistencia quede uniforme. Para prepararla en el microondas, echa el contenido del paquete en una taza o tazón apto para usar en microondas. Agrega de 6 a 8 fl. oz de agua fría mientras revuelves. Luego, caliéntalo a temperatura alta de 1 a 1 ½ minutos y disfrútala. Para más variedad, prueba nuestras otras opciones de bocadillos ricos en proteína.",
			"../imagenes/productos/usaEspanol/1/0291_soupmix_400_us.jpg" 
			]);
		tx.executeSql('INSERT INTO ProductosUsaEspanol (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
			"Beverage Mix en Bote", 
			"1", 
			"Disfrute una explosion de energia con esta bebida mezclable. Solo agregue agua fria y quitese la sed de forma deliciosa y sin muchas calorias para safisfacer esos arranques de hambre en cualquier momento. Disponible en Durazno Mango y Moras Silvestres.", 
			"Moras Silvestres Bote de 280g. Durazno Mango Bote de 273g", 
			"15 gramos de proteina de la mas alta calidad, 70 calorias por racion, 0 gramos de azucar", 
			"Desarrollado con vitaminas y minerales para la energía y la salud, esta refrescante bebida baja en calorías viene en dos deliciosos sabores para saciar su hambre y sed - dondequiera que estés.",
			"Mezcle o revuelva 2 medidas (19.5g) de Bebida en Polvo con 8 oz fl de agua fría y disfrute. Tómelo a media mañana o media tarde para ayudar a satisfacer sus antojos y sus requerimientos personales diarios de proteína.",
			"../imagenes/productos/usaEspanol/1/113010_sku3119_us_400.jpg" 
			]);
		tx.executeSql('INSERT INTO ProductosUsaEspanol (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
			"Core Complex con CoQ10 Plus", 
			"2", 
			"Apoya a cuatro aspectos de la salud cardiovascular: colesterol, triglicéridos, homocisteína y el estrés oxidativo.*", 
			"30 Paquetes", 
			"Convenientes paquetes diarios que contienen seis cápsulas suaves, incluyendo Herbalifeline®, Tri-Shield® y CoQ10 Plus. La mezcla de ácidos grasos de calidad superior, Omega-3 EPA y DHA, mantiene los niveles sanos de colesterol y triglicéridos que ya se encuentran dentro de un rango normal. Las vitaminas B mantienen los niveles sanos de homocisteína que ya se encuentran dentro de un rango normal. La coenzima Q10 aporta energía a las células del corazón.", 
			"Cada paquete contiene 2 cápsulas de gel suave color marrón con esteroles (solo en Core Complex) y vitaminas B; 1 cápsula de gel suave CoQ10 Plus color naranja; 1 cápsula de gel suave Tri-Shield® color guinda con aceite de Neptune Krill (NKO®†) 100% puro; 2 cápsulas de gel suave color dorado de aceite de pescado Herbalifeline® con ácidos grasos Omega-3. Avalado exclusivamente por el Dr. Lou Ignarro, Nobel en Medicina.",
			"Toma un paquete al día con una comida, pero separa las cápsulas doradas para consumir con otra de tus comidas.",
			"../imagenes/productos/usaEspanol/2/1096_corecomplex_us.jpg" 
			]);
		tx.executeSql('INSERT INTO ProductosUsaEspanol (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
			"CoQ10 Plus", 
			"2", 
			"CoQ10 Plus está elaborado con CoQ10 y vitamina D para apoyar la salud del corazón", 
			"30 Cápsulas", 
			"CoQ10 ayuda a la salud cardiovascular proporcionando energía a las células del corazón y es un poderoso antioxidante que combate los radicales libres. Contiene el ácido graso esencial DHA de algas, no de pescado. La Vitamina D apoya los beneficios de la salud general.", 
			"Con la edad, la producción natural del cuerpo de CoQ10 disminuye. Este es un suplemento de la función natural de producción de CoQ10 del cuerpo, lo cual brinda energía a las células del corazón. Avalado exclusivamente por el Dr. Lou Ignarro, Nobel en Medicina®† Cápsulas suaves de gel.",
			"Toma una cápsula todos los días.",
			"../imagenes/productos/usaEspanol/2/1500_coq10plus_400_us.jpg" 
			]);
		tx.executeSql('INSERT INTO ProductosUsaEspanol (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
			"Niteworks®", 
			"2", 
			"Esta fórmula nocturna apoya la energía, la salud vascular y circulatoria, y promueve la producción de Óxido Nítrico (NO) por la noche que es cuando los niveles de NO son más bajos.", 
			"Original Tamaño de Muestra/5.3 oz. Original 10.6 oz. Naranja-Mango 10.6 OZ", 
			"Combina los beneficios de L-arginina y L-citrulina para apoyar la producción de Óxido Nítrico para promover energía, y salud vascular y circulatoria. L-arginina y L-citrulina ayudan a mantener los vasos sanguíneos tonificados y flexibles para una circulación más saludable. L-arginina y L-citrulina ayudan al flujo sanguíneo para apoyar el funcionamiento del corazón, el cerebro y otros órganos.", 
			"Niteworks® está elaborado con L-arginina y L-citrulina para apoyar la producción de Óxido Nítrico (NO) en tu cuerpo y así promover la salud vascular y circulatoria. Avalado exclusivamente por el Dr. Lou Ignarro, galardonado con el Nobel de Medicina. En polvo.",
			"Mezcla 2 cucharadas (10 g) en 8 onzas de agua fría. También se puede mezclar con agua gaseosa o jugo. Toma una porción todos los días. Para obtener beneficios cardiovasculares, toma una porción por la noche o justo antes de irte a dormir que es cuando los niveles de producción de Óxido Nítrico están más bajos.",
			"../imagenes/productos/usaEspanol/2/3150us_niteworkspow_400.jpg" 
			]);
		tx.executeSql('INSERT INTO ProductosUsaEspanol (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
			"Tri-Shield®", 
			"2", 
			"Esta marca patentada contiene Neptune Krill Oil (NKO®†), y el ácido graso omega-3, para apoyar la salud del corazón.", 
			"30 cápsulas de gel", 
			"", 
			"Krill son crustáceos diminutos que juegan un papel muy importante en la cadena alimenticia de los océanos. El krill sirve de alimento para peces, ballenas y pingüinos, proporcionándoles ácidos grasos omega-3.",
			"Tomar una cápsula, 1 a 2 veces al día.",
			"../imagenes/productos/usaEspanol/2/0100_trishield_new_us.jpg" 
			]);
		tx.executeSql('INSERT INTO ProductosUsaEspanol (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
			"Herbalifeline®", 
			"2", 
			"Esta mezcla de lípidos marinos altamente refinados combina los ácidos grasos omega-3, ácido ficosapentanoico (EPA, por sus siglas en inglés) y ácido docosahexaenoico (DHA, por sus siglas en inglés).", 
			"60 cápsulas de gel", 
			"El ácido graso omega-3 ayuda a mantener los niveles sanos de colesterol y triglicéridos que ya se encuentran dentro de un rango normal.", 
			"Los ácidos omega-3 ayudan a mantener la salud del sistema cardiovascular manteniendo los niveles del colesterol y triglicéridos que ya se encuentran en un rango normal. Avalado exclusivamente por el Dr. Lou Ignarro, Nobel en Medicina. Cápsulas suaves de gel.",
			"Toma 1 cápsula dos o tres veces al día, preferible con una comida.",
			"../imagenes/productos/usaEspanol/2/0065_herbalifeline_us_400.jpg" 
			]);
		tx.executeSql('INSERT INTO ProductosUsaEspanol (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
			"Mega Garlic Plus", 
			"2", 
			"Mega Garlic Plus apoya la salud cardiovascular y la buena circulación.", 
			"30 Tabletas", 
			"Contribuye a una buena circulación y un corazón saludable. Cada tableta proporciona los poderosos beneficios de un diente entero de ajo.", 
			"Mantener una salud cardiovascular sana es importante para tener un estilo de vida sana y activa. Avalado exclusivamente por el Dr. Lou Ignarro, Nobel en Medicina. Tabletas.",
			"Toma 1 tableta al día con una comida.",
			"../imagenes/productos/usaEspanol/2/0032_mega_garlic_plus_400.png" 
			]);
		tx.executeSql('INSERT INTO ProductosUsaEspanol (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
			"Xtra-Cal® Avanzado", 
			"2", 
			"Apoya la fortaleza de huesos y dientes con Xtra-Cal® Avanzado.* Este suplemento está formulado para favorecer la absorción y digestión del calcio, y para contribuir a un envejecimiento saludable.", 
			"90 Tabletas", 
			"El calcio y la vitamina D ayudan a fortalecer los huesos, y a mantener la densidad ósea y una buena salud dental. El consumo de tres tabletas, fáciles de ingerir, proporciona el 100% del valor diario recomendado de calcio. Proporciona 100% del valor diario recomendado de vitamina D para una mejor absorción del calcio.", 
			"Xtra-Cal® Avanzado ayuda a mantener la densidad ósea, la cual tiende a disminuir con la edad, con calcio y vitamina D.",
			"Toma 1 tableta 3 veces al día con alimentos.",
			"../imagenes/productos/usaEspanol/2/0565_xtracaladvanced_us_400.jpg" 
			]);
		tx.executeSql('INSERT INTO ProductosUsaEspanol (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
			"Solución de Mujer", 
			"2", 
			"Solución de Mujer es un apoyo durante la menopausia y las fluctuaciones hormonales de cada mes.", 
			"30 Tabletas", 
			"Las isoflavonas de soya apoyan el bienestar de la mujer durante la menopausia con solo una tableta al día. El agnocasto apoya la sensación de alivio durante las fluctuaciones hormonales de cada mes.", 
			"Bochornos, insomnio e irritabilidad son algunos de los síntomas asociados con la transición a la menopausia. La fórmula mejorada de Solución de Mujer contiene una mezcla de soya, raíz de kudzu y agnocasto.",
			"Toma una tableta al día. Para promover aún más la salud de la mujer, se puede combinar con Xtra-Cal® Avanzado y Tang Kuei Plus de Herbalife®.",
			"../imagenes/productos/usaEspanol/2/110513_sku1061_400_us.jpg" 
			]);
		tx.executeSql('INSERT INTO ProductosUsaEspanol (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
			"Complejo de Arándanos", 
			"2", 
			"Contiene arándanos rojos y azules, y anavias.", 
			"30 Cápsulas", 
			"", 
			"Los arándanos rojos y azules son nativos de Norteamérica. El arándano rojo se cultiva en el norte de Estados Unidos y en Canadá, mientras que el arándano azul se cosecha de la mata Vaccinium corymbosum L. La anavia es el nombre común del arándano europeo, Vaccinium myrtillus L.",
			"Tomar 1 a 2 cápsulas al día.",
			"../imagenes/productos/usaEspanol/2/0279_tripleberrycomplex_new_us.jpg" 
			]);
		tx.executeSql('INSERT INTO ProductosUsaEspanol (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
			"Tang Kuei Plus", 
			"2", 
			"Tang Kuei Plus contiene la raíz de dong quai, y se utiliza tradicionalmente para aliviar los malestares del síndrome premenstrual (PMS, por sus siglas en inglés).", 
			"60 Tabletas", 
			"", 
			"Dong Quai también se conoce como angélica China y es una de las plantas más populares en China. Tradicionalmente crece en Asia y tiene una flor blanca.",
			"Tomar 1 tableta 3 veces al día.",
			"../imagenes/productos/usaEspanol/2/0566_tangkueiplus_new_us.jpg" 
			]);
		tx.executeSql('INSERT INTO ProductosUsaEspanol (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
			"Prelox®† Blue", 
			"2", 
			"Contiene L-arginina y Pycnogenol®† para apoyar la salud sexual masculina.", 
			"60 Tabletas", 
			"", 
			"La arginina es un aminoácido, y uno de los componentes principales de las proteínas. El Pycnogenol® está derivado de un extracto de la corteza de pino marítimo francés.",
			"Tomar 2 tabletas 2 veces al día.",
			"../imagenes/productos/usaEspanol/2/0039_preloxblue_400_us.jpg" 
			]);
		tx.executeSql('INSERT INTO ProductosUsaEspanol (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
			"Male Factor 1000®", 
			"2", 
			"Las cápsulas Male Factor 1000® contienen una mezcla patentada de extracto de avena, ortiga, ginseng, calcio y vitamina C.", 
			"60 Cápsulas", 
			"Toma 1 tableta 2 veces al día con agua como suplemento alimenticio.", 
			"Las cápsulas de Male Factor 1000® incluyen una mezcla exclusiva de hierbas y nutrientes.",
			"Tome una cápsula dos veces por día con agua como suplemento alimenticio.",
			"../imagenes/productos/usaEspanol/2/111007_sku0024_us_400.jpg" 
			]);
		tx.executeSql('INSERT INTO ProductosUsaEspanol (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
			"Ultimate Prostate Formula", 
			"2", 
			"Promueve una buena función urinaria con Ultimate Prostate Formula, la cual contiene palmito de sierra, un ingrediente que se ha demostrado apoya la salud de la próstata y la función urinaria.", 
			"60 cápsulas", 
			"Formulada con palmito de sierra, el cual promueve la salud de la próstata y la función urinaria. Excelente fuente de la vitamina antioxidante E.", 
			"Apoya la salud de la próstata y una buena función urinaria con una mezcla exclusiva de palmito de sierra y la vitamina antioxidante E. En cápsula.",
			"Toma 1 cápsula 2 veces al día.",
			"../imagenes/productos/usaEspanol/2/0053_ultimateprostateformula_400_us.jpg" 
			]);
		tx.executeSql('INSERT INTO ProductosUsaEspanol (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
			"Batidos para Niños", 
			"2", 
			"Los Batidos para Niños de Herbalife® proporcionan nutrición esencial, incluyendo proteína, fibra, y vitaminas y minerales que los niños en crecimiento necesitan diariamente.", 
			"Chocolate Envase 14.6 oz. (414g), Vainilla Envase 14.6 oz. (414g), Fresa Envase 14.6 oz. (414g)", 
			"Deliciosos batidos con 17 vitaminas y minerales esenciales, además de proteína y fibra, para niños de 4 años en adelante. Excelente fuente de calcio, vitaminas del complejo B y vitaminas antioxidantes A (beta-caroteno), C y E. 15 g de proteína (6 g del polvo y 9 g de 8 onzas de leche baja en grasa). ¡Sin edulcorantes, sabores o colorantes artificiales! Rápidos de preparar y fáciles de llevar.", 
			"Deliciosos batidos con 17 vitaminas y minerales esenciales que los niños necesitan diariamente, además de proteína y fibra. Excelente fuente de calcio, vitaminas del complejo B y vitaminas antioxidantes A (beta-caroteno), C y E. 15 g de proteína (6 g del polvo y 9 g de la leche/leche de soya). Buena fuente de fibra.",
			"Para disfrutar como un bocadillo.",
			"../imagenes/productos/usaEspanol/2/0368_kidschocolateshake_us.jpg" 
			]);
		tx.executeSql('INSERT INTO ProductosUsaEspanol (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
			"Multivites", 
			"2", 
			"Las multivitaminas masticables sabor a frutas proporcionan el 100% del Valor Diario de nutrientes clave que los niños en etapa de desarrollo necesitan diariamente.* Además, las divertidas tabletas con figuras deportivas los harán regresar por más.", 
			"Frambuesa y Uva 60 tabletas", 
			"Proporcionan el 100% del Valor Diario de vitaminas esenciales que los niños de 4 años en adelante necesitan. Excelente fuente de vitaminas del complejo B, hierro, zinc, y vitaminas antioxidantes C y E. Divertidas tabletas con figuras deportivas. ¡Sin colores, sabores o edulcorantes artificiales!", 
			"Excelente fuente de vitaminas del complejo B, hierro, zinc, y vitaminas antioxidantes C y E. Divertidas tabletas con figuras deportivas.",
			"Para niños de 4 años en adelante – Tomar 2 tabletas masticables al día.",
			"../imagenes/productos/usaEspanol/2/121108_sku0328_us_400.jpg" 
			]);
		tx.executeSql('INSERT INTO ProductosUsaEspanol (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
			"Kindermins®", 
			"2", 
			"Kindermins® es un líquido multivitamínico sabor a frutas para niños de 6 meses a 3 años de edad, que proporciona 11 vitaminas esenciales que necesitan todos los días para apoyar su crecimiento y desarrollo saludables.", 
			"Sabor a frutas 30 porciones 1 fl. oz. - 29ml", 
			"100% del Valor Diario infantil de 11 nutrientes esenciales, más luteína. Sin edulcorantes, sabores o colorantes artificiales. Fácil de servir: un gotero entero (1mL) directamente en la boca o mezclado en leche, jugo o agua, una vez al día.", 
			"Kindermins® está formulado con luteína, la cual puede apoyar la salud ocular. 100% del Valor Diario infantil recomendado de 11 vitaminas y minerales esenciales.",
			"Agita ligeramente antes de cada uso. Para niños de 6 meses a 3 años de edad, administra un gotero entero (1 mL) de forma oral, una vez al día. Puede darse directamente en la boca, o agregarse a bebidas o comidas. No exceder la dosis recomendada.",
			"../imagenes/productos/usaEspanol/2/121108_sku0005_us_400.jpg" 
			]);
		tx.executeSql('INSERT INTO ProductosUsaEspanol (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
			"Apoyo para Coyunturas Avanzado", 
			"2", 
			"Formulado con glucosamina para el apoyo avanzado de las coyunturas, junto con una mezcla de hierbas y minerales para beneficios antioxidantes y de envejecimiento saludable.", 
			"90 Tabletas", 
			"Glucosamina para apoyar la función y comodidad saludable de las coyunturas. La hierba escutelaria se utiliza tradicionalmente para mitigar las reacciones inflamatorias pasajeras del cuerpo a actividades diarias tales como el ejercicio. Fuente excelente de selenio antioxidante para un envejecimiento saludable. Fuente excelente de manganeso y una buena fuente de cobre.", 
			"Apoya tus coyunturas durante el envejecimiento y un estilo de vida activo con una mezcla especialmente formulada de glucosamina, raíz de escutelaria y una mezcla de selenio, manganeso y cobre. Tres tabletas fáciles de ingerir diariamente.",
			"Toma 1 tableta 3 veces al día.",
			"../imagenes/productos/usaEspanol/2/0555_jointsupportadvanced_us_400.jpg" 
			]);
		tx.executeSql('INSERT INTO ProductosUsaEspanol (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
			"Fórmula Defensa Ocular", 
			"2", 
			"Combina luteína, la cual apoya la salud ocular durante el envejecimiento, con las vitaminas antioxidantes A (como betacaroteno), C y E.", 
			"30 Tabletas", 
			"La luteína apoya la salud ocular durante el envejecimiento. La luteína ayuda a mantener una visión saludable. Provee nutrición para los ojos.", 
			"Esta fórmula contiene luteína, la cual se concentra en la mácula, para apoyar la salud ocular.",
			"Tome una tableta por día.",
			"../imagenes/productos/usaEspanol/2/oculardefense_0064_us_400.jpg" 
			]);
		tx.executeSql('INSERT INTO ProductosUsaEspanol (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
			"Complejo de Fibra Activa", 
			"2", 
			"Una fuente excelente de fibra soluble e insoluble que promueve la regularidad y minimiza la inflamación estomacal.", 
			"Manzana 1. Sabor Natural 1", 
			"Promueve la regularidad y una eliminación saludable. Apoya el crecimiento de la flora intestinal. 5 g de fibra soluble e insoluble balanceada. Añade a tu Fórmula 1 para un batido más espeso y cremoso", 
			"Una porción otorga 5 g de los 25 a 35 g recomendados para el consumo diario de fibra soluble e insoluble. En polvo. Disponible en sabores Manzana y Natural",
			"Mezcla una medida con 8 onzas de agua o al gusto. Toma 1-2 veces al día. Disfruta el sabor Manzana con agua, o mezcla el sabor Manzana o Natural con tu bebida favorita.",
			"../imagenes/productos/usaEspanol/2/2864_activefibercomplex_apple_400_us.jpg" 
			]);
		tx.executeSql('INSERT INTO ProductosUsaEspanol (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
			"Sábila en Polvo", 
			"2", 
			"La Sábila en Polvo es una mezcla de bebida con sábila de calidad superior que calma el estómago y apoya la absorción de los nutrientes y la salud intestinal. Excelente para llevar debido a que no necesita refrigeración.", 
			"toque de mango 4.23 oz (120g). toque de sábila 3.70 OZ (105g)", 
			"Calma el estómago. Apoya una digestión saludable. Alivia la indigestión ocasional. Apoya la absorción de nutrientes y la salud intestinal", 
			"La Sábila en Polvo está elaborada con sábila, la cual apoya una digestión saludable.",
			"Mezcle una cucharada (3.5 g) con 8 fl. oz. de agua o agregue a su bebida favorita.",
			"../imagenes/productos/usaEspanol/2/140319_sku2748_us_400.jpg" 
			]);
		tx.executeSql('INSERT INTO ProductosUsaEspanol (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
			"Concentrado de Sábila - Mango", 
			"2", 
			"El Concentrado de Sábila contiene sábila que calma el estómago y apoya a la absorción de nutrientes y la salud intestinal.", 
			"Mango 1/2 galón", 
			"Calma el estómago. Apoya una digestión saludable. Alivia la indigestión ocasional. Ayuda a la absorción de nutrientes y la salud intestinal.", 
			"El Concentrado de Sábila está elaborado con la planta de sábila, la cual ayuda a promover una digestión saludable.",
			"Mezcle 3 cucharadas (1/2 fl. oz.) con 4 fl. oz. de agua. Para preparar 1 cuarto de galón, mezcle ½ taza de concentrado con 1 cuarto de agua. Agregue a su bebida favorita. Conserve en el refrigerador después de abrir.",
			"../imagenes/productos/usaEspanol/2/111007_sku1188_us_400.jpg" 
			]);
		tx.executeSql('INSERT INTO ProductosUsaEspanol (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
			"Concentrado de Sábila", 
			"2", 
			"El Concentrado de Sábila contiene sábila que calma el estómago y apoya a la absorción de nutrientes y la salud intestinal.", 
			"Original Pinta. Mango Pinta", 
			"Calma el estómago. Apoya una digestión saludable. Alivia la indigestión ocasional. Ayuda a la absorción de nutrientes y la salud intestinal.", 
			"El Concentrado de Sábila está elaborado con la planta de sábila, la cual ayuda a promover una digestión saludable.",
			"Mezcle 3 cucharadas (1/2 fl. oz.) con 4 fl. oz. de agua. Para preparar 1 cuarto de galón, mezcle ½ taza de concentrado con 1 cuarto de agua. Agregue a su bebida favorita. Conserve en el refrigerador después de abrir.",
			"../imagenes/productos/usaEspanol/2/140320_sku0006_hac_400.jpg" 
			]);
		tx.executeSql('INSERT INTO ProductosUsaEspanol (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
			"Sábila Instantánea", 
			"2", 
			"Herbal Aloe, Sábila Instantánea Lista para Tomar, contiene sábila de calidad superior que calma el estómago, y apoya la absorción de nutrientes y la salud intestinal.", 
			"Original Cuarto de galón. Original Galón", 
			"Calma el estómago. Promueve una digestión saludable. Alivia la indigestión ocasional.", 
			"El Concentrado de Sábila está elaborado con la planta de sábila, la cual ayuda a promover una digestión saludable.",
			"Tome directamente o agregándola su bebida favorita. Refrigerar después de abrir.",
			"../imagenes/productos/usaEspanol/2/140325_ready_herbal_aloe_0002.jpg" 
			]);
		tx.executeSql('INSERT INTO ProductosUsaEspanol (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
			"Florafiber", 
			"2", 
			"Estas tabletas especialmente formuladas contienen una mezcla de fibra soluble e insoluble para apoyar la salud del sistema digestivo.", 
			"90 Tabletas", 
			"", 
			"La fibra es un carbohidrato necesario para una digestión saludable. La fibra insoluble circula intacta por el sistema digestivo, y la fibra soluble se disuelve en agua formando un gel.",
			"Tomar 1 tableta 3 veces al día con un vaso de agua.",
			"../imagenes/productos/usaEspanol/2/0023_florafiber_new_us.jpg" 
			]);
		tx.executeSql('INSERT INTO ProductosUsaEspanol (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
			"Programa de Hierbas de 21 Días para el Equilibro Digestivo", 
			"2", 
			"Comienza y mantén un régimen de salud digestiva con nuestro Programa de Hierbas de 21 Días para el Equilibrio Digestivo, formulado con Cardo Lechero y Diente de León.", 
			"42 Tabletas para AM; 42 Tabletas para PM", 
			"Fórmula AM para Renovar: Una tableta por la mañana que está formulada con Cardo Lechero, el cual tradicionalmente ayuda en el apoyo del hígado. Fórmula PM para Restaurar: Una tableta por la noche que está formulada con Diente de León, el cual tradicionalmente se usa para el equilibrio saludable de líquidos.", 
			"Una mezcla de hierbas para la mañana y la noche.",
			"Tomar 2 tabletas AM en la mañana y 2 tabletas PM en la noche durante 21 días.",
			"../imagenes/productos/usaEspanol/2/1154_21dayherbalcleansingprogram_us.jpg" 
			]);
		tx.executeSql('INSERT INTO ProductosUsaEspanol (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
			"Programa Interno Especializado", 
			"2", 
			"Mantenimiento interno diario para un sistema digestivo más saludable.", 
			"1 Paquete", 
			"Contiene sábila de primera calidad del Concentrado de Sábila y fibra de Florafiber para apoyar la salud digestiva. Las Vitaminas A (como betacaroteno), C y E de Schizandra Plus proporcionan apoyo antioxidante.", 
			"Este programa combina tres de nuestras principales fórmulas: Sábila Instantánea, Florafiber y Schizandra Plus.",
			"",
			"../imagenes/productos/usaEspanol/2/140324_specintern_400.png" 
			]);
		tx.executeSql('INSERT INTO ProductosUsaEspanol (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
			"Programa de Limpieza Digestiva", 
			"2", 
			"Mantén tu sistema digestivo por buen camino con nuestro Paquete Inicial 3 en 1.* Incluye Concentrado de Sábila (sabor Natural o Mango), el Programa de Hierbas de 21 Días para el Equilibrio Digestivo (Fórmulas complementarias para el día y la noche) y Florafiber.", 
			"Original 1 Programa. Mango 1 Programa", 
			"Contiene sábila de primera calidad del Concentrado de Sábila para aliviar el estómago y apoyar una digestión saludable. La fibra de Florafiber apoya la salud digestiva. El cardo lechero es un ingrediente presente en Fórmula AM para Renovar y tradicionalmente se usa para apoyar las funciones del hígado. El diente de león es un ingrediente presente en Fórmula PM para Restaurar y es usado tradicionalmente para el equilibrio saludable de fluidos.", 
			"Nuestro Programa de Limpieza Digestiva 3 en 1 apoya un funcionamiento gastrointestinal saludable.* Mantener tu salud gastrointestinal es importante. Los productos para la Salud Digestiva de Herbalife® apoyan la digestión saludable y la eliminación, ayudando a asegurar que tu sistema interno funcione bien todos los días.",
			"",
			"../imagenes/productos/usaEspanol/2/140324_digestive_health_mango.png" 
			]);
		tx.executeSql('INSERT INTO ProductosUsaEspanol (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
			"Garden 7® Suplemento con Fitonutrientes", 
			"2", 
			"¿Está consumiendo suficientes fitonutrientes de las frutas y verduras? Aumente su consumo de fitonutrientes con Garden 7®.", 
			"90 Tabletas", 
			"Ayuda a nutrir las células y órganos para que funcionen correctamente. Provee más de 7 fitonutrientes como los que se encuentran en las frutas y verduras. Contiene los poderosos antioxidantes de las vitaminas A (como beta-caroteno) y C.", 
			"Consumir fitonutrientes de las frutas y verduras todos los días es difícil. Una sola tableta de Garden 7®, tres veces al día, proporciona al cuerpo la nutrición necesaria para una salud óptima.",
			"Tome una tableta tres veces al día para asegurarse de obtener los fitonutrientes como los que tienen las frutas y verduras.",
			"../imagenes/productos/usaEspanol/2/garden7_3272_400.jpg" 
			]);
		tx.executeSql('INSERT INTO ProductosUsaEspanol (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
			"RoseGuard®", 
			"2", 
			"Apoya al sistema inmune con vitaminas antioxidantes C y E.", 
			"60 Tabletas", 
			"La vitamina C ayuda a reciclar la función antioxidante de la vitamina E. Proporciona apoyo antioxidante general contra los radicales libres, y contiene vitaminas A (como betacaroteno), C y E.", 
			"Un sistema inmune saludable es importante para el bienestar general.",
			"Tomar una tableta por la mañana y otra por la tarde, preferiblemente en las comidas.",
			"../imagenes/productos/usaEspanol/2/0139_roseguard_new_us.jpg" 
			]);
		tx.executeSql('INSERT INTO ProductosUsaEspanol (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
			"Schizandra Plus", 
			"2", 
			"Una mezcla especializada de schizandra, selenio y vitaminas C, E y betacaroteno. Las vitaminas C, E y el betacaroteno proporcionan apoyo antioxidante general contra los radicales libres.", 
			"60 Tabletas", 
			"Proporciona apoyo antioxidante general contra los radicales libres. Apoya las defensas naturales del cuerpo contra el estrés oxidativo. Apoya la salud inmunológica y celular. Las vitaminas C y E apoyan el sistema inmunológico. Fuente excelente de vitaminas A, C, E y B6, y selenio.", 
			"El cuerpo está expuesto diariamente a radicales libres, los cuales pueden oxidar las células. Schizandra Plus ayuda a combatir los radicales libres y apoya las defensas naturales del cuerpo contra el estrés oxidativo.",
			"Toma 1 tableta 2 veces al día.",
			"../imagenes/productos/usaEspanol/2/121112_sku0022_us_400.jpg" 
			]);
		tx.executeSql('INSERT INTO ProductosUsaEspanol (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
			"Best Defense®", 
			"2", 
			"Suplemento dietético efervescente de sabor natural con equinácea, vitamina C y sulfato de zinc para fortalecer el sistema inmunológico.* Disponible en tabletas convenientes de disolución rápida para tomar sobre la marcha.", 
			"Orange Boost 10 tabletas por tubo. Citrus Mint 10 tabletas por tubo", 
			"Contiene equinácea para apoyar el sistema inmune. 1,000 mg de vitamina C, un poderoso antioxidante. 8 mg de sulfato de zinc, el cual ha sido demostrado que ayuda a aumentar la defensa celular inmunológica del cuerpo.", 
			"Disponible en dos variedades deliciosas de sabores naturales: Menta Cítrica y Naranja.",
			"Disolver una tableta efervescente en 8 fl. oz. de agua, dejar disolver completamente y tomar. Disfrutar en agua fría o caliente. Tomar hasta 2 veces al día según sea necesario.",
			"../imagenes/productos/usaEspanol/2/1502_bestdefense_orangeboost_new_us.jpg" 
			]);
		tx.executeSql('INSERT INTO ProductosUsaEspanol (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
			"Desinfectante para Manos", 
			"2", 
			"Elimina gérmenes en segundos con nuestro Desinfectante para Manos en conveniente tamaño portátil. Ideal para reuniones, viajes, actividades escolares, Clubes de Nutrición, Fiestas Spa SKIN, y eventos deportivos y de reparto de muestras.", 
			"", 
			"Atomizador sin alcohol ni triclosán. Elimina el 99.99% de los gérmenes más comunes. La mezcla botánica ayuda a mejorar la piel. Cabe en el bolsillo, la cartera o bolsa de viaje. Fresca fragancia de mango.", 
			"",
			"",
			"../imagenes/productos/usaEspanol/2/0434_handsanitizer_400_011513.jpg" 
			]);
		tx.executeSql('INSERT INTO ProductosUsaEspanol (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
			"Relax Now", 
			"2", 
			"Formulado a base de hierbas, Relax Now combina semillas de jujube y pasiflora para ayudarte a sobrellevar el estrés ocasional y mantener un estado de ánimo saludable", 
			"30 Tabletas", 
			"El jujube y la pasiflora te ayudan a sobrellevar el estrés ocasional y mantener un estado de ánimo saludable. La semilla de jujube ayuda a mantener la calma.", 
			"Es difícil encontrar los momentos de descanso necesarios para relajarnos y controlar el estrés. Relax Now contiene semilla de jujube y pasiflora para ayudarte a sobrellevar el estrés ocasional y mantener un estado de ánimo saludable.",
			"Toma 1 a 2 tabletas al día. Prueba Sleep Now para una noche de sueño reparador.",
			"../imagenes/productos/usaEspanol/2/0055_relax_now_011513.jpg" 
			]);
		tx.executeSql('INSERT INTO ProductosUsaEspanol (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
			"Sleep Now", 
			"2", 
			"Sleep Now ha sido formulado a base de pasiflora, lúpulo, melatonina, valeriana y lavanda. La melatonina apoya el sueño profundo para que puedas descansar con facilidad.", 
			"60 Tabletas", 
			"La melatonina apoya el sueño profundo para que puedas descansar con facilidad. Ayuda a regular los ciclos de sueño-vigilia. Formulado con pasiflora, lúpulo y valeriana.", 
			"El obtener un buen descanso por la noche es una parte importante de un estilo de vida activo y saludable. Sleep Now está formulado con melatonina para apoyar el sueño profundo, de modo que puedas descansar con facilidad. Disponible en tabletas.",
			"Adultos: toma 1 ó 2 tabletas 30 minutos antes de acostarte. No excedas la cantidad recomendada.",
			"../imagenes/productos/usaEspanol/2/0138_sleepnow_us_400.jpg" 
			]);

		tx.executeSql('INSERT INTO ProductosUsaEspanol (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
			"Té Verde", 
			"3", 
			"El Té Verde brinda hidratación durante todo el día y contiene antioxidantes que ayudan a proporcionar protección contra el efecto dañino de los radicales libres. Con sólo 25 mg de cafeína por porción, este té refrescante tiene menos cafeína que una taza de 8 onzas de café. Para experiencia óptima, mezcle un poco menos de ½ de una cucharadita con 8 onzas de agua. Disfrútalo en sabor Original o Granada.", 
			"Granada 1.69 OZ (48g). Original 1.69 OZ (48g)", 
			"Hidratación a cualquier hora del día. Estimula la actividad antioxidante del cuerpo. Ofrece protección contra el efecto dañino de los radicales libres. Sin colorantes, saborizantes o edulcorantes artificiales. Cero calorías", 
			"Esta bebida refrescante baja en cafeína, contiene antioxidantes que protegen contra los radicales libres y ofrece hidratación a cualquier hora del día.",
			"Para experiencia óptima, mezcle un poco menos de ½ cucharadita (0.8g) con 8 fl. oz. de agua fría o caliente. Disfrútalo de 2 a 3 veces al día.",
			"../imagenes/productos/usaEspanol/3/1428_greentea_pomegranate_us.jpg" 
			]);
		tx.executeSql('INSERT INTO ProductosUsaEspanol (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
			"H³O® Fitness Drink", 
			"3", 
			"H³O® Fitness Drink es una bebida hidratante 3 en 1 que proporciona: 1) hidratación rápida; 2) energía constante; además de 3) vitaminas antioxidantes C y E ¡para sentirte refrescado y energizado durante todo el día! Disfrútala cuando tengas sed o después de cualquier actividad física.", 
			"Limonada Envase 10.6oz (300g). Limonada 15 Sobrecitos 0.53 oz (15g). Naranjada Envase 10.6oz (300g). Naranjada 15 sobrecitos 0.53 oz (15g)", 
			"Provee electrolitos esenciales tales como potasio, sodio, y magnesio para apoyar la rehidratación celular. Aporta carbohidratos para una energía inmediata y constante. Sus poderosas vitaminas antioxidantes C y E neutralizan los radicales libres. Sacia la sed y remplaza las sustancias que se pierden al sudar. No contiene cafeína y es una alternativa a bebidas con mucha azúcar y calorías.", 
			"Contiene vitaminas antioxidantes C y E. Personalizada según las condiciones físicas individuales o el nivel y duración de la actividad. En prácticos paquetitos portátiles para usarse adondequiera que vayas.",
			"Disfrútala cuando tengas sed o después de cualquier actividad física.",
			"../imagenes/productos/usaEspanol/3/h3o_group_us.jpg" 
			]);
		tx.executeSql('INSERT INTO ProductosUsaEspanol (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
			"Liftoff®", 
			"3", 
			"Este suplemento dietético efervescente con cafeína aumenta la sensación de energía y ayuda a mejorar el estado de alerta.", 
			"Ciclón de Lima-Limón 10 Tabletas. Disparo de Naranja 10 Tabletas 10ml. Disparo de Naranja 30 Tabletas. Cola Limón 10 Tabletas 10ml. Frutas Tropicales 10 Tabletas 10ml", 
			"La cafeína te ayuda a permanecer alerta y enfocado. El panax ginseng acelera temporalmente la recuperación de la memoria. 0 g de azúcar, 4 g de carbohidratos por porción. Tabletas en paquetes individuales para estilos de vida muy ocupados", 
			"Liftoff® es una mezcla exclusiva de L-taurina, guaraná, cafeína, panax ginseng y ginkgo biloba. La cafeína ayuda a mejorar el estado de alerta y el panax ginseng disminuye la sensación de fatiga mental. La tableta práctica de tamaño de bolsillo te proporciona un impulso de cuerpo y mente.",
			"Solo pon una tableta en 8 fl. oz. de agua fría y deja que se disuelva. Disfruta de 1 a 2 porciones por día.",
			"../imagenes/productos/usaEspanol/3/121108_sku3152_us_400.jpg" 
			]);

		tx.executeSql('INSERT INTO ProductosUsaEspanol (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
			"N-R-G Nature's Raw Guarana Tea", 
			"3", 
			"Recargue sus energías con esta mezcla de guaraná revitalizante, té negro, naranja pekoe y cáscara de limón. La cafeína aumenta la agilidad mental y reanima de forma natural. Para experiencia óptima, mezcle un poco menos de ½ cucharadita con 8 onzas de agua.", 
			"Original 2.12oz", 
			"Reanima de forma natural. Reduce la fatiga. Aumenta la agilidad mental y la concentración. Mezcla de Té instantáneo sin calorías.", 
			"Esta mezcla de té instantáneo vigorizante contiene cafeína del guaraná y té negro, naranja pekoe que reduce la fatiga y aumenta la concentración.",
			"Para experiencia óptima, mezcle un poco menos de ½ cucharadita con 8 fl. oz. de agua fría o caliente.",
			"../imagenes/productos/usaEspanol/3/0102_nrgtea_400_us.jpg" 
			]);
		tx.executeSql('INSERT INTO ProductosUsaEspanol (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
			"Guaraná Natural N-R-G en tabletas", 
			"3", 
			"Recargue sus energías con los beneficios del guaraná en prácticas tabletas. Las antiguas semillas del guaraná, del Amazonas, contienen cafeína que aumenta la agilidad mental y reanima de forma natural.", 
			"60 Tabletas", 
			"Reanima de forma natural. Reduce la fatiga. Aumenta la agilidad mental y la concentración.", 
			"Este suplemento dietético vigorizante contiene cafeína del guaraná que reduce la fatiga y aumenta la concentración.",
			"Tome una tableta hasta cuatro veces por día.",
			"../imagenes/productos/usaEspanol/3/0122_nrgtablets_400_us.jpg" 
			]);
		tx.executeSql('INSERT INTO ProductosUsaEspanol (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
			"Herbalife24 Formula 1 Sport", 
			"3", 
			"Proporciona una comida saludable para deportistas, gracias a su balance de carbohidratos, proteínas, vitaminas y minerales.", 
			"Vainilla 27.5 oz (780g). Chocolate 780g", 
			"9 g de proteína de leche que apoya la masa muscular. 13 g de una mezcla de carbohidratos por porción que proporciona energía inmediata y sostenida. L –Glutamina apoya el crecimiento muscular y la función inmunológica. 20 vitaminas y minerales Protección antioxidante. Probados NSF y Certificados 100% para Sport®.", 
			"Formula 1 Sport establece una base nutricional sólida que apoya a los deportistas a obtener un desempeño óptimo. Este nutritivo alimento está especialmente formulado para cubrir las necesidades nutricionales diarias de los atletas y puede ser consumido a cualquier hora del día.",
			"Mezcle o revuelva 2 cucharadas (26g) de Formula 1 Sport con 8 onzas de agua o de leche sin grasa.",
			"../imagenes/productos/usaEspanol/3/110524_sku1412_400_us.jpg" 
			]);

		tx.executeSql('INSERT INTO ProductosUsaEspanol (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
			"Herbalife24™ Hydrate", 
			"3", 
			"Hydrate provee una fuente de electrolitos biodisponibles baja en calorías diseñada para una hidratación avanzada.", 
			"Mandarina Citrica 0.16 oz (4.5g)", 
			"Hidratación para todos, baja en calorías y buena a cualquier hora del día. Electrolitos biodisponibles para un rápido reabastecimiento de fluidos. Vitaminas B para apoyar el metabolismo de los carbohidratos. Apoyo antioxidante de la vitamina C.", 
			"Hydrate contiene sólo 1 gramo de azúcar, además de vitamina B y vitamina C para mejorar la absorción de fluidos y asegurar que usted esté hidratado. Sea cual sea la intensidad de la actividad que realice, usted puede tomar Hydrate a cualquier hora del día – en la mañana, durante sus ejercicios y hasta en la noche.",
			"Mezcle un paquete individual con 16 onzas liq. de agua.",
			"../imagenes/productos/usaEspanol/3/110524_sku1413_400_us.jpg" 
			]);
		tx.executeSql('INSERT INTO ProductosUsaEspanol (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
			"Herbalife24™ Prolong", 
			"3", 
			"Una fuente doble de carbohidratos y electrolitos para un rendimiento prolongado.", 
			"Toque de Limón 37 oz (1050g)", 
			"Contiene una mezcla con doble fuente de maltodextrina y fructosa de bajo nivel glicémico que facilita la utilización de los carbohidratos. Una relación de 12:1 entre carbohidratos y proteína, con proteína aislada de suero de leche de alta pureza, que ayuda a reducir el desgaste muscular que ocurre durante el ejercicio. Electrolitos biodisponibles ayudan a mantener el ambiente celular para la apropiada contracción muscular. Vitaminas B apoyan el metabolismo de los carbohidratos. 500% del valor diario requerido de Vitamina C para combatir el daño de los radicales libres a las células.", 
			"La mezcla de Prolong, con doble fuente de carbohidratos, facilita la utilización de las calorías para un rendimiento prolongado, mientras que la proteína de suero de leche actúa como medida de protección al reducir el desgaste muscular que ocurre durante largas jornadas de ejercicio. Además, los electrolitos mantienen un ambiente celular apropiado para el funcionamiento de los músculos.",
			"Tome Prolong durante intensos entrenamientos o largas jornadas de ejercicio.",
			"../imagenes/productos/usaEspanol/3/110524_sku1415_400_us.jpg" 
			]);
		tx.executeSql('INSERT INTO ProductosUsaEspanol (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
			"Herbalife24 Rebuild Endurance", 
			"3", 
			"Reemplazo de glucógeno y recuperación muscular.", 
			"Vainilla 31.3 oz (890g)", 
			"Triples amino-proteínas esenciales de aminoácidos libres, y proteínas de caseína y suero de leche, que aceleran la recuperación y reconstrucción muscular. Su mezcla suministra carbohidratos de manera rápida y sostenida para reponer el glucógeno mientras provee una respuesta de insulina constante. Aminoácidos de cadena ramificada para apoyar la recuperación de los músculos. Carnitina que acelera la recuperación muscular. Glutamina para apoyar la función inmunológica y promover la reparación muscular.", 
			"Para recuperarse de una intensa actividad aeróbica, se requiere tanto de un reabastecimiento de glucógeno, así como de una reparación muscular. Rebuild Endurance contiene un una mezcla de carbohidratos creada específicamente para activar el reabastecimiento de glucógeno y una combinación de triples amino-proteínas esenciales de aminoácidos libres, y proteínas de caseína y suero de leche, que aceleran la recuperación y reconstrucción muscular.",
			"Tome Rebuild Endurance inmediatamente después de realizar una actividad aeróbica.",
			"../imagenes/productos/usaEspanol/3/110524_sku1416_400_us.jpg" 
			]);

		tx.executeSql('INSERT INTO ProductosUsaEspanol (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
			"Herbalife24 Rebuild Strength", 
			"3", 
			"Recuperación inmediata y sostenida para los músculos.", 
			"Chocolate 35.6 oz (1010g)", 
			"24g. de proteínas de caseína y suero de leche que crean un reabastecimiento de proteínas rápido y sostenido. Su mezcla de triples amino-proteínas esenciales combina aminoácidos libres y proteínas de caseína y suero de leche, que aceleran la recuperación y reconstrucción muscular. Contiene hierro esencial para la protección de las células rojas. Aminoácidos de cadena ramificada (BCAA por sus siglas en inglés) apoyan el crecimiento de los músculos. L-glutamina apoya la función inmune y promueve la reparación muscular.", 
			"Consumir esta mezcla de aminoácidos libres y proteínas de caseína y suero de leche dentro de una hora después de hacer ejercicios, ayuda a los músculos a reconstruirse.",
			"Mezcle 2 cucharadas (50.5g) en 8 onzas de agua o con el líquido de su preferencia. Agítelo fuertemente. Consuma un batido al día 30 minutos después de hacer ejercicios.",
			"../imagenes/productos/usaEspanol/3/110524_sku1417_400_us.jpg" 
			]);
		tx.executeSql('INSERT INTO ProductosUsaEspanol (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
			"Herbalife24 Prepare", 
			"3", 
			"Apoya el flujo de sangre hacia los músculos durante el ejercicio.", 
			"Bote", 
			"Apoya el flujo sanguíneo saludable. Mejora la rápida contracción muscular. Ayuda a mantener la concentración y el rendimiento", 
			"Cuando el oxígeno llega a los músculos de manera adecuada durante el ejercicio se mejora el desempeño. El sistema precursor de óxido nítrico (NO) de Prepare promueve la oxigenación de los músculos durante el ejercicio, mientras que la Creatina apoya la rápida contracción muscular, requerida para un movimiento atlético explosivo.",
			"Tome Prepare justo antes de comenzar a entrenar o hacer ejercicios.",
			"../imagenes/productos/usaEspanol/3/111123_sku1414_us_400.jpg" 
			]);
		tx.executeSql('INSERT INTO ProductosUsaEspanol (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
			"Herbalife24 Restore", 
			"3", 
			"Combate la inflamación causada por el ejercicio.", 
			"Capsulas", 
			"Contiene Curcumina la cual ayuda a combatir la inflamación causada por el ejercicio. El Elderberry y Saberry™† extraída del fruto del amalaki que combaten a los radicales libres. Vitamina C y beta caroteno apoya la función inmunológica.", 
			"Promueve la recuperación muscular durante la noche.",
			"Tome una tableta en la noche antes de acostarse.",
			"../imagenes/productos/usaEspanol/3/111123_sku1418_us_400.jpg" 
			]);


		tx.executeSql('INSERT INTO ProductosUsaEspanol (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
			"Promoción de temporada Herbalife SKIN", 
			"4", 
			"Esta temporada de fiestas, comparte con tus seres queridos una lujosa experiencia de cuidado de la piel. Compra tres Kits de Resultados en 7 Días Herbalife SKIN® y recibe GRATIS una bolsa de cosméticos color plata con la marca Herbalife SKIN. No demores, esta oferta está disponible por tiempo limitado.", 
			"3 Kits de Resultados en 7 Dias + 1 bolsa para cosmeticos", 
			"", 
			"",
			"",
			"../imagenes/productos/usaEspanol/4/k712_herbalifeskin_holidaypromo_us.jpg" 
			]);
		tx.executeSql('INSERT INTO ProductosUsaEspanol (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
			"Exfoliante Instantáneo con Arándanos Herbalife SKIN", 
			"4", 
			"Para todo tipo de piel, este exfoliante rico en antioxidantes con semillas de arándanos ofrece una exfoliación instantánea y revela una piel más suave y despejada.", 
			"120 mL", 
			"Revela una piel de aspecto saludable. Fragancia fresca y frutal aviva los sentidos. Características Clave. Sin parabenos. Sin sulfatos. Comprobado dermatológicamente.", 
			"Exfoliante rico en antioxidantes formulado con Vitaminas B3, antioxidantes de las Vitaminas C y E, Sábila, extractos limpiadores derivados del coco, microperlas exfoliantes, y semillas de arándanos; ayuda a conseguir una piel más suave y tersa.",
			"Usar 1 a 3 veces a la semana, según sea necesario. Siga con el tonificador, el sérum y la crema humectante.",
			"../imagenes/productos/usaEspanol/4/0772_herbalifeskin_instantrevealberryscrub_400.jpg" 
			]);

		tx.executeSql('INSERT INTO ProductosUsaEspanol (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
			"Programa Total Herbalife SKIN™ – Para Piel Normal a Seca", 
			"4", 
			"Estás preparado para llevar tu cuidado de la piel al máximo nivel? El Programa Total contiene el juego completo de productos del Programa Avanzado, para piel Normal a Seca, además de tres productos adicionales que te ayudarán a revelar una piel saludable.", 
			"Programa Total Para Piel Normal a Seca", 
			"Mejora la apariencia de tu piel con nuestra mezcla óptima de Vitamina B3, vitaminas antioxidantes C y E, sábila y otros ingredientes botánicos. Carácterísticas Sin parabenos Sin sulfatos Probado por Dermatólogos", 
			"",
			"Limpia, tonifica y humecta tu cutis todos los días con fórmulas que contienen ingredientes botánicos especialmente seleccionados que favorecen piel de normal a seca.",
			"../imagenes/productos/usaEspanol/4/1488_herbalifeskin_ulitmate_dry.jpg" 
			]);
		tx.executeSql('INSERT INTO ProductosUsaEspanol (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
			"Humectante Protector Amplio Espectro FPS 30 Protector Solar Herbalife SKIN™", 
			"4", 
			"Estar expuesto al sol sin protección aumenta el riesgo de sufrir cáncer de piel y envejecimiento prematuro. Sin parabenos y probado por dermatólogos, este humectante de larga duración deja tu piel tersa y suave, y a la vez proporciona protección UVA/UVB de amplio espectro contra los dañinos rayos del sol.", 
			"Dispensador de aire al vacío de 30 ml", 
			"Comprobado para: Duplicar la humedad de la piel por más de ocho horas.† Demostrar que la piel luce más radiante y se siente más suave y tersa en solo siete días.‡ Reducir la apariencia de líneas finas y arrugas. Proporcionar un amplio alcance de protección contra rayos UVA/UVB. Características Clave Sin parabenos Comprobado por dermatólogos Amplio Espectro SPF 30 Producto recomendado por su filtro solar con protección de amplio espectro", 
			"Formulado exclusivamente con Vitamina B3, vitaminas antioxidantes C y E, Aloe Vera, aceite de semillas de girasol, extractos florales de Acmella Oleracea, Aceite de Macadamia, Aceite de Oliva y Aceite de Semillas de Ajonjolí, este humectante te ofrece una protección solar superior, a la vez que duplica la hidratación de tu piel durante más de ocho horas.",
			"Aplicar generosamente 15 minutos antes de exponerse al sol Use un protector solar resistente al agua antes de nadar o sudar Vuelva a aplicar cada dos horas",
			"../imagenes/productos/usaEspanol/4/0833_herbalifeskin_spf30sunscreen_us.jpg" 
			]);

		tx.executeSql('INSERT INTO ProductosUsaEspanol (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
			"Programa Total Herbalife SKIN™ – Para Piel Normal a Grasa", 
			"4", 
			"Estás preparado para llevar tu cuidado de la piel al máximo nivel? El Programa Total contiene el juego completo de productos del Programa Avanzado, para piel Normal a Grasa, además de tres productos adicionales que te ayudarán a revelar una piel saludable.", 
			"Programa Total Piel Normal a Grasosa", 
			"Mejora la apariencia de tu piel con nuestra mezcla óptima de Vitamina B3, vitaminas antioxidantes C y E, sábila y otros ingredientes botánicos. Carácterísticas Sin parabenos Sin sulfatos Probado por Dermatólogos", 
			"Programa Total Herbalife SKIN™ – Para Piel Normal a Grasa incluye: Limpiador Cítrico para la Piel Tonificador Energizante de Hierbas Sérum Reductor de Líneas  Gel Reafirmante de Ojos  Crema Hidratante para Ojos  Crema Humectante Diaria  Crema Reabastecedora de Noche Exfoliante Instantáneo con Arándanos Mascarilla de Arcilla con Menta Purificadora Humectante Protector Amplio Espectro FPS 30 Protector Solar",
			"Limpia, tonifica y humecta tu cutis todos los días con fórmulas que contienen ingredientes botánicos especialmente seleccionados que favorecen piel de normal a grasa.",
			"../imagenes/productos/usaEspanol/4/1489_herbalifeskin_ulitmate_oily.jpg" 
			]);
		tx.executeSql('INSERT INTO ProductosUsaEspanol (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
			"Gel Reafirmante de Ojos Herbalife SKIN", 
			"4", 
			"Este gel refrescante ayuda a mejorar la apariencia del área delicada de los ojos al aumentar la elasticidad de la piel.", 
			"Dispensador de aire al vacío de 15 ml", 
			"Ayuda a mejorar la apariencia de firmeza de la piel alrededor de los ojos. Contiene extracto revitalizante de pepino.  Para todo tipo de piel. Características Clave  Sin parabenos.  Comprobado dermatológicamente.  Comprobado oftalmológicamente.", 
			"Formulado exclusivamente con Vitaminas B3, antioxidantes de las Vitaminas C y E, Sábila, extracto de pepino; este gel refrescante da firmeza y revitaliza la piel alrededor de los ojos.",
			"Use por la mañana. Para complementar su rutina, use la Crema Hidratante para los Ojos Herbalife SKIN por la noche.",
			"../imagenes/productos/usaEspanol/4/0770_herbalifeskin_firmingeyegel_400.jpg" 
			]);

		tx.executeSql('INSERT INTO ProductosUsaEspanol (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
			"Limpiador Cítrico para la Piel de Herbalife SKIN", 
			"4", 
			"Este gel limpiador de microperlas de jojoba con esencia cítrica quita las impurezas de la piel, el maquillaje dejando su piel limpia y radiante. Perfecto para la piel normal a grasosa.", 
			"150 mL", 
			"Limpiador fragante con toques de naranja y pomelo. Comprobado clínicamente para mostrar una reducción en el sebo de la piel después de un solo uso. Fórmula liviana de gel con microperlas revitalizantes Deja su piel increíblemente suave y resplandeciente. Características Clave Sin parabenos. Sin sulfatos. Comprobado dermatológicamente.", 
			"Formulado exclusivamente con: Vitaminas B3, antioxidantes de las Vitaminas C y E y Sábila, Aceites de naranja/Aceites cítricos, Aceites de pomelo/Aceites cítricos y extractos limpiadores derivados de la manzana, Ésteres de Jojoba.",
			"Usarla por la mañana y por la noche (AM / PM) Siga con el Tonificador, el sérum y el humectante.",
			"../imagenes/productos/usaEspanol/4/0766_herbalifeskin_polishingcitruscleanser_400.jpg" 
			]);
		tx.executeSql('INSERT INTO ProductosUsaEspanol (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
			"Sérum Reductor de Líneas de Herbalife SKIN", 
			"4", 
			"Para todo tipo de piel, este sérum multifuncional ayuda a disminuir las señales del envejecimiento prematuro*, mientras mejora de manera extraordinaria la suavidad, tersura, resplandor, fulgor y luminosidad de la piel.", 
			"Dispensador de aire al vacío de 30 ml", 
			"Formulado exclusivamente con: Vitaminas B3, antioxidantes de las Vitaminas C y E y Sábila, Extracto de semillas de castaña, Péptido. Este sérum multifuncional le ayudará a su piel a pasar la prueba del paso del tiempo.", 
			"El uso de día y por la noche ayuda a maximizar sus resultados. Reduce la apariencia de líneas finas y arrugas. Comprobado clínicamente para mostrar una mejora extraordinaria en la suavidad, tersura, resplandor, fulgor y luminosidad de la piel en solo siete días. Características Clave Sin parabenos. Comprobado dermatológicamente.",
			"Usar por la mañana y por la noche (AM y PM). Aplicar después del limpiador, el tonificador y antes del humectante.",
			"../imagenes/productos/usaEspanol/4/0768_herbalifeskin_lineminimizingserum_400.jpg" 
			]);

		tx.executeSql('INSERT INTO ProductosUsaEspanol (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
			"Programa Avanzado Herbalife SKIN Para piel Normal a Seca", 
			"4", 
			"Mejore su régimen del cuidado de la piel con el programa Avanzado, que contiene todos los productos del programa Básico, para piel Normal a Seca, más otros productos para aumentar sus resultados diarios. Obtendrá más suavidad, tersura, una piel más radiante todavía y los resultados de la disminución de arrugas y líneas finas.", 
			"", 
			"Mejore la apariencia de la piel con nuestra mezcla de Vitaminas B3, antioxidantes de las Vitaminas C y E, Sábila y otros ingredientes botánicos. Características Clave Sin parabenos Sin sulfatos Comprobado dermatológicamente", 
			"El Programa Avanzado Herbalife SKIN – Para piel Normal a Seca incluye: Limpiador Relajante de Sábila Tonificador Energizante de Hierbas Sérum Reductor de Líneas† Crema Hidratante para los Ojos. Gel Reafirmante de Ojos. Crema Humectante Diaria‡, ‡‡ Crema Reabastecedora de Noche Probado en sujetos para comprobar suavidad, tersura, luminosidad, fulgor y resplandor mediante clasificación visual experta en intervalos de dos, cuatro y siete días. El 100% de los sujetos mostró una mejora en la tersura, suavidad y fulgor en siete días. Un 97% de los sujetos mostró una mejora en el resplandor y luminosidad.",
			"Limpie, tonifique y humecte su piel todos los días con fórmulas con ingredientes botánicos especialmente elaborados para tratar la piel normal a seca. Probado en sujetos para comprobar firmeza y elasticidad mediante clasificación visual experta en intervalos de siete y 42 días. Un 85% de los sujetos mostró una mejora en la firmeza/elasticidad de la piel debajo de los ojos a los 42 días.",
			"../imagenes/productos/usaEspanol/4/1493_herbalifeskin_advancedprogram_normaltodry_400.jpg" 
			]);
		tx.executeSql('INSERT INTO ProductosUsaEspanol (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
			"Crema Humectante Diaria Herbalife SKIN", 
			"4", 
			"Para todo tipo de piel, esta crema humectante diaria con propiedades iluminadoras le proporcionará un resplandor saludable a su piel. Su piel lucirá radiante, ¡incluso sin maquillaje!", 
			"Dispensador de aire al vacío de 30 ml", 
			"Comprobado clínicamente para mostrar que la piel se ve más luminosa y se siente más suave y tersa en solo siete días. Comprobado clínicamente para duplicar la humectación de la piel durante ocho horas Este producto es ideal para lucir una piel fresca y suave en cualquier ocasión, o cuando quiera una hidratación ligera. Características Clave Sin parabenos. Comprobado dermatológicamente. Perfecta para hombres y mujeres.", 
			"Formulado exclusivamente con Vitaminas B3, antioxidantes de las Vitaminas C y E, y Sábila, extracto de semillas de castaña, y péptido. Este cremoso y sofisticado humectante proporciona resplandor, luminosidad y suavidad instantáneamente.",
			" Use por la mañana. Aplicar después del limpiador, tonificador y sérum. Para complementar su rutina diaria, use Crema Reabastecedora de Noche de Herbalife SKIN.",
			"../imagenes/productos/usaEspanol/4/0769_herbalifeskin_dailyglowmoisturizer_400.jpg" 
			]);

		tx.executeSql('INSERT INTO ProductosUsaEspanol (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
			"Programa Avanzado Herbalife SKIN Para piel Normal a Grasosa", 
			"4", 
			"Aumente los beneficios de su régimen de cuidado de la piel actual. El Programa Avanzado contiene la gama completa de productos del Programa Básico-Piel Normal a Grasosa, además de una selección de productos que le ayudarán a controlar el brillo y conseguir máximos resultados todos los días, incluyendo una piel más luminosa, suave y tersa, además de los beneficios como la disminución en la apariencia de líneas finas y arrugas.", 
			"", 
			"Mejore la apariencia de su piel con nuestra mezcla óptima de Vitamina B3, vitaminas antioxidantes C y E, Sábila y otros ingredientes botánicos. Características Clave Sin parabenos Sin sulfatos Comprobado dermatológicamente", 
			"El Programa Avanzado Herbalife SKIN – Para piel Normal a Grasosa incluye: Limpiador Cítrico para la Piel Tonificador Energizante de Hierbas Sérum Reductor de Líneas Crema Hidratante para los Ojos Gel Reafirmante de Ojos Crema Humectante Diaria§**Crema Reabastecedora de Noche Probado en sujetos para comprobar suavidad, tersura, luminosidad, fulgor y resplandor mediante clasificación visual experta en intervalos de dos, cuatro y siete días. El 100% de los sujetos mostró una mejora en la tersura, suavidad y fulgor en siete días. Un 97% de los sujetos mostró una mejora en el resplandor y luminosidad.",
			"Limpie tonifique y humecte cada día con fórmulas que contienen ingredientes botánicos especialmente seleccionados para beneficiar la piel normal a grasosa. Probado en sujetos para comprobar firmeza y elasticidad mediante clasificación visual experta en intervalos de siete y 42 días. Un 85% de los sujetos mostró una mejora en la firmeza/elasticidad de la piel debajo de los ojos a los 42 días. Probado en sujetos, midiendo los niveles de sebo inmediatamente después de la aplicación. El 100% de sujetos mostró una disminución de sebo en la superficie de la piel después de un solo uso.",
			"../imagenes/productos/usaEspanol/4/1497_herbalifeskin_advancedprogram_normaltooily_400.jpg" 
			]);

		tx.executeSql('INSERT INTO ProductosUsaEspanol (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
			"Crema Reabastecedora de Noche de Herbalife SKIN", 
			"4", 
			"Despiértese con la piel suave y sedosa. Esta crema rica y lujosa brinda la hidratación que necesita la piel en la noche. Una hidratación de largo plazo le permite despertarse con un piel más suave y tersa.", 
			"Dispensador de aire al vacío de 30 ml", 
			"Comprobado clínicamente para mostrar que la piel se ve. Proporciona una mejora notable en el aspecto general y luminosidad de la piel en solo una semana.* Comprobado clínicamente para mostrar que la hidratación de la piel se duplica por ocho horas. Características Clave Sin parabenos. Comprobado dermatológicamente.", 
			"Formulado exclusivamente con: Vitaminas B3, antioxidantes de las Vitaminas C y E y Sábila, Aceite de semilla de girasol, Aceite de semilla de macadamia, Aceite del fruto del olivo, Aceite de semilla de sésamo, Extracto de flor Acmella oleracea.",
			"Usarla a la noche (PM). Aplicarla después de limpiar la piel, y después de aplicar el tonificador y el sérum.",
			"../imagenes/productos/usaEspanol/4/0774_herbalifeskin_replenishingnightcream_400.jpg" 
			]);

		tx.executeSql('INSERT INTO ProductosUsaEspanol (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
			"Tonificador Energizante de Hierbas Herbalife SKIN", 
			"4", 
			"No importa su tipo de piel. Este Tonificador facial infundido con Sábila, sin alcohol, con fragancia a mandarina cítrica le proporciona hidratación a su piel, y refresca la piel con aspecto cansado.", 
			"Dispensador de aire al vacío de 50 mL", 
			"El uso por la mañana y por la noche ayuda a preparar su piel para recibir mejor el sérum, y el hidratante de día o de noche para mejores resultados. Humecta su piel delicadamente. Su piel se sentirá fresca y limpia sin sequedad ni picazón. Características Clave Sin parabenos. Comprobado dermatológicamente.", 
			"Este tonificador a base de extractos botánicos formulado exclusivamente con Vitaminas B3, antioxidantes de las Vitaminas C y E, Sábila, y potasio alum, proporciona hidratación y deja la piel limpia y fresca.",
			"Use por la mañana y por la noche Siga con sérum y humectante.",
			"../imagenes/productos/usaEspanol/4/0767_herbalifeskin_energizingherbaltoner_400.jpg" 
			]);

		tx.executeSql('INSERT INTO ProductosUsaEspanol (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
			"Crema Hidratante para los Ojos de Herbalife SKIN", 
			"4", 
			"Esta crema suave hidratante disminuye la apariencia de líneas finas y arrugas alrededor de los ojos, un área que tiene menos glándulas sebáceas, haciéndola más susceptible a la deshidratación.", 
			"Dispensador de aire al vacío de 15 ml", 
			"Clínicamente comprobada por su intenso efecto hidratante en la piel después de ocho horas. Para todo tipo de piel. Características Clave Sin parabenos. Comprobado dermatológicamente. Comprobado oftalmológicamente.", 
			"Formulado exclusivamente con: Vitaminas B3, antioxidantes de las Vitaminas C y E y Sábila, Aceite de nuez de macadamia, Extracto de pepino y Péptido. Esta crema hidrata y nutre la piel alrededor de los ojos significativamente disminuyendo la apariencia de líneas finas y arrugas alrededor de los ojos en solo siete días.",
			"Usarla a la noche (PM). Para completar su rutina, use el Gel Reafirmante de Ojos de Herbalife SKIN por la mañana.",
			"../imagenes/productos/usaEspanol/4/0771_herbalifeskin_hydratingeyecream_400.jpg" 
			]);
		tx.executeSql('INSERT INTO ProductosUsaEspanol (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
			"Mascarilla de Arcilla con Menta Purificadora de Herbalife SKIN", 
			"4", 
			"Disfrute de esta mascarilla de a base de arcilla con esencia a menta fresca. Esta mascarilla de arcilla rica y cremosa tiene los efectos absorbentes y tonificadores de la arcilla bentonita para eliminar el exceso de sebo y suciedad.", 
			"120 mL", 
			"Comprobado clínicamente para mejorar el aspecto de los poros en un solo uso. Un toque de menta verde y romero estimula sus sentidos mientras deja su piel más suave y tersa Prepara su piel para poder recibir los beneficios de nuestro sérum y cremas hidratantes. Características Clave Sin parabenos. Dermatológicamente comprobado. Probado en sujetos, midiendo los niveles de hidratación de la piel en intervalos de ocho horas. El 100% de los sujetos mostró niveles más altos de hidratación en la piel por encima del nivel base después de ocho horas.", 
			"Vitaminas B3, antioxidantes de las Vitaminas C y E y Sábila, Arcilla bentonita, Aceite de hoja de romero, Aceite de menta verde.",
			"Usar de 1 a 3 veces por semana, según sea necesario. Aplicar después del limpiador.  Siga con el sérum y el humectante.",
			"../imagenes/productos/usaEspanol/4/0773_herbalifeskin_purifyingmintclaymask_400.jpg" 
			]);

		tx.executeSql('INSERT INTO ProductosUsaEspanol (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
			"Limpiador Relajante de Sábila Herbalife SKIN", 
			"4", 
			"Confórtese con espumas sedosas. Perfecto para la piel normal a seca, este limpiador suave deja su piel despejada, suave y limpia.", 
			"150 mL", 
			"Limpiador a base de Sábila con fragancia fresca y suave Espuma sedosa y suave que elimina el exceso de grasa, suciedad y quita el maquillaje ligero de la piel, sin irritarla La Sábila suaviza e hidrata la piel. Características Clave Sin parabenosSin sulfatosComprobado dermatológicamente", 
			"Este gel limpiador hidratante enriquecido con Sábila está formulado exclusivamente con Vitaminas B3, antioxidantes de las Vitaminas C y E, y Sábila, y extractos limpiadores derivados del coco. Su espuma sedosa elimina el exceso de grasa y maquillaje dejando su piel limpia y con fragancia fresca.",
			"Usar por la mañana y por la noche. Siga con tonificador, sérum y humectante",
			"../imagenes/productos/usaEspanol/4/0765_herbalifeskin_soothingaloecleanser_400.jpg" 
			]);
		tx.executeSql('INSERT INTO ProductosUsaEspanol (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
			"Programa Básico Herbalife SKIN Para Piel Normal a Seca", 
			"4", 
			"Para piel normal a seca, este programa es el inicio perfecto para todos los que busquen tener una piel suave y radiante.", 
			"", 
			"Mejore la apariencia de su piel con esta mezcla óptima de Vitamina B3, Vitaminas antioxidantes C y E, Sábila y otros ingredientes botánicos. Características Clave Sin parabenos Sin sulfatos Comprobado dermatológicamente", 
			"Programa Básico Herbalife SKIN – Para Piel Normal a Seca incluye: Limpiador Relajante de Sábila Tonificador Energizante de Hierbas Crema Humectante Diaria‡, ‡‡Crema Reabastecedora de Noche. Probado en sujetos para comprobar suavidad, tersura, luminosidad, fulgor y resplandor mediante clasificación visual experta en intervalos de dos, cuatro y siete días. El 100% de los sujetos mostró una mejora en la tersura, suavidad y fulgor en siete días. Un 97% de los sujetos mostró una mejora en el resplandor y luminosidad.",
			"Limpie, tonifique y humecte su piel todos los días con fórmulas con ingredientes botánicos especialmente elaborados para tratar la piel normal a seca.",
			"../imagenes/productos/usaEspanol/4/1492_herbalifeskin_basicprogram_normaltodry_400.jpg" 
			]);

		tx.executeSql('INSERT INTO ProductosUsaEspanol (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
			"Programa Básico Herbalife SKIN Para Piel Normal a Grasosa", 
			"4", 
			"Ideal para Piel Normal a Grasosa, este programa es el primer paso para cualquier persona que desee una piel clara y con luminosidad.", 
			"", 
			"Mejore la apariencia de su piel con nuestra mezcla óptima de Vitamina B3, vitaminas antioxidantes C y E, Sábila y otros ingredientes botánicos. Características Clave Sin parabenos Sin sulfatos Comprobado dermatológicamente", 
			"El Programa Básico Herbalife SKIN – Para piel Normal a Grasosa incluye Limpiador Cítrico para la Piel Tonificador Energizante de Hierba Crema Humectante Diaria‡,  Crema Reabastecedora de Noche. Probado en sujetos, midiendo los niveles de sebo inmediatamente después de la aplicación. El 100% de sujetos mostró una disminución de sebo en la superficie de la piel después de un solo uso.",
			"Limpie, tonifique y humecte todos los días con fórmulas que contienen ingredientes botánicos especialmente seleccionados para beneficiar la piel normal a grasosa. Probado en sujetos para comprobar suavidad, tersura, luminosidad, fulgor y resplandor mediante clasificación visual experta en intervalos de dos, cuatro y siete días. El 100% de los sujetos mostró una mejora en la tersura, suavidad y fulgor en siete días. Un 97% de los sujetos mostró una mejora en el resplandor y luminosidad.",
			"../imagenes/productos/usaEspanol/4/1496_herbalifeskin_basicprogram_normaltooily_400.jpg" 
			]);
		tx.executeSql('INSERT INTO ProductosUsaEspanol (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
			"Kit de Resultados en 7 Días Herbalife SKIN™", 
			"4", 
			"EL Kit de Resultados en 7 Días Herbalife SKIN™ se comprueba clínicamente para mostrar que la piel se ve más luminosa y se siente más sedosa y suave en solo siete días.", 
			"Kit de Resultados en 7 Días", 
			"Nuestros productos comprobados clínicamente te ayudan a conseguir resultados máximos en solo siete días, incluyendo: Una piel más suave, tersa y radiante Disminución de la apariencia de líneas finas y arrugas Carácterísticas Sin parabenos Probado por Dermatólogos", 
			"El Kit de Resultados en 7 Días incluye: Limpiador Relajante de Sábila: un limpiador suave que elimina el exceso de grasa, suciedad y quita el maquillaje. Sérum Reductor de Líneas: un sérum multifuncional que ayuda a disminuir las señales de envejecimiento prematuro. Crema Humectante Diaria: un magnífico humectante cremoso que proporciona al instante resplandor, frescura y suavidad durante el día. Crema Reabastecedora de Noche: un nutritivo humectante que brinda hidratación a largo plazo mientras duermes. Mascarilla de Arcilla con Menta Purificadora: una mascarilla a base de arcilla bentonita que mejora y revitaliza la complexión de su piel. Humectante Protector Amplio Espectro FPS 30 Protector Solar: un humectante de amplia duración que deja el cutis terso y suave, y a la vez brinda protección de amplio espectro contra los rayos UVA/UVB. Además paquetes Plus complementarios con: Limpiador Cítrico para la Piel Gel Reafirmante de Ojos Crema Hidratante para Ojos Exfoliante Instantáneo con Arándanos",
			"Limpia, tonifica y humecta tu cutis todos los días con fórmulas que contienen ingredientes botánicos especialmente seleccionados que favorecen a todo tipo de piel.",
			"../imagenes/productos/usaEspanol/4/1455_herbalifeskin_7dayresultskit_us.jpg" 
			]);

		tx.executeSql('INSERT INTO ProductosUsaEspanol (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
			"Herbal Aloe Protector Solar de Amplio Espectro FPS 30 para la Cara y el Cuerpo", 
			"4", 
			"Herbal Aloe Protector Solar para la Cara y el Cuerpo es un protector solar de amplio espectro UVA/UVB SPF 30 para toda la familia que es resistente al agua y al sudor hasta por 40 minutos.", 
			"4 fl. oz./120 mL", 
			"Protege la piel de los dañinos rayos UVA/UVB Ayuda a prevenir las quemaduras causadas por el sol Resistente al agua y al sudor hasta por 40 minutos Duplica la humedad de la piel durante 8 horas* Características clave Sin parabenos Probado por dermatólogos De amplio espectro SPF 30 Producto recomendado por su filtro solar con protección de amplio espectro", 
			"Protege tu piel con este filtro solar de amplio espectro resistente al agua y al sudor hasta por un máximo de 40 minutos. Contiene sábila que hidrata la piel dejándola suave y tersa.",
			"Aplica generosamente 15 minutos antes de exponerte al sol. Vuelve a aplicar cada dos horas o 40 minutos después de nadar o de transpirar e inmediatamente después de secarte con una toalla",
			"../imagenes/productos/usaEspanol/4/0921_herbalaloe_spf30_us.jpg" 
			]);
		tx.executeSql('INSERT INTO ProductosUsaEspanol (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
			"Jabón Líquido Corporal Herbal Aloe", 
			"4", 
			"Limpia tu piel y a la vez alivia la resequedad con este suave jabón para manos y cuerpo, diseñado tanto para el baño como el tocador.", 
			"8.5 FL OZ/250 ml", 
			"Ayuda a aliviar la resequedad y humecta profundamente la piel. Características clave. Sin parabenos. Sin sulfatos. Sin colores ni pigmentos agregados.. Aroma fresco y limpio.. Disponible en tubo de 250 ml con tapa abatible.", 
			"Las suaves substancias limpiadoras de origen vegetal y los humectantes de triple acción sedosa ayudan a aliviar la resequedad y humectan profundamente tu piel. Perfecto para el baño, la ducha y el tocador para siempre mantener tu piel limpia, suave y sedosa.",
			"Úsalo durante la ducha o el baño diario. Para las manos, utilízalo frecuentemente durante todo el día.",
			"../imagenes/productos/usaEspanol/4/121108_sku2561_us_400.jpg" 
			]);

		tx.executeSql('INSERT INTO ProductosUsaEspanol (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
			"Crema para las Manos y el Cuerpo Herbal Aloe", 
			"4", 
			"Hidrata tu piel con esta crema no grasosa", 
			"6.7 FL OZ/200 ml", 
			"Se ha demostrado clínicamente que hidrata la piel para una nutrición profunda. Aumenta la humedad de la piel en un 100% después de un solo uso. La sábila y la manteca de karité se absorben rápidamente y dejan la piel con una sensación suave y tersa. Características Principales Sin parabeno Sin colores ni pigmentos agregados Aroma fresco y limpio Disponible en tubo de 200 ml con tapa abatible.", 
			"Esta crema ligera y no grasosa con infusión de sábila y manteca de karité deja tu piel suave y tersa.",
			"Aplícala diariamente según sea necesario.",
			"../imagenes/productos/usaEspanol/4/121108_sku2563_us_400.jpg" 
			]);
		tx.executeSql('INSERT INTO ProductosUsaEspanol (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
			"Gel Suavizante Herbal Aloe", 
			"4", 
			"Deja tu piel más suave y tersa con este gel enriquecido con sábila.", 
			"6.7 FL OZ/200 ml", 
			"Se ha demostrado que deja la piel más suave y tersa. Enriquecido con sábila e ingredientes botánicos acondicionadores para humectar y suavizar la piel. Características clave Sin parábenos Sin colores ni pigmentos agregados. Fórmula sin fragancia. Disponible en tubo de 200 ml con tapa abatible.", 
			"Humecta y suaviza tu piel seca con este ligero y refrescante gel enriquecido con sábila e ingredientes botánicos acondicionadores. Ayuda a aliviar la piel seca que puede causar aspereza, picazón y agrietamiento.",
			"Aplíquelo diariamente según sea necesario",
			"../imagenes/productos/usaEspanol/4/121108_sku2562_us_400.jpg" 
			]);

		tx.executeSql('INSERT INTO ProductosUsaEspanol (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
			"Shampoo Fortificante Herbal Aloe", 
			"4", 
			"Fortalece y repara tu cabello con este shampoo fortificante sin sulfatos que deja el cabello 10 veces más fuerte después de un solo uso y reduce la rotura en un 90%.", 
			"8.5 FL OZ/250 ml", 
			"Deja el cabello hasta 10 veces más fuerte después de un solo uso Reduce la rotura del cabello en un 90% Fórmula que ayuda a conservar el tinte. Características Clave: Sin parabenos Sin sulfatos Sin colores ni pigmentos agregados. Aroma fresco y limpio. Disponible en tubo de 250 ml con tapa abatible.", 
			"Las microproteínas de origen vegetal fortalecen el cabello, mientras los suaves limpiadores de extracto de coco crean espuma abundante. Cada hebra maltratada se fortalece para reducir la rotura, revelando un cabello más suave, liso y sedoso.* Fórmula sin sulfatos que ayuda a conservar el tinte.",
			"Aplícalo, haz espuma y enjuaga bien. Para resultados óptimos, úsalo con el Acondicionador Fortificante Herbal Aloe.",
			"../imagenes/productos/usaEspanol/4/121108_sku2564_us_400.jpg" 
			]);
		tx.executeSql('INSERT INTO ProductosUsaEspanol (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
			"Acondicionador Fortificante Herbal Aloe", 
			"4", 
			"Fortalece y repara tu cabello con este acondicionador con infusión de proteína de origen vegetal que reduce la rotura del cabello maltratado.", 
			"8.5 FL OZ/250 ml", 
			"Deja el cabello hasta 10 veces más fuerte después de un solo uso Reduce la rotura del cabello en un 90% Fórmula que ayuda a conservar el tinte.", 
			"Transforma tu cabello con este acondicionador, probado clínicamente, con infusión de proteína que fortalece y deja en cada hebra una sensación más suave y sedosa después de un solo uso.* Fórmula sin sulfatos que conserva el tinte.",
			"Aplícalo dando un masaje al cabello. Déjalo por 3 minutos. Enjuaga bien. Para resultados óptimos, úsalo con el Shampoo Fortificante Herbal Aloe.",
			"../imagenes/productos/usaEspanol/4/121108_sku2565_us_400.jpg" 
			]);

		tx.executeSql('INSERT INTO ProductosUsaEspanol (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
			"Barra de Jabón Corporal Herbal Aloe", 
			"4", 
			"Limpia suavemente sin despojar la piel de sus aceites necesarios.", 
			"4.4 OZ/125 g", 
			"La mezcla de sábila, aceite de oliva y vitaminas A, C y E, nutre la piel. Características clave Sin sulfatos Sin parabenos Sin colores ni pigmentos agregados. Aroma fresco y limpio.", 
			"Su rica espuma cuenta con una infusión de sábila, aceite de oliva y limpiadores a base de coco, que dejan la piel limpia y humectada.",
			"Úselo todos los días.",
			"../imagenes/productos/usaEspanol/4/111007_sku2566_us_400.jpg" 
			]);
		tx.executeSql('INSERT INTO ProductosUsaEspanol (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
			"Radiant C® Body Lotion SPF 15", 
			"4", 
			"Humecte su piel y maximice la protección contra el sol con esta loción ligera y no grasosa, con vitamina C, para la humectación diaria.", 
			"6.7 fl oz (200ml)", 
			"Protege la piel de los rayos del sol con SPF 15 Protege contra el daño de los rayos UVA/UVB Impulsa la protección antioxidante", 
			"Proteja su piel de la exposición diaria de los rayos dañinos del sol con esta loción corporal, aroma de naranja con una infusión de vitamina C para la defensa antioxidante. Su fórmula no grasosa es suficientemente suave para usarse diariamente.",
			"",
			"../imagenes/productos/usaEspanol/4/0445us_radiantc_lotion_400.jpg" 
			]);

		tx.executeSql('INSERT INTO ProductosUsaEspanol (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
			"Radiant C® Daily Skin Booster", 
			"4", 
			"Sella la humedad de tu cutis con esta crema en gel enriquecida con emolientes y antioxidantes como la vitamina C.", 
			"1 fl oz (30ml)", 
			"Crema en gel enriquecida con antioxidantes para sellar la humedad natural del cutis. Mejora la textura y el tono, dejando la piel suave como la seda.", 
			"Esta ligera crema en gel ayuda a sellar la humedad de la piel, brindando hidratación al cutis. Ayuda a que el maquillaje se deslice fácilmente. Disponible en un tubo dispensador de 30 ml.",
			"Pon una pequeña cantidad en la punta del dedo, aplica dando un masaje suave en la cara y cuello. Aplícala en la mañana después de limpiar el cutis y antes del humectante.",
			"../imagenes/productos/usaEspanol/4/2890un_rcskinbooster_400.jpg" 
			]);
		tx.executeSql('INSERT INTO ProductosUsaEspanol (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
			"Radiant C® Face Quencher", 
			"4", 
			"El refrescante rocío de vitamina C para hombres y mujeres brinda una explosión de frescura a la piel.", 
			"1.7 fl oz (50ml)", 
			"Rocío hidratante instantáneo para hombres y mujeres para revigorizar la piel deshidratada. Ayuda a fijar el maquillaje por más tiempo.", 
			"Rocía la cara durante el día para revitalizar la piel con este fresco spray de vitamina C. No sólo proporciona hidratación inmediata, también ayuda a refrescar el maquillaje. Disponible en rociador de 50 ml.",
			"Rocía ligeramente la cara las veces que sea necesario durante el día y tu piel lucirá fresca y saludable.",
			"../imagenes/productos/usaEspanol/4/2997un_rcskinquencher_400.jpg" 
			]);

		tx.executeSql('INSERT INTO ProductosUsaEspanol (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
			"Body Buffing Scrub", 
			"4", 
			"Revela una piel más saludable alrededor de las caderas y la cintura con las semillas de jojoba, las cuales frotan y exfolian la piel dejándola más suave.", 
			"200ml", 
			"Es la primera parte de un programa de dos pasos para el cuidado del cuerpo. Contiene jojoba, que exfolia naturalmente y ayuda a mejorar y a rejuvenecer la apariencia de la piel. Suaviza y mejora la apariencia de la piel.", 
			"Este exfoliante mejora notablemente el aspecto de la piel. Las semillas de jojoba enriquecen el proceso exfoliante del cuerpo. Disponible en tubos de 200 ml con tapón flip-top.",
			"Aplícalo con movimientos circulares delicados hasta que sientas tu piel limpia y suave. Luego enjuaga.",
			"../imagenes/productos/usaEspanol/4/0353un_bodybuffingscrub_400.jpg" 
			]);
		tx.executeSql('INSERT INTO ProductosUsaEspanol (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
			"Body Contouring Crème", 
			"4", 
			"Humecta tu piel con esta crema suntuosa.", 
			"200ml", 
			"Es la segunda parte de un programa de dos pasos para el cuidado del cuerpo. Sus extractos de ginkgo biloba y ácidos frutales ayudan a la piel a lucir más firme y tonificada.", 
			"Body Contouring Crème humecta y mejora el aspecto de tu piel. Disponible en tubos de 200 ml con tapón flip-top.",
			"Aplica Body Contouring Crème con la punta de los dedos y movimientos delicados de abajo hacia arriba.",
			"../imagenes/productos/usaEspanol/4/0354un_bodycontourcreme_400.jpg" 
			]);

		tx.executeSql('INSERT INTO ProductosUsaEspanol (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
			"woman", 
			"4", 
			"Una fragancia simple para la mujer moderna con una mezcla de jazmín, lirio de agua y peonía.", 
			"50ml", 
			"Exude fuerza Una armónica mezcla de botánicos", 
			"Una simple y moderna fragancia para mujeres elaborada con frescas esencias botánicas.",
			"",
			"../imagenes/productos/usaEspanol/4/0343un_woman_400.jpg" 
			]);
		tx.executeSql('INSERT INTO ProductosUsaEspanol (nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?)',[
			"man", 
			"4", 
			"Un aroma fresco y vigorizante con menta acuática y albahaca para el hombre activo de hoy en día.", 
			"100ml", 
			"Equilibre el trabajo y el juego. Un aroma fresco, limpio y atrevido", 
			"Una fragancia simple y moderna para el hombre elaborada con frescas esencias botánicas.",
			"",
			"../imagenes/productos/usaEspanol/4/121108_sku0344_us_400.jpg" 
			],

		function(tx){},
		function(tx,err){
			self.error(tx,err);
		});				     
	})
}