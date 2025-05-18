const InfoBlock = ({
  title,
  children,
}: {
  title: React.ReactNode;
  children: React.ReactNode;
}) => (
  <div className="mb-8 md:mb-10">
    <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4 sm:text-3xl leading-tight">
      {title}
    </h2>
    <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed text-base md:text-lg">
      {children}
    </div>
  </div>
);

export default InfoBlock;
