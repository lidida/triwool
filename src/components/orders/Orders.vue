<template>
	<page
		class="orders"
		:mode="'orders'"
		@add-order="addOrder()">
		<div class="row">
			<div class="col-lg-2 m-t-lg">
				<span
					v-for="filter in filters"
					:key="filter.id">
					<i 
						v-if="filter.visible"
						class="filter-icon check-icon-lg fa fa-minus-square"
						@click="toggleFilter(filter)"></i>
					<i 
						v-else
						class="filter-icon check-icon-lg fa fa-plus-square"
						@click="toggleFilter(filter)"></i>
					{{ filter.description }}
					<template
						v-if="filter.visible">
						<br><br>
						<span v-for="subFilter in filter.subFilters"
							class="sub-filter"
							:key="subFilter.id">
							<i 
								v-if="subFilter.active"
								class="check-icon-lg fa fa-square colored-icon"
								@click="toggleSubFilter(subFilter)"></i>
							<i 
								v-else
								class="check-icon-lg fa fa-square uncolored-icon"
								@click="toggleSubFilter(subFilter)"></i>
							{{ subFilter.description }}
							<br>
						</span>
					</template>
					<br>
				</span>
			</div>
			<div class="col-lg-10">
				<div class="ibox">
					<div class="ibox-content">
						<div class="row">
							<div class="col-sm-4">
								<div class="form-group">
									<label class="col-form-label" for="product_name">Order</label>
									<input type="text" id="product_name" name="product_name" value="" placeholder="Project Name" class="form-control">
								</div>
							</div>
							<div class="col-sm-2">
								<div class="form-group">
									<label class="col-form-label" for="price">Description</label>
									<input type="text" id="price" name="price" value="" placeholder="Name" class="form-control">
								</div>
							</div>
							<div class="col-sm-2">
								<div class="form-group">
									<label class="col-form-label" for="quantity">Client</label>
									<input type="text" id="quantity" name="quantity" value="" placeholder="Company" class="form-control">
								</div>
							</div>
							<div class="col-sm-4">
								<div class="form-group">
									<label class="col-form-label" for="status">Status</label>
									<select name="status" id="status" class="form-control">
										<option value="1" selected="">Completed</option>
										<option value="0">Pending</option>
									</select>
								</div>
							</div>
						</div>

						<div class="table-responsive">
							<table class="table table-striped">
								<thead>
									<tr>
										<th>Order
											<i
												class="fa fa-sort m-l-sm"></i>
										</th>
										<th>Description
											<i
												class="fa fa-sort  m-l-sm"></i>
										</th>
										<th>Client
											<i
												class="fa fa-sort  m-l-sm"></i>
										</th>
										<th>Quantity
											<i
												class="fa fa-sort  m-l-sm"></i>
										</th>
										<th>Date
											<i
												class="fa fa-sort  m-l-sm"></i>
										</th>
										<td>Order status
											<i
												class="fa fa-sort  m-l-sm"></i>
										</td>
										<td></td>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>
											<a
												@click="goToOrder(10000045)">
												10000045
											</a>
										</td>
										<td>T-shirt</td>
										<td>Zara</td>
										<td>20000</td>
										<td>1/03/2019</td>
										<td><strong>Completed</strong></td>
										<td><a href="#"><i class="fa fa-check text-navy"></i></a></td>
									</tr>
									<tr>
										<td>
											<a
												@click="goToOrder(10000044)">
												10000044
											</a>
										</td>
										<td>Skirt</td>
										<td>BB</td>
										<td>3000</td>
										<td>1/03/2019</td>
										<td><strong>Completed</strong></td>
										<td><a href="#"><i class="fa fa-check text-navy"></i></a></td>
									</tr>
									<tr>
										<td>
											<a
												@click="goToOrder(10000043)">
												10000043
											</a>
										</td>
										<td>Dress</td>
										<td>CC</td>
										<td>5000</td>
										<td>1/03/2019</td>
										<td><strong>Pending</strong></td>
										<td><a href="#"><i class="fa fa-minus text-danger"></i></a></td>
									</tr>
									<tr>
										<td>
											<a
												@click="goToOrder(10000042)">
												10000042
											</a>
										</td>
										<td>Dress</td>
										<td>CC</td>
										<td>20000</td>
										<td>1/03/2019</td>
										<td><strong>Completed</strong></td>
										<td><a href="#"><i class="fa fa-check text-navy"></i></a></td>
									</tr>
									<tr>
										<td>
											<a
												@click="goToOrder(10000041)">
												10000041
											</a>
										</td>
										<td>T-shirt</td>
										<td>BB</td>
										<td>20000</td>
										<td>1/03/2019</td>
										<td><strong>Completed</strong></td>
										<td><a href="#"><i class="fa fa-check text-navy"></i></a></td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>			
		</div>
	</page>
</template>

<script>
import Page from '@/components/core/Page'
import Modal from '@/components/core/Modal'
import TabPanel from '@/components/core/TabPanel'
import { Bar } from 'vue-chartjs'

export default {
	components: {
		Page,
		Modal,
		TabPanel,
		Bar
	},

	computed: {
		okText () {
			return this.selectedTab.slug == 'preview' ? 'Submit' : 'Next'
		}
	},

	data () {
		return {
			filters: [
				{
					id: 1,
					description: 'Year',
					visible: true,
					subFilters: [
						{
							id: 11,
							description: '2017',
							active: false
						},
						{
							id: 12,
							description: '2018',
							active: true
						},
						{
							id: 13,
							description: '2019',
							active: false
						}
					]
				},
				{
					id: 2,
					description: 'Client',
					visible: true,
					subFilters: [
						{
							id: 21,
							description: 'Benetton',
							active: false
						},
						{
							id: 22,
							description: 'Zara',
							active: false
						},
						{
							id: 23,
							description: 'Bershka',
							active: false
						}
					]
				},
				{
					id: 3,
					visible: true,
					description: 'Status',
					subFilters: [
						{
							id: 31,
							description: 'Pending',
							active: false
						},
						{
							id: 32,
							description: 'Complete',
							active: false
						}
					]
				}
			],

			environmentalData: {
				labels: ['Row Material', 'Yarn', 'Fabric', 'Garment'],
				datasets: [
					{
						label: 'Total:',
						backgroundColor: 'rgba(209,196,233,0.7)',

      					borderColor: 'rgba(106, 121, 221, 0.90)',

						pointBorderColor: '#6A79DD',
						fill: true,
						data: [150, 200, 100, 300]
					},
					{
						label: 'Total:',
						backgroundColor: 'rgba(126,87,194,0.9)',

      					borderColor: 'rgba(106, 121, 221, 0.90)',

						pointBorderColor: '#6A79DD',
						fill: true,
						data: [100, 300, 50, 100]
					}
				]
			},

			options: {
				legend: {
					display: false
				},
				scales: {
					yAxes: [
						{
							gridLines: {
								color: "rgba(106, 121, 221, 0.10)"
							}
						}
					],
					xAxes: [
						{
							gridLines: {
								display: false
							}
						}
					]
				},
				animation: {
					easing: 'linear'
				},
				responsive: true       
			},

			environmentalData2: {
				labels: ['Row Material', 'Yarn', 'Fabric', 'Dying and Finishing', 'Manufacturing'],
				datasets: [
					{
						label: 'Total de compras',
						backgroundColor: 'rgba(210, 143, 99, 0.90)',
						
      					borderColor: 'rgba(210, 143, 99, 0.90)',
 
						pointBorderColor: '#6A79DD',
						fill: false,
						data: [150, 200, 100, 300, 260]
					}
				]
			},

			options2: {
				legend: {
					display: false
				},
				scales: {
					yAxes: [
						{
							gridLines: {
								color: "rgba(210, 143, 99, 0.10)"
							}
						}
					],
					xAxes: [
						{
							gridLines: {
								display: false
							}
						}
					]
				},
				animation: {
					easing: 'linear'
				},
				responsive: true       
			}
		}
	},

	methods: {
		toggleFilter (filter) {
			filter.visible = !filter.visible
		},

		toggleSubFilter (subFilter) {
			subFilter.active = !subFilter.active
		},

		goToOrder (orderId) {
			this.$router.push('/orders/' + orderId)
		}
	}
}
</script>

