import ClientLayout from "@/components/client/layout/Index";
import Breadcrumb from "@/components/common/Breadcrumb";
import FlowTable from "@/components/common/FlowTable";
import Head from "next/head";

export default function Page() {
	return (
		<ClientLayout>
			<Head>
				<title>Unit</title>
			</Head>
			<>
			<Breadcrumb/>
			<FlowTable />
			</>
		</ClientLayout>
	);
}
