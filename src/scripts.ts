document.addEventListener('DOMContentLoaded', () => {
    const installBtn = document.getElementById('install-btn') as HTMLButtonElement;
    const searchBar = document.getElementById('search-bar') as HTMLInputElement;
    const docsContent = document.getElementById('docs-content') as HTMLDivElement;

    installBtn.addEventListener('click', () => {
        window.location.href = 'https://github.com/Shounak2003/Bong-Compiler';
    });

    searchBar.addEventListener('input', () => {
        const query = searchBar.value.toLowerCase();
        const docs = docsContent.querySelectorAll('h3, p');
        docs.forEach(doc => {
            const element = doc as HTMLElement;
            const text = element.textContent?.toLowerCase() || '';
            element.style.display = text.includes(query) ? '' : 'none';
        });
    });
});
