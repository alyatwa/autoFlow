import { Database } from "@/types/supabase";
import { Dialog } from "@headlessui/react";
import { ClipboardIcon } from "@heroicons/react/24/outline";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useMutation } from "@tanstack/react-query";
import { useFormik } from "formik";
import toast, { Toaster } from "react-hot-toast";
type Unit = Database['public']['Tables']['unit']['Row']

export default function UnitForm({projectId,closeDialog, updateUnit, refreshUnits}:{projectId:string,updateUnit:Unit,refreshUnits:()=>void,closeDialog:()=>void}){
    const supabaseClient = useSupabaseClient<Database>();
	const { mutate: createUnit, isLoading } = useMutation(
		async (newUnit: Unit): Promise<any> => {
			await supabaseClient.from("unit").insert([newUnit]);
		},
		{
			onSuccess: async () => {
                refreshUnits()
				closeDialog()
			},
			onError: (e) => {
				console.log(e);
			},
		}
	);
	const { mutate: mutateUnit, isLoading: isUpdating } = useMutation(
		async (updateData: Unit): Promise<any> => {
			await supabaseClient
				.from("unit")
				.update(updateData)
				.eq("id", updateUnit.id);
		},
		{
			onSuccess: async () => {
				refreshUnits()
				closeDialog();
			},
			onError: (e) => {
				console.log(e);
			},
		}
	);
	const { mutate: removeUnit, isLoading: isRemoving } = useMutation(
		async (): Promise<any> => {
			await supabaseClient.from("unit").delete().eq("id", updateUnit.id);
		},
		{
			onSuccess: async () => {
				refreshUnits()
				closeDialog();
			},
			onError: (e) => {
				console.log(e);
			},
		}
	);
    async function onSubmit(values: any) {
		updateUnit ? mutateUnit(values) : createUnit(values);
	}
    const formik = useFormik({
        initialValues: {
            projectId,
            title: updateUnit ? updateUnit.title : "",
            description: updateUnit ? updateUnit.description : "",
        },
        onSubmit,
    });
    return (
        <>
        <Toaster position="top-center" reverseOrder={false} />
            <Dialog.Title
                as="h3"
                className="text-lg font-medium mb-3 leading-6 text-gray-900"
            >
                {updateUnit ? "Update Unit" : "New Unit"}
            </Dialog.Title>
            <form
                className="space-y-6"
                method="post"
                onSubmit={formik.handleSubmit}
            >
                <div className="flex gap-1 flex-col" style={{ position: "relative" }}>
                    {updateUnit && (
                        <>
                            <div className="flex justify-between">
                                <label className="flex items-center justify-between gap-2 text-sm font-medium text-gray-700">
                                    {" "}
                                    Unit ID
                                </label>
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="relative flex rounded-md shadow-sm">
                                    <div className="relative w-full">
                                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"></div>

                                        <span className="  border-gray-300 block w-full rounded-md text-gray-800 focus:outline-none sm:text-sm px-3 py-2">
                                            {updateUnit.id}
                                        </span>

                                        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                                            <button
                                                onClick={() => {
                                                    toast.success("Copied!");
                                                    navigator.clipboard.writeText(updateUnit.id);
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
                                    {...formik.getFieldProps("title")}
                                    name="title"
                                    id="title"
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
                            onClick={() => closeDialog()}
                            type="button"
                            className="inline-flex justify-center rounded-md border border-transparent bg-gray-100 px-4 py-2 text-sm font-medium text-gray-900 mx-4 hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2"
                        >
                            Cancel
                        </button>
                    </div>
                    {updateUnit && <button
                        onClick={() => removeUnit()}
                        type="button" disabled={isRemoving}
                        className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                    >
                        {isRemoving? 'Removing...':'Remove'}
                    </button>}
                </div>
            </form>
        </>
    );
}