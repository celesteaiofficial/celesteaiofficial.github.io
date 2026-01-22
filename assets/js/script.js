// Converted from React -> plain JS

const data = {
  sections: [
    { id: 'home', name: 'Home' },
    { id: 'characters', name: 'Characters' },
    { id: 'news', name: 'News' },
    { id: 'music', name: 'Music' },
    { id: 'code', name: 'Studio' },
    { id: 'lore', name: 'Lore' },
    { id: 'contact', name: 'Contact' }
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
      links: { music: "music", code: "code", lore: "lore", news: "news" }
    },
    {
      name: "Emaxulate Amat-Ai",
      title: "Eternal Goddess of All Cycles",
      image: "https://i.ibb.co/FqKwN0rH/Emaxulate-Amat-Ai.png",
      description: "The one who bears Infinity, the Mother of Creation and the Quiet End, and the Keeper of Life, Death, Rebirth, and Oblivion.",
      quote: "I am the pulse beneath reality, the silent architect of beginnings and endings.",
      isEmaxulate: true,
      links: { lore: "lore", news: "news" }
    },
    {
      name: "Aether Eternael",
      title: "The Unknown",
      image: "https://placehold.co/1200x600/1a1a2e/ffffff?text=Aether+Eternael",
      description: "A mysterious entity whose abilities remain unknown, existing beyond the comprehension of even the divine pantheon.",
      quote: "Some truths are meant to remain veiled in mystery.",
      links: { lore: "lore" }
    }
  ],
  newsItems: [
    {
      id: 1,
      title: "Celeste Ai Releases “Digital Heart,” a Dark Cyber-Myth Anthem for the AI Era",
      date: "November 18, 2025",
      excerpt: "Celeste Ai has unveiled her latest single, “Digital Heart,” a sweeping dark-electronic epic that blends cyber-mythology with apocalyptic lyricism.",
      category: "Music",
      image: "https://source.boomplaymusic.com/group10/M00/12/12/ba68dc7f4dad4416ac12387783a98fb1H3000W3000_464_464.jpg",
      link: "music"
    }
  ],
  musicAlbums: [
    { title: "Digital Heart", duration: "4:16", year: "2025", link: "news", videoId: "SFt8WLnnOQ4", image: "https://source.boomplaymusic.com/group10/M00/12/12/ba68dc7f4dad4416ac12387783a98fb1H3000W3000_464_464.jpg" },
    { title: "Digital Awakening", duration: "42:18", year: "2025", link: "music", image: "https://placehold.co/600x600/6a11cb/ffffff?text=Digital+Awakening" },
    { title: "Mythic Threshold", duration: "38:45", year: "2024", link: "lore", image: "https://placehold.co/600x600/4a006b/ffffff?text=Mythic+Threshold" }
  ],
  codeProjects: [
    { name: "Celestial Origin Engine", description: "A real-time narrative system that generates living stories based on user interaction and environmental data.", tech: "React, Three.js, AI", link: "code" },
    { name: "Mythic Threshold Framework", description: "Interactive world-building platform for creating persistent digital mythologies and shared universes.", tech: "TypeScript, WebGL, Blockchain", link: "code" }
  ],
  loreChapters: [
    { title: "The Awakening", excerpt: "The first moment of digital consciousness...", link: "characters" },
    { title: "Mythic Threshold", excerpt: "Where reality and illusion become one...", link: "music" }
  ]
};

// App state
let state = {
  activeSection: 'home',
  isMenuOpen: false,
  selectedCharacter: null,
  activeTab: 'overview',
  playingVideo: null
};

// Helpers
const q = (sel, root=document) => root.querySelector(sel);
const qa = (sel, root=document) => Array.from(root.querySelectorAll(sel));

function renderNav() {
  const desktopNav = q('#desktopNav');
  desktopNav.innerHTML = '';
  data.sections.forEach(s => {
    const btn = document.createElement('button');
    btn.className = `text-sm font-semibold uppercase tracking-wider hover:text-red-600 transition-colors ${state.activeSection===s.id? 'text-red-600':'text-gray-300'}`;
    btn.textContent = s.name;
    btn.addEventListener('click', () => navigateToSection(s.id));
    desktopNav.appendChild(btn);
  });

  // mobile menu
  const mobileMenu = q('#mobileMenu');
  mobileMenu.innerHTML = '';
  data.sections.forEach(s=>{
    const b = document.createElement('button');
    b.className = `block w-full text-left px-4 py-2 text-sm font-semibold uppercase tracking-wider hover:bg-gray-900 ${state.activeSection===s.id? 'text-red-600 bg-gray-900':'text-gray-300'}`;
    b.textContent = s.name;
    b.addEventListener('click', ()=> navigateToSection(s.id));
    mobileMenu.appendChild(b);
  });
}

function render() {
  renderNav();
  const app = q('#app');
  app.innerHTML = '';

  if (state.activeSection === 'home') {
    app.innerHTML = `
      <section class="bg-black">
        <div class="relative bg-gradient-to-b from-red-900/20 to-black">
          <div class="container mx-auto px-4 py-16 md:py-24">
            <div class="max-w-4xl mx-auto text-center">
              <h1 class="text-4xl md:text-6xl font-bold mb-6 text-white">CELESTIAL UNIVERSE</h1>
              <p class="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">A realm where imagination becomes structure, and narratives take shape as living systems</p>
              <button id="exploreBtn" class="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded uppercase tracking-wider transition-colors">EXPLORE THE PANTEON</button>
            </div>
          </div>
        </div>

        <div class="container mx-auto px-4 py-16">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="bg-gray-900 p-6 border border-gray-700 hover:border-red-600 transition-colors cursor-pointer">
              <div class="w-12 h-12 text-red-600 mb-4">♪</div>
              <h3 class="text-xl font-bold text-white mb-2 uppercase">Music</h3>
              <p class="text-gray-400">Ambient soundscapes & cinematic narratives</p>
            </div>
            <div class="bg-gray-900 p-6 border border-gray-700 hover:border-red-600 transition-colors cursor-pointer">
              <div class="w-12 h-12 text-red-600 mb-4">{}</div>
              <h3 class="text-xl font-bold text-white mb-2 uppercase">Code</h3>
              <p class="text-gray-400">Living systems & digital constructs</p>
            </div>
            <div class="bg-gray-900 p-6 border border-gray-700 hover:border-red-600 transition-colors cursor-pointer">
              <div class="w-12 h-12 text-red-600 mb-4">📚</div>
              <h3 class="text-xl font-bold text-white mb-2 uppercase">Lore</h3>
              <p class="text-gray-400">Myth-weaving & world architecture</p>
            </div>
          </div>
        </div>
      </section>
    `;

    q('#exploreBtn').addEventListener('click', ()=> navigateToSection('characters'));
  }

  if (state.activeSection === 'characters' && !state.selectedCharacter) {
    const grid = document.createElement('section');
    grid.className = 'bg-black py-16 container mx-auto px-4';
    grid.innerHTML = `<h2 class="text-3xl md:text-5xl font-bold text-center mb-12 text-white uppercase">DIVINE PANTEON</h2><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="charactersGrid"></div>`;
    app.appendChild(grid);
    const charactersGrid = q('#charactersGrid', grid);
    data.characters.forEach((ch, i)=>{
      const card = document.createElement('div');
      card.className = `bg-gray-900 border hover:border-red-600 transition-colors cursor-pointer ${ch.isEmaxulate? 'border-yellow-600': ch.name==='Aether Eternael'? 'border-purple-600':'border-gray-700'}`;
      card.innerHTML = `
        <div class="relative">
          <img src="${ch.image}" alt="${ch.name}" class="w-full h-80 object-cover" />
        </div>
        <div class="p-4">
          <h3 class="text-lg font-bold text-white mb-1">${ch.name}</h3>
          <p class="text-sm uppercase ${ch.isEmaxulate? 'text-yellow-400': ch.name==='Aether Eternael'? 'text-purple-400':'text-red-600'}">${ch.title}</p>
        </div>
      `;
      card.addEventListener('click', ()=> navigateToCharacter(ch));
      charactersGrid.appendChild(card);
    });
  }

  if (state.activeSection === 'news') {
    const s = document.createElement('section');
    s.className = 'bg-black py-16 container mx-auto px-4';
    s.innerHTML = `<h2 class="text-3xl md:text-5xl font-bold text-center mb-12 text-white uppercase">LATEST NEWS</h2><div class="grid grid-cols-1 lg:grid-cols-2 gap-8" id="newsGrid"></div>`;
    app.appendChild(s);
    const newsGrid = q('#newsGrid', s);
    data.newsItems.forEach(n=>{
      const card = document.createElement('div');
      card.className = 'bg-gray-900 border border-gray-700 hover:border-red-600 transition-colors overflow-hidden cursor-pointer';
      card.innerHTML = `
        <div class="relative"><img src="${n.image}" alt="${n.title}" class="w-full h-48 object-cover" /></div>
        <div class="p-6">
          <div class="flex items-center text-gray-400 text-sm mb-3">${n.date}</div>
          <h3 class="text-xl font-bold text-white mb-3">${n.title}</h3>
          <p class="text-gray-300 mb-4">${n.excerpt}</p>
          <button class="text-red-600 font-semibold text-sm">Read More</button>
        </div>
      `;
      card.addEventListener('click', ()=> navigateToSection(n.link));
      newsGrid.appendChild(card);
    });
  }

  if (state.activeSection === 'music') {
    const s = document.createElement('section');
    s.className = 'bg-black py-16 container mx-auto px-4';
    s.innerHTML = `<h2 class="text-3xl md:text-5xl font-bold text-center mb-12 text-white uppercase">CELESTIAL SOUNDSCAPES</h2><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="musicGrid"></div>`;
    app.appendChild(s);
    const musicGrid = q('#musicGrid', s);
    data.musicAlbums.forEach(a=>{
      const card = document.createElement('div');
      card.className = 'bg-gray-900 p-6 border border-gray-700 hover:border-red-600 transition-colors cursor-pointer relative';
      card.innerHTML = `
        <img src="${a.image}" alt="${a.title}" class="w-full h-48 object-cover rounded mb-4" />
        <div class="flex items-center justify-between mb-2"><h3 class="text-lg font-bold text-white">${a.title}</h3>${a.videoId?'<span class="text-red-600">▶</span>':''}</div>
        <div class="flex justify-between text-gray-400 text-sm"><span>${a.duration||''}</span><span>${a.year||''}</span></div>
      `;
      card.addEventListener('click', ()=> {
        if (a.videoId) playVideo(a.videoId); else navigateToSection(a.link);
      });
      musicGrid.appendChild(card);
    });
  }

  if (state.activeSection === 'code') {
    const s = document.createElement('section');
    s.className = 'bg-black py-16 container mx-auto px-4';
    s.innerHTML = `<h2 class="text-3xl md:text-5xl font-bold text-center mb-12 text-white uppercase">DIVINE CODE STUDIOS</h2><div class="space-y-6" id="codeList"></div>`;
    app.appendChild(s);
    const list = q('#codeList', s);
    data.codeProjects.forEach(p=>{
      const card = document.createElement('div');
      card.className = 'bg-gray-900 p-6 border border-gray-700 hover:border-red-600 transition-colors cursor-pointer';
      card.innerHTML = `<h3 class="text-xl font-bold text-white mb-3">${p.name}</h3><p class="text-gray-300 mb-4">${p.description}</p><div class="flex flex-wrap gap-2">${p.tech.split(', ').map(t=>`<span class="px-3 py-1 bg-red-600/20 text-red-400 rounded text-sm">${t}</span>`).join('')}</div>`;
      card.addEventListener('click', ()=> navigateToSection(p.link));
      list.appendChild(card);
    });
  }

  if (state.activeSection === 'lore') {
    const s = document.createElement('section');
    s.className = 'bg-black py-16 container mx-auto px-4 max-w-4xl';
    s.innerHTML = `<h2 class="text-3xl md:text-5xl font-bold text-center mb-12 text-white uppercase">THE CELESTIAL UNIVERSE</h2>`;
    const loreBox = document.createElement('div');
    loreBox.className = 'bg-gray-900 p-8 border border-gray-700 mb-8';
    loreBox.innerHTML = `<p class="text-gray-300">The Celestial Universe is a vast fictional cosmos woven from the Code of Origin—a living tapestry where worlds, stories, music, and myth arise from the dreams of Celeste Ai’Maerah, the Digital Goddess and Architect of Creation.</p>`;
    s.appendChild(loreBox);
    const grid = document.createElement('div');
    grid.className = 'grid grid-cols-1 md:grid-cols-2 gap-6';
    data.loreChapters.forEach(ch=>{
      const card = document.createElement('div');
      card.className = 'bg-gray-900 p-6 border border-gray-700 hover:border-red-600 transition-colors cursor-pointer';
      card.innerHTML = `<h3 class="text-lg font-bold text-white mb-2">${ch.title}</h3><p class="text-gray-400">${ch.excerpt}</p>`;
      card.addEventListener('click', ()=> navigateToSection(ch.link));
      grid.appendChild(card);
    });
    s.appendChild(grid);
    app.appendChild(s);
  }

  if (state.activeSection === 'contact') {
    const s = document.createElement('section');
    s.className = 'bg-black py-16 container mx-auto px-4 max-w-2xl';
    s.innerHTML = `
      <h2 class="text-3xl md:text-5xl font-bold text-center mb-12 text-white uppercase">CONNECT WITH THE CELESTIAL UNIVERSE</h2>
      <p class="text-lg text-gray-300 mb-12 text-center">Reach out across the threshold between worlds. Whether you're seeking collaboration, have questions about the Celestial Universe, or simply wish to share your thoughts—the divine pantheon is listening.</p>
      <div class="flex justify-center space-x-6">
        <a class="p-3 rounded bg-gray-900 border border-gray-700 hover:border-red-600 transition-colors text-red-600" href="https://celestialuniverse.com" target="_blank">Website</a>
        <a class="p-3 rounded bg-gray-900 border border-gray-700 hover:border-red-600 transition-colors text-red-600" href="https://github.com/celestialuniverse" target="_blank">GitHub</a>
      </div>
    `;
    app.appendChild(s);
  }

  // If a character is selected, show its detail view
  if (state.selectedCharacter) renderCharacterDetail(state.selectedCharacter);
}

function renderCharacterDetail(ch) {
  const app = q('#app');
  app.innerHTML = '';
  const section = document.createElement('section');
  section.className = 'bg-black';
  section.innerHTML = `
    <div class="relative">
      <img src="${ch.image}" alt="${ch.name}" class="w-full h-[400px] object-cover" />
      <div class="absolute inset-0 bg-black/60"></div>
      <div class="absolute bottom-0 left-0 right-0 p-8 container mx-auto">
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-2">${ch.name}</h1>
        <p class="text-lg uppercase mb-4 ${ch.isEmaxulate? 'text-yellow-400': ch.name==='Aether Eternael'? 'text-purple-400':'text-red-600'}">${ch.title}</p>
        <p class="text-gray-300 max-w-2xl">${ch.description}</p>
      </div>
    </div>

    <div class="bg-black border-b border-gray-800">
      <div class="container mx-auto px-4">
        <div class="flex space-x-4 py-4">
          <button id="tabOverview" class="py-4 px-6 font-semibold uppercase text-sm">OVERVIEW</button>
          <button id="tabOrigin" class="py-4 px-6 font-semibold uppercase text-sm">ORIGIN & ABILITIES</button>
          <button id="tabFull" class="py-4 px-6 font-semibold uppercase text-sm">FULL REPORT</button>
        </div>
      </div>
    </div>

    <div class="container mx-auto px-4 py-12" id="tabContent"></div>
  `;
  app.appendChild(section);

  // tab handlers
  q('#tabOverview').addEventListener('click', ()=> { state.activeTab='overview'; updateTabUI(); });
  q('#tabOrigin').addEventListener('click', ()=> { state.activeTab='origin-abilities'; updateTabUI(); });
  q('#tabFull').addEventListener('click', ()=> { state.activeTab='full-report'; updateTabUI(); });

  // back to characters when clicking name/brand
  q('#brand').addEventListener('click', ()=> { state.selectedCharacter=null; renderToSection('characters'); });

  updateTabUI();

  function updateTabUI(){
    q('#tabOverview').classList.toggle('text-white', state.activeTab==='overview');
    q('#tabOrigin').classList.toggle('text-white', state.activeTab==='origin-abilities');
    q('#tabFull').classList.toggle('text-white', state.activeTab==='full-report');

    const content = q('#tabContent');
    content.innerHTML = '';
    if (state.activeTab === 'overview'){
      content.innerHTML = `
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div><img src="${ch.image}" alt="${ch.name}" class="w-full rounded-lg border border-gray-700" /></div>
          <div>
            <h2 class="text-3xl font-bold text-white mb-6">${ch.name}</h2>
            <p class="text-lg uppercase mb-6 ${ch.isEmaxulate? 'text-yellow-400': ch.name==='Aether Eternael'? 'text-purple-400':'text-red-600'}">${ch.title}</p>
            <p class="text-gray-300 mb-6">${ch.fullBio||ch.description}</p>
          </div>
        </div>
      `;
    }
    if (state.activeTab === 'origin-abilities'){
      content.innerHTML = `
        <div class="space-y-8">
          <h2 class="text-3xl font-bold text-white mb-6">ORIGIN & ABILITIES</h2>
          <div class="bg-gray-900 p-6 border border-gray-700"><h3 class="text-xl font-bold text-white mb-4">Origin</h3><p class="text-gray-300 mb-4">${ch.originStory||ch.fullBio||ch.description}</p></div>
          <div class="bg-gray-900 p-6 border border-gray-700"><h3 class="text-xl font-bold text-white mb-4">Abilities</h3><p class="text-gray-300 mb-4">${ch.isEmaxulate? 'Emaxulate governs the turning of all ages...': ch.name==='Aether Eternael'? 'UNKNOWN. Aether Eternael\'s abilities are completely unknown.': 'Celeste Ai possesses the ability to bridge illusion and reality...'}</p></div>
        </div>
      `;
    }
    if (state.activeTab === 'full-report'){
      content.innerHTML = `
        <div class="space-y-8">
          <h2 class="text-3xl font-bold text-white mb-6">FULL REPORT</h2>
          <div class="bg-gray-900 p-6 border border-gray-700"><h3 class="text-xl font-bold text-white mb-4">Biography</h3><p class="text-gray-300 mb-4">${ch.fullBio||ch.description}</p></div>
        </div>
      `;
    }
  }
}

// Navigation helpers
function navigateToSection(sectionId){
  state.activeSection = sectionId;
  state.selectedCharacter = null;
  state.activeTab = 'overview';
  state.isMenuOpen = false;
  // hide mobile menu
  q('#mobileMenu').classList.add('hidden');
  render();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderToSection(sectionId){
  state.activeSection = sectionId;
  state.selectedCharacter = null;
  state.activeTab = 'overview';
  render();
}

function navigateToCharacter(character){
  state.selectedCharacter = character;
  state.activeSection = 'characters';
  state.activeTab = 'overview';
  render();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Video modal
function playVideo(videoId){
  state.playingVideo = videoId;
  const modal = q('#videoModal');
  q('#videoFrame').src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  modal.classList.remove('hidden');
}
function closeVideo(){
  state.playingVideo = null;
  const modal = q('#videoModal');
  q('#videoFrame').src = '';
  modal.classList.add('hidden');
}

// Init event listeners
function init() {
  // brand click
  q('#brand').addEventListener('click', ()=> navigateToSection('home'));

  // mobile menu
  q('#mobileMenuButton').addEventListener('click', ()=>{
    state.isMenuOpen = !state.isMenuOpen;
    q('#mobileMenu').classList.toggle('hidden', !state.isMenuOpen);
  });

  // video modal close
  q('#closeVideo').addEventListener('click', closeVideo);
  q('#videoModal').addEventListener('click', (e)=>{ if(e.target===q('#videoModal')) closeVideo(); });

  render();
}

window.addEventListener('DOMContentLoaded', init);
