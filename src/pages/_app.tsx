import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
	const [supabase] = useState(() => createBrowserSupabaseClient());

	const [render, setRender] = useState(false);
	useEffect(() => setRender(true), []);
	return render ? (
		<SessionContextProvider
			supabaseClient={supabase}
			initialSession={pageProps.initialSession}
		>
			<QueryClientProvider client={queryClient}>
				<Component {...pageProps} />{" "}
			</QueryClientProvider>
		</SessionContextProvider>
	) : null;
}
