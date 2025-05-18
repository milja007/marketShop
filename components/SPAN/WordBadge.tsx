const WordBadge = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="bg-black text-white px-2 py-0.5 rounded-md shadow-sm mx-0.5 font-medium align-baseline">
      {children}
    </span>
  );
};

export default WordBadge;
