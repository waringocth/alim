export default function Loading() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center relative z-50">
      <div className="relative flex items-center justify-center">
        {/* Spinner */}
        <div className="w-20 h-20 border-4 border-[#f4f7fb] border-t-[#e87722] rounded-full animate-spin"></div>
        {/* Inner Text */}
        <div className="absolute text-[#1a2d5a] font-extrabold text-sm tracking-widest">
          DHS
        </div>
      </div>
      <p className="mt-6 text-[#1a2d5a] font-semibold text-sm tracking-widest uppercase animate-pulse">
        Yükleniyor...
      </p>
    </div>
  );
}
