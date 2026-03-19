import { cn } from "../../lib/utils";
import { ArrowRightIcon } from "lucide-react";

export const BentoGrid = ({ className, children }) => {
    return (
        <div
            className={cn(
                "grid w-full auto-rows-[22rem] grid-cols-1 md:grid-cols-2 gap-4",
                className,
            )}
        >
            {children}
        </div>
    );
};

export const BentoCard = ({
    name,
    className,
    background,
    Icon,
    description,
    href,
    cta,
    image,
    tags,
    status,
}) => {
    const getStatusColor = (status) => {
        switch (status?.toLowerCase()) {
            case "live":
                return "bg-green-500";
            case "coming soon":
                return "bg-yellow-500";
            case "completed":
                return "bg-blue-500";
            case "in progress":
                return "bg-orange-500";
            default:
                return "bg-gray-500";
        }
    };

    return (
        <div
            key={name}
            className={cn(
                "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl",
                // light styles
                "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
                // dark styles
                "transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
                className,
            )}
        >
            {/* Background Image with Overlay */}
            {image && (
                <div className="absolute inset-0 z-0 h-full w-full">
                    <img
                        src={image}
                        alt={name}
                        className="h-full w-full object-cover opacity-60 transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-50 to-transparent dark:from-neutral-900" />
                </div>
            )}

            <div className="relative z-10">{background}</div>

            {/* Status Indicator */}
            {status && (
                <div className="absolute top-4 right-4 z-20 flex items-center gap-2 px-3 py-1 rounded-full backdrop-blur-md bg-white/30 dark:bg-black/30 border border-white/20 dark:border-white/10 shadow-sm">
                    <div className={cn("w-2 h-2 rounded-full", getStatusColor(status))} />
                    <span className="text-xs font-medium text-neutral-800 dark:text-neutral-200">
                        {status}
                    </span>
                </div>
            )}

            {/* Tags */}
            {tags && tags.length > 0 && (
                <div className="absolute top-4 left-4 z-20 flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-2 py-1 text-xs font-medium rounded-full backdrop-blur-md bg-white/30 dark:bg-black/30 text-neutral-800 dark:text-neutral-200 border border-white/20 dark:border-white/10 shadow-sm"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            )}

            <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
                <Icon className="h-12 w-12 origin-left transform-gpu text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-75" />
                <h3 className="text-xl font-semibold text-neutral-700 dark:text-neutral-300">
                    {name}
                </h3>
                <p className="max-w-lg text-neutral-400">{description}</p>
            </div>

            <div
                className={cn(
                    "pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100",
                )}
            >
                <a href={href} className="pointer-events-auto cursor-pointer flex items-center gap-2 text-sm font-semibold text-neutral-700 dark:text-neutral-300 hover:text-primary transition-colors">
                    {cta}
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                </a>
            </div>
            <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-red-800/10" />
        </div>
    );
};
