<template>
  <page class="order-details" :mode="'suppliers'">
    <div class="row order-details-content">
      <div class="row">
        <div class="col-lg-9">
          <div class="m-b-md order-title">
            <h2>
              <small>
                <a @click="$router.push('/suppliers')">Suppliers</a>
              </small> /
              <a>{{ selectedSupplier.name }}</a>
            </h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-3">
          <div class="ibox">
            <div class="ibox-content">
              <div class="row">
                <div class="contact-box">
                  <a class="row">
                    <div class="col-4">
                      <div class="text-center">
                        <img
                          alt="image"
                          class="rounded-circle m-t-xs img-fluid"
                          height="100"
                          :src="require('@/assets/' + selectedSupplier.logo + '.png')"
                        >
                      </div>
                    </div>
                  </a>
                  <div class="contact-box-footer">
                    <div class="row">
                      <div class="col-lg-12">
                        <dl class="row mb-0">
                          <div class="col-sm-4 text-sm-right">
                            <dt>Name:</dt>
                          </div>
                          <div class="col-sm-8 text-sm-left">
                            <dd class="mb-1">{{ selectedSupplier.name }}</dd>
                          </div>
                        </dl>
                        <dl class="row mb-0">
                          <div class="col-sm-4 text-sm-right">
                            <dt>Email:</dt>
                          </div>
                          <div class="col-sm-8 text-sm-left">
                            <dd class="mb-1">{{ selectedSupplier.email }}</dd>
                          </div>
                        </dl>
                        <dl class="row mb-0">
                          <div class="col-sm-4 text-sm-right">
                            <dt>Website:</dt>
                          </div>
                          <div class="col-sm-8 text-sm-left">
                            <dd class="mb-1">{{ selectedSupplier.website }}</dd>
                          </div>
                        </dl>
                        <dl class="row mb-0">
                          <div class="col-sm-4 text-sm-right">
                            <dt>Tel:</dt>
                          </div>
                          <div class="col-sm-8 text-sm-left">
                            <dd class="mb-1">{{ selectedSupplier.phone }}</dd>
                          </div>
                        </dl>
                        <dl class="row mb-0">
                          <div class="col-sm-4 text-sm-right">
                            <dt>Country:</dt>
                          </div>
                          <div class="col-sm-8 text-sm-left">
                            <dd class="mb-1">{{ selectedSupplier.country }}</dd>
                          </div>
                        </dl>
                        <dl class="row mb-0">
                          <div class="col-sm-4 text-sm-right">
                            <dt>Employees:</dt>
                          </div>
                          <div class="col-sm-8 text-sm-left">
                            <dd class="mb-1">{{ selectedSupplier.employees }}</dd>
                          </div>
                        </dl>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="ibox">
            <div class="ibox-content">
              <div class="row">
                <div class="contact-box">
                  <a class="row">
                    <div class="col-4">
                      <div class="text-center">
                        <h3>Orders</h3>
                        <br>
                        <span @click="goToOrder(1000045)">1000045</span>
                        <br>
                        <span @click="goToOrder(1000020)">1000020</span>
                        <br>
                        <span @click="goToOrder(1000018)">1000018</span>
                        <br>
                        <span @click="goToOrder(1000017)">1000017</span>
                        <br>
                        <a>
                          Show more..
                          <i class="fa fa-sort-down m-l-sm m-t-sm"></i>
                        </a>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-9">
          <div class="ibox">
            <div class="ibox-title">{{ selectedSupplier.name }}</div>
            <div class="ibox-content">
              <!--<div class="row">
								<div class="col-lg-4">
									<div class="contact-box" style="background-color: #9ba7b338">
										<a class="row">
											<div class="col-4">
												<div class="text-center">
													<h3>Production</h3>
													<img
														alt="image"
														class="rounded-circle m-t-xs img-fluid"
														height="100"
														:src="require('@/assets/pdr.png')">
														<br>
													<span>Yarn production</span>
												</div>
											</div>
										</a>
									</div>
								</div>
								<div class="col-lg-4">
									<div class="contact-box" style="background-color: #9ba7b338; height: 230px;">
										<a class="row">
											<div class="col-4">
												<div class="text-center">
													<h3>Materials</h3>
													<br>
													<span>Cotton</span><br>
													<span>Polyester</span><br>
													<span>Nylon</span><br>
													<span>Wool</span><br>
													<a>Show more..<i class="fa fa-sort-down m-l-sm m-t-sm"></i></a>
												</div>
											</div>
										</a>
									</div>
								</div>
								<div class="col-lg-4">
									<div class="contact-box" style="background-color: #9ba7b338; height: 230px;">
										<a class="row">
											<div class="col-4">
												<div class="text-center">
													<h3>Orders</h3>
													<br>
													<span>1000045</span><br>
													<span>1000020</span><br>
													<span>1000018</span><br>
													<span>1000017</span><br>
													<a>Show more..<i class="fa fa-sort-down m-l-sm m-t-sm"></i></a>
												</div>
											</div>
										</a>
									</div>
								</div>
              </div>-->

              <order-details-content
                :environmental-data="environmentalData"
                :pick-year="true"
                @pick-year="pickYear"
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
  </page>
</template>

<script>
import Page from "@/components/core/Page";
import OrderDetailsContent from "@/components/orders/OrderDetailsContent";

export default {
  components: {
    Page,
    OrderDetailsContent
  },

  data() {
    return {
      supplierId: null,

      suppliers: [
        {
          id: 1001,
          name: "ATB",
          stage: "Tier 3",
          logo: "atb",
          ranking: 8,
          amountOfOrders: 20,
          compliance: "100%",
          phone: "--",
          email: "info@atb.com",
          website: "http://www.atb.pt/",
          country: "Portugal",
          employees: 210
        },
        {
          id: 1002,
          name: "Tearfil",
          stage: "Tier 3",
          logo: "tearfil",
          ranking: 9,
          amountOfOrders: 100,
          compliance: "100%",
          phone: "--",
          email: "info@tearfil.com",
          website: "http://www.tearfil.pt",
          country: "Portugal",
          employees: 210
        },
        {
          id: 1003,
          name: "Cotton King",
          stage: "Tier 1",
          logo: "coton",
          ranking: 9,
          amountOfOrders: 20,
          compliance: "80%",
          phone: "--",
          email: "info@cottonking.com",
          website: "https://www.cottonking.com/",
          country: "Portugal",
          employees: 210
        },
        {
          id: 1004,
          name: "Folte",
          stage: "Tier 4",
          logo: "",
          ranking: 10,
          amountOfOrders: 30,
          compliance: "70%",
          phone: "--",
          email: "folte@folte.com",
          website: "--",
          country: "Portugal",
          employees: 210
        },
        {
          id: 1005,
          name: "Texleed",
          stage: "Tier 4",
          logo: "",
          ranking: 8,
          amountOfOrders: 100,
          compliance: "70%",
          phone: "--",
          email: "texleed@texleed.com",
          website: "--",
          country: "Portugal",
          employees: 210
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

      selectedSupplier: null,

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
            data: [2000, 1607, 621, 336]
          },
          {
            label: "CO2",
            yAxesGroup: "B",
            yAxisID: "B",
            backgroundColor: "rgba(126,87,194,0.9)",
            borderColor: "rgba(106, 121, 221, 0.90)",
            pointBorderColor: "#6A79DD",
            fill: true,
            data: [11, 2, 1, 2]
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
            data: [1800, 2000, 820, 290]
          },
          {
            label: "CO2",
            yAxesGroup: "B",
            yAxisID: "B",
            backgroundColor: "rgba(126,87,194,0.9)",

            borderColor: "rgba(106, 121, 221, 0.90)",

            pointBorderColor: "#6A79DD",
            fill: true,
            data: [10, 3, 4, 2]
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
            data: [2143, 1607, 621, 336]
          },
          {
            label: "CO2",
            yAxesGroup: "B",
            yAxisID: "B",
            backgroundColor: "rgba(126,87,194,0.9)",

            borderColor: "rgba(106, 121, 221, 0.90)",

            pointBorderColor: "#6A79DD",
            fill: true,
            data: [11, 2, 1, 2]
          }
        ]
      }
    };
  },

  computed: {},

  methods: {
    goToOrder(orderId) {
      this.$router.push("/orders/" + orderId);
    },

    pickYear(id) {
      if (id == 3) {
        this.environmentalData = this.pick1Data;
      } else {
        this.environmentalData = this.pick2Data;
      }
    }
  },

  created() {
    this.supplierId = this.$route.params.id;
    this.selectedSupplier = this.suppliers.find(supplier => {
      return supplier.id == this.supplierId;
    });
  }
};
</script>
<style scoped>
.contact-box {
  border: none;
}
</style>
