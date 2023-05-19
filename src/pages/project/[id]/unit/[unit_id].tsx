import ClientLayout from "@/components/client/layout/Index";
import Breadcrumb from "@/components/common/Breadcrumb";
import FlowTable from "@/components/common/FlowTable";
import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { GetServerSideProps } from "next";
import Head from "next/head";

export default function Page(props:any) {
	const breadcrumb = [{
		title:props.data.project.name,
		id:props.data.project.id,
		herf:`/project/${props.data.project.id}`
	},{
		title:props.data.title,
		id:'0',
		herf:'#'
	}
	]
	return (
		<ClientLayout>
			<Head>
				<title>{props.data.title} Unit</title>
			</Head>
			<>
			<Breadcrumb data={breadcrumb}/>
			<FlowTable data={props.data} />
			</>
		</ClientLayout>
	);
}
export const getServerSideProps: GetServerSideProps = async (context) => {
	const id = context?.params?.unit_id
	const supabase = createServerSupabaseClient(context);
	const { data, error } = await supabase
			  .from("unit")
			  .select('*, project(name, id), session(*, flow(*))')
			  .eq('id', id)
			  .order('created_at', {foreignTable: 'session.flow'})
			  .single();
	return {
	  props: { data},
	};
  };