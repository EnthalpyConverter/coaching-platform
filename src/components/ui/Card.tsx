interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function Card({ children, className = '', onClick }: CardProps) {
  return (
    <div
      className={`rounded-xl border border-slate-700/50 bg-slate-800/50 p-4 backdrop-blur-sm ${onClick ? 'cursor-pointer transition-colors hover:border-slate-600 hover:bg-slate-800' : ''} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
