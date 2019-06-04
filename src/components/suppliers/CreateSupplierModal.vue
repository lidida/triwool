<template>
	<modal xl
		:show="show"
		:force="true"
		:title="createNewSupplierTitle"
		:ok-text="'Save'"
		:ok-button-disabled="false"
		@close="closeCreateNewSupplierModal">

		<template>
			<div class="row max-height">
				<tab-panel
				:tabs="tabs"
				:new-selected-tab="selectedTab"
				@selectTab="selectedTab = $event">
					<div v-if="selectedTab.slug == 'general'"
						class="form-horizontal m-l-md">
						<div class="row">
							<div class="ibox">
								<div class="ibox-title" style="border-top: none;">
									<h5>1. Contact information</h5>
								</div>
								<div class="ibox-content">
									<div class="col-lg-6">
										<div class="form-group row">
											<div class="col-lg-4">
												<button
													@click="$refs.uploadPicture.click()"
													class="btn btn-w-m btn-primary m-r-md">
													Upload a logo..
												</button>
											</div>

											<div class="col-lg-2">
												<img :src="supplier.picture" class="img-circle img-width-md"/>
												<input
													style="display: none;"
													type="file"
													ref="uploadPicture"
													@change="uploadPicture" />
											</div>
										</div>
										<hr>
										<div class="form-group  row">
											<span class="col-sm-4 col-form-label m-t-sm">Name</span>
											<div class="col-sm-8">
												<input type="text" value="Tearfill" class="form-control">
											</div>
										</div>
										<div class="form-group  row">
											<span class="col-sm-4 col-form-label m-t-sm">Email</span>
											<div class="col-sm-8">
												<input type="text" value="user1@triwool.com" class="form-control">
											</div>
										</div>
										<div class="form-group  row">
											<span class="col-sm-4 col-form-label m-t-sm">Website</span>
											<div class="col-sm-8">
												<input type="text" value="http://www.tearfil.pt" class="form-control">
											</div>
										</div>
										<div class="form-group  row">
											<span class="col-sm-4 col-form-label m-t-sm">Tel num</span>
											<div class="col-sm-8">
												<input type="text" value="222617272" class="form-control">
											</div>
										</div>
										<div class="form-group  row">
											<span class="col-sm-4 col-form-label m-t-sm">Address</span>
											<div class="col-sm-8">
												<input type="text" value="Avenida Comend Joaquim A Freitas Morª Cónegos, 4815-270 MOREIRA DE CÓNEGOS" class="form-control">
											</div>
										</div>
										<div class="form-group  row">
											<span class="col-sm-4 col-form-label m-t-sm">Country</span>
											<div class="col-sm-8">
												<input type="text" value="Portugal" class="form-control">
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div
						v-if="selectedTab.slug == 'technical'"
						class="form-horizontal m-l-md">
						<div class="row">
							<div class="ibox">
								<div class="ibox-title" style="border-top: none;">
									<h5>1. Production</h5>
								</div>
								<div class="ibox-content">
									<div class="col-lg-6">
										<div class="form-group  row">
											<span class="col-sm-4 col-form-label m-t-sm">Num of employees</span>
											<div class="col-sm-8">
												<input type="text" value="120" class="form-control">
											</div>
										</div>
										<div class="form-group  row">
											<span class="col-sm-4 col-form-label m-t-sm">Production capacity</span>
											<div class="col-sm-8">
												<input type="text" value="1212" class="form-control">
											</div>
										</div>
										<div class="form-group  row">
											<span class="col-sm-4 col-form-label m-t-sm">Stage of production</span>
											<div class="col-sm-8">
												<select class="form-control m-b" name="account">
													<option>Raw material</option>
													<option>Yarn</option>
													<option>Fabric</option>
													<option>Dying and Finishing</option>
													<option>Manufactoring</option>
												</select>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="ibox">
								<div class="ibox-title" style="border-top: none; padding-left: -20px;">
									<h5>2. Materials</h5>
								</div>
								<div class="ibox-content">
									<div class="row m-r-lg m-l-lg">
										<div
											class="row"
											v-for="material in materials"
											:key="material.id">
											<div class="col-lg-6">
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
										</div>

										<a @click="addMaterial">Add material</a>
									</div>
									<div class="col-lg-6 m-t-lg">
										<div class="form-group  row">
											<span class="col-sm-4 col-form-label m-t-sm">Water usage per month</span>
											<div class="col-sm-8">
												<input type="text" value="" class="form-control">
											</div>
										</div>
										<div class="form-group  row">
											<span class="col-sm-4 col-form-label m-t-sm">Energy usage per month</span>
											<div class="col-sm-8">
												<input type="text" value="" class="form-control">
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div
						v-if="selectedTab.slug == 'certificates'">
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
													<a class="row">
														<div class="col-4">
															<div class="text-center">
																<img
																	alt="image"
																	class="rounded-circle m-t-xs img-fluid"
																	height="100"
																	:src="require('@/assets/' + certificate.logo + '.png')">
																<div class="m-t-xs font-bold"><a>Upload pdf</a></div>
															</div>
														</div>
													</a>
													<div class="contact-box-footer">
														<div class="m-t-xs btn-group">
															<button
																class="btn btn-primary">
																Expiry date
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

					<div
						v-if="selectedTab.slug == 'preview'">
						<div class="row">
							<div class="col-lg-12">
								<div class="ibox">
									<div class="ibox-content">										
										<order-details-content
											:environmental-data="environmentalData"/>
									</div>
								</div>

								<div class="ibox">
									<div class="ibox-title" style="border-top: none; padding-left: -20px;">
										<h5>Certificates</h5>
									</div>
									<div class="ibox-content">
										<div class="row">
											<div
												v-for="(certificate, index) in selectedCertificates"
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
				</tab-panel>
			</div>
		</template>

		<div
			class="modal-footer"
			slot="footer">
			<button
				type="button"
				class="btn btn-w-m btn-danger"
				v-text="'Cancel'"
				@click="closeCreateNewSupplierModal"/>

			<button
				type="button"
				class="btn btn-w-m btn-primary"
				v-text="okText"
				@click="nextOrSave">
			</button>
		</div>
	</modal>
</template>

<script>
import Modal from '@/components/core/Modal'
import TabPanel from '@/components/core/TabPanel'
import LineChart from '@/directives/charts/LineChart'
import OrderDetailsContent from '@/components/orders/OrderDetailsContent'

export default {
	components: {
		Modal,
		TabPanel,
		LineChart,
		OrderDetailsContent
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
		}
	},

	data () {
		return {
			createNewSupplierTitle: 'Create supplier',

			tabs: [
				{
					slug: 'general',
					name: 'General',
					icon: 'fa fa-building-o'
				},
				{
					slug: 'technical',
					name: 'Technical',
					icon: 'fa fa-wrench'
				},
				{
					slug: 'certificates',
					name: 'Certificates',
					icon: 'fa fa-passport'
				},
				{
					slug: 'preview',
					name: 'Preview',
					icon: 'fa fa-list-alt'
				}
			],

			selectedTab: {
				slug: 'general',
				name: 'General',
				icon: 'fa fa-building-o'
			},

			supplier: {
				picture: null
			},

			materials: [
				{
					id: 1,
					description: 'Cotton',
					visible: false
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

			selectedCertificates: [
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
			}
		}
	},

	methods: {
		uploadPicture () {
			var self = this

			let files = self.$refs.uploadPicture.files

			// Get base64
			let reader = new FileReader()

			reader.readAsDataURL(files[0])

			reader.onload = () => {
				self.supplier.picture = reader.result
			}
		},

		closeCreateNewSupplierModal () {
			this.$emit('close')
		},

		nextOrSave () {
			if (this.selectedTab.slug == 'general') {
				this.selectedTab = this.tabs[1]
			} else if (this.selectedTab.slug == 'technical') {
				this.selectedTab = this.tabs[2]
			} else if (this.selectedTab.slug == 'certificates') {
				this.selectedTab = this.tabs[3]
			} else {
				this.closeCreateNewSupplierModal()
				this.$router.push('/suppliers/1001')
			}
		},

		addMaterial () {
			this.materials.push (
				{
					id: this.materials.length + 1,
					visible: false
				}
			)
		}
	}
}
</script>
<style>
	.img-width-md {
        width: 65px;
        height: 65px;
    }
</style>
