/* ==============================================
/*  PRE LOADING
  =============================================== */
("use strict");
$(window).load(function() {
  $(".loader")
    .delay(500)
    .fadeOut("slow");
});

$(document).ready(function() {
  "use strict";
  /* ==============================================
     /*   wow
      =============================================== */
  var wow = new WOW({
    animateClass: "animated",
    offset: 10,
    mobile: true
  });
  wow.init();
  /* ==============================================
        STICKY HEADER
        =============================================== */

  $(window).on("scroll", function() {
    if ($(window).scrollTop() < 100) {
      $(".header").removeClass("sticky_header");
    } else {
      $(".header").addClass("sticky_header");
    }
  });
  /* --------------------------------------------------------
     COUNTER JS
     ----------------------------------------------------------- */

  $(".counter").counterUp({
    delay: 5,
    time: 3000
  });

  $(".countdown").countdown("2018/03/01", function(event) {
    $(this).html(
      event.strftime(
        "<div>%w <span>Weeks</span></div>  <div>%D <span>Days</span></div>  <div>%H<span>Hours</span></div> <div>%M<span>Minutes</span></div> <div>%S<span>Seconds</span></div>"
      )
    );
  });

  /* ==============================================
     SLIDER
     =============================================== */
  $(".cover_slider").owlCarousel({
    loop: true,
    autoplay: true,
    smartSpeed: 1000,
    autoplayHoverPause: false,
    dots: true,
    nav: false,
    items: 1,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    dotsContainer: ".cover_dots"
  });

  $(".brand_carousel").owlCarousel({
    loop: true,
    autoplay: true,
    smartSpeed: 450,
    autoplayHoverPause: false,
    dots: false,
    nav: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 2
      },
      600: {
        items: 3
      },
      1000: {
        items: 5
      }
    },
    items: 5
  });
  /* ------------------------------------- */
  /* Animated progress bars
     /* ------------------------------------- */

  var waypoints = $(".progress_container").waypoint(
    function() {
      $(".progress .progress-bar").progressbar({
        transition_delay: 1000
      });
    },
    {
      offset: "50%"
    }
  );

  /* --------------------------------------------------------
    MAPS
    ----------------------------------------------------------- */
  var map = $("#map");
  if (map.length > 0) {
    google.maps.event.addDomListener(window, "load", init);
    var lattuide = map.attr("data-lat");
    var longtuided = map.attr("data-lon");
  }
  function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
      // How zoomed in you want the map to start at (always required)
      zoom: 16,
      scrollwheel: false,
      navigationControl: false,
      mapTypeControl: false,
      scaleControl: false,
      // The latitude and longitude to center the map (always required)
      center: new google.maps.LatLng(lattuide, longtuided), // New York

      // How you would like to style the map.
      // This is where you would paste any style found on Snazzy Maps.
      styles: [
        {
          featureType: "water",
          stylers: [{ saturation: 43 }, { lightness: -11 }, { hue: "#0088ff" }]
        },
        {
          featureType: "road",
          elementType: "geometry.fill",
          stylers: [{ hue: "#ff0000" }, { saturation: -100 }, { lightness: 99 }]
        },
        {
          featureType: "road",
          elementType: "geometry.stroke",
          stylers: [{ color: "#808080" }, { lightness: 54 }]
        },
        {
          featureType: "landscape.man_made",
          elementType: "geometry.fill",
          stylers: [{ color: "#ece2d9" }]
        },
        {
          featureType: "poi.park",
          elementType: "geometry.fill",
          stylers: [{ color: "#ccdca1" }]
        },
        {
          featureType: "road",
          elementType: "labels.text.fill",
          stylers: [{ color: "#767676" }]
        },
        {
          featureType: "road",
          elementType: "labels.text.stroke",
          stylers: [{ color: "#ffffff" }]
        },
        { featureType: "poi", stylers: [{ visibility: "off" }] },
        {
          featureType: "landscape.natural",
          elementType: "geometry.fill",
          stylers: [{ visibility: "on" }, { color: "#b8cb93" }]
        },
        { featureType: "poi.park", stylers: [{ visibility: "on" }] },
        { featureType: "poi.sports_complex", stylers: [{ visibility: "on" }] },
        { featureType: "poi.medical", stylers: [{ visibility: "on" }] },
        { featureType: "poi.business", stylers: [{ visibility: "simplified" }] }
      ]
    };

    // Get the HTML DOM element that will contain your map
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById("map");

    // Create the Google Map using our element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    // Let's also add a marker while we're at it
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(lattuide, longtuided),
      map: map,
      title: "evento!"
    });
  }
});

async function Book() {
  let reg_no = document.getElementById("reg_no").value;
  let ticket_no = document.getElementById("ticket_no").value;
  let amount = document.getElementById("amount").value;
  let regex_reg = /[0-9]/;
  if (!regex_reg.test(reg_no)) {
    document.getElementById("reg_no").value = "";
    document.getElementById("reg_no").placeholder = "Invalid reg. no";
  } else {
    try {
      $(() => {
        $("#btn").attr("disabled", true);
        $("#reg_no").attr("disabled", true);
        $("#ticket_no").attr("disabled", true);
        $("#btn").html("Proccessing...");
      });
      const { data } = await axios(
        `https://core.lmu.edu.ng:4846/api/student/${reg_no}`
      );
      $(() => {
        $("#btn").attr("disabled", false);
        $("#reg_no").attr("disabled", false);
        $("#ticket_no").attr("disabled", false);
        $("#btn").html("Submit");
      });
      if (!data) {
        return Swal.fire(
          "Hold it there",
          "You don't look like a landmark student",
          "warning"
        );
      }
      const { fullname, email, programme } = data;
      Swal.fire({
        title: `Confirm details`,
        icon: "info",
        html: `
          <p>Name: ${fullname}</p>
          <p>Dept: ${programme}</p>
          <p>Reg.no: ${reg_no}</p>
          `,
        showCancelButton: true,
        confirmButtonText: "Sure",
        showLoaderOnConfirm: true,
        preConfirm: async () => {
          const reqBody = {
            name: fullname,
            email,
            reg_no,
            ticket_no,
            amount
          };
          try {
            const response = await fetch(`/api/tickets`, {
              method: "POST",
              body: JSON.stringify(reqBody),
              headers: {
                "Content-Type": "application/json"
              }
            });
            if (!response.ok) {
              throw new Error(response.statusText);
            }
            return response.json();
          } catch (error) {
            Swal.showValidationMessage(`Request failed: ${error}`);
          }
        },
        allowOutsideClick: () => !Swal.isLoading()
      }).then(async result => {
        if (result.value.error) {
          Swal.fire({ text: result.value.msg });
        } else {
          try {
            $(() => {
              $("#btn").attr("disabled", true);
              $("#reg_no").attr("disabled", true);
              $("#ticket_no").attr("disabled", true);
              $("#btn").html("Proccessing...");
            });
            const { data } = await axios.get(
              "https://niseb2018.lmu.edu.ng/mailer/tdxsave.php?" +
                "email=" +
                email +
                "&amount=" +
                amount +
                "&fullname=" +
                fullname +
                "&ticket_no=" +
                ticket_no
            );
            $(() => {
              $("#btn").attr("disabled", false);
              $("#reg_no").attr("disabled", false);
              $("#ticket_no").attr("disabled", false);
              $("#btn").html("Submit");
            });
            Swal.fire(
              "Good job!",
              "You have successfully booked for your ticket, check your mail for further details",
              "success"
            );
            document.getElementById("reg_no").value = "";
            document.getElementById("ticket_no").value = 1;
            document.getElementById("amount").value = 1000;
            console.log(data);
          } catch (error) {
            console.log(error);
            $(() => {
              $("#btn").attr("disabled", false);
              $("#reg_no").attr("disabled", false);
              $("#ticket_no").attr("disabled", false);
              $("#btn").html("Submit");
            });
            Swal.fire(
              "Good job!",
              "You have successfully booked for your ticket, check your mail for further details",
              "success"
            );
          }
        }
      });
    } catch (error) {
      Swal.fire({ text: "Something went wrong, likely network issue" });
      $(() => {
        $("#btn").attr("disabled", false);
        $("#reg_no").attr("disabled", false);
        $("#ticket_no").attr("disabled", false);
        $("#btn").html("Submit");
      });
    }
  }
}

function setAmount(number) {
  number = Number(number);
  if (number > 0) {
    switch (number) {
      case 1:
        document.getElementById("amount").value = 1000;
        break;
      case 2:
        document.getElementById("amount").value = 2000;
        break;
      case 3:
        document.getElementById("amount").value = 3000;
        break;
      case 4:
        document.getElementById("amount").value = 4000;
        break;
      case 5:
        document.getElementById("amount").value = 5000;
        break;

      default:
        document.getElementById("amount").value = 0;
        break;
    }
  } else {
    document.getElementById("amount").value = 0;
  }
}

async function Contact() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let subject = document.getElementById("subject").value;
  let message = document.getElementById("message").value;

  try {
    $(() => {
      $("#btn").attr("disabled", true);
      $("#name").attr("disabled", true);
      $("#email").attr("disabled", true);
      $("#subject").attr("disabled", true);
      $("#message").attr("disabled", true);
      $("#btn").html("Sending...");
    });

    const { data } = await axios.post("/api/user/contact", {
      name,
      email,
      subject,
      message
    });
    $(() => {
      $("#btn").attr("disabled", false);
      $("#name").attr("disabled", false);
      $("#email").attr("disabled", false);
      $("#subject").attr("disabled", false);
      $("#message").attr("disabled", false);
      $("#btn").html("Send a message");
    });
    if (data.error) {
      return Swal.fire({ text: data.msg });
    }
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("message").value = "";
    return Swal.fire("Good work!", data.msg, "success");
  } catch (error) {
    $(() => {
      $("#btn").attr("disabled", false);
      $("#name").attr("disabled", false);
      $("#email").attr("disabled", false);
      $("#subject").attr("disabled", false);
      $("#message").attr("disabled", false);
      $("#btn").html("Send a message");
    });
    Swal.fire({ text: "Something went wrong, likely network issue" });
  }
}
