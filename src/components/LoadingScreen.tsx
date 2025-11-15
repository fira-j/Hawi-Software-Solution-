const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10 animate-pulse" />
      
      {/* Loading content */}
      <div className="relative z-10 flex flex-col items-center space-y-8">
        {/* Logo with pulse animation */}
        <div className="relative">
          {/* Glow effect */}
          <div className="absolute inset-0 blur-2xl bg-primary/30 animate-glow-pulse rounded-full" />
          
          {/* Logo */}
          <div className="relative w-32 h-32 flex items-center justify-center animate-bounce">
            <img 
              src="/HAWI LOGO.ico" 
              alt="Hawi Software Logo" 
              className="w-full h-full object-contain drop-shadow-2xl"
            />
          </div>
        </div>
        
        {/* Loading text */}
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold text-gradient">Hawi Software</h2>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;

