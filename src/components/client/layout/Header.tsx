export default function Header() {
	return (
		<div className="w-full">
			<header className="border-gray-300 w-full border-b bg-white px-4 sm:px-6 py-4">
				<div className="flex flex-wrap items-center justify-between sm:flex-nowrap">
					<div className="h-10"></div>
					<div className="mr-auto">
						<h3 className="text-gray-900 text-xl font-medium leading-6">
							Dashboard
						</h3>
						<p className="text-gray-500 mt-1 text-xs">Unit test</p>
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
							</button> */}
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
								</button>
								<img className="w-10 h-10 rounded-full" src="https://demo.craftable.pro/media/10/conversions/400-thumb.jpg"></img>
								<div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 ">
    <ul className="py-2 text-sm text-gray-700">
      <li>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100  ">Dashboard</a>
      </li>
       
      <li>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100  ">Sign out</a>
      </li>
    </ul>
</div>
							</div>
						</div>
					</div>
				</div>
			</header>
		</div>
	);
}
