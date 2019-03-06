class base{
	protected id: number;
}
class child extends base{
	name: string;
	detail():string{
		return `$name has id: $this.id`;
	}
}