export default function UnitsTable() {
	return (
		<div className="bg-white shadow sm:rounded-md">
			<div className="border-b border-b-gray-200 px-4 py-3 text-gray-900 sm:rounded-t-md sm:px-6 sm:py-4 border border-transparent">
				<div className="relative flex items-center">
					<div className="h-[34px]"></div>
					<div className="flex w-full items-center justify-between gap-3">
						<div className="flex w-full items-center justify-between">
							<div>
								<div className="flex gap-3">
									<div className="text-lg font-semibold text-slate-900">
										Available Units
									</div>
									<span
										className="bg-purple-100 text-purple-800 rounded-full text-xs relative inline-flex items-center px-2 py-1 font-medium"
										role="status"
									>
										5 Units
									</span>
								</div>
								<div className="mt-1 text-xs text-gray-500">
									Keep track of units
								</div>
							</div>
							<div>
								<div className="flex gap-3">
									<button
										type="button"
										className="inline-flex cursor-pointer items-center justify-center rounded-md font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-300 focus-visible:ring-offset-2 border border-gray-300 bg-white text-gray-600 hover:bg-gray-50 active:bg-gray-100 shadow-sm px-4 py-2 text-xs"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth="1.5"
											stroke="currentColor"
											aria-hidden="true"
											className="-ml-1 mr-3 h-5 w-5 flex-shrink-0 stroke-2"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
											></path>
										</svg>
										Import
									</button>
									<button
										type="button"
										className="inline-flex cursor-pointer items-center justify-center rounded-md font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-300 focus-visible:ring-offset-2 border border-transparent text-white bg-primary-600 hover:bg-primary-700 active:bg-primary-800 shadow-sm px-4 py-2 text-xs"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth="1.5"
											stroke="currentColor"
											aria-hidden="true"
											className="-ml-1 mr-3 h-5 w-5 flex-shrink-0 stroke-2"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												d="M12 4.5v15m7.5-7.5h-15"
											></path>
										</svg>
										New Unit
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="bg-white">
				<div className="overflow-x-auto">
					<div className="inline-block min-w-full align-middle">
						<div className="relative overflow-hidden md:overflow-visible">
							<table className="min-w-full divide-y divide-gray-200">
								<thead className="bg-gray-50">
									<tr>
										<th
											scope="col"
											className="p-3 text-left text-xs font-semibold text-gray-500 first-of-type:pl-4 last-of-type:pr-4 first-of-type:sm:pl-6 last-of-type:sm:pr-6 w-14"
										>
											ID
										</th>
										<th
											scope="col"
											className="p-3 text-left text-xs font-semibold text-gray-500 first-of-type:pl-4 last-of-type:pr-4 first-of-type:sm:pl-6 last-of-type:sm:pr-6"
										>
											Unit
										</th>
										
										<th
											scope="col"
											className="p-3 text-left text-xs font-semibold text-gray-500 first-of-type:pl-4 last-of-type:pr-4 first-of-type:sm:pl-6 last-of-type:sm:pr-6"
										>
											Last Run
										</th>
										<th
											scope="col"
											className="p-3 text-left text-xs font-semibold text-gray-500 first-of-type:pl-4 last-of-type:pr-4 first-of-type:sm:pl-6 last-of-type:sm:pr-6"
										>
											Status
										</th>
										<th
											scope="col"
											className="p-3 text-left text-xs font-semibold text-gray-500 first-of-type:pl-4 last-of-type:pr-4 first-of-type:sm:pl-6 last-of-type:sm:pr-6"
										>
											<span className="sr-only">Actions</span>
										</th>
									</tr>
								</thead>
								<tbody className="divide-y divide-gray-200 bg-white">
									<tr className="">
										<td className="px-3 py-4 text-xs text-gray-500 first-of-type:pl-4 last-of-type:pr-4 first-of-type:sm:pl-6 last-of-type:sm:pr-6">
											1
										</td>
										<td className="px-3 py-4 text-xs text-gray-500 first-of-type:pl-4 last-of-type:pr-4 first-of-type:sm:pl-6 last-of-type:sm:pr-6">
											<div className="flex gap-5">
												<div>
													<div className="avatar relative flex flex-shrink-0 items-center justify-center overflow-hidden bg-gray-200 h-10 w-10 text-base rounded-full">
														<span
															className="absolute inset-0 flex h-full w-full items-center justify-center font-medium uppercase leading-none text-white"
															style={{backgroundColor: "rgb(175, 89, 2)"}}
														>
															CA
														</span>
													</div>
												</div>
												<div>
													<div className="text-xs font-medium text-slate-900">
														Catalog AI
													</div>
													<div className="text-xs text-slate-500">
														catalogai.app
													</div>
												</div>
											</div>
										</td>
										 
										<td className="px-3 py-4 text-xs text-gray-500 first-of-type:pl-4 last-of-type:pr-4 first-of-type:sm:pl-6 last-of-type:sm:pr-6">
											<div className="flex place-items-center">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													fill="none"
													viewBox="0 0 24 24"
													strokeWidth="1.5"
													stroke="currentColor"
													aria-hidden="true"
													className="h-5"
												>
													<path
														stroke-linecap="round"
														stroke-linejoin="round"
														d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
													></path>
												</svg>{" "}
												&nbsp; 21.12.2022 11:24
											</div>
										</td>
										<td className="px-3 py-4 text-xs text-gray-500 first-of-type:pl-4 last-of-type:pr-4 first-of-type:sm:pl-6 last-of-type:sm:pr-6">
											<span
												className="bg-warning-100 text-warning-800 rounded-full text-xs relative inline-flex items-center px-2 py-1 font-medium"
												role="status"
											>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 24 24"
													fill="currentColor"
													aria-hidden="true"
													className="-ml-0.5 mr-1 text-warning-400 h-4 w-4"
												>
													<path
														fill-rule="evenodd"
														d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
														clip-rule="evenodd"
													></path>
												</svg>
												Pending
											</span>
										</td>
										<td className="px-3 py-4 text-xs text-gray-500 first-of-type:pl-4 last-of-type:pr-4 first-of-type:sm:pl-6 last-of-type:sm:pr-6">
											<div className="flex justify-end">
												<div
													data-headlessui-state=""
													className="relative flex text-left"
													
												>
													<div
														
														id="headlessui-menu-button-7"
														aria-haspopup="menu"
														aria-expanded="false"
														data-headlessui-state=""
														className="flex"
													>
														<button
															type="button"
															className="inline-flex cursor-pointer items-center justify-center rounded-md font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-300 focus-visible:ring-offset-2 border border-gray-300 bg-white text-gray-600 hover:bg-gray-50 active:bg-gray-100 shadow-sm px-3 py-1.5 text-xs !px-2 !py-2"
														>
															<svg
																xmlns="http://www.w3.org/2000/svg"
																fill="none"
																viewBox="0 0 24 24"
																strokeWidth="1.5"
																stroke="currentColor"
																aria-hidden="true"
																className="w-4 h-4"
															>
																<path
																	stroke-linecap="round"
																	stroke-linejoin="round"
																	d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
																></path>
															</svg>
														</button>
													</div>
												</div>
											</div>
										</td>
									</tr>
									<tr className="">
										<td className="px-3 py-4 text-xs text-gray-500 first-of-type:pl-4 last-of-type:pr-4 first-of-type:sm:pl-6 last-of-type:sm:pr-6">
											2
										</td>
										<td className="px-3 py-4 text-xs text-gray-500 first-of-type:pl-4 last-of-type:pr-4 first-of-type:sm:pl-6 last-of-type:sm:pr-6">
											<div className="flex gap-5">
												<div>
													<div className="avatar relative flex flex-shrink-0 items-center justify-center overflow-hidden bg-gray-200 h-10 w-10 text-base rounded-full">
														<span
															className="absolute inset-0 flex h-full w-full items-center justify-center font-medium uppercase leading-none text-white"
															style={{backgroundColor: "rgb(83, 107, 139)"}}
														>
															S
														</span>
													</div>
												</div>
												<div>
													<div className="text-xs font-medium text-slate-900">
														Sherpa
													</div>
													<div className="text-xs text-slate-500">
														sherpa.com
													</div>
												</div>
											</div>
										</td>
										 
										<td className="px-3 py-4 text-xs text-gray-500 first-of-type:pl-4 last-of-type:pr-4 first-of-type:sm:pl-6 last-of-type:sm:pr-6">
											<div className="flex place-items-center">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													fill="none"
													viewBox="0 0 24 24"
													strokeWidth="1.5"
													stroke="currentColor"
													aria-hidden="true"
													className="h-5"
												>
													<path
														stroke-linecap="round"
														stroke-linejoin="round"
														d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
													></path>
												</svg>{" "}
												&nbsp; 21.12.2022 11:24
											</div>
										</td>
										<td className="px-3 py-4 text-xs text-gray-500 first-of-type:pl-4 last-of-type:pr-4 first-of-type:sm:pl-6 last-of-type:sm:pr-6">
											<span
												className="bg-success-100 text-success-800 rounded-full text-xs relative inline-flex items-center px-2 py-1 font-medium"
												role="status"
											>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 24 24"
													fill="currentColor"
													aria-hidden="true"
													className="-ml-0.5 mr-1 text-success-400 h-4 w-4"
												>
													<path
														fill-rule="evenodd"
														d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
														clip-rule="evenodd"
													></path>
												</svg>
												Active
											</span>
										</td>
										<td className="px-3 py-4 text-xs text-gray-500 first-of-type:pl-4 last-of-type:pr-4 first-of-type:sm:pl-6 last-of-type:sm:pr-6">
											<div className="flex justify-end">
												<div
													data-headlessui-state=""
													className="relative flex text-left"
												>
													<div
														id="headlessui-menu-button-9"
														aria-haspopup="menu"
														aria-expanded="false"
														data-headlessui-state=""
														className="flex"
													>
														<button
															type="button"
															className="inline-flex cursor-pointer items-center justify-center rounded-md font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-300 focus-visible:ring-offset-2 border border-gray-300 bg-white text-gray-600 hover:bg-gray-50 active:bg-gray-100 shadow-sm px-3 py-1.5 text-xs !px-2 !py-2"
														>
															<svg
																xmlns="http://www.w3.org/2000/svg"
																fill="none"
																viewBox="0 0 24 24"
																strokeWidth="1.5"
																stroke="currentColor"
																aria-hidden="true"
																className="w-4 h-4"
															>
																<path
																	stroke-linecap="round"
																	stroke-linejoin="round"
																	d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
																></path>
															</svg>
														</button>
													</div>
												</div>
											</div>
										</td>
									</tr>
									<tr className="">
										<td className="px-3 py-4 text-xs text-gray-500 first-of-type:pl-4 last-of-type:pr-4 first-of-type:sm:pl-6 last-of-type:sm:pr-6">
											3
										</td>
										<td className="px-3 py-4 text-xs text-gray-500 first-of-type:pl-4 last-of-type:pr-4 first-of-type:sm:pl-6 last-of-type:sm:pr-6">
											<div className="flex gap-5">
												<div>
													<div className="avatar relative flex flex-shrink-0 items-center justify-center overflow-hidden bg-gray-200 h-10 w-10 text-base rounded-full">
														<span
															className="absolute inset-0 flex h-full w-full items-center justify-center font-medium uppercase leading-none text-white"
															style={{backgroundColor: "rgb(131, 117, 227)"}}
														>
															C
														</span>
													</div>
												</div>
												<div>
													<div className="text-xs font-medium text-slate-900">
														Circles
													</div>
													<div className="text-xs text-slate-500">
														getcircles.com
													</div>
												</div>
											</div>
										</td>
										 
										<td className="px-3 py-4 text-xs text-gray-500 first-of-type:pl-4 last-of-type:pr-4 first-of-type:sm:pl-6 last-of-type:sm:pr-6">
											<div className="flex place-items-center">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													fill="none"
													viewBox="0 0 24 24"
													strokeWidth="1.5"
													stroke="currentColor"
													aria-hidden="true"
													className="h-5"
												>
													<path
														stroke-linecap="round"
														stroke-linejoin="round"
														d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
													></path>
												</svg>{" "}
												&nbsp; 21.12.2022 11:24
											</div>
										</td>
										<td className="px-3 py-4 text-xs text-gray-500 first-of-type:pl-4 last-of-type:pr-4 first-of-type:sm:pl-6 last-of-type:sm:pr-6">
											<span
												className="bg-gray-100 text-gray-800 rounded-full text-xs relative inline-flex items-center px-2 py-1 font-medium"
												role="status"
											>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 24 24"
													fill="currentColor"
													aria-hidden="true"
													className="-ml-0.5 mr-1 text-gray-400 h-4 w-4"
												>
													<path
														fill-rule="evenodd"
														d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
														clip-rule="evenodd"
													></path>
												</svg>
												Inactive
											</span>
										</td>
										<td className="px-3 py-4 text-xs text-gray-500 first-of-type:pl-4 last-of-type:pr-4 first-of-type:sm:pl-6 last-of-type:sm:pr-6">
											<div className="flex justify-end">
												<div
													data-headlessui-state=""
													className="relative flex text-left"
												>
													<div
														id="headlessui-menu-button-11"
														aria-haspopup="menu"
														aria-expanded="false"
														data-headlessui-state=""
														className="flex"
													>
														<button
															type="button"
															className="inline-flex cursor-pointer items-center justify-center rounded-md font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-300 focus-visible:ring-offset-2 border border-gray-300 bg-white text-gray-600 hover:bg-gray-50 active:bg-gray-100 shadow-sm px-3 py-1.5 text-xs !px-2 !py-2"
														>
															<svg
																xmlns="http://www.w3.org/2000/svg"
																fill="none"
																viewBox="0 0 24 24"
																strokeWidth="1.5"
																stroke="currentColor"
																aria-hidden="true"
																className="w-4 h-4"
															>
																<path
																	stroke-linecap="round"
																	stroke-linejoin="round"
																	d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
																></path>
															</svg>
														</button>
													</div>
												</div>
											</div>
										</td>
									</tr>
									<tr className="">
										<td className="px-3 py-4 text-xs text-gray-500 first-of-type:pl-4 last-of-type:pr-4 first-of-type:sm:pl-6 last-of-type:sm:pr-6">
											4
										</td>
										<td className="px-3 py-4 text-xs text-gray-500 first-of-type:pl-4 last-of-type:pr-4 first-of-type:sm:pl-6 last-of-type:sm:pr-6">
											<div className="flex gap-5">
												<div>
													<div className="avatar relative flex flex-shrink-0 items-center justify-center overflow-hidden bg-gray-200 h-10 w-10 text-base rounded-full">
														<span
															className="absolute inset-0 flex h-full w-full items-center justify-center font-medium uppercase leading-none text-white"
															style={{backgroundColor: "rgb(244, 102, 255)"}}
														>
															C
														</span>
													</div>
												</div>
												<div>
													<div className="text-xs font-medium text-slate-900">
														Coowork
													</div>
													<div className="text-xs text-slate-500">
														coowork.de
													</div>
												</div>
											</div>
										</td>
										
										<td className="px-3 py-4 text-xs text-gray-500 first-of-type:pl-4 last-of-type:pr-4 first-of-type:sm:pl-6 last-of-type:sm:pr-6">
											<div className="flex place-items-center">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													fill="none"
													viewBox="0 0 24 24"
													strokeWidth="1.5"
													stroke="currentColor"
													aria-hidden="true"
													className="h-5"
												>
													<path
														stroke-linecap="round"
														stroke-linejoin="round"
														d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
													></path>
												</svg>{" "}
												&nbsp; 21.12.2022 11:24
											</div>
										</td>
										<td className="px-3 py-4 text-xs text-gray-500 first-of-type:pl-4 last-of-type:pr-4 first-of-type:sm:pl-6 last-of-type:sm:pr-6">
											<span
												className="bg-success-100 text-success-800 rounded-full text-xs relative inline-flex items-center px-2 py-1 font-medium"
												role="status"
											>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 24 24"
													fill="currentColor"
													aria-hidden="true"
													className="-ml-0.5 mr-1 text-success-400 h-4 w-4"
												>
													<path
														fill-rule="evenodd"
														d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
														clip-rule="evenodd"
													></path>
												</svg>
												Active
											</span>
										</td>
										<td className="px-3 py-4 text-xs text-gray-500 first-of-type:pl-4 last-of-type:pr-4 first-of-type:sm:pl-6 last-of-type:sm:pr-6">
											<div className="flex justify-end">
												<div
													data-headlessui-state=""
													className="relative flex text-left"
													
												>
													<div
														
														id="headlessui-menu-button-13"
														aria-haspopup="menu"
														aria-expanded="false"
														data-headlessui-state=""
														className="flex"
													>
														<button
															type="button"
															className="inline-flex cursor-pointer items-center justify-center rounded-md font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-300 focus-visible:ring-offset-2 border border-gray-300 bg-white text-gray-600 hover:bg-gray-50 active:bg-gray-100 shadow-sm px-3 py-1.5 text-xs !px-2 !py-2"
														>
															<svg
																xmlns="http://www.w3.org/2000/svg"
																fill="none"
																viewBox="0 0 24 24"
																strokeWidth="1.5"
																stroke="currentColor"
																aria-hidden="true"
																className="w-4 h-4"
															>
																<path
																	stroke-linecap="round"
																	stroke-linejoin="round"
																	d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
																></path>
															</svg>
														</button>
													</div>
												</div>
											</div>
										</td>
									</tr>
									<tr className="">
										<td className="px-3 py-4 text-xs text-gray-500 first-of-type:pl-4 last-of-type:pr-4 first-of-type:sm:pl-6 last-of-type:sm:pr-6">
											5
										</td>
										<td className="px-3 py-4 text-xs text-gray-500 first-of-type:pl-4 last-of-type:pr-4 first-of-type:sm:pl-6 last-of-type:sm:pr-6">
											<div className="flex gap-5">
												<div>
													<div className="avatar relative flex flex-shrink-0 items-center justify-center overflow-hidden bg-gray-200 h-10 w-10 text-base rounded-full">
														<span
															className="absolute inset-0 flex h-full w-full items-center justify-center font-medium uppercase leading-none text-white"
															style={{backgroundColor: "rgb(3, 170, 160)"}}
														>
															R
														</span>
													</div>
												</div>
												<div>
													<div className="text-xs font-medium text-slate-900">
														Revolver
													</div>
													<div className="text-xs text-slate-500">
														revolver.io
													</div>
												</div>
											</div>
										</td>
										
										<td className="px-3 py-4 text-xs text-gray-500 first-of-type:pl-4 last-of-type:pr-4 first-of-type:sm:pl-6 last-of-type:sm:pr-6">
											<div className="flex place-items-center">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													fill="none"
													viewBox="0 0 24 24"
													strokeWidth="1.5"
													stroke="currentColor"
													aria-hidden="true"
													className="h-5"
												>
													<path
														stroke-linecap="round"
														stroke-linejoin="round"
														d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
													></path>
												</svg>{" "}
												&nbsp; 21.12.2022 11:24
											</div>
										</td>
										<td className="px-3 py-4 text-xs text-gray-500 first-of-type:pl-4 last-of-type:pr-4 first-of-type:sm:pl-6 last-of-type:sm:pr-6">
											<span
												className="bg-success-100 text-success-800 rounded-full text-xs relative inline-flex items-center px-2 py-1 font-medium"
												role="status"
											>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 24 24"
													fill="currentColor"
													aria-hidden="true"
													className="-ml-0.5 mr-1 text-success-400 h-4 w-4"
												>
													<path
														fill-rule="evenodd"
														d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
														clip-rule="evenodd"
													></path>
												</svg>
												Active
											</span>
										</td>
										<td className="px-3 py-4 text-xs text-gray-500 first-of-type:pl-4 last-of-type:pr-4 first-of-type:sm:pl-6 last-of-type:sm:pr-6">
											<div className="flex justify-end">
												<div
													data-headlessui-state=""
													className="relative flex text-left"
													
												>
													<div
														
														id="headlessui-menu-button-15"
														aria-haspopup="menu"
														aria-expanded="false"
														data-headlessui-state=""
														className="flex"
													>
														<button
															type="button"
															className="inline-flex cursor-pointer items-center justify-center rounded-md font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-300 focus-visible:ring-offset-2 border border-gray-300 bg-white text-gray-600 hover:bg-gray-50 active:bg-gray-100 shadow-sm px-3 py-1.5 text-xs !px-2 !py-2"
														>
															<svg
																xmlns="http://www.w3.org/2000/svg"
																fill="none"
																viewBox="0 0 24 24"
																strokeWidth="1.5"
																stroke="currentColor"
																aria-hidden="true"
																className="w-4 h-4"
															>
																<path
																	stroke-linecap="round"
																	stroke-linejoin="round"
																	d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
																></path>
															</svg>
														</button>
													</div>
												</div>
											</div>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
