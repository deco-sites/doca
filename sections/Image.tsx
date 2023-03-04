import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import { Picture, Source } from "deco-sites/std/components/Picture.tsx";

export interface Image {
  /** @description desktop otimized image */
  desktop: LiveImage;
  /** @description mobile otimized image */
  mobile: LiveImage;
  /** @description when user clicks on the image, go to this link */
  href: string;
  /** @description Image's alt text */
  alt: string;
}

export interface Props {
  image?: Image;
  preload?: boolean;
}

export default function Image({ image, preload }: Props) {
  if (!image) return null;

  const { desktop, mobile, alt } = image;

  return (
    <Picture class="w-screen block" preload={preload}>
      <Source
        media="(max-width: 767px)"
        fetchPriority={preload ? "high" : "auto"}
        src={mobile}
        width={360}
        height={360}
      />
      <Source
        media="(min-width: 768px)"
        fetchPriority={preload ? "high" : "auto"}
        src={desktop}
        width={1366}
        height={1366}
      />
      <img
        class="object-cover w-full"
        loading={preload ? "eager" : "lazy"}
        src={desktop}
        alt={alt}
      />
    </Picture>
  );
}
