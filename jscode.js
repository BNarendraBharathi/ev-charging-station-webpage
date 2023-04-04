function calculateChargingCost() {
	// Get user inputs
	var model = document.getElementById("model").value;
	var percentage = document.getElementById("percentage").value;

	// Get EV data from the dataset
	var evData = getEVData(model);

	// Calculate charging cost based on user inputs
	var chargingCost = (evData.batteryCapacity * percentage * evData.chargingRate) / 100;

	// Display result
	var resultElement = document.getElementById("result");
	resultElement.innerHTML = "<p><strong>Model:</strong> " + model + "</p>" +
		"<p><strong>Battery Capacity:</strong> " + evData.batteryCapacity + " kWh</p>" +
		"<p><strong>Charging Rate:</strong> " + evData.chargingRate + " kW</p>" +
		"<p><strong>Total Cost:</strong> Rs. " + chargingCost.toFixed(2) + "</p>";
}

function getEVData(model) {
	// EV dataset
	var evDataset = [		{			model: "Tata Nexon EV",			batteryCapacity: 30.2,			chargingRate: 7.2		},		{			model: "MG ZS EV",			batteryCapacity: 44.5,			chargingRate: 6.6		},		{			model: "Hyundai Kona Electric",			batteryCapacity: 39.2,			chargingRate: 7.2		},		{			model: "Mahindra eKUV100",			batteryCapacity: 15.9,			chargingRate: 2.3		},		{			model: "Tata Tigor EV",			batteryCapacity: 26,			chargingRate: 7.2		},		{			model: "Mahindra eVerito",			batteryCapacity: 21.2,			chargingRate: 3.3		},		{			model: "Okinawa iPraise+",			batteryCapacity: 2.7,			chargingRate: 0.75		},		{			model: "Hero Electric Optima HX",			batteryCapacity: 0.72,			chargingRate: 0.5		},		{			model: "Ather 450X",			batteryCapacity: 2.61,			chargingRate: 1.5		},		{			model: "Revolt RV400",			batteryCapacity: 3.24,			chargingRate: 3.0		}	];

	// Find the EV data for the selected model
	for (var i = 0; i < evDataset.length; i++) {
		if (evDataset[i].model === model) {
			return evDataset[i];
		}
	}
}
