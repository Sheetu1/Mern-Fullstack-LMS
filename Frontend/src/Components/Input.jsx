const Input = ({ label, type = "text", ...props }) => (
    <div className="mb-4">
      <label className="block mb-1 text-sm font-medium">{label}</label>
      <input
        type={type}
        className="w-full px-4 py-2 border rounded-lg bg-white text-black dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        {...props}
      />
    </div>
  );
  export default Input;
  