import { BeakerIcon, ClockIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import Stepper from "./Stepper";
import { Database } from "@/types/supabase";
type Unit = Database['public']['Tables']['unit']['Row']

export default function FlowTable({data}:{data:Unit}) {
	const [cindex, setIndex] = useState(0);
	const flowTime = (flows:any) =>{
		if (flows.length == 0) return 0;
		let firstItem = new Date(flows.slice(0, 1).shift().created_at);
		let lastItem = new Date(flows[flows.length-1].created_at);
		let duration = Math.abs((firstItem.getTime() - lastItem.getTime())/(1000*60))
		return Math.floor(duration);
	}

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
										{data.title} Sessions
									</div>
									<span
										className="bg-purple-100 text-purple-800 rounded-full text-xs relative inline-flex items-center px-2 py-1 font-medium"
										role="status"
									>
										{data.session.length} Session
									</span>
								</div>
								<div className="mt-1 text-xs text-gray-500">
									Keep track of sessions
								</div>
							</div>
							<div>
								<div className="flex gap-3"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="bg-white">
				<div className="overflow-x-auto">
					<div className="inline-block min-w-full align-middle">
						<div className="relative overflow-hidden md:overflow-visible">
							<div
								id="accordion-flush"
								data-accordion="collapse"
								className="mx-6 bg-white text-gray-900"
								data-inactive-classes="text-gray-500 "
							>
								{data?.session?.map((session, index) => (
									<div
										className="border-b"
										key={session.id}
										onClick={() => setIndex(index)}
									>
										<h2 id="accordion-flush-heading-1">
											<button
												type="button"
												className="flex items-center justify-between w-full py-4 text-xs text-left border-gray-200"
												data-accordion-target="#accordion-flush-body-1"
												aria-expanded="true"
												aria-controls="accordion-flush-body-1"
											>
												<span className="flex items-center">
													<BeakerIcon className="h-4 w-4 text-gray-500 mr-2 shrink-0" />
													<code>{session.tag}</code>
													<span className="bg-gray-100 text-gray-800 text-xs font-medium mx-2 px-2.5 py-0.5 rounded">{session.flow.length} Flows on {new Date(session.created_at).toLocaleString("en-US")}</span>
													
													<span
														className="bg-gray-100 ml-2 font-sans text-gray-800 rounded-full text-xs relative inline-flex items-center px-2 py-1 font-medium"
														role="status"
													>
														<ClockIcon className="-ml-0.5 mr-1 text-gray-600 h-4 w-4"
														/> 
														{flowTime(session.flow)} Min
													</span>

													{/* <span
														className="bg-success-100 ml-2 font-sans text-success-800 rounded-full text-xs relative inline-flex items-center px-2 py-1 font-medium"
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
																fillRule="evenodd"
																d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
																clipRule="evenodd"
															></path>
														</svg>
														Success
													</span> */}
												</span>
												

												<svg
													data-accordion-icon
													className={`w-6 h-6 ${
														index === cindex ? "rotate-180" : ""
													} shrink-0`}
													fill="currentColor"
													viewBox="0 0 20 20"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														fillRule="evenodd"
														d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
														clipRule="evenodd"
													></path>
												</svg>
											</button>
										</h2>
										<div className={index !== cindex ? "hidden" : "mx-6 my-3"}>
											<Stepper flow={session.flow} />
										</div>
									</div>
								))}
							</div>

							{/* <table className="min-w-full divide-y divide-gray-200">
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
											Session
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
														strokeLinecap="round"
														strokeLinejoin="round"
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
														fillRule="evenodd"
														d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
														clipRule="evenodd"
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
																	strokeLinecap="round"
																	strokeLinejoin="round"
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
														strokeLinecap="round"
														strokeLinejoin="round"
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
														fillRule="evenodd"
														d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
														clipRule="evenodd"
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
																	strokeLinecap="round"
																	strokeLinejoin="round"
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
														strokeLinecap="round"
														strokeLinejoin="round"
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
														fillRule="evenodd"
														d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
														clipRule="evenodd"
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
																	strokeLinecap="round"
																	strokeLinejoin="round"
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
														strokeLinecap="round"
														strokeLinejoin="round"
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
														fillRule="evenodd"
														d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
														clipRule="evenodd"
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
																	strokeLinecap="round"
																	strokeLinejoin="round"
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
														strokeLinecap="round"
														strokeLinejoin="round"
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
														fillRule="evenodd"
														d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
														clipRule="evenodd"
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
																	strokeLinecap="round"
																	strokeLinejoin="round"
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
							</table> */}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
