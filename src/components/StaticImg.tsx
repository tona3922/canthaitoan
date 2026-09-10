import React from "react";
import type { StaticImage } from "@/asset/staticImages";

type Props = {
  /** An entry from `staticImages` (see src/asset/staticImages.ts). */
  image: StaticImage;
  alt: string;
  /** Responsive `sizes`. Defaults to the image's intrinsic width. */
  sizes?: string;
  className?: string;
  style?: React.CSSProperties;
  /** LCP hint: load eagerly with high fetch priority. */
  priority?: boolean;
  /** Absolutely fill the nearest positioned ancestor. */
  fill?: boolean;
};

/**
 * Renders a build-time-optimized local asset as a plain <img srcSet>.
 * No runtime Next.js image optimizer — the browser just fetches a
 * cache-forever static WebP from /public/img. The tiny blur data URI is
 * painted as a background until the real image decodes.
 */
export default function StaticImg({
  image,
  alt,
  sizes,
  className,
  style,
  priority = false,
  fill = false,
}: Props) {
  const blur: React.CSSProperties = {
    backgroundImage: `url("${image.blurDataURL}")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    // Deliberate: these assets are pre-optimized at build time, so next/image's
    // runtime optimizer would only add cost/latency. See scripts/optimize-images.mjs.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={image.src}
      srcSet={image.srcSet}
      sizes={sizes ?? `${image.width}px`}
      alt={alt}
      width={image.width}
      height={image.height}
      decoding="async"
      loading={priority ? "eager" : "lazy"}
      // lowercase: passed straight through to the DOM on React 18
      {...({ fetchPriority: priority ? "high" : undefined } as Record<
        string,
        string | undefined
      >)}
      className={className}
      style={
        fill
          ? {
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              ...blur,
              ...style,
            }
          : { ...blur, ...style }
      }
      onLoad={(e) => {
        e.currentTarget.style.backgroundImage = "none";
      }}
    />
  );
}
