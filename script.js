
        // Aapka target link jo strictly define ho chuka hai
        const targetIDLink = "https://muhammadtaqi512q-oss.github.io/puzzle/web-builder";

        // URL parameters se API key nikalne ka function
        function getQueryParam(param) {
            const urlParams = new URLSearchParams(window.location.search);
            return urlParams.get(param);
        }

        // API Validation Rules
        function validateAPI(api) {
            if (!api) return false;

            // 1. Total length exactly 10 characters (mt + 8 letters)
            if (api.length !== 10) return false;

            // 2. Must start with 'mt'
            if (!api.startsWith('mt')) return false;

            // 3. Allowed chunks checklist
            const pattern = /^(mt|tm|zf|mh|az|5|12|14|72|786)+$/;
            return pattern.test(api);
        }

        const userAPI = getQueryParam('api');
        const statusDiv = document.getElementById('status');

        if (validateAPI(userAPI)) {
            // Agar API correct hai tou screen par sirf yeh text nzar aaye ga
            statusDiv.textContent = "MUHAMMAD TAQI KING";
            statusDiv.className = "king-text";

            // Web 1 (Parent window) ko secure target link bhej rahe hain fetch aur frame karne ke liye
            if (window.parent !== window) {
                window.parent.postMessage({ status: 'success', url: targetIDLink }, '*');
            }
        } else {
            // Agar API key sahi na ho
            statusDiv.textContent = "INVALID API KEY ACCESS DENIED";
            statusDiv.className = "error";
        }
   
