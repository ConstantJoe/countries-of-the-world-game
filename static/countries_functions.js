mapboxgl.accessToken = 'pk.eyJ1IjoiY29uc3RhbnRqb2UiLCJhIjoiY2lrZzI0M2FzMDAycHdsa2l0bHZvdW42aiJ9.r97nrxuGMShODVHL9I66nQ';
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/constantjoe/cikg2ife30015c1m1hppp4ohr', //stylesheet location
    center: [0, 40], // starting position
    zoom: 2 // starting zoom
});

map.on('style.load', function () {
});

var countries_found = 0;


/**
TO BE DONE

Choose better colours

Add in Esperanto

Get better data, with all the countries. 
Somalia is also missing somaliland.
Egypt includes most of western sahara

Make overlay look nicer.

Add a timer, and start button

Allow user to select language
**/

function findCountry(){
	var country = document.getElementById('textbox').value;
	country = country.toLowerCase();
	country = localization(country, english)
	var data = "";
	var colour = "";

	if(list_of_countries[country] === 0)
	{
		var found = true;

		list_of_countries[country]++;
		switch(country){
		case "afghanistan":
			data = eval('(' + countries.Afghanistan + ')');
			colour = A;
			break;
		case "angola":
			data = eval('(' + countries.Angola + ')');
			colour = B;
			break;
		case "albania":
			data = eval('(' + countries.Albania + ')');
			colour = C;
			break;
		case "argentina":
			data = eval('(' + countries.Argentina + ')');
			colour = C;
			break;
		case "armenia":
			data = eval('(' + countries.Armenia + ')');
			colour = D;
			break;
		case "australia":
			data = eval('(' + countries.Australia + ')');
			colour = C;
			break;
		case "austria":
			data = eval('(' + countries.Austria + ')');
			colour = A;
			break;
		case "azerbaijan":
			data = eval('(' + countries.Azerbaijan + ')');
			colour = A;
			break;
		case "burundi":
			data = eval('(' + countries.Burundi + ')');
			colour = B;
			break;
		case "belgium":
			data = eval('(' + countries.Belgium + ')');
			colour = A;
			break;
		case  "benin":
			data = eval('(' + countries.Benin + ')');
			colour = D;
			break;
		case "burkina faso":
			data = eval('(' + countries.Burkina_Faso + ')');
			colour = B;
			break;
		case "bangladesh":
			data = eval('(' + countries.Bangladesh + ')');
			colour = B;
			break;
		case "bulgaria":
			data = eval('(' + countries.Bulgaria + ')');
			colour = C;
			break;
		case "bahamas":
			data = eval('(' + countries.The_Bahamas + ')');
			colour = C;
			break;
		case "bosnia-herzegovina":
			data = eval('(' + countries.Bosnia_and_Herzegovina + ')');
			colour = C;
			break;
		case "belarus":
			data = eval('(' + countries.Belarus + ')');
			colour = C;
			break;
		case "belize":
			data = eval('(' + countries.Belize + ')');
			colour = B;
			break;
		case "bolivia":
			data = eval('(' + countries.Bolivia + ')');
			colour = B;
			break;
		case "brunei":
			data = eval('(' + countries.Brunei + ')');
			colour = D;
			break;
		case "brazil":
			data = eval('(' + countries.Brazil + ')');
			colour = A;
			break;
		case "bhutan":
			data = eval('(' + countries.Bhutan + ')');
			colour = C;
			break;
		case "botswana":
			data = eval('(' + countries.Botswana + ')');
			colour = B;
			break;
		case "central african republic":
			data = eval('(' + countries.Central_African_Republic + ')');
			colour = B;
			break;
		case "canada":
			data = eval('(' + countries.Canada + ')');
			colour = D;
			break;
		case "cameroon":
			data = eval('(' + countries.Cameroon + ')');
			colour = D;
			break;
		case "democratic republic of the congo":
			data = eval('(' + countries.Democratic_Republic_Of_The_Congo + ')');
			colour = C;
			break;
		case "republic of the congo":
			data = eval('(' + countries.Republic_Of_The_Congo + ')');
			colour = A;
			break;
		case "chile":
			data = eval('(' + countries.Chile + ')');
			colour = A;
			break;
		case "china":
			data = eval('(' + countries.China + ')');
			colour = B;
			break;
		case "colombia":
			data = eval('(' + countries.Colombia + ')');
			colour = D;
			break;
		case "costa rica":
			data = eval('(' + countries.Costa_Rica + ')');
			colour = B;
			break;
		case "cuba":
			data = eval('(' + countries.Cuba + ')');
			colour = D;
			break;
		case "cyprus":
			data = eval('(' + countries.Cyprus + ')');
			colour = C;
			break;
		case "czech republic":
			data = eval('(' + countries.Czech_Republic + ')');
			colour = B;
			break;
		case "germany":
			data = eval('(' + countries.Germany + ')');
			colour = C;
			break;
		case "djibouti":
			data = eval('(' + countries.Djibouti + ')');
			colour = D;
			break;
		case "denmark":
			data = eval('(' + countries.Greenland + ')');
			map.addSource("greenland", data);
			map.addLayer({
				'id': "greenland",
				'type': 'fill',
				'source': "greenland",
				'layout': {},
				'paint': {
					'fill-color': A,
					'fill-opacity': 0.8
				}
			});
			data = eval('(' + countries.Denmark + ')');
			colour = A;
			break;
		case "dominican republic":
			data = eval('(' + countries.Dominican_Republic + ')');
			colour = D;
			break;
		case "algeria":
			data = eval('(' + countries.Algeria + ')');
			colour = D;
			break;
		case "ecuador":
			data = eval('(' + countries.Ecuador + ')');
			colour = A;
			break;
		case "egypt":
			data = eval('(' + countries.Egypt + ')');
			colour = A;
			break;
		case "eritrea":
			data = eval('(' + countries.Eritrea + ')');
			colour = A;
			break;
		case "ethiopia":
			data = eval('(' + countries.Ethiopia + ')');
			colour = B;
			break;
		case "western sahara":
			data = eval('(' + countries.Western_Sahara + ')');
			colour = B;
			break;
		case "spain":
			data = eval('(' + countries.Spain + ')');
			colour = C;
			break;
		case "estonia":
			data = eval('(' + countries.Estonia + ')');
			colour = B;
			break;
		case "finland":
			data = eval('(' + countries.Finland + ')');
			colour = C;
			break;
		case "fiji":
			data = eval('(' + countries.Fiji + ')');
			colour = A;
			break;
		case "france":
			data = eval('(' + countries.French_Guiana + ')');
			map.addSource("french guiana", data);
			map.addLayer({
				'id': "french guiana",
				'type': 'fill',
				'source': "french guiana",
				'layout': {},
				'paint': {
					'fill-color': B,
					'fill-opacity': 0.8
				}
			});
			data = eval('(' + countries.New_Caledonia + ')');
			map.addSource("new caledonia", data);
			map.addLayer({
				'id': "new caledonia",
				'type': 'fill',
				'source': "new caledonia",
				'layout': {},
				'paint': {
					'fill-color': B,
					'fill-opacity': 0.8
				}
			});
			data = eval('(' + countries.French_Southern + ')');
			map.addSource("french southern", data);
			map.addLayer({
				'id': "french southern",
				'type': 'fill',
				'source': "french southern",
				'layout': {},
				'paint': {
					'fill-color': B,
					'fill-opacity': 0.8
				}
			});
			data = eval('(' + countries.France + ')');
			colour = B;
			break;
		case "gabon":
			data = eval('(' + countries.Gabon + ')');
			colour = C;
			break;
		case "gambia":
			data = eval('(' + countries.Gambia + ')');
			colour = C;
			break;
		case "united kingdom":
			data = eval('(' + countries.Bermuda + ')');
			map.addSource("bermuda", data);
			map.addLayer({
				'id': "bermuda",
				'type': 'fill',
				'source': "bermuda",
				'layout': {},
				'paint': {
					'fill-color': D,
					'fill-opacity': 0.8
				}
			});
			data = eval('(' + countries.Falkland_Islands + ')');
			map.addSource("falkland islands", data);
			map.addLayer({
				'id': "falkland islands",
				'type': 'fill',
				'source': "falkland islands",
				'layout': {},
				'paint': {
					'fill-color': D,
					'fill-opacity': 0.8
				}
			});

			data = eval('(' + countries.United_Kingdom + ')');
			colour = D;
			break;
		case "georgia":
			data = eval('(' + countries.Georgia + ')');
			colour = C;
			break;
		case "ghana":
			data = eval('(' + countries.Ghana + ')');
			colour = A;
			break;
		case "guinea-bissau":
			data = eval('(' + countries.Guinea-Bissau + ')');
			colour = A;
			break;
		case "guinea":
			data = eval('(' + countries.Guinea + ')');
			colour = B;
			break;
		case "equatorial guinea":
			data = eval('(' + countries.Equatorial_Guinea + ')');
			colour = A;
			break;
		case "greece":
			data = eval('(' + countries.Greece + ')');
			colour = B;
			break;
		case "guatemala":
			data = eval('(' + countries.Guatemala + ')');
			colour = D;
			break;
		case "guyana":
			data = eval('(' + countries.Guyana + ')');
			colour = C;
			break;
		case "honduras":
			data = eval('(' + countries.Honduras + ')');
			colour = A;
			break;
		case "croatia":
			data = eval('(' + countries.Croatia + ')');
			colour = A;
			break;
		case "haiti":
			data = eval('(' + countries.Haiti + ')');
			colour = A;
			break;
		case "hungary":
			data = eval('(' + countries.Hungary + ')');
			colour = C;
			break;
		case "indonesia":
			data = eval('(' + countries.Indonesia + ')');
			colour = B;
			break;
		case "india":
			data = eval('(' + countries.India + ')');
			colour = D;
			break;		
		case "kosovo":
			data = eval('(' + countries.Kosovo + ')');
			colour = C;
			break;
		case "ivory coast":
			data = eval('(' + countries.Ivory_Coast + ')');
			colour = D;
			break;
		case "ireland":
			data = eval('(' + countries.Ireland + ')');
			colour = B;
			break;
		case "iran":
			data = eval('(' + countries.Iran + ')');
			colour = B;
			break;
		case "iraq":
			data = eval('(' + countries.Iraq + ')');
			colour = C;
			break;
		case "iceland":
			data = eval('(' + countries.Iceland + ')');
			colour = C;
			break;
		case "israel":
			data = eval('(' + countries.Israel + ')');
			colour = C;
			break;
		case "italy":
			data = eval('(' + countries.Italy + ')');
			colour = C;
			break;
		case "jamaica":
			data = eval('(' + countries.Jamaica + ')');
			colour = C;
			break;
		case "jordan":
			data = eval('(' + countries.Jordan + ')');
			colour = A;
			break;
		case "japan":
			data = eval('(' + countries.Japan + ')');
			colour = A;
			break;
		case "kazakhstan":
			data = eval('(' + countries.Kazakhstan + ')');
			colour = C;
			break;
		case "kenya":
			data = eval('(' + countries.Kenya + ')');
			colour = A;
			break;
		case "kyrgyzstan":
			data = eval('(' + countries.Kyrgyzstan + ')');
			colour = D;
			break;
		case "cambodia":
			data = eval('(' + countries.Cambodia + ')');
			colour = A;
			break;
		case "south korea":
			data = eval('(' + countries.South_Korea + ')');
			colour = D;
			break;
		case "kuwait":
			data = eval('(' + countries.Kuwait + ')');
			colour = A;
			break;
		case "laos":
			data = eval('(' + countries.Laos + ')');
			colour = C;
			break;
		case "lebanon":
			data = eval('(' + countries.Lebanon + ')');
			colour = B;
			break;
		case "liberia":
			data = eval('(' + countries.Liberia + ')');
			colour = C;
			break;
		case "libya":
			data = eval('(' + countries.Libya + ')');
			colour = B;
			break;
		case "sri lanka":
			data = eval('(' + countries.Sri_Lanka + ')');
			colour = C;
			break;
		case "lesotho":
			data = eval('(' + countries.Lesotho + ')');
			colour = C;
			break;
		case "lithuania":
			data = eval('(' + countries.Lithuania + ')');
			colour = B;
			break;
		case "luxembourg":
			data = eval('(' + countries.Luxembourg + ')');
			colour = D;
			break;
		case "latvia":
			data = eval('(' + countries.Latvia + ')');
			colour = A;
			break;
		case "morocco":
			data = eval('(' + countries.Morocco + ')');
			colour = A;
			break;
		case "moldova":
			data = eval('(' + countries.Moldova + ')');
			colour = D;
			break;
		case "madagascar":
			data = eval('(' + countries.Madagascar + ')');
			colour = D;
			break;
		case "mexico":
			data = eval('(' + countries.Mexico + ')');
			colour = C;
			break;
		case "fyr macedonia":
			data = eval('(' + countries.Macedonia + ')');
			colour = D;
			break;
		case "mali":
			data = eval('(' + countries.Mali + ')');
			colour = A;
			break;
		case "malta":
			data = eval('(' + countries.Malta + ')');
			colour = B;
			break;
		case "myanmar":
			data = eval('(' + countries.Myanmar + ')');
			colour = A;
			break;
		case "montenegro":
			data = eval('(' + countries.Montenegro + ')');
			colour = D;
			break;
		case "mongolia":
			data = eval('(' + countries.Mongolia + ')');
			colour = A;
			break;
		case "mozambique":
			data = eval('(' + countries.Mozambique + ')');
			colour = B;
			break;
		case "mauritania":
			data = eval('(' + countries.Mauritania + ')');
			colour = C;
			break;
		case "malawi":
			data = eval('(' + countries.Malawi + ')');
			colour = C;
			break;
		case "malaysia":
			data = eval('(' + countries.Malaysia + ')');
			colour = C;
			break;
		case "namibia":
			data = eval('(' + countries.Namibia + ')');
			colour = D;
			break;
		case "niger":
			data = eval('(' + countries.Niger + ')');
			colour = C;
			break;
		case "nigeria":
			data = eval('(' + countries.Nigeria + ')');
			colour = B;
			break;
		case "nicaragua":
			data = eval('(' + countries.Nicaragua + ')');
			colour = D;
			break;
		case "netherlands":
			data = eval('(' + countries.Netherlands + ')');
			colour = D;
			break;
		case "norway":
			data = eval('(' + countries.Norway + ')');
			colour = B;
			break;
		case "nepal":
			data = eval('(' + countries.Nepal + ')');
			colour = A;
			break;
		case "new zealand":
			data = eval('(' + countries.New_Zealand + ')');
			colour = D;
			break;
		case "oman":
			data = eval('(' + countries.Oman + ')');
			colour = B;
			break;
		case "pakistan":
			data = eval('(' + countries.Pakistan + ')');
			colour = C;
			break;
		case "panama":
			data = eval('(' + countries.Panama + ')');
			colour = A;
			break;
		case "paraguay":
			data = eval('(' + countries.Paraguay + ')');
			colour = D;
			break;
		case "peru":
			data = eval('(' + countries.Peru + ')');
			colour = C;
			break;
		case "philippines":
			data = eval('(' + countries.Philippines + ')');
			colour = A;
			break;
		case "papua new guinea":
			data = eval('(' + countries.Papua_New_Guinea + ')');
			colour = A;
			break;
		case "poland":
			data = eval('(' + countries.Poland + ')');
			colour = A;
			break;
		case "north korea":
			data = eval('(' + countries.North_Korea + ')');
			colour = C;
			break;
		case "portugal":
			data = eval('(' + countries.Portugal + ')')
			colour = D;
			break;
		case "palestine":
			data = eval('(' + countries.West_Bank + ')');
			colour = B;
			break;
		case "qatar":
			data = eval('(' + countries.Qatar + ')');
			colour = A;
			break;
		case "romania":
			data = eval('(' + countries.Romania + ')');
			colour = A;
			break;
		case "russia":
			data = eval('(' + countries.Russia + ')');
			colour = D;
			break;
		case "rwanda":
			data = eval('(' + countries.Rwanda + ')');
			colour = A;
			break;
		case "saudi arabia":
			data = eval('(' + countries.Saudi_Arabia + ')');
			colour = D;
			break;
		case "sudan":
			data = eval('(' + countries.Sudan + ')');
			colour = C;
			break;
		case "senegal":
			data = eval('(' + countries.Senegal + ')');
			colour = D;
			break;
		case "soloman islands":
			data = eval('(' + countries.Soloman_Islands + ')');
			colour = D;
			break;
		case "sierra leone":
			data = eval('(' + countries.Sierra_Leone + ')');
			colour = A;
			break;
		case "el salvador":
			data = eval('(' + countries.El_Salvador + ')');
			colour = C;
			break;
		case "somalia":
			data = eval('(' + countries.Somalia + ')');
			colour = C;
			break;
		case "serbia":
			data = eval('(' + countries.Serbia + ')');
			colour = B;
			break;
		case "south sudan":
			data = eval('(' + countries.South_Sudan + ')');
			colour = D;
			break;
		case "suriname":
			data = eval('(' + countries.Suriname + ')');
			colour = D;
			break;
		case "slovakia":
			data = eval('(' + countries.Slovakia + ')');
			colour = D;
			break;
		case "slovenia":
			data = eval('(' + countries.Slovenia + ')');
			colour = B;
			break;
		case "sweden":
			data = eval('(' + countries.Sweden + ')');
			colour = D;
			break;
		case "swaziland":
			data = eval('(' + countries.Swaziland + ')');
			colour = D;
			break;
		case "syria":
			data = eval('(' + countries.Syria + ')');
			colour = D;
			break;
		case "switzerland":
			data = eval('(' + countries.Switzerland + ')');
			colour = D;
			break;
		case "chad":
			data = eval('(' + countries.Chad + ')');
			colour = A;
			break;
		case "togo":
			data = eval('(' + countries.Togo + ')');
			colour = C;
			break;
		case "thailand":
			data = eval('(' + countries.Thailand + ')');
			colour = B;
			break;
		case "tajikistan":
			data = eval('(' + countries.Tajikistan + ')');
			colour = C;
			break;
		case "turkmenistan":
			data = eval('(' + countries.Turkmenistan + ')');
			colour = D;
			break;
		case "east timor":
			data = eval('(' + countries.East_Timor + ')');
			colour = D;
			break;
		case "trinidad and tobago":
			data = eval('(' + countries.Trinidad_and_Tobago + ')');
			colour = D;
			break;
		case "tunisia":
			data = eval('(' + countries.Tunisia + ')');
			colour = A;
			break;
		case "turkey":
			data = eval('(' + countries.Turkey + ')');
			colour = A;
			break;
		case "taiwan":
			data = eval('(' + countries.Taiwan + ')');
			colour = C;
			break;
		case "tanzania":
			data = eval('(' + countries.Tanzania + ')');
			colour = D;
			break;
		case "uganda":
			data = eval('(' + countries.Uganda + ')');
			colour = B;
			break;
		case "ukraine":
			data = eval('(' + countries.Ukraine + ')');
			colour = B;
			break;
		case "uruguay":
			data = eval('(' + countries.Uruguay + ')');
			colour = D;
			break;
		case "usa":
			data = eval('(' + countries.Puerto_Rico + ')');
			map.addSource("puerto rico", data);
			map.addLayer({
				'id': "puerto rico",
				'type': 'fill',
				'source': "puerto rico",
				'layout': {},
				'paint': {
					'fill-color': B,
					'fill-opacity': 0.8
				}
			});
			data = eval('(' + countries.USA + ')');
			colour = B;
			break;
		case "uzbekistan":
			data = eval('(' + countries.Uzbekistan + ')');
			colour = B;
			break;
		case "venezuela":
			data = eval('(' + countries.Venezuela + ')');
			colour = B;
			break;
		case "vietnam":
			data = eval('(' + countries.Vietnam + ')');
			colour = D;
			break;
		case "vanuatu":
			data = eval('(' + countries.Vanuatu + ')');
			colour = B;
			break;
		case "yemen":
			data = eval('(' + countries.Yemen + ')');
			colour = B;
			break;
		case "uae":
			data = eval('(' + countries.United_Arab_Emirates + ')');
			colour = C;
			break;
		case "south africa":
			data = eval('(' + countries.South_Africa + ')');
			colour = A;
			break;
		case "zambia":
			data = eval('(' + countries.Zambia + ')');
			colour = A;
			break;
		case "zimbabwe":
			data = eval('(' + countries.Zimbabwe + ')');
			colour = C;
			break;
		default:
			found = false;
		}
	
		if(found){
			map.addSource(country, data);
			map.addLayer({
				'id': country,
				'type': 'fill',
				'source': country,
				'layout': {},
				'paint': {
					'fill-color': colour,
					'fill-opacity': 0.8
				}
			});
			document.getElementById('textbox').value = "";	
			countries_found++;
			document.getElementById('numbox').innerHTML = countries_found.toString();
		}
	}
	
	
	
}

