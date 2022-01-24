     var marker = new mapboxgl.Marker({
 		 color: '#e75480',
	})
		  
	async function run(){
	
   		// get bus data    
		const locations = await getBusLocations();
		console.log(new Date());
		console.log(locations);
		//console.log(locations[0].attributes.longitude);//this gives me the error 'cannot read properties of undefined(reading 'longitude')'
	var lng = locations[0].attributes.longitude 
	var lat = locations[0].attributes.latitude 

		
		// timer
		setTimeout(run, 15000);
		
        marker.setLngLat([lng,lat])
      	        .addTo(map)	
	}


	async function remove(){
		let marker1 = await fetch(marker)
		marker1.remove();
	}

	// Request bus data from MBTA
	async function getBusLocations(){
		const url = 'https://api-v3.mbta.com/vehicles?filter[route]=1&include=trip';
		const response = await fetch(url);
		const json     = await response.json();
		return json.data;
	}

	run();
