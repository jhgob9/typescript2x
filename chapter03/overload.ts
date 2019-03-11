function getCustomer(name:string):string;
function getCustomer(id:number):string;
function getCustomer(property:any):string{
	if (typeof property == 'string'){
		// 고객 이름에 따라 고객 정보 반환
	} else if (typeof property == 'number'){
		// 고객 ID에 따라 고객 정보 반환
	}
	return "customer"
}