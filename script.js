// import the download-buttons and favourite-buttons on the page as DOM elements for the script
var downloadBtns = document.getElementsByClassName("download-btn");
var favouriteBtns = document.getElementsByClassName("favourite-btn");


// attach the sweetalert.js toast mechanism to the imported download buttons
for ( var button of downloadBtns ) {
    button.addEventListener( "click", function() {
        Swal.fire(
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


for ( var favButton of favouriteBtns ) {
    favButton.addEventListener( "click", function( event ) {
        if ( event.target.classList.contains("bg-red-600") ) {
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
            event.target.classList.add("bg-red-600")
        }
    });
}