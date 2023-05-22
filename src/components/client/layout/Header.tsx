import { Database } from "@/types/supabase";
import supabase from "@/utils/supabase";
import { Menu, Transition } from "@headlessui/react";
import {
	UserIcon,UserCircleIcon,
	ArrowLeftOnRectangleIcon,
} from "@heroicons/react/24/outline";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment } from "react";

export default function Header() {
	const {push} = useRouter()
	const supabaseClient = useSupabaseClient<Database>();
	const logout = async () => {
		const {error} = await supabaseClient.auth.signOut();
		push('/')
	};
	return (
		<div className="w-full">
			<header className="border-gray-300 w-full border-b bg-white px-4 sm:px-6 py-4">
				<div className="flex flex-wrap items-center justify-between sm:flex-nowrap">
					<div className="h-10"></div>
					<div className="mr-auto">
						<h3 className="text-gray-900 text-xl font-medium leading-6">
							Auto Flow
						</h3>
						<p className="text-gray-500 mt-1 text-xs">Production flow logger</p>
					</div>
					<div className="flex-shrink-0">
						<div>
							<div className="flex gap-3">
								{/* <button
								type="button"
								className="inline-flex cursor-pointer items-center justify-center rounded-md font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-300 focus-visible:ring-offset-2 border border-gray-300 bg-white text-gray-600 hover:bg-gray-50 active:bg-gray-100 shadow-sm px-4 py-2 text-sm"
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
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
									></path>
								</svg>
								Export
							</button> 
								<button
									type="button"
									className="inline-flex cursor-pointer items-center justify-center rounded-md font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-300 focus-visible:ring-offset-2 border border-transparent text-white bg-primary-600 hover:bg-primary-700 active:bg-primary-800 shadow-sm px-4 py-2 text-sm"
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
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M12 4.5v15m7.5-7.5h-15"
										></path>
									</svg>
									New projet
								</button>*/}

								<Menu as="div" className="relative inline-block text-left">
									<div>
										<Menu.Button>
											<UserCircleIcon
												className="w-8 h-8 rounded-full text-gray-500"
											/>
										</Menu.Button>
									</div>
									<Transition
										as={Fragment}
										enter="transition ease-out duration-100"
										enterFrom="transform opacity-0 scale-95"
										enterTo="transform opacity-100 scale-100"
										leave="transition ease-in duration-75"
										leaveFrom="transform opacity-100 scale-100"
										leaveTo="transform opacity-0 scale-95"
									>
										<Menu.Items className="z-30 absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
											<div className="px-1 py-1 ">
												<Menu.Item>
													<Link href='/profile' className="group hover:bg-gray-100 flex w-full items-center rounded-md px-2 py-2 text-sm">
														<UserIcon className="mr-2 h-5 w-5 text-gray-500" />{" "}
														Profile
													</Link>
												</Menu.Item>
												<Menu.Item>
												<button onClick={()=>logout()} className="group hover:bg-gray-100 flex w-full items-center rounded-md px-2 py-2 text-sm">
														<ArrowLeftOnRectangleIcon className="mr-2 h-5 w-5 text-gray-500" />{" "}
														Sign out
													</button>
												</Menu.Item>
											</div>
										</Menu.Items>
									</Transition>
								</Menu>
							</div>
						</div>
					</div>
				</div>
			</header>
		</div>
	);
}
