        async function toggleConnect() {
            if (typeof window.ethereum !== "undefined") {
                try {
                    const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
                    if (accounts.length > 0) {
                        document.getElementById("connectButton").innerHTML = "Wallet Connected";
                        showModal("Wallet successfully connected");
                    }
                } catch (error) {
                    console.error("Error connecting wallet:", error);
                }
            } else {
                document.getElementById("connectButton").innerHTML = "Connect Wallet";
            }
        }

        function showModal(message) {
            // Get the modal element
            var modal = document.getElementById("myModal");

            // Get the <p> element inside the modal
            var modalText = document.getElementById("modalText");

            // Set the message text
            modalText.innerHTML = message;

            // Display the modal
            modal.style.display = "block";
        }

        function proceed() {
            // Hide the modal
            var modal = document.getElementById("myModal");
            modal.style.display = "none";
        }

        // Listen for the accountsChanged event to detect wallet disconnection
        if (window.ethereum) {
            window.ethereum.on("accountsChanged", function (accounts) {
                if (accounts.length === 0) {
                    document.getElementById("connectButton").innerHTML = "Connect Wallet";
                }
            });
        }