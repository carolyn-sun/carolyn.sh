import { ExternalLink } from "lucide-react";
import React from "react";
import ResponsiveImage from "./ResponsiveImageProps";

interface ProfileCardProps {
    avatarSrc: string;
    avatarAlt: string;
    name: string;
    title?: string;
    description?: string;
    link?: string;
}

export default function ProfileCard({ avatarSrc, avatarAlt, name, title, description, link }: ProfileCardProps) {
    const Wrapper: React.ElementType = link ? 'a' : 'div';

    return (
        <Wrapper
            data-slot='wrapper'
            href={link}
            target={link ? "_blank" : undefined}
            rel={link ? "noopener noreferrer" : undefined}
            className={`flex flex-wrap items-center gap-4 ${link ? 'cursor-pointer p-3 rounded-md transition' : ''}`}
        >
            <div>
                <ResponsiveImage src={avatarSrc} alt={avatarAlt} width="96px" />
            </div>
            <div className="flex flex-col justify-center text-left">
                <h3 className="text-lg font-bold flex items-center gap-1 !mb-2">
                    {name}
                    {link && (
                        <ExternalLink/>
                    )}
                </h3>
                <h4 className="text-sm !mb-0">{title}</h4>
                <p className="text-sm !mb-0">{description}</p>
            </div>
        </Wrapper>
    );
}