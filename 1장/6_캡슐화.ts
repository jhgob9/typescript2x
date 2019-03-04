class News{
	public channelNumber : number;
	public newsTitle : string;
	private url : string;
}
let espn = new News();
espn.channelNumber = 1;
espn.newsTitle = 'NFL Today';
espn.url = 'http://go.espn.com'; // url은 private 이고 class 안에서만 접근 가능