import Link from "next/link";
const HomeSvg = () => {
  return (
    <button>
      <Link href={"/"}>
        <svg
          className="ml-10 w-8 h-8 text-white hover:text-zinc-200 font-semibold  
                         border-b-[3px] border-transparent hover:border-secondary dark:hover:border-white   
                         flex-shrink-0 transition-all duration-200 cursor-default"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <path d="M3 13L12 4L21 13" />
          <path d="M4 10V20H20V10" />
          <rect x="10" y="14" width="4" height="6" rx="0.5" />
        </svg>
      </Link>
    </button>
  );
};

export default HomeSvg;
