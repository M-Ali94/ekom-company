<template>
  <div class="container">
    <h1>Аналитика</h1>
    <br><br>
    <h3>Аналитика по визитам</h3>
    <div id="chartdiv" ref="chartdiv"></div>

  </div>
</template>

<script>
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import {mapState} from 'vuex'

export default {

  computed: {
    ...mapState(['chartData'])
  },

  mounted() {
    let root = am5.Root.new(this.$refs.chartdiv);

    am5.ready(() => {

      root.setThemes([
        am5themes_Animated.new(root)
      ]);

      var chart = root.container.children.push(am5xy.XYChart.new(root, {
        layout: root.verticalLayout,
      }));

      var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererY.new(root, {}),
      }));


      var xAxis = chart.xAxes.push(am5xy.DateAxis.new(root, {
        baseInterval: {count: 1},
        renderer: am5xy.AxisRendererX.new(root, {}),
      }));

      var yRenderer = yAxis.get("renderer");
      yRenderer.grid.template.setAll({
        stroke: am5.color(0xFFFFFF),
        strokeWidth: 0
      });

      var xRenderer = xAxis.get("renderer");
      xRenderer.grid.template.setAll({
        stroke: am5.color(0xFFFFFF),
        strokeWidth: 0
      });


      var series = chart.series.push(am5xy.LineSeries.new(root, {
        name: "Series",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "visits",
        valueXField: "date",
        fill: am5.color(0xE6C8FA),
        stroke: am5.color(0x9500FC),
      }));


      series.bullets.push(() => {
        return am5.Bullet.new(root, {
          sprite: am5.Circle.new(root, {
            radius: 8,
            strokeWidth: 3,
            fill: am5.color(0x9500FC),
          })
        });
      });

      series.strokes.template.set("strokeWidth", 3);
      series.fills.template.setAll({
        visible: true,
        fillOpacity: 0.6,
      });

      series.data.processor = am5.DataProcessor.new(root, {
        dateFormat: "yyyy-MM-dd",
        dateFields: ["date"]
      });

      chart.set("cursor", am5xy.XYCursor.new(root, {
        behavior: "none",
        xAxis: xAxis
      }));

      xAxis.set("tooltip", am5.Tooltip.new(root, {}));

      yAxis.set("tooltip", am5.Tooltip.new(root, {}));


      var scrollbarX = am5xy.XYChartScrollbar.new(root, {
        orientation: "horizontal",
        height: 50
      });
      chart.set("scrollbarX", scrollbarX);


      series.data.setAll(this.chartData);

    });

    this.root = root;
  },
}
</script>

<style>

#chartdiv {
  width: 100%;
  height: 500px;
}

</style>