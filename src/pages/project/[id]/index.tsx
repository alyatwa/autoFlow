import UnitForm from "@/components/client/forms/Unit";
import ClientLayout from "@/components/client/layout/Index";
import Breadcrumb from "@/components/common/Breadcrumb";
import GDialog from "@/components/common/Dialog";
import UnitsTable from "@/components/common/UnitsTable";
import { Database } from "@/types/supabase";
import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { useState } from "react";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

export default function Page(props: any) {
	const breadcrumb = [
		{
			title: props.Project.name,
			id: props.Project.id,
			herf: `#`,
		},
	];
	const projectData = props.Project
	const supabaseClient = useSupabaseClient<Database>();
	let [project, setProject] = useState(projectData);
	let [isOpen, setIsOpen] = useState(false);
	let [updateUnit, setUpdateUnit] = useState<any>(null);
	const toggleDialog = () => {
		setIsOpen(!isOpen);
	};
	const createUnit = (projetcId: string) => {
		console.log(projetcId);
		toggleDialog();
	};
	const updateCurrentUnit = (unitData: any) => {
		console.log(unitData);
		setUpdateUnit(unitData);
		toggleDialog();
	};
	const handleClose = (): void => {
		toggleDialog();
		setTimeout(() => setUpdateUnit(null), 500);
	};
	const handleRefresh = async () => {
		const { data: newUnits } = await supabaseClient
                .from("project")
                .select('*, unit(*, session(count))')
                .eq('id', project.id)
				.order('created_at', {foreignTable: 'unit'})
                .single()
				setProject(newUnits);
	};
	return (
		<ClientLayout>
			<Head>
				<title>{project.name} Project</title>
			</Head>
			<>
				<Breadcrumb data={breadcrumb} />
				<GDialog
					isOpen={isOpen}
					closeDialog={() => {
						handleClose();
					}}
				>
					<UnitForm projectId={project.id} refreshUnits={handleRefresh} updateUnit={updateUnit} closeDialog={() => handleClose()} />
				</GDialog>
				<UnitsTable
					updateUnit={(data) => updateCurrentUnit(data)}
					newUnit={(projetcId) => createUnit(projetcId)}
					project={project}
				/>
			</>
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
	const { data: Project, error } = await supabase
		.from("project")
		.select("*, unit(*, session(count))")
		.eq("id", context?.params?.id)
		.single();
	//console.log(Project);
	return {
		props: { Project },
	};
};
