<template>
	<modal
		:show="show"
		:force="true"
		:title="inviteSupplierTitle"
		:ok-text="'Save'"
		:ok-button-disabled="false"
		@close="closeInviteSupplierModal">

		<template>
			<div class="row invite-supplier">
				<div class="ibox">
					<div class="ibox-title" style="border-top: none;">
						<h5>1. Supplier invite data</h5>
					</div>
					<div class="ibox-content">
						<div class="row">
							<div class="col-lg-12">
								<div class="form-group  row">
									<span class="col-sm-4 col-form-label m-t-sm">Name of the supplier</span>
									<div class="col-sm-8">
										<input type="text" class="form-control">
									</div>
								</div>
							</div>
						</div>

						<div class="row">
							<div class="col-lg-12">
								<div class="form-group  row">
									<span class="col-sm-4 col-form-label m-t-sm">Email</span>
									<div class="col-sm-8">
										<input type="text" class="form-control">
									</div>
								</div>
							</div>
						</div>

						<div class="row">
							<div class="col-lg-12">
								<div class="form-group  row">
									<span class="col-sm-4 col-form-label m-t-sm">Add a message</span>
									<div class="col-sm-8">
										<textarea id="message" class="form-control"></textarea>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</template>

		<div
			class="modal-footer"
			slot="footer">
			<button
				type="button"
				class="btn btn-w-m btn-danger"
				v-text="'Cancel'"
				@click="closeInviteSupplierModal"/>

			<button
				type="button"
				class="btn btn-w-m btn-primary"
				v-text="okText"
				@click="closeInviteSupplierModal">
			</button>
		</div>
	</modal>
</template>

<script>
import Modal from '@/components/core/Modal'

export default {
	components: {
		Modal
	},

	props: {
		show: {
			type: Boolean,
			required: true
		}
	},

	computed: {
		okText () {
			return 'Send'
		}
	},

	data () {
		return {
			inviteSupplierTitle: 'Supplier'
		}
	},

	methods: {
		closeInviteSupplierModal () {
			this.$emit('close')
		}
	}
}
</script>
