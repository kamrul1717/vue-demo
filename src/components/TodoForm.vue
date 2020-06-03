<template>
	<div>
		<input type="text" v-model="newTodoItem">
		<button @click="addNewTodoItem">Submit</button>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				newTodoItem: ""
			}
		},

		methods: {
			addNewTodoItem(){
				if(this.newTodoItem != ''){
				this.$store.dispatch('addNewTodo', this.newTodoItem);
								this.newTodoItem = "";
				}else{
					$(this).tooltip({title: "Please give some stock first."});
				}
			}
		}
	};
</script>

<style>
			
</style>