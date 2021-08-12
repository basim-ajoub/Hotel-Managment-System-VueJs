<template>
  <div id="app">
    <div id="nav">
      <div class="logo">
        <img src="./assets/ajoub-logo.png" alt="" />
        <h3>Ajjoub Hotel</h3>
      </div>
      <router-link to="/" id="list-btn"><span> Home</span></router-link>

      --------
      <a @click="viewEmployerList" id="list-btn"><span> Employer</span></a>

      <div id="employer-list">
        <router-link to="/show-employer">Show Employer</router-link>
        <router-link to="/salary-employer">Salary Employer</router-link>
        <router-link to="/attendance-employer">Attendance Employer</router-link>
        <router-link to="/add-employer">Add Employer</router-link>
      </div>
      --------

      <a @click="viewGuestList" id="list-btn"><span> Guest</span></a>
      <div id="guest-list">
        <router-link to="/show-guest">Show Guests</router-link>
        <router-link to="/add-guest">Add Guest</router-link>
      </div>
      --------

      <a @click="viewRoomList" id="list-btn"><span> Rooms</span></a>
      <div id="room-list">
        <router-link to="/resierved-room">Reservied Room</router-link>
        <router-link to="/available-room">Available-Room</router-link>
        <router-link to="/add-room">Add Room</router-link>
      </div>
      --------
    </div>
    <router-view class="main" />
  </div>
</template>

<script>
export default {
  name: "AppPage",
  methods: {
    viewEmployerList: function () {
      document.getElementById("employer-list").classList.toggle("active");
    },
    viewGuestList: function () {
      document.getElementById("guest-list").classList.toggle("active");
    },
    viewRoomList: function () {
      document.getElementById("room-list").classList.toggle("active");
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Indie+Flower&family=Lobster&family=Source+Sans+Pro&display=swap");
$pinkCol: rgba(255, 69, 96, 1);
$yellowCol: rgba(254, 176, 25, 1);
$lightyellowCol: rgb(255, 197, 82);
$lightGreenCol: rgba(0, 227, 150, 1);
$blueCol: rgba(0, 143, 251, 1);
$darkblueCol: #2c3e50;
* {
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.main {
  width: 79%;
  background-color: rgb(248, 228, 163);
  position: absolute;
  right: 0;
  height: 643px;
}
#nav {
  
    font-family: "Indie Flower", cursive;
  padding: 5px;
  width: 20%;
  height: 633px;
  float: left;
  background-color: $pinkCol;
  border-right: 0.5px solid $darkblueCol;
  box-shadow: 0px 10px 20px $pinkCol;
  .logo {
    cursor: grab;
    img {
      width: 90%;
      height: 140px;
      margin-bottom: 25px;
    }
    width: 100%;
    height: 180px;
    margin-bottom: 55px;
  }
  h3 {
    letter-spacing: 3px;
    padding-top: 4px;
    height:30px;
    border-bottom: 2px solid $darkblueCol;
    text-align: center;
    background-color: $lightyellowCol;
    color: white;
    border-radius: 25%;
    cursor: grab;
    animation: movment 2s infinite 0.5s alternate both;
    text-shadow: 1px 2px 4px $blueCol;
    &:active{
      cursor:grabbing;
      animation: stop;
    }
  }
  @keyframes movment {
    0% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes stop {

    100% {
      opacity: 1;
    }
  }
 
  a {
    font-weight: bold;
    color: #2c3e50;
    display: block;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    z-index: 0;
    position: relative;
    &.router-link-exact-active {
      color: #42b983;
    }
    span {
      z-index: 15;
      position: relative;
    }
  }
  #list-btn:after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: wheat;
    transition: all 0.35s;
    z-index: 0;
  }

  #list-btn:hover {
    color: black;
    border-top-left-radius: 25%;
    border-top-right-radius: 25%;
  }

  #list-btn:hover:after {
    width: 50%;
    border-top-left-radius: 25%;
    border-top-right-radius: 25%;
    margin-left: 25%;
  }
  #list-btn:active{
    cursor: wait;
  }

  #employer-list,
  #guest-list,
  #room-list {
    width: 65%;
    height: 85px;
    padding: 0px 5px 5px 9px;
    z-index: 10;
    margin-left: 15%;
    display: none;
    transition: 1s ease-in-out;
    transform: translateY(10px);
    margin-bottom: 1px;
  }
  #employer-list.active,
  #guest-list.active,
  #room-list.active {
    display: block;
    transition: 1s ease-in-out;
    transform: translateY(10px);
  }
  #guest-list.active {
    height: 40px;
  }
  #room-list.active {
    height: 60px;
  }
}
</style>
