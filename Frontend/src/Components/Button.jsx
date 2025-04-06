const Button = ({ children, ...props }) => (
    <button
      className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
      {...props}
    >
      {children}
    </button>
  );
  export default Button;
  