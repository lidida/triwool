<template>
	<modal xl
		:show="show"
		:force="true"
		:title="createNewOrderTitle"
		:ok-text="'Save'"
		:ok-button-disabled="false"
		@close="closeCreateNewOrderModal">

		<template>
			<div class="row max-height">
				<tab-panel
				:tabs="tabs"
				:new-selected-tab="selectedTab"
				@selectTab="selectedTab = $event">
					<div v-if="selectedTab.slug == 'orders'"
						class="form-horizontal m-l-md">
						<div class="row">
							<div class="ibox">
								<div class="ibox-title" style="border-top: none;">
									<h5>1. Order Information</h5>
								</div>
								<div class="ibox-content">
									<div class="row">
										<div class="col-lg-6">
											<div class="form-group  row">
												<span class="col-sm-4 col-form-label m-t-sm">Order #</span>
												<div class="col-sm-8">
													<input type="text" value="10000045" class="form-control">
												</div>
											</div>
											<div class="form-group  row">
												<span class="col-sm-4 col-form-label m-t-sm">Description</span>
												<div class="col-sm-8">
													<input type="text" value="T-shirt" class="form-control">
												</div>
											</div>
											<div class="form-group  row">
												<span class="col-sm-4 col-form-label m-t-sm">Client</span>
												<div class="col-sm-8">
													<input type="text" value="Bershka" class="form-control">
												</div>
											</div>
											<div class="form-group  row">
												<span class="col-sm-4 col-form-label m-t-sm">Due Date</span>
												<div class="col-sm-8">
													<input type="text" value="02/05/2019" class="form-control">
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div class="row">
							<div class="ibox">
								<div class="ibox-title" style="border-top: none;">
									<h5>2. Technical specifications</h5>
								</div>
								<div class="ibox-content">
									<div class="row">
										<div class="col-lg-5">
											<div class="form-group row">
												<label class="col-sm-4 col-form-label m-t-sm">
													Composition
												</label>
											</div>
										</div>
										<div class="col-lg-5">
											<div class="form-group row">
												<label class="col-sm-4 col-form-label m-t-sm">
													Percentage
												</label>
											</div>
										</div>
									</div>
									<div
										class="row"
										v-for="material in materials"
										:key="material.id">
										<div class="col-lg-5">
											<div class="form-group row">
												<span class="col-sm-2 col-form-label m-t-sm">
													<nobr>Material {{ material.id }}</nobr>
												</span>

												<div class="col-sm-10">
													<select class="form-control m-b" name="account">
														<option>Cotton</option>
														<option>Polyester</option>
														<option>Nylon</option>
														<option>Wool</option>
													</select>
												</div>
											</div>
										</div>
										<div class="col-lg-5">
											<div class="form-group row">
												<input
													type="number"
													id="product_name"
													name="product_name"
													value="" placeholder="Percentage"
													class="form-control">
											</div>
										</div>
									</div>

									<a @click="addMaterial">Add material</a>

									<div class="row m-t-md">
										<div class="col-lg-2">
											Style
										</div>
										<div class="col-lg-2 order-style"
											@click="selectStyle('male')">
											<i class="fa fa-circle"
												v-if="selectedStyle=='male'"></i>
											<i class="fa fa-circle-thin"
												v-else></i>
											<span class="m-l-sm">Male</span>
										</div>
										<div class="col-lg-2 order-style"
											@click="selectStyle('unisex')">
											<i class="fa fa-circle"
												v-if="selectedStyle=='unisex'"></i>
											<i class="fa fa-circle-thin"
												v-else></i>
											<span class="m-l-sm">Unisex</span>
										</div>
										<div class="col-lg-2 order-style"
											@click="selectStyle('female')">
											<i class="fa fa-circle"
												v-if="selectedStyle=='female'"></i>
											<i class="fa fa-circle-thin"
												v-else></i>
											<span class="m-l-sm">Female</span>
										</div>
										<div class="col-lg-2 order-style"
											@click="selectStyle('kids')">
											<i class="fa fa-circle"
												v-if="selectedStyle=='kids'"></i>
											<i class="fa fa-circle-thin"
												v-else></i>
											<span class="m-l-sm">Kids</span>
										</div>
									</div>

									<div class="row m-t-md">
										<div class="col-lg-6">
											<div class="form-group  row">
												<span class="col-sm-4 col-form-label m-t-sm">Quantity</span>
												<div class="col-sm-8">
													<input type="text" value="100" class="form-control">
												</div>
											</div>

											<div class="form-group  row">
												<span class="col-sm-4 col-form-label m-t-sm">Color</span>
												<div class="col-sm-8">
													<input type="text" value="Red" class="form-control">
												</div>
											</div>

											<div class="form-group  row">
												<span class="col-sm-4 col-form-label m-t-sm">Chemicals</span>
												<div class="col-sm-8">
													<input type="text" value="" class="form-control">
												</div>
											</div>

											<div class="form-group  row">
												<span class="col-sm-4 col-form-label m-t-sm">Color</span>
												<div class="col-sm-8">
													<input type="text" value="" class="form-control">
												</div>
											</div>
										</div>
									</div>

									<div class="row">
										<div class="col-lg-5">
											<div class="form-group row">
												<label class="col-sm-4 col-form-label m-t-sm">
													Size
												</label>
											</div>
										</div>
									</div>

									<div
										class="row"
										v-for="(size, index) in sizes">
										<div class="col-lg-5">
											<div class="form-group row">
												<div class="col-sm-10">
													<select class="form-control m-b" name="account">
														<option>S</option>
														<option>M</option>
														<option>L</option>
														<option>XL</option>
													</select>
												</div>
											</div>
										</div>
										<div class="col-lg-5">
											<div class="form-group row">
												<input
													type="number"
													v-model="size.quantity"
													id="product_name"
													name="product_name"
													value=""
													placeholder="Quantity"
													class="form-control">
											</div>
										</div>
									</div>

									<a @click="addSize">Add size</a>

									<div class="row m-t-lg">
										<div class="col-lg-5">
											<div class="form-group row">
												<label class="col-sm-4 col-form-label m-t-lg">
													Certificates
												</label>
											</div>
										</div>
									</div>

									<div
										class="row">
										<div class="col-lg-6">
											<div class="row">
												<label class="col-sm-12 m-b-md">
													List of unselected certificates
												</label>
											</div>

											<div
												class="row">
												<ul v-if="unselectedCertificates.length" class="list-group">
													<li v-for="certificate in unselectedCertificates"
														:key="certificate.id"
														@click="certificate.selected = true"
														class="list-group-item"
														style="cursor: pointer;">
														{{ certificate.description }}
														<i class="fa fa-angle-right pull-right text-right">
														</i>
													</li>
												</ul>

												<div v-else style="margin-left: 30px; margin-right: 30px;">
													No results
												</div>
											</div>
										</div>
										<div class="col-lg-6">
											<div class="row">
												<label class="col-sm-12 m-b-md">
													List of selected certificates
												</label>
											</div>

											<div
												class="row">
												<ul v-if="selectedCertificates.length" class="list-group">
													<li v-for="certificate in selectedCertificates"
														:key="certificate.id"
														@click="certificate.selected = false"
														class="list-group-item"
														style="cursor: pointer;">
														<i class="fa fa-angle-left text-danger m-r-md">
														</i>

														{{ certificate.description }}
													</li>
												</ul>
												<div v-else style="margin-left: 30px; margin-right: 30px;">
													No results
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div
						v-if="selectedTab.slug == 'suppliers'"
						class="form-horizontal m-l-md">
						<div class="row">
							<div class="ibox">
								<div class="ibox-title" style="border-top: none;">
									<h5>1. Select stage of the production</h5>
								</div>
								<div class="v-wizard">
									<ol class="step-indicator">
										<li v-for="(step, index) in steps"
											:class="stepClass(index)"
											@click="toggleStep(index)">
											<div class="step">
												<img
													alt="image"
													class="img-fluid"
													style="margin-top: -3px;"
													height="30"
													:src="require('@/assets/' + step.logo + '.png')">
												<!--<i :class="[step.icon ? step.icon : 'fa fa-angle-right']"></i>-->
											</div>
											<div class="caption hidden-xs hidden-sm" v-text="step.title ? (index + 1) + '. ' + step.title : ''"></div>
										</li>
									</ol>
								</div>
							</div>
						</div>

						<div class="row">
							<div class="ibox">
								<div class="ibox-title" style="border-top: none; padding-left: -20px;">
									<h5>2. Choose one or multiple manufacturing suppliers</h5>
								</div>
								<div class="ibox-content">
									<div class="form-group row m-b-lg m-t-lg" style="padding-left: 150px;padding-right: 150px;">
										<div class="col-sm-12">
											<div class="input-group" style="display: flex;">
												<input type="text" class="form-control">
												<span class="input-group-append">
													<button type="button" class="btn btn-primary">Search</button>
												</span>
											</div>
										</div>
									</div>
									<div class="row">
										<table class="table table-striped">
											<thead>
												<tr>
													<th></th>
													<th>Company
														<i
															class="fa fa-sort m-l-sm"></i>
													</th>
													<th class="width: 30%;">Environmental Rank
														<i
															class="fa fa-sort  m-l-sm"></i>
													</th>
													<th>Production capacity
														<i
															class="fa fa-sort  m-l-sm"></i>
													</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>
														<input type="checkbox"/>
													</td>
													<td>
														<a
															@click="goToSupplier(1001)">
															ABB
														</a>
													</td>
													<td class="project-completion">
														<i class="fa fa-star" style="color: #6A79DD;"></i>
														<i class="fa fa-star m-l-md" style="color: #6A79DD;"></i>
														<i class="fa fa-star m-l-md" style="color: #6A79DD;"></i>
														<i class="fa fa-star m-l-md" style="color: #6A79DD;"></i>
														<i class="fa fa-star m-l-md" style="color: #6A79DD;"></i>
													</td>
													<td>400 tons</td>
												</tr>
												<tr>
													<td>
														<input type="checkbox"/>
													</td>
													<td>
														<a
															@click="goToSupplier(1001)">
															Tearfil
														</a>
													</td>
													<td class="project-completion">
														<i class="fa fa-star" style="color: #6A79DD;"></i>
														<i class="fa fa-star m-l-md" style="color: #6A79DD;"></i>
														<i class="fa fa-star m-l-md" style="color: #6A79DD;"></i>
													</td>
													<td>400 tons</td>
												</tr>
												<tr>
													<td>
														<input type="checkbox"/>
													</td>
													<td>
														<a
															@click="goToSupplier(1001)">
															Make
														</a>
													</td>
													<td class="project-completion">
															<i class="fa fa-star" style="color: #6A79DD;"></i>
															<i class="fa fa-star m-l-md" style="color: #6A79DD;"></i>
															<i class="fa fa-star m-l-md" style="color: #6A79DD;"></i>
															<i class="fa fa-star m-l-md" style="color: #6A79DD;"></i>
															<i class="fa fa-star m-l-md" style="color: #6A79DD;"></i>
													</td>
													<td>600 tons</td>
												</tr>
												<tr>
													<td>
														<input type="checkbox"/>
													</td>
													<td>
														<a
															@click="goToSupplier(1001)">
															Folte
														</a>
													</td>
													<td class="project-completion">
															<i class="fa fa-star" style="color: #6A79DD;"></i>
															<i class="fa fa-star m-l-md" style="color: #6A79DD;"></i>
															<i class="fa fa-star m-l-md" style="color: #6A79DD;"></i>
															<i class="fa fa-star m-l-md" style="color: #6A79DD;"></i>
													</td>
													<td>700 tons</td>
												</tr>
												<tr>
													<td>
														<input type="checkbox"/>
													</td>
													<td>
														<a
															@click="goToSupplier(1001)">
															Texleed
														</a>
													</td>
													<td class="project-completion">
															<i class="fa fa-star" style="color: #6A79DD;"></i>
															<i class="fa fa-star m-l-md" style="color: #6A79DD;"></i>
															<i class="fa fa-star m-l-md" style="color: #6A79DD;"></i>
															<i class="fa fa-star m-l-md" style="color: #6A79DD;"></i>
															<i class="fa fa-star m-l-md" style="color: #6A79DD;"></i>
													</td>
													<td>10 tons</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div
						v-if="selectedTab.slug == 'preview'">
						<div class="row">
							<div class="col-lg-12">
								<div class="ibox">
									<div class="ibox-title" style="border-top: none;">
										Environmental data
									</div>
									<div class="ibox-content">
										<order-details-content-other
											:pick-best="true"
											:environmental-data="environmentalData"
											@pick="pick"/>
									</div>

									<div class="ibox">
										<div class="ibox-title" style="border-top: none; padding-left: -20px;">
											<h5>Certificates</h5>
										</div>
										<div class="ibox-content">
											<div class="row">
												<div
													v-for="(certificate, index) in selectedCertificatesPreview"
													:key="index"
													class="col-lg-4">
													<div class="contact-box">
														<a class="row">
															<div class="col-4">
																<div class="text-center">
																	<img
																		alt="image"
																		class="rounded-circle m-t-xs img-fluid"
																		height="100"
																		:src="require('@/assets/' + certificate.logo + '.png')">
																</div>
															</div>
														</a>
														<div class="contact-box-footer">
															<span :class="certificate.statusClass"> {{ certificate.status }} </span>
															<br>
															<div class="m-t-xs btn-group m-t-md">
																<button
																	class="btn"
																	:class="certificate.class">
																	{{ certificate.expirityDate }}
																</button>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</tab-panel>
			</div>
		</template>

		<div			
			slot="footer">
			<button
				type="button"
				class="btn btn-w-m btn-danger"
				v-text="'Cancel'"
				@click="closeCreateNewOrderModal"/>

			<button
				v-if="selectedTab.slug == 'preview'"
				type="button"
				class="btn btn-w-m btn-success"
				v-text="'Generate NFC tag'"
				@click="openNFCTag"/>

			<button
				type="button"
				class="btn btn-w-m btn-primary"
				v-text="okText"
				@click="nextOrSave">

				<!--<i
					class="fa fa-fw fa-cog fa-spin"
					v-show="busy"/>-->
			</button>
		</div>

		<modal-old
			:show="showNFCTag"
			:force="true"
			:title="showNFCTagTitle"
			:ok-text="'Generate'"
			:ok-button-disabled="false"
			@close="closeNFCTag"
			@ok="closeNFCTag">

			<template>
				<small class="text-muted">The tag will include following information:</small>
				<br><br><br>
				<div class="row">
					<div class="feed-activity-list">
						<div
							v-for="nfcInformation in nfcTagInformations"
							:key="nfcInformation.id"
							class="feed-element">
							<div class="row">
								<div class="col-lg-2">
									<a href="#" class="float-left">
										<img alt="image" class="rounded-circle" :src="require('@/assets/' + nfcInformation.src + '.png')">
									</a>
								</div>
								<div class="col-lg-9">
									<div class="media-body ">
										<strong>{{ nfcInformation.title }}</strong> <br>
										<small class="text-muted">{{ nfcInformation.subTitle }}</small>
									</div>
								</div>
								<div class="col-lg-1">
									<i @click="removeNfcInformation(nfcInformation.id)"
										class="fa fa-trash text-danger"
										style="cursor: pointer;">
									</i>
								</div>
							</div>
						</div>
					</div>
				</div>
			</template>
		</modal-old>
	</modal>
</template>

<script>
import Modal from '@/components/core/Modal'
import TabPanel from '@/components/core/TabPanel'
import LineChart from '@/directives/charts/LineChart'
import ModalOld from '@/components/core/ModalOld'
import OrderDetailsContentOther from '@/components/orders/OrderDetailsContentOther'

export default {
	components: {
		Modal,
		TabPanel,
		LineChart,
		ModalOld,
		OrderDetailsContentOther
	},

	props: {
		show: {
			type: Boolean,
			required: true
		}
	},

	computed: {
		okText () {
			return this.selectedTab.slug == 'preview' ? 'Submit' : 'Next'
		},

		unselectedCertificates () {
			return this.certificates.filter(certificate => {
				return certificate.selected == false
			})
		},

		selectedCertificates () {
			return this.certificates.filter(certificate => {
				return certificate.selected == true
			})
		},

		showNFCTagTitle () {
			return 'NFS Tag: order #' + this.orderId
		}
	},

	data () {
		return {
			// showCreateNewOrderModal: false,

			orderId: 10000045,

			createNewOrderTitle: 'Create new order',

			materials: [
				{
					id: 1,
					percentage: 20
				},
				{
					id: 2,
					percentage: 30
				}
			],

			tabs: [
				{
					slug: 'orders',
					name: 'Order',
					icon: 'fa fa-shopping-cart'
				},
				{
					slug: 'suppliers',
					name: 'Suppliers',
					icon: 'fa fa-user-tag'
				},
				{
					slug: 'preview',
					name: 'Preview',
					icon: 'fa fa-list-alt'
				}
			],

			selectedTab: {
				slug: 'orders',
				name: 'Order',
				icon: 'fa fa-shopping-cart'
			},

			selectedStyle: null,

			sizes: [
				{
					id: 1,
					quantity: 20
				},
				{
					id: 2,
					quantity: 30
				}
			],

			steps: [
				{
					title: 'Raw material',
					icon: 'fa fa-tint',
					logo: 'thread-spool-02'
				},
				{
					title: 'Yarn',
					icon: 'fa fa-tint',
					logo: 'thread-spool-01'
				},
				{
					title: 'Fabric',
					icon: 'fa fa-tint',
					logo: 'thread-spool-03'
				},
				{
					title: 'Garment',
					icon: 'fa fa-tint',
					logo: 'thread-spool-04'
				}
			],

			selectedSteps: [
				3
			],

			designs: [
				{
					id: 1,
					description: 'T-shirt',
					visible: true
				},
				{
					id: 2,
					description: 'Skirt',
					visible: false
				},
				{
					id: 3,
					description: 'Sweatshirt',
					visible: false
				},
				{
					id: 4,
					description: 'Pants',
					visible: false
				},
				{
					id: 5,
					description: 'Socks',
					visible: true
				}
			],

			materials: [
				{
					id: 1,
					description: 'Cotton',
					visible: false
				},
				{
					id: 2,
					description: 'Wool',
					visible: false
				},
				{
					id: 3,
					description: 'Polyester',
					visible: true
				},
				{
					id: 4,
					description: 'Linen',
					visible: true
				},
				{
					id: 5,
					description: 'Acril',
					visible: true
				}
			],

			certificates: [
				{
					id: 1,
					description: 'BCI',
					visible: false,
					selected: false
				},
				{
					id: 2,
					description: 'Organic',
					visible: true,
					selected: false
				},
				{
					id: 3,
					description: 'EMAS',
					visible: true,
					selected: false
				},
				{
					id: 4,
					description: 'ISO',
					visible: false,
					selected: false
				},
				{
					id: 5,
					description: 'BIO',
					visible: false,
					selected: false
				}
			],

			selectedCertificatesPreview: [
				{
					logo: 'cert1',
					expirityDate: '08/07/2019',
					class: 'btn-warning',
					status: 'Should update soon',
					statusClass: 'badge badge-danger'
				},
				{
					logo: 'cert2',
					expirityDate: '05/12/2019',
					class: 'btn-primary',
					status: 'Up to date',
					statusClass: 'badge badge-success'
				},
				{
					logo: 'cert3',
					expirityDate: '23/01/2020',
					class: 'btn-primary',
					status: 'Up to date',
					statusClass: 'badge badge-success'
				}
			],

			pick1Data: {
				labels: ['Raw material', 'Yarn', 'Fabric', 'Garment'],
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

			pick2Data: {
				labels: ['Raw material', 'Yarn', 'Fabric', 'Garment'],
				datasets: [
					{
						label: 'Total:',
						backgroundColor: 'rgba(209,196,233,0.7)',

      					borderColor: 'rgba(106, 121, 221, 0.90)',

						pointBorderColor: '#6A79DD',
						fill: true,
						data: [100, 100, 50, 100]
					},
					{
						label: 'Total:',
						backgroundColor: 'rgba(126,87,194,0.9)',

      					borderColor: 'rgba(106, 121, 221, 0.90)',

						pointBorderColor: '#6A79DD',
						fill: true,
						data: [60, 200, 50, 10]
					}
				]
			},

			environmentalData: {
				labels: ['Raw material', 'Yarn', 'Fabric', 'Garment'],
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
				labels: ['Raw material', 'Yarn', 'Fabric', 'Dying and Finishing', 'Manufacturing'],
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
			},

			showNFCTag: false,

			nfcTagInformations: [
				{
					id: 1,
					src: 'img1',
					title: 'Garment ID',
					subTitle: '12345690'
				},
				{
					id: 2,
					src: 'img2',
					title: 'Brand',
					subTitle: 'Bershka'
				},
				{
					id: 3,
					src: 'img3',
					title: 'Country of Production',
					subTitle: 'Portugal'
				},
				{
					id: 4,
					src: 'img4',
					title: 'Style',
					subTitle: 'T-Shirt'
				},
				{
					id: 5,
					src: 'img5',
					title: 'Sex',
					subTitle: 'Male'
				},
				{
					id: 6,
					src: 'img6',
					title: 'Color',
					subTitle: 'Dark Blue'
				},
				{
					id: 7,
					src: 'img7',
					title: 'Fiber composition',
					subTitle: 'Cotton - 30%, Recycled polyester – 70%'
				}
			],

			/*certificates: [
				{
					id: 1,
					name: 'Name of the certificate 1'
				},
				{
					id: 2,
					name: 'Name of the certificate 2'
				},
				{
					id: 3,
					name: 'Name of the certificate 3'
				},
				{
					id: 4,
					name: 'Name of the certificate 4'
				},
				{
					id: 5,
					name: 'Name of the certificate 5'
				},
				{
					id: 6,
					name: 'Name of the certificate 6'
				}
			]*/
		}
	},

	methods: {
		pick (id) {
			if (id == 1) {
				this.environmentalData = this.pick1Data
			} else {
				this.environmentalData = this.pick2Data
			}

		},

		toggleFilter (filter) {
			filter.visible = !filter.visible
		},

		toggleSubFilter (subFilter) {
			subFilter.active = !subFilter.active
		},

		goToSupplier (supplierId) {
			this.$router.push('/suppliers/' + supplierId)
		},

		closeCreateNewOrderModal () {
			this.$emit('close')
			// this.showCreateNewOrderModal = false
		},

		addOrder () {
			this.showCreateNewOrderModal = true
		},

		addMaterial () {
			this.materials.push({
				id: this.materials.length + 1,
				percentage: 0
			})
		},

		selectStyle (style) {
			this.selectedStyle = style
		},

		addSize () {
			this.sizes.push({
				id: this.sizes.length + 1,
				quantity: 0
			})
		},

		nextOrSave () {
			if (this.selectedTab.slug == 'orders') {
				this.selectedTab = this.tabs[1]
			} else if (this.selectedTab.slug == 'suppliers') {
				this.selectedTab = this.tabs[2]
			} else {
				this.closeCreateNewOrderModal()
			}
		},

		stepClass (index) {
			if (this.selectedSteps.indexOf(index) > -1) {
				return 'selected-step'
			} else {
				return 'unselected-step'
			}
		},

		toggleStep (index) {
			let indexAux = this.selectedSteps.indexOf(index)

			if(indexAux > -1) {
				this.selectedSteps.splice(indexAux, 1)
			} else {
				this.selectedSteps.push(index)
			}
		},

		openNFCTag () {
			this.showNFCTag = true
		},

		closeNFCTag () {
			this.showNFCTag = false
		},

		removeNfcInformation (nfcId) {
			let nfcIndex = this.nfcTagInformations.findIndex(nfc => {
				return nfc.id == nfcId
			})

			this.nfcTagInformations.splice(nfcIndex, 1)
		}
	}
}
</script>

<style>
	.btn-primary {
    	background-color: #6A79DD ;
    	border-color: #6A79DD;
  	}

  	.btn-primary:hover {
    	background-color: #6172e1 !important;
    	border-color: #6172e1 !important;
	}

	.btn-primary:active {
    	background-color: #6172e1 !important;
    	border-color: #6172e1 !important;
	}

	.btn-primary:focus {
    	background-color: #6172e1 !important;
    	border-color: #6172e1 !important;
	}

	.btn-primary:visited {
    	background-color: #6172e1 !important;
    	border-color: #6172e1 !important;
  	}
</style>
