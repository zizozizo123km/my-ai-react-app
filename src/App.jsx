import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Header/Navigation */}
      <header className="flex justify-between items-center p-4 bg-black/80 fixed top-0 left-0 right-0 z-10">
        <div className="text-3xl font-bold text-red-600">nacero</div>
        <nav className="space-x-6 hidden md:flex">
          <a href="#" className="hover:text-gray-300">Home</a>
          <a href="#" className="hover:text-gray-300">TV Shows</a>
          <a href="#" className="hover:text-gray-300">Movies</a>
          <a href="#" className="hover:text-gray-300">New & Popular</a>
          <a href="#" className="hover:text-gray-300">My List</a>
        </nav>
        <div className="flex items-center space-x-4">
          <button className="text-white">Search</button>
          <div className="w-8 h-8 bg-gray-600 rounded"></div> {/* User Avatar */}
        </div>
      </header>

      {/* Hero Section */}
      <main className="pt-16">
        <div className="relative h-[80vh] bg-cover bg-center flex items-end p-12"
             style={{backgroundImage: "url('https://via.placeholder.com/1920x1080/880000/FFFFFF?text=Featured+Movie+Banner')"}}>
          <div className="max-w-lg bg-black/50 p-4 rounded">
            <h1 className="text-6xl font-extrabold mb-4">The Great Stream</h1>
            <p className="text-xl mb-6">A thrilling adventure awaits. Watch now or add to your list.</p>
            <div className="flex space-x-4">
              <button className="bg-white text-black px-6 py-2 rounded font-bold hover:bg-opacity-80 transition">
                ▶ Play
              </button>
              <button className="bg-gray-700 text-white px-6 py-2 rounded font-bold hover:bg-gray-600 transition">
                + My List
              </button>
            </div>
          </div>
        </div>

        {/* Content Rows */}
        <section className="p-12 space-y-8">
          <h2 className="text-2xl font-bold mb-4">Trending Now</h2>
          <div className="flex overflow-x-scroll space-x-4 pb-4 scrollbar-hide">
            {Array(10).fill(0).map((_, i) => (
              <div key={i} className="flex-shrink-0 w-64 h-40 bg-gray-800 rounded cursor-pointer hover:scale-105 transition-transform duration-300">
                <img src={`https://via.placeholder.com/256x160/333333/FFFFFF?text=Title+${i+1}`} alt={`Title ${i+1}`} className="w-full h-full object-cover rounded"/>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold mb-4">nacero Originals</h2>
          <div className="flex overflow-x-scroll space-x-4 pb-4 scrollbar-hide">
            {Array(10).fill(0).map((_, i) => (
              <div key={i} className="flex-shrink-0 w-64 h-40 bg-gray-800 rounded cursor-pointer hover:scale-105 transition-transform duration-300">
                <img src={`https://via.placeholder.com/256x160/660000/FFFFFF?text=Original+${i+1}`} alt={`Original ${i+1}`} className="w-full h-full object-cover rounded"/>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;