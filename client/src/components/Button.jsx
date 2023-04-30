const Button = ({ children, ...other }) => {
  return (
    <button
      className={`bg-[#234d6f] text-white p-2 px-4 rounded font-semibold text-lg`}
      {...other}
    >
      {children}
    </button>
  );
};

export default Button;
