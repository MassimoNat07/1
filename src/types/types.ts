export interface Post {
	title: string;
	description: string;
	categories: string;
	user?: { username: string; surname: string };

}

export interface UserData {
	username: string;
	surname: string;
}
