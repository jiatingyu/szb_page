<script setup lang="ts">
import { onMounted } from "vue";

onMounted(() => {
  document.querySelectorAll(".tab-button").forEach((button) => {
    button.addEventListener("click", () => {
      // 移除所有active类
      document.querySelectorAll(".tab-button").forEach((btn) => {
        btn.classList.remove("active");
        btn.classList.remove("border-blue-500");
        btn.classList.remove("text-blue-600");
      });

      // 添加active类到当前按钮
      button.classList.add("active");
      button.classList.add("border-blue-500");
      button.classList.add("text-blue-600");

      // 隐藏所有标签内容
      document.querySelectorAll(".tab-content").forEach((content) => {
        content.classList.remove("active");
      });

      // 显示当前标签内容
      const tabId = button.getAttribute("data-tab");
      // @ts-ignore
      document.getElementById(tabId).classList.add("active");
    });
  });
});
</script>

<template>
  <div>
    <div class="container mx-auto px-4 py-6">
      <!-- 患者基本信息头部 -->
      <div class="bg-white rounded-xl shadow-soft p-6 mb-6">
        <div
          class="flex flex-col md:flex-row md:items-center md:justify-between"
        >
          <div class="flex items-center mb-4 md:mb-0">
            <div class="relative">
              <img
                src="https://randomuser.me/api/portraits/women/65.jpg"
                alt="患者头像"
                class="w-20 h-20 rounded-full border-4 border-blue-100"
              />
              <span
                class="absolute bottom-0 right-0 bg-green-500 text-white text-xs px-2 py-1 rounded-full"
                >在管</span
              >
            </div>
            <div class="ml-6">
              <h1 class="text-2xl font-bold">
                张美丽
                <span class="text-lg font-normal text-gray-600"
                  >(女, 56岁)</span
                >
              </h1>
              <div
                class="flex flex-wrap items-center mt-2 text-sm text-gray-600"
              >
                <span class="mr-4"
                  ><i class="fas fa-id-card mr-1"></i> 病案号: HN202305678</span
                >
                <span class="mr-4"
                  ><i class="fas fa-phone-alt mr-1"></i> 138****5678</span
                >
                <span class="mr-4"
                  ><i class="fas fa-map-marker-alt mr-1"></i> 北京市朝阳区</span
                >
                <span
                  ><i class="fas fa-heartbeat mr-1"></i> 高血压2级 高危组</span
                >
              </div>
            </div>
          </div>
          <div class="flex flex-wrap gap-2">
            <button
              class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-smooth flex items-center"
            >
              <i class="fas fa-edit mr-2"></i> 编辑信息
            </button>
            <button
              class="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-smooth flex items-center"
            >
              <i class="fas fa-calendar-plus mr-2"></i> 新建随访
            </button>
            <button
              class="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-smooth flex items-center"
            >
              <i class="fas fa-print mr-2"></i> 打印报告
            </button>
          </div>
        </div>
      </div>

      <!-- 标签导航 -->
      <div class="bg-white rounded-xl shadow-soft overflow-hidden mb-6">
        <div class="border-b border-gray-200">
          <nav class="flex overflow-x-auto custom-scrollbar">
            <button
              class="tab-button px-6 py-4 text-sm font-medium border-b-2 border-transparent hover:text-blue-600 hover:border-blue-500 transition-smooth whitespace-nowrap active"
              data-tab="basic"
            >
              <i class="fas fa-user-circle mr-2"></i>基本信息
            </button>
            <button
              class="tab-button px-6 py-4 text-sm font-medium border-b-2 border-transparent hover:text-blue-600 hover:border-blue-500 transition-smooth whitespace-nowrap"
              data-tab="diagnosis"
            >
              <i class="fas fa-stethoscope mr-2"></i>诊断记录
            </button>
            <button
              class="tab-button px-6 py-4 text-sm font-medium border-b-2 border-transparent hover:text-blue-600 hover:border-blue-500 transition-smooth whitespace-nowrap"
              data-tab="reports"
            >
              <i class="fas fa-file-alt mr-2"></i>检查报告
            </button>
            <button
              class="tab-button px-6 py-4 text-sm font-medium border-b-2 border-transparent hover:text-blue-600 hover:border-blue-500 transition-smooth whitespace-nowrap"
              data-tab="orders"
            >
              <i class="fas fa-prescription mr-2"></i>医嘱处方
            </button>
            <button
              class="tab-button px-6 py-4 text-sm font-medium border-b-2 border-transparent hover:text-blue-600 hover:border-blue-500 transition-smooth whitespace-nowrap"
              data-tab="followup"
            >
              <i class="fas fa-calendar-check mr-2"></i>随访管理
            </button>
            <button
              class="tab-button px-6 py-4 text-sm font-medium border-b-2 border-transparent hover:text-blue-600 hover:border-blue-500 transition-smooth whitespace-nowrap"
              data-tab="plans"
            >
              <i class="fas fa-clipboard-list mr-2"></i>管理计划
            </button>
            <button
              class="tab-button px-6 py-4 text-sm font-medium border-b-2 border-transparent hover:text-blue-600 hover:border-blue-500 transition-smooth whitespace-nowrap"
              data-tab="education"
            >
              <i class="fas fa-book-medical mr-2"></i>科普患教
            </button>
            <button
              class="tab-button px-6 py-4 text-sm font-medium border-b-2 border-transparent hover:text-blue-600 hover:border-blue-500 transition-smooth whitespace-nowrap"
              data-tab="records"
            >
              <i class="fas fa-file-medical mr-2"></i>医疗文书
            </button>
          </nav>
        </div>

        <!-- 标签内容 -->
        <div class="p-6">
          <!-- 基本信息 -->
          <div id="basic" class="tab-content active">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              <!-- 基本信息卡片 -->
              <div class="bg-white rounded-lg border border-gray-200 p-5">
                <h3 class="text-lg font-semibold mb-4 flex items-center">
                  <i class="fas fa-info-circle text-blue-500 mr-2"></i>基本信息
                </h3>
                <div class="space-y-3 text-sm">
                  <div class="flex">
                    <span class="text-gray-500 w-24">姓名</span>
                    <span>张美丽</span>
                  </div>
                  <div class="flex">
                    <span class="text-gray-500 w-24">性别</span>
                    <span>女</span>
                  </div>
                  <div class="flex">
                    <span class="text-gray-500 w-24">年龄</span>
                    <span>56岁</span>
                  </div>
                  <div class="flex">
                    <span class="text-gray-500 w-24">出生日期</span>
                    <span>1967-05-12</span>
                  </div>
                  <div class="flex">
                    <span class="text-gray-500 w-24">身份证号</span>
                    <span>11010519670512****</span>
                  </div>
                  <div class="flex">
                    <span class="text-gray-500 w-24">联系电话</span>
                    <span>138****5678</span>
                  </div>
                  <div class="flex">
                    <span class="text-gray-500 w-24">婚姻状况</span>
                    <span>已婚</span>
                  </div>
                  <div class="flex">
                    <span class="text-gray-500 w-24">职业</span>
                    <span>退休教师</span>
                  </div>
                  <div class="flex">
                    <span class="text-gray-500 w-24">住址</span>
                    <span>北京市朝阳区建国路88号</span>
                  </div>
                </div>
              </div>

              <!-- 健康信息卡片 -->
              <div class="bg-white rounded-lg border border-gray-200 p-5">
                <h3 class="text-lg font-semibold mb-4 flex items-center">
                  <i class="fas fa-heartbeat text-red-500 mr-2"></i>健康信息
                </h3>
                <div class="space-y-3 text-sm">
                  <div class="flex">
                    <span class="text-gray-500 w-24">血型</span>
                    <span>A型</span>
                  </div>
                  <div class="flex">
                    <span class="text-gray-500 w-24">身高</span>
                    <span>162cm</span>
                  </div>
                  <div class="flex">
                    <span class="text-gray-500 w-24">体重</span>
                    <span>68kg</span>
                  </div>
                  <div class="flex">
                    <span class="text-gray-500 w-24">BMI</span>
                    <span>25.9 (超重)</span>
                  </div>
                  <div class="flex">
                    <span class="text-gray-500 w-24">过敏史</span>
                    <span>青霉素过敏</span>
                  </div>
                  <div class="flex">
                    <span class="text-gray-500 w-24">吸烟史</span>
                    <span>无</span>
                  </div>
                  <div class="flex">
                    <span class="text-gray-500 w-24">饮酒史</span>
                    <span>偶尔</span>
                  </div>
                  <div class="flex">
                    <span class="text-gray-500 w-24">家族史</span>
                    <span>父亲有高血压病史</span>
                  </div>
                </div>
              </div>

              <!-- 首次病程卡片 -->
              <div class="bg-white rounded-lg border border-gray-200 p-5">
                <h3 class="text-lg font-semibold mb-4 flex items-center">
                  <i class="fas fa-file-medical-alt text-green-500 mr-2"></i
                  >首次病程
                </h3>
                <div class="text-sm space-y-3">
                  <div class="flex">
                    <span class="text-gray-500 w-24">主诉</span>
                    <span>反复头晕、头痛5年，加重1周</span>
                  </div>
                  <div class="flex">
                    <span class="text-gray-500 w-24">现病史</span>
                    <span
                      >患者5年前无明显诱因出现头晕、头痛，测血压最高180/110mmHg，诊断为"高血压"，间断服用降压药控制。1周前症状加重，伴视物模糊。</span
                    >
                  </div>
                  <div class="flex">
                    <span class="text-gray-500 w-24">既往史</span>
                    <span>高血压病史5年，2型糖尿病史3年</span>
                  </div>
                  <div class="flex">
                    <span class="text-gray-500 w-24">体格检查</span>
                    <span>BP 160/95mmHg，HR 78次/分，心肺腹未见明显异常</span>
                  </div>
                  <div class="flex">
                    <span class="text-gray-500 w-24">初步诊断</span>
                    <span>1. 高血压2级 高危组<br />2. 2型糖尿病</span>
                  </div>
                  <div class="flex">
                    <span class="text-gray-500 w-24">诊疗计划</span>
                    <span
                      >1. 完善相关检查<br />2. 调整降压方案<br />3.
                      糖尿病饮食运动指导</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 诊断记录 -->
          <div id="diagnosis" class="tab-content">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <!-- 诊断记录 -->
              <div class="bg-white rounded-lg border border-gray-200 p-5">
                <h3 class="text-lg font-semibold mb-4 flex items-center">
                  <i class="fas fa-diagnoses text-purple-500 mr-2"></i>诊断记录
                </h3>
                <div class="overflow-x-auto">
                  <table class="min-w-full divide-y divide-gray-200">
                    <thead class="bg-gray-50">
                      <tr>
                        <th
                          class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          诊断时间
                        </th>
                        <th
                          class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          诊断名称
                        </th>
                        <th
                          class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          类型
                        </th>
                        <th
                          class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          状态
                        </th>
                      </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                      <tr>
                        <td class="px-4 py-3 whitespace-nowrap text-sm">
                          2023-05-15
                        </td>
                        <td
                          class="px-4 py-3 whitespace-nowrap text-sm font-medium"
                        >
                          高血压2级 高危组
                        </td>
                        <td class="px-4 py-3 whitespace-nowrap text-sm">
                          主要诊断
                        </td>
                        <td class="px-4 py-3 whitespace-nowrap text-sm">
                          <span
                            class="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs"
                            >确诊</span
                          >
                        </td>
                      </tr>
                      <tr>
                        <td class="px-4 py-3 whitespace-nowrap text-sm">
                          2023-05-15
                        </td>
                        <td
                          class="px-4 py-3 whitespace-nowrap text-sm font-medium"
                        >
                          2型糖尿病
                        </td>
                        <td class="px-4 py-3 whitespace-nowrap text-sm">
                          次要诊断
                        </td>
                        <td class="px-4 py-3 whitespace-nowrap text-sm">
                          <span
                            class="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs"
                            >确诊</span
                          >
                        </td>
                      </tr>
                      <tr>
                        <td class="px-4 py-3 whitespace-nowrap text-sm">
                          2023-06-20
                        </td>
                        <td
                          class="px-4 py-3 whitespace-nowrap text-sm font-medium"
                        >
                          高脂血症
                        </td>
                        <td class="px-4 py-3 whitespace-nowrap text-sm">
                          次要诊断
                        </td>
                        <td class="px-4 py-3 whitespace-nowrap text-sm">
                          <span
                            class="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs"
                            >确诊</span
                          >
                        </td>
                      </tr>
                      <tr>
                        <td class="px-4 py-3 whitespace-nowrap text-sm">
                          2023-07-10
                        </td>
                        <td
                          class="px-4 py-3 whitespace-nowrap text-sm font-medium"
                        >
                          脂肪肝
                        </td>
                        <td class="px-4 py-3 whitespace-nowrap text-sm">
                          次要诊断
                        </td>
                        <td class="px-4 py-3 whitespace-nowrap text-sm">
                          <span
                            class="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs"
                            >待查</span
                          >
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <!-- 筛查记录 -->
              <div class="bg-white rounded-lg border border-gray-200 p-5">
                <h3 class="text-lg font-semibold mb-4 flex items-center">
                  <i class="fas fa-search text-blue-500 mr-2"></i>筛查记录
                </h3>
                <div class="space-y-4">
                  <div class="border-l-4 border-blue-500 pl-4 py-1">
                    <div class="flex justify-between items-center">
                      <h4 class="font-medium">心血管风险评估</h4>
                      <span class="text-xs text-gray-500">2023-05-20</span>
                    </div>
                    <p class="text-sm text-gray-600 mt-1">
                      10年心血管风险评分: 15.6% (中风险)
                    </p>
                  </div>
                  <div class="border-l-4 border-green-500 pl-4 py-1">
                    <div class="flex justify-between items-center">
                      <h4 class="font-medium">糖尿病并发症筛查</h4>
                      <span class="text-xs text-gray-500">2023-06-05</span>
                    </div>
                    <p class="text-sm text-gray-600 mt-1">
                      眼底检查: 轻度视网膜病变
                    </p>
                  </div>
                  <div class="border-l-4 border-purple-500 pl-4 py-1">
                    <div class="flex justify-between items-center">
                      <h4 class="font-medium">肿瘤标志物筛查</h4>
                      <span class="text-xs text-gray-500">2023-07-18</span>
                    </div>
                    <p class="text-sm text-gray-600 mt-1">
                      CEA、AFP、CA199均在正常范围
                    </p>
                  </div>
                  <div class="border-l-4 border-yellow-500 pl-4 py-1">
                    <div class="flex justify-between items-center">
                      <h4 class="font-medium">骨质疏松筛查</h4>
                      <span class="text-xs text-gray-500">2023-08-02</span>
                    </div>
                    <p class="text-sm text-gray-600 mt-1">
                      骨密度T值: -1.8 (骨量减少)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 检查报告 -->
          <div id="reports" class="tab-content">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <!-- 化验报告 -->
              <div class="bg-white rounded-lg border border-gray-200 p-5">
                <h3 class="text-lg font-semibold mb-4 flex items-center">
                  <i class="fas fa-flask text-red-500 mr-2"></i>化验报告
                </h3>
                <div class="space-y-4">
                  <div class="border-b border-gray-100 pb-4">
                    <div class="flex justify-between items-center mb-2">
                      <h4 class="font-medium">血常规</h4>
                      <span class="text-xs text-gray-500">2023-05-16</span>
                    </div>
                    <div class="grid grid-cols-3 gap-2 text-sm">
                      <div class="bg-gray-50 p-2 rounded">
                        <div class="text-gray-500">白细胞</div>
                        <div>6.5 ×10⁹/L</div>
                      </div>
                      <div class="bg-gray-50 p-2 rounded">
                        <div class="text-gray-500">血红蛋白</div>
                        <div>125 g/L</div>
                      </div>
                      <div class="bg-gray-50 p-2 rounded">
                        <div class="text-gray-500">血小板</div>
                        <div>210 ×10⁹/L</div>
                      </div>
                    </div>
                  </div>

                  <div class="border-b border-gray-100 pb-4">
                    <div class="flex justify-between items-center mb-2">
                      <h4 class="font-medium">生化全套</h4>
                      <span class="text-xs text-gray-500">2023-05-16</span>
                    </div>
                    <div class="grid grid-cols-3 gap-2 text-sm">
                      <div
                        class="bg-red-50 p-2 rounded border-l-4 border-red-500"
                      >
                        <div class="text-gray-500">空腹血糖</div>
                        <div class="font-bold">7.8 ↑ mmol/L</div>
                      </div>
                      <div
                        class="bg-red-50 p-2 rounded border-l-4 border-red-500"
                      >
                        <div class="text-gray-500">总胆固醇</div>
                        <div class="font-bold">6.2 ↑ mmol/L</div>
                      </div>
                      <div
                        class="bg-red-50 p-2 rounded border-l-4 border-red-500"
                      >
                        <div class="text-gray-500">甘油三酯</div>
                        <div class="font-bold">2.8 ↑ mmol/L</div>
                      </div>
                      <div class="bg-gray-50 p-2 rounded">
                        <div class="text-gray-500">肌酐</div>
                        <div>78 μmol/L</div>
                      </div>
                      <div class="bg-gray-50 p-2 rounded">
                        <div class="text-gray-500">ALT</div>
                        <div>32 U/L</div>
                      </div>
                      <div class="bg-gray-50 p-2 rounded">
                        <div class="text-gray-500">AST</div>
                        <div>28 U/L</div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div class="flex justify-between items-center mb-2">
                      <h4 class="font-medium">糖化血红蛋白</h4>
                      <span class="text-xs text-gray-500">2023-06-10</span>
                    </div>
                    <div
                      class="bg-red-50 p-3 rounded border-l-4 border-red-500 text-sm"
                    >
                      <div class="flex justify-between">
                        <span class="text-gray-500">HbA1c</span>
                        <span class="font-bold">7.5% ↑</span>
                      </div>
                      <div class="text-gray-500 mt-1">参考范围: 4.0-6.0%</div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- 检查报告 -->
              <div class="bg-white rounded-lg border border-gray-200 p-5">
                <h3 class="text-lg font-semibold mb-4 flex items-center">
                  <i class="fas fa-x-ray text-blue-500 mr-2"></i>检查报告
                </h3>
                <div class="space-y-4">
                  <div class="border-b border-gray-100 pb-4">
                    <div class="flex justify-between items-center mb-2">
                      <h4 class="font-medium">心电图</h4>
                      <span class="text-xs text-gray-500">2023-05-16</span>
                    </div>
                    <div class="bg-gray-50 p-3 rounded text-sm">
                      <p>窦性心律，心率78次/分，左心室高电压，ST-T改变</p>
                      <div class="mt-2 flex justify-center">
                        <img
                          src="https://via.placeholder.com/300x150?text=心电图示意图"
                          alt="心电图"
                          class="h-32 object-contain"
                        />
                      </div>
                    </div>
                  </div>

                  <div class="border-b border-gray-100 pb-4">
                    <div class="flex justify-between items-center mb-2">
                      <h4 class="font-medium">心脏彩超</h4>
                      <span class="text-xs text-gray-500">2023-05-18</span>
                    </div>
                    <div class="bg-gray-50 p-3 rounded text-sm">
                      <p>
                        左心室肥厚(IVS 12mm, LVPW 11mm)，左房轻度增大(LA
                        38mm)，EF 65%
                      </p>
                      <div class="mt-2 flex justify-center">
                        <img
                          src="https://via.placeholder.com/300x150?text=心脏彩超示意图"
                          alt="心脏彩超"
                          class="h-32 object-contain"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <div class="flex justify-between items-center mb-2">
                      <h4 class="font-medium">腹部超声</h4>
                      <span class="text-xs text-gray-500">2023-07-20</span>
                    </div>
                    <div class="bg-gray-50 p-3 rounded text-sm">
                      <p>脂肪肝(轻度)，胆囊壁毛糙，余未见明显异常</p>
                      <div class="mt-2 flex justify-center">
                        <img
                          src="https://via.placeholder.com/300x150?text=腹部超声示意图"
                          alt="腹部超声"
                          class="h-32 object-contain"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 医嘱处方 -->
          <div id="orders" class="tab-content">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <!-- 长期医嘱 -->
              <div class="bg-white rounded-lg border border-gray-200 p-5">
                <h3 class="text-lg font-semibold mb-4 flex items-center">
                  <i
                    class="fas fa-prescription-bottle-alt text-purple-500 mr-2"
                  ></i
                  >长期医嘱
                </h3>
                <div class="overflow-x-auto">
                  <table class="min-w-full divide-y divide-gray-200">
                    <thead class="bg-gray-50">
                      <tr>
                        <th
                          class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          开始时间
                        </th>
                        <th
                          class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          医嘱内容
                        </th>
                        <th
                          class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          用法
                        </th>
                        <th
                          class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          状态
                        </th>
                      </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                      <tr>
                        <td class="px-4 py-3 whitespace-nowrap text-sm">
                          2023-05-16
                        </td>
                        <td class="px-4 py-3 text-sm font-medium">
                          苯磺酸氨氯地平片
                        </td>
                        <td class="px-4 py-3 whitespace-nowrap text-sm">
                          5mg qd po
                        </td>
                        <td class="px-4 py-3 whitespace-nowrap text-sm">
                          <span
                            class="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs"
                            >执行中</span
                          >
                        </td>
                      </tr>
                      <tr>
                        <td class="px-4 py-3 whitespace-nowrap text-sm">
                          2023-05-16
                        </td>
                        <td class="px-4 py-3 text-sm font-medium">
                          厄贝沙坦片
                        </td>
                        <td class="px-4 py-3 whitespace-nowrap text-sm">
                          150mg qd po
                        </td>
                        <td class="px-4 py-3 whitespace-nowrap text-sm">
                          <span
                            class="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs"
                            >执行中</span
                          >
                        </td>
                      </tr>
                      <tr>
                        <td class="px-4 py-3 whitespace-nowrap text-sm">
                          2023-05-16
                        </td>
                        <td class="px-4 py-3 text-sm font-medium">
                          阿托伐他汀钙片
                        </td>
                        <td class="px-4 py-3 whitespace-nowrap text-sm">
                          20mg qn po
                        </td>
                        <td class="px-4 py-3 whitespace-nowrap text-sm">
                          <span
                            class="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs"
                            >执行中</span
                          >
                        </td>
                      </tr>
                      <tr>
                        <td class="px-4 py-3 whitespace-nowrap text-sm">
                          2023-05-16
                        </td>
                        <td class="px-4 py-3 text-sm font-medium">
                          二甲双胍缓释片
                        </td>
                        <td class="px-4 py-3 whitespace-nowrap text-sm">
                          0.5g bid po
                        </td>
                        <td class="px-4 py-3 whitespace-nowrap text-sm">
                          <span
                            class="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs"
                            >执行中</span
                          >
                        </td>
                      </tr>
                      <tr>
                        <td class="px-4 py-3 whitespace-nowrap text-sm">
                          2023-06-25
                        </td>
                        <td class="px-4 py-3 text-sm font-medium">
                          阿司匹林肠溶片
                        </td>
                        <td class="px-4 py-3 whitespace-nowrap text-sm">
                          100mg qd po
                        </td>
                        <td class="px-4 py-3 whitespace-nowrap text-sm">
                          <span
                            class="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs"
                            >执行中</span
                          >
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <!-- 运动饮食处方 -->
              <div class="bg-white rounded-lg border border-gray-200 p-5">
                <h3 class="text-lg font-semibold mb-4 flex items-center">
                  <i class="fas fa-utensils text-green-500 mr-2"></i
                  >运动饮食处方
                </h3>
                <div class="space-y-4">
                  <div
                    class="border-l-4 border-blue-500 pl-4 py-2 bg-blue-50 rounded-r"
                  >
                    <h4 class="font-medium">运动处方</h4>
                    <div class="text-sm text-gray-600 mt-1">
                      <p>1. 有氧运动: 快走或游泳，每周5次，每次30-45分钟</p>
                      <p>2. 抗阻训练: 每周2-3次，每次15-20分钟</p>
                      <p>3. 目标心率: (220-年龄)×60-70% = 98-115次/分</p>
                    </div>
                  </div>

                  <div
                    class="border-l-4 border-green-500 pl-4 py-2 bg-green-50 rounded-r"
                  >
                    <h4 class="font-medium">饮食处方</h4>
                    <div class="text-sm text-gray-600 mt-1">
                      <p>1. 控制总热量: 1500-1600kcal/日</p>
                      <p>2. 低盐饮食: 每日食盐<5g</p>
                      <p>3. 低脂饮食: 减少动物脂肪摄入</p>
                      <p>4. 碳水化合物: 占总热量50-55%，选择低GI食物</p>
                      <p>5. 蛋白质: 1.0g/kg/d，优质蛋白为主</p>
                    </div>
                  </div>

                  <div
                    class="border-l-4 border-purple-500 pl-4 py-2 bg-purple-50 rounded-r"
                  >
                    <h4 class="font-medium">生活方式建议</h4>
                    <div class="text-sm text-gray-600 mt-1">
                      <p>1. 戒烟限酒</p>
                      <p>2. 规律作息，保证7-8小时睡眠</p>
                      <p>3. 保持心理平衡，减轻精神压力</p>
                      <p>4. 每周监测血压3-4次，记录血压日记</p>
                      <p>5. 每月监测空腹血糖和餐后2小时血糖</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 随访管理 -->
          <div id="followup" class="tab-content">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <!-- 随访计划 -->
              <div class="bg-white rounded-lg border border-gray-200 p-5">
                <h3 class="text-lg font-semibold mb-4 flex items-center">
                  <i class="fas fa-calendar-alt text-blue-500 mr-2"></i>随访计划
                </h3>
                <div class="overflow-x-auto">
                  <table class="min-w-full divide-y divide-gray-200">
                    <thead class="bg-gray-50">
                      <tr>
                        <th
                          class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          随访类型
                        </th>
                        <th
                          class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          计划时间
                        </th>
                        <th
                          class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          执行状态
                        </th>
                      </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                      <tr>
                        <td class="px-4 py-3 text-sm font-medium">
                          高血压常规随访
                        </td>
                        <td class="px-4 py-3 whitespace-nowrap text-sm">
                          2023-06-15
                        </td>
                        <td class="px-4 py-3 whitespace-nowrap text-sm">
                          <span
                            class="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs"
                            >已完成</span
                          >
                        </td>
                      </tr>
                      <tr>
                        <td class="px-4 py-3 text-sm font-medium">
                          糖尿病常规随访
                        </td>
                        <td class="px-4 py-3 whitespace-nowrap text-sm">
                          2023-07-10
                        </td>
                        <td class="px-4 py-3 whitespace-nowrap text-sm">
                          <span
                            class="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs"
                            >已完成</span
                          >
                        </td>
                      </tr>
                      <tr>
                        <td class="px-4 py-3 text-sm font-medium">
                          高血压常规随访
                        </td>
                        <td class="px-4 py-3 whitespace-nowrap text-sm">
                          2023-08-12
                        </td>
                        <td class="px-4 py-3 whitespace-nowrap text-sm">
                          <span
                            class="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs"
                            >待执行</span
                          >
                        </td>
                      </tr>
                      <tr>
                        <td class="px-4 py-3 text-sm font-medium">
                          糖尿病常规随访
                        </td>
                        <td class="px-4 py-3 whitespace-nowrap text-sm">
                          2023-09-05
                        </td>
                        <td class="px-4 py-3 whitespace-nowrap text-sm">
                          <span
                            class="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-xs"
                            >未开始</span
                          >
                        </td>
                      </tr>
                      <tr>
                        <td class="px-4 py-3 text-sm font-medium">
                          年度综合评估
                        </td>
                        <td class="px-4 py-3 whitespace-nowrap text-sm">
                          2023-11-20
                        </td>
                        <td class="px-4 py-3 whitespace-nowrap text-sm">
                          <span
                            class="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-xs"
                            >未开始</span
                          >
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <!-- 随访记录 -->
              <div class="bg-white rounded-lg border border-gray-200 p-5">
                <h3 class="text-lg font-semibold mb-4 flex items-center">
                  <i class="fas fa-clipboard-check text-green-500 mr-2"></i
                  >随访记录
                </h3>
                <div class="space-y-4">
                  <div class="border-l-4 border-blue-500 pl-4 py-2">
                    <div class="flex justify-between items-center">
                      <h4 class="font-medium">2023-06-15 高血压随访</h4>
                      <span class="text-xs text-gray-500">张医生</span>
                    </div>
                    <div class="text-sm text-gray-600 mt-1">
                      <p>血压控制情况: 130-140/80-85mmHg</p>
                      <p>用药依从性: 良好</p>
                      <p>调整方案: 厄贝沙坦增至150mg qd</p>
                    </div>
                  </div>

                  <div class="border-l-4 border-green-500 pl-4 py-2">
                    <div class="flex justify-between items-center">
                      <h4 class="font-medium">2023-07-10 糖尿病随访</h4>
                      <span class="text-xs text-gray-500">李医生</span>
                    </div>
                    <div class="text-sm text-gray-600 mt-1">
                      <p>空腹血糖: 6.5-7.2mmol/L</p>
                      <p>餐后2h血糖: 8.5-9.8mmol/L</p>
                      <p>调整方案: 二甲双胍增至0.5g bid</p>
                      <p>建议: 加强饮食控制和运动</p>
                    </div>
                  </div>

                  <div class="border-l-4 border-purple-500 pl-4 py-2">
                    <div class="flex justify-between items-center">
                      <h4 class="font-medium">2023-08-02 电话随访</h4>
                      <span class="text-xs text-gray-500">王护士</span>
                    </div>
                    <div class="text-sm text-gray-600 mt-1">
                      <p>主诉: 偶有头晕，测血压波动在正常范围</p>
                      <p>建议: 注意休息，避免情绪激动</p>
                      <p>预约下次门诊随访</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 管理计划 -->
          <div id="plans" class="tab-content">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <!-- 管理计划 -->
              <div class="bg-white rounded-lg border border-gray-200 p-5">
                <h3 class="text-lg font-semibold mb-4 flex items-center">
                  <i class="fas fa-clipboard-list text-purple-500 mr-2"></i
                  >管理计划
                </h3>
                <div class="space-y-4">
                  <div
                    class="border-l-4 border-blue-500 pl-4 py-2 bg-blue-50 rounded-r"
                  >
                    <h4 class="font-medium">高血压管理计划</h4>
                    <div class="text-sm text-gray-600 mt-1">
                      <p><strong>目标血压:</strong> <140/90mmHg</p>
                      <p><strong>监测频率:</strong> 每周3-4次家庭血压监测</p>
                      <p><strong>随访频率:</strong> 每1-3个月门诊随访</p>
                      <p><strong>管理要点:</strong></p>
                      <ul class="list-disc pl-5 mt-1">
                        <li>规律服药，提高依从性</li>
                        <li>低盐饮食，每日食盐<5g</li>
                        <li>控制体重，目标BMI<24</li>
                        <li>适度运动，避免剧烈运动</li>
                      </ul>
                    </div>
                  </div>

                  <div
                    class="border-l-4 border-green-500 pl-4 py-2 bg-green-50 rounded-r"
                  >
                    <h4 class="font-medium">糖尿病管理计划</h4>
                    <div class="text-sm text-gray-600 mt-1">
                      <p>
                        <strong>血糖目标:</strong>
                        空腹4.4-7.0mmol/L，餐后<10mmol/L
                      </p>
                      <p><strong>监测频率:</strong> 每周2-3次血糖监测</p>
                      <p><strong>随访频率:</strong> 每3个月门诊随访</p>
                      <p><strong>管理要点:</strong></p>
                      <ul class="list-disc pl-5 mt-1">
                        <li>饮食控制，定时定量</li>
                        <li>规律运动，每周≥150分钟</li>
                        <li>足部护理，预防糖尿病足</li>
                        <li>每年全面并发症筛查</li>
                      </ul>
                    </div>
                  </div>

                  <div
                    class="border-l-4 border-yellow-500 pl-4 py-2 bg-yellow-50 rounded-r"
                  >
                    <h4 class="font-medium">血脂管理计划</h4>
                    <div class="text-sm text-gray-600 mt-1">
                      <p><strong>血脂目标:</strong> LDL-C<2.6mmol/L</p>
                      <p><strong>监测频率:</strong> 每3-6个月复查血脂</p>
                      <p><strong>管理要点:</strong></p>
                      <ul class="list-disc pl-5 mt-1">
                        <li>坚持服用他汀类药物</li>
                        <li>低脂饮食，减少饱和脂肪摄入</li>
                        <li>增加膳食纤维摄入</li>
                        <li>定期监测肝功能</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <!-- 随访任务 -->
              <div class="bg-white rounded-lg border border-gray-200 p-5">
                <h3 class="text-lg font-semibold mb-4 flex items-center">
                  <i class="fas fa-tasks text-orange-500 mr-2"></i>随访任务
                </h3>
                <div class="space-y-3">
                  <div class="flex items-start p-3 bg-gray-50 rounded-lg">
                    <input type="checkbox" class="mt-1 mr-3" checked />
                    <div class="flex-1">
                      <div class="flex justify-between">
                        <span class="font-medium">测量血压并记录</span>
                        <span class="text-xs text-gray-500"
                          >每周一、三、五</span
                        >
                      </div>
                      <p class="text-sm text-gray-600 mt-1">
                        早晚各一次，测量前静坐5分钟
                      </p>
                    </div>
                  </div>

                  <div class="flex items-start p-3 bg-gray-50 rounded-lg">
                    <input type="checkbox" class="mt-1 mr-3" checked />
                    <div class="flex-1">
                      <div class="flex justify-between">
                        <span class="font-medium">监测空腹血糖</span>
                        <span class="text-xs text-gray-500">每周二、六</span>
                      </div>
                      <p class="text-sm text-gray-600 mt-1">
                        晨起空腹测量，记录结果
                      </p>
                    </div>
                  </div>

                  <div class="flex items-start p-3 bg-gray-50 rounded-lg">
                    <input type="checkbox" class="mt-1 mr-3" />
                    <div class="flex-1">
                      <div class="flex justify-between">
                        <span class="font-medium">服药提醒</span>
                        <span class="text-xs text-gray-500">每日</span>
                      </div>
                      <p class="text-sm text-gray-600 mt-1">
                        早晚各一次，设置手机提醒
                      </p>
                    </div>
                  </div>

                  <div class="flex items-start p-3 bg-gray-50 rounded-lg">
                    <input type="checkbox" class="mt-1 mr-3" />
                    <div class="flex-1">
                      <div class="flex justify-between">
                        <span class="font-medium">运动计划</span>
                        <span class="text-xs text-gray-500">每周5次</span>
                      </div>
                      <p class="text-sm text-gray-600 mt-1">快走30-45分钟/次</p>
                    </div>
                  </div>

                  <div class="flex items-start p-3 bg-gray-50 rounded-lg">
                    <input type="checkbox" class="mt-1 mr-3" />
                    <div class="flex-1">
                      <div class="flex justify-between">
                        <span class="font-medium">复诊预约</span>
                        <span class="text-xs text-gray-500">2023-08-12</span>
                      </div>
                      <p class="text-sm text-gray-600 mt-1">
                        提前1周预约心血管门诊
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 科普患教 -->
          <div id="education" class="tab-content">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <!-- 问卷量表 -->
              <div class="bg-white rounded-lg border border-gray-200 p-5">
                <h3 class="text-lg font-semibold mb-4 flex items-center">
                  <i class="fas fa-clipboard-question text-blue-500 mr-2"></i
                  >问卷量表
                </h3>
                <div class="space-y-4">
                  <div class="border-b border-gray-100 pb-4">
                    <div class="flex justify-between items-center mb-2">
                      <h4 class="font-medium">高血压知识问卷</h4>
                      <span class="text-xs text-gray-500">2023-05-20</span>
                    </div>
                    <div class="text-sm text-gray-600">
                      <p>得分: 75/100</p>
                      <div class="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                        <div
                          class="bg-blue-600 h-2.5 rounded-full"
                          style="width: 75%"
                        ></div>
                      </div>
                    </div>
                  </div>

                  <div class="border-b border-gray-100 pb-4">
                    <div class="flex justify-between items-center mb-2">
                      <h4 class="font-medium">糖尿病自我管理量表</h4>
                      <span class="text-xs text-gray-500">2023-06-10</span>
                    </div>
                    <div class="text-sm text-gray-600">
                      <p>得分: 68/100</p>
                      <div class="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                        <div
                          class="bg-blue-600 h-2.5 rounded-full"
                          style="width: 68%"
                        ></div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div class="flex justify-between items-center mb-2">
                      <h4 class="font-medium">生活质量量表(SF-36)</h4>
                      <span class="text-xs text-gray-500">2023-07-15</span>
                    </div>
                    <div class="text-sm text-gray-600">
                      <p>生理健康: 65/100</p>
                      <div class="w-full bg-gray-200 rounded-full h-2.5 mt-1">
                        <div
                          class="bg-green-600 h-2.5 rounded-full"
                          style="width: 65%"
                        ></div>
                      </div>
                      <p class="mt-2">心理健康: 72/100</p>
                      <div class="w-full bg-gray-200 rounded-full h-2.5 mt-1">
                        <div
                          class="bg-green-600 h-2.5 rounded-full"
                          style="width: 72%"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- 科普患教 -->
              <div class="bg-white rounded-lg border border-gray-200 p-5">
                <h3 class="text-lg font-semibold mb-4 flex items-center">
                  <i class="fas fa-book-open text-green-500 mr-2"></i>科普患教
                </h3>
                <div class="space-y-4">
                  <div class="border-l-4 border-blue-500 pl-4 py-2">
                    <h4 class="font-medium">高血压患者健康手册</h4>
                    <div class="text-sm text-gray-600 mt-1">
                      <p>
                        包含高血压基础知识、饮食建议、运动指导和用药注意事项
                      </p>
                      <button
                        class="mt-2 text-blue-600 hover:text-blue-800 text-sm flex items-center"
                      >
                        <i class="fas fa-download mr-1"></i> 下载PDF
                      </button>
                    </div>
                  </div>

                  <div class="border-l-4 border-green-500 pl-4 py-2">
                    <h4 class="font-medium">糖尿病饮食指南</h4>
                    <div class="text-sm text-gray-600 mt-1">
                      <p>
                        详细介绍糖尿病患者如何科学安排饮食，包括食物选择、份量控制和食谱示例
                      </p>
                      <button
                        class="mt-2 text-blue-600 hover:text-blue-800 text-sm flex items-center"
                      >
                        <i class="fas fa-download mr-1"></i> 下载PDF
                      </button>
                    </div>
                  </div>

                  <div class="border-l-4 border-purple-500 pl-4 py-2">
                    <h4 class="font-medium">家庭血压监测指南</h4>
                    <div class="text-sm text-gray-600 mt-1">
                      <p>正确测量血压的方法、注意事项和记录表格</p>
                      <button
                        class="mt-2 text-blue-600 hover:text-blue-800 text-sm flex items-center"
                      >
                        <i class="fas fa-download mr-1"></i> 下载PDF
                      </button>
                    </div>
                  </div>

                  <div class="border-l-4 border-yellow-500 pl-4 py-2">
                    <h4 class="font-medium">心血管疾病预防视频</h4>
                    <div class="text-sm text-gray-600 mt-1">
                      <p>专家讲解如何通过生活方式预防心血管疾病</p>
                      <button
                        class="mt-2 text-blue-600 hover:text-blue-800 text-sm flex items-center"
                      >
                        <i class="fas fa-play-circle mr-1"></i> 观看视频
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 医疗文书 -->
          <div id="records" class="tab-content">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <!-- 住院记录 -->
              <div class="bg-white rounded-lg border border-gray-200 p-5">
                <h3 class="text-lg font-semibold mb-4 flex items-center">
                  <i class="fas fa-procedures text-purple-500 mr-2"></i>住院记录
                </h3>
                <div class="space-y-4">
                  <div class="border-b border-gray-100 pb-4">
                    <div class="flex justify-between items-center mb-2">
                      <h4 class="font-medium">2023-05-15 至 2023-05-20</h4>
                      <span class="text-xs text-gray-500">心血管内科</span>
                    </div>
                    <div class="text-sm text-gray-600">
                      <p><strong>入院诊断:</strong> 高血压2级 高危组</p>
                      <p>
                        <strong>出院诊断:</strong> 高血压2级 高危组; 2型糖尿病
                      </p>
                      <p>
                        <strong>住院经过:</strong>
                        完善检查，调整降压方案，血糖控制
                      </p>
                      <button
                        class="mt-2 text-blue-600 hover:text-blue-800 text-sm flex items-center"
                      >
                        <i class="fas fa-file-pdf mr-1"></i> 查看出院小结
                      </button>
                    </div>
                  </div>

                  <div>
                    <div class="flex justify-between items-center mb-2">
                      <h4 class="font-medium">2022-03-10 至 2022-03-15</h4>
                      <span class="text-xs text-gray-500">内分泌科</span>
                    </div>
                    <div class="text-sm text-gray-600">
                      <p><strong>入院诊断:</strong> 2型糖尿病</p>
                      <p><strong>出院诊断:</strong> 2型糖尿病</p>
                      <p>
                        <strong>住院经过:</strong> 胰岛素强化治疗，糖尿病教育
                      </p>
                      <button
                        class="mt-2 text-blue-600 hover:text-blue-800 text-sm flex items-center"
                      >
                        <i class="fas fa-file-pdf mr-1"></i> 查看出院小结
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <!-- 病程记录 -->
              <div class="bg-white rounded-lg border border-gray-200 p-5">
                <h3 class="text-lg font-semibold mb-4 flex items-center">
                  <i class="fas fa-file-medical-alt text-blue-500 mr-2"></i
                  >病程记录
                </h3>
                <div class="space-y-4">
                  <div class="border-l-4 border-blue-500 pl-4 py-2">
                    <div class="flex justify-between items-center">
                      <h4 class="font-medium">2023-05-16 首次病程记录</h4>
                      <span class="text-xs text-gray-500">张医生</span>
                    </div>
                    <div class="text-sm text-gray-600 mt-1">
                      <p>
                        患者因"反复头晕、头痛5年，加重1周"入院。BP
                        180/110mmHg，诊断高血压2级高危组...
                      </p>
                      <button
                        class="mt-2 text-blue-600 hover:text-blue-800 text-sm flex items-center"
                      >
                        <i class="fas fa-file-alt mr-1"></i> 查看完整记录
                      </button>
                    </div>
                  </div>

                  <div class="border-l-4 border-green-500 pl-4 py-2">
                    <div class="flex justify-between items-center">
                      <h4 class="font-medium">2023-05-18 主任查房记录</h4>
                      <span class="text-xs text-gray-500">李主任</span>
                    </div>
                    <div class="text-sm text-gray-600 mt-1">
                      <p>
                        患者血压控制可，130-140/80-85mmHg。空腹血糖7.2mmol/L。调整降糖方案...
                      </p>
                      <button
                        class="mt-2 text-blue-600 hover:text-blue-800 text-sm flex items-center"
                      >
                        <i class="fas fa-file-alt mr-1"></i> 查看完整记录
                      </button>
                    </div>
                  </div>

                  <div class="border-l-4 border-purple-500 pl-4 py-2">
                    <div class="flex justify-between items-center">
                      <h4 class="font-medium">2023-05-20 出院记录</h4>
                      <span class="text-xs text-gray-500">张医生</span>
                    </div>
                    <div class="text-sm text-gray-600 mt-1">
                      <p>
                        患者病情稳定，血压血糖控制达标。出院带药: 氨氯地平5mg
                        qd, 厄贝沙坦150mg qd...
                      </p>
                      <button
                        class="mt-2 text-blue-600 hover:text-blue-800 text-sm flex items-center"
                      >
                        <i class="fas fa-file-alt mr-1"></i> 查看完整记录
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
</template>

<style>
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
.custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: #a8a8a8;
}
.shadow-soft {
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
}
.transition-smooth {
    transition: all 0.3s ease;
}
.tab-content {
    display: none;
}
.tab-content.active {
    display: block;
}
</style>