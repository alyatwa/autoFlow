import Link from "next/link";
import ClientLayout from "@/components/client/layout/Index";
import { Database } from "@/types/supabase";
import { EllipsisVerticalIcon, PlusIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import GDialog from "@/components/common/Dialog";
import { useFormik } from "formik";
import supabase from "@/utils/supabase";
import { useMutation } from "@tanstack/react-query";
type Project = Database["public"]["Tables"]["project"]["Row"];

export default function Dashboard({
	projects: projectsData,
}: {
	projects: Project[];
}) {
	let [projects, setProjects] = useState<any>(projectsData);
	let [isOpen, setIsOpen] = useState(false);
	const toggleDialog = () => {
		setIsOpen(!isOpen);
	};
	const { mutate, isLoading } = useMutation(
		async (newProject: Project): Promise<any> => {
			await supabase.from("project").insert([newProject]);
		},
		{
			onSuccess: async () => {
				const session = await supabase.auth.getSession();
				const { data: newProjects } = await supabase
					.from("project")
					.select("*")
					.eq("userId", session.data.session?.user.id)
					.order("created_at", { ascending: false });
				setProjects(newProjects);
				toggleDialog();
			},
			onError: (e) => {
				console.log(e);
			},
		}
	);
	async function onSubmit(values: any) {
		mutate(values);
	}

	const NewProject = () => {
		const formik = useFormik({
			initialValues: {
				name: "",
				description: "",
			},
			onSubmit,
		});
		return (
			<form className="space-y-6" method="post" onSubmit={formik.handleSubmit}>
				<div className="flex gap-1 flex-col" style={{ position: "relative" }}>
					<div className="flex justify-between">
						<label
							htmlFor="name"
							className="flex items-center justify-between gap-2 text-sm font-medium text-gray-700"
						>
							{" "}
							Name
						</label>
					</div>
					<div className="flex flex-col gap-2">
						<div className="relative flex rounded-md shadow-sm">
							<div className="relative w-full">
								<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"></div>

								<input
									type="text"
									{...formik.getFieldProps("name")}
									name="name"
									id="name"
									value={formik.values.name}
									className="form-input focus:ring-1 border border-gray-300 focus:border-primary-500 focus:ring-primary-500 block w-full rounded-md text-gray-800 focus:outline-none sm:text-sm px-3 py-2"
									placeholder=""
								/>
							</div>
						</div>
					</div>
					<div className="flex justify-between">
						<label
							htmlFor="description"
							className="flex items-center justify-between gap-2 text-sm font-medium text-gray-700"
						>
							{" "}
							Description
						</label>
					</div>
					<div className="flex flex-col gap-2">
						<div className="relative flex rounded-md shadow-sm">
							<div className="relative w-full">
								<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"></div>

								<input
									type="text"
									{...formik.getFieldProps("description")}
									value={formik.values.description}
									name="description"
									id="description"
									className="form-input focus:ring-1 border border-gray-300 focus:border-primary-500 focus:ring-primary-500 block w-full rounded-md text-gray-800 focus:outline-none sm:text-sm px-3 py-2"
									placeholder=""
								/>
							</div>
						</div>
					</div>
				</div>

				<div className="mt-4">
					<button
						disabled={isLoading}
						type="submit"
						className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
					>
						Save
					</button>
					<button
						onClick={() => toggleDialog()}
						type="button"
						className="inline-flex justify-center rounded-md border border-transparent bg-gray-100 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2"
					>
						Cancel
					</button>
				</div>
			</form>
		);
	};
	return (
		<ClientLayout>
			<GDialog isOpen={isOpen} closeDialog={() => toggleDialog()}>
				<NewProject />
			</GDialog>
			<div className="grid grid-cols-3 gap-6">
				<div
					onClick={() => toggleDialog()}
					className="bg-white cursor-pointer shadow sm:rounded-md flex justify-center items-center"
				>
					<div className="bg-white flex flex-col justify-center items-center px-4 py-5 sm:p-6 sm:rounded-t-md  sm:rounded-b-md">
						<PlusIcon className="text-primary-600 w-7 h-7" />
						<span className="text-primary-600 font-medium">Add project</span>
					</div>
				</div>
				{projects.map((data: Project) => (
					<Link
						href={{
							pathname: "/project/[id]",
							query: { id: data.id },
						}}
						key={data.id}
					>
						<div className="bg-white shadow sm:rounded-md">
							<div className="bg-white px-4 py-5 sm:p-6 sm:rounded-t-md  sm:rounded-b-md">
								<div className="flex justify-between">
									<div className="mb-6 text-base font-medium">{data.name}</div>
									<EllipsisVerticalIcon className="h-5 text-slate-500" />
								</div>
								<div className="flex justify-between">
									<div>
										<div className="flex items-center gap-1 text-sm">
											<span className="text-slate-500">{data.description}</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</Link>
				))}
			</div>
		</ClientLayout>
	);
}
