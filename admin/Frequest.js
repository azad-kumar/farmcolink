const farmerRequests = [
  {
    farmer: "Ramesh Kumar",
    farmerId: "F001",
    company: "AgroTech Pvt Ltd",
    description: "Requesting collaboration for sugarcane farming support and equipment."
  },
  {
    farmer: "Sita Devi",
    farmerId: "F002",
    company: "FreshFoods Ltd",
    description: "Seeking buyer partnership for organic vegetable produce."
  },
  {
    farmer: "Mohan Lal",
    farmerId: "F003",
    company: "GreenEnergy Corp",
    description: "Interested in supplying raw crops for biofuel production."
  },
  {
    farmer: "Anita Sharma",
    farmerId: "F004",
    company: "Organic Harvesters",
    description: "Wants to sell certified organic groundnuts and millets."
  },
  {
    farmer: "Vikram Singh",
    farmerId: "F005",
    company: "CottonWorks Ltd",
    description: "Looking to provide high-quality cotton directly to industry."
  },
  {
    farmer: "Lakshmi Rao",
    farmerId: "F006",
    company: "FruitEx Traders",
    description: "Requesting long-term fruit supply contract for export."
  },
  {
    farmer: "Karan Patel",
    farmerId: "F007",
    company: "DairyFresh Co",
    description: "Seeking tie-up for fodder supply to dairy farms."
  },
  {
    farmer: "Ravi Prakash",
    farmerId: "F008",
    company: "BioFuel Innovators",
    description: "Offering surplus crops for biofuel processing units."
  },
  {
    farmer: "Manju Devi",
    farmerId: "F009",
    company: "Tea & Cashew Exports",
    description: "Looking for long-term buyers for tea leaves and cashew nuts."
  },
  {
    farmer: "Sunil Yadav",
    farmerId: "F010",
    company: "Urban Veggie Corp",
    description: "Interested in supplying hydroponic vegetables to urban markets."
  }
];

function renderFarmerRequests() {
  const container = document.getElementById("farmerRequests");
  container.innerHTML = "";

  farmerRequests.forEach(req => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td class="px-4 py-3">${req.farmer} <span class="text-gray-500 text-sm">(${req.farmerId})</span></td>
      <td class="px-4 py-3">${req.company}</td>
      <td class="px-4 py-3">${req.description}</td>
    `;
    container.appendChild(row);
  });
}

// Initial render
renderFarmerRequests();
