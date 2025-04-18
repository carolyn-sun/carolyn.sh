import { ExternalLink } from "lucide-react";
import React from "react";
import ResponsiveImage from "./ResponsiveImageProps";

interface ProfileCardProps {
    avatarSrc: string;
    avatarAlt: string;
    name: string;
    description: string;
    link?: string;
}

export default function ProfileCard({ avatarSrc, avatarAlt, name, description, link }: ProfileCardProps) {
    const Wrapper: React.ElementType = link ? 'a' : 'div';

    return (
        <Wrapper
            href={link}
            target={link ? "_blank" : undefined}
            rel={link ? "noopener noreferrer" : undefined}
            className={`flex flex-wrap items-center gap-4 ${link ? 'cursor-pointer hover:bg-gray-100 p-3 rounded-md transition' : ''}`}
        >
            <div>
                <ResponsiveImage src={avatarSrc} alt={avatarAlt} width="96px" />
            </div>
            <div className="flex flex-col justify-center text-left">
                <h2 className="text-lg font-bold flex items-center gap-1">
                    {name}

                    {link && (
                        <ExternalLink/>
                    )}
                </h2>
                <p className="text-sm">{description}</p>
            </div>
        </Wrapper>
    );
}