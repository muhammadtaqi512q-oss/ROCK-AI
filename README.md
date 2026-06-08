
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MT Builder</title>
    <style>
        * { box-sizing: border-box; margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; }
        body { display: flex; height: 100vh; overflow: hidden; background: #f0f2f5; color: #333; }
        
        /* Sidebar Styles */
        #sidebar { width: 320px; background: #1e1e24; color: #fff; padding: 20px; overflow-y: auto; box-shadow: 2px 0 10px rgba(0,0,0,0.3); }
        h1 { font-size: 24px; margin-bottom: 20px; color: #4f46e5; text-align: center; font-weight: bold; }
        .section-title { font-size: 14px; text-transform: uppercase; letter-spacing: 1px; color: #a1a1aa; margin: 20px 0 10px 0; border-bottom: 1px solid #3f3f46; padding-bottom: 5px; }
        
        /* Control Groups */
        .control-group { margin-bottom: 15px; background: #27272a; padding: 12px; border-radius: 6px; }
        label { display: block; font-size: 12px; margin-bottom: 6px; color: #d4d4d8; }
        select, input, button { width: 100%; padding: 8px; margin-bottom: 8px; border-radius: 4px; border: 1px solid #3f3f46; background: #09090b; color: #fff; font-size: 14px; }
        select:focus, input:focus { border-color: #4f46e5; outline: none; }
        
        /* Buttons */
        button.action-btn { background: #4f46e5; color: white; border: none; font-weight: bold; cursor: pointer; transition: background 0.2s; margin-bottom: 0; }
        button.action-btn:hover { background: #4338ca; }
        button.download-btn { background: #10b981; color: white; border: none; font-weight: bold; margin-top: 20px; cursor: pointer; }
        button.download-btn:hover { background: #059669; }
        
        /* Workspace Styles */
        #workspace { flex: 1; display: flex; flex-direction: column; height: 100%; }
        #navbar { background: #fff; padding: 10px 20px; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #e4e4e7; }
        #page-tabs { display: flex; gap: 10px; }
        .page-tab { padding: 6px 12px; background: #e4e4e7; border-radius: 4px; cursor: pointer; font-size: 14px; font-weight: 500; }
        .page-tab.active { background: #4f46e5; color: white; }
        
        /* Live Canvas Preview */
        #canvas-container { flex: 1; padding: 20px; overflow-y: auto; background: #e2e8f0; display: flex; justify-content: center; }
        #canvas { width: 100%; max-width: 1200px; background: white; min-height: 100%; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); border-radius: 8px; padding: 20px; position: relative; }
        
        /* Dynamic Elements styling in Canvas */
        .editable-element { position: relative; margin-bottom: 15px; transition: outline 0.2s; min-height: 20px; }
        .editable-element:hover { outline: 2px dashed #4f46e5; outline-offset: 4px; cursor: pointer; }
        .hero-section { padding: 60px 20px; text-align: center; background-size: cover; background-position: center; border-radius: 8px; margin-bottom: 20px; }
    </style>
</head>
<body>

    <div id="sidebar">
        <h1>MT Builder</h1>
        
        <div class="section-title">Pages</div>
        <input type="text" id="new-page-name" placeholder="e.g., About Us">
        <button class="action-btn" onclick="addNewPage()">+ Create & Link Page</button>

        <div class="section-title">Titles</div>
        <div class="control-group">
            <label>Heading Size</label>
            <select id="title-size">
                <option value="h1">H1 - Largest</option>
                <option value="h2">H2</option>
                <option value="h3">H3</option>
                <option value="h4">H4</option>
                <option value="h5">H5</option>
                <option value="h6">H6 - Smallest</option>
            </select>
            <label>Text Content</label>
            <input type="text" id="title-text" value="Hello World">
            <label>Text Color</label>
            <input type="color" id="title-color" value="#000000">
            <button class="action-btn" onclick="addTitle()">Add Title</button>
        </div>

        <div class="section-title">Paragraphs</div>
        <div class="control-group">
            <label>Text Content</label>
            <input type="text" id="para-text" value="This is a simple customizable paragraph.">
            <label>Text Color</label>
            <input type="color" id="para-color" value="#333333">
            <button class="action-btn" onclick="addParagraph()">Add Paragraph</button>
        </div>

        <div class="section-title">Buttons</div>
        <div class="control-group">
            <label>Step 1: Button Name</label>
            <input type="text" id="btn-text" value="Visit Google">
            <label>Step 2: Link URL</label>
            <input type="text" id="btn-link" value="https://google.com">
            <label>Background Color</label>
            <input type="color" id="btn-color" value="#4f46e5">
            <button class="action-btn" onclick="addButton()">Add Button</button>
        </div>

        <div class="section-title">Hero Sections</div>
        <div class="control-group">
            <label>Choose Background style (10 Options)</label>
            <select id="hero-bg-opt" onchange="previewHeroBg()">
                <option value="color:#f4f4f5">Option 1: Clean Light Gray</option>
                <option value="color:#3f3f46">Option 2: Deep Charcoal</option>
                <option value="color:#eff6ff">Option 3: Soft Blue Tint</option>
                <option value="color:#ecfdf5">Option 4: Minty Green Tint</option>
                <option value="gradient:linear-gradient(135deg, #667eea 0%, #764ba2 100%)">Option 5: Royal Purple Gradient</option>
                <option value="gradient:linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)">Option 6: Pastel Pink Gradient</option>
                <option value="gradient:linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)">Option 7: Soft Steel Gradient</option>
                <option value="img:https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800">Option 8: Tech Space Image</option>
                <option value="img:https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800">Option 9: Ocean Beach Image</option>
                <option value="img:https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=800">Option 10: Nature Forest Image</option>
            </select>
            <label>Hero Title</label>
            <input type="text" id="hero-title" value="Welcome to Our Website">
            <label>Hero Subtitle</label>
            <input type="text" id="hero-sub" value="The perfect landing spot for your clients.">
            <button class="action-btn" onclick="addHeroSection()">Add Hero Section</button>
        </div>

        <div class="section-title">Embed & Frame</div>
        <div class="control-group">
            <label>Embed Code / URL</label>
            <input type="text" id="embed-src" value="https://www.youtube.com/embed/dQw4w9WgXcQ" placeholder="Paste URL or full iframe tag">
            <label>Adjust Width (px)</label>
            <input type="number" id="embed-w" value="560">
            <label>Adjust Height (px)</label>
            <input type="number" id="embed-h" value="315">
            <button class="action-btn" onclick="addEmbed()">Add Media Frame</button>
        </div>

        <div class="section-title">40 Background Images</div>
        <div class="control-group">
            <label>Select Canvas Wallpapers</label>
            <select id="canvas-bg" onchange="changeCanvasBackground()">
                <option value="">Default White</option>
                </select>
        </div>

        <button class="download-btn" onclick="downloadProject()">Download (mt.html)</button>
    </div>

    <div id="workspace">
        <div id="navbar">
            <div id="page-tabs">
                <div class="page-tab active" onclick="switchPage('home')">Home Page</div>
            </div>
            <div style="font-weight: bold; color: #4f46e5;">Live Preview</div>
        </div>
        <div id="canvas-container">
            <div id="canvas">
                </div>
        </div>
    </div>

    <script>
        // Data model tracking independent pages
        let pagesData = {
            'home': { name: 'Home Page', content: '', background: '' }
        };
        let currentPage = 'home';

        // 1. Setup 40 background options dynamically
        const bgSelect = document.getElementById('canvas-bg');
        const categories = ['abstract', 'nature', 'city', 'minimalist'];
        for (let i = 1; i <= 40; i++) {
            let cat = categories[i % categories.length];
            let imageUrl = `https://picsum.photos/id/${i + 10}/1200/800`;
            let option = document.createElement('option');
            option.value = imageUrl;
            option.textContent = `Wallpaper ${i} (${cat})`;
            bgSelect.appendChild(option);
        }

        // Keep page canvas sync'd
        const canvas = document.getElementById('canvas');
        function saveCurrentPageData() {
            pagesData[currentPage].content = canvas.innerHTML;
            pagesData[currentPage].background = canvas.style.backgroundImage;
        }

        function loadPageData(pageKey) {
            currentPage = pageKey;
            canvas.innerHTML = pagesData[pageKey].content;
            canvas.style.backgroundImage = pagesData[pageKey].background || 'none';
            if(pagesData[pageKey].background) {
                canvas.style.backgroundSize = "cover";
                canvas.style.backgroundPosition = "center";
            }
            
            // Highlight tab active state
            document.querySelectorAll('.page-tab').forEach(tab => tab.classList.remove('active'));
            document.getElementById(`tab-${pageKey}`).classList.add('active');
        }

        // 2. Page Multi-management
        function addNewPage() {
            const input = document.getElementById('new-page-name');
            const name = input.value.trim();
            if(!name) return alert("Please enter a page title!");
            
            const key = name.toLowerCase().replace(/[^a-z0-9]/g, '-');
            if(pagesData[key]) return alert("Page key or name exists!");

            saveCurrentPageData();

            // Create page record
            pagesData[key] = { name: name, content: `<h2>${name} Page</h2><p>Welcome to the ${name} page!</p>`, background: '' };
            
            // Append Tab inside UI
            const tabsContainer = document.getElementById('page-tabs');
            const newTab = document.createElement('div');
            newTab.className = 'page-tab';
            newTab.id = `tab-${key}`;
            newTab.textContent = name;
            newTab.onclick = () => { saveCurrentPageData(); loadPageData(key); };
            tabsContainer.appendChild(newTab);

            // Automatically build hyperlinked navigation header into all pages
            generateNavigation();
            
            loadPageData(key);
            input.value = '';
        }

        function generateNavigation() {
            // Generate standard clean navigational structure
            let navHtml = `<nav style="background:#333; padding:15px; border-radius:6px; margin-bottom:20px; display:flex; gap:15px;">`;
            for (let key in pagesData) {
                navHtml += `<a href="#${key}" onclick="window.parent.switchPage('${key}')" style="color:white; text-decoration:none; font-weight:bold; font-size:14px;">${pagesData[key].name}</a>`;
            }
            navHtml += `</nav>`;

            // Insert/replace top structural navigation across items
            for (let key in pagesData) {
                let parser = document.createElement('div');
                parser.innerHTML = pagesData[key].content;
                let existingNav = parser.querySelector('nav');
                if(existingNav) existingNav.remove();
                pagesData[key].content = navHtml + parser.innerHTML;
            }
            canvas.innerHTML = navHtml + canvas.innerHTML;
        }

        function switchPage(key) {
            saveCurrentPageData();
            loadPageData(key);
        }
        document.querySelector('.page-tab').id = 'tab-home'; // Assign initial ID config

        // 3. Elements Injection Block
        function addTitle() {
            const size = document.getElementById('title-size').value;
            const text = document.getElementById('title-text').value;
            const color = document.getElementById('title-color').value;
            
            const titleEl = document.createElement(size);
            titleEl.className = "editable-element";
            titleEl.style.color = color;
            titleEl.textContent = text;
            
            canvas.appendChild(titleEl);
            saveCurrentPageData();
        }

        function addParagraph() {
            const text = document.getElementById('para-text').value;
            const color = document.getElementById('para-color').value;
            
            const pEl = document.createElement('p');
            pEl.className = "editable-element";
            pEl.style.color = color;
            pEl.style.fontSize = "16px";
            pEl.style.lineHeight = "1.6";
            pEl.textContent = text;
            
            canvas.appendChild(pEl);
            saveCurrentPageData();
        }

        function addButton() {
            const text = document.getElementById('btn-text').value;
            const url = document.getElementById('btn-link').value;
            const color = document.getElementById('btn-color').value;
            
            const btnAnchor = document.createElement('a');
            btnAnchor.href = url;
            btnAnchor.target = "_blank";
            btnAnchor.style.textDecoration = "none";
            
            const btn = document.createElement('button');
            btn.className = "editable-element";
            btn.textContent = text;
            btn.style.backgroundColor = color;
            btn.style.color = "white";
            btn.style.padding = "10px 20px";
            btn.style.border = "none";
            btn.style.borderRadius = "4px";
            btn.style.cursor = "pointer";
            btn.style.marginRight = "10px";
            
            btnAnchor.appendChild(btn);
            canvas.appendChild(btnAnchor);
            saveCurrentPageData();
        }

        function addHeroSection() {
            const bgOpt = document.getElementById('hero-bg-opt').value;
            const title = document.getElementById('hero-title').value;
            const sub = document.getElementById('hero-sub').value;

            const hero = document.createElement('div');
            hero.className = "hero-section editable-element";
            
            // Assign custom background configuration out of the 10 options
            if(bgOpt.startsWith('color:')) {
                hero.style.backgroundColor = bgOpt.replace('color:', '');
                hero.style.color = bgOpt.includes('#fff') || bgOpt.includes('#f4f4f5') ? '#222' : '#fff';
            } else if (bgOpt.startsWith('gradient:')) {
                hero.style.backgroundImage = bgOpt.replace('gradient:', '');
                hero.style.color = '#fff';
            } else if (bgOpt.startsWith('img:')) {
                hero.style.backgroundImage = `url('${bgOpt.replace('img:', '')}')`;
                hero.style.color = '#fff';
                hero.style.textShadow = "0 2px 4px rgba(0,0,0,0.8)";
            }

            hero.innerHTML = `
                <h1 style="font-size: 42px; margin-bottom: 10px; color: inherit;">${title}</h1>
                <p style="font-size: 20px; color: inherit;">${sub}</p>
            `;
            canvas.appendChild(hero);
            saveCurrentPageData();
        }

        function addEmbed() {
            let src = document.getElementById('embed-src').value.trim();
            const w = document.getElementById('embed-w').value;
            const h = document.getElementById('embed-h').value;

            const container = document.createElement('div');
            container.className = "editable-element";
            container.style.margin = "20px 0";

            // If user drops full raw iframe code extract the valid URL source instead
            if(src.includes('<iframe')) {
                const match = src.match(/src="([^"]+)"/);
                if(match && match[1]) src = match[1];
            }

            const iframe = document.createElement('iframe');
            iframe.src = src;
            iframe.width = w;
            iframe.height = h;
            iframe.style.border = "none";
            iframe.setAttribute('allowfullscreen', 'true');

            container.appendChild(iframe);
            canvas.appendChild(container);
            saveCurrentPageData();
        }

        function changeCanvasBackground() {
            const bgUrl = document.getElementById('canvas-bg').value;
            if(bgUrl) {
                canvas.style.backgroundImage = `url('${bgUrl}')`;
                canvas.style.backgroundSize = "cover";
                canvas.style.backgroundPosition = "center";
            } else {
                canvas.style.backgroundImage = "none";
            }
            saveCurrentPageData();
        }

        // 4. Packaging and Compiling to mt.html Export
        function downloadProject() {
            saveCurrentPageData();
            
            // Build simple SPA clean navigation handling client-side router execution switch
            let compiledStructure = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Exported via MT Builder</title>
                <style>
                    body { font-family: sans-serif; margin: 0; padding: 0; min-height:100vh; transition: background 0.3s;}
                    .page-view { display: none; padding: 4px; box-sizing: border-box; max-width:1200px; margin:0 auto;}
                    .page-view.active-view { display: block; }
                    nav a { margin-right: 15px; color: white; text-decoration: none; }
                    .hero-section { padding: 60px 20px; text-align: center; background-size: cover; background-position: center; border-radius: 8px; margin-bottom: 20px; }
                </style>
            </head>
            <body>`;

            // Loop and bundle all views into hidden elements toggled cleanly via hash navigation
            for(let key in pagesData) {
                let bgStyle = pagesData[key].background ? `style="background-image: ${pagesData[key].background}; background-size: cover; background-position: center; min-height: 100vh; padding: 20px;"` : `style="padding:20px;"`;
                compiledStructure += `
                <div id="view-${key}" class="page-view" ${bgStyle}>
                    ${pagesData[key].content}
                </div>`;
            }

            compiledStructure += `
                <script>
                    function router() {
                        const hash = window.location.hash.replace('#', '') || 'home';
                        document.querySelectorAll('.page-view').forEach(el => el.classList.remove('active-view'));
                        const selectedView = document.getElementById('view-' + hash);
                        if(selectedView) selectedView.classList.add('active-view');
                    }
                    window.addEventListener('hashchange', router);
                    window.addEventListener('load', router);
                <\/script>
            </body>
            </html>`;

            // Trigger file download
            const blob = new Blob([compiledStructure], { type: 'text/html' });
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = 'mt.html';
            link.click();
        } 
    </script>
<script defer src="https://static.cloudflareinsights.com/beacon.min.js/v833ccba57c9e4d2798f2e76cebdd09a11778172276447" integrity="sha512-57MDmcccJXYtNnH+ZiBwzC4jb2rvgVCEokYN+L/nLlmO8rfYT/gIpW2A569iJ/3b+0UEasghjuZH/ma3wIs/EQ==" data-cf-beacon='{"version":"2024.11.0","token":"e3c1c9af36de41759418005494a48906","r":1,"server_timing":{"name":{"cfCacheStatus":true,"cfEdge":true,"cfExtPri":true,"cfL4":true,"cfOrigin":true,"cfSpeedBrain":true},"location_startswith":null}}' crossorigin="anonymous"></script>
</body>
</html>
