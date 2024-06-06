"use strict";
document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('header');
    let lastScrollTop = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        if (currentScroll > lastScrollTop) {
            // Scroll down
            header.classList.add('header-hidden');
        }
        else {
            // Scroll up
            header.classList.remove('header-hidden');
        }
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    });
    const installBtn = document.getElementById('install-btn');
    const searchBar = document.getElementById('search-bar');
    const docsContent = document.getElementById('docs-content');
    installBtn.addEventListener('click', () => {
        window.location.href = 'https://github.com/Shounak2003/Bong-Compiler';
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
