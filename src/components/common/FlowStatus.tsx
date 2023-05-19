import { statusTypes } from "@/types/FlowTypes";
import { CheckIcon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/24/solid";



export default function StepperStatus({status}:{status:statusTypes}) {
	const Success = () => {
		return (
			<span className="absolute flex ml-1 items-center justify-center w-6 h-6 bg-green-200 rounded-full -left-4 ring-4 ring-white">
				<CheckIcon className="w-3 h-3 text-green-500" />
			</span>
		);
	};
    const Fail = () => {
		return (
			<span className="absolute flex ml-1 items-center justify-center w-6 h-6 bg-red-200 rounded-full -left-4 ring-4 ring-white">
				<XMarkIcon className="w-3 h-3 text-red-500" />
			</span>
		);
	};
    const StatusIcon = (status: statusTypes) => {
        switch(status) {
          case statusTypes.Success: return <Success />;
          case statusTypes.Fail: return <Fail />;
          default: return <></>
        }
      }
	return  StatusIcon(status) 
}
