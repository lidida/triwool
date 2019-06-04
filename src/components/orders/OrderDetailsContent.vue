<template>
  <div>
    <div class="row">
      <div class="col-lg-4">
        <div class="contact-box">
          <a class="row">
            <div class="col-4">
              <div class="text-center">
                <img
                  alt="image"
                  class="rounded-circle m-t-xs img-fluid"
                  height="100"
                  src="@/assets/orderd1.png"
                >
                <div class="m-t-xs font-bold">Water</div>
              </div>
            </div>
            <div class="col-8" style="text-align: center;">
              <span class="badge badge-default m-t-sm m-b-sm">
                <strong>
                  <a>Know more</a>
                </strong>
              </span>
            </div>
          </a>
          <div class="contact-box-footer">
            <div class="m-t-xs btn-group">
              <span class="badge badge-primary m-t-sm m-b-sm">
                <strong v-if="selectedChart == 1">988 500 Litres</strong>
                <strong v-if="selectedChart == 2">858 000 Litres</strong>
                <strong v-if="selectedChart == 3">4 707 Litres</strong>
                <strong v-if="selectedChart == 4">4 910 Litres</strong>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="contact-box">
          <a class="row">
            <div class="col-4">
              <div class="text-center">
                <img
                  alt="image"
                  class="rounded-circle m-t-xs img-fluid"
                  height="100"
                  src="@/assets/orderd2.png"
                >
                <div class="m-t-xs font-bold">CO2</div>
              </div>
            </div>
            <div class="col-8" style="text-align: center;">
              <span class="badge badge-default m-t-sm m-b-sm">
                <strong>
                  <a>Know more</a>
                </strong>
              </span>
            </div>
          </a>
          <div class="contact-box-footer">
            <div class="m-t-xs btn-group">
              <span class="badge badge-primary m-t-sm m-b-sm">
                <strong v-if="selectedChart == 1">3 480 Kg CO2-e</strong>
                <strong v-if="selectedChart == 2">3 120 Kg CO2-e</strong>
                <strong v-if="selectedChart == 3">17 Kg CO2-e</strong>
                <strong v-if="selectedChart == 4">19 Kg CO2-e</strong>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="contact-box">
          <a class="row">
            <div class="col-4">
              <div class="text-center"></div>
            </div>
          </a>
          <div class="contact-box-footer">
            <div class="m-t-xs btn-group">
              <span class="badge badge-primary m-t-sm m-b-sm">
                <strong v-if="selectedChart == 2">400 units</strong>
                <strong v-if="selectedChart == 3">175 units</strong>
                <strong v-if="selectedChart == 4">113 units</strong>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <hr>

    <div class="row m-t-lg">
      <div v-if="pickBest">
        <div class="col-lg-6">
          <h5>Compare</h5>
        </div>
        <div class="col-lg-3">
          <button
            class="btn btn-block m-b-lg"
            @click="selectedChart = 1; $emit('pick', 1)"
            :class="{'btn-primary': selectedChart == 1, 'btn-default': selectedChart == 2}"
          >This order</button>
        </div>
        <div class="col-lg-3">
          <button
            class="btn btn-block m-b-lg"
            @click="selectedChart = 2; $emit('pick', 2)"
            :class="{'btn-primary': selectedChart == 2, 'btn-default': selectedChart == 1}"
          >Improved</button>
        </div>
      </div>

      <div v-if="pickYear">
        <div class="col-lg-6">
          <h5>Compare</h5>
        </div>
        <div class="col-lg-3">
          <button
            class="btn btn-block m-b-lg"
            @click="selectedChart = 3; $emit('pick-year', 3)"
            :class="{'btn-primary': selectedChart == 3, 'btn-default': selectedChart == 4}"
          >This year</button>
        </div>
        <div class="col-lg-3">
          <button
            class="btn btn-block m-b-lg"
            @click="selectedChart = 4; $emit('pick-year', 4)"
            :class="{'btn-primary': selectedChart == 4, 'btn-default': selectedChart == 3}"
          >Last year</button>
        </div>
      </div>

      <div class="col-lg-12" id="cluster_info">
        <line-chart
          :height="120"
          ref="environmental"
          :chartData="environmentalData"
          :options="options"
        ></line-chart>
      </div>
    </div>

    <!--<hr>

		<div class="row m-t-lg">
			<div class="col-lg-2">
				<span class="label label-primary environmental2">556 kg H20</span>
			</div>
			<div class="col-lg-10" id="cluster_info">
				<line-chart
					:height="120"
					ref="environmental2"
					:chartData="environmentalData2"
					:options="options2">
				</line-chart>
			</div>
    </div>-->

    <hr>

    <!-- <div class="row">
      <div class="ibox">
        <div class="ibox-title">
          <h5>Improvement difference</h5>
        </div>
        <div class="ibox-content">
          <div class="col-lg-12">
            <div class="col-md-12">
              <ul class="stat-list m-t-lg">
                <li>
                  <h2 class="no-margins">130,500 Litres</h2>
                  <small>Water</small>
                  <div class="progress progress-mini">
                    <div class="progress-bar" style="width: 70%;"></div>
                  </div>
                </li>
                <li>
                  <h2 class="no-margins">365 Kg CO2-e</h2>
                  <small>CO2</small>
                  <div class="progress progress-mini">
                    <div class="progress-bar" style="width: 50%;"></div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import LineChart from "@/directives/charts/LineChart";
import Modal from "@/components/core/Modal";
import Page from "@/components/core/Page";
import Img1 from "@/assets/img1.png";
import { watch } from "fs";

export default {
  components: {
    Page,
    LineChart,
    Modal
  },

  props: {
    environmentalData: {
      type: Object,
      required: true
    },

    pickBest: {
      type: Boolean,
      default: false
    },

    pickYear: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      selectedChart: 1,

      orderId: null,

      ticks: {
        max: 4000,
        min: 0
      }
    };
  },

  computed: {
    options() {
      return {
        legend: {
          display: true
        },
        scales: {
          yAxes: [
            {
              id: "A",
              scaleLabel: {
                display: true,
                labelString: "Water (Litres)"
              },
              position: "left",
              gridLines: {
                color: "rgba(106, 121, 221, 0.10)"
              }
            },
            {
              id: "B",
              scaleLabel: {
                display: true,
                labelString: "CO2 (Kg CO2-e)"
              },
              position: "right",
              gridLines: {
                color: "rgba(210, 143, 99, 0.10)"
              },
              ticks:
                this.selectedChart == 1 || this.selectedChart == 2
                  ? { max: 4000, min: 0 }
                  : { max: 15, min: 0 }
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
          easing: "linear"
        },
        responsive: true
      };
    }
  },

  methods: {},

  created() {
    if (this.pickYear) {
      this.selectedChart = 3;
    }
  },

  mounted() {
    this.$refs.environmental.renderChart(this.environmentalData, this.options);
  }
};
</script>
