import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Doctor } from './doctor';

$(document).ready(function() {
    $('#Input').submit(function (event) {
        event.preventDefault();
        let doctors= new Doctor();
        let doctorName=$('#name').val();
        let promise = doctors.GetDoctorList(doctorName);
        //$('#result').show();

        promise.then(
            function(response) {
              let main = JSON.parse(response);
              if (main.data.length > 0) {
                for (let i = 0; i < main.data.length; i++) {
                  $("#results").append(`<h1>
                  Name: ${main.data[i].profile.first_name} ${
                    main.data[i].profile.last_name
                  }</h1>
                    Address: <h5>${main.data[i].practices[0].visit_address.street} ${
                    main.data[i].practices[0].visit_address.city
                  } ${main.data[i].practices[0].visit_address.state} ${
                    main.data[i].practices[0].visit_address.zip
                  }</h5> Phonenumber: <h6>${main.data[i].practices[0].phones[0].number}</h6>
              `);
                }
              } else {
                $("#results").append(
                  `<h3>There is no data for your search!</h3>`
                );
              }
            },
            function(error) {
              $(".Errors").text(
                `There was an error processing your request: ${error.message}`
              );
            }
          );
        });
      });
