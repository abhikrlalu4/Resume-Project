var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');
var interval;


for (var i = 0; i < navMenuAnchorTags.length; i++) {
    navMenuAnchorTags[i].addEventListener('click', function (event) {
        event.preventDefault();
        var targetSectionID = this.textContent.trim().toLowerCase();
        console.log(this.textContent);
        var targetSection = document.getElementById(targetSectionID);
        console.log(targetSection);
        //    interval = setInterval(scrollVertically, 20, targetSection);

        interval = setInterval(function () {
            scrollVertically(targetSection);
        }, 20);
    });
}


function scrollVertically(targetSection) {
    var targetSectionCoordinates = targetSection.getBoundingClientRect();
    if (targetSectionCoordinates.top <= 0) {
        clearInterval(interval);
        return;
    }
    window.scrollBy(0, 50);
}

<script>
    document.getElementById("contact-form").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission
        let name = document.getElementById("input-name").value;
        let message = document.getElementById("input-message").value;

        let notification = document.getElementById("message-notification");
        let notificationText = document.getElementById("notification-text");

        notificationText.textContent = `From: ${name} - "${message}"`;
        notification.classList.remove("hidden");

        setTimeout(() => {
            notification.classList.add("hidden");
        }, 5000); // Hide after 5 seconds

        this.reset(); // Reset form after submission
    });
</script>
