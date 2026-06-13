# Portal Loader - Hidden Code

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Web 1 - Portal Loader</title>
    <style>
        html, body {
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
            background: #fff;
        }
        iframe {
            width: 100%;
            height: 100%;
            border: none;
            display: none;
        }
        .loading {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
            font-family: Arial, sans-serif;
            font-size: 1.2rem;
            color: #333;
        }
    </style>
</head>
<body>
    <div id="loader" class="loading">Verifying API Key...</div>
    <iframe id="mainFrame" src=""></iframe>

    <script>
        const web2LiveURL = "https://muhammadtaqi512q-oss.github.io/ROCK-AI/WEB2";
        const userAPIKey = "mt5tm786az"; 

        const loader = document.getElementById('loader');
        const mainFrame = document.getElementById('mainFrame');

        const authFrame = document.createElement('iframe');
        authFrame.style.display = 'none';
        authFrame.src = `${web2LiveURL}?api=${userAPIKey}`;
        document.body.appendChild(authFrame);

        window.addEventListener('message', function(event) {
            if (event.origin === "https://muhammadtaqi512q-oss.github.io") {
                if (event.data && event.data.status === 'success') {
                    loader.style.display = 'none';
                    mainFrame.src = event.data.url;
                    mainFrame.style.display = 'block';
                }
            }
        });

        setTimeout(() => {
            if (mainFrame.style.display !== 'block') {
                loader.textContent = "Error: Invalid API Key or Connection Timeout.";
                loader.style.color = "red";
            }
        }, 5000);
    </script>
</body>
</html>
``` 
