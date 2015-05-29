/**
 * [crearProductosUsa funcion que crea los productos de Usa]
 * @return {[type]} [description]
 */
function crearProductosUsa (){
	console.log("*************En crearProductos USA");
	self.transaction(function(tx){
				tx.executeSql('DROP TABLE IF EXISTS ProductosUsa'); //Eliminamos la tabla productos la creamos nuevamente y cargamos todos los productos
				tx.executeSql('CREATE TABLE IF NOT EXISTS ProductosUsa (id INTEGER PRIMARY KEY ASC, pais VARCHARD(2), nombre VARCHAR(50), categoria TEXT, descripcion TEXT, sabores VARCHAR(60), beneficios VARCHAR(60), detalles VARCHAR(60), uso VARCHAR(60), foto TEXT)');			     

				tx.executeSql('INSERT INTO ProductosUsa (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
					"1", 
					"QuickStart", 
					"1", 
					"Get on the path to good health with this easy-to-follow program! Combining cutting-edge science with delicious shakes and snacks, the basic Quickstart program can help you achieve healthy weight management and Cellular Nutrition.", 
					"Wild Berry, Dutch Chocolate, French Vanilla, Cookies 'n Cream, Cafe Latte, Piña Colada.", 
					"Supports Cellular Nutrition with our 3 Core Products (Formulas 1, 2 and 3). Includes Herbal Tea Concentrate for an energy boost. Formula 1 Nutritional Shake Mix acts as a meal replacement for weight loss and weight maintenance.", 
					"Formula 1 Healthy Meal Nutritional Shake Mix (750g). Formula 2 Multivitamin Complex. Formula 3 Cell Activator®. Herbal Tea Concentrate (50g).",
					"Choose the Formula 1 Healthy Meal Nutritional Shake Mix flavor you prefer. For extra weight-management help, add any enhancer to target key challenges. ",
					"../imagenes/productos/ingles/1/121010quickstart4b_r3_4801_400.jpg" 
					]);
tx.executeSql('INSERT INTO ProductosUsa (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
	"1", 
	"Advanced", 
	"1", 
	"Ready to take your weight management goals up a notch? The Advanced program contains the entire set of Quickstart products, and also includes added enhancers to help improve your metabolism and skin’s appearance. ", 
	"Wild Berry, Dutch Chocolate, French Vanilla, Cookies 'n Cream, Cafe Latte, Piña Colada.", 
	"Helps boost metabolism with Total Control®. Includes Cell-U-Loss® to support the appearance of healthy skin and the healthy elimination of water.", 
	"Formula 1 Healthy Meal Nutritional Shake Mix (750g). Formula 2 Multivitamin Complex. Formula 3 Cell Activator®. Herbal Tea Concentrate (50g). Cell-U-Loss®. Total Control®",
	"Choose the Formula 1 Healthy Meal Nutritional Shake Mix flavor you prefer. For extra weight-management help, add any enhancer to target key challenges.",
	"../imagenes/productos/ingles/1/121010advanced4b_r3_4805_400.jpg" 
	]);
tx.executeSql('INSERT INTO ProductosUsa (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
	"1", 
	"Ultimate", 
	"1", 
	"Achieve your enhanced weight-management goals! This aptly named program contains the entire collection of Advance program products, plus added enhancers to help boost metabolism, rev up your energy and fight hunger. ", 
	"Wild Berry, Dutch Chocolate, French Vanilla, Cookies 'n Cream, Cafe Latte, Piña Colada.", 
	"Includes Snack Defense® to help support blood sugar level already within normal range. Comes with Aminogen®† to help break down proteins into amino acids. ", 
	"Formula 1 Healthy Meal Nutritional Shake Mix (750 g). Formula 2 Multivitamin Complex. Formula 3 Cell Activator®. Herbal Tea Concentrate (50 g). Cell-U-Loss®. Total Control®. Snack Defense®. Aminogen®†",
	"Choose the Formula 1 Healthy Meal Nutritional Shake Mix flavor you prefer. For extra weight-management help, add a protein product that best meets your customers’ needs.",
	"../imagenes/productos/ingles/1/4809_frenchvanilla_ultimatekit_400_us.jpg" 
	]);
tx.executeSql('INSERT INTO ProductosUsa (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
	"1", 
	"Formula 1 Nutritional Shake Mix ", 
	"1", 
	"Treat your body to a healthy, balanced meal in no time! Not only are these shakes easy to make, they’re also delicious. With up to 20 essential vitamins, minerals and nutrients – and in seven flavors – weight management never tasted so good!", 
	"French Vanilla, Dulce de Leche,	Mint Chocolate,	Vanilla - Allergen Free, Dutch Chocolate, Wild Berry, Cookies 'n Cream, Piña Colada, Cafe Latte, Kosher (Vanilla)", 
	"A healthy meal with up to 20 vitamins, minerals and essential nutrients. 9g of protein and healthy fiber help support weight management.", 
	"Formula 1 shakes include protein, fiber and essential nutrients that can help support metabolism, cellular growth repair and production. ",
	"Blend or stir 2 scoops (2 heaping scoops, or 25g) of Formula 1 with 8 fl. oz. of nonfat milk or soy milk. Be sure to add fresh fruit and ice. ",
	"../imagenes/productos/ingles/1/101213_sku3106_400x400_us.jpg" 
	]);
tx.executeSql('INSERT INTO ProductosUsa (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
	"1", 
	"Formula 1 Express Meal Bar, Cookies ’n Cream", 
	"1", 
	"The new Formula 1 Express Meal Bar is a delicious way to enjoy a nutritious meal anytime, anywhere. Packed with 21 essential vitamins, minerals and nutrients, these delicious Cookies ’n Cream flavored bars make it easier than ever to expand your meal options and enjoy the Formula 1 experience on the go!", 
	"Cookies ’n Cream 7 bars per box", 
	"Contains 21 vitamins and minerals. Packed with 15 g of protein. 5 g of healthy fiber to help support weight management. Individually wrapped for on-the-go usage. Cookies ’n Cream flavor.", 
	"Formula 1 Express Meal Bars are a delicious, nutritious and portable new way to enjoy the Formula 1 experience. Each individually wrapped bar delivers the ideal balance of protein and fiber to help satisfy hunger and provide lasting energy.",
	"Substitute one meal per day with a Formula 1 Express Meal Bar as a nutritious meal. For weight loss, replace two meals daily and eat one nutritious meal, as part of a healthful weight-management routine",
	"../imagenes/productos/ingles/1/121018_f1mealbar_us_400.jpg" 
	]);
tx.executeSql('INSERT INTO ProductosUsa (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
	"1", 
	"Formula 1 + PDM On The Go", 
	"1", 
	"The combination of Formula 1 Cookies ’n Cream and PDM Vanilla is available in a convenient on-the-go packet. With a rich flavor and creamy texture, this delicious healthy meal provides additional protein and nutrition anytime, anywhere. ", 
	"Cookies ’n Cream & PDM Vanilla 7 packets per bag", 
	"24 vitamins and minerals. High in protein (17 g). Excellent source of fiber (5 g)", 
	"One serving of Formula 1 with a half serving of Protein Drink Mix for healthy nutrition and weight management.",
	"Blend or stir 1 packet (39 g) of Formula 1 + PDM with 8 fl. oz. of water or nonfat milk. Create your own Formula 1 recipes by mixing with fresh fruit and ice.",
	"../imagenes/productos/ingles/1/3145_f1pluspdm_onthego_400_us.jpg" 
	]);
tx.executeSql('INSERT INTO ProductosUsa (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
	"1", 
	"Formula 1 Nutritional Shake Mix - Allergen-Free", 
	"1", 
	"The perfect nutritional solution for those with common food allergies – because it’s free from soy, dairy and gluten. Now no one is left out of the Formula 1 shake experience.", 
	"Vanilla - Allergen Free 810g", 
	"Allows people with common food sensitivities to enjoy all the nutritional benefits of Formula 1 shakes.", 
	"A vanilla-flavored, healthy nutritional shake mix for those with soy, dairy and gluten sensitivities. Allergen-Free Formula 1 shake mix helps you maintain your weight loss program and makes it easy to accommodate different nutritional needs.",
	"For soy allergies: Mix with skim milk, rice milk, or almond milk. For dairy allergies: Mix with rice milk, almond milk, or soy milk. For gluten allergies: Mix with skim milk, rice milk or soy milk. For those allergic to soy, dairy, and gluten: Mix with rice milk.",
	"../imagenes/productos/ingles/1/102310_sku3117_us_400.jpg" 
	]);
tx.executeSql('INSERT INTO ProductosUsa (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
	"1", 
	"Formula 1 Instant Healthy Meal Nutritional Shake Mix", 
	"1", 
	"Get all of the protein, calcium and antioxidants you get from the Formula 1 shakes you make at home! Available in a water-mixable, on-the-go powder, each serving of Formula 1 Instant Healthy Meal Nutritional Shake Mix is formulated to combine easily with water to become a rich, creamy, delicious shake.", 
	"Vanilla Dream Canister, Creamy Chocolate Canister, Vanilla Dream 12 Packets, Creamy Chocolate 12 Packets.", 
	"20g of protein, 24 vitamins and minerals, and calcium. Antioxidants of a serving of fruit. 0 trans fats.", 
	"Formula 1 shakes include protein, fiber and essential nutrients that can help support metabolism, and cellular growth repair and production. ",
	"Stir in 1 packet or 2 scoops (52g) of Formula 1 Instant Healthy Meal Nutritional Shake Mix with 8 fl. oz. of water. Just shake and go!",
	"../imagenes/productos/ingles/1/2795_f1instanthealthymeal_vanillacanister_400_us.jpg" 
	]);
tx.executeSql('INSERT INTO ProductosUsa (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
	"1", 
	"Personalized Protein Powder ", 
	"1", 
	"Get more protein! Protein can help you feel fuller longer and assist you with your weight-management, fitness and health goals. Help satisfy pesky hunger pangs by adding this fat-free, protein-enriched powder to your shakes or meals. ", 
	"N/A", 
	"Helps build and maintain lean muscle mass. Fat-free protein supplement for hunger control. Contains 5g of soy and whey protein, and all 9 essential amino acids.", 
	"Personalized Protein Powder is a convenient way to increase your protein consumption, which helps to maintain your energy level between meals, and helps you maintain lean muscle mass. ",
	"Take one to four servings (1 tablespoon equals on serving) daily. This plain, unsweetened formula can be added to your Formula 1 shake or stirred into other foods and beverages, including cereal, yogurt, sauces and soups.",
	"../imagenes/productos/ingles/1/persproteinpow_400_usen.jpg" 
	]);
tx.executeSql('INSERT INTO ProductosUsa (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
	"1", 
	"Protein Drink Mix", 
	"1", 
	"Curb your hunger and stay energized with the power of protein! Add Protein Drink Mix to your favorite Formula 1 shake or mix with water for a nutritious protein snack.", 
	"Vanilla, Chocolate.", 
	"24 vitamins and minerals. 15g of heart-healthy soy protein. Just 5g of carbs per serving.", 
	"This great-tasting shake is an ideal way to get protein throughout the day. It includes protective antioxidants and mixes easily with water, making it ideal for a nutritious snack or protein boost on the go. ",
	"Blend or stir 2 tablespoons (28g) of Protein Drink Mix with 8 fl. oz. of cold water and enjoy! Take mid-morning or mid-afternoon to help satisfy your hunger cravings and to meet your daily personal-protein requirements. ",
	"../imagenes/productos/ingles/1/100907_sku1122_us_400.jpg" 
	]);
tx.executeSql('INSERT INTO ProductosUsa (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
	"1", 
	"Prolessa® Duo", 
	"1", 
	"Control your hunger and reduce your fat with this dual-action weight-management solution that helps you eat less and optimize your weight-loss program.", 
	"N/A", 
	"A unique formula that helps to significantly reduce caloric intake. Helps promote body fat loss. • Helps create a feeling of fullness. Stimulant-free. Made with clinically tested ingredients.", 
	"A unique ingredient combination that supports hunger control and fat reduction. This exclusive blend is available in powder form for the first time.",
	"Add one scoop per day to your favorite Herbalife® shake as a booster, or to milk or other protein-based products, such as soy milk or yogurt. For best results, make your shake as usual, and then add one scoop of ProlessaTM Duo and mix for an additional 5 – 10 seconds.",
	"../imagenes/productos/ingles/1/121108_sku1076_us_400.jpg" 
	]);
tx.executeSql('INSERT INTO ProductosUsa (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
	"1", 
	"Total Control® ", 
	"1", 
	"Jump-start your Weight Management program with Total Control® – an innovative natural dietary supplement designed to support the weight-loss process. Total Control® tablets contain a blend of herbs and nutrients that help boost metabolism and build energy and alertness. Total Control® is made with high-quality tea extracts – including green, black and oolong teas – and calming, soothing ginger to ease the digestive discomfort that can sometimes accompany weight loss. ", 
	"N/A", 
	"Boost metabolism. Build energy and alertness", 
	"This formula helps increase the body’s resting metabolic rate and contains ingredients that help generate energy to break down fat cells. ",
	"Take one tablet three times a day. ",
	"../imagenes/productos/ingles/1/110623_sku0077_us_400.jpg" 
	]);
tx.executeSql('INSERT INTO ProductosUsa (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
	"1", 
	"Formula 2 Multivitamin Complex ", 
	"1", 
	"A daily multivitamin in tablet form with over 20 essential nutrients and antioxidants, including folic acid, calcium and iron. ", 
	"N/A", 
	"Supplies vitamins and minerals, plus select herbs. Supports healthy weight management, overall good health and vitality. Promotes bones and immune-system health.", 
	"Scientifically formulated to nourish your body for optimal metabolism, growth, repair and reproduction at the cellular level. A Core Product for Cellular Nutrition. ",
	"Take one tablet three times a day with meals. May be part of a personalized Herbalife program that includes Formula 1, Personalized Protein Powder and Cell Activator®.",
	"../imagenes/productos/ingles/1/2010_f2_multivitamin_complex_400.jpg" 
	]);
tx.executeSql('INSERT INTO ProductosUsa (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
	"1", 
	"Snack Defense® ", 
	"1", 
	"Keep your blood sugar levels in check with Snack Defense®, a unique herb blend that helps your body process sugar from your meals and snacks. As an added bonus, this distinct medley of botanical and mineral ingredients is caffeine-free, so you can take it any time, day or night.", 
	"N/A", 
	"Helps support blood sugar levels already within normal range. Excellent source of chromium. Can be taken any time of the day or night.", 
	"Consuming too many carbohydrates can cause your body to experience a sudden increase in blood sugar and insulin levels, causing it to store fat. Gymnema, a key ingredient in Snack Defense®, helps decrease the absorption rate of glucose in the body.",
	"For adults, take one tablet twice a day, day or night. ",
	"../imagenes/productos/ingles/1/0079_snackdefense_400_us.jpg" 
	]);
tx.executeSql('INSERT INTO ProductosUsa (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
	"1", 
	"Cell-U-Loss®", 
	"1", 
	"Support the appearance of healthy skin with our reformulated natural blend of herbs – which includes corn silk, dandelion, parsley and asparagus – traditionally used to support healthy elimination of water. ", 
	"N/A", 
	"Supports the appearance of healthy skin. Supports your body’s natural detoxification through the kidneys, and healthy activity of the urinary tract. Supports healthy elimination of water. Helps maintain electrolyte balance and a healthy pH level. Kosher Certified",
	"A natural blend of herbs – which includes corn silk, dandelion, parsley and asparagus – traditionally used to support healthy elimination of water. ",
	"Take one tablet three times a day with meals. ",
	"../imagenes/productos/ingles/1/0111_cell-u-loss_400_us.jpg" 
	]);
tx.executeSql('INSERT INTO ProductosUsa (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
	"1", 
	"Formula 3 Cell Activator® ", 
	"1", 
	"Supports the body’s absorption of micronutrients and promotes cellular energy production.", 
	"N/A", 
	"Contains aloe, which may help support the body's absorption of micronutrients. Supports cellular energy production. Contains select botanicals, nutrients and powerful antioxidants tosupport healthy aging.", 
	"Contains alpha-lipoic acid, a potent antioxidant known to combat the effects of oxidative damage by free radicals and support integrity of the mitochondrial membrane. Mitochondria are known as the “powerhouse” of the cell and produce energy to provide numerous biological processes. Over time, free radicals can damage membranes surrounding the mitochondria, reducing the efficiency of cellular energy production. ",
	"Take one capsule twice a day with shakes or meals. ",
	"../imagenes/productos/ingles/1/101213_sku3123_us_400.jpg" 
	]);
tx.executeSql('INSERT INTO ProductosUsa (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
	"1", 
	"Herbal Tea Concentrate ", 
	"1", 
	"Ditch the coffee and soda for this refreshing and tasty alternative. Feel reinvigorated with this natural energy lift, our answer to fatigue caused by stress. It’s delicious, instant and low in calories.", 
	"Lemon, Raspberry, Peach.", 
	"Antioxidant and thermogenic benefits of green tea and botanicals. Provides an energy boost and weight-management support. Delicious, instant and low-calorie.", 
	"A refreshing tea hot or cold, Herbal Tea Concentrate comes in four delectable flavors – original, peach, lemon, and raspberry – that help you stay energized while you manage your weight.",
	"Mix 1/2 teaspoon (more or less as desired) of Herbal Tea Concentrate with 6 to 8 fl. oz. hot or cold water. ",
	"../imagenes/productos/ingles/1/121227_sku0105_canister_and_packet.jpg" 
	]);
tx.executeSql('INSERT INTO ProductosUsa (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
	"1", 
	"Personalized Protein Powder ", 
	"1", 
	"Get more protein! Protein can help you feel fuller longer and assist you with your weight-management, fitness and health goals. Help satisfy pesky hunger pangs by adding this fat-free, protein-enriched powder to your shakes or meals. ", 
	"N/A", 
	"Helps build and maintain lean muscle mass. Fat-free protein supplement for hunger control. Contains 5g of soy and whey protein, and all 9 essential amino acids.", 
	"Personalized Protein Powder is a convenient way to increase your protein consumption, which helps to maintain your energy level between meals, and helps you maintain lean muscle mass. ",
	"Take one to four servings (1 tablespoon equals on serving) daily. This plain, unsweetened formula can be added to your Formula 1 shake or stirred into other foods and beverages, including cereal, yogurt, sauces and soups.",
	"../imagenes/productos/ingles/1/persproteinpow_400_usen.jpg" 
	]);
tx.executeSql('INSERT INTO ProductosUsa (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
	"1", 
	"Aminogen®† ", 
	"1", 
	"Improve the way your system digests protein! This patented formula uses select enzymes that help your body break down protein chains into amino acids, improving the absorption of these essential nutrients.", 
	"N/A", 
	"Helps break down proteins into amino acids. Reduces bloating caused by incomplete protein digestion. Promotes lean muscle mass.", 
	"Many people lack the enzymes needed to fully digest the protein in their diets. Aminogen®† helps improve protein digestion with a patented vegetable-derived protein ingredient that contains specially selected enzymes. ",
	"Take one tablet with each protein-containing meal. ",
	"../imagenes/productos/ingles/1/2010_sku0101_aminogen_75c_400.jpg" 
	]);
tx.executeSql('INSERT INTO ProductosUsa (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
	"1", 
	"Roasted Soy Nuts", 
	"1", 
	"This delicious, crunchy, dry-roasted treat makes an ideal snack at only 100 calories per serving and packed with 9 grams of protein. Portion-controlled servings list nutritional information on each packet. Available in Chile Lime and Salted flavors.", 
	"N/A", 
	"Dry Roasted, Encourage nutritious snacking, Packed with 9 grams of protein per serving, 100-calorie packets.", 
	"Loaded with protein yet low in calories, our Roasted Soy Nuts make a great anytime, anywhere snack. Portion-controlled servings list nutritional information on each packet. Available in zesty Chile Lime or Salted flavors.",
	"Enjoy one or two packets of nutritious Roasted Soy Nuts as a daily snack.",
	"../imagenes/productos/ingles/1/120406_sku3143_us_400.jpg" 
	]);
tx.executeSql('INSERT INTO ProductosUsa (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
	"1", 
	"Protein Bar Deluxe", 
	"1", 
	"Raise the bar when it comes to snacks. Indulge in milk chocolate while remaining guilt-free with Protein Bar Deluxe – a snack that’s as delicious as it is nutritious!", 
	"Vanilla, Lemon, Chocolate.", 
	"Rich, chewy bars satisfy hunger and sustain energy. Helps build and maintain lean muscle. Essential vitamins and 10g of healthy protein. No artificial sweeteners and just 140 calories per bar.", 
	"Protein Bar Deluxe is packed with essential vitamins and 10g of healthy protein to keep you feeling full while helping build and maintain lean muscle. Available in three chocolate-covered flavors: Chocolate Peanut, Vanilla Almond and Citrus Lemon.",
	"Two bars a day for healthy snacking and weight loss. For variety, also try our other delicious protein-rich snacks.",
	"../imagenes/productos/ingles/1/0364_proteinbardeluxe_vanillaalmond_400_us.jpg" 
	]);
tx.executeSql('INSERT INTO ProductosUsa (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
	"1", 
	"Protein Bar", 
	"1", 
	"Get your protein to go! Protein Bar is an ideal protein snack to give you a boost on the go. This deliciously chewy bar is packed with soluble fiber, vitamins and minerals to help control hunger. ", 
	"Peanut Butter, Chocolate, Coconut Chocolate, Fudge.", 
	"Chewy bar with 23 vitamins and minerals. 12g of healthy soy and whey protein blend, and fiber. Helps sustain energy and control appetite.", 
	"When trying to lose weight or maintain your health, you need a nutritious snack that accommodates your busy lifestyle. Herbalife® Protein Bars have 12 grams of protein, plus vitamins and minerals to help you curb your appetite and keep up your energy. ",
	"One or two bars a day for healthy snacking and weight loss. For variety, also try our other delicious protein-rich snacks.",
	"../imagenes/productos/ingles/1/120906_sku0290_us_400.jpg" 
	]);
tx.executeSql('INSERT INTO ProductosUsa (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
	"1", 
	"Creamy Chicken Soup Mix", 
	"1", 
	"Enjoy a hearty pick-me-up. Creamy Chicken Soup Mix allows you to whip up a satisfying chicken-flavored soup in a matter of minutes. It’s instant and good for you! ", 
	"Creamy Chicken.", 
	"16g of protein. Only 80 calories.", 
	"High-protein foods help you feel fuller longer. This low-calorie soup mixes easily with water so you can eat healthy and curb your appetite, whether you’re at home or on the go. ",
	"Empty contents of one packet into a large cup or mug. Add 6 to 8 fl. oz. of very hot water and stir until smooth. For microwave preparation, empty contents of one packet into microwave-safe cup or bowl. While stirring, slowly add 6 to 8 fl. oz. of cold water. Heat at high power for 1 to 1 1/2 minutes and enjoy! For variety, also try our other delicious protein-rich snacks. ",
	"../imagenes/productos/ingles/1/0291_soupmix_400_us.jpg"
	]);
tx.executeSql('INSERT INTO ProductosUsa (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
	"1", 
	"Beverage Mix Canister", 
	"1", 
	"Enjoy an energy burst with this fruity cool Beverage Mix. Just add it to cold water for a refreshingly delicious way to enjoy a low-calorie, healthy snack that helps satisfy hunger pangs anytime. Available in Peach Mango and Wild Berry flavors. ", 
	"Wild Berry, Peach Mango.", 
	"15 grams of high-quality whey protein. 70 calories per serving. 0 Sugar.", 
	"Powered with vitamins and minerals for energy and health, this refreshing low-calorie drink comes in two delicious flavors to satisfy your hunger and thirst – wherever you are. ",
	"Blend or stir 2 scoops (19.5g) of Beverage Mix with 8 fl oz of cold water and enjoy. Take mid-morning and/or mid-afternoon to help both satisfy cravings and meet your daily personal protein requirements. ",
	"../imagenes/productos/ingles/1/113010_sku3119_us_400.jpg" 
	]);
	//////////////////////////////CATEGORIA 2////////////////////////////////////
	tx.executeSql('INSERT INTO ProductosUsa (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
		"1", 
		"Core Complex with CoQ10 Plus", 
		"2", 
		"Target the four key indicators of heart health: cholesterol, triglycerides, homocysteine and oxidative stress.", 
		"N/A", 
		"Maintains healthy cholesterol and triglyceride levels already within a normal range Provides antioxidant protection Provides energy to heart cells Contains B Vitamins help to maintain healthy homocysteine levels that are already within a normal range", 
		"Each packette contains 2 brown softgels of plant sterols and B Vitamins; 1 CoQ10 Plus softgel; 1 burgundy Tri-Shield® softgel with 100% pure Neptune Krill Oil (NKO®†); and 2 gold Herbalifeline® fish oil softgels with Omega-3 fatty acids.",
		"Take 1 packette per day with a meal and set aside 1 brown plant sterols softgel for consumption with a later meal.",
		"../imagenes/productos/ingles/2/1096_corecomplex_400_us.jpg" 
		]);
tx.executeSql('INSERT INTO ProductosUsa (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
	"1", 
	"CoQ10 Plus Softgel Dietary Supplement ", 
	"2", 
	"CoQ10 Plus offers a proprietary blend of ingredients that support heart health by protecting against cell deterioration. CoQ10 Plus is made from a powerful, exclusive formulation of CoQ10, Vitamin D and DHA.", 
	"N/A", 
	"Protects against cell deterioration in the heart, and helps strengthen heart cells by converting fats and carbs into energy.", 
	"With age, the body’s natural production of CoQ10 decreases, making CoQ10 crucial to protecting against cell deterioration, supporting energy production, and providing antioxidant protection.1,2 In addition to Vitamin D and non-fish essential fatty acid DHA – from algae – CoQ10 Plus includes Hawthorn berry, which contributes to the overall antioxidant benefit. CoQ10 Plus is endorsed by Dr. Lou Ignarro†, Nobel Laureate in Medicine®§. ",
	"Take one softgel daily.",
	"../imagenes/productos/ingles/2/1500_coq10plus_400_us.jpg" 
	]);
tx.executeSql('INSERT INTO ProductosUsa (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
	"1", 
	"Niteworks® Powder Mix ", 
	"2", 
	"This refreshing nighttime powder mix supports energy, circulatory and vascular health, and helps with Nitric Oxide (NO) production at night when NO levels are lowest.", 
	"Orange-Mango.", 
	"Supports blood flow, for the healthy function of the heart, brain and other organs. Helps keep blood vessels toned and flexible for healthy vascular function. Offers the combined benefits of L-arginine and L-citrulline to support Nitric Oxide production.", 
	"Developed with Nobel† Laureate in Medicine Dr. Lou Ignarro,‡ Niteworks® supports your body’s ability to produce Nitric Oxide (NO), for improved circulatory, immune and nervous system functions. ",
	"Mix two scoops (2 teaspoons or about 10 g) in 8 oz of cold water. May also be mixed with sparkling water or juice. Drink at night or before bedtime.",
	"../imagenes/productos/ingles/2/3150us_niteworkspow_400.jpg" 
	]);
tx.executeSql('INSERT INTO ProductosUsa (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
	"1", 
	"Tri-Shield® ", 
	"2", 
	"A proprietary formula with 100% pure Neptune Krill Oil (NKO®†), the three heart-healthy compounds in Tri-Shield® help protect your heart. ", 
	"N/A", 
	"Helps maintain healthy cholesterol levels already within a normal range with three heart-healthy compounds. Provides powerful antioxidant protection for the heart.", 
	"Neptune Krill Oil helps support the heart muscle, protect cell membrane health and maintain cholesterol levels already within a normal range.",
	"Take one softgel, one to two times per day.",
	"../imagenes/productos/ingles/2/121108_sku0100_us_400.jpg" 
	]);
tx.executeSql('INSERT INTO ProductosUsa (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
	"1", 
	"Herbalifeline® ", 
	"2", 
	"This exclusive blend of highly refined marine lipids contains Omega-3 fatty acids, especially eicosapentaenoic acid (EPA) and docosahexaenoic acid (DHA). ", 
	"N/A", 
	"Omega-3 fatty acids may reduce the risk of heart disease and support joint health.", 
	"Omega-3 fatty acids help to maintain a healthy cardiovascular system by maintaining cholesterol and triglyceride levels already within normal range. ",
	"Take one softgel, two or three times per day, preferably with a meal. ",
	"../imagenes/productos/ingles/2/0065us_herbalifelinegel_400.jpg" 
	]);
tx.executeSql('INSERT INTO ProductosUsa (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
	"1", 
	"Mega Garlic Plus", 
	"2", 
	"Maintaining a healthy heart is important to keeping a fit and active lifestyle. Mega Garlic Plus supports circulation and cardiovascular health, releasing active ingredients once through the stomach for full absorption. ", 
	"N/A", 
	"Supports healthy circulation and heart health. Each tablet supplies the powerful benefits of one whole garlic clove.", 
	"Mega Garlic Plus is enteric-coated for absorption where you need it, and provides anti-oxidant protection for your body. ",
	"Take one tablet per day with a meal.",
	"../imagenes/productos/ingles/2/0032us_megagarlic_400.jpg" 
	]);
tx.executeSql('INSERT INTO ProductosUsa (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
	"1", 
	"Xtra-Cal® Advanced", 
	"2", 
	"Support strong bones and teeth with Xtra-Cal ® Advanced. This supplement is formulated to aid the absorption and digestion of calcium and to support healthy aging.", 
	"N/A", 
	"Helps build strong bones and maintain bone density and healthy teeth. Three easy-to-swallow tablets supply 100% of the Daily Value (100%DV) for calcium and Vitamin D. Provides Vitamin D for improved calcium absorption. Contains rose hips and turmeric for antioxidant support.", 
	"Xtra-Cal ® Advanced tablets help maintain bone density, which declines as you age, with a unique formula of vitamins, minerals and herbs for optimum absorption of calcium and for antioxidant support. ",
	"Take one tablet three times a day with meals as a dietary supplement. ",
	"../imagenes/productos/ingles/2/us_x-cal_adv_400.jpg" 
	]);
tx.executeSql('INSERT INTO ProductosUsa (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
	"1", 
	"Woman’s Choice", 
	"2", 
	"Supports comfort and well-being for women during monthly hormonal fluctuations and menopause, in just one tablet per day. ", 
	"N/A", 
	"For menopausal support.", 
	"Hot flashes, sleepless nights and irritability are some of the symptoms associated with the transition to menopause. Enhanced Woman’s Choice formula includes a blend of soy, Kudzu root and Chasteberry to help reduce the severity of perimenopausal symptoms.",
	"Take one tablet daily. Combine with Herbalife® Xtra-Cal® Advanced and Tang Kuei Plus to further promote women’s health.",
	"../imagenes/productos/ingles/2/110513_sku1061_400_us.jpg" 
	]);
tx.executeSql('INSERT INTO ProductosUsa (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
	"1", 
	"Triple Berry Complex", 
	"2", 
	"Help maintain urinary tract health with Triple Berry Complex’s exclusive blend of whole cranberries, blueberries and bilberry fruit.", 
	"N/A", 
	"Provides antioxidants and dietary support for urinary tract health. Super-powered antioxidant formula with concentrated cranberries, blueberries and bilberries.", 
	"Women often need help maintaining urinary tract health. Research has shown that cranberries can provide support. Enjoy their antioxidant benefits with a powerhouse of other antioxidants in an easy, once-a-day tablet.",
	"Take one or two capsules a day.",
	"../imagenes/productos/ingles/2/0279us_tripleberry_400.jpg" 
	]);
tx.executeSql('INSERT INTO ProductosUsa (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
	"1", 
	"Tang Kuei Plus", 
	"2", 
	"Support smooth muscle relaxation with Tang Kuei Plus. This herbal blend of tang kuei root and passionflower also helps ease premenstrual discomfort by supporting smooth muscle relaxation.", 
	"", 
	"Helps ease PMS discomfort. Helps relax smooth muscle. Supports the female reproductive system",
	"Tang Kuei Plus supports smooth muscle relaxation, and has relaxing properties that help ease PMS discomfort.",
	"Take one tablet three times per day.",
	"../imagenes/productos/ingles/2/0566_tang-kuei-plus-0566us-00-op1-100cc_400.jpg" 
	]);
tx.executeSql('INSERT INTO ProductosUsa (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
	"1", 
	"Male Factor 1000® ", 
	"2", 
	"Male Factor 1000® capsules contain a proprietary blend of oat extract with nettle, ginseng, calcium and Vitamin C.", 
	"N/A", 
	"Proprietary formula that includes nettle, ginseng, calcium and Vitamin C.", 
	"Male Factor 1000® capsules include an exclusive blend of herbs and nutrients.",
	"Take one capsule two times per day with water as a dietary supplement. ",
	"../imagenes/productos/ingles/2/111007_sku0024_us_400.jpg" 
	]);
tx.executeSql('INSERT INTO ProductosUsa (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
	"1", 
	"Prelox®† Blue ", 
	"2", 
	"Circulatory function is important to men's reproductive health. Prelox®† Blue tablets offers men of all ages support for good circulation.", 
	"N/A", 
	"Protects blood vessel and circulatory health. Nutritional support for male sexual health. Formula helps increase blood flow for sexual performance.",
	"By supporting circulation and blood flow, Prelox®† Blue tablets, made with a blend of ingredients, can support reproductive health. Contains L-arginine, which targets the health of your blood vessels and circulation, and Pycnogenol®†, a potent antioxidant that may help slow down the damaging effects of free radicals upon the circulatory system.",
	"Take two tablets twice a day for at least 14 days and then one to two tablets twice a day thereafter. ",
	"../imagenes/productos/ingles/2/0039us_preloxbl_400.jpg" 
	]);
tx.executeSql('INSERT INTO ProductosUsa (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
	"1", 
	"Ultimate Prostate Formula ", 
	"2", 
	"Support proper urinary function with Ultimate Prostate Formula's potent blend of prostate support factors and free fatty acids (FAAs) extracted from saw palmetto berries.", 
	"N/A", 
	"Promotes healthy prostate and urinary function. Contains saw palmetto and lycopene. Boosts antioxidant protection.", 
	"Prostate problems increase as men reach age 40 and older, but younger men are not immune to unhealthy prostate glands. Protect prostate health with a superior blend of antioxidants, herbs and phytonutrients that supports prostate and urinary health.",
	"Take one softgel daily.",
	"../imagenes/productos/ingles/2/0165us_ultprostate_400.jpg" 
	]);
tx.executeSql('INSERT INTO ProductosUsa (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
	"1", 
	"Kids Shakes", 
	"2", 
	"Herbalife Kids™ Shakes provide essential nutrition including protein, fiber and 100% of key nutrients to meet growing kids’ daily needs. Because they taste great, kids will ask for one every day—that’s the start of healthy eating habits they’ll rely on as they grow older.", 
	"Vanilla, Strawberry, Chocolate.", 
	"100% of key nutrients plus protein and fiber. No artificial colors, flavors or sweeteners! Herbs and botanicals, including soothing chamomile, ginger (which aids digestion), plus rosehips and acerola–two powerful antioxidants. Quick to make and easy to take on the go. Kids love the TASTE!", 
	"Great-tasting shakes with 17 essential vitamins & minerals kids need every day, plus protein and fiber. Excellent source of calcium, B-complex vitamins and antioxidant Vitamins A, C & E. 15g of protein (6g from powder + 9g from milk/soy milk). Good source of fiber.",
	"Enjoy as a snack or as part of a healthy meal. ",
	"../imagenes/productos/ingles/2/111220_sku0367.jpg" 
	]);
tx.executeSql('INSERT INTO ProductosUsa (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
	"1", 
	"MultiVites", 
	"2", 
	"MultiVites fruit-flavored chewable multivitamins provide 100% Daily Value of key nutrients to meet growing kids’ daily needs. Fun sports shapes keep kids coming back for more. ", 
	"Raspberry & Grape",
	"100% of key nutrients. No artificial colors, flavors or sweeteners! Herbs and botanicals, including soothing chamomile, ginger (which aids digestion), plus rosehips and acerola–two powerful antioxidants. Kids love the TASTE!", 
	"Excellent source of B-complex vitamins, iron, zinc and antioxidant Vitamins A, C & E. Fun sports shapes.",
	"Take two chewable tablets daily.",
	"../imagenes/productos/ingles/2/121108_sku0328_us_400.jpg" 
	]);
tx.executeSql('INSERT INTO ProductosUsa (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
	"1", 
	"Kindermins®", 
	"2", 
	"Kindermins® fruit-flavored liquid multivitamin, for children ages 6 months to 3 years, provides 11 essential vitamins infants and toddlers need every day to promote healthy growth and development. ", 
	"Fruit-flavored", 
	"100% of infant Daily Value for 11 key nutrients, plus lutein. Natural fruit flavor. No artificial colors, flavors or sweeteners. Kid-friendly botanical blend, including soothing chamomile and ginger, plus rose hips and acerola.", 
	"Kindermins® is formulated with lutein, which provides antioxidant activity that may support eye health, and is powered with 100% of the suggested infant Daily Value of 11 essential vitamins and minerals. ",
	"Shake gently before each use. For children ages 6 months to 3 years, give one full dropper (1 mL) per day. Dispense directly into mouth or add to beverages or foods. Do not exceed recommended dose.",
	"../imagenes/productos/ingles/2/121108_sku0005_us_400.jpg" 
	]);
tx.executeSql('INSERT INTO ProductosUsa (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
	"1", 
	"Joint Support Advanced", 
	"2", 
	"Contains glucosamine for advanced joint support, along with an exclusive herb-mineral blend for antioxidant benefits", 
	"N/A", 
	"Contains glucosamine to support healthy joint function and comfort. Contains the herb scutellaria for antioxidant and healthy aging benefits. Excellent source of manganese, selenium and copper to support the body’s natural antioxidant activities. Three easy-to-swallow tablets daily. ", 
	"Age and an active lifestyle can make people more prone to joint problems. Protect and cushion joints with a specially formulated blend of glucosamine, antioxidant-enhancing scutellaria root, and an advanced blend of selenium, manganese and copper to offer the body healthy aging benefits.",
	"Take one tablet, three times a day. For optimal joint health, use with Herbalifeline® (which contains Omega-3 fatty acids for joint health).",
	"../imagenes/productos/ingles/2/us_joint_sup_400.jpg" 
	]);
tx.executeSql('INSERT INTO ProductosUsa (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
	"1", 
	"Ocular Defense Formula", 
	"2", 
	"Combines antioxidant Vitamins A (as beta-carotene), C and E with lutein to support eye health.", 
	"N/A", 
	"Support eye health during aging. Help support healthy vision. Provide nutrition for the eye.", 
	"This formula includes lutein, which is concentrated in the macula to support eye health.",
	"Take one tablet per day.",
	"../imagenes/productos/ingles/2/oculardefense_0064_us_400.jpg" 
	]);
tx.executeSql('INSERT INTO ProductosUsa (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
	"1", 
	"Active Fiber Complex ", 
	"2", 
	"A healthy powder to support regularity and bowel function.", 
	"Apple, Unflavored.", 
	"Promotes regularity and healthy bowel movement. Supports growth of friendly intestinal bacteria. 5g of balanced soluble and insoluble fiber. Add to Formula 1 for a thicker, smoother shake",
	"One serving provides 5g of the recommended 25- to 35-gram daily intake of soluble and insoluble fiber.",
	"Enjoy Apple flavor with water, or either Apple or unflavored mixed with your favorite beverage.",
	"../imagenes/productos/ingles/2/2864_activefibercomplex_apple_400_us.jpg" 
	]);
tx.executeSql('INSERT INTO ProductosUsa (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
	"1", 
	"Herbal Aloe Powder ", 
	"2", 
	"A refreshing aloe powder mix that calms the digestive tract and provides immunity support. Great for on-the-go usage since no refrigeration is required.", 
	"Mango, Abe.", 
	"Relieves occasional indigestion. Improves nutrient absorption. Enhances intestinal health. Supports the immune system. Contains antioxidants.",
	"Powder available in lightly flavored Mango Accent or Aloe Accent flavors. ",
	"Mix one scoop with 8 ounces of water or to taste – or add to your favorite shake, tea or juice.",
	"../imagenes/productos/ingles/2/121108_sku2748_us_400.jpg" 
	]);
tx.executeSql('INSERT INTO ProductosUsa (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
	"1", 
	"Herbal Aloe Concentrate Mango", 
	"2", 
	"Supports healthy digestive function by soothing the stomach and alleviating occasional indigestion. ", 
	"Mango.", 
	"Relieves occasional indigestion. Improves nutrient absorption. Enhances intestinal health. Contains antioxidants.", 
	"Herbal Aloe Concentrate is made from the aloe plant which contains natural enzymes, vitamins, minerals, and amino acids that help support healthy digestion",
	"Mix 3 capfuls (15 ml) with 120 ml (4 fl. oz.) water. To prepare 1 quart of ready-to-consume drink, mix 1/2 cup (120 ml) concentrate with 1 qt. water. Refrigerate product after opening.",
	"../imagenes/productos/ingles/2/111007_sku1188_us_400.jpg" 
	]);
tx.executeSql('INSERT INTO ProductosUsa (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
	"1", 
	"Herbal Aloe Concentrate", 
	"2", 
	"Supports healthy digestive function by soothing the stomach and alleviating occasional indigestion.", 
	"Original, Mango", 
	"Relieves occasional indigestion. Improves nutrient absorption. Enhances intestinal health. Contains antioxidants.", 
	"Herbal Aloe Concentrate is made from the aloe plant which contains natural enzymes, vitamins, minerals, and amino acids that help support healthy digestion.",
	"Mix 3 capfuls (15 ml) with 120 ml (4 fl. oz.) water. To prepare 1 quart of ready-to-consume drink, mix 1/2 cup (120 ml) concentrate with 1 qt. water. Refrigerate product after opening.",
	"../imagenes/productos/ingles/2/1007_sku0006_hac_400.jpg" 
	]);
tx.executeSql('INSERT INTO ProductosUsa (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
	"1", 
	"Ready Herbal Aloe", 
	"2", 
	"Supports healthy digestive function by soothing the stomach and alleviating occasional indigestion.", 
	"N/A", 
	"Relieves occasional indigestion. Improves nutrient absorption. Enhances intestinal health. Contains antioxidants.", 
	"Ready Herbal Aloe is made from the aloe plant which contains natural enzymes, vitamins, minerals, and amino acids that help support healthy digestion.",
	"Use daily, mix with water, juice or drink straight. Also enjoy the benefits of aloe for skin and hair with Herbalife's Herbal Aloe Skin and Hair Care. Refrigerate product after opening. ",
	"../imagenes/productos/ingles/2/111013_sku0002_400.jpg" 
	]);
tx.executeSql('INSERT INTO ProductosUsa (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
	"1", 
	"Florafiber", 
	"2", 
	"Replenish intestinal flora and help promote intestinal health with fiber and friendly bacteria.", 
	"N/A", 
	"Support your digestive health. Provides friendly bacteria for intestinal health", 
	"Fiber-poor diets can promote fat absorption and slow weight loss, allowing intestinal yeast and fungus growth. A Florafiber tablet introduces lactobacillus acidophilus, a friendly bacteria for healthy colon function.",
	"Take one tablet three times daily preferably 1/ 2 hour before meals with a full glass of water. Take up to six tablets per day. ",
	"../imagenes/productos/ingles/2/121108_sku0023_us_400.jpg" 
	]);
tx.executeSql('INSERT INTO ProductosUsa (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
	"1", 
	"21-Day Herbal Cleansing Program ", 
	"2", 
	"Digestive issues can affect weight, energy, immunity and skin. Jump start healthy digestion with our enhanced 21-Day Herbal Cleansing program – which contains healthy antioxidants and herbs traditionally used to promote digestive balance: AM Replenishing Formula – A morning tablet with Milk Thistle, which helps promote the body’s natural elimination of toxins. PM Cleansing Formula – An evening tablet that contains Dandelion, traditionally used to support healthy elimination.", 
	"N/A", 
	"Healthy antioxidants. Helps reduce damage of free radicals. Fruit fiber for roughage.", 
	"A proprietary herbal blend including antioxidants and fiber, such as lemon, pectin and grapefruit bioflavonoids.",
	"Take two AM tablets as a dietary supplement with full glass of water at breakfast. Take one or more PM tablets with full glass of water at bedtime.",
	"../imagenes/productos/ingles/2/010711_sku1154_us.jpg" 
	]);
tx.executeSql('INSERT INTO ProductosUsa (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
	"1", 
	"Specialized Internal Program", 
	"2", 
	"Daily inner maintenance for a healthier system.", 
	"N/A", 
	"Aloe and fiber support digestive health. Probiotics help balance intestinal flora. Antioxidants offer cellular protection.", 
	"Looking and feeling your best begins with maintaining good internal health. The program combines three of our prime herbal-based formulas, Herbal Aloe Drink, FloraFiber and Schizandra Plus, to help promote optimal fitness from the inside. ",
	"Combine with Cellular Nutrition for overall well-being.",
	"../imagenes/productos/ingles/2/1035us_specinternal_400.jpg" 
	]);
tx.executeSql('INSERT INTO ProductosUsa (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
	"1", 
	"Digestive Health Program", 
	"2", 
	"3-in-1 program includes Herbal Aloe Concentrate, 21-Day Herbal AM/PM Cleansing Program and Florafiber.", 
	"Mango", 
	"Includes premium aloe to support digestive health with organic nutrients and enzymes. Helps eliminate toxins. Replenishes intestinal flora.", 
	"The intestinal system performs three key functions: eliminating toxins, growing friendly bacteria and absorbing nutrients. Our 3-in-1 Digestive Health Program supports healthy gastrointestinal function by aiding these digestive needs.",
	"Combine with Cellular Nutrition to promote overall well-being. ",
	"../imagenes/productos/ingles/2/4081_digesthealthprog_400.jpg" 
	]);
tx.executeSql('INSERT INTO ProductosUsa (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
	"1", 
	"Garden 7® Phytonutrient Supplement ", 
	"2", 
	"Eating enough phytonutrients found in fruits and vegetables? Supplement your phytonutrient intake with Garden 7®.", 
	"N/A", 
	"Helps nourish cells and organs so they function properly. Delivers 7+ phytonutrients like those found in fruits and vegetables. Contains powerful antioxidants Vitamins A (as beta-carotene) and C.", 
	"Consuming phytonutrients found in fruits and vegetables each day is difficult. Just one Garden 7® tablet three times a day allows the body to get important nutrition needed for optimal health.",
	"Take one tablet three times a day to ensure you get phytonutrients like those found in fruits and vegetables. ",
	"../imagenes/productos/ingles/2/garden7_3272_400.jpg" 
	]);
tx.executeSql('INSERT INTO ProductosUsa (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
	"1", 
	"RoseGuard", 
	"2", 
	"An exclusive blend of herbs (rosemary, turmeric and astragalus) and vitamins to support healthy liver and immune function.", 
	"N/A", 
	"Supports your body’s natural defense against environmental toxins. Provides antioxidant support throughout the day. Contains astragalus, traditionally used to support healthy liver function. Helps recycle the antioxidant activity of Vitamin E.", 
	"The body is exposed daily to pollution and other environmental toxins. RoseGuard supports the body’s natural defense against environmental toxins, while providing antioxidant support throughout the day.",
	"Take one tablet in the morning and one in the afternoon, preferably with a meal. Combine with Schizandra Plus to further promote good health. ",
	"../imagenes/productos/ingles/2/120424_sku0139_rosegauard_400.jpg" 
	]);
tx.executeSql('INSERT INTO ProductosUsa (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
	"1", 
	"Schizandra Plus", 
	"2", 
	"A proprietary blend of schisandra, selenium and vitamins to fight free radicals and support immunity and cellular health.", 
	"N/A", 
	"Provides general antioxidant support against free radicals. Supports the body’s natural defense against oxidative stress. Supports immunity and cellular health.",
	"The body is exposed daily to free radicals, which can cause cellular damage. Antioxidants contained in Schizandra Plus help combat free radicals, and support the body’s natural defense against oxidative stress.",
	"Take one tablet two times per day. Combine with Herbalife’s RoseGuard to further promote good health. ",
	"../imagenes/productos/ingles/2/121112_sku0022_us_400.jpg" 
	]);
tx.executeSql('INSERT INTO ProductosUsa (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
	"1", 
	"Best Defense®", 
	"2", 
	"An effervescent drink¹ that boosts your immunity.", 
	"Orange Boost, Citrus Mint.", 
	"Robust, standardized source of immune-boosting echinacea. 1,000 mg Vitamin C, a powerful antioxidant. 25 mg zinc sulfate to stimulate your cellular immune defense. Convenient and portable for on-the-go use.", 
	"Support your body’s resistance with Best Defense® as soon as you begin to feel under the weather, before entering crowded environments, or whenever you feel stressed. Just one tablet up to twice a day helps you feel better…and stay that way!",
	"Great hot or cold. Enjoy two natural flavors. 1 to 2 times daily ",
	"../imagenes/productos/ingles/2/1503us_bestdef_400.jpg" 
	]);
tx.executeSql('INSERT INTO ProductosUsa (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
	"1", 
	"Hand Sanitizer", 
	"2", 
	"Kill germs instantly with our convenient on-the-go size Hand Sanitizer. It’s ideal for meetings, travel, school activities, Nutrition Clubs, Weight Loss Challenges, and sampling and sporting events.", 
	"N/A", 
	"Alcohol and triclosan-free spray. Kills 99.99% of common germs in seconds. Fits in your pocket, purse or travel bag. Gentle botanical blend won’t strip away the healthy oils in your skin.", 
	"N/A",
	"N/A",
	"../imagenes/productos/ingles/2/0434_handsanitizer_400_011513.jpg" 
	]);
tx.executeSql('INSERT INTO ProductosUsa (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
	"1", 
	"Relax Now ", 
	"2", 
	"A powerful herbal formula, Relax Now helps you de-stress and get more out of life. Helps promote a sense of well-being.", 
	"N/A", 
	" Calm stressed nerves naturally. Helps promote a sense of well-being", 
	"It’s hard to get the break we need to unwind and de-stress. Relax Now includes the proprietary power of jujube seed, passionflower and ashwagandha to help relieve stress and relax your body naturally.",
	"Take one to two tablets a day. Use with Sleep Now for a restful night's sleep.",
	"../imagenes/productos/ingles/2/0055_relax_now_011513.jpg" 
	]);
tx.executeSql('INSERT INTO ProductosUsa (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
	"1", 
	"Sleep Now ", 
	"2", 
	"Passionflower, melatonin, valerian, hops and lavender help promote relaxation for better sleep. Non-addictive formula helps you rest easy.", 
	"N/A", 
	"Enjoy a good night’s sleep – naturally. Regulate the sleep-wake cycle. Rest without drowsy side effects.", 
	"Chronic loss of sleep leads to fatigue, anxiety, restlessness, poor performance and even depression. Formulated with melatonin and an exclusive herbal blend to help normalize sleeping patterns so you can get more rest throughout the night.",
	"For adults, take one or two tablets 30 minutes before going to sleep. Do not exceed suggested serving. ",
	"../imagenes/productos/ingles/2/0138us_sleepnow_400.jpg" 
	]);
	//////////////////////////////CATEGORIA 3////////////////////////////////////
	tx.executeSql('INSERT INTO ProductosUsa (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
		"1", 
		"H³0® Fitness Drink", 
		"3", 
		"H³0® Fitness Drink is the next generation of hydration providing 1) rapid hydration, 2) sustained energy plus 3) antioxidant protection so you feel refreshed and energized all day long! Enjoy whenever you are thirsty or anytime you are physically active.", 
	"Orangeade Canister, Lemonade, Lemonade Canister, Orangeade.", 
	"Que ches thirst and replaces lost fluids. Essential electrolytes support cellular re-hydration. Energizing carbs for immediate and sustained energy. Powerful antioxidants protect your body from fatigue and soreness. No caffeine and a healthier alternative to high-calorie/high-sugar beverages.", 
	"Contains antioxidant Vitamins A, C and E. 70% more potassium than the leading competitor. Naturally derived source of sugar. Customizable to meet individual fitness or activity level and duration. Stick packs are convenient and portable for on-the-go use.",
	"Enjoy whenever you are thirsty, need to hydrate or when you are physically active. ",
	"../imagenes/productos/ingles/3/121108_sku2745_us_400.jpg" 
	]);
tx.executeSql('INSERT INTO ProductosUsa (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
	"1", 
	"Liftoff®", 
	"3", 
	"Increase energy and improve mental clarity for better performance throughout the day with this effervescent energy drink.", 
	"Lemon-Lime Blast, Ignite-Me Orange, Ignite-Me Orange, Lemon-Cola Kick, Tropical-Fruit Force.", 
	"0 sugar, 0 calories. 4 carbs Stay alert and focused. Improve short-term memory. Individually packaged tablets for on-the-go lifestyles.", 
	"Liftoff® is an exclusive blend of L-taurine, guarana, caffeine, Panax ginseng and Ginkgo biloba clinically proven to enhance mental performance and boost energy. Convenient, pocket-size tablet provides a mind-body boost anytime, anywhere.",
	"Just drop one tablet in 8 fl. oz. of cool water and let dissolve. Enjoy 1-2 servings per day.",
	"../imagenes/productos/ingles/3/121108_sku3152_us_400.jpg" 
	]);
tx.executeSql('INSERT INTO ProductosUsa (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
	"1", 
	"N-R-G Nature's Raw Guarana Tea ", 
	"3", 
	"Get a natural pick-me-up with this zesty yet gentle, uplifting tea – infused with guarana. Guarana seeds can increase mental alertness and help maintain energy.", 
	"N/A", 
	"Boost your energy level. Increase mental alertness. Enjoy hot or cold.", 
	"Infused with guarana – an ancient, Amazonian seed with properties similar to caffeine, N-R-G boosts your energy naturally, while helping improve mental alertness. Easily mixes with water and can be enjoyed hot or cold.",
	"Mix 1/ 2 teaspoon with 6 fl. oz. of hot or cold water. N-R-G is also available in tablets. ",
	"../imagenes/productos/ingles/3/120925_sku0102_us_400.jpg" 
	]);
tx.executeSql('INSERT INTO ProductosUsa (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
	"1", 
	"N-R-G Nature's Raw Guarana Tablets", 
	"3", 
	"Get a natural pick-me-up with the benefits of guarana in a convenient tablet. Guarana seeds can increase mental alertness and help maintain energy.", 
	"N/A", 
	"Boost your energy level. Increase mental alertness.", 
	"Make it through your busy day with a burst of energy from N-R-G. Infused with guarana – an ancient, Amazonian seed with properties similar to caffeine – N-R-G boosts your energy naturally, while helping improve mental alertness.",
	"Take one tablet up to four times per day. N-R-G is also available as an instant tea that can be enjoyed hot or cold.",
	"../imagenes/productos/ingles/3/121112_sku0122_us_400.jpg" 
	]);
tx.executeSql('INSERT INTO ProductosUsa (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
	"1", 
	"Herbalife24 Formula 1 Sport ", 
	"3", 
	"Balanced with carbohydrates, proteins, vitamins and minerals, Formula 1 Sport provides a healthy meal for athletes.", 
	"Creamy Vanilla.", 
	"20 vitamins and minerals. Milk protein supports lean muscle mass. Moderate glycemic carbohydrate blend provides immediate and sustained energy. L-Glutamine supports muscle growth and immune function. Antioxidant protection", 
	"Formula 1 Sport establishes a solid nutritional foundation that supports quality athletic performance. Taken any time during the day, this nutritious meal is specifically formulated for athlete’s daily dietary needs. ",
	"Blend or stir 2 scoops (26g) of Formula 1 Sport with 8 fl oz of water or nonfat milk. ",
	"../imagenes/productos/ingles/3/110524_sku1412_400_us.jpg" 
	]);
tx.executeSql('INSERT INTO ProductosUsa (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
	"1", 
	"Herbalife24 Hydrate ", 
	"3", 
	"Hydrate provides a low-calorie source of bioavailable electrolytes designed for advanced hydration.", 
	"Tangerine Citrus", 
	"Low-calorie hydration anytime for anyone. Bioavailable electrolytes for rapid body fluid restoration. B Vitamins support carbohydrate metabolism. Antioxidant support from. Vitamin C ",
	"Hydrate includes only 1 g of sugar plus B vitamins, and Vitamin C to enhance fluid absorption and ensure you are hydrated. Whatever your activity level, you can use Hydrate at any time during the day – morning, during workouts or even at night. ",
	"Mix 1 stick pack with 16 fl oz of water. ",
	"../imagenes/productos/ingles/3/110524_sku1413_400_us.jpg" 
	]);
tx.executeSql('INSERT INTO ProductosUsa (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
	"1", 
	"Herbalife24 Prolong ", 
	"3", 
	"Sustain performance with dual-source carbohydrates and electrolytes.", 
	"Subtle Lemon", 
	"A dual-source blend of maltodextrin and low glycemic fructose facilitates carbohydrate utilization. A 12:1 carbohydrate-to-protein ratio with ultrapure whey protein isolate helps reduce muscle breakdown during exercise. Bioavailable electrolytes help maintain a cellular environment for proper muscle contraction. B Vitamins support carbohydrate metabolism. 500% daily value of Vitamin C to scavenge cell-damaging free radicals", 
	"Prolong’s dual-source blend of carbohydrates facilitates caloric utilization for sustained performance. Whey protein acts as a protective measure, reducing muscle breakdown during prolonged exercise, while electrolytes maintain a cellular environment for proper muscle function.",
	"Consume Prolong during high-intensity or extended exercise",
	"../imagenes/productos/ingles/3/110524_sku1415_400_us.jpg" 
	]);
tx.executeSql('INSERT INTO ProductosUsa (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
	"1", 
	"Herbalife24 Rebuild Endurance ", 
	"3", 
	"Glycogen replacement and muscle recovery.", 
	"Vanilla.", 
	"Tri-core protein-amino blend of free amino acids, whey and casein proteins create a sustained muscle-building state. Rapid and sustained-release carbohydrate blend replenishes glycogen while providing a steady insulin response. Branched-chain amino acids support muscle recovery. Carnitine speeds muscle recovery. Glutamine supports immune function and promotes muscle repair", 
	"Recovering after intense aerobic activity requires both replenishing glycogen and rebuilding muscle. Rebuild endurance contains an engineered blend of carbohydrates to help jumpstart glycogen replenishment. A tri-core protein-amino blend of free amino acids, whey and casein proteins, help rebuild muscle and speed recovery.",
	"Consume Rebuild Endurance immediately following aerobic exercise.",
	"../imagenes/productos/ingles/3/110524_sku1416_400_us.jpg" 
	]);
tx.executeSql('INSERT INTO ProductosUsa (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
	"1", 
	"Herbalife24 Rebuild Strength", 
	"3", 
	"Immediate and sustained muscle recovery.", 
	"Chocolate.", 
	"24 g whey and casein proteins create a rapid and sustained protein-building state. Tri-core protein-amino blend of free amino acids, whey and casein proteins help rebuild muscle and speed recovery. Iron essential for red blood cell protection. Branched-chain amino acids (BCAAs) support muscle growth. L-glutamine supports immune function and promotes muscle repair.", 
	"After working out, a blend of free amino acids, whey and casein protein help rebuild muscle over a multi-hour period.",
	"Mix 2 scoops (50.5g) with 8 fl oz of water or liquid of your choice. Shake vigorously. Consume one shake per day within 30 minutes following physical activity.",
	"../imagenes/productos/ingles/3/110524_sku1417_400_us.jpg" 
	]);
tx.executeSql('INSERT INTO ProductosUsa (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
	"1", 
	"Herbalife24 Prepare", 
	"3", 
	"Supports blood flow to working muscles.", 
	"N/A", 
	"Supports healthy blood flow. Enhances fast-twitch muscular contractions. Helps maintain focus and performance.", 
	"Adequate oxygen reaching working muscles enables performance. Prepare’s nitric oxide (NO) precursor system supports oxygen delivery to working muscles. Creatine supports the fast-twitch muscle contraction required for explosive athletic movement.",
	"Drink Prepare immediately prior to training or exercise.",
	"../imagenes/productos/ingles/3/111123_sku1414_us_400.jpg" 
	]);
tx.executeSql('INSERT INTO ProductosUsa (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
	"1", 
	"Herbalife24 Restore", 
	"3", 
	"Combats exercise-induced inflammation.", 
	"N/A", 
	"Curcumin helps combat exercise-induced inflammation. Elderberry and Saberry™✝ (an extract from amla fruit) and scavenge free radicals. Vitamin C and beta carotene support immune function", 
	"Promotes overnight muscle recovery. ",
	"Take one tablet at night, before bed.",
	"../imagenes/productos/ingles/3/111123_sku1418_us_400.jpg" 
	]);

	//////////////////////////////CATEGORIA 4////////////////////////////////////
	tx.executeSql('INSERT INTO ProductosUsa (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
		"1", 
		"Herbal Aloe Hand & Body Wash", 
		"4", 
		"Cleanse your skin while relieving dryness with this gentle hand and body wash. Designed for bathing and hand washing.", 
		"N/A", 
		"Helps relieve dryness and deeply moisturizes skin. ", 
		"Gentle plant-derived cleansers and triple-silkening moisturizers help relieve dryness and deeply moisturize your skin. Perfect for bath, shower and sink side to keep your skin clean, soft and silky.",
		"Use daily when bathing. For hand wash, use frequently throughout the day. ",
		"../imagenes/productos/ingles/4/121108_sku2561_us_400.jpg" 
		]);
	tx.executeSql('INSERT INTO ProductosUsa (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
		"1", 
		"Herbal Aloe Hand & Body Cream", 
		"4", 
		"Hydrate your skin for deep nourishment with Herbal Aloe Hand & Body Cream. This nongreasy cream increases your skin moisture content by 100% after just one use.", 
		"N/A", 
		"Increases skin moisture by 100% after just one use. Aloe vera and African shea butter absorbs quickly and leaves skin feeling smooth and soft.",
		"This light, nongreasy cream infused with aloe vera and African shea butter leaves your skin feeling smooth and soft. ",
		"Apply daily as needed.",
		"../imagenes/productos/ingles/4/121108_sku2563_us_400.jpg" 
		]);
	tx.executeSql('INSERT INTO ProductosUsa (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
		"1", 
		"Herbal Aloe Soothing Gel", 
		"4", 
		"Leave your skin smoother and softer with this fast-penetrating aloe vera-infused gel. An in vivo clinical study demonstrated that 100% of participants noticed an improvement in their skin’s appearance and feel.", 
		"N/A", 
		"Shown to leave skin smoother and softer.", 
		"Moisturize and soothe your skin with this light, fresh gel infused with aloe vera and skin-conditioning botanicals. Helps relieve dry skin that may lead to chapping, itching and roughness.",
		"Apply daily as needed. ",
		"../imagenes/productos/ingles/4/121108_sku2562_us_400.jpg" 
		]);
	tx.executeSql('INSERT INTO ProductosUsa (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
		"1", 
		"Herbal Aloe Strengthening Shampoo ", 
		"4", 
		"Strengthen and repair your hair with a sulfate-free strengthening shampoo that leaves hair 10 times stronger after just one use and reduces breakage by 90%.", 
		"N/A", 
		"Leaves hair up to 10 times stronger after just one use. Reduces hair breakage by 90%. Hydrolyzed wheat protein helps protect, repair and strengthen.", 
		"Microproteins strengthen hair, while gentle cleansers create a luxurious lather. Individual strands are repaired revealing softer, smoother, silkier hair. Color-preserving formula.",
		"Apply, lather and rinse.",
		"../imagenes/productos/ingles/4/121108_sku2564_us_400.jpg" 
		]);
	tx.executeSql('INSERT INTO ProductosUsa (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
		"1", 
		"Herbal Aloe Strengthening Conditioner", 
		"4", 
		"Strengthen and repair your hair with a sulfate-free advanced protein-infused conditioner that reduces breakage by 90%.", 
		"N/A", 
		"Leaves hair up to 10 times stronger after just one use. Reduces hair breakage by 90%. Hydrolyzed wheat protein helps protect, repair and strengthen.", 
		"Transform your hair with this advanced protein-infused conditioner that strengthens strands for a softer, silkier feel after just one use. Color-preserving formula.",
		"Massage into hair. Leave on up to three minutes. Rinse thoroughly.",
		"../imagenes/productos/ingles/4/121108_sku2565_us_400.jpg" 
		]);
	tx.executeSql('INSERT INTO ProductosUsa (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
		"1", 
		"Herbal Aloe Bath & Body Bar", 
		"4", 
		"Cleanse and nourish your skin with this triple-milled bath and body bar. The bar gently cleanses without stripping necessary oils from your skin.", 
		"N/A", 
		"A blend of aloe vera, olive oil and Vitamins A, C and E nourish the skin. ", 
		"Rich suds are infused with aloe vera and olive oil to help cleanse and nourish your skin. ",
		"Use daily. ",
		"../imagenes/productos/ingles/4/111007_sku2566_us_400.jpg" 
		]);
	tx.executeSql('INSERT INTO ProductosUsa (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
		"1", 
		"MultiVitamin Normal to Dry System", 
		"4", 
		"Infused with antioxidants, this skincare system includes the convenience of a Lotion Cleanser, Toner and Moisturizer with SPF 15 for UVA/UVB sun protection.", 
		"N/A", 
		"Nourish skin with vitamins A,C and E. Cleanse, tone and moisturize. Protect, soften and smooth skin. Convenient three-step program.",
		"Just like your body, your skin needs nourishment to look its best and be healthy. MultiVitamin Skincare keeps moisture in the skin, while keeping out unhealthy toxins. Botanicals and antioxidant vitamins A, C and E nourish skin for good health. ",
		"Cleanse, tone and moisturize each day with formulas containing botanical ingredients specially chosen to benefit normal to dry skin. ",
		"../imagenes/productos/ingles/4/0901na_mvnrmldrysystem_400.jpg" 
		]);
	tx.executeSql('INSERT INTO ProductosUsa (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
		"1", 
		"MultiVitamin Normal to Dry Lotion Cleanser ", 
		"4", 
		"Rich, yet gentle, this cleansing lotion contains vitamins, nutrients and botanicals that deeply cleanse surface skin and deliver moisture.", 
		"", 
		"Dissolve dirt and impurities. Replenish skin with vitamins, nutrients and herbs. Remove makeup.", 
		"Cleanse skin and gently remove dirt and makeup using a combination of antioxidant vitamins A, C and E, sweet almond oil and kukui nut oil. Daily gentle cleansing leaves skin feeling smooth, soft and nourished. ",
		"Massage onto wet skin. Rinse well with warm water. Follow with toner. ",
		"../imagenes/productos/ingles/4/2510na_mvnrmldrycleanser_400.jpg" 
		]);
	tx.executeSql('INSERT INTO ProductosUsa (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
		"1", 
		"MultiVitamin Normal to Dry Toner ", 
		"4", 
		"Helps improve normal to dry skin, leaves skin feeling clean.", 
		"N/A", 
		"Light, alcohol-free toner gently tones without drying, Contains healing witch hazel and antioxidant vitamins. Leaves skin feeling clean, moisturized and refreshed.", 
		"Witch hazel helps remove residue without stripping skin, while tea tree oil helps control shine. Leaving skin feeling clean, refreshed and non-greasy, while helping control skin oils and reducing the appearance of pores. Rich in vitamins A, C and E.",
		"After cleanser apply liberally with cotton ball to face and neck. ",
		"../imagenes/productos/ingles/4/2512na_mvtonernrmldry_400.jpg" 
		]);
	tx.executeSql('INSERT INTO ProductosUsa (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
		"1", 
		"MultiVitamin Normal to Dry Moisturizer SPF 15 ", 
		"4", 
		"Creamy, rich daytime moisturizer offers UVA/UVB protection and moisturizes normal to dry skin.", 
		"N/A", 
		"Moisturize and control shine. Get UVA/UVB sun protection", 
		"Hydrate and protect skin from the sun’s damaging rays with vitamins A, C and E. Panthenol and plant-based oils help moisturize the skin while broad-spectrum SPF sunscreen shields you from the sun’s damaging rays. ",
		"In the morning, gently massage onto skin after cleansing and toning. Apply before exposure to sun. ",
		"../imagenes/productos/ingles/4/2514na_mvmoistnrmldry_400.jpg" 
		]);
	tx.executeSql('INSERT INTO ProductosUsa (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
		"1", 
		"MultiVitamin Normal to Oily System", 
		"4", 
		"Infused with antioxidants, this skincare system includes the convenience of a Lotion Cleanser, Toner and Moisturizer with SPF 15 for UVA/UVB sun protection.", 
		"N/A", 
		"N/A", 
		"Just like your body, your skin needs nourishment to look its best and be healthy. MultiVitamin Skincare keeps moisture in the skin, while keeping out unhealthy toxins. Botanicals and antioxidant vitamins A, C and E nourish skin for good health.",
		"Cleanse, tone and moisturize each day with formulas containing botanical ingredients specially chosen to benefit normal to oily skin.",
		"../imagenes/productos/ingles/4/121108_sku0902_us_400.jpg" 
		]);
	tx.executeSql('INSERT INTO ProductosUsa (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
		"1", 
		"MultiVitamin Normal to Oily Foaming Gel Cleanser", 
		"4", 
		"Light foaming gel cleanser helps prevent blemishes and target oils without sabotaging skin’s protective moisture barrier.", 
		"N/A", 
		"Wash away dirt and impurities. Get healthy, clean skin. Remove makeup.", 
		"Cleanse skin and gently remove dirt and makeup using a combination of antioxidant vitamins A, C and E and select botanicals and herbs. Daily gentle cleansing targets oils and soothes the skin while helping improve texture and tone. ",
		"Apply to wet skin and massage into a rich lather. Rinse well with warm water. Follow with toner. ",
		"../imagenes/productos/ingles/4/2511na_mvnrmloilycleanser_400.jpg" 
		]);
	tx.executeSql('INSERT INTO ProductosUsa (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
		"1", 
		"MultiVitamin Normal to Oily Toner", 
		"4", 
		"Manages oily shine and improves skin tone. ", 
		"N/A", 
		"Improve skin tone. Leaves skin feeling clean, fresh and soft. Non-greasy.", 
		"Your second step in healthy skin care, this toner with vitamins A, C and E opens pores to prepare the skin for moisturizing and hydration without drying skin out. Includes witch hazel and moisturizing panthenol.",
		"After cleanser apply liberally with cotton ball to face and neck. ",
		"../imagenes/productos/ingles/4/2513na_mvnrmloilytoner_400.jpg" 
		]);
	tx.executeSql('INSERT INTO ProductosUsa (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
		"1", 
		"MultiVitamin Normal to Oily Moisturizer SPF 15", 
		"4", 
		"Defend skin from daily exposure to the sun and environment with a light, SPF and vitamin-infused moisturizer.", 
		"", 
		"Nourish and moisturize. Get UVA/UVB sun protection. Skin feels soft, smooth, clean and renewed.", 
		"Hydrate and protect skin from the sun’s damaging rays with vitamins A, C and E. Panthenol and plant-based oils help moisturize the skin while broad-spectrum SPF sunscreen shields you from the sun’s damaging rays.",
		"In the morning, gently massage onto skin after cleansing and toning. Apply before exposure to sun. ",
		"../imagenes/productos/ingles/4/121108_sku2515_us_400.jpg" 
		]);
	tx.executeSql('INSERT INTO ProductosUsa (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
		"1", 
		"NouriFusion® MultiVitamin Exfoliating Scrub", 
		"4", 
		"Formulated with jojoba, beeswax and raspberry and strawberry seeds, this gentle formula exfoliates to reveal smooth, vibrant and renewed skin.", 
		"N/A", 
		"Scrub away dead skin cells. Reveal smoother, rejuvenated skin. Support cell turnover.", 
		"With age, cell turnover begins to slow. A build-up of dead skin cells can result in a dull complexion. Help maintain your skin’s youthful glow with vitamins A, C and E. Fruit seeds and enzymes help remove dry skin cells, exfoliate, smooth and polish.",
		"Two to three times a week, gently scrub over skin after cleansing. Avoid eye area. Rinse well with warm water. Follow with toner. ",
		"../imagenes/productos/ingles/4/2521na_mvexfolscrub_400.jpg" 
		]);
	tx.executeSql('INSERT INTO ProductosUsa (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
		"1", 
		"NouriFusion® MultiVitamin Clarifying Mask ", 
		"4", 
		"Lightweight clay mask deep cleanses pores to absorb impurities and excess oils. ", 
		"N/A", 
		"Remove excess oil. Facilitate new cell growth with papaya enzyme. Improve skin texture, tone and firmness.", 
		"Orange and eucalyptus oils balance skin’s natural moisture barrier, while papaya-derived enzyme helps exfoliate dead and damaged cells to enhance smoothness. Beneficial levels of vitamins A, C and E nourish the skin for overall good health. ",
		"Smooth a liberal amount of mask over clean, dry skin. Leave on for approximately 10 to 20 minutes. Rinse well with warm water. Follow with toner.",
		"../imagenes/productos/ingles/4/2519na_mvclarifyingmask_400.jpg" 
		]);
	tx.executeSql('INSERT INTO ProductosUsa (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
		"1", 
		"NouriFusion® MultiVitamin Night Cream", 
		"4", 
		"Rapidly moisturize skin while you sleep with sunflower seed oil, olive oil, panthenol and Pheohydrane P. ", 
		"N/A", 
		"Support healthy skin renewal. Hydrate deeply. No greasy feeling.", 
		"Lightweight moisturizer hydrates and protects skin without feeling greasy. MultiVitamin Moisturizer SPF 15–Normal to Oily moisturizes where needed and offers broad spectrum UVA/UVB protection against daily exposure to the sun’s damaging rays.",
		"In the evening, gently massage onto skin after cleansing and toning. ",
		"../imagenes/productos/ingles/4/2516na_mvnightcreme_400.jpg" 
		]);
	tx.executeSql('INSERT INTO ProductosUsa (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
		"1", 
		"NouriFusion® MultiVitamin Moisture Mask", 
		"4", 
		"Removes impurities that leave skin looking dull.x", 
		"", 
		"Moisturize parched skin. Discover soft, supple skin. Reduce flaky skin.", 
		"Diet, climate, smoking, pollution and aging can dehydrate skin. Use this luxurious whipped mask with vitamins A, C and E for deep hydration and moisturizing.",
		"Smooth liberally over clean, dry skin. Leave on for up to 20 minutes. Rinse well with warm water. Follow with toner. ",
		"../imagenes/productos/ingles/4/2520na_mvmoisturemask_400.jpg" 
		]);
	tx.executeSql('INSERT INTO ProductosUsa (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
		"1", 
		"NouriFusion® MultiVitamin Eye Gel", 
		"4", 
		"Tighten and smooth the delicate skin under your eyes with a lightweight, vitamin-enriched, moisturizing gel. ", 
		"", 
		"Minimize under-eye puffiness. Improve the appearance of dark circles. Reduce the appearance of fine lines and wrinkles.", 
		"Eyeliss™ technology works to reduce water retention around eyes to reduce puffiness and under-eye bags. Siberian ginseng helps reduce the appearance of lines and wrinkles.",
		"In the morning or throughout the day, gently pat onto skin around the eyes. Can be used under or over make-up.",
		"../imagenes/productos/ingles/4/2518na_mveyegel_400.jpg" 
		]);
	tx.executeSql('INSERT INTO ProductosUsa (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
		"1", 
		"NouriFusion® MultiVitamin Eye Cream", 
		"4", 
		"Rich, emollient non-greasy formula with vitamins and moisture helps tighten and firm skin around the eyes. ", 
		"N/A", 
		"Improve skin firmness around the eyes. Moisturize and nourish the under-eye area. Perfect for under makeup. Non-greasy formula.", 
		"The skin around the eyes is delicate and contains almost no oil or sweat glands, so it is one of the first areas to show signs of aging. Applied daily, this rich eye cream with vitamins A, C and E provides much-needed moisture to the delicate eye area. ",
		"In the morning and evening, gently pat onto skin around eyes.",
		"../imagenes/productos/ingles/4/2517na_mveyecreme_400.jpg" 
		]);
	tx.executeSql('INSERT INTO ProductosUsa (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
		"1", 
		"Radiant C® Daily Facial Scrub Cleanser", 
		"4", 
		"Cleanse, soften and smooth dull tired skin with vitamin C, jojoba beads and citrus extracts. For all skin types.", 
		"N/A", 
		"Exfoliate and revitalize skin. Prevent a dull, tired complexion. Maximize antioxidant skin protection.", 
		"As we age, skin cell turnover slows resulting in dull looking skin. Vitamin C can help defend skin from free radical damage. Get adequate amounts of this super antioxidant with this gentle scrub. Jojoba and beeswax beads help smooth and polish. ",
		"Gently massage onto damp skin. Rinse well with warm water. Use with the full line of Radiant C® products for added antioxidant protection. ",
		"../imagenes/productos/ingles/4/0444us_radiantc_scrub_400.jpg" 
		]);
	tx.executeSql('INSERT INTO ProductosUsa (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
		"1", 
		"Radiant C® Body Lotion SPF 15", 
		"4", 
		"Moisturize skin and maximize protection from the sun with this lightweight, non-greasy, vitamin C-based lotion for everyday moisture.", 
		"N/A", 
		"Protect skin from the sun with SPF 15. Guard against damage from UVA/UVB rays. Boost antioxidant protection.", 
		"Protect skin from daily exposure to the sun’s damaging rays with this orange-scented body lotion infused with vitamin C for antioxidant defense. Non-greasy formula is gentle enough for everyday use. ",
		"Apply liberally on body daily as needed and before sun exposure.",
		"../imagenes/productos/ingles/4/0445us_radiantc_lotion_400.jpg" 
		]);
	tx.executeSql('INSERT INTO ProductosUsa (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
		"1", 
		"Radiant C® Daily Skin Booster", 
		"4", 
		"Harness the power of antioxidant vitamin C to seal in skin’s moisture with this emollient-rich gel cream.", 
		"N/A", 
		"Minimize the appearance of fine lines and wrinkles. Improve skin texture. Guard against free radicals.", 
		"Replenish the vitamin C in your skin and protect yourself from free radicals with a high-quality stable form of it. This light gel cream helps seal in skin’s moisture, preventing dry skin. It also minimizes pores and helps makeup glide on easily. ",
		"Dispense a small amount on fingertip, massage gently on face and throat. Apply in the morning after cleansing and before your moisturizer. ",
		"../imagenes/productos/ingles/4/2890un_rcskinbooster_400.jpg" 
		]);
	tx.executeSql('INSERT INTO ProductosUsa (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
		"1", 
		"Radiant C® Face Quencher ", 
		"4", 
		"Refreshing vitamin C spritz, for men and women, provides dry, water-starved skin with a cool, rejuvenating burst. Helps set makeup for longer wear.", 
		"", 
		"Refresh tired-looking skin. Get instant hydration and moisture. Give your skin a cool antioxidant burst.", 
		"Spritz face throughout the day to revitalize skin with this cool vitamin C spray. Not only does it provide instant hydration, it helps freshen makeup.",
		"Spray lightly on your face for radiant, healthy looking skin. Use as often as needed during the day. ",
		"../imagenes/productos/ingles/4/2997un_rcskinquencher_400.jpg" 
		]);
	tx.executeSql('INSERT INTO ProductosUsa (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
		"1", 
		"Skin Activator® Day Lotion SPF 15 ", 
		"4", 
		"An age-defying lotion with SPF 15 to protect and moisturize skin.", 
		"N/A", 
		"Minimizes the appearance of fine lines and wrinkles. Collagen-building Glucosamine Complex aids hydration and firms skin. Contains sunscreens including Parsol® 1789 to provide UVA/UVB sun protection. Lightweight, non-greasy. Formulated for daily use.", 
		"Reveal your beauty, not your age with this weightless lotion that protects and corrects the signs of aging. Wrinkle-fighting glucosamine provides a difference you can feel immediately. It’s perfect for all skin types. This gentle lotion also visibly increases men’s and women’s skin luminosity and clarity and improves skin smoothness.",
		"Smooth over entire face every day. Combine daily with Skin Activator® Eye Cream and Skin Activator® Lip Refiner SPF 15 to protect and perfect your skin from the signs of aging.",
		"../imagenes/productos/ingles/4/0862us_skactdaylotion_400.jpg" 
		]);
tx.executeSql('INSERT INTO ProductosUsa (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
	"1", 
	"Skin Activator® Nighttime Replenishing Cream", 
	"4", 
	"An age-defying formula for younger-looking skin. ", 
	"N/A", 
	"Contains collagen-building glucosamine. Rich, moisturizing cream that firms skin. Minimizes the appearance of fine lines and wrinkles. Visibly increases luminosity and clarity and improves skin smoothness. Diminish the signs of aging.",
	"Skin Activator® Nighttime Replenishing Cream improves and deeply moisturizes overnight, when your skin does its best regenerating. This luxurious cream contains collagen-building glucosamine–for results you can see and feel. An independent clinical study on the effects of the Glucosamine Complex in Skin Activator® has shown a reduction in the appearance of fine lines and wrinkles, and an improvement in skin firmness, smoothness, hydration and texture. For men and women. Perfect for all skin types.",
	"Smooth over entire face every night. Combine daily with the entire Skin Activator® line for healthy-looking skin.",
	"../imagenes/productos/ingles/4/0865us_skactnightcream_400.jpg" 
	]);
tx.executeSql('INSERT INTO ProductosUsa (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
	"1", 
	"Skin Activator® Décolletage Cream ", 
	"4", 
	"A luxurious, age-defying lotion that smoothes the skin and minimizes neck, chest and cleavage wrinkles. ", 
	"N/A", 
	"Smoothes the appearance of crepe-like cleavage that can reveal a woman’s age. Minimizes the appearance of wrinkled skin in men’s throats and necks. Minimizes the appearance of fine lines and wrinkles. Collagen-building Glucosamine Complex aids hydration and firms skin. Visibly increases luminosity and clarity and improves skin smoothness.", 
	"This luxurious cream is specially formulated for skin in the neck, chest and cleavage. As we age and spend time in the sun, this skin becomes thinner and prone to wrinkles. Skin Activator® Décolletage Cream for men and women restores hydration, revealing smoother and more luminous skin. Perfect for all skin types.",
	"Smooth over neck and chest every night. Combine daily with the entire Skin Activator® line of products for healthy, younger-looking skin.",
	"../imagenes/productos/ingles/4/0864us_skactdecolletcream_400.jpg" 
	]);
tx.executeSql('INSERT INTO ProductosUsa (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
	"1", 
	"Skin Activator® Lip Refiner SPF 15", 
	"4", 
	"An age-defying lotion with SPF 15 that plumps lips and keeps them healthy and moisturized. ", 
	"N/A", 
	"Increases lip volume. Fills in fine lines and moisturizes. Minimizes the appearance of fine lines and wrinkles. Collagen-building Glucosamine Complex aids hydration and firms skin. Contains sunscreens including Parsol® 1789† to provide UVA/UVB sun protection.", 
	"Kiss dry lips goodbye! Skin Activator® Lip Refiner SPF 15 provides instant moisture for softer, more supple lips while it minimizes fine lines and creases. What’s more, this light cream also contains stimulating peppermint and a plumping ingredient that increases lip volume.",
	"Use daily to hydrate and plump your lips. Use with Herbalife's Skin Activator® Eye Cream to keep these delicate areas of the face looking and feeling younger.",
	"../imagenes/productos/ingles/4/0866us_skactliprefine_400.jpg" 
	]);
tx.executeSql('INSERT INTO ProductosUsa (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
	"1", 
	"Body Buffing Scrub", 
	"4", 
	"Reveal healthier-looking skin around the thighs and hips with jojoba beads, which scrub and naturally exfoliate to minimize dimpled skin. ", 
	"N/A", 
	" Improve the appearance of dimpled skin. Soften and smooth skin. Maintain the natural exfoliation process Part one of a two-step body care program", 
	"Noticeably improve the look of skin in problem areas with this scrub. Jojoba beads enhance the body’s process of exfoliation. Clinical testing shows this scrub can improve the appearance of dimpled skin if used with Body Contouring Crème. ",
	"Apply with a gentle circular motion until your skin feels clean and smooth. Rinse off.",
	"../imagenes/productos/ingles/4/0353un_bodybuffingscrub_400.jpg" 
	]);
tx.executeSql('INSERT INTO ProductosUsa (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
	"1", 
	"Body Contouring Crème", 
	"4", 
	"Gingko biloba extract and fruit acids help improve the appearance of skin firmness, texture and tone in problem areas.", 
	"", 
	"Minimize the appearance of dimpled skin. Improve appearance of dimpled skin after weight loss. Part two of a two-step body care program.", 
	"Improve problem zones and help minimize the look of dimpled skin with this two-step approach. Body Buffing Scrub helps exfoliate and smooth skin. Body Contouring Crème, with gingko and fruit acids, helps improve the appearance of skin firmness. ",
	"Apply Body Contouring Crème with your fingertips on problem areas with gentle upward strokes.",
	"../imagenes/productos/ingles/4/0354un_bodycontourcreme_400.jpg" 
	]);
tx.executeSql('INSERT INTO ProductosUsa (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
	"1", 
	"Herbal Aloe Moisturizing Shampoo", 
	"4", 
	"Give hair a beautiful, healthy shine with this hydrating shampoo with aloe, avocado, grapeseed, ginger root, jojoba seed, rosemary and sage. Note: SKU #0457 is being phased out and will be available while supplies last.", 
	"", 
	"Moisturize dry, damaged color-treated hair. Preserve and maintain color-treated hair. Part of a two-step haircare regimen", 
	"Gentle with the benefits of whole-leaf aloe, this moisturizing hair wash provides protection from environmental stressors and cleanses without stripping hair or irritating the scalp. For best results, use with Herbal Aloe Moisturizing Conditioner. ",
	"Apply to wet hair. Massage into a lather. Rinse thoroughly and repeat if necessary. Follow with Herbal Aloe Moisturizing Conditioner. ",
	"../imagenes/productos/ingles/4/0457us_hamoistshamp_400.jpg" 
	]);
tx.executeSql('INSERT INTO ProductosUsa (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
	"1", 
	"Herbal Aloe Everyday Shampoo ", 
	"4", 
	"Help repair damage from the daily stresses your hair is exposed to with an aloe-based shampoo for normal to dry hair. Note: SKU #0489 is being phased out and will be available while supplies last. ", 
	"N/A", 
	"Rehydrate hair. Cleanse without stripping. Gentle enough for everyday use.", 
	"Protect hair from environmental stressors and nourish it with the soothing properties of whole-leaf aloe. Safe for the whole family. Use with Herbal Aloe Everyday Conditioner for best results.",
	"Apply to wet hair. Massage into a lather. Rinse thoroughly and repeat if necessary. Follow with Herbal Aloe Everyday Conditioner. ",
	"../imagenes/productos/ingles/4/0489un_haevdyshampoo_400.jpg" 
	]);
tx.executeSql('INSERT INTO ProductosUsa (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
	"1", 
	"Herbal Aloe Everyday Conditioner ", 
	"4", 
	"Manage shine with the healing benefits of aloe. For normal to dry hair. Gentle enough for everyday use.Note: SKU #0490 is being phased out and will be available while supplies last.", 
	"N/A", 
	"Seal in moisture. Nourish and protect hair. Clean and refreshing.", 
	"Condition hair without weighing it down, while counteracting the environmental stressors hair is exposed to each day. Safe and gentle for the whole family. Use with Herbal Aloe Everyday Shampoo for best results. ",
	"After shampooing, massage into hair. Leave on for 1-2 minutes. Rinse thoroughly. Avoid contact with eyes. For best results use with Herbal Aloe Shampoo.",
	"../imagenes/productos/ingles/4/121108_sku0490_us_400.jpg" 
	]);
tx.executeSql('INSERT INTO ProductosUsa (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
	"1", 
	"Heart ", 
	"4", 
	"Botanicals inspired by nature, including water lily, green ivy tea leaves and gardenia for a gentle, sensual scent. ", 
	"N/A", 
	"Inspire love. A light contemporary fragrance for women.", 
	"A lush combination of sensual botanicals designed just for her. ",
	"Use with Herbalife's entire range of Personal Care/Outer Nutrition products. ",
	"../imagenes/productos/ingles/4/2329un_heart_400.jpg" 
	]);
tx.executeSql('INSERT INTO ProductosUsa (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
	"1", 
	"Soul ", 
	"4", 
	"A blend of yuzu citrus, parsley, lavender and cedarwood, this contemporary fragrance for men is light and sexy. ", 
	"N/A", 
	"Harness masculinity. A light, contemporary fragrance for men.", 
	"Reflect the very spirt of life with essences for men.",
	"Use with Herbalife's entire range of Personal Care/Outer Nutrition products.",
	"../imagenes/productos/ingles/4/2328un_soul_400.jpg" 
	]);
tx.executeSql('INSERT INTO ProductosUsa (pais, nombre, categoria, descripcion, sabores, beneficios, detalles, uso, foto) VALUES (?,?,?,?,?,?,?,?,?)',[
	"1", 
	"woman", 
	"4", 
	"A simple fragrance for the modern woman with a blend of jasmine, water lily and peony. ", 
	"N/A", 
	"Exude strength. A harmonious blend of botanicals", 
	"A simple, modern fragrance for women made with fresh, botanical scents. ",
	"Use with Herbalife's entire range of Personal Care/Outer Nutrition products.",
	"../imagenes/productos/ingles/4/0343un_woman_400.jpg" 
	],

	function(tx){},
	function(tx,err){
		self.error(tx,err);
	});				     
})
}