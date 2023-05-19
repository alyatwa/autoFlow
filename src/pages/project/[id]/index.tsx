import ClientLayout from "@/components/client/layout/Index";
import Breadcrumb from "@/components/common/Breadcrumb";
import DashboardFilter from "@/components/common/DashboardFilter";
import UnitsTable from "@/components/common/UnitsTable";
import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { GetServerSideProps } from "next";
import Head from "next/head";

export default function Page(props:any) {
	return (
		<ClientLayout>
			<Head>
				<title>Project</title>
			</Head>
			<>
			<Breadcrumb/>
			<UnitsTable project={props.Project} />
			</>
		</ClientLayout>
	);
}

  export const getServerSideProps: GetServerSideProps = async (context) => {
	const supabase = createServerSupabaseClient(context);
	const { data: { session }, } = await supabase.auth.getSession()
	if (!session)
    return {
      redirect: {
        destination: '/auth/login',
        permanent: false,
      },
    }
	const { data:Project, error } = await supabase
			  .from("project")
			  .select('*, unit(*, session(count))')
			  .eq('id', context?.params?.id)
			  .single()
			 console.log(Project)
	return {
	  props: { Project },
	};
  }; 