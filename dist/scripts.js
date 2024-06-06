"use strict";
document.addEventListener('DOMContentLoaded', () => {
    const installBtn = document.getElementById('install-btn');
    const searchBar = document.getElementById('search-bar');
    const docsContent = document.getElementById('docs-content');
    installBtn.addEventListener('click', () => {
        alert('Installing Bong Compiler...');
        // Add installation logic here
    });
    searchBar.addEventListener('input', () => {
        const query = searchBar.value.toLowerCase();
        const docs = docsContent.querySelectorAll('h3, p');
        docs.forEach(doc => {
            var _a;
            const element = doc;
            const text = ((_a = element.textContent) === null || _a === void 0 ? void 0 : _a.toLowerCase()) || '';
            element.style.display = text.includes(query) ? '' : 'none';
        });
    });
});
