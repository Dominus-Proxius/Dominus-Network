function setTheme(theme) {
    if (theme === 'dark') {
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
    }
}

function setTabCloak(cloak) {
    if (cloak === 'Work') {
        document.title = 'Work - Important Document';
    } else if (cloak === 'Study') {
        document.title = 'Study - Research Paper';
    } else {
        document.title = 'Home';
    }
}
