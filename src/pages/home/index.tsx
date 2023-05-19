import Link from 'next/link';
import ClientLayout from "@/components/client/layout/Index";
import { Database } from '@/types/supabase';
type Project = Database["public"]["Tables"]["project"]["Row"];

export default function Dashboard({projects}:{projects:Project[]}){
	 
	return (
		<ClientLayout>
			<div className="grid grid-cols-3 gap-6">
				{projects.map((data)=>
				<Link href={{
					pathname: '/project/[id]',
					query: { id: data.id }
				}} key={data.id}>
				<div className="bg-white shadow sm:rounded-md">
				<div className="bg-white px-4 py-5 sm:p-6 sm:rounded-t-md  sm:rounded-b-md">
					<div className="flex justify-between">
						<div className="mb-6 text-base font-medium">{data.name}</div>
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
								<span className="text-slate-500">{data.description}</span>
							</div>
						</div>
					</div>
				</div></div></Link> 
				)}
				</div>
		</ClientLayout>
	);
}
