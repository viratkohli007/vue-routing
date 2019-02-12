<template>
	<div>
		<p>User Edit</p>
		<p>Id: {{id}}</p>
	</div>
</template>
<script>
	export default {
		data: function(){
			return {
				id : this.$route.params.id
			}
		},
		watch: {
			'$route'(to, from){
				this.id = to.params.id;
			}
		}
	}
</script>
