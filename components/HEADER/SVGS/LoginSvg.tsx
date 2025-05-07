const LoginSvg = () => {
  return (
    <button>
      <svg
        className="w-6 h-6 text-black hover:text-cactus"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 20c0-2.5 4-4 8-4s8 1.5 8 4"
        />
      </svg>
    </button>
  );
};

export default LoginSvg;
