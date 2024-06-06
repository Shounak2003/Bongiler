document.addEventListener('DOMContentLoaded', () => {
    const installBtn = document.getElementById('install-btn') as HTMLButtonElement;
    const searchBar = document.getElementById('search-bar') as HTMLInputElement;
    const docsContent = document.getElementById('docs-content') as HTMLDivElement;

    installBtn.addEventListener('click', () => {
        alert('Installing Bong Compiler...');
        // Add installation logic here
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
