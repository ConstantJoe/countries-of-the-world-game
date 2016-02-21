function localization(country, language)
{
	if (typeof language[country] !== 'undefined')
	{
		return language[country];	
	} 
	else
	{
		return country;	
	}
}

var english = {
	"the bahamas" : "bahamas",
	"bosnia and herzegovina" : "bosnia-herzegovina",
	"car" : "central african republic",
	"dr congo" : "democratic republic of the congo",
	"congo republic" : "republic of the congo",
	"sahrawi arab democratic republic" : "western sahara",
	"great britain" : "united kingdom",
	"uk" : "united kingdom",
	"guinea bissau" : "guinea-bissau",
	"the gambia" : "gambia",
	"cote d'ivoire" : "ivory coast",
	"republic of ireland" : "ireland",
	"macedonia" : "fyr macedonia",
	"burma" : "myanmar",
	"the philippines" : "philippines",
	"west bank" : "palestine",
	"taipei" : "taiwan",
	"the ukraine" : "ukraine",
	"united states of america" : "usa",
	"america" : "usa", 
	"united arab emirates" : "uae"
}
