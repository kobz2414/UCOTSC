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
      bio: "Franco is a researcher with a background in urban planning and sustainable transportation. He is an expert in web development and Python scripting expert, crafting robust websites and applications with a focus on user experience and automation.",
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
      <h2 class="text-2xl font-bold mb-4 text-center">About United Calinan Operators Transport Service Cooperative</h2>
      <p class="text-justify text-lg mb-4">
        <br>United Calinan Operators Transport Service Cooperative (UCOTSC) is a cooperative of transport service operators in Calinan, Davao City. It was established in 2019 to provide a platform for transport service operators to share resources and collaborate on projects. UCOTSC is a member of the United Transport Service Cooperative (UTSC), a network of cooperatives in the Philippines that provides a platform for transport service operators to share resources and collaborate on projects.
      </p>
    </div>


    <h2 class="text-2xl font-bold mb-4 text-center">What vehicle unit model do we deploy?</h2>
    <div>
      <img alt="StreetView" class="w-full" src="images/l3.png" />
  </div>
    <div class="px-4 py-5 sm:p-6">
     
      <p class="text-justify text-lg mb-4">
        <br>The United Calinan Operators Transport Service Cooperative deploys L300 vans. The L300 Van is a reliable and efficient public utility vehicle used for public transportation. It has a spacious and comfortable interior, capable of accommodating up to 18 passengers. Equipped with a powerful and fuel-efficient engine, the L300 Van can handle various road conditions with ease. Its durable and sturdy build ensures safe and secure transportation for commuters. With its accessibility and affordability, the L300 Van is a popular choice for public transportation in urban and rural areas.
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
