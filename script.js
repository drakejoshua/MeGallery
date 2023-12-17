// import the download-buttons and favourite-buttons on the page as DOM elements for the script
var downloadBtns = document.getElementsByClassName("download-btn");
var favouriteBtns = document.getElementsByClassName("favourite-btn");


// attach the sweetalert.js toast alert mechanism and triggers to the imported download buttons 
// on click
for ( var button of downloadBtns ) {

    // add "click" event listener to each download button
    button.addEventListener( "click", function() {

        // trigger a toast alert immediately on click ( using sweetalert.js library )
        Swal.fire(

            // the toast alert config( object )
            {
                title: "Download Started",
                text: "Hold on, we're working on your download. It should start anytime soon.",
                toast: true,
                icon: "success",
                footer: "Thanks for downloading this image. Please remember to donate",
                timer: 4000,
                timerProgressBar: true,
                position: "top-start",
                iconColor: "#60a5fa",
                confirmButtonColor: "#60a5fa",
                customClass: {
                    timerProgressBar: "timerProgress"
                },
                showCloseButton: false,
                showConfirmButton: false
            }
        );
    });
}


// attach "click" event and listeners to the favourite-buttons to trigger alerts on click( if un-favourited )
// else, if favourited, no alerts
for ( var favButton of favouriteBtns ) {

    // add event listener to each button
    favButton.addEventListener( "click", function( event ) {

        // check if the image is a favourite ( or favourited ) by checking if the button contains ( "bg-red-600" ) class
        // if so, alert and confirm from the user if they want to unfavourite the image and then unfavourite the image
        // else, favourite the image by adding the ( "bg-red-600" ) class to the button
        if ( event.target.classList.contains("bg-red-600") ) {

            // trigger an alert to the user to confirm the unfavourite action( based on sweetalert.js )
            var alert = Swal.fire(
                {
                    title: "Confirm Action",
                    text: "Are you sure you want to unfavourite this image?",
                    icon: "warning",
                    confirmButtonText: "Yes, I'm Sure",
                    cancelButtonText: "No",
                    showCancelButton: true,
                    iconColor: "#60a5fa",
                    confirmButtonColor: "#60a5fa",
                    cancelButtonColor: "#60a5fa"
                }
            );


            // if user chooses to unfavourite image, then unfavourite image ( based on sweetalert2 )
            alert.then( function( alertResult ) {
                if ( alertResult.isConfirmed ) {
                    Swal.fire(
                        {
                            icon: "success",
                            title: "Action Successful",
                            text: "You've successfully unfavourited the image..!!",
                            iconColor: "#60a5fa",
                            confirmButtonColor: "#60a5fa"
                        }
                    );

                    event.target.classList.remove("bg-red-600")
                }
            });
        } else {

            // add the image as a favourite
            event.target.classList.add("bg-red-600")
        }
    });
}