const requests = [
  {
    industry: "AgroTech Pvt Ltd",
    email: "contact@agrotech.com",
    farmer: "Ramesh Kumar",
    farmerId: "F001",
    description: "Looking for 10 acres of irrigated land for sugarcane production."
  },
  {
    industry: "FreshFoods Ltd",
    email: "hr@freshfoods.com",
    farmer: "Sita Devi",
    farmerId: "F002",
    description: "Need vegetable farming land near Bangalore for organic supply chain."
  },
  {
    industry: "GreenEnergy Corp",
    email: "info@greenenergy.com",
    farmer: "Mohan Lal",
    farmerId: "F003",
    description: "Require large land parcel for biofuel crop cultivation."
  },
  {
    industry: "Organic Harvesters",
    email: "support@organic-harvest.com",
    farmer: "Anita Sharma",
    farmerId: "F004",
    description: "Looking for organic-certified farms to grow groundnuts and millets."
  },
  {
    industry: "CottonWorks Ltd",
    email: "cotton@cottonworks.com",
    farmer: "Vikram Singh",
    farmerId: "F005",
    description: "Interested in 15 acres of black soil land for cotton production."
  },
  {
    industry: "FruitEx Traders",
    email: "traders@fruitex.com",
    farmer: "Lakshmi Rao",
    farmerId: "F006",
    description: "Need fruit farms for export-grade mango and banana supply."
  },
  {
    industry: "DairyFresh Co",
    email: "partnerships@dairyfresh.com",
    farmer: "Karan Patel",
    farmerId: "F007",
    description: "Seeking grassland for cattle grazing and fodder production."
  },
  {
    industry: "BioFuel Innovators",
    email: "connect@biofuelinnovators.com",
    farmer: "Ravi Prakash",
    farmerId: "F008",
    description: "Looking for 20 acres to cultivate crops for biofuel processing."
  },
  {
    industry: "Tea & Cashew Exports",
    email: "exports@cashewtea.com",
    farmer: "Manju Devi",
    farmerId: "F009",
    description: "Require hilly terrain farms for tea and cashew plantation."
  },
  {
    industry: "Urban Veggie Corp",
    email: "cityfarm@urbanveggie.com",
    farmer: "Sunil Yadav",
    farmerId: "F010",
    description: "Interested in urban farms for hydroponic vegetable cultivation."
  }
];

function renderRequests() {
  const container = document.getElementById("industryRequests");
  container.innerHTML = "";

  requests.forEach(req => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td class="px-4 py-3">${req.industry}</td>
      <td class="px-4 py-3">${req.email}</td>
      <td class="px-4 py-3">${req.farmer} <span class="text-gray-500 text-sm">(${req.farmerId})</span></td>
      <td class="px-4 py-3">${req.description}</td>
    `;
    container.appendChild(row);
  });
}

// Initial render
renderRequests();
