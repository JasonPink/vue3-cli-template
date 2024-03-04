<template>
	<div id="nav">
		<router-link to="/">Home</router-link> |
		<router-link to="/404">About</router-link>
	</div>
	<router-view />
</template>

<style lang="scss">
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}

	#nav {
		padding: 30px;
		// background: url($src + "/id/729/200/300.jpg?hmac=VbcZBxFYzQK1ro1MTLLmwHNQ0kuIJSagOeue4JMymUY")
		//   no-repeat;
		// background: url("~@/assets/logo.png") no-repeat center;
		a {
			font-weight: bold;
			color: #2c3e50;

			&.router-link-exact-active {
				color: #42b983;
			}
		}
	}
</style>
