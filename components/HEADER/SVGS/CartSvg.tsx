const CartSvg = () => {
  return (
    <button>
      <svg
        className="w-6 h-6 text-black hover:text-whitee"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 3h2l.4 2M7 13h10l4-8H5.4
        M7 13l-1.3 5h13.6M7 13L5.4 5
        M9 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2
        zm10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
        />
      </svg>
    </button>
  );
};

export default CartSvg;
