interface Planet{
	name: string,
	weather: string
}
class Earth implements Planet{
	name: string;
	weather: string;
}
let planet: Planet;

class Pluto{
	name: string;
	weather: string;
}

planet =  new Pluto();