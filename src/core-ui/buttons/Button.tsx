type Props = {
  title: string;
  type?: "button" | "submit";
  variant?: "primary" | "secondary";
  isLoading?: boolean;
  fullWidth?: boolean;
};

export default function Button({
  title,
  type = "button",
  variant = "primary",
  isLoading = false,
  fullWidth = true,
}: Props) {
  const base =
    "py-2.5 rounded-lg font-medium transition duration-200 flex items-center justify-center";

  const width = fullWidth ? "w-full" : "w-auto px-4";

  const styles = {
    primary:
      "bg-gradient-to-r from-purple-600 to-pink-500 text-white hover:opacity-90 shadow-md",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
  };

  return (
    <button
      type={type}
      disabled={isLoading}
      className={`${base} ${width} ${styles[variant]} ${
        isLoading ? "opacity-70 cursor-not-allowed" : ""
      }`}
    >
      {isLoading ? <span className="animate-pulse">Loading...</span> : title}
    </button>
  );
}
