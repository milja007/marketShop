const InfoBlock = ({
  title,
  children,
}: {
  title: React.ReactNode;
  children: React.ReactNode;
}) => (
  <div className="mb-8 md:mb-10">
    <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4 sm:text-3xl">
      {" "}
      {/* Made title font-bold */}
      {title} {/* Title is now ReactNode */}
    </h2>
    <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed text-base md:text-lg">
      {children}
    </div>
  </div>
);
