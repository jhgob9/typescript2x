class Editor{
	constructor(
		public name : string,
		public isTypeScriptCompatible : Boolean
	){}
	details(){
		console.log( 'Editor : ' + this.name + ', TypeScript installed : ' + this.isTypeScriptCompatible );
	}
}

class VisualStudioCode extends Editor{
	constructor(
		name : string,
		isTypeScriptCompatible : Boolean,
		public OSType : string
	){
		super(name,isTypeScriptCompatible);
		this.OSType = OSType;
	}
}

let VS = new VisualStudioCode('VSCode',true,'all');
VS.details();