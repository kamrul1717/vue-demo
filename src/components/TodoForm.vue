<template>
	<div>
		<div class="row">
			<div class="col-md-8">
				<input type="text" id="todoInput" class="form-control" v-model="newTodoItem" placeholder="Enter todo">
			</div>
			<div class="col-md-4">
				<button @click="addNewTodoItem" class="btn btn-primary">Submit</button>
			</div>
		</div>
		
	</div>
</template>

<script>
	// import JQuery from 'jquery'
	// let $ = JQuery
	
	export default {
		data(){
			return {
				newTodoItem: ""
			}
		},

		methods: {
			addNewTodoItem(){
				if(this.newTodoItem != ''){
					if(this.newTodoItem.length > 8){
						this.$swal({
							position: 'center',
							icon: 'error',
							title: 'Max character exceeds',
							showConfirmButton: true,
							timer: 3000
						});
					}else{
						this.$store.dispatch('addNewTodo', this.newTodoItem);
								this.newTodoItem = "";
					}
				}
				else{
					this.$toasted.show('Please enter a todo!', {
						position: 'top-right',
						duration: 2000,
						keepOnHover: true,
						action: {

						},
						fullWidth: false,
						fitToScreen: false,
						type: 'error',
						closeOnSwipe: true
					})
				}
			}
		}
	};
</script>

<style>
			
</style>