import { useEffect, useState } from "react";

export type NetworkState = {
	isOnline: boolean;
	effectiveType?: NavigatorConnectionEffectiveType;
	downlink?: number;
	isSlow: boolean;
};

type NavigatorConnectionEffectiveType = "slow-2g" | "2g" | "3g" | "4g";

export function useNetworkStatus(): NetworkState {
	const [state, setState] = useState<NetworkState>(() => ({
		isOnline: navigator.onLine,
		effectiveType: getConnection()?.effectiveType as NavigatorConnectionEffectiveType | undefined,
		downlink: getConnection()?.downlink,
		isSlow: isConnectionSlow(),
	}));

	useEffect(() => {
		const connection = getConnection();

		function handleOnline() {
			setState((prev) => ({ ...prev, isOnline: true }));
		}

		function handleOffline() {
			setState((prev) => ({ ...prev, isOnline: false }));
		}

		function handleConnectionChange() {
			setState({
				isOnline: navigator.onLine,
				effectiveType: connection?.effectiveType as NavigatorConnectionEffectiveType | undefined,
				downlink: connection?.downlink,
				isSlow: isConnectionSlow(),
			});
		}

		window.addEventListener("online", handleOnline);
		window.addEventListener("offline", handleOffline);
		connection?.addEventListener?.("change", handleConnectionChange);

		return () => {
			window.removeEventListener("online", handleOnline);
			window.removeEventListener("offline", handleOffline);
			connection?.removeEventListener?.("change", handleConnectionChange);
		};
	}, []);

	return state;
}

function getConnection(): any | undefined {
	const nav = navigator as any;
	return nav.connection || nav.mozConnection || nav.webkitConnection;
}

function isConnectionSlow(): boolean {
	const connection = getConnection();
	const effectiveType = connection?.effectiveType as NavigatorConnectionEffectiveType | undefined;
	const downlink = connection?.downlink as number | undefined;

	if (!navigator.onLine) return true;
	if (!connection) return false;
	if (effectiveType === "slow-2g" || effectiveType === "2g") return true;
	if (typeof downlink === "number" && downlink < 1) return true; // < 1 Mbps considered slow

	return false;
}


