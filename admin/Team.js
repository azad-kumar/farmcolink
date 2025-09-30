// Team data (in required order)
const teamMembers = [
  { name: "Velangini Reddy - PGDM2025473", img: "https://www.svgrepo.com/show/483713/female-doctor-2.svg" },
  { name: "Azad Kumar - PGDM2025116", img: "https://www.svgrepo.com/show/483828/male-student-2.svg" },
  { name: "Shafaque Ara - PGDM25385", img: "https://www.svgrepo.com/show/483713/female-doctor-2.svg" },
  { name: "Pranay Dusharla - PGDM2025284", img: "https://www.svgrepo.com/show/483828/male-student-2.svg" },
  { name: "Vishal Kumar Singh - PGDM25465", img: "https://www.svgrepo.com/show/483828/male-student-2.svg" },
  { name: "Pranjali Shivhare - PGDM2025286", img: "https://www.svgrepo.com/show/483713/female-doctor-2.svg" },
  { name: "Rajnish - PGDM2025318", img: "https://www.svgrepo.com/show/483828/male-student-2.svg" }
];

// Target container
const teamContainer = document.getElementById("teamList");

// Render team dynamically
teamMembers.forEach(member => {
  const card = document.createElement("div");
  card.className = "p-2 lg:w-1/3 md:w-1/2 w-full";

  card.innerHTML = `
    <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
      <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
           src="${member.img}">
      <div class="flex-grow">
        <h2 class="text-gray-900 title-font font-medium">${member.name}</h2>
      </div>
    </div>
  `;

  teamContainer.appendChild(card);
});
