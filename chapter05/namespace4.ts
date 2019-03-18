namespace WebServiceResponse{
	let url: string;
	export namespace ServiceResponse{ // 중첩 네임스페이스
		export class WebResponse {
			getResponse() {
				return 'Success'
			}
			sendResponse() {
				return '200 OK'
			}
		}
	}
	let localResponse = new ServiceResponse.WebResponse();
	localResponse.getResponse();
	localResponse.sendResponse();
}
let response2 = new WebServiceResponse.ServiceResponse.WebResponse(); // 외부네임스페이스.내부네임스페이스.내부클래스
response2.getResponse();
response2.sendResponse();