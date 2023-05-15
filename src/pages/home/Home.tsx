import DashboardFilter from "@/components/common/DashboardFilter";
import UnitsTable from "@/components/common/UnitsTable";
import ClientLayout from "@/components/client/layout/Index";

export default function ShopHome() {
	return (
		<ClientLayout>
			<DashboardFilter />
			<UnitsTable />
		</ClientLayout>
	);
}
