import ClientLayout from "@/components/client/layout/Index";
import Breadcrumb from "@/components/common/Breadcrumb";
import DashboardFilter from "@/components/common/DashboardFilter";
import UnitsTable from "@/components/common/UnitsTable";
import Head from "next/head";

export default function Page() {
	return (
		<ClientLayout>
			<Head>
				<title>Project</title>
			</Head>
			<>
			<Breadcrumb/>
			<UnitsTable />
			</>
		</ClientLayout>
	);
}
