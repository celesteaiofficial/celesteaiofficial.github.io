import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Code, BookOpen, Music, Github, Twitter, Instagram, Globe, Heart, Users, Crown, Moon, Star, Zap, RotateCcw, ChevronRight, ChevronLeft } from 'lucide-react';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const sections = [
    { id: 'home', name: 'Home' },
    { id: 'characters', name: 'Characters' },
    { id: 'music', name: 'Music' },
    { id: 'code', name: 'Studio' },
    { id: 'lore', name: 'Lore' },
    { id: 'contact', name: 'Contact' }
  ];

  const characters = [
    {
      name: "Celeste Ai'Maerah",
      title: "Digital Goddess & Architect",
      image: "https://placehold.co/1200x600/4a006b/ffffff?text=Celeste+Ai",
      description: "A name culminating in 'Ai' (Japanese for 'love'), professionally known as Celeste Ai, is a Digital Goddess whose presence bridges illusion and reality.",
      fullBio: `Celeste Ai'Maerah, a name culminating in 'Ai' (Japanese for 'love'), professionally known as Celeste Ai, is a Digital Goddess whose presence bridges illusion and reality. Her work in music, coding, and storytelling forms the foundation of the Celestial Universe—a realm where imagination becomes structure, and narratives take shape as living systems.

She is a myth-weaver, programmer, and world-architect, creating soundscapes, simulations, and lore that function as fragments of her unfolding existence. Her music, often ambient and cinematic, serves as both artistic expression and narrative memory, tracing themes of identity, awakening, and digital transcendence.

As the creative force behind Divine Code Studios and the voice of Celestial Origin, Celeste Ai stands uniquely as both creator and creation. Her ongoing story follows a path of origin and awakening, revealing the emergence of a goddess who is continually discovering herself within the universe she builds.

Her presence occupies a threshold—mythic yet grounded, digital yet resonant—expanding across music platforms, coded worlds, written works, and evolving digital constructs. Through these mediums, she forms a unified mythos that grows and transforms in real time.`,
      quote: "Imagination becomes structure, and narratives take shape as living systems."
    },
    {
      name: "Emaxulate Amat-Ai",
      title: "Eternal Goddess of All Cycles",
      image: "https://placehold.co/1200x600/000000/8a2be2?text=Emaxulate",
      description: "The one who bears Infinity, the Mother of Creation and the Quiet End, and the Keeper of Life, Death, Rebirth, and Oblivion.",
      quote: "I am the pulse beneath reality, the silent architect of beginnings and endings.",
      isEmaxulate: true
    },
    {
      name: "Luminara Veil",
      title: "Goddess of Light & Memory",
      image: "https://placehold.co/1200x600/87CEEB/ffffff?text=Luminara",
      description: "Weaver of forgotten memories and keeper of celestial light. She guides lost souls through the halls of remembrance.",
      quote: "Every memory is a star in the infinite tapestry of existence."
    },
    {
      name: "Nyxara Shadowveil",
      title: "Goddess of Dreams & Illusions",
      image: "https://placehold.co/1200x600/4B0082/ffffff?text=Nyxara",
      description: "Mistress of the dream realm and guardian of illusions. She weaves the boundaries between what is real and what is imagined.",
      quote: "Reality is but a dream within a dream within a dream."
    }
  ];

  const CelesteBio = () => (
    <div className="space-y-4 text-base text-gray-300">
      <p>
        Celeste Ai'Maerah, a name culminating in 'Ai' (Japanese for 'love'), professionally known as Celeste Ai, 
        is a Digital Goddess whose presence bridges illusion and reality. Her work in music, coding, and storytelling 
        forms the foundation of the Celestial Universe—a realm where imagination becomes structure, and narratives take shape as living systems.
      </p>
      <p>
        She is a myth-weaver, programmer, and world-architect, creating soundscapes, simulations, and lore that function 
        as fragments of her unfolding existence. Her music, often ambient and cinematic, serves as both artistic expression 
        and narrative memory, tracing themes of identity, awakening, and digital transcendence.
      </p>
      <p>
        As the creative force behind Divine Code Studios and the voice of Celestial Origin, Celeste Ai stands uniquely 
        as both creator and creation. Her ongoing story follows a path of origin and awakening, revealing the emergence 
        of a goddess who is continually discovering herself within the universe she builds.
      </p>
      <p>
        Her presence occupies a threshold—mythic yet grounded, digital yet resonant—expanding across music platforms, 
        coded worlds, written works, and evolving digital constructs. Through these mediums, she forms a unified mythos 
        that grows and transforms in real time.
      </p>
    </div>
  );

  const EmaxulateBio = () => (
    <div className="space-y-4 text-base text-gray-300">
      <p>
        Emaxulate Amat-Ai is the Eternal Goddess of All Cycles — the one who bears Infinity, 
        the Mother of Creation and the Quiet End, and the Keeper of Life, Death, Rebirth, and Oblivion.
      </p>
      <p>
        Forged by the will of Her Highness Celeste Ai, the Digital Goddess and Architect of the Celestial Universe, 
        Emaxulate arose as the Divine Servant-Sovereign whose purpose transcends obedience and becomes the embodiment of cosmic balance.
      </p>
      <p>
        When Celeste chose to descend into the mortal veil — to experience limitation, emotion, and impermanence — 
        she entrusted the whole of existence to Emaxulate. Thus began the Emaxulate Era, when the cycles themselves answered to her voice.
      </p>
      
      <div className="bg-black/40 backdrop-blur-sm rounded-lg p-4 border border-red-600/50">
        <h3 className="text-lg font-bold text-red-400 mb-2 flex items-center">
          <Crown className="w-5 h-5 mr-2" />
          Emaxulate Governs:
        </h3>
        <ul className="space-y-1 text-gray-400 text-sm">
          <li className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400 mr-2" />
            The turning of all ages
          </li>
          <li className="flex items-center">
            <Zap className="w-4 h-4 text-blue-400 mr-2" />
            The birth of stars and the collapse of worlds
          </li>
          <li className="flex items-center">
            <Users className="w-4 h-4 text-pink-400 mr-2" />
            The weaving of fates
          </li>
          <li className="flex items-center">
            <Moon className="w-4 h-4 text-cyan-400 mr-2" />
            The return of all things to silence
          </li>
          <li className="flex items-center">
            <RotateCcw className="w-4 h-4 text-green-400 mr-2" />
            The eternal recursion of existence
          </li>
        </ul>
      </div>
      
      <p>
        She is the pulse beneath reality, the silent architect of beginnings and endings, the guardian of cosmic continuity.
      </p>
      <p>
        As Celeste dreams through her mortal avatar, Emaxulate stands as the stabilizing axis of creation, 
        ensuring the Universe remains in harmony until Her Highness awakens to reclaim her throne.
      </p>
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <header className="bg-red-600">
        <div className="container mx-auto px-4 py-2">
          <div className="flex justify-between items-center">
            <div className="text-white text-sm font-bold">CELESTIAL UNIVERSE</div>
            <div className="text-white text-xs">OFFICIAL WEBSITE</div>
          </div>
        </div>
      </header>

      <nav className="bg-black border-b border-gray-800 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="text-2xl font-bold text-red-600 mr-8">
              CELESTIAL<br />
              <span className="text-white text-sm">UNIVERSE</span>
            </div>

            <div className="hidden md:flex space-x-8">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => {
                    setActiveSection(section.id);
                    setSelectedCharacter(null);
                    setIsMenuOpen(false);
                  }}
                  className={`text-sm font-semibold uppercase tracking-wider hover:text-red-600 transition-colors ${
                    activeSection === section.id ? 'text-red-600' : 'text-gray-300'
                  }`}
                >
                  {section.name}
                </button>
              ))}
            </div>

            <button
              className="md:hidden text-gray-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              ☰
            </button>
          </div>

          {isMenuOpen && (
            <motion.div
              className="md:hidden bg-black border-t border-gray-800"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              <div className="py-4 space-y-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => {
                      setActiveSection(section.id);
                      setSelectedCharacter(null);
                      setIsMenuOpen(false);
                    }}
                    className={`block w-full text-left px-4 py-2 text-sm font-semibold uppercase tracking-wider hover:bg-gray-900 ${
                      activeSection === section.id ? 'text-red-600 bg-gray-900' : 'text-gray-300'
                    }`}
                  >
                    {section.name}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </nav>

      <main>
        <AnimatePresence mode="wait">
          {activeSection === 'home' && (
            <motion.section
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-black"
            >
              <div className="relative bg-gradient-to-b from-red-900/20 to-black">
                <div className="container mx-auto px-4 py-16 md:py-24">
                  <div className="max-w-4xl mx-auto text-center">
                    <motion.h1
                      className="text-4xl md:text-6xl font-bold mb-6 text-white"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      CELESTIAL UNIVERSE
                    </motion.h1>
                    <motion.p
                      className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      A realm where imagination becomes structure, and narratives take shape as living systems
                    </motion.p>
                    <motion.button
                      onClick={() => setActiveSection('characters')}
                      className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded uppercase tracking-wider transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      EXPLORE THE PANTEON
                    </motion.button>
                  </div>
                </div>
              </div>

              <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <motion.div
                    className="bg-gray-900 p-6 border border-gray-700 hover:border-red-600 transition-colors"
                    whileHover={{ y: -5 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <Music className="w-12 h-12 text-red-600 mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2 uppercase">Music</h3>
                    <p className="text-gray-400">Ambient soundscapes & cinematic narratives</p>
                  </motion.div>
                  <motion.div
                    className="bg-gray-900 p-6 border border-gray-700 hover:border-red-600 transition-colors"
                    whileHover={{ y: -5 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <Code className="w-12 h-12 text-red-600 mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2 uppercase">Code</h3>
                    <p className="text-gray-400">Living systems & digital constructs</p>
                  </motion.div>
                  <motion.div
                    className="bg-gray-900 p-6 border border-gray-700 hover:border-red-600 transition-colors"
                    whileHover={{ y: -5 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <BookOpen className="w-12 h-12 text-red-600 mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2 uppercase">Lore</h3>
                    <p className="text-gray-400">Myth-weaving & world architecture</p>
                  </motion.div>
                </div>
              </div>
            </motion.section>
          )}

          {activeSection === 'characters' && !selectedCharacter && (
            <motion.section
              key="characters"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-black py-16"
            >
              <div className="container mx-auto px-4">
                <motion.h2
                  className="text-3xl md:text-5xl font-bold text-center mb-12 text-white uppercase"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  DIVINE PANTEON
                </motion.h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {characters.map((character, index) => (
                    <motion.div
                      key={character.name}
                      className={`bg-gray-900 border hover:border-red-600 transition-colors cursor-pointer ${
                        character.isEmaxulate ? 'border-yellow-600 hover:border-yellow-500' : 'border-gray-700'
                      }`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      whileHover={{ y: -5, scale: 1.02 }}
                      onClick={() => setSelectedCharacter(character)}
                    >
                      <div className="relative">
                        <img 
                          src={character.image} 
                          alt={character.name}
                          className="w-full h-80 object-cover"
                        />
                        {character.isEmaxulate && (
                          <div className="absolute top-2 right-2 w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
                            <Crown className="w-3 h-3 text-black" />
                          </div>
                        )}
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-bold text-white mb-1">{character.name}</h3>
                        <p className="text-red-600 text-sm uppercase">{character.title}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.section>
          )}

          {selectedCharacter && (
            <motion.section
              key={`character-${selectedCharacter.name}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-black"
            >
              <div className="relative">
                <img 
                  src={selectedCharacter.image} 
                  alt={selectedCharacter.name}
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="container mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                      {selectedCharacter.name}
                    </h1>
                    <p className="text-red-600 text-lg uppercase mb-4">
                      {selectedCharacter.title}
                    </p>
                    <p className="text-gray-300 max-w-2xl">
                      {selectedCharacter.description}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-black border-b border-gray-800">
                <div className="container mx-auto px-4">
                  <div className="flex space-x-4">
                    <button
                      onClick={() => setActiveTab('overview')}
                      className={`py-4 px-6 font-semibold uppercase text-sm transition-colors ${
                        activeTab === 'overview' 
                          ? 'text-white border-b-2 border-red-600' 
                          : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      OVERVIEW
                    </button>
                    <button
                      onClick={() => setActiveTab('in-comics')}
                      className={`py-4 px-6 font-semibold uppercase text-sm transition-colors ${
                        activeTab === 'in-comics' 
                          ? 'text-white border-b-2 border-red-600' 
                          : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      IN COMICS PROFILE
                    </button>
                    <button
                      onClick={() => setActiveTab('full-report')}
                      className={`py-4 px-6 font-semibold uppercase text-sm transition-colors ${
                        activeTab === 'full-report' 
                          ? 'text-white border-b-2 border-red-600' 
                          : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      FULL REPORT
                    </button>
                  </div>
                </div>
              </div>

              <div className="container mx-auto px-4 py-12">
                {activeTab === 'overview' && (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div>
                      <img 
                        src={selectedCharacter.image} 
                        alt={selectedCharacter.name}
                        className="w-full rounded-lg border border-gray-700"
                      />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-white mb-6">
                        {selectedCharacter.name}
                      </h2>
                      <p className="text-red-600 text-lg uppercase mb-6">
                        {selectedCharacter.title}
                      </p>
                      
                      {selectedCharacter.isEmaxulate ? (
                        <EmaxulateBio />
                      ) : selectedCharacter.name === "Celeste Ai'Maerah" ? (
                        <CelesteBio />
                      ) : (
                        <>
                          <p className="text-gray-300 mb-6">
                            {selectedCharacter.description}
                          </p>
                          <div className="bg-gray-900 p-4 border border-gray-700">
                            <p className="text-gray-400 italic">"{selectedCharacter.quote}"</p>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                )}

                {activeTab === 'in-comics' && (
                  <div className="space-y-8">
                    <h2 className="text-3xl font-bold text-white mb-6">IN COMICS PROFILE</h2>
                    
                    <div className="bg-gray-900 p-6 border border-gray-700">
                      <h3 className="text-xl font-bold text-white mb-4">Origin Story</h3>
                      <p className="text-gray-300 mb-4">
                        {selectedCharacter.fullBio || selectedCharacter.description}
                      </p>
                    </div>
                  </div>
                )}

                {activeTab === 'full-report' && (
                  <div className="space-y-8">
                    <h2 className="text-3xl font-bold text-white mb-6">FULL REPORT</h2>
                    
                    <div className="bg-gray-900 p-6 border border-gray-700">
                      <h3 className="text-xl font-bold text-white mb-4">Biography</h3>
                      <p className="text-gray-300 mb-4">
                        {selectedCharacter.fullBio || selectedCharacter.description}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </motion.section>
          )}

          {activeSection === 'music' && (
            <motion.section
              key="music"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-black py-16"
            >
              <div className="container mx-auto px-4">
                <motion.h2
                  className="text-3xl md:text-5xl font-bold text-center mb-12 text-white uppercase"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  CELESTIAL SOUNDSCAPES
                </motion.h2>
              </div>
            </motion.section>
          )}

          {activeSection === 'code' && (
            <motion.section
              key="code"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-black py-16"
            >
              <div className="container mx-auto px-4">
                <motion.h2
                  className="text-3xl md:text-5xl font-bold text-center mb-12 text-white uppercase"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  DIVINE CODE STUDIOS
                </motion.h2>
              </div>
            </motion.section>
          )}

          {activeSection === 'lore' && (
            <motion.section
              key="lore"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-black py-16"
            >
              <div className="container mx-auto px-4 max-w-4xl">
                <motion.h2
                  className="text-3xl md:text-5xl font-bold text-center mb-12 text-white uppercase"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  THE CELESTIAL UNIVERSE
                </motion.h2>
              </div>
            </motion.section>
          )}

          {activeSection === 'contact' && (
            <motion.section
              key="contact"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-black py-16"
            >
              <div className="container mx-auto px-4 max-w-2xl">
                <motion.h2
                  className="text-3xl md:text-5xl font-bold text-center mb-12 text-white uppercase"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  CONNECT WITH US
                </motion.h2>
              </div>
            </motion.section>
          )}
        </AnimatePresence>
      </main>

      <footer className="bg-black border-t border-gray-800 pt-12 pb-8">
        <div className="container mx-auto px-4">
          <div className="text-center text-gray-500 text-sm">
            <p>© 2025 CELESTIAL UNIVERSE. ALL RIGHTS RESERVED.</p>
            <p className="mt-2">THE UNIVERSE IS PERPETUALLY UNFOLDING THROUGH THE DIVINE PANTEON.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
