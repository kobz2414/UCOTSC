<script>
    // Define the three research proponents
    const researchers = [
      { 
        id: 1, src: 'assets/images/kim.png',
        name: "Jonathan Kim S. Sarong",
        bio: "Kim is a researcher with 10 years of experience in the field of transportation and logistics. He holds a PhD in Industrial Engineering from MIT and has published several papers in top-tier academic journals.",
      },
      {
        id: 2, src: 'assets/images/franco.png',
        name: "Gianfranco M. Adana",
        bio: "Franco is a researcher with a background in urban planning and sustainable transportation. She is currently pursuing her PhD in Transportation Engineering at UC Berkeley and has presented her research at several international conferences.",
      },
      {
        id: 3, src: 'assets/images/andre.png',
        name: "Andre Miguelle U. Lao",
        bio: "Andre is a data scientist with expertise in statistical modeling and machine learning. He has worked on a variety of transportation-related projects, including demand forecasting and route optimization.",
      },
    ];
  </script>

  <br>
  <br>
  <br>
  <div>
</div>
<main class="w- full mx-auto  py-6 sm:px-6 lg:px-8">
  <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
    <!-- Alerts section -->
    <div class="heading">
      <h2 class="text-2xl font-bold mb-4">Notification</h2>
    </div>
    <div class="margin-info"> 
      <div class="con-info">
        <div class="date">Today</div>
          <div class="alert">
              <img class="avatar" src="assets/images/user.png" alt="avatar">
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text...</p>
              <img class="thumbnail" src="assets/images/background.png" alt="thumbnail">
          </div>
        
          <div class="date">Older</div>
            <div class="alert">
                <img class="avatar" src="assets/images/user.png" alt="avatar">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text...</p>
                <img class="thumbnail" src="assets/images/background.png" alt="thumbnail">
            </div>
            <br>
            <div class="alert">
              <img class="avatar" src="assets/images/user.png" alt="avatar">
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text...</p>
              <img class="thumbnail" src="assets/images/background.png" alt="thumbnail">
          </div>
        </div>
      </div>
      <br>
      <br>
  </div>
  <br>
  <br>
</main>
<style>
  main{
    background: white;
  }
  .heading{
    margin: 30px 20px;
  }
  .margin-info{
    margin: 10px 20px;
    border-radius: 0.5rem;
  }
  .con-info{
    text-align: center;
    display: block;
    width: auto;
    height: auto;
    top: 170px;
    margin-left: auto;
    margin-right: auto;
    background: #f3f4f6;
    padding: 20px 20px;
  }
  .alert{
    border-bottom: 1px solid rgb(218, 218, 218);
  }
  .avatar{
    z-index: 0;
    width: 35px;
    display: inline-block;
    margin: 0px 10px;
  }
  p{
      color: black;
      display: inline-block;
      width: auto;
      border: 1px solid white;
      font-size: 12px;
      text-align: justify;
  }
  .thumbnail{
      width: 95px;
      height: 60px;
      display: inline-block;
      background: white;
      margin: 5px;
      border-radius: 5px;
      margin: 0px 10px;
  }
  .date{
    margin: 10px 0px;
  }
</style>