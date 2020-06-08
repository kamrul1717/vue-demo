<template>
	<div>
		<div class="row">
			<div class="col-md-8">
				<h3 :class="{completed: todo.completed}" @click="toggleTodoStatus(todo)">{{todo.title}}</h3>
			</div>
			<div class="col-md-4">
				<button @click="deleteTodo(todo)" class="btn btn-sm btn-danger">Delete</button>
			</div>
		</div>
		
		
	</div>
</template>

<script>
	import { mapActions } from 'vuex';
	export default {
		props: ['todo'],
		methods: {
			...mapActions({
				deleteTodo: 'deleteTodo',
				toggleTodoStatus: 'toggleTodoStatus',
			})
		}
	};
</script>

<style scoped>
	.completed{
		text-decoration: line-through;
	}			
</style>