   export class Doctor {

        GetDoctorList(doctorName){
        return  new Promise(function(resolve, reject) {
          let request = new XMLHttpRequest();
          let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${doctorName}&location=wa-seattle&user_location=47.6062%2C122.3321&skip=0&limit=10&user_key=${
            process.env.exports.apiKey
          }`;         
         
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
