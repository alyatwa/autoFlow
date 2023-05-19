import ClientLayout from "@/components/client/layout/Index";
import Breadcrumb from "@/components/common/Breadcrumb";
import DashboardFilter from "@/components/common/DashboardFilter";
import UnitsTable from "@/components/common/UnitsTable";
import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { GetServerSideProps } from "next";
import Head from "next/head";

export default function Page(props:any) {
	const breadcrumb = [{
		title:props.Project.name,
		id:props.Project.id,
		herf:`#`
	}
	]
	return (
		<ClientLayout>
			<Head>
				<title>{props.Project.name} Project</title>
			</Head>
			<>
			<Breadcrumb data={breadcrumb}/>
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