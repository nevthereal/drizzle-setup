<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	const users = data.users;
</script>

<form method="POST">
	<input required type="text" name="username" />
	<select required name="admin">
		<option value={true}>True</option>
		<option value={false}>False</option>
	</select>
	<button>Add user</button>
</form>

{#each users as user}
	<div>
		<h1>Username: {user.username} (id {user.id})</h1>
		<p>Admin: {user.admin}</p>
		<h2>Posts:</h2>
		{#each user.posts as post, index}
			<div>
				<h3>Post {post.id}: {post.body}</h3>
			</div>
		{/each}
	</div>
{/each}
