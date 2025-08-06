interface DotIndicatorProps {
  total: number;
  currentIndex: number;
  onDotClick: (index: number) => void;
  className?: string;
}

export default function DotIndicator({ 
  total, 
  currentIndex, 
  onDotClick, 
  className = "" 
}: DotIndicatorProps) {
  return (
    <div className={`flex gap-2 ${className}`}>
      {Array.from({ length: total }).map((_, index) => (
        <button
          key={index}
          onClick={() => onDotClick(index)}
          className={`w-4 h-4 rounded-sm transition-all cursor-pointer ${
            index === currentIndex
              ? "bg-secondary w-8"
              : "bg-white/50 hover:bg-white/75"
          }`}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
}