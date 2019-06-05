<template>
	<div class="page">
		<div class="row border-bottom">
			<nav class="navbar navbar-static-top" role="navigation" style="margin-bottom: 0">
				<div class="col-lg-4">
					<div class="navbar-header">					
						<form role="search" class="navbar-form-custom" action="search_results.html">
							<div class="form-group search">
								<input 
									type="text" 
									placeholder="Type ID number of the order or name of the supplier..." 
									class="form-control search-input" 
									name="top-search" 
									id="top-search">
							</div>						
						</form>
					</div>
				</div>
				<div @click="goToHome()" class="col-lg-4" style="text-align: center; margin-top: -6px; cursor: pointer;">
					<h2>
						InTrace
					</h2>  
				</div>
				<div class="col-lg-4">
					<ul class="nav navbar-top-links navbar-right">
						<li
							v-if="mode == 'orders'">
							<a 
								
								@click="addOrder()">
								<i class="fa fa-plus"></i> Add order
							</a>
						</li>

						<li 
							class="dropdown"
							v-if="mode == 'suppliers'">
							<a class="dropdown-toggle count-info" data-toggle="dropdown" href="#">
								<i class="fa fa-sort-desc"></i> Add supplier
							</a>
							<ul class="dropdown-menu dropdown-alerts" style="width: 235px;">
								<li
									@click="inviteSupplierModal()"
									style="cursor: pointer">
									<a class="dropdown-item">
										<div>
											<i class="fa fa-envelope-o  m-r-sm"></i> 
											Invite supplier
										</div>
									</a>
								</li>
								<li class="dropdown-divider"></li>
								<li
									@click="addSupplierModal()"
									style="cursor: pointer">>
									<a class="dropdown-item">
										<div>
											<i class="fa fa-user-plus m-r-sm"></i> 
											Add supplier manually
										</div>
									</a>
								</li>
								<li class="dropdown-divider"></li>
								<li
									@click="supplierNetwork()"
									style="cursor: pointer">>
									<a class="dropdown-item">
										<div>
											<i class="fa fa-at  m-r-sm"></i> 
											Supplier network
										</div>
									</a>
								</li>
							</ul>
						</li>
						
						<li class="dropdown">
							<a class="dropdown-toggle count-info" data-toggle="dropdown" href="#">
								<i class="fa fa-bell"></i>  <span class="label label-primary">8</span>
							</a>
							<ul class="dropdown-menu dropdown-alerts" style="width: 300px;"> 
								<li>
									<a class="dropdown-item">
										<div>
											<i class="fa fa-envelope fa-fw"></i> You have 8 messages
											<span class="float-right text-muted small">4 minutes ago</span>
										</div>
									</a>
								</li>
							</ul>
						</li>

						<li>
							<img alt="image" class="rounded-circle m-l-md m-r-md" src="@/assets/img/profile_small.jpg">
						</li>

						<li>
							<a href="/">
								<i class="fa fa-sign-out"></i> Home
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</div>
		
		<div class="content">
			<slot></slot>
		</div>

		<div class="footer fixed">
			<div>
				Copyright Intrace © 2019
			</div>
		</div>

		<create-order-modal
			:show="showCreateNewOrderModal"
			@close="closeCreateNewOrderModal">
		</create-order-modal>

		<div class="invite-supplier">
			<invite-supplier-modal
				:show="showInviteSupplierModal"
				@close="closeInviteSupplierModal">
			</invite-supplier-modal>
		</div>

		<div class="add-supplier">
			<create-supplier-modal
				:show="showAddSupplierModal"
				@close="closeAddSupplierModal">
			</create-supplier-modal>
		</div>

		<div class="supplier-network">
			<modal
				xxl
				:show="showSupplierNetwork"
				:force="true"
				:title="'Supplier network'"
				:ok-text="'Save'"
				:footer="false"
				:ok-button-disabled="false"
				@close="closeSupplierNetwork">

				<template>
					<div class="row max-height">
						<iframe src="http://167.99.211.8:82#network" frameborder="0" style="overflow:hidden;height:100%;width:100%" height="100%" width="100%"></iframe>
					</div>
				</template>
			</modal>
		</div>
	</div>
</template>

<script>
import CreateOrderModal from '@/components/orders/CreateOrderModal'
import InviteSupplierModal from '@/components/suppliers/InviteSupplierModal'
import CreateSupplierModal from '@/components/suppliers/CreateSupplierModal'
import Modal from '@/components/core/Modal'

export default {
	components: {
		CreateOrderModal,
		InviteSupplierModal,
		CreateSupplierModal,
		Modal
	},

	props: {
		mode: {
			type: String,
			default: 'orders'
		}
	},

	data () {
		return {
			showCreateNewOrderModal: false,

			showInviteSupplierModal: false,

			showAddSupplierModal: false,

			showSupplierNetwork: false
		}
	},

	methods: {
		closeCreateNewOrderModal () {
			this.showCreateNewOrderModal = false
		},

		addOrder () {
			this.showCreateNewOrderModal = true
		},

		closeInviteSupplierModal () {
			this.showInviteSupplierModal = false
		},

		closeAddSupplierModal () {
			this.showAddSupplierModal = false
		},

		closeSupplierNetwork () {
			this.showSupplierNetwork = false
		},

		inviteSupplierModal () {
			this.showInviteSupplierModal = true
		},

		addSupplierModal () {
			this.showAddSupplierModal = true
		},

		goToHome () {
			this.$router.push("/")
		},

		supplierNetwork () {
			this.showSupplierNetwork = true
		}
	}
}
</script>
<style>
	.supplier-network .modal-body {
		height: 650px !important;
	}
</style>
