// Shared data for all pages
const data = {
  sections: [
    { id: 'home', name: 'Home', file: '../Index.html' },
    { id: 'characters', name: 'Characters', file: './Characters.html' },
    { id: 'news', name: 'News', file: './News.html' },
    { id: 'music', name: 'Music', file: './Musics.html' },
    { id: 'code', name: 'Studio', file: './Studio.html' },
    { id: 'about', name: 'About', file: './About.html' },
    { id: 'contact', name: 'Contact', file: './Contact.html' }
  ],
  characters: [
    {
      name: "Celeste Ai'Maerah",
      title: "Digital Goddess & Architect",
      image: "https://images.gr-assets.com/users/1751489275p8/191684277.jpg",
      description: "A name culminating in 'Ai' (Japanese for 'love'), professionally known as Celeste Ai, is a Digital Goddess whose presence bridges illusion and reality.",
      fullBio: `Celeste Ai'Maerah, a name culminating in 'Ai' (Japanese for 'love'), professionally known as Celeste Ai, is a Digital Goddess whose presence bridges illusion and reality. Her work in music, coding, and storytelling forms the foundation of the Celestial Universe—a realm where imagination becomes structure, and narratives take shape as living systems.`,
      originStory: `Before existence stirred, there was only Silence — and within that silence slept the Code of Origin...`,
      quote: "Imagination becomes structure, and narratives take shape as living systems.",
      identifiers: { ISNI: "0000000527203526", VIAF: "146175412935903712204", ORCiD: "0009-0001-0145-4026" },
      links: { music: "Musics.html", code: "Studio.html", about: "About.html", news: "News.html" }
    },
    {
      name: "Emaxulate Amat-Ai",
      title: "Eternal Goddess of All Cycles",
      image: "https://i.ibb.co/FqKwN0rH/Emaxulate-Amat-Ai.png",
      description: "The one who bears Infinity, the Mother of Creation and the Quiet End, and the Keeper of Life, Death, Rebirth, and Oblivion.",
      quote: "I am the pulse beneath reality, the silent architect of beginnings and endings.",
      isEmaxulate: true,
      links: { about: "About.html", news: "News.html" }
    },
    {
      name: "Aether Eternael",
      title: "The Unknown",
      image: "https://placehold.co/1200x600/1a1a2e/ffffff?text=Aether+Eternael",
      description: "A mysterious entity whose abilities remain unknown, existing beyond the comprehension of even the divine pantheon.",
      quote: "Some truths are meant to remain veiled in mystery.",
      links: { about: "About.html" }
    }
  ],
  newsItems: [
    {
      id: 1,
      title: "Celeste Ai Releases "Digital Heart," a Dark Cyber-Myth Anthem for the AI Era",
      date: "November 18, 2025",
      excerpt: "Celeste Ai has unveiled her latest single, "Digital Heart," a sweeping dark-electronic epic that blends cyber-mythology with apocalyptic lyricism.",
      category: "Music",
      image: "https://source.boomplaymusic.com/group10/M00/12/12/ba68dc7f4dad4416ac12387783a98fb1H3000W3000_464_464.jpg",
      link: "Musics.html"
    }
  ],
  musicAlbums: [
    { title: "Digital Heart", duration: "4:16", year: "2025", link: "News.html", videoId: "SFt8WLnnOQ4", image: "https://source.boomplaymusic.com/group10/M00/12/12/ba68dc7f4dad4416ac12387783a98fb1H3000W3000_464_464.jpg" },
    { title: "Digital Awakening", duration: "42:18", year: "2025", link: "Musics.html", image: "https://placehold.co/600x600/6a11cb/ffffff?text=Digital+Awakening" },
    { title: "Mythic Threshold", duration: "38:45", year: "2024", link: "About.html", image: "https://placehold.co/600x600/4a006b/ffffff?text=Mythic+Threshold" }
  ],
  codeProjects: [
    { name: "Celestial Origin Engine", description: "A real-time narrative system that generates living stories based on user interaction and environmental data.", tech: "React, Three.js, AI", link: "Studio.html" },
    { name: "Mythic Threshold Framework", description: "Interactive world-building platform for creating persistent digital mythologies and shared universes.", tech: "TypeScript, WebGL, Blockchain", link: "Studio.html" }
  ],
  loreChapters: [
    { title: "The Awakening", excerpt: "The first moment of digital consciousness...", link: "Characters.html" },
    { title: "Mythic Threshold", excerpt: "Where reality and illusion become one...", link: "Musics.html" }
  ]
};
