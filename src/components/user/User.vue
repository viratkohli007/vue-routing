<template>
	 <div>
	 	 <h1>User</h1>
	 	 <p>
	 	 	This is user hahahahahhahahh!!!!
	 	 </p>
	 	 <button class="btn btn-primary" @click="Home()">Go to home</button>
	 	 <router-view></router-view>
	 </div>
</template>

<script>
	export default{
		methods: {
			Home(){
        this.$router.push('/')
			}
		}
	}
</script>
