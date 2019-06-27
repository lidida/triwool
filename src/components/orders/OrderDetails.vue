<template>
  <page class="order-details" :mode="'orders'">
    <div class="row order-details-content">
      <div class="row">
        <div class="col-lg-9">
          <div class="m-b-md order-title">
            <h2>
              <small>
                <a @click="$router.push('/orders')">Orders</a>
              </small> /
              <a>{{ orderId }}</a>
            </h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-3">
          <div class="row">
            <div class="col-lg-12">
              <div class="ibox">
                <div class="ibox-title">
                  <i class="fa fa-user-plus"></i> Suppliers
                  <span class="pull-right">2</span>
                </div>
                <div class="ibox-content">
                  <div class="row">
                    <div class="col-lg-3">
                      <div class="supplier">
                        <button class="btn btn-default btn-circle btn-outline" type="button">
                          <i class="fa fa-user"></i>
                        </button>
                        <span>Fabric</span>
                      </div>
                    </div>

                    <div class="col-lg-3">
                      <div class="supplier">
                        <button class="btn btn-default btn-circle btn-outline" type="button">
                          <i class="fa fa-user"></i>
                        </button>
                        <span>Texworld</span>
                      </div>
                    </div>
                  </div>
                </div>

                <!--<div class="m-t-sm m-b-md order-title" style="text-align: center;">
									<span
										style="cursor: pointer;"
										@click="openNFCTag()">
										<i class="fa fa-rss"></i>
										<u class="m-l-sm">Generate NFC Tag</u>
									</span>
                </div>-->
              </div>
            </div>

            <div class="col-lg-12">
              <div class="ibox">
                <div class="ibox-title">
                  <i class="fa fa-user-plus"></i> Order Information
                </div>
                <div class="ibox-content">
                  <div class="row mb-0">
                    <div class="col-lg-5">
                      <dt>Brand:</dt>
                    </div>
                    <div class="col-lg-7">
                      <dd>TextileCo</dd>
                    </div>
                  </div>
                  <div class="row mb-0 m-t-sm">
                    <div class="col-lg-5">
                      <dt>Country:</dt>
                    </div>
                    <div class="col-lg-7">
                      <dd>Portugal</dd>
                    </div>
                  </div>
                  <div class="row mb-0 m-t-sm">
                    <div class="col-lg-5">
                      <dt>Style:</dt>
                    </div>
                    <div class="col-lg-7">
                      <dd>T-shirt</dd>
                    </div>
                  </div>
                  <div class="row mb-0 m-t-sm">
                    <div class="col-lg-5">
                      <dt>Sex:</dt>
                    </div>
                    <div class="col-lg-7">
                      <dd>Male</dd>
                    </div>
                  </div>
                  <div class="row mb-0 m-t-sm">
                    <div class="col-lg-5">
                      <dt>Color:</dt>
                    </div>
                    <div class="col-lg-7">
                      <dd>Dark blue</dd>
                    </div>
                  </div>
                  <div class="row mb-0 m-t-sm">
                    <div class="col-lg-5">
                      <dt>Fiber:</dt>
                    </div>
                    <div class="col-lg-7">
                      <dd>Cotton 100%</dd>
                    </div>
                  </div>
                  <div class="row mb-0 m-t-sm">
                    <div class="col-lg-5">
                      <dt>Chemical dyes:</dt>
                    </div>
                    <div class="col-lg-7">
                      <dd>Acid, solvent</dd>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-9">
          <div class="ibox">
            <div class="ibox-title" style="border-top: none;">
              <h5>Environmental data</h5>

              <div class="ibox-tools">
                <a class="collapse-link" href>
                  <i class="fa fa-pencil"></i>
                </a>
              </div>
            </div>

            <div class="ibox-content">
              <order-details-content
                :pick-best="true"
                :environmental-data="environmentalData"
                @pick="pick"
              />
            </div>
          </div>

          <div class="ibox">
            <div class="ibox-title" style="border-top: none; padding-left: -20px;">
              <h5>Certificates</h5>
            </div>
            <div class="ibox-content">
              <div class="row">
                <div v-for="(certificate, index) in certificates" :key="index" class="col-lg-4">
                  <div class="contact-box">
                    <a class="row">
                      <div class="col-4">
                        <div class="text-center">
                          <img
                            alt="image"
                            class="rounded-circle m-t-xs img-fluid"
                            height="100"
                            :src="require('@/assets/' + certificate.logo + '.png')"
                          >
                        </div>
                      </div>
                    </a>
                    <div class="contact-box-footer">
                      <span :class="certificate.statusClass">{{ certificate.status }}</span>
                      <br>
                      <div class="m-t-xs btn-group m-t-md">
                        <button
                          class="btn"
                          :class="certificate.class"
                        >{{ certificate.expirityDate }}</button>
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

    <modal
      :show="showNFCTag"
      :force="true"
      :title="showNFCTagTitle"
      :ok-text="'Generate'"
      :ok-button-disabled="false"
      @close="closeNFCTag"
    >
      <template>
        <h3>NFC Tag: order # {{orderId}}</h3>

        <small class="text-muted">The tag will include following information:</small>
        <br>
        <br>
        <br>
        <div class="row">
          <div class="feed-activity-list">
            <div
              v-for="nfcInformation in nfcTagInformations"
              :key="nfcInformation.id"
              class="feed-element"
            >
              <div class="row">
                <div class="col-lg-2">
                  <a href="#" class="float-left">
                    <img
                      alt="image"
                      class="rounded-circle"
                      :src="require('@/assets/' + nfcInformation.src + '.png')"
                    >
                  </a>
                </div>
                <div class="col-lg-9">
                  <div class="media-body">
                    <strong>{{ nfcInformation.title }}</strong>
                    <br>
                    <small class="text-muted">{{ nfcInformation.subTitle }}</small>
                  </div>
                </div>
                <div class="col-lg-1">
                  <i
                    @click="removeNfcInformation(nfcInformation.id)"
                    class="fa fa-trash text-danger"
                    style="cursor: pointer;"
                  ></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </modal>
  </page>
</template>

<script>
import LineChart from "@/directives/charts/LineChart";
import Modal from "@/components/core/Modal";
import Page from "@/components/core/Page";
import Img1 from "@/assets/img1.png";
import OrderDetailsContent from "@/components/orders/OrderDetailsContent";

export default {
  components: {
    Page,
    LineChart,
    Modal,
    OrderDetailsContent
  },

  data() {
    return {
      orderId: null,

      showNFCTag: false,

      nfcTagInformations: [
        {
          id: 1,
          src: "img1",
          title: "Garment ID",
          subTitle: "12345690"
        },
        {
          id: 2,
          src: "img2",
          title: "Brand",
          subTitle: "Bershka"
        },
        {
          id: 3,
          src: "img3",
          title: "Country of Production",
          subTitle: "Portugal"
        },
        {
          id: 4,
          src: "img4",
          title: "Style",
          subTitle: "T-Shirt"
        },
        {
          id: 5,
          src: "img5",
          title: "Sex",
          subTitle: "Male"
        },
        {
          id: 6,
          src: "img6",
          title: "Color",
          subTitle: "Dark Blue"
        },
        {
          id: 7,
          src: "img7",
          title: "Fiber composition",
          subTitle: "Cotton - 30%, Recycled polyester – 70%"
        }
      ],

      certificates: [
        {
          logo: "cert1",
          expirityDate: "08/07/2019",
          class: "btn-warning",
          status: "Should update soon",
          statusClass: "badge badge-danger"
        },
        {
          logo: "cert2",
          expirityDate: "05/12/2019",
          class: "btn-primary",
          status: "Up to date",
          statusClass: "badge badge-success"
        },
        {
          logo: "cert3",
          expirityDate: "23/01/2020",
          class: "btn-primary",
          status: "Up to date",
          statusClass: "badge badge-success"
        }
      ],

      pick1Data: {
        labels: ["Raw material", "Yarn", "Fabric", "Garment"],
        datasets: [
          {
            label: "Water",
            yAxisID: "A",
            yAxesGroup: "A",
            backgroundColor: "rgba(209,196,233,0.7)",

            borderColor: "rgba(106, 121, 221, 0.90)",

            pointBorderColor: "#6A79DD",
            fill: true,
            data: [450000, 337500, 130500, 70500]
          },
          {
            label: "CO2",
            yAxesGroup: "B",
            yAxisID: "B",
            backgroundColor: "rgba(126,87,194,0.9)",

            borderColor: "rgba(106, 121, 221, 0.90)",

            pointBorderColor: "#6A79DD",
            fill: true,
            data: [2250, 480, 300, 450]
          }
        ]
      },

      pick2Data: {
        labels: ["Raw material", "Yarn", "Fabric", "Garment"],
        datasets: [
          {
            label: "Water",
            yAxisID: "A",
            yAxesGroup: "A",
            backgroundColor: "rgba(209,196,233,0.7)",
            borderColor: "rgba(106, 121, 221, 0.90)",
            pointBorderColor: "#6A79DD",
            fill: true,
            data: [370000, 300000, 128000, 60000]
          },
          {
            label: "CO2",
            yAxesGroup: "B",
            yAxisID: "B",
            backgroundColor: "rgba(126,87,194,0.9)",
            borderColor: "rgba(106, 121, 221, 0.90)",
            pointBorderColor: "#6A79DD",
            fill: true,
            data: [2100, 400, 270, 350]
          }
        ]
      },

      environmentalData: {
        labels: ["Raw material", "Yarn", "Fabric", "Garment"],
        datasets: [
          {
            label: "Water",
            yAxisID: "A",
            yAxesGroup: "A",
            backgroundColor: "rgba(209,196,233,0.7)",

            borderColor: "rgba(106, 121, 221, 0.90)",

            pointBorderColor: "#6A79DD",
            fill: true,
            data: [450000, 337500, 130500, 70500]
          },
          {
            label: "CO2",
            yAxesGroup: "B",
            yAxisID: "B",
            backgroundColor: "rgba(126,87,194,0.9)",

            borderColor: "rgba(106, 121, 221, 0.90)",

            pointBorderColor: "#6A79DD",
            fill: true,
            data: [2250, 480, 300, 450]
          }
        ]
      }
    };
  },

  computed: {
    showNFCTagTitle() {
      return "NFC Tag: order #" + this.orderId;
    }
  },

  methods: {
    openNFCTag() {
      this.showNFCTag = true;
    },

    closeNFCTag() {
      this.showNFCTag = false;
    },

    removeNfcInformation(nfcId) {
      let nfcIndex = this.nfcTagInformations.findIndex(nfc => {
        return nfc.id == nfcId;
      });

      this.nfcTagInformations.splice(nfcIndex, 1);
    },

    pick(id) {
      if (id == 1) {
        this.environmentalData = this.pick1Data;
      } else {
        this.environmentalData = this.pick2Data;
      }
    }
  },

  created() {
    this.orderId = this.$route.params.id;
  }
};
</script>
