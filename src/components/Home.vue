<template>
	<div id="home">
		<div class="row">
			<div id="chartdiv"></div>
			<div class="column"
				@click="$router.push('orders')">
				<div class="c1">
					<h2 class="c-header">500</h2>
					<h3 class="c-sub-title">Orders this week</h3>
					<h1 class="c-title">ORDERS</h1>
				</div>
			</div>
			<div class="column"
				@click="$router.push('suppliers')">
				<div class="c2">
					<h2 class="c-header">2</h2>
					<h3 class="c-sub-title">New suppliers today</h3>
					<h1 class="c-title">SUPPLIERS</h1>
				</div>
			</div>
			<div class="column"
				@click="$router.push('trace')">
				<div class="c3">
					<h2 class="c-header">20 %</h2>
					<h3 class="c-sub-title">Less water used this month</h3>
					<h1 class="c-title">TRACE</h1>
				</div>
			</div>
		</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      	msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
