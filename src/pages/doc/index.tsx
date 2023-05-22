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
                        
## Installation  
  
#### With yarn   

~~~sh  
yarn add react-hot-toast  
~~~  

#### With NPM  

~~~sh  
npm install react-hot-toast  
~~~  

## Getting Started  

Add the Toaster to your app first. It will take care of rendering all notifications emitted. Now you can trigger  from anywhere!  `}
					</ReactMarkdown>
				</div>
			</div>
		</ClientLayout>
	);
}
