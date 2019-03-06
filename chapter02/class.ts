class News{
	public channelNumber: number;
	public newsTitle: string;
	private author: string = 'ESPN';

	formet():string{
		return `${this.channelNumber} : ${this.newsTitle} was written by ${this.author};`
	}
}
let espn = new News();
espn.channelNumber = 1;
espn.newsTitle = 'NFL Today';
console.log( espn.formet() );