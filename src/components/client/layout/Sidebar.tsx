import { Cog6ToothIcon,ChevronDownIcon, DocumentTextIcon, HomeIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

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
									<a href="#">
										<span className="sr-only">Auto Flow</span>
                                        <img className="object-scale-down h-[43px] w-[183px]" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png"/>
									</a>
								</div>
							</h1>
						</div>
						<div className="px-4">
							<nav className="mt-5 space-y-1">
								<Link
									className="bg-primary-100 text-gray-900 group/link flex items-center rounded-md px-2 py-2 text-sm font-medium transition-colors"
									href="/dashboard"
								>
									<HomeIcon className="text-primary-500 mr-3 h-6 w-6 flex-shrink-0 transition-colors"
									/>
									Dashboard
								</Link>
								<div className="group/section" style={{position: 'relative'}}>
									<div className="-ml-5 mt-4 flex items-center text-gray-400">
										<button
											type="button"
											className="flex w-full items-center gap-0.5"
										>
											<ChevronDownIcon className="w-5 opacity-0 transition-opacity group-hover/section:opacity-100"
											/>
											<p className="text-xs font-medium uppercase">Main</p>
										</button>
									</div>
									<div className="mt-2 space-y-1">
										<Link
											className="text-gray-600 hover:bg-gray-200 hover:text-gray-900 group/link flex items-center rounded-md px-2 py-2 text-sm font-medium transition-colors"
											href="/doc"
										>
											<DocumentTextIcon className="text-gray-400 group-hover/link:text-gray-500 mr-3 h-6 w-6 flex-shrink-0 transition-colors"
											/>
											Documentation
										</Link>
										<Link
											className="text-gray-600 hover:bg-gray-200 hover:text-gray-900 group/link flex items-center rounded-md px-2 py-2 text-sm font-medium transition-colors"
											href="/settings"
										>
											<Cog6ToothIcon className="text-gray-400 group-hover/link:text-gray-500 mr-3 h-6 w-6 flex-shrink-0 transition-colors"
											/>
											Settings
										</Link>
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
