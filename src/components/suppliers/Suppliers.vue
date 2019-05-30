<template>
	<page
		class="suppliers"
		:mode="'suppliers'"
		@add-supplier="addSupplier()">
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
									<label class="col-form-label" for="product_name">Supplier</label>
									<input type="text" id="product_name" name="product_name" value="" placeholder="Project Name" class="form-control">
								</div>
							</div>
							<div class="col-sm-2">
								<div class="form-group">
									<label class="col-form-label" for="price">Stage</label>
									<input type="text" id="price" name="price" value="" placeholder="Name" class="form-control">
								</div>
							</div>
							<div class="col-sm-2">
								<div class="form-group">
									<label class="col-form-label" for="quantity">Ranking</label>
									<input type="text" id="quantity" name="quantity" value="" placeholder="Company" class="form-control">
								</div>
							</div>							
						</div>

						<div class="table-responsive">
							<table class="table table-striped">
								<thead>
									<tr>
										<th>Supplier
											<i
												class="fa fa-sort m-l-sm"></i>
										</th>
										<th>Stage
											<i
												class="fa fa-sort  m-l-sm"></i>
										</th>
										<th>Ranking
											<i
												class="fa fa-sort  m-l-sm"></i>
										</th>
										<th>Amount of Orders
											<i
												class="fa fa-sort  m-l-sm"></i>
										</th>
										<th>Compliance
											<i
												class="fa fa-sort  m-l-sm"></i>
										</th>
										<td>Contact
											<i
												class="fa fa-sort  m-l-sm"></i>
										</td>										
									</tr>
								</thead>
								<tbody>
									<tr
										v-for="supplier in suppliers"
										:key="supplier.id">
										<td>
											<a
												@click="goToSupplier(supplier.id)">
												{{ supplier.name }}
											</a>
										</td>
										<td>{{ supplier.stage }}</td>
										<td>{{ supplier.ranking }}</td>
										<td>{{ supplier.amountOfOrders }}</td>
										<td>{{ supplier.compliance }}</td>
										<td>{{ supplier.contact }}</td>
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
					description: 'Process',
					visible: true,
					subFilters: [
						{    
							id: 11,
							description: 'Garment',
							active: false
						},
						{
							id: 12,
							description: 'Ironing',
							active: true
						},
						{
							id: 13,
							description: 'Labeling',
							active: false
						},
						{
							id: 14,
							description: 'Dyeing',
							active: false
						},
						{
							id: 15,
							description: 'Stitching',
							active: false
						},
						{
							id: 16,
							description: 'Cutting',
							active: false
						}
					]
				},
				{
					id: 2,
					description: 'Material',
					visible: true,
					subFilters: [
						{ 
							id: 21,
							description: 'Cotton',
							active: false
						},
						{
							id: 22,
							description: 'Polyester',
							active: false
						}
					]
				},
				{
					id: 3,
					visible: true,
					description: 'Country',
					subFilters: [
						{
							id: 31,
							description: 'Portugal',
							active: false
						},
						{
							id: 32,
							description: 'Spain',
							active: false
						}
					]
				},
				{
					id: 4,
					visible: true,
					description: 'Certificates',
					subFilters: [
						{ 
							id: 41,
							description: 'Organic Cotton',
							active: false
						},
						{
							id: 42,
							description: 'BCI',
							active: false
						}
					]
				},
				{
					id: 5,
					visible: true,
					description: 'Production capacity',
					subFilters: [
						
					]
				},
				{
					id: 6,
					visible: true,
					description: 'Ranking',
					subFilters: [
						
					]
				}
			],

			suppliers: [
				{
					id: 1001,
					name: 'ATB',
					stage: 'Tier 3',
					ranking: 8,
					amountOfOrders: 20,
					compliance: '100%',
					contact: 'info@atb.com'
				},
				{
					id: 1002,
					name: 'Tearfill',
					stage: 'Tier 3',
					ranking: 9,
					amountOfOrders: 100,
					compliance: '100%',
					contact: 'info@tearfil.com'
				},
				{
					id: 1003,
					name: 'Cotton King',
					stage: 'Tier 1',
					ranking: 9,
					amountOfOrders: 20,
					compliance: '80%',
					contact: 'info@cottonking.com'
				},
				{
					id: 1004,
					name: 'Folte',
					stage: 'Tier 4',
					ranking: 10,
					amountOfOrders: 30,
					compliance: '70%',
					contact: 'folte@folte.com'
				},
				{
					id: 1005,
					name: 'Texleed',
					stage: 'Tier 4',
					ranking: 8,
					amountOfOrders: 100,
					compliance: '70%',
					contact: 'Texleed@texled.com'
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

		goToSupplier (supplierId) {
			this.$router.push('/suppliers/' + supplierId)
		}
	}
}
</script>
