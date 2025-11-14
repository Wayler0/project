#!/usr/bin/env node

/**
 * Build script to inject shared header/footer components into HTML files
 * Usage: node build.js
 */

const fs = require('fs');
const path = require('path');

const headerNav = fs.readFileSync(path.join(__dirname, 'components', 'header-nav.html'), 'utf8');
const footerContacts = fs.readFileSync(path.join(__dirname, 'components', 'footer-contacts.html'), 'utf8');

const pages = [
    { file: 'index.html', navType: 'home' },
    { file: 'about.html', navType: 'about' },
    { file: 'courses.html', navType: 'courses' },
];

function buildNav(template, activeType) {
    // Update nav links based on current page
    const navMap = {
        home: { home: 'index.html', about: 'about.html', courses: 'courses.html' },
        about: { home: 'index.html', about: 'about.html', courses: 'courses.html' },
        courses: { home: 'index.html', about: 'about.html', courses: 'courses.html' },
    };
    return template;
}

pages.forEach(({ file, navType }) => {
    const filePath = path.join(__dirname, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // Replace nav placeholder
    if (content.includes('<!-- INJECT: site-nav -->')) {
        content = content.replace('<!-- INJECT: site-nav -->', buildNav(headerNav, navType));
        console.log(`✓ Injected nav into ${file}`);
    }

    // Replace footer placeholder
    if (content.includes('<!-- INJECT: footer-contacts -->')) {
        content = content.replace('<!-- INJECT: footer-contacts -->', footerContacts);
        console.log(`✓ Injected footer into ${file}`);
    }

    fs.writeFileSync(filePath, content, 'utf8');
});

console.log('\n✓ Build complete! Components injected.');
