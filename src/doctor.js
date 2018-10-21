   export class Doctor {

        GetDoctorList(doctorName){
        return  new Promise(function(resolve, reject) {
          let request = new XMLHttpRequest();
          let url = `https://api.betterdoctor.com/2016-03-01/doctors?name=${doctorName}&location=wa-seattle&user_key=${process.env.exports.apikey}`;
         
         
          request.onload = function() {
            if (this.status === 200) {
              resolve(request.response);
            } else {
              reject(Error(request.statusText));
            }
          }
          request.open("GET", url, true);
          request.send();
        });
    
        // promise.then(function(response) {
        //   body = JSON.parse(response);
        //   $('.showHumidity').text(`The humidity in ${doctorName} is ${body.main.humidity}%`);
        //   $('.showTemp').text(`The temperature in Kelvins is ${body.main.temp} degrees.`);
        // }, function(error) {
        //   $('.showErrors').text(`There was an error processing your request: ${error.message}`);
        // });
        }
    }
