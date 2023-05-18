import Link from 'next/link';
import ClientLayout from "@/components/client/layout/Index";
import { useState, useEffect } from 'react'
import { Database } from '../../types/supabase'
import {
	useQuery
  } from '@tanstack/react-query'
import supabase from "../../utils/supabase";



export default function Dashboard(){
	const { isLoading, isError, data, error } = useQuery({
		queryKey: ['projects'],
		queryFn: async () => {
			const { data, error } = await supabase
			  .from("project")
			  .select()
	  
			if (error) {
			  throw new Error(error.message);
			}
	  console.log(data)
			return data;
		  },
	  })
  
	return (
		<ClientLayout>
			<div className="grid grid-cols-3 gap-6">
				{data && data!.map((data)=>
				<Link href={`/project/${data.id}`}>
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
