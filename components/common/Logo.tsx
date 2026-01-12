import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

interface Props {
  className?: string;
  variant?: "default" | "sm";
}

const Logo = ({ className, variant = "default" }: Props) => {
  const logoSize = variant === "sm" ? { width: 80, height: 80 } : { width: 100, height: 100 };
  const logoHeight = variant === "sm" ? "h-8 sm:h-10 md:h-12" : "h-10 sm:h-12 md:h-14 lg:h-16";

  return (
    <Link href="/" className={cn("group hoverEffect", className)}>
      <Image
        src="/logo.png"
        alt="Logo"
        width={logoSize.width}
        height={logoSize.height}
        className={`object-contain ${logoHeight} w-auto cursor-pointer hover:scale-105 transition-transform duration-200 bg-transparent`}
        priority
      />
    </Link>
  );
};

export default Logo;
