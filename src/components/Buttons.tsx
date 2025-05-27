export const Button = ({ text }: { text: string }) => (
  <button className="text-[#202023] bg-[#68C9FB] font-semibold cursor-pointer tracking-[-.25px] px-6 py-3 rounded-full gap-2  flex items-center group">
    {text}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  </button>
);

export const ButtonWhite = ({ text }: { text: string }) => (
  <button className="text-[#2C384D] bg-white font-semibold px-6 py-3 cursor-pointer tracking-[-.25px] rounded-full gap-2  flex items-center group">
    {text}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  </button>
);
