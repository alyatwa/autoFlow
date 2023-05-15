export default function DashboardFilter() {
	return (
		<div className="flex justify-between">
			<div className="inline-flex rounded-md shadow-sm">
				<button
					type="button"
					className="inline-flex cursor-pointer items-center justify-center rounded-l-lg font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-300 focus-visible:ring-offset-2 border border-gray-300 bg-white text-gray-600 hover:bg-gray-50 active:bg-gray-100 shadow-sm px-4 py-2 text-sm"
				>
					12 months
				</button>
				<button
					type="button"
					className="inline-flex cursor-pointer items-center justify-center border-t border-b font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-300 focus-visible:ring-offset-2 border-gray-300 bg-white text-gray-600 hover:bg-gray-50 active:bg-gray-100 shadow-sm px-4 py-2 text-sm"
				>
					30 days
				</button>
				<button
					type="button"
					className="inline-flex cursor-pointer items-center justify-center font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-300 focus-visible:ring-offset-2 border border-gray-300 bg-white text-gray-600 hover:bg-gray-50 active:bg-gray-100 shadow-sm px-4 py-2 text-sm"
				>
					7 days
				</button>
				<button
					type="button"
					className="inline-flex cursor-pointer items-center justify-center rounded-r-md font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-300 focus-visible:ring-offset-2 border border-gray-300 bg-white text-gray-600 hover:bg-gray-50 active:bg-gray-100 shadow-sm px-4 py-2 text-sm"
				>
					24 hours
				</button>
			</div>
			<div className="flex gap-3">
				<div className="inline-flex rounded-md [&amp;>*]:-ml-px [&amp;>*]:!shadow-none [&amp;>*:not(:first-child)]:!rounded-l-none [&amp;>*:not(:last-child)]:!rounded-r-none shadow-sm">
					<div className="relative flex text-left">
						<div
							id="headlessui-menu-button-3"
							aria-haspopup="menu"
							aria-expanded="false"
							className="flex"
						>
							<button
								type="button"
								className="inline-flex cursor-pointer items-center justify-center rounded-md font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-300 focus-visible:ring-offset-2 border border-gray-300 bg-white text-gray-600 hover:bg-gray-50 active:bg-gray-100 shadow-sm px-3 py-1.5 text-sm"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									aria-hidden="true"
									className="-ml-1 mr-2 h-4 w-4 flex-shrink-0 stroke-2"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
									></path>
								</svg>
								Select dates
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									aria-hidden="true"
									className="ml-2 -mr-1 h-4 w-4 flex-shrink-0 stroke-2"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M19.5 8.25l-7.5 7.5-7.5-7.5"
									></path>
								</svg>
							</button>
						</div>
					</div>
				</div>
				<div className="inline-flex rounded-md [&amp;>*]:-ml-px [&amp;>*]:!shadow-none [&amp;>*:not(:first-child)]:!rounded-l-none [&amp;>*:not(:last-child)]:!rounded-r-none shadow-sm">
					<div className="relative flex text-left">
						<div
							id="headlessui-menu-button-5"
							aria-haspopup="menu"
							aria-expanded="false"
							className="flex"
						>
							<button
								type="button"
								className="inline-flex cursor-pointer items-center justify-center rounded-md font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-300 focus-visible:ring-offset-2 border border-gray-300 bg-white text-gray-600 hover:bg-gray-50 active:bg-gray-100 shadow-sm px-3 py-1.5 text-sm"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									aria-hidden="true"
									className="-ml-1 mr-2 h-4 w-4 flex-shrink-0 stroke-2"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"
									></path>
								</svg>
								Filters{" "}
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									aria-hidden="true"
									className="ml-2 -mr-1 h-4 w-4 flex-shrink-0 stroke-2"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M19.5 8.25l-7.5 7.5-7.5-7.5"
									></path>
								</svg>
							</button>
						</div>
					</div>
					<div style={{position: "relative"}}></div>
				</div>
			</div>
		</div>
	);
}
