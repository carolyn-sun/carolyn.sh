import {BotMessageSquare} from "lucide-react";

interface AigcCardProps {
    lang?: string;
}

export default function AigcCard({lang}: AigcCardProps) {
    return (
        <>
            <p className="flex items-center gap-2 italic">
                <BotMessageSquare />
                部分内容由生成式人工智能提供。
            </p>
        </>
    );
}