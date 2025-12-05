import { cn } from "@/lib/utils";
import { useNetworkStatus } from "@/hooks/use-network-status";

type Props = {
	className?: string;
	label?: string;
};

const LoadingIndicator = ({ className, label }: Props) => {
	const { isSlow, isOnline } = useNetworkStatus();

	// A more interesting "scanner" or "data pulse" animation
	// that fits the "auto id solution platform vibe".
	return (
		<div
			className={cn(
				"fixed inset-0 z-[100] flex flex-col items-center justify-center gap-4 bg-background/80 backdrop-blur-sm",
				className
			)}
		>
			<div className="relative flex h-16 w-16 items-center justify-center">
				{[...Array(4)].map((_, i) => (
					<div key={i} className={`absolute h-full w-full rounded-full border-2 border-primary/50 animate-ping`} style={{ animationDelay: `${i * 250}ms`, animationDuration: '2s' }} />
				))}
				<div className="h-4 w-4 rounded-full bg-primary" />
			</div>
			<div className="text-sm text-muted-foreground text-center">
				{label ?? "Loading..."}
				{isSlow && isOnline && (
					<span className="ml-2 text-xs opacity-80">Network seems slow</span>
				)}
				{!isOnline && (
					<span className="ml-2 text-xs opacity-80">You are offline</span>
				)}
			</div>
		</div>
	);
};

export default LoadingIndicator;
