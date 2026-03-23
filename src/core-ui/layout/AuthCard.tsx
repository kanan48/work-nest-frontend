type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function AuthCard({ children, className = "" }: Props) {
  return (
    <div
      className={`
        relative w-full max-w-md 
        bg-white/10 backdrop-blur-xl 
        p-8 rounded-3xl 
        shadow-[0_20px_60px_rgba(0,0,0,0.3)]
        border border-white/20
        ${className}
      `}>
      <div className="absolute inset-0 rounded-3xl bg-white/5 pointer-events-none"></div>

      <div className="relative z-10">{children}</div>
    </div>
  );
}
