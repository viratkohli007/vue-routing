<template>
 <div>
<ul class="nav nav-pills">
  <router-link :to="{name: 'home'}" tag="li" active-class="active"><a>Home</a></router-link>
  <router-link to="/user" tag="li" active-class="active"><a>User PRo</a></router-link>
  <router-link :to="link" tag="li" active-class="active"><a>User Detail</a></router-link>


</ul>
 </div>
</template>
<script>
	export default{

		data(){
			return{
				link: {
					name: 'userd',
					hash : '#data'
				}

			}
		}
	}
</script>
