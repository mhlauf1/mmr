// components/Banner.tsx
import Image from "next/image";
import { ReactNode } from "react";

interface BannerProps {
  imageSrc: string;
  alt: string;
  children?: ReactNode;
  logoSrc?: string;
  logoAlt?: string;
}

const Banner = ({
  imageSrc,
  alt,
  children,
  logoSrc = "/logo.png", // Default logo path
  logoAlt = "Logo",
}: BannerProps) => {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Main image */}
      <div className="w-full">
        <Image
          src={imageSrc}
          alt={alt}
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto"
          priority
          quality={100}
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20">
        {/* Content container */}
        <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 md:px-8">
          <div className="text-center text-white max-w-4xl">{children}</div>
        </div>

        {/* Logo in bottom right */}
        {logoSrc && (
          <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8">
            <Image
              src={logoSrc}
              alt={logoAlt}
              width={120}
              height={40}
              className="object-contain"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Banner;
