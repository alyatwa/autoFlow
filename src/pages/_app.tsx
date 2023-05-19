import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider, Session } from "@supabase/auth-helpers-react";

const queryClient = new QueryClient();

export default function App({
	Component,
	pageProps,
}: AppProps<{
	initialSession: Session;
}>) {
	const [supabaseClient] = useState(() => createBrowserSupabaseClient());
	const [render, setRender] = useState(false);
	useEffect(() => setRender(true), []);
	return render ? (
		<SessionContextProvider
			supabaseClient={supabaseClient}
			initialSession={pageProps.initialSession}
		>
			<QueryClientProvider client={queryClient}>
				<Component {...pageProps} />{" "}
			</QueryClientProvider>{" "}
		</SessionContextProvider>
	) : null;
}
