import React from "react";

interface ResponsiveImageProps {
    src: string | { default: string }; // static path or imported
    alt: string;
    width?: string;
    caption?: string;
    className?: string;
}

export default function ResponsiveImage({
                                            src,
                                            alt,
                                            width = "60%",
                                            caption,
                                            className = "",
                                        }: ResponsiveImageProps) {
    const resolvedSrc = typeof src === "string" ? src : src.default;

    return (
        <figure className="flex flex-col items-center my-6 rounded-[0.4rem]">
            <img
                src={resolvedSrc}
                alt={alt}
                style={{width}}
                className={`rounded-lg shadow-sm ${className}`}
            />
            {caption && (
                <figcaption className="mt-2 text-sm text-muted-foreground text-center">
                    {caption}
                </figcaption>
            )}
        </figure>
    );
}