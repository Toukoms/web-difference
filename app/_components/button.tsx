export function Button({
  children,
  variant,
  className,
  ...props
}: {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const baseClasses =
    "py-2 px-4 rounded-md transition flex items-center gap-2 cursor-pointer font-bold";
  const primaryClasses =
    "bg-gradient-to-r from-primary to-cyan-500 text-black hover:from-cyan-800 hover:to-primary hover:text-white";
  const secondaryClasses =
    "bg-transparent text-primary border border-primary hover:bg-primary hover:text-black";

  const variantClasses =
    variant === "primary" ? primaryClasses : secondaryClasses;

  return (
    // TODO: merge className props properly (eg: using clsx or classnames library)
    <button
      className={`${baseClasses} ${variantClasses} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
