<template>
	<div>
		<p>Profiel hahahhaah</p>
		<p>user id is {{ $route.params.id }}</p>
		<router-link tag="button" :to="'/user/'+$route.params.id+'/edit'"

		>Edit</router-link>
	</div>
</template>
