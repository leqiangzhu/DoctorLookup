   export class Doctor {

        GetDoctorList(doctorName){
        return  new Promise(function(resolve, reject) {
          let request = new XMLHttpRequest();
          let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${doctorName}&location=wa-seattle&user_location=47.6062%2C122.3321&skip=0&limit=10&user_key=${
            process.env.exports.apikey
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

      
    
         
    }

//     initMap(a,b) {
//       return  new Promise(function(resolve, reject) {
//         let request = new XMLHttpRequest();
//         let url ="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap"
//       let uluru = {lat: a, lng: b};
     
//       let map = new google.maps.Map(
//           document.getElementById('map'), {zoom: 4, center: uluru});
      
//       let marker = new google.maps.Marker({position: uluru, map: map});
    
//     request.onload = function() {
//       if (this.status === 200) {
//         resolve(request.response);
//       } else {
//         reject(Error(request.statusText));
//       }
//     }
//     request.open("GET", url, true);
//     request.send();
//   });
// }
  }
    
