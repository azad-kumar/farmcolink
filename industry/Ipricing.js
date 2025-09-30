const plans = [
  {
    name: "Basic",
    annualPrice: 290,
    features: [
      "List 1 land request only",
      "Visible to 3 interested industries",
      "Basic support (Email only)"
    ]
  },
  {
    name: "Professional",
    annualPrice: 590,
    features: [
      "List up to 5 Land requests",
      "Priority listing to industries",
      "Phone & Email support",
      "Get market insights on crop demand"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    annualPrice: 1190,
    features: [
      "List unlimited land area",
      "Custom crop & soil matching with industries",
      "Dedicated account manager",
      "Full industry-farmer partnership support"
    ]
  }
];

function renderPlans() {
  const container = document.getElementById("pricingCards");
  container.innerHTML = "";

  plans.forEach(plan => {
    const price = `₹${plan.annualPrice}/yr`;

    const card = document.createElement("div");
    card.className = "p-4 xl:w-1/3 md:w-1/2 w-full";

    card.innerHTML = `
      <div class="h-full p-6 rounded-lg border-2 ${plan.popular ? "border-indigo-500" : "border-gray-300"} flex flex-col relative overflow-hidden">
        ${plan.popular ? '<span class="bg-indigo-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">POPULAR</span>' : ""}
        <h2 class="text-sm tracking-widest title-font mb-1 font-medium">${plan.name.toUpperCase()}</h2>
        <h1 class="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
          <span>${price}</span>
        </h1>
        ${plan.features.map(f => `
          <p class="flex items-center text-gray-600 mb-2">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>${f}
          </p>
        `).join("")}
        <button class="flex items-center mt-auto text-white ${plan.popular ? "bg-indigo-500 hover:bg-indigo-600" : "bg-gray-400 hover:bg-gray-500"} border-0 py-2 px-4 w-full focus:outline-none rounded selectPlanBtn" data-plan="${plan.name}">
          Apply Now
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    `;

    container.appendChild(card);
  });

  attachButtonHandlers();
}

function attachButtonHandlers() {
  document.querySelectorAll(".selectPlanBtn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const plan = e.target.closest("button").dataset.plan;
      alert(`You applied with the ${plan} plan!`);
      window.location.href = "thankyou.html";
    });
  });
}

// Initial render
renderPlans();
