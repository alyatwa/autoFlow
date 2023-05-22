import { Database } from "@/types/supabase";
import ClientLayout from "@/components/client/layout/Index";
import Breadcrumb from "@/components/common/Breadcrumb";
import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { useMutation } from "@tanstack/react-query";
import { useFormik } from "formik";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";

export default function Profile(props: any) {
	const supabaseClient = useSupabaseClient<Database>();
	const user = props.user;
	const breadcrumb = [
		{
			title: "Profile",
			id: "0",
			herf: `#`,
		},
	];
	const { mutate: updateUser, isLoading } = useMutation(
		async (user: any): Promise<any> => {
			const { data, error } = await supabaseClient.auth.updateUser({
				email: user.email,
				password: user.password,
				data: { firstname: user.firstname, lastname: user.lastname },
			});
			if (error) throw new Error(error.message);
			return data;
		},
		{
			onSuccess: () => {
				toast.success("Profile updated!");
			},
			onError: (e: string) => {
				toast.error(e.toString());
			},
		}
	);
	async function onSubmit(values: any) {
		updateUser(values);
	}
	const formik = useFormik({
		initialValues: {
			firstname: user.user_metadata?.firstname,
			lastname: user.user_metadata?.lastname,
			password: '',
			email: user.email,
		},
		onSubmit,
	});
	return (
		<ClientLayout>
			<Head>
				<title>Profile</title>
			</Head>
			<>
				<Toaster position="top-center" reverseOrder={false} />
				<Breadcrumb data={breadcrumb} />
				<div className="bg-white shadow sm:rounded-md">
					<div className="border-b border-b-gray-200 px-4 py-3 text-gray-900 sm:rounded-t-md sm:px-6 sm:py-4 border border-transparent">
						<div className="grid gap-4">
							<form
								className="space-y-6"
								method="post"
								onSubmit={formik.handleSubmit}
							>
								<div
									className="flex gap-1 flex-col"
									style={{ position: "relative" }}
								>
									<div className="flex justify-between">
										<label
											htmlFor="firstname"
											className="flex items-center justify-between gap-2 text-sm font-medium text-gray-700"
										>
											First name
										</label>
									</div>

									<div className="flex flex-col gap-2 w-60">
										<div className="relative flex rounded-md shadow-sm">
											<div className="relative w-full">
												<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"></div>

												<input
													type="text"
													{...formik.getFieldProps("firstname")}
													name="firstname"
													id="firstname"
													className="form-input focus:ring-1 border border-gray-300 focus:border-primary-500 focus:ring-primary-500 block w-full rounded-md text-gray-800 focus:outline-none sm:text-sm px-3 py-2"
													placeholder=""
												/>
											</div>
										</div>
									</div>
								</div>

								<div
									className="flex gap-1 flex-col"
									style={{ position: "relative" }}
								>
									<div className="flex justify-between">
										<label
											htmlFor="lastname"
											className="flex items-center justify-between gap-2 text-sm font-medium text-gray-700"
										>
											Last name
										</label>
									</div>

									<div className="flex flex-col gap-2 w-60">
										<div className="relative flex rounded-md shadow-sm">
											<div className="relative w-full">
												<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"></div>

												<input
													type="text"
													{...formik.getFieldProps("lastname")}
													name="lastname"
													id="lastname"
													className="form-input focus:ring-1 border border-gray-300 focus:border-primary-500 focus:ring-primary-500 block w-full rounded-md text-gray-800 focus:outline-none sm:text-sm px-3 py-2"
													placeholder=""
												/>
											</div>
										</div>
									</div>
								</div>

								<div
									className="flex gap-1 flex-col"
									style={{ position: "relative" }}
								>
									<div className="flex justify-between">
										<label
											htmlFor="email"
											className="flex items-center justify-between gap-2 text-sm font-medium text-gray-700"
										>
											Email
										</label>
									</div>

									<div className="flex flex-col gap-2 w-60">
										<div className="relative flex rounded-md shadow-sm">
											<div className="relative w-full">
												<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"></div>

												<input
													type="email"
													{...formik.getFieldProps("email")}
													name="email"
													id="email"
													className="form-input focus:ring-1 border border-gray-300 focus:border-primary-500 focus:ring-primary-500 block w-full rounded-md text-gray-800 focus:outline-none sm:text-sm px-3 py-2"
													placeholder=""
												/>
											</div>
										</div>
									</div>
								</div>

                                <div
									className="flex gap-1 flex-col"
									style={{ position: "relative" }}
								>
									<div className="flex justify-between">
										<label
											htmlFor="password"
											className="flex items-center justify-between gap-2 text-sm font-medium text-gray-700"
										>
											Password
										</label>
									</div>

									<div className="flex flex-col gap-2 w-60">
										<div className="relative flex rounded-md shadow-sm">
											<div className="relative w-full">
												<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"></div>

												<input
													type="password"
													{...formik.getFieldProps("password")}
													name="password"
													id="password"
                                                    autoComplete="off"
													className="form-input focus:ring-1 border border-gray-300 focus:border-primary-500 focus:ring-primary-500 block w-full rounded-md text-gray-800 focus:outline-none sm:text-sm px-3 py-2"
													placeholder=""
												/>
											</div>
										</div>
									</div>
								</div>

								<div className="mt-4 flex place-content-between">
									<button
										disabled={isLoading}
										type="submit"
										className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
									>
										Save
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</>
		</ClientLayout>
	);
}

export const getServerSideProps: GetServerSideProps = async (context) => {
	const supabase = createServerSupabaseClient(context);
	const {
		data: { session },
	} = await supabase.auth.getSession();
	const {
		data: { user },
	} = await supabase.auth.getUser();
	if (!session)
		return {
			redirect: {
				destination: "/auth/login",
				permanent: false,
			},
		};
	return {
		props: { user },
	};
};
