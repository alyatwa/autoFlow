export async function sendFlow(
		unitId: string,
		userTag: string,
		flowTitle: string,
		flowDescription?: string,
		status?: 0 | 1,
		metadata?: any
	)  {
		const isEmpty = (str: any) => !str?.length;
    const newMetadata:any = {}
        if (isEmpty(metadata) && !isServer()){
          
          newMetadata.browser = getBrowserName()
          newMetadata.device = getDeviceName()
          newMetadata.URL = window.location.href
        }
        const options = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				unitId,
				status,
				metadata: metadata || newMetadata,
				userTag,
				flowTitle,
				flowDescription,
			}),
		};
		const response = await fetch("http://localhost:3000/api/sendFlow", options);
		const jsonData = await response.json();


        function isServer():boolean {
            return !(typeof window != 'undefined' && window.document);
         }

         function getBrowserName():string {
            let browserInfo = navigator.userAgent;
            let browser;
            if (browserInfo.includes('Opera') || browserInfo.includes('Opr')) {
              browser = 'Opera';
            } else if (browserInfo.includes('Edg')) {
              browser = 'Edge';
            } else if (browserInfo.includes('Chrome')) {
              browser = 'Chrome';
            } else if (browserInfo.includes('Safari')) {
              browser = 'Safari';
            } else if (browserInfo.includes('Firefox')) {
              browser = 'Firefox'
            } else {
              browser = 'unknown'
            }
              return browser;
          }
          function getDeviceName() {
            let device = "Unknown";
            const ua = {
                "Generic Linux": /Linux/i,
                "Android": /Android/i,
                "BlackBerry": /BlackBerry/i,
                "Bluebird": /EF500/i,
                "Chrome OS": /CrOS/i,
                "Datalogic": /DL-AXIS/i,
                "Honeywell": /CT50/i,
                "iPad": /iPad/i,
                "iPhone": /iPhone/i,
                "iPod": /iPod/i,
                "macOS": /Macintosh/i,
                "Windows": /IEMobile|Windows/i,
                "Zebra": /TC70|TC55/i,
            }
            Object.keys(ua).map((v:any) => navigator.userAgent.match(ua[v]) && (device = v));
            return device;
        }
	}