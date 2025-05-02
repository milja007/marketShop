import SearchSvg from "./SVGS/SearchSvg";

// interface SearchProps {
//   className?: string;
// }

const Search = () => {
  return (
    <div
      className={`
        relative flex items-center transition-all duration-300 ease-in-out
        w-full max-w-sm mx-auto mt-2 md:mt-0
        md:w-10 md:focus-within:w-[60vw]
        lg:w-[32rem] lg:focus-within:w-[32rem]
        xl:w-[32rem] xl:max-w-full
        
      `}
    >
      <input
        type="text"
        placeholder="Search..."
        className={`
          h-10 w-full border border-gray-300 rounded pl-4 pr-10 py-1
          focus:outline-none bg-white text-black z-10
          transition-all duration-300 ease-in-out
          md:opacity-0 md:focus:opacity-100
          lg:opacity-100
        `}
      />

      <div
        className="
          pointer-events-none text-gray-500
          absolute right-2 top-1/2 transform -translate-y-1/2 z-20
          xl:static xl:transform-none xl:translate-y-0 xl:ml-[-2.5rem]
          flex items-center
        "
      >
        <SearchSvg />
      </div>
    </div>
  );
};

export default Search;
