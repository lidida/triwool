<template>
	<page
		class="trace order-details"
		:mode="'trace'">
		<div class="row order-details-content">
			<div class="row">
				<div class="col-lg-9">
					<div class="m-b-md order-title">
						<h2>
							<a>Trace</a>
						</h2>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="ibox">
					<div class="ibox-content">
						<div class="panel">
							<tab-panel
								:tabs="tabs"
								:new-selected-tab="selectedTab"
								@selectTab="selectedTab = $event">
								<div v-if="selectedTab.slug == 'client'" class="form-horizontal m-l-md">
									<div class="row">
										<div class="col-lg-12">
											<div class="ibox" style="border-top: none;">
												<div class="ibox-title" style="border-top: none;">
													1. Select client
												</div>
												<div class="ibox-content">
													<div class="row">
														<div class="col-lg-12">
															<div class="form-group row">
																<div class="col-sm-10">
																	<select class="form-control m-b" name="account">
																		<option>Bershka</option>
																		<option>Benneton</option>
																		<option>Pull&Bear</option>
																		<option>Massimo Dutti</option>
																		<option>Zara</option>
																	</select>
																</div>
															</div>
														</div>
													</div>
												</div>
												<div class="ibox">
													<div class="ibox-title">
														2. Suggested from recent selections
													</div>
													<div class="ibox-content">
														<div class="row">
															<div
																v-for="(client, index) in clients"
																:key="index"
																class="col-lg-3"
																@click="selectClient(client.id)">
																<div class="contact-box"
																	:class="{ 'selected-border': client.id == selectedClientId }">
																	<a class="row">
																		<div
																			class="col-4">
																			<div class="text-center">
																				<img
																					alt="image"
																					class="m-t-xs img-fluid"
																					height="100"
																					:src="require('@/assets/' + client.logo + '.png')">
																			</div>
																		</div>
																	</a>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>

									<div
										class="modal-footer">
										<button
											type="button"
											class="btn btn-w-m btn-primary"
											v-text="'Next'"
											@click="nextOrSave">
										</button>
									</div>
								</div>
								<div v-if="selectedTab.slug == 'order'" class="form-horizontal m-l-md">
									<div class="row">
										<div class="col-lg-9">
											<div class="ibox" style="border-top: none;">
												<div class="ibox-title" style="border-top: none;">
													1. Type order number
												</div>
												<div class="ibox-content">
													<div class="row">
														<div class="col-lg-8">
															<div class="form-group">
																<input
																	type="text"
																	id="product_name"
																	name="product_name"
																	value="12121212"
																	class="form-control">
															</div>
														</div>
														<div class="col-lg-4">
															<button type="button" class="btn btn-w-m btn-primary">Scan</button>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div class="row">
										<div class="col-lg-2">
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
															class="check-icon-lg fa fa-square uncolored-icon2"
															@click="toggleSubFilter(subFilter)"></i>
														{{ subFilter.description }}
														<br>
													</span>
												</template>
												<br>
											</span>
										</div>
										<div class="col-lg-7">
											<div class="table-responsive">
												<table class="table table-striped">
													<thead>
														<tr>
															<th>
																<input @click="toggleCheck($event)" type="checkbox"/>
															</th>
															<th>Order
																<i
																	class="fa fa-sort m-l-sm"></i>
															</th>
															<th>Description
																<i
																	class="fa fa-sort  m-l-sm"></i>
															</th>
															<th>Date
																<i
																	class="fa fa-sort  m-l-sm"></i>
															</th>
														</tr>
													</thead>
													<tbody>
														<tr
															v-for="(order, index) in orders"
															:key="index">
															<td>
																<input v-model="order.checked" type="checkbox"/>
															</td>
															<td>{{ order.id }}</td>
															<td>{{ order.description }}</td>
															<td>{{ order.date }}</td>
														</tr>
													</tbody>
												</table>
											</div>
										</div>
									</div>

									<div
										class="modal-footer">
										<button
											type="button"
											class="btn btn-w-m btn-danger"
											v-text="'Previous'"/>

										<button
											type="button"
											class="btn btn-w-m btn-primary"
											v-text="'Next'"
											@click="nextOrSave">
										</button>
									</div>
								</div>
								<div v-if="selectedTab.slug == 'certificates'" class="form-horizontal m-l-md">
									<div class="row">
										<div class="contact-box">
											<a class="row">
												<div class="col-4">
													<div class="text-center">
														<h3>Client Benneton - 2017</h3>
														<br>
														<h3>Order # 10000045</h3>
														<br>
													</div>
												</div>
											</a>
										</div>
									</div>
									<div class="row">
										<div class="ibox">
											<div class="ibox-title" style="border-top: none;">
												<h3>Select the metric</h3>
											</div>
											<div class="ibox-content">
												<div class="col-lg-6">
													<div class="contact-box">
													<div style="text-align:center"> 
														<h3> PRE-SALE </h3>
													</div>
														<a class="row">
															<div class="col-lg-6  m-b-lg"
																@click="openChart('Route map', 'route-map')">
																<div class="text-center">
																	<img
																		alt="image"
																		class="rounded-circle m-t-xs img-fluid"
																		height="100"
																		:src="require('@/assets/route.png')">
																	<div class="m-t-xs font-bold"><a>Route map</a></div>
																</div>
															</div>
															<div class="col-lg-6  m-b-lg"
																@click="openChart('Certificates', 'certificates')">
																<div class="text-center">
																	<img
																		alt="image"
																		class="rounded-circle m-t-xs img-fluid"
																		height="100"
																		:src="require('@/assets/certificates.png')">
																	<div class="m-t-xs font-bold"><a>Certificates</a></div>
																</div>
															</div>
														</a>
														<a class="row">
															<div class="col-lg-6"
																@click="openChart('Material', 'material')">
																<div class="text-center">
																	<img
																		alt="image"
																		class="rounded-circle m-t-xs img-fluid"
																		height="100"
																		:src="require('@/assets/recyclability.png')">
																	<div class="m-t-xs font-bold"><a>Material</a></div>
																</div>
															</div>
															<div class="col-lg-6"
															@click="openChart('Enviroment', 'co2')">
																<div class="text-center">
																	<img
																		alt="image"
																		class="rounded-circle m-t-xs img-fluid"
																		height="100"
																		:src="require('@/assets/water.png')">
																	<div class="m-t-xs font-bold"><a>Enviroment</a></div>
																</div>
															</div>
														</a>
													</div>
												</div>
											<div class="col-lg-6">
													<div class="contact-box" style="height: 296.6px;">
														<div style="text-align:center"> 
															<h3> POST -SALE </h3>
														</div>
														<a class="row">
															<div class="col-lg-6"
																@click="openChart('Waste', 'waste')">
																<div class="text-center">
																	<img
																		alt="image"
																		class="rounded-circle m-t-xs img-fluid"
																		height="100"
																		:src="require('@/assets/recyclability.png')">
																	<div class="m-t-xs font-bold"><a>Waste</a></div>
																</div>
															</div>
															<div class="col-lg-6"
																@click="openChart('Wear', 'wear')">
																<div class="text-center">
																	<img
																		alt="image"
																		class="rounded-circle m-t-xs img-fluid"
																		height="100"
																		:src="require('@/assets/recyclability.png')">
																	<div class="m-t-xs font-bold"><a>Wear</a></div>
																</div>
															</div>
														</a>
													</div>
												</div>
											</div>
										</div>
									</div>

									<div
										class="modal-footer">
										<button
											type="button"
											class="btn btn-w-m btn-danger"
											v-text="'Previous'"/>
									</div>
								</div>
							</tab-panel>
						</div>
					</div>
				</div>
			</div>
		</div>

		<modal
			:xxl="chartSlug != 'certificate-details' && chartSlug != 'certificates'"
			:large="chartSlug == 'certificate-details' || chartSlug == 'certificates'"
			:show="showChart"
			:force="true"
			:title="chartTitle"
			:ok-text="'Save'"
			:footer="false"
			:ok-button-disabled="false"
			@close="closeChart">

			<template>
				<div class="row max-height" v-if="chartSlug == 'route-map'">
					<iframe src="http://167.99.211.8:82#route-map" frameborder="0" style="overflow:hidden;height:100%;width:100%" height="100%" width="100%"></iframe>
				</div>

				<div class="row max-height" v-if="chartSlug == 'certificates'">
					<div class="row">
						<div class="col-lg-12">
							<div class="ibox">
								<div class="ibox-content">
									<div class="row">
										<div
											v-for="(certificate, index) in certificates"
											:key="index"
											class="col-lg-4">
											<div class="contact-box">
												<a class="row"
													@click="chartSlug='certificate-details'">
													<div class="col-4">
														<div class="text-center">
															<img
																alt="image"
																class="m-t-xs img-fluid"
																height="100"
																:src="require('@/assets/' + certificate.logo + '.png')">
														</div>
													</div>
												</a>												
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="row max-height" v-if="chartSlug == 'certificate-details'">
					<img
						style="margin-left: 90px;"
						alt="image"
						:src="require('@/assets/global_certificate.png')">
				</div>

				<div class="row max-height" v-if="chartSlug == 'recycability'">
					<iframe src="http://167.99.211.8:82#recycability" frameborder="0" style="overflow:hidden;height:100%;width:100%" height="100%" width="100%"></iframe>
				</div>

				<div class="row max-height" v-if="chartSlug == 'material'">
					<iframe src="http://167.99.211.8:82#material" frameborder="0" style="overflow:hidden;height:100%;width:100%" height="100%" width="100%"></iframe>
				</div>

				<div class="row max-height" v-if="chartSlug == 'wear'">
					<iframe src="http://167.99.211.8:82#wear" frameborder="0" style="overflow:hidden;height:100%;width:100%" height="100%" width="100%"></iframe>
				</div>

				<div class="row max-height" v-if="chartSlug == 'waste'">
					<iframe src="http://167.99.211.8:82#waste" frameborder="0" style="overflow:hidden;height:100%;width:100%" height="100%" width="100%"></iframe>
				</div>

				<div class="row max-height" v-if="chartSlug == 'co2'">
					<div class="col-lg-12" id="cluster_info">
						<line-chart
							:height="170"
							ref="environmental"
							:chartData="environmentalData"
							:options="options">
						</line-chart>
					</div>
				</div>

				<div class="row max-height" v-if="chartSlug == 'water'">
					<iframe src="http://167.99.211.8:82#water" frameborder="0" style="overflow:hidden;height:100%;width:100%" height="100%" width="100%"></iframe>
				</div>
			</template>
		</modal>
	</page>
</template>

<script>
import LineChart from '@/directives/charts/LineChart'
import TabPanel from '@/components/core/TabPanel'
import Modal from '@/components/core/Modal'
import Page from '@/components/core/Page'

export default {
	components: {
		Page,
		TabPanel,
		Modal,
		LineChart
	},

	data () {
		return {
			tabs: [
				{
					slug: 'client',
					name: 'Client',
					icon: 'fa fa-building-o'
				},
				{
					slug: 'order',
					name: 'Order',
					icon: 'fa fa-tag'
				},
				{
					slug: 'certificates',
					name: 'Metrics',
					icon: 'fa fa-chart-bar'
				}
			],

			certificates: [
				{
					logo: 'cert1'
				},
				{
					logo: 'cert2'
				},
				{
					logo: 'cert3'
				},
				{
					logo: 'cert4'
				},
				{
					logo: 'cert5'
				},
				{
					logo: 'cert6'
				}
			],

			clients: [
				{
					id: 1,
					logo: 'client1'
				},
				{
					id: 2,
					logo: 'client2'
				},
				{
					id: 3,
					logo: 'client3'
				},
				{
					id: 4,
					logo: 'client4'
				}
			],

			selectedClientId: null,

			selectedTab: {
				slug: 'client',
				name: 'Client',
				icon: 'fa fa-building-o'
			},

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
				}
			],

			orders: [
				{
					id: 10000045,
					description: 'T-shirt',
					date: '1/3/2019',
					checked: false
				},
				{
					id: 10000044,
					description: 'Skirt',
					date: '27/2/2019',
					checked: false
				},
				{
					id: 10000043,
					description: 'Dress',
					date: '26/2/2019',
					checked: false
				},
				{
					id: 10000042,
					description: 'Dress',
					date: '24/2/2019',
					checked: false
				},
				{
					id: 10000041,
					description: 'T-shirt',
					date: '20/2/2019',
					checked: false
				}
			],

			showChart: false,

			chartTitle: '',

			chartSlug: '',

			environmentalData: {
				labels: ['Raw material', 'Yarn', 'Fabric', 'Garment'],
				datasets: [
					{
						label: 'Water',
						yAxisID: 'A',
						yAxesGroup: 'A',
						backgroundColor: 'rgba(209,196,233,0.7)',

      					borderColor: 'rgba(106, 121, 221, 0.90)',

						pointBorderColor: '#6A79DD',
						fill: true,
						data: [450000, 337500, 130500, 70500]
					},
					{
						label: 'CO2',
						yAxesGroup: 'B',
						yAxisID: 'B',
						backgroundColor: 'rgba(126,87,194,0.9)',

      					borderColor: 'rgba(106, 121, 221, 0.90)',

						pointBorderColor: '#6A79DD',
						fill: true,
						data: [2250, 480, 300, 450]
					}
				]
			},

			options: {
				legend: {
					display: true
				},
				scales: {
					yAxes: [
						{
							id: 'A',
							scaleLabel: {
								display: true,
								labelString: 'Water (Litres)'
							},
							position: 'left',
							gridLines: {
								color: "rgba(106, 121, 221, 0.10)"
							}
						},
						{
							id: 'B',
							scaleLabel: {
								display: true,
								labelString: 'CO2 (Kg CO2-e)'
							},
							position: 'right',
							gridLines: {
								color: "rgba(210, 143, 99, 0.10)"
							},
							ticks: {max: 4000,min: 0}
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

	computed: {
	},

	methods: {
		selectClient (id) {
			this.selectedClientId = id
		},

		toggleFilter (filter) {
			filter.visible = !filter.visible
		},

		toggleSubFilter (subFilter) {
			subFilter.active = !subFilter.active
		},

		nextOrSave () {
			if (this.selectedTab.slug == 'client') {
				this.selectedTab = this.tabs[1]
			} else if (this.selectedTab.slug == 'order') {
				this.selectedTab = this.tabs[2]
			}
		},

		previous () {
			if (this.selectedTab.slug == 'order') {
				this.selectedTab = this.tabs[0]
			} else if (this.selectedTab.slug == 'certificates') {
				this.selectedTab = this.tabs[1]
			}
		},

		toggleCheck (event) {
			this.orders.forEach(order => {
				order.checked = event.currentTarget.checked
			})
		},

		openChart (title, slug) {
			this.chartTitle = title
			this.chartSlug = slug
			this.showChart = true

			if (slug == 'co2') {
				this.$nextTick(() => {
					this.$refs.environmental.renderChart(this.environmentalData, this.options)					
				})
			}
		},

		closeChart () {
			this.showChart = false
		}
	},

	created () {
	},

	mounted () {
		
	}
}
</script>
<style scoped>
	.selected-border {
		border-color: #6A79DD;
	}

	.uncolored-icon2 {
		color: #9ba7b338;
	}
</style>
<style>
	.trace .modal-xxl .modal-body {
		height: 650px !important;
	}
</style>
