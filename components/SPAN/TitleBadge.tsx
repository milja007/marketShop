interface TitleBadgeProps {
  children: React.ReactNode;
}

const TitleBadge: React.FC<TitleBadgeProps> = ({ children }) => {
  return (
    <span className="inline-block bg-gradient-to-r from-green-500 to-emerald-600 text-white px-3 py-1 rounded-lg shadow-md mx-1 align-middle">
      {children}
    </span>
  );
};

export default TitleBadge;
