<script>
  import units from "../database/getTotalNumberOfUnits";
  import { onDestroy } from "svelte";

  let totalNumberOfUnitsArray = $units;

  // Subscribe to the num store and update the component when the value changes
  const unsubscribe = units.subscribe((value) => {
    totalNumberOfUnitsArray = value;
  });

  // Don't forget to unsubscribe when the component is destroyed
  onDestroy(() => {
    unsubscribe();
  });
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
</div>
<main class="w- full mx-auto  py-6 sm:px-6 lg:px-8">
  <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
    <!-- Alerts section -->
    <div class="heading">
      <h2 class="text-2xl font-bold mb-4">Van Units</h2>
    </div>

    <div class="margin-info"> 
      <div class="con-info">
        <div class="con-in">
            <div class="con-peak">
                <img class="vanimg" src="images/vanunit.png" alt="Van L340">
            </div>
        </div>

        <div class="con-in">
          <div class="main-title">
            UNITS | Available L340 Van Units in Terminal
          </div>
          <div class="van-stat">
            <div class="stat">
              <br />
              <div class="stat-heada">Total Stationed</div>
              <div class="stat-desca">
                {totalNumberOfUnitsArray.filter(
                  (unit) => unit.status === "In Queue"
                ).length}
              </div>
            </div>

            <div class="stat">
              <div class="stat-headb">Total Dispatched</div>
              <div class="stat-descb">
                {totalNumberOfUnitsArray.filter(
                  (unit) => unit.status === "Dispatched"
                ).length}
              </div>
            </div>
          </div>
          <div class="desc">
           The Total Stationed is the number of L300 van units that are queuing at the terminal. 
           <br><br>
           The Total Dispatched is the number of L300 van units that are currently on the road.
          </div>
        </div>
      </div>
      <br />
      <br />
  </div>
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
  .con-peak{
    border-radius: 20px;
    border: none;
    height: 170px;
    width: 300px;
    top: 200px;
    background: url(images//road.jpg);
    background-size: 100%;
    color: white;
    text-align: center;
    font-size: 25px;
    font-weight: bold;
    margin-left: auto;
    margin-right: auto;
    text-shadow: 2px 2px 12px #000;
}
.con-info{
    display: block;
    width: auto;
    height: auto;
    top: 170px;
}
.vanimg{
     display: block;
    margin-left: auto;
    margin-right: auto;
    width: 125px;
    position: absolute;
    top: 50px;
    right: 0;
    left: 0;
}
.con-in{
    display: block;
    position: relative;
    height: auto;
    width: auto;
    margin-bottom: 10px;
    margin-top: 10px;
    
}
.main-title{
    color: black;
    font-weight: 700;
    text-align: center;
    line-height: 1.2;
    padding: 10px 0px;
    font-size: 20px;
    border-bottom: 1px solid rgb(197, 197, 197);
    margin-bottom: 5px;
}
.desc{
    color: black;
    top: 25px;
    font-size: 12px;
    text-align: justify;
    font-size: 15px;
    padding: 0px 50px;
}
.van-stat{
  margin-bottom: 20px;
}
.stat{
  display: inline-block;
  margin: 0px 10px;
  line-height: 1;
  border-bottom: 2px solid;
  border-bottom-style: dashed;
  padding-bottom: 7px;
}
.stat-heada{
  font-size: 15px;
  font-weight: bold;
}
.stat-headb{
  font-size: 15px;
  font-weight: bold;
}
.stat-desca{
  font-size: 30px;
  font-weight: 600;
}
.stat-descb{
  font-size: 30px;
  font-weight: 600;
}
</style>
