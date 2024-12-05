
export function Hero() {
  return (
    <div id="hero" className="relative min-h-[80vh] flex items-center">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1597687210367-a4915552d886?auto=format&fit=crop&q=80&w=2000")',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          AUTOMOBILIŲ ĮLENKIMŲ LYGINIMAS
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-gray-200">
        šiuolaikiška automobilių išvaizdos atnaujinimo technologija, kai įvairaus dydžio įlenkimai, įbrėžimai ir kt. defektai, atsiradę ant automobilio kėbulo, pašalinami be glaistymo, gruntavimo, šlifavimo ar dažymo darbų.
        </p>
        <div className="flex gap-4 justify-center">
          <a 
            href="#contact" 
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
          >
            Susisiekite
          </a>
          
        </div>
      </div>
    </div>
  );
}