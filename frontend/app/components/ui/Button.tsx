interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export default function Button({ variant = "primary", ...props }: ButtonProps) {
  const base = "px-4 py-2 rounded font-semibold";
  const style =
    variant === "primary" ? "bg-slate-800 text-white" : "border border-slate-800 text-slate-800";
  return <button className={`${base} ${style}`} {...props}></button>;
}
