// Function to set the theme
function setTheme(theme) {
    if (theme === 'dark') {
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
    }
    localStorage.setItem('theme', theme); // Store the theme setting
}

// Function to set the tab cloak
function setTabCloak(cloak) {
    let title, favicon;
    if (cloak === 'work') {
        title = 'Work - Important Document';
        favicon = 'https://example.com/work-favicon.ico';
    } else if (cloak === 'study') {
        title = 'Study - Research Paper';
        favicon = 'https://example.com/study-favicon.ico';
    } else {
        title = 'Home';
        favicon = 'favicon.ico'; // Default favicon
    }
    document.title = title;
    setFavicon(favicon);
    localStorage.setItem('tabCloak', JSON.stringify({ title, favicon })); // Store the tab cloak setting
}

// Function to change the favicon
function setFavicon(faviconUrl) {
    let link = document.querySelector("link[rel~='icon']");
    if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.getElementsByTagName('head')[0].appendChild(link);
    }
    link.href = faviconUrl;
}

// Apply stored settings on page load
window.addEventListener('load', () => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
        setTheme(storedTheme);
    }

    const storedTabCloak = JSON.parse(localStorage.getItem('tabCloak'));
    if (storedTabCloak) {
        document.title = storedTabCloak.title;
        setFavicon(storedTabCloak.favicon);
        document.getElementById('tabCloakDropdown').value = storedTabCloak.title.includes('Work') ? 'work' : 'study';
    }
});
