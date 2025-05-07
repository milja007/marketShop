import SearchSvg from "./SVGS/SearchSvg";

// interface SearchProps {
//   className?: string;
// }

const Search = () => {
  return (
    <div
      className={`
        relative flex items-center transition-all duration-300 ease-in-out
        w-full max-w-full mx-auto mt-2 md:mt-0
        md:w-10 md:focus-within:w-[60vw] min-[570px]:focus-within:w-[60vw]  min-[570px]:w-165
        lg:w-[32rem] lg:focus-within:w-[32rem]
        xl:w-[32rem] xl:max-w-full ml-6 mr-8   md:h-19
        
      `}
    >
      <input
        type="text"
        placeholder="Search..."
        className={`
          h-10 md:h-15  w-full border border-gray-300 rounded pl-4 pr-10 py-1
          focus:outline-none bg-white text-black z-10
          transition-all duration-300 ease-in-out xl:max-w-full xl:w-full
          md:opacity-0 md:focus:opacity-100 lg:max-w-full lg:w-full
          lg:opacity-100 mr-12 min-[570px]:ml-12  md:mr-15 md:ml-0 
        `}
      />

      <div
        className="
          pointer-events-none text-gray-500
          absolute right-2 top-1/2 transform -translate-y-1/2 z-20
          xl:static xl:transform-none xl:translate-y-0 xl:ml-[-2.5rem]
          md:flex md:items-center  md:h-22
        "
      >
        <SearchSvg />
      </div>
    </div>
  );
};

export default Search;
