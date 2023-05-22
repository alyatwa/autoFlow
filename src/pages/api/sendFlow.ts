import supabase from "@/utils/supabase";

export default async function handler(req: any, res: any) {
	const isEmpty = (str: any) => !str?.length;
	if (req.method === "POST") {
		// Process a POST request
		var { userTag, unitId, flowTitle, flowDescription, status, metadata } =
			req.body as {
				userTag: string;
				unitId: string;
				flowTitle?: string;
				flowDescription?: string;
				status: 0 | 1;
				metadata?: any;
			};
		if (isEmpty(userTag) || isEmpty(unitId)) {
			res
				.status(500)
				.json({ msg: "Ensure userTag or unitId is not undefined" });
                return
		}
		const { data: sessionData, error: sessionError } = await supabase
			.from("session")
			.select("id")
			.eq("unitId", unitId)
			.eq("tag", userTag)
			.single();

		if (sessionData) {
			const { flowData, flowError } = await createFlow(sessionData.id);
            console.log(flowData)
			if (flowData) {
                res.status(200).json({ msg: flowData });
            return;
            }
			if (flowError)
				res.status(500).json({ msg: flowError.message.toString() });
		} else {
			const { data: newSessionData, error: newSessionError } = await supabase
				.from("session")
				.insert({ unitId, tag: userTag })
                .select()
				.single()
			if (newSessionData) {
				const { flowData, flowError } = await createFlow(newSessionData.id);
				
				if (flowData) {
                    
                    res.status(200).json({ msg: flowData });
                    return;}
				if (flowError)
					{res.status(500).json({ msg: flowError.message.toString() }); return}
			}
		}
	} else {
		res.status(405).send({ message: "Only POST requests allowed" });
		return;
	}
	async function createFlow(sessionID: string) {
		const { data: flowData, error: flowError } = await supabase
			.from("flow")
			.insert([
				{
					sessionId: sessionID,
					title: flowTitle,
					description: flowDescription,
					metadata,
					status,
				},
			]).select()
			.single();
		return { flowData, flowError };
	}
}
