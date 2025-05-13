<script setup lang="ts">
const chartColors = {
  blue: {
    default: "rgba(59, 130, 246, 0.8)",
    remaining: "rgba(209, 213, 219, 0.5)",
  },
  green: {
    default: "rgba(16, 185, 129, 0.8)",
    remaining: "rgba(209, 213, 219, 0.5)",
  },
  red: {
    default: "rgba(239, 68, 68, 0.8)",
    remaining: "rgba(209, 213, 219, 0.5)",
  },
};

// 创建饼图函数
function createPieChart(
  id: string,
  value: number,
  color: { default: any; remaining: any }
) {
  const ctx = (document.getElementById(id)! as any).getContext("2d");
  const remaining = 100 - value;
  // @ts-ignore
  return new Chart(ctx, {
    type: "pie",
    data: {
      labels: ["达标", "未达标"],
      datasets: [
        {
          data: [value, remaining],
          backgroundColor: [color.default, color.remaining],
          borderColor: [color.default, color.remaining],
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          callbacks: {// @ts-ignore
            label: function (context) {
              return context.label + ": " + context.raw + "%";
            },
          },
        },
      },
      cutout: "65%",
    },
  });
}

// 初始化所有图表
document.addEventListener("DOMContentLoaded", function () {
  // 图表1: 肾活检术前检查完成率
  createPieChart("chart1", 92.5, chartColors.blue);

  // 图表2: 病理切片染色规范率
  createPieChart("chart2", 96.3, chartColors.blue);

  // 图表3: 病理分型诊断率
  createPieChart("chart3", 100, chartColors.green);

  // 图表4: RAS阻断剂使用率
  createPieChart("chart4", 88.7, chartColors.blue);

  // 图表5: 随访完成率
  createPieChart("chart5", 85.0, chartColors.blue);

  // 图表6: 血压控制达标率
  createPieChart("chart6", 76.3, chartColors.blue);

  // 图表7: 肾功能恶化率
  createPieChart("chart7", 8.8, chartColors.red);

  // 图表8: 尿蛋白<1g患者比例
  createPieChart("chart8", 62.5, chartColors.green);

  // 图表9: 肾活检并发症发生率
  createPieChart("chart9", 2.5, chartColors.red);

  // 图表10: 激素治疗并发症率
  createPieChart("chart10", 10.0, chartColors.red);
});
</script>

<template>
  <div class="container mx-auto px-4 py-6">
    <!-- 标题 -->
    <div class="flex items-center mb-8">
      <div class="bg-blue-100 p-3 rounded-full text-blue-600 mr-4">
        <i class="fas fa-chart-pie text-xl"></i>
      </div>
      <h1 class="text-2xl font-bold">IgA肾病质控统计</h1>
    </div>

    <!-- 统计卡片区域 -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      <!-- 统计卡片1 -->
      <div class="bg-white rounded-xl shadow-soft p-6">
        <div class="flex justify-between items-start mb-4">
          <h2 class="text-lg font-semibold">肾活检术前检查完成率</h2>
          <span
            class="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-bold"
            >SOP标准</span
          >
        </div>
        <div class="chart-container">
          <canvas id="chart1"></canvas>
        </div>
        <div class="mt-4 text-center">
          <span class="text-2xl font-bold text-blue-600">92.5%</span>
          <span class="text-gray-500 ml-1">(74/80)</span>
          <div class="text-sm text-gray-600 mt-1">目标值 ≥95%</div>
        </div>
      </div>

      <!-- 统计卡片2 -->
      <div class="bg-white rounded-xl shadow-soft p-6">
        <div class="flex justify-between items-start mb-4">
          <h2 class="text-lg font-semibold">病理切片染色规范率</h2>
          <span
            class="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-bold"
            >SOP标准</span
          >
        </div>
        <div class="chart-container">
          <canvas id="chart2"></canvas>
        </div>
        <div class="mt-4 text-center">
          <span class="text-2xl font-bold text-blue-600">96.3%</span>
          <span class="text-gray-500 ml-1">(77/80)</span>
          <div class="text-sm text-gray-600 mt-1">目标值 ≥98%</div>
        </div>
      </div>

      <!-- 统计卡片3 -->
      <div class="bg-white rounded-xl shadow-soft p-6">
        <div class="flex justify-between items-start mb-4">
          <h2 class="text-lg font-semibold">病理分型诊断率</h2>
          <span
            class="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-bold"
            >SOP标准</span
          >
        </div>
        <div class="chart-container">
          <canvas id="chart3"></canvas>
        </div>
        <div class="mt-4 text-center">
          <span class="text-2xl font-bold text-blue-600">100%</span>
          <span class="text-gray-500 ml-1">(80/80)</span>
          <div class="text-sm text-gray-600 mt-1">目标值 100%</div>
        </div>
      </div>

      <!-- 统计卡片4 -->
      <div class="bg-white rounded-xl shadow-soft p-6">
        <div class="flex justify-between items-start mb-4">
          <h2 class="text-lg font-semibold">RAS阻断剂使用率</h2>
          <span
            class="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-bold"
            >SOP标准</span
          >
        </div>
        <div class="chart-container">
          <canvas id="chart4"></canvas>
        </div>
        <div class="mt-4 text-center">
          <span class="text-2xl font-bold text-blue-600">88.7%</span>
          <span class="text-gray-500 ml-1">(71/80)</span>
          <div class="text-sm text-gray-600 mt-1">目标值 ≥90%</div>
        </div>
      </div>

      <!-- 统计卡片5 -->
      <div class="bg-white rounded-xl shadow-soft p-6">
        <div class="flex justify-between items-start mb-4">
          <h2 class="text-lg font-semibold">随访完成率</h2>
          <span
            class="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-bold"
            >SOP标准</span
          >
        </div>
        <div class="chart-container">
          <canvas id="chart5"></canvas>
        </div>
        <div class="mt-4 text-center">
          <span class="text-2xl font-bold text-blue-600">85.0%</span>
          <span class="text-gray-500 ml-1">(68/80)</span>
          <div class="text-sm text-gray-600 mt-1">目标值 ≥90%</div>
        </div>
      </div>

      <!-- 统计卡片6 -->
      <div class="bg-white rounded-xl shadow-soft p-6">
        <div class="flex justify-between items-start mb-4">
          <h2 class="text-lg font-semibold">血压控制达标率</h2>
          <span
            class="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-bold"
            >SOP标准</span
          >
        </div>
        <div class="chart-container">
          <canvas id="chart6"></canvas>
        </div>
        <div class="mt-4 text-center">
          <span class="text-2xl font-bold text-blue-600">76.3%</span>
          <span class="text-gray-500 ml-1">(61/80)</span>
          <div class="text-sm text-gray-600 mt-1">目标值 ≥80%</div>
        </div>
      </div>

      <!-- 统计卡片7 -->
      <div class="bg-white rounded-xl shadow-soft p-6">
        <div class="flex justify-between items-start mb-4">
          <h2 class="text-lg font-semibold">肾功能恶化率</h2>
          <span
            class="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-bold"
            >SOP标准</span
          >
        </div>
        <div class="chart-container">
          <canvas id="chart7"></canvas>
        </div>
        <div class="mt-4 text-center">
          <span class="text-2xl font-bold text-blue-600">8.8%</span>
          <span class="text-gray-500 ml-1">(7/80)</span>
          <div class="text-sm text-gray-600 mt-1">目标值 ≤10%</div>
        </div>
      </div>

      <!-- 统计卡片8 -->
      <div class="bg-white rounded-xl shadow-soft p-6">
        <div class="flex justify-between items-start mb-4">
          <h2 class="text-lg font-semibold">尿蛋白<1g患者比例</h2>
          <span
            class="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-bold"
            >SOP标准</span
          >
        </div>
        <div class="chart-container">
          <canvas id="chart8"></canvas>
        </div>
        <div class="mt-4 text-center">
          <span class="text-2xl font-bold text-blue-600">62.5%</span>
          <span class="text-gray-500 ml-1">(50/80)</span>
          <div class="text-sm text-gray-600 mt-1">目标值 ≥60%</div>
        </div>
      </div>

      <!-- 统计卡片9 -->
      <div class="bg-white rounded-xl shadow-soft p-6">
        <div class="flex justify-between items-start mb-4">
          <h2 class="text-lg font-semibold">肾活检并发症发生率</h2>
          <span
            class="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-bold"
            >SOP标准</span
          >
        </div>
        <div class="chart-container">
          <canvas id="chart9"></canvas>
        </div>
        <div class="mt-4 text-center">
          <span class="text-2xl font-bold text-blue-600">2.5%</span>
          <span class="text-gray-500 ml-1">(2/80)</span>
          <div class="text-sm text-gray-600 mt-1">目标值 ≤3%</div>
        </div>
      </div>

      <!-- 统计卡片10 -->
      <div class="bg-white rounded-xl shadow-soft p-6">
        <div class="flex justify-between items-start mb-4">
          <h2 class="text-lg font-semibold">激素治疗并发症率</h2>
          <span
            class="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-bold"
            >SOP标准</span
          >
        </div>
        <div class="chart-container">
          <canvas id="chart10"></canvas>
        </div>
        <div class="mt-4 text-center">
          <span class="text-2xl font-bold text-blue-600">10.0%</span>
          <span class="text-gray-500 ml-1">(8/80)</span>
          <div class="text-sm text-gray-600 mt-1">目标值 ≤12%</div>
        </div>
      </div>
    </div>

    <!-- 数据汇总表格 -->
    <div class="bg-white rounded-xl shadow-soft p-6">
      <h2 class="text-lg font-semibold mb-4 flex items-center">
        <i class="fas fa-table text-blue-500 mr-2"></i>IgA肾病质控指标汇总
      </h2>

      <div class="overflow-x-auto">
        <table
          class="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden"
        >
          <thead class="bg-gray-50">
            <tr>
              <th
                class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase"
              >
                质控指标
              </th>
              <th
                class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase"
              >
                达标值
              </th>
              <th
                class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase"
              >
                实际值
              </th>
              <th
                class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase"
              >
                分子
              </th>
              <th
                class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase"
              >
                分母
              </th>
              <th
                class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase"
              >
                达标状态
              </th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200">
            <tr>
              <td class="px-4 py-3 text-sm font-medium">
                肾活检患者术前检查完成率
              </td>
              <td class="px-4 py-3 text-sm">≥95%</td>
              <td class="px-4 py-3 text-sm">92.5%</td>
              <td class="px-4 py-3 text-sm">74</td>
              <td class="px-4 py-3 text-sm">80</td>
              <td class="px-4 py-3 text-sm">
                <span
                  class="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs"
                  >未达标</span
                >
              </td>
            </tr>
            <tr>
              <td class="px-4 py-3 text-sm font-medium">
                肾脏病理切片染色规范率
              </td>
              <td class="px-4 py-3 text-sm">≥98%</td>
              <td class="px-4 py-3 text-sm">96.3%</td>
              <td class="px-4 py-3 text-sm">77</td>
              <td class="px-4 py-3 text-sm">80</td>
              <td class="px-4 py-3 text-sm">
                <span
                  class="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs"
                  >未达标</span
                >
              </td>
            </tr>
            <tr>
              <td class="px-4 py-3 text-sm font-medium">
                IgA肾病患者病理分型诊断率
              </td>
              <td class="px-4 py-3 text-sm">100%</td>
              <td class="px-4 py-3 text-sm">100%</td>
              <td class="px-4 py-3 text-sm">80</td>
              <td class="px-4 py-3 text-sm">80</td>
              <td class="px-4 py-3 text-sm">
                <span
                  class="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs"
                  >达标</span
                >
              </td>
            </tr>
            <tr>
              <td class="px-4 py-3 text-sm font-medium">
                IgA肾病患者RAS阻断剂的使用率
              </td>
              <td class="px-4 py-3 text-sm">≥90%</td>
              <td class="px-4 py-3 text-sm">88.7%</td>
              <td class="px-4 py-3 text-sm">71</td>
              <td class="px-4 py-3 text-sm">80</td>
              <td class="px-4 py-3 text-sm">
                <span
                  class="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs"
                  >未达标</span
                >
              </td>
            </tr>
            <tr>
              <td class="px-4 py-3 text-sm font-medium">
                IgA肾病患者随访完成率
              </td>
              <td class="px-4 py-3 text-sm">≥90%</td>
              <td class="px-4 py-3 text-sm">85.0%</td>
              <td class="px-4 py-3 text-sm">68</td>
              <td class="px-4 py-3 text-sm">80</td>
              <td class="px-4 py-3 text-sm">
                <span
                  class="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs"
                  >未达标</span
                >
              </td>
            </tr>
            <tr>
              <td class="px-4 py-3 text-sm font-medium">
                IgA肾病患者血压控制达标率
              </td>
              <td class="px-4 py-3 text-sm">≥80%</td>
              <td class="px-4 py-3 text-sm">76.3%</td>
              <td class="px-4 py-3 text-sm">61</td>
              <td class="px-4 py-3 text-sm">80</td>
              <td class="px-4 py-3 text-sm">
                <span
                  class="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs"
                  >未达标</span
                >
              </td>
            </tr>
            <tr>
              <td class="px-4 py-3 text-sm font-medium">肾功能恶化率</td>
              <td class="px-4 py-3 text-sm">≤10%</td>
              <td class="px-4 py-3 text-sm">8.8%</td>
              <td class="px-4 py-3 text-sm">7</td>
              <td class="px-4 py-3 text-sm">80</td>
              <td class="px-4 py-3 text-sm">
                <span
                  class="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs"
                  >达标</span
                >
              </td>
            </tr>
            <tr>
              <td class="px-4 py-3 text-sm font-medium">
                治疗6个月后24小时尿蛋白<1g的患者比例
              </td>
              <td class="px-4 py-3 text-sm">≥60%</td>
              <td class="px-4 py-3 text-sm">62.5%</td>
              <td class="px-4 py-3 text-sm">50</td>
              <td class="px-4 py-3 text-sm">80</td>
              <td class="px-4 py-3 text-sm">
                <span
                  class="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs"
                  >达标</span
                >
              </td>
            </tr>
            <tr>
              <td class="px-4 py-3 text-sm font-medium">
                肾活检严重并发症发生率
              </td>
              <td class="px-4 py-3 text-sm">≤3%</td>
              <td class="px-4 py-3 text-sm">2.5%</td>
              <td class="px-4 py-3 text-sm">2</td>
              <td class="px-4 py-3 text-sm">80</td>
              <td class="px-4 py-3 text-sm">
                <span
                  class="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs"
                  >达标</span
                >
              </td>
            </tr>
            <tr>
              <td class="px-4 py-3 text-sm font-medium">
                激素、免疫抑制剂治疗的严重并发症发生率
              </td>
              <td class="px-4 py-3 text-sm">≤12%</td>
              <td class="px-4 py-3 text-sm">10.0%</td>
              <td class="px-4 py-3 text-sm">8</td>
              <td class="px-4 py-3 text-sm">80</td>
              <td class="px-4 py-3 text-sm">
                <span
                  class="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs"
                  >达标</span
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<style>
.chart-container {
  position: relative;
  height: 250px;
  width: 250px;
  margin: 0 auto;
}
.shadow-soft {
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
}
.transition-smooth {
  transition: all 0.3s ease;
}
.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 10px;
}
</style>
