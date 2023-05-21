import Link from "next/link";
import ClientLayout from "@/components/client/layout/Index";
import { Database } from "@/types/supabase";
import {
	ClipboardIcon,
	EllipsisVerticalIcon,
	PlusIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import GDialog from "@/components/common/Dialog";
import { useFormik } from "formik";
import { useMutation } from "@tanstack/react-query";
import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { GetServerSideProps } from "next";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { Dialog } from "@headlessui/react";
import toast, { Toaster } from "react-hot-toast";
type Project = Database["public"]["Tables"]["project"]["Row"];

export default function Dashboard(props: any) {
	const supabaseClient = useSupabaseClient<Database>();
	const projectsData: Project[] = props.Projects;
	let [projects, setProjects] = useState<any>(projectsData);
	let [updateProject, setUpdateProject] = useState<any>(null);
	let [isOpen, setIsOpen] = useState(false);
	const toggleDialog = () => {
		setIsOpen(!isOpen);
	};
	const handleUpdate = (data: Project) => {
		setUpdateProject(data);
		toggleDialog();
	};
	const handleClose = (): void => {
		toggleDialog();
		setTimeout(() => setUpdateProject(null), 500);
	};
	const { mutate: createProject, isLoading } = useMutation(
		async (newProject: Project): Promise<any> => {
			await supabaseClient.from("project").insert([newProject]);
		},
		{
			onSuccess: async () => {
				const session = await supabaseClient.auth.getSession();
				const { data: newProjects } = await supabaseClient
					.from("project")
					.select("*")
					.eq("userId", session.data.session?.user.id)
					.order("created_at", { ascending: false });
				setProjects(newProjects);
				handleClose();
			},
			onError: (e) => {
				console.log(e);
			},
		}
	);
	const { mutate: mutateProject, isLoading: isUpdating } = useMutation(
		async (updateData: Project): Promise<any> => {
			await supabaseClient
				.from("project")
				.update(updateData)
				.eq("id", updateProject.id);
		},
		{
			onSuccess: async () => {
				const session = await supabaseClient.auth.getSession();
				const { data: updatedProjects } = await supabaseClient
					.from("project")
					.select("*")
					.eq("userId", session.data.session?.user.id)
					.order("created_at", { ascending: false });
				setProjects(updatedProjects);
				handleClose();
			},
			onError: (e) => {
				console.log(e);
			},
		}
	);
	const { mutate: removeProject, isLoading: isRemoving } = useMutation(
		async (): Promise<any> => {
			await supabaseClient.from("project").delete().eq("id", updateProject.id);
		},
		{
			onSuccess: async () => {
				const session = await supabaseClient.auth.getSession();
				const { data: updatedProjects } = await supabaseClient
					.from("project")
					.select("*")
					.eq("userId", session.data.session?.user.id)
					.order("created_at", { ascending: false });
				setProjects(updatedProjects);
				handleClose();
			},
			onError: (e) => {
				console.log(e);
			},
		}
	);
	async function onSubmit(values: any) {
		updateProject ? mutateProject(values) : createProject(values);
	}
	const ProjectForm = () => {
		const formik = useFormik({
			initialValues: {
				name: updateProject ? updateProject.name : "",
				description: updateProject ? updateProject.description : "",
			},
			onSubmit,
		});
		return (
			<>
				<Dialog.Title
					as="h3"
					className="text-lg font-medium mb-3 leading-6 text-gray-900"
				>
					{updateProject ? "Update Project" : "New Project"}
				</Dialog.Title>
				<form
					className="space-y-6"
					method="post"
					onSubmit={formik.handleSubmit}
				>
					<div className="flex gap-1 flex-col" style={{ position: "relative" }}>
						{updateProject && (
							<>
								<div className="flex justify-between">
									<label className="flex items-center justify-between gap-2 text-sm font-medium text-gray-700">
										{" "}
										Project ID
									</label>
								</div>
								<div className="flex flex-col gap-2">
									<div className="relative flex rounded-md shadow-sm">
										<div className="relative w-full">
											<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"></div>

											<span className="  border-gray-300 block w-full rounded-md text-gray-800 focus:outline-none sm:text-sm px-3 py-2">
												{updateProject.id}
											</span>

											<div className="absolute inset-y-0 right-0 flex items-center pr-3">
												<button
													onClick={() => {
														toast.success("Copied!");
														navigator.clipboard.writeText(updateProject.id);
													}}
													type="button"
													className="inline-flex cursor-pointer items-center justify-center rounded-md font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-300 focus-visible:ring-offset-2 border border-transparent bg-transparent text-gray-500 hover:bg-gray-50 active:bg-gray-100 px-2.5 py-1 text-xs !px-1 -mr-1.5"
												>
													<ClipboardIcon className="w-5 h-5" />
												</button>
											</div>
										</div>
									</div>
								</div>
							</>
						)}

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

					<div className="mt-4 flex place-content-between">
						<div>
							<button
								disabled={isUpdating || isLoading}
								type="submit"
								className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
							>
								Save
							</button>
							<button
								onClick={() => handleClose()}
								type="button"
								className="inline-flex justify-center rounded-md border border-transparent bg-gray-100 px-4 py-2 text-sm font-medium text-gray-900 mx-4 hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2"
							>
								Cancel
							</button>
						</div>
						{updateProject && <button disabled={isRemoving}
							onClick={() => removeProject()}
							type="button"
							className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
						>
							{isRemoving? 'Removing...':'Remove'}
						</button>}
					</div>
				</form>
			</>
		);
	};

	return (
		<ClientLayout>
			<Toaster position="top-center" reverseOrder={false} />
			<GDialog
				isOpen={isOpen}
				closeDialog={() => {
					toggleDialog();
					setTimeout(() => setUpdateProject(null), 500);
				}}
			>
				<ProjectForm />
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
					<div key={data.id} className="bg-white shadow sm:rounded-md">
						<div className="bg-white flex flex-row justify-between px-4 py-5 sm:p-6 sm:rounded-t-md sm:rounded-b-md">
							<Link
								className="w-10/12"
								href={{
									pathname: "/project/[id]",
									query: { id: data.id },
								}}
							>
								<div className="flex content-between flex-col">
									<div className="mb-8 text-base font-medium">{data.name}</div>
									<div className="text-sm text-slate-500">
										{data.description}
									</div>
								</div>
							</Link>
							<div className=" text-right w-[9px]">
								<button onClick={() => handleUpdate(data)}>
									<EllipsisVerticalIcon className="h-5  text-slate-500" />
								</button>
							</div>
						</div>
					</div>
				))}
			</div>
		</ClientLayout>
	);
}
export const getServerSideProps: GetServerSideProps = async (context) => {
	const supabase = createServerSupabaseClient(context);
	const {
		data: { session },
	} = await supabase.auth.getSession();
	if (!session)
		return {
			redirect: {
				destination: "/auth/login",
				permanent: false,
			},
		};
	const { data: Projects, error } = await supabase
		.from("project")
		.select("*")
		.eq("userId", session.user.id)
		.order("created_at", { ascending: false });
	//console.log(Projects, error)
	return {
		props: { session, Projects },
	};
};
