import {Link as LinkIcon, Copyright} from "lucide-react";
import React from "react";

interface CopyRightCardProps {
    sourceURL: string[];
    sourceName: string[];
    license: string;
    licenseName: string;
}

export default function CopyRightCard({
                                          sourceURL,
                                          sourceName,
                                          license,
                                          licenseName,
                                      }: CopyRightCardProps) {
    return (
        <>
            <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                    <LinkIcon size={16} className="mt-0.5 flex-shrink-0"/>
                    <div className="flex flex-wrap gap-x-1">
                        {sourceName.map((name, index) => (
                            <span key={index}>
              <a
                  href={sourceURL[index] || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-primary"
              >
                {name}
              </a>
                                {index < sourceName.length - 1 && (
                                    <span className="mx-1 text-muted-foreground">|</span>
                                )}
            </span>
                        ))}
                    </div>
                </div>

                <div className="flex items-start gap-2">
                    <Copyright size={16} className="mt-0.5 flex-shrink-0"/>
                    <a
                        href={license}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-primary"
                    >
                        {licenseName}
                    </a>
                </div>
            </div>
            <br/>
        </>
    );
}