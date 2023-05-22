import ClientLayout from "@/components/client/layout/Index";
import Breadcrumb from "@/components/common/Breadcrumb";
import Head from "next/head";
import ReactMarkdown from "react-markdown";

export default function Header() {
	const breadcrumb = [
		{
			title: "Documentation",
			id: "0",
			herf: `#`,
		},
	];
	return (
		<ClientLayout>
			<Head>
				<title>Documentation</title>
			</Head>
			<Breadcrumb data={breadcrumb} />
			<div className="bg-white shadow sm:rounded-md">
				<div className="border-b border-b-gray-200 px-4 py-3 text-gray-900 sm:rounded-t-md sm:px-6 sm:py-4 border border-transparent">
					<ReactMarkdown className="prose lg:prose-sm max-w-full">
						{`
Install using the npm package  
Follow the instructions to set up autoFlow with npm.  

1. Install the package
~~~bash
yarn add AutoFow
~~~
2. Initialize the script specifying your project ID

~~~js
import autoFlow from 'autoFlow';
const siteId = 3501646;
const unitId = 6;
AutoFow.init(siteId, unitId, userTag, status, json);
~~~
						`}
					</ReactMarkdown>
				</div>
			</div>
		</ClientLayout>
	);
}
