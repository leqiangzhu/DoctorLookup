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
              let body = JSON.parse(response);
              if (body.data.length > 0) {
                for (let i = 0; i < body.data.length; i++) {
                  $("#results").append(`<h1>
                  Name: ${body.data[i].profile.first_name} ${
                    body.data[i].profile.last_name
                  }</h1>
                    Address: <h5>${body.data[i].practices[0].visit_address.street} ${
                    body.data[i].practices[0].visit_address.city
                  } ${body.data[i].practices[0].visit_address.state} ${
                    body.data[i].practices[0].visit_address.zip
                  }</h5> Phonenumber: <h6>${body.data[i].practices[0].phones[0].number}</h6>
              `);
                }
              } else {
                $("#results").append(
                  `<h3>There is no result that fit your search. Please try again!</h3>`
                );
              }
            },
            function(error) {
              $(".showErrors").text(
                `There was an error processing your request: ${error.message}`
              );
            }
          );
        });
      });
