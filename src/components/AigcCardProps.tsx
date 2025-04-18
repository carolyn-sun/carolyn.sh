import {BotMessageSquare} from "lucide-react";

interface AigcCardProps {
    lang?: string;
}

export default function AigcCard({lang = "zh"}: AigcCardProps) {
    let message = "";
    if (lang === "en") {
        message = "Some content is provided by generative AI.";
    } else if (lang === "zh") {
        message = "部分内容由生成式人工智能提供。";
    }

    return (
        <>
            <p className="flex items-center gap-2">
                <BotMessageSquare/>
                {message}
            </p>
        </>
    );
}