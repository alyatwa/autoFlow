import ClientLayout from "@/components/client/layout/Index";
import Breadcrumb from "@/components/common/Breadcrumb";
import FlowTable from "@/components/common/FlowTable";
import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { GetServerSideProps } from "next";
import Head from "next/head";

export default function Page(props:any) {
	return (
		<ClientLayout>
			<Head>
				<title>Unit</title>
			</Head>
			<>
			<Breadcrumb/>
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
			  .select('*, session(*, flow(*))')
			  .eq('id', id)
			  .single();
	return {
	  props: { data},
	};
  };