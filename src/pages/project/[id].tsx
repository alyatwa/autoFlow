import ClientLayout from "@/components/client/layout/Index";
import Head from "next/head";

export default function Page() {
	return (
		<ClientLayout>
			<Head>
				<title>Project</title>
			</Head>
			<main>
				
				<div className="bg-white px-4 py-5 sm:p-6 sm:rounded-t-md  sm:rounded-b-md">
					<div className="flex justify-between">
						<div className="mb-6 text-base font-medium">Title</div>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth="1.5"
							stroke="currentColor"
							aria-hidden="true"
							className="h-5 text-slate-500"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
							></path>
						</svg>
					</div>
					<div className="flex justify-between">
						<div>
							<div className="flex items-center gap-1 text-sm">
								<span className="text-slate-500">Descriprtion</span>
							</div>
						</div>
					</div>
				</div>
			</main>
		</ClientLayout>
	);
}
