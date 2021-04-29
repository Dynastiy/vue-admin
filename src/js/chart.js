
  import axios from 'axios'
  
  export const transactionChartData = {

    // type: "line",
    // data: {
      // labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      // labels: months,
      // datasets: [
      //   {
      //       label: "User Data",
      //       type: "bar",
            // data: [0.166, 2.081, 3.003, 0.323, 954.792, 285.886, 43.662, 51.514],
  //           data: userData,
  //           backgroundColor: "#0392ceaa",
  //           borderColor: "#0392ce",
  //           borderWidth: 3
  //         }
  //     ]
  //   },
  //   options: {
  //     responsive: true,
  //     lineTension: 1,
  //     scales: {
  //       yAxes: [
  //         {
  //           ticks: {
  //             beginAtZero: true,
  //             padding: 25
  //           }
  //         }
  //       ]
  //     }
  //   }
  // };
          axios.get('https://api.fxhup.com/transaction/charts')
         .then((response) => {
           let results = response.data.data.transactions.users
          let dateresult = results.map(a => a.date)
          let expenseresult = results.map(a => a.expense)
          let incomeresult = results.map(a => a.income)
      
          this.expense = expenseresult
          this.income = incomeresult
          this.date = dateresult

          this.data = {
            // labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            labels: months,
            datasets: [
              {
                  label: "User Data",
                  type: "bar",
                  // data: [0.166, 2.081, 3.003, 0.323, 954.792, 285.886, 43.662, 51.514],
                  data: userData,
                  backgroundColor: "#0392ceaa",
                  borderColor: "#0392ce",
                  borderWidth: 3
                }
            ]
          },
          // options: {
          //   responsive: true,
          //   lineTension: 1,
          //   scales: {
          //     yAxes: [
          //       {
          //         ticks: {
          //           beginAtZero: true,
          //           padding: 25
          //         }
          //       }
          //     ]
          //   }
          // }
        // };
         })
      }
  
  export default transactionChartData;