namespace WebServiceResponse{
	class WebResponse{
		getResponse(){
			return 'Success'
		}
		sendResponse() {
			return '200 OK'
		}
	}
	let localResponse = new WebResponse();
	localResponse.getResponse();
	localResponse.sendResponse();
}
let response = new WebServiceResponse.WebResponse();