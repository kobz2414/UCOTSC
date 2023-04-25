<script>
    // Define the three research proponents
    const researchers = [
      { 
        id: 1, src: 'images/kim.png',
        name: "Jonathan Kim S. Sarong",
        bio: "Kim is a researcher with 10 years of experience in the field of transportation and logistics. He holds a PhD in Industrial Engineering from MIT and has published several papers in top-tier academic journals.",
      },
      {
        id: 2, src: 'images/franco.png',
        name: "Gianfranco M. Adana",
        bio: "Franco is a researcher with a background in urban planning and sustainable transportation. She is currently pursuing her PhD in Transportation Engineering at UC Berkeley and has presented her research at several international conferences.",
      },
      {
        id: 3, src: 'images/andre.png',
        name: "Andre Miguelle U. Lao",
        bio: "Andre is a data scientist with expertise in statistical modeling and machine learning. He has worked on a variety of transportation-related projects, including demand forecasting and route optimization.",
      },
    ];
  </script>

  <br>
  <br>
  <br>
  <div>
    <img alt="StreetView" class="w-full" src="images/StreetView.png" />
</div>
  <main class="w- full mx-auto  py-6 sm:px-6 lg:px-8">
    <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
      <!-- Company information section -->
      <div class="px-4 py-5 sm:p-6">
        <h2 class="text-2xl font-bold mb-4">About Van Terminal Company</h2>
        <p class="text-justify text-lg mb-4">
          <br>Van Terminal Company is a leading provider of logistics and transportation services in the United States. With a fleet of over 500 vehicles and a team of experienced drivers and logistics specialists, we are dedicated to delivering goods and products safely and efficiently.
        </p>
        <p class="text-justify text-lg mb-4">
          Our company was founded in 1985 and has since expanded to serve customers in all 50 states. We specialize in providing customized transportation solutions for businesses of all sizes, from small startups to large corporations.
        </p>
      </div>
  
      <!-- Researchers section -->
      <div class="px-4 py-5 sm:p-6">
        <h2 class="text-2xl font-bold mb-4">Meet Our Researchers</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          {#each researchers as researcher}
          <div class="bg-gray-100 p-6 rounded-lg">
            <img class="w-48 m-auto rounded-md max-w-sm rounded border bg-white p-1" src={researcher.src} alt={`Image ${researcher.id}`} />
            <br>
            <h3 class="text-lg font-bold mb-4">{researcher.name}</h3>
            <p class="text-base text-justify">{researcher.bio}</p>
          </div>
          {/each}
          <br>
        </div>
      </div>
    </div>
  </main>