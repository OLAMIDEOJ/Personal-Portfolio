 var tablinks = document.getElementsByClassName("tab-links");
        var tabcontents = document.getElementsByClassName("tab-contents");

        function opentab(tabname) {
            for (tablinks of tablinks) {
                tablinks.classList.remove("active-link");
            }
            for (tabcontents of tabcontents) {
                tabcontents.classList.remove("active-tab");
            }
            event.currentTarget.classList.add("active-link");
            document.getElementById(tabname).classList.add("active-tab");
        }

        // to toggle sidebar
        const sidemenu = document.getElementById("sidemenu");

        function openmenu() {
            console.log('bars clicked')
            // console.log('bars clicked')
            sidemenu.style.right = "0";
        }

        function closemenu() {
            sidemenu.style.right = "-200px";
        }

        