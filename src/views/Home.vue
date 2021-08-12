<template>
  <div class="home">
    <div class="boxx">
      <div class="inside-box-item booking">
        <div class="box-icon">
          <fontawesome-icon id="fontawesome-icon" :icon="['fas', 'hotel']" />
          <p>{{ bookingroom }}</p>
        </div>
        <h4 id="box-title">Booking</h4>
      </div>

      <div class="inside-box-item empty-room">
        <div class="box-icon">
          <fontawesome-icon id="fontawesome-icon" :icon="['fas', 'bed']" />
          <p>{{ emptyroom }}</p>
        </div>
        <h4 id="box-title">Empty Room</h4>
      </div>

      <div class="inside-box-item check-out">
        <div class="box-icon">
          <fontawesome-icon
            id="fontawesome-icon"
            :icon="['fas', 'suitcase-rolling']"
          />
          <p class="">12</p>
        </div>
        <h4 id="box-title">Check Out</h4>
      </div>

      <div class="inside-box-item guest-number">
        <div class="box-icon">
          <fontawesome-icon id="fontawesome-icon" :icon="['fas', 'male']" />
          <p>{{guestsnumber}}</p>
        </div>
        <h4 id="box-title">Guest Number</h4>
      </div>
    </div>
    <div class="guest-expectaion-view">
      <h1>Guests</h1>
      <guestInfo class="charts-home" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import guestInfo from "../components/guestinfo.vue";
export default {
  name: "Home",
  components: {
    guestInfo,
  },
  data: function () {
    return {
      emptyroom: 0,
      bookingroom: 0,
      guestsnumber:0,
    };
  },
  mounted: function () {
    this.countEmptyRoomNumber(); //method show embty room  will execute at pageload 
    this.countBookingNumber(); //method show booking room  will execute at pageload 
    this.countGuestNumber(); //method show guest number  will execute at pageload
  },
  methods: {
    //Count Empty Room
    countEmptyRoomNumber: function () {
      // Start Show Rooms List

      for (let j = 2; j < 200; j++) {
        const roomInfoKey = "roomInfokey" + j;

        if (localStorage.getItem(roomInfoKey) !== null) {
          var retrievedInfo = localStorage.getItem(roomInfoKey);
          //reconvert the string to normal
          let deserializedRetrRoomInfo = JSON.parse(retrievedInfo);
          //end converting

          //filter with available room
          if (deserializedRetrRoomInfo.roomavailability == "available") {
            this.emptyroom = this.emptyroom + 1;
          }
        
        }

        // End Show Rooms List
      }
       
    },

    //count guest Number
    countGuestNumber: function () {
      // Start Show Rooms List

      for (let j = 2; j < 200; j++) {
        const guestInfoKey = "guestInfokey" + j;

        if (localStorage.getItem(guestInfoKey) !== null) {
          var retrievedInfo = localStorage.getItem(guestInfoKey);
          //reconvert the string to normal
          let deserializedRetrGuestInfo = JSON.parse(retrievedInfo);
          //end converting
        
          if(deserializedRetrGuestInfo.name !== ""){
        
            this.guestsnumber = this.guestsnumber + 1;
          }
        
        }

        // End Show Rooms List
      }
       
    },

     //count  booking  Number
    countBookingNumber: function () {
      // Start Show Rooms List

      for (let j = 2; j < 200; j++) {
        const roomInfoKey = "roomInfokey" + j;

        if (localStorage.getItem(roomInfoKey) !== null) {
          var retrievedInfo = localStorage.getItem(roomInfoKey);
          //reconvert the string to normal
          let deserializedRetrRoomInfo = JSON.parse(retrievedInfo);
          //end converting

          //filter with available room
          if (deserializedRetrRoomInfo.roomavailability == "unavailable") {
            this.bookingroom = this.bookingroom + 1;
          }
        
        }

        // End Show Rooms List
      }
       
    },
  },
};
</script>

<style lang="scss">
$MainColor: #0d2137;
$FontColor: #f3f298;
$defaultColor: #2e77ae;
$mainCol: rgb(248, 228, 163);
$redCol: rgb(236, 47, 47);
$pinkCol: rgba(255, 69, 96, 1);
$pinkColOp: rgba(255, 69, 97, 0.938);
$yellowCol: rgba(254, 176, 25, 1);
$lightGreenCol: rgba(0, 227, 150, 1);
$blueCol: rgba(0, 143, 251, 1);
$purpleCol: rgba(119, 93, 208, 1);
.boxx {
  @extend %container-box;
  padding-left: 1%;

  .inside-box-item {
    @extend %inside-box-item;
    border-radius: 10%;

    .box-icon {
      width: 100%;
      height: 80px;
    }
    #fontawesome-icon {
      border-radius: 50%;
      width: 20%;
      height: 40px;
      padding: 10px 10px 10px 10px;
      background-color: $pinkColOp;
      float: inline-end;
      margin-top: 10px;
      margin-left: 32%;
      box-shadow: 1px 1px 2px 2px $FontColor;
    }
    p {
      float: left;
      text-align: center;

      width: 20%;
      border-radius: 50%;
      height: 40px;
      background-color: $pinkColOp;
      margin-left: 2%;
      margin-top: 10px;
      box-shadow: 1px 1px 2px 2px $FontColor;
                        font-family: "Indie Flower", cursive;
           font-size: 30px;
    }
    #box-title {
      width: 100%;
      text-align: center;
      margin-top: 43px;
                        font-family: "Indie Flower", cursive;
           font-size: 22px;
           font-weight: bold;
      
    }
  }

  .empty-room {
    background-color: $yellowCol;
  }
  .booking {
    background-color: $blueCol;
  }
  .guest-number {
    background: $lightGreenCol;
  }
  .check-out {
    background: $purpleCol;
  }
}
%container-box {
  width: 95%;
  height: 200px;
  margin: 40px 5px 5px 5px;
  display: inline-flex;
}

%inside-box-item {
  width: 25%;
  height: 160px;
  float: left;
  margin: 3px 0px 3px 1px;
  cursor: pointer;
  margin-right: 2%;
  box-shadow: 0px 7px 10px $redCol;
  transition: 0.5s ease-in-out;
  z-index: 1;
  &:hover {
    transform: translateY(20px);
    background: linear-gradient(to top, $redCol, rgb(190, 38, 38));
    box-shadow: 0px 7px 10px $blueCol;
    opacity: 0.92;

    #fontawesome-icon,
    p,
    h4 {
      color: $mainCol;
    }
       #fontawesome-icon,
    p{
       box-shadow: 1px 1px  $FontColor;
       transition: 0.1s ease-in-out;
    }
    &:before {
      content: "Click Here";
      position: absolute;
      left: 0;
      top: 90px;
      background: $defaultColor;
      width: 100%;
      height: 25px;
      padding-top: 5px;
      opacity: 1;
      z-index: 3;
      border: 1px solid $mainCol;
    }
    &:active {
      cursor: wait;
    }
  }
}
.guest-expectaion-view {
  width: 50%;
  height: 300px;
  margin-top: 20px;
  position: absolute;
  h1{
                      font-family: "Indie Flower", cursive;
           font-size: 29px;
  }
  .charts-home .apexcharts-inner:hover {
    transform: scale(1.05);
    transition: 0.4s ease-in-out;
  }
}
</style>
