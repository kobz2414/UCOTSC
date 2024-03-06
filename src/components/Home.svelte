<script>
  import terminalCapacity from "../database/maxNumberOfPeople";
  import { people } from "../database/getTotalNumberOfPeople";
  import units from "../database/getTotalNumberOfUnits";
  import maxOccupants from "../database/maxNumberOfOccupants";
  import Carousel from "svelte-carousel";

  let colorClass = "";
  let ratio;
  let colorChip = "";

  // Reactive assignments from stores
  $: maximumOccupants = $maxOccupants;
  $: totalNumberOfUnitsArray = $units;
  $: maxTerminalCapacity = $terminalCapacity;


  // Reactive calculations based on store values
  $: numCars = totalNumberOfUnitsArray.filter(
    (unit) => unit.status === "In Queue"
  ).length;
  $: maximumOccupantsVal = maximumOccupants ?? 0;
  $: maxTerminalCapacityVal = maxTerminalCapacity ?? 0;
  $: remainingPeople = $people - numCars * maximumOccupantsVal;
  $: ratio = remainingPeople / maxTerminalCapacityVal;
    // Reactive URL for chip image based on colorChip
  $: chipImageSrc = `images/${colorChip}-chip.png`; // Example path, adjust according to your actual image storage path

  // Reactive conditional logic for setting colorClass
  $: {
    if (ratio >= 0.7) {
      colorClass = "bg-red-500";
    } else if (ratio >= 0.4) {
      colorClass = "bg-yellow-500";
    } else {
      colorClass = "bg-green-500";
    }
  }

  const images = [
    {
      src: "images/byday.png",
      alt: "Average Passenger per Day",
      description:
        "According to the analysis of our current data trend, it has been observed that Monday records the highest average passenger count among all the days of the week. The visual representation of the data demonstrates that the average number of passengers on Monday amounts to approximately 350 per day.",
    },
    {
      src: "images/byhour.png",
      alt: "Average Passenger per Hour",
      description:
        "As per the analysis of our current data trend, it has been observed that the time slot of 7:00 to 7:59 AM on Mondays records the highest average passenger count by hour of the day. The visual representation of the data illustrates that during this time slot, the average number of passengers on Mondays amounts to approximately 60 plus per day. This information provides valuable insights into the peak hours of passenger traffic on Mondays, which can be useful for commuters to plan their travel accordingly.",
    },
    {
      src: "images/byhourtues.png",
      alt: "Average Passenger per Hour",
      description:
        "Based on the analysis of our current data trend, it can be observed that the time window of 8:00 to 8:59 AM on Tuesdays experiences the highest average passenger count per hour of the day. The accompanying visual representation of the data shows that the average number of passengers during this period on Tuesdays is approximately 40 plus per day. These insights into the peak hours of passenger traffic on Tuesdays can prove to be beneficial for commuters in planning their journeys and avoiding congestion during rush hour.",
    },
    {
      src: "images/byhourwed.png",
      alt: "Average Passenger per Hour",
      description:
        "On Wednesdays, the time slot of 8:00 to 8:59 AM records the highest average passenger count per hour of the day, with approximately 30 plus passengers on average during this period, as indicated by the accompanying visual representation based on our current data trend. These insights can assist commuters in avoiding peak congestion and planning their travel accordingly.",
    },
    {
      src: "images/byhourthurs.png",
      alt: "Average Passenger per Hour",
      description:
        "Similarly, on Thursdays and Fridays, the time frame of 8:00 to 8:59 AM experiences the highest average passenger count per hour of the day, with approximately 35 plus passengers on average during this period, as illustrated by the accompanying visual representation based on our current data trend. Commuters can use this information to plan their travel and avoid peak congestion during these days and hours.",
    },
    {
      src: "images/byhourfri.png",
      alt: "Average Passenger per Hour",
      description:
        "Similarly, on Thursdays and Fridays, the time frame of 8:00 to 8:59 AM experiences the highest average passenger count per hour of the day, with approximately 35 plus passengers on average during this period, as illustrated by the accompanying visual representation based on our current data trend. Commuters can use this information to plan their travel and avoid peak congestion during these days and hours.",
    },
    {
      src: "images/l3.png",
      alt: "Average Passenger per Hour",
      description:
        "The L300 Van is a reliable and efficient public utility vehicle used for public transportation. It has a spacious and comfortable interior, capable of accommodating up to 16 passengers. Equipped with a powerful and fuel-efficient engine, the L300 Van can handle various road conditions with ease. Its durable and sturdy build ensures safe and secure transportation for commuters. With its accessibility and affordability, the L300 Van is a popular choice for public transportation in urban and rural areas.",
    },
    {
      src: "images/forecast.png",
      alt: "Average Passenger per Hour",
      description:
        "This data visualization displays the results of a forecasting analysis performed on the current dataset using the fbprophet algorithm. The forecast extends to 100 days in the future and pertains to the average daily passenger count at a public utility terminal. The graphical representation of the forecasting results allows for easy comprehension and interpretation, enabling stakeholders to make informed decisions based on the anticipated passenger traffic.",
    },
  ];

  const byhour = [
    {
      src: "images/avebyhour.png",
      alt: "Average Passenger per Hour",
      description:
        "As per the analysis of our current data trend, it has been observed that the time slot of 7:00 to 7:59 AM on Mondays records the highest average passenger count by hour of the day. The visual representation of the data illustrates that during this time slot, the average number of passengers on Mondays amounts to approximately 60 plus per day. This information provides valuable insights into the peak hours of passenger traffic on Mondays, which can be useful for commuters to plan their travel accordingly.",
    },
    {
      src: "images/byhour.png",
      alt: "Average Passenger per Hour",
      description:
        "As per the analysis of our current data trend, it has been observed that the time slot of 7:00 to 7:59 AM on Mondays records the highest average passenger count by hour of the day. The visual representation of the data illustrates that during this time slot, the average number of passengers on Mondays amounts to approximately 60 plus per day. This information provides valuable insights into the peak hours of passenger traffic on Mondays, which can be useful for commuters to plan their travel accordingly.",
    },
    {
      src: "images/byhourtues.png",
      alt: "Average Passenger per Hour",
      description:
        "Based on the analysis of our current data trend, it can be observed that the time window of 8:00 to 8:59 AM on Tuesdays experiences the highest average passenger count per hour of the day. The accompanying visual representation of the data shows that the average number of passengers during this period on Tuesdays is approximately 40 plus per day. These insights into the peak hours of passenger traffic on Tuesdays can prove to be beneficial for commuters in planning their journeys and avoiding congestion during rush hour.",
    },
    {
      src: "images/byhourwed.png",
      alt: "Average Passenger per Hour",
      description:
        "On Wednesdays, the time slot of 8:00 to 8:59 AM records the highest average passenger count per hour of the day, with approximately 30 plus passengers on average during this period, as indicated by the accompanying visual representation based on our current data trend. These insights can assist commuters in avoiding peak congestion and planning their travel accordingly.",
    },
    {
      src: "images/byhourthurs.png",
      alt: "Average Passenger per Hour",
      description:
        "Similarly, on Thursdays and Fridays, the time frame of 8:00 to 8:59 AM experiences the highest average passenger count per hour of the day, with approximately 35 plus passengers on average during this period, as illustrated by the accompanying visual representation based on our current data trend. Commuters can use this information to plan their travel and avoid peak congestion during these days and hours.",
    },
    {
      src: "images/byhourfri.png",
      alt: "Average Passenger per Hour",
      description:
        "Similarly, on Thursdays and Fridays, the time frame of 8:00 to 8:59 AM experiences the highest average passenger count per hour of the day, with approximately 35 plus passengers on average during this period, as illustrated by the accompanying visual representation based on our current data trend. Commuters can use this information to plan their travel and avoid peak congestion during these days and hours.",
    },
  ];
  const predbyhour = [
    {
      src: "images/avepredbyhour.png",
      alt: "Average Passenger per Hour",
      description:
        "As per the analysis of our current data trend, it has been observed that the time slot of 7:00 to 7:59 AM on Mondays records the highest average passenger count by hour of the day. The visual representation of the data illustrates that during this time slot, the average number of passengers on Mondays amounts to approximately 60 plus per day. This information provides valuable insights into the peak hours of passenger traffic on Mondays, which can be useful for commuters to plan their travel accordingly.",
    },
    {
      src: "images/predbyhourmon.png",
      alt: "Average Passenger per Hour",
      description:
        "As per the analysis of our current data trend, it has been observed that the time slot of 7:00 to 7:59 AM on Mondays records the highest average passenger count by hour of the day. The visual representation of the data illustrates that during this time slot, the average number of passengers on Mondays amounts to approximately 60 plus per day. This information provides valuable insights into the peak hours of passenger traffic on Mondays, which can be useful for commuters to plan their travel accordingly.",
    },
    {
      src: "images/predbyhourtues.png",
      alt: "Average Passenger per Hour",
      description:
        "Based on the analysis of our current data trend, it can be observed that the time window of 8:00 to 8:59 AM on Tuesdays experiences the highest average passenger count per hour of the day. The accompanying visual representation of the data shows that the average number of passengers during this period on Tuesdays is approximately 40 plus per day. These insights into the peak hours of passenger traffic on Tuesdays can prove to be beneficial for commuters in planning their journeys and avoiding congestion during rush hour.",
    },
    {
      src: "images/predbyhourwed.png",
      alt: "Average Passenger per Hour",
      description:
        "On Wednesdays, the time slot of 8:00 to 8:59 AM records the highest average passenger count per hour of the day, with approximately 30 plus passengers on average during this period, as indicated by the accompanying visual representation based on our current data trend. These insights can assist commuters in avoiding peak congestion and planning their travel accordingly.",
    },
    {
      src: "images/predbyhourthur.png",
      alt: "Average Passenger per Hour",
      description:
        "Similarly, on Thursdays and Fridays, the time frame of 8:00 to 8:59 AM experiences the highest average passenger count per hour of the day, with approximately 35 plus passengers on average during this period, as illustrated by the accompanying visual representation based on our current data trend. Commuters can use this information to plan their travel and avoid peak congestion during these days and hours.",
    },
    {
      src: "images/predbyhourfri.png",
      alt: "Average Passenger per Hour",
      description:
        "Similarly, on Thursdays and Fridays, the time frame of 8:00 to 8:59 AM experiences the highest average passenger count per hour of the day, with approximately 35 plus passengers on average during this period, as illustrated by the accompanying visual representation based on our current data trend. Commuters can use this information to plan their travel and avoid peak congestion during these days and hours.",
    },
  ];

  const aveandpredbyday = [
    {
      src: "images/byday.png",
      alt: "Average Passenger per Day",
      description:
        "According to the analysis of our current data trend, it has been observed that Monday records the highest average passenger count among all the days of the week. The visual representation of the data demonstrates that the average number of passengers on Monday amounts to approximately 350 per day.",
    },
    {
      src: "images/avepredday.png",
      alt: "Average Passenger per Day",
      description:
        "According to the analysis of our current data trend, it has been observed that Monday records the highest average passenger count among all the days of the week. The visual representation of the data demonstrates that the average number of passengers on Monday amounts to approximately 350 per day.",
    },
  ];
</script>

<br />
<br />
<br />
<br />
<div class="heading">
  <h2 class="text-2xl font-bold mb-4">Home</h2>
</div>
<div
  class="flex flex-col items-center justify-center h-28 px-4 bg-gray-200 text-gray-800"
>
  <div class="flex items-center">
    <span class="mr-2 font-bold">Current people:</span>
    <span class="font-medium">{$people}</span>
  </div>
  <div class="flex items-center mt-1">
    <span class="mr-2 font-bold">Terminal Status:</span>
    <span>
      <div class="flex items-center">
        <span class="h-3 w-3 rounded-full mr-2 {colorClass}"></span>
        <div class="text-gray-800 font-medium">
          {#if ratio >= 0.7}
            Crowded
          {:else if ratio >= 0.4}
            Slightly Crowded
          {:else}
            Not crowded
          {/if}
        </div>
      </div>
    </span>
  </div>
  <div class="flex items-center justify-center mt-4">
    <span class="mr-2 font-bold">Chips on deck:</span>
    <img src="{chipImageSrc}" alt="Current Chip" class="h-8 w-8 rounded-full"> <!-- Adjust height and width as needed -->
  </div>
</div>
<br /><br />
<p class="mr-2 font-bold text-center">
  Average and Predicted Average Passenger Count Per Day
</p>

<Carousel navigation>
  {#each aveandpredbyday as { src, alt }}
    <div class="container">
      <img class="image" {src} {alt} />
    </div>
  {/each}
</Carousel>

<br />
<br />
<br />
<br />

<style>
  .heading {
    margin: 30px 20px;
  }

  .margin-info {
    margin: 10px 20px;
  }

  .con-info {
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

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: lightgrey;
    padding: 15px;
    margin: 10px;
    margin-left: auto;
    margin-right: auto;
  }
  .image {
    width: auto;
    height: auto;
    object-fit: contain;
  }
  .description {
    text-align: justify;
    margin-top: 10px;
  }
</style>
