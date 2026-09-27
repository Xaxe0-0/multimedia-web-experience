function showMessage() {
            document.getElementById("modal").style.display = "flex";
        }

        function closeMessage() {
            document.getElementById("modal").style.display = "none";
        }

        function filterMedia(category, btn) {

            const tabs = document.querySelectorAll(".tab");

            tabs.forEach(function(tab) {
                tab.classList.remove("active");
            });

            btn.classList.add("active");

            const mediaItems = document.querySelectorAll(".images");

            mediaItems.forEach(function(item) {

                const itemType = item.getAttribute("data-type");

                if (category === "all" || itemType === category) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }

            });
        }
        window.onclick = function(event) {

            const modal = document.getElementById("modal");

            if (event.target === modal) {
                modal.style.display = "none";
            }

        };