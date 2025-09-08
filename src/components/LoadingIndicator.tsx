import { cn } from "@/lib/utils";
import { useNetworkStatus } from "@/hooks/use-network-status";

type Props = {
	className?: string;
	label?: string;
};

const LoadingIndicator = ({ className, label }: Props) => {
	const { isSlow, isOnline } = useNetworkStatus();

	return (
		<div className={cn("flex flex-col items-center justify-center gap-3 py-12", className)}>
			<div className="h-8 w-8 animate-spin rounded-full border-2 border-muted-foreground border-t-transparent" />
			<div className="text-sm text-muted-foreground">
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


