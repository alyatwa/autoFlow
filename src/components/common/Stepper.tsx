import { CheckIcon } from "@heroicons/react/24/outline";

export default function Stepper() {
	return (
<ol className="relative text-gray-500 border-l border-gray-200">                  
    <li className="mb-10 ml-6">            
        <span className="absolute flex ml-1 items-center justify-center w-6 h-6 bg-green-200 rounded-full -left-4 ring-4 ring-white">
          
            <CheckIcon className="w-3 h-3 text-green-500" />
        </span>
        <h3 className="font-normal leading-tight">Personal Info</h3>
        <p className="text-xs">Step details here</p>
    </li>
    <li className="mb-10 ml-6">
        <span className="absolute flex ml-1 items-center justify-center w-6 h-6 bg-gray-100 rounded-full -left-4 ring-4 ring-white ">
        <CheckIcon className="w-3 h-3 text-green-500" />
        </span>
        <h3 className="font-normal leading-tight">Account Info</h3>
        <p className="text-xs">Step details here</p>
    </li>
    <li className="mb-10 ml-6">
        <span className="absolute flex ml-1 items-center justify-center w-6 h-6 bg-gray-100 rounded-full -left-4 ring-4 ring-white ">
        <CheckIcon className="w-3 h-3 text-green-500" />
        </span>
        <h3 className="font-normal leading-tight">Review</h3>
        <p className="text-xs">Step details here</p>
    </li>
    <li className="ml-6">
        <span className="absolute flex ml-1 items-center justify-center w-6 h-6 bg-gray-100 rounded-full -left-4 ring-4 ring-white ">
        <CheckIcon className="w-3 h-3 text-green-500" />
        </span>
        <h3 className="font-normal leading-tight">Confirmation</h3>
        <p className="text-xs">Step details here</p>
    </li>
</ol>
    )}