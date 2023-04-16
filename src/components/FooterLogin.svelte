<script>
  import { url } from "@roxi/routify";
  import { Home, Alert, About, Units } from "../components";
  import { navigate } from "svelte-routing";

  function handleHomeButtonClick() {
    navigate("/Home");
  }

  function handleUnitsLoginButtonClick() {
    navigate("/UnitsLogin");
  }

  function handleAlertLogintButtonClick() {
    navigate("/AlertLogin");
  }

  function handleAboutButtonClick() {
    navigate("/About");
  }
</script>

<footer>
  <div class="nav-icons">
    <div class="p-4">
      <button class="icon-button" on:click={handleHomeButtonClick}>
        <img
          alt="Home"
          class="icon"
          src="assets/images/Home.png"
        />
        <div class="sub-title">Home</div>
      </button>
    </div>
    <div class="p-4">
      <button class="icon-button" on:click={handleUnitsLoginButtonClick}>
        <img
          alt="Van"
          class="icon"
          src="assets/images/Van.png"
        />
        <div class="sub-title">Units</div>
      </button>
    </div>
    <div class="p-4">
      <button class="icon-button" on:click={handleAlertLogintButtonClick}>
        <img
          alt="Alert"
          class="icon"
          src="assets/images/Alert.png"
        />
        <div class="sub-title">Alerts</div>
      </button>
    </div>
    <div class="p-4">
      <button class="icon-button" on:click={handleAboutButtonClick}>
        <img
          alt="About"
          class="icon"
          src="assets/images/About.png"
        />
        <div class="sub-title">More</div>
      </button>
    </div>
  </div>
</footer>

<style>
  footer {
    position: fixed;
    flex-shrink: 0;
    bottom: 0;
    z-index: 50;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: black;
    color: white;
  }
  .nav-icons {
    margin-left: auto;
    margin-right: auto;
  }
  .p-4 {
    display: inline-block;
    margin: 0px 10px;
  }
  .icon {
    width: 25px;
    margin-left: auto;
    margin-right: auto;
  }
  .sub-title {
    margin-top: 10px;
    margin-left: auto;
    margin-right: auto;
    font-size: 10px;
  }
</style>
