<template>
  <div class="salary-employer-comp">
    <h1>Employer's Salary</h1>
    <!--Create Salary Employers Table-->
    <div class="salary-lists">
      <table id="salary-table">
        <tr>
          <th id="col1">No.</th>
          <th id="col2">Name</th>
          <th id="col3">Position</th>
          <th id="col4">Month</th>
          <th id="col5">Year</th>
          <th id="col6">Total Days OF Month</th>
          <th id="col7">Taken Leave</th>
          <th id="col8">Worked Days</th>
          <th id="col9">Salary</th>
          <th id="col10">View</th>
          <!--insurance - Bouns - allowed leave - seek leave - Net Salary - Tax -->
        </tr>
        <tr>
          <td id="col1">1</td>
          <td id="col2">Hassan naji</td>
          <td id="col3">Senior Web Engineer</td>
          <td id="col4">septemper</td>
          <td id="col5">2020</td>
          <td id="col6">30</td>
          <td id="col7">2</td>
          <td id="col8">28</td>
          <td id="col9">3500 $</td>
          <td id="col10">
            <button @click="viewEmployerCard" class="view-employer-details-btn">
              View
            </button>
          </td>
        </tr>
      </table>
    </div>
    <div id="view-salary-employer-details">
      <div id="employer-card">
        <h4 id="card-title">Employer's Salary Card</h4>
        <button @click="closeEmployerCard" id="close-btn">X</button>
        <div id="employer-card-info">
          <div class="info-details box-one">
            <h5>Name :</h5>
            <p id="employer-card-name">Basim Ajoub</p>
            <br />
            <h5>Position :</h5>
            <p id="employer-card-nationality">Syrian</p>
            <br />
            <h5>Month :</h5>
            <p id="employer-card-adress">hama street,salamiyah ,hma, syria</p>
            <br />
            <h5>Year :</h5>
            <p id="employer-card-date">17-09-1994</p>
            <br />
          </div>
          <div class="info-details box-two">
            <h5>Totals Days Of Month :</h5>
            <p id="employer-card-id">30</p>
            <br />
            <h5>Token Leaf :</h5>
            <p id="employer-card-number">5</p>
            <br />
            <h5>Token Leaf :</h5>
            <p id="employer-card-number">5</p>
            <br />
            <h5>Total Seek Leaf /year :</h5>
            <p id="employer-card-number">5</p>
            <br />
            <h5>Token Seek Leaf :</h5>
            <p id="employer-card-number">5</p>
            <br />

            <h5>Total Leaf :</h5>
            <p id="employer-card-number">5</p>
            <br />
          </div>
          <div class="info-details box-two">
            <h5>Salary :</h5>
            <p id="employer-card-number">5</p>
            <br />
            <h5>Tax :</h5>
            <p id="employer-card-number">5</p>
            <br />
            <h5>Net Salary :</h5>
            <p id="employer-card-number">5</p>
            <br />
            <br />
          </div>
          <div class="info-details charts-box">
            <apexchart
              type="line"
              height="350"
              :options="chartOptions"
              :series="series"
            ></apexchart>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "salaryemployercomp",

  data: function () {
    return {
      //to add new chart change the code bootom and code in templte only
      //to add new chart change the code from here keep return and data function and code in templte only
       series: [{
              name: "Salary",
              data: [100, 410, 350, 510, 490, 620, 690, 910, 1480,850,300,950]
          }],
          chartOptions: {
            chart: {
              height: 350,
              type: 'line',
              zoom: {
                enabled: false
              }
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              curve: 'straight'
            },
            title: {
              text: 'Total Salary',
              align: 'left'
            },
            grid: {
              row: {
                colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                opacity: 0.5
              },
            },
            xaxis: {
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep' ,'Oct','Nov','Dec'],
            }
          },
      //end return
    };

    //end data
  },
  //end export
  methods: {
    viewEmployerCard: function () {
      document.getElementById("view-salary-employer-details").style.display =
        "block";
    },
    closeEmployerCard: function () {
      document.getElementById("view-salary-employer-details").style.display =
        "none";
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
.salary-employer-comp {
  width: 95%;
  height: 550px;
  padding-top: 90px;
  text-align: left;
  margin-left: 4%;
  h1 {
    border: black;
    margin-bottom: 50px;
     font-family: "Indie Flower", cursive;
     font-size: 28px;
  }
  .salary-lists {
    width: 98%;
    height: 465px;
    background-color: wheat;
    overflow: hidden;
    overflow-y: scroll;
    #salary-table {
      widows: 100%;
      border: 2px solid black;

      th {
        width: 12%;
        padding-left: 0.5%;
        border-bottom: 1px solid black;
        text-align: center;
      }
      td {
        border-right: 1px solid black;
        text-align: center;
      }
      #col1,
      #col5,
      #col6,
      #col7,
      #col8,
      #col9 {
        width: 4%;
      }
      #col10 {
        width: 1%;
        .view-employer-details-btn {
          width: 90%;
          cursor: pointer;
        }
      }
    }
  }
  //View Employer Card
  #view-salary-employer-details {
    width: 100%;
    height: 643px;
    background: rgba(44, 44, 44, 0.644);
    position: absolute;
    top: 0;
    right: 0.1px;
    display: none;

    #employer-card {
      width: 90%;
      height: 500px;
      background: white;
      display: flexbox;
      margin: 80px 0px 0px 5.5%;
      border-radius: 5%;
      box-shadow: 2px 4px 8px 8px $blueCol;

      #card-title {
        position: absolute;
        margin-top: 17px;
        margin-left: 2%;
      }
      #close-btn {
        position: absolute;
        right: 6%;
        margin-top: 7px;
        width: 30px;
        height: 30px;
        cursor: pointer;
      }
      //Card Information

      #employer-card-info {
        width: 90%;
        margin-left: 10px;
        height: 400px;
        padding: 60px 1% 1% 10px;

        .info-details {
          padding: 5px;
          background: rgba(0, 227, 150, 1);
          margin-bottom: 20px;
          border-radius: 4%;
          box-shadow: 2px 3px 4px black;
          cursor: pointer;
          &:hover {
            box-shadow: 2px 3px 4px $pinkCol;
            transform: translateY(10px);
            transition: 0.4s ease-in-out;
          }
        }
        .box-one {
          width: 30%;
        }
        .box-two {
          width: 22%;
          margin-right: 2%;
          float: left;
          height: 220px;
        }
        .charts-box{
          width: 40%;
          top: 130px;
          margin-left: 43%;
          position: absolute;
        
          &:hover{
            scale: 1.05;
            background: wheat;
          }
        }

        h5 {
          float: left;
          margin-right: 3px;
        }
        p {
          font-size: 14px;
        }
        //Relatives Person-1
        .personone {
          float: left;
          margin-right: 25%;
          h4 {
            margin-bottom: 5px;
          }
        }
        //Card button
        button {
          width: 10%;
          height: 25px;
          margin-right: 2%;
          cursor: pointer;
        }
      }
      //End
    }
  }
}
</style>
