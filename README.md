# Celestial Universe - Project Structure

## Folder Organization

```
Celestial Universe/
├── pages/                          # All HTML pages
│   ├── Index.html                  # Homepage
│   ├── Characters.html             # Characters listing page
│   ├── CharacterDetail.html        # Legacy character detail (use individual character pages instead)
│   ├── News.html                   # News articles page
│   ├── Musics.html                 # Music/Audio page
│   ├── Code.html                   # Code projects page
│   ├── Lore.html                   # Lore/Worldbuilding page
│   ├── Contact.html                # Contact page
│   └── characters/                 # Individual character pages
│       ├── CelesteAiMaerah.html    # Celeste Ai'Maerah character page
│       ├── EmaxulateAmatAi.html    # Emaxulate Amat-Ai character page
│       └── AetherEternael.html     # Aether Eternael character page
│
├── assets/                         # Static assets
│   ├── css/
│   │   └── Styles.css              # Main stylesheet
│   └── js/
│       ├── data.js                 # Shared data and character information
│       ├── nav.js                  # Navigation and utility functions
│       └── script.js               # Legacy script (deprecated)
│
├── index.jsx                       # React component (legacy)
├── PROJECT_STRUCTURE.md            # Original project documentation
└── README.md                       # This file

```

## Navigation

- All main pages are in the `pages/` folder
- Individual character pages are in `pages/characters/` folder
- All pages link back to the main navigation
- Use `Index.html` as the entry point
- Character pages can be accessed from `Characters.html`

## Asset References

All pages use relative paths to reference assets:
- Main pages (`pages/*.html`): `../assets/css/Styles.css` and `../assets/js/*.js`
- Character pages (`pages/characters/*.html`): `../../assets/css/Styles.css` and `../../assets/js/*.js`

## Key Files

- **data.js**: Contains all application data (characters, news, music, code, lore)
- **nav.js**: Handles navigation rendering and mobile menu functionality
- **Styles.css**: Main stylesheet with Tailwind CSS utilities

## Website Pages

1. **Index.html** - Homepage with feature overview
2. **Characters.html** - Divine Panteon with all characters listed
3. **CelesteAiMaerah.html** - Details about Celeste Ai'Maerah
4. **EmaxulateAmatAi.html** - Details about Emaxulate Amat-Ai
5. **AetherEternael.html** - Details about Aether Eternael
6. **News.html** - Latest news and updates
7. **Musics.html** - Music albums and videos
8. **Code.html** - Code projects and technical information
9. **About.html** - World lore and mythology
10. **Contact.html** - Contact form and links

---

**Last Updated**: January 21, 2026
**Status**: Multi-page website with organized folder structure
