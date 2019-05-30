<template>
    <div v-show="show" :transition="transition">
        <div class="modal" @click.self="clickMask">
            <div class="modal-dialog" :class="modalClass">
                <div class="modal-content">
                    <!--Header-->
                    <div class="modal-header">
                        <slot name="header">
                            <a type="button" class="close" @click="cancel">x</a>
                            <h4 class="modal-title">
                                <slot name="title">
                                    {{title}}
                                </slot>
                            </h4>
                        </slot>
                    </div>
                    <!--Container-->
                    <div class="modal-body">
                        <slot></slot>
                    </div>
                    <!--Footer-->
                    <div class="modal-footer" v-if="footer">
                        <slot name="footer">
                            <button type="button" :class="cancelClass" @click="cancel">{{cancelText}}</button>
                            <button type="button" :disabled="okButtonDisabled || busy" :class="okClass" @click="ok">{{okText}}
                                <i class="fa fa-fw fa-gear fa-spin" v-show="busy"></i>
                            </button>
                        </slot>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal-backdrop in"></div>
    </div>
</template>

<script>
    import eventHub from '@/components/core/events.service'

    export default {
        props: {
            show: {
                type: Boolean,
                default: false
            },

            title: {
                type: String,
                default: 'Modal'
            },

            small: {
                type: Boolean,
                default: false
            },

            large: {
                type: Boolean,
                default: false
            },

            full: {
                type: Boolean,
                default: false
            },

            force: {
                type: Boolean,
                default: false
            },

            transition: {
                type: String,
                default: 'modal'
            },

            okText: {
                type: String,
                default: 'Ok'
            },

            cancelText: {
                type: String,
                default: 'Cancel'
            },

            okClass: {
                type: String,
                default: 'btn btn-w-m btn-success'
            },

            cancelClass: {
                type: String,
                default: 'btn btn-w-m btn-danger'
            },

            closeWhenOk: {
                type: Boolean,
                default: false
            },

            footer: {
                type: Boolean,
                default: true
            },

            events: {
                ok: {
                    type: String
                },

                cancel: {
                    type: String
                },

                close: {
                    type: String
                }
            },

            okButtonDisabled: {
                type: Boolean,
                default: false
            },

            busy: {
                type: Boolean,
                default: false
            }
        },

        data () {
            return {
                duration: null
            }
        },

        computed: {
            modalClass () {
                return {
                    'modal-lg': this.large,
                    'modal-sm': this.small,
                    'modal-full': this.full
                }
            }
        },

        created () {
            if (this.show) {
                document.body.className += ' modal-open'
            }
        },

        beforeDestroy () {
            document.body.className = document.body.className.replace(/\s?modal-open/, '')
        },

        watch: {
            show (value) {
                if (value) {
                    document.body.className += ' modal-open'
                } else {
                    if (!this.duration) {
                        this.duration = window.getComputedStyle(this.$el)['transition-duration'].replace('s', '') * 1000
                    }

                    window.setTimeout(() => {
                        document.body.className = document.body.className.replace(/\s?modal-open/, '')
                    }, this.duration || 0)
                }
            }
        },

        methods: {
            ok () {
                this.$emit('ok')                
            },
            cancel () {
                this.$emit('close')
            },
            clickMask () {
                if (!this.force) {
                    this.cancel()
                }
            }
        }
    }
</script>

<style scoped>
    .modal {
        display: block;
    }

    .modal-transition {
        transition: all .6s ease;
    }

    .modal-leave {
        border-radius: 1px !important;
    }

    .modal-transition .modal-dialog,
    .modal-transition .modal-backdrop {
        transition: all .5s ease;
    }

    .modal-enter .modal-dialog,
    .modal-leave .modal-dialog {
        opacity: 0;
        transform: translateY(-30%);
    }

    .modal-enter .modal-backdrop,
    .modal-leave .modal-backdrop {
        opacity: 0;
    }
</style>