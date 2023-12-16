// importing the download-buttons on the page as DOM elements for the script
var downloadBtns = document.getElementsByClassName("download-btn");


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