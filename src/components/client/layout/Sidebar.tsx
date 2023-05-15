export default function Sidebar() {
	return (
		<>
			<div className="hidden md:fixed md:inset-y-0 md:z-10 md:flex md:w-64 md:flex-col">
				<div className="flex flex-1 flex-col border-r border-gray-300 bg-gray-200 min-h-0">
					<div className="h-0 flex-1 overflow-y-auto pt-5 pb-4 xl:pl-2">
						<div className="flex flex-shrink-0 items-center px-4">
							<div className="h-10"></div>
							<h1 className="h-7">
								<div>
									<a href="https://demo.craftable.pro/admin">
										<span className="sr-only">Craftable PRO</span>
                                        <img className="object-scale-down h-[43px] w-[183px]" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png"/>
									</a>
								</div>
							</h1>
						</div>
						<div className="px-4">
							<nav className="mt-5 space-y-1">
								<a
									className="bg-primary-100 text-gray-900 group/link flex items-center rounded-md px-2 py-2 text-sm font-medium transition-colors"
									href="https://demo.craftable.pro/admin/dashboard"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="1.5"
										stroke="currentColor"
										aria-hidden="true"
										className="text-primary-500 mr-3 h-6 w-6 flex-shrink-0 transition-colors"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
										></path>
									</svg>
									Dashboard
								</a>
								<div className="group/section" style={{position: 'relative'}}>
									<div className="-ml-5 mt-4 flex items-center text-gray-400">
										<button
											type="button"
											className="flex w-full items-center gap-0.5"
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
												className="w-5 opacity-0 transition-opacity group-hover/section:opacity-100"
											>
												<path
													fillRule="evenodd"
													d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
													clipRule="evenodd"
												></path>
											</svg>
											<p className="text-xs font-medium uppercase">Main</p>
										</button>
									</div>
									<div className="mt-2 space-y-1">
										<a
											className="text-gray-600 hover:bg-gray-200 hover:text-gray-900 group/link flex items-center rounded-md px-2 py-2 text-sm font-medium transition-colors"
											href="https://demo.craftable.pro/admin/articles"
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												stroke-width="1.5"
												stroke="currentColor"
												aria-hidden="true"
												className="text-gray-400 group-hover/link:text-gray-500 mr-3 h-6 w-6 flex-shrink-0 transition-colors"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
												></path>
											</svg>
											Projects
										</a>
										<a
											className="text-gray-600 hover:bg-gray-200 hover:text-gray-900 group/link flex items-center rounded-md px-2 py-2 text-sm font-medium transition-colors"
											href="https://demo.craftable.pro/admin/media"
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												stroke-width="1.5"
												stroke="currentColor"
												aria-hidden="true"
												className="text-gray-400 group-hover/link:text-gray-500 mr-3 h-6 w-6 flex-shrink-0 transition-colors"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
												></path>
											</svg>
											Settings
										</a>
									</div>
								</div>
								
							</nav>
						</div>
					</div>
					 
				</div>
			</div>
		</>
	);
}
