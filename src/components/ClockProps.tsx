import React, { useEffect, useState } from "react";

interface ClockProps {
    timezone: string;
    label?: string;
}

export default function TimeZoneClock({ timezone, label}: ClockProps) {
    const [time, setTime] = useState<string>("");
    const [gmtOffset, setGmtOffset] = useState<string>("");

    useEffect(() => {
        const update = () => {
            const now = new Date();
            const localized = new Date(
                now.toLocaleString("en-US", { timeZone: timezone })
            );
            const date = localized.toLocaleDateString("iso")
            const hh = String(localized.getHours()).padStart(2, "0");
            const mm = String(localized.getMinutes()).padStart(2, "0");
            const ss = String(localized.getSeconds()).padStart(2, "0");
            setTime(`${date} ${hh}:${mm}:${ss}`);
        };

        const getGMTOffset = () => {
            const formatter = new Intl.DateTimeFormat("en-US", {
                timeZone: timezone,
                timeZoneName: "shortOffset",
            });
            const parts = formatter.formatToParts(new Date());
            const offset = parts.find((p) => p.type === "timeZoneName")?.value;
            setGmtOffset(offset ?? "");
        };

        update();
        getGMTOffset();

        const timer = setInterval(update, 1000);
        return () => clearInterval(timer);
    }, [timezone]);

    return (
        <p className="font-mono">
            {label && <span>{label}：</span>}
            <span>{time}</span>
            <span className="ml-2 text-sm text-gray-500">{gmtOffset}</span>
        </p>
    );
}