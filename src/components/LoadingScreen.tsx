const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center overflow-hidden bg-[#050505] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(221,51,51,0.25),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(255,255,255,0.08),transparent_55%)]" />

      <div className="relative flex flex-col items-center space-y-10">
        <div className="relative flex h-40 w-40 items-center justify-center">
          <div className="absolute inset-0 rounded-full border border-white/10" />
          <div className="absolute inset-0 animate-spin-slow rounded-full border-t-4 border-[#DD3333] border-dashed opacity-70" />
          <div className="absolute inset-6 rounded-full border border-white/20" />
          <div className="absolute inset-6 animate-spin rounded-full border-t-4 border-white/40 border-dashed" style={{ animationDuration: "2.6s" }} />
          <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur">
            <img src="/HAWI LOGO.ico" alt="Hawi Software Logo" className="h-10 w-10 object-contain" />
          </div>
        </div>

        <div className="w-64 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
          <p className="text-xs uppercase tracking-[0.4em] text-white/70">Booting studio</p>
          <p className="mt-2 text-lg font-semibold">Crafting Launch Environment</p>
          <div className="mt-5 h-2 w-full overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-1/3 animate-loader-stripe bg-gradient-to-r from-transparent via-white to-transparent" />
          </div>
          <div className="mt-4 flex items-center justify-between text-xs text-white/60">
            <span>Loading experience</span>
            <span className="font-semibold text-white">Initializing...</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;

