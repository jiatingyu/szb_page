<script setup lang="ts">
import { onMounted } from "vue";

onMounted(() => {
  // 选项卡切换功能
  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      // 移除所有active类
      document
        .querySelectorAll(".tab-btn")
        .forEach((b) => b.classList.remove("active"));
      document
        .querySelectorAll(".tab-content")
        .forEach((c) => c.classList.remove("active"));

      // 添加active类到当前按钮和对应内容
      // this.classList.add("active");
      // const tabId = this.getAttribute("data-tab");
      // document.getElementById(tabId).classList.add("active");
    });
  });

  // 模拟数据加载效果
  setTimeout(() => {
    document.querySelectorAll(".prescription-card").forEach((card, index) => {
      setTimeout(() => {
        // @ts-ignore
        card.style.opacity = "1";
      }, index * 100);
    });
  }, 300);
});
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <div class="flex items-center mb-8">
      <h1 class="text-3xl font-bold text-gray-800">今日随访</h1>
      <span
        class="ml-4 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
        >▲1.4-1.8</span
      >
    </div>

    <!-- 患者信息卡片 -->
    <div class="bg-white rounded-xl shadow-md p-6 mb-8">
      <div class="flex items-center">
        <div
          class="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mr-4"
        >
          <i class="fas fa-user text-blue-500 text-2xl"></i>
        </div>
        <div>
          <h2 class="text-xl font-semibold text-gray-800">张伟 (男, 45岁)</h2>
          <div class="flex flex-wrap mt-1">
            <span
              class="text-sm bg-gray-100 text-gray-600 px-2 py-1 rounded mr-2 mb-1"
              >高血压</span
            >
            <span
              class="text-sm bg-gray-100 text-gray-600 px-2 py-1 rounded mr-2 mb-1"
              >2型糖尿病</span
            >
            <span
              class="text-sm bg-gray-100 text-gray-600 px-2 py-1 rounded mr-2 mb-1"
              >BMI: 28.5</span
            >
          </div>
        </div>
      </div>
    </div>

    <!-- 选项卡导航 -->
    <div class="flex border-b border-gray-200 mb-6">
      <button
        class="tab-btn px-4 py-2 font-medium text-gray-600 hover:text-blue-500 border-b-2 border-transparent hover:border-blue-300 active"
        data-tab="exercise"
      >
        运动处方
      </button>
      <button
        class="tab-btn px-4 py-2 font-medium text-gray-600 hover:text-blue-500 border-b-2 border-transparent hover:border-blue-300"
        data-tab="diet"
      >
        饮食处方
      </button>
      <button
        class="tab-btn px-4 py-2 font-medium text-gray-600 hover:text-blue-500 border-b-2 border-transparent hover:border-blue-300"
        data-tab="assessment"
      >
        评估量表
      </button>
      <button
        class="tab-btn px-4 py-2 font-medium text-gray-600 hover:text-blue-500 border-b-2 border-transparent hover:border-blue-300"
        data-tab="summary"
      >
        随访小结
      </button>
    </div>

    <!-- 运动处方内容 -->
    <div id="exercise" class="tab-content active">
      <div class="bg-white rounded-xl shadow-md p-6 mb-6">
        <div class="flex justify-between items-center mb-4">
          <h3 class="text-xl font-semibold text-gray-800">自动推荐运动处方</h3>
          <button
            class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            <i class="fas fa-sync-alt mr-2"></i>重新生成
          </button>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- 推荐处方1 -->
          <div
            class="prescription-card bg-white border border-gray-200 rounded-lg p-5 shadow-sm"
          >
            <div class="flex items-start mb-3">
              <div class="bg-blue-100 p-2 rounded-lg mr-3">
                <i class="fas fa-walking text-blue-500 text-xl"></i>
              </div>
              <div>
                <h4 class="font-semibold text-gray-800">有氧运动方案</h4>
                <p class="text-sm text-gray-500">适合轻度高血压患者</p>
              </div>
            </div>
            <ul class="text-gray-700 space-y-2 pl-4">
              <li class="flex items-start">
                <i class="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                <span>快走或慢跑，每周5次，每次30-45分钟</span>
              </li>
              <li class="flex items-start">
                <i class="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                <span>心率控制在(220-年龄)×60%-70%范围内</span>
              </li>
              <li class="flex items-start">
                <i class="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                <span>运动前后各5分钟热身和放松</span>
              </li>
            </ul>
            <div class="mt-4 pt-3 border-t border-gray-100 flex justify-end">
              <button
                class="px-3 py-1 bg-blue-50 text-blue-600 rounded text-sm hover:bg-blue-100"
              >
                应用此方案
              </button>
            </div>
          </div>

          <!-- 推荐处方2 -->
          <div
            class="prescription-card bg-white border border-gray-200 rounded-lg p-5 shadow-sm"
          >
            <div class="flex items-start mb-3">
              <div class="bg-purple-100 p-2 rounded-lg mr-3">
                <i class="fas fa-dumbbell text-purple-500 text-xl"></i>
              </div>
              <div>
                <h4 class="font-semibold text-gray-800">抗阻训练方案</h4>
                <p class="text-sm text-gray-500">改善胰岛素敏感性</p>
              </div>
            </div>
            <ul class="text-gray-700 space-y-2 pl-4">
              <li class="flex items-start">
                <i class="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                <span>每周2-3次，每次8-10个动作</span>
              </li>
              <li class="flex items-start">
                <i class="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                <span>每个动作2-3组，每组10-15次</span>
              </li>
              <li class="flex items-start">
                <i class="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                <span>重点训练大肌群：腿、背、胸等</span>
              </li>
            </ul>
            <div class="mt-4 pt-3 border-t border-gray-100 flex justify-end">
              <button
                class="px-3 py-1 bg-blue-50 text-blue-600 rounded text-sm hover:bg-blue-100"
              >
                应用此方案
              </button>
            </div>
          </div>
        </div>

        <div class="mt-8">
          <h4 class="font-medium text-gray-700 mb-3">运动注意事项</h4>
          <div
            class="bg-yellow-50 border-l-4 border-yellow-400 p-4 text-sm text-gray-700"
          >
            <p class="flex items-start">
              <i
                class="fas fa-exclamation-circle text-yellow-500 mr-2 mt-0.5"
              ></i>
              <span
                >避免空腹运动，防止低血糖发生。运动前后监测血糖，如运动前血糖<5.6mmol/L，应适当加餐。</span
              >
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- 饮食处方内容 -->
    <div id="diet" class="tab-content">
      <div class="bg-white rounded-xl shadow-md p-6 mb-6">
        <div class="flex justify-between items-center mb-4">
          <h3 class="text-xl font-semibold text-gray-800">7天饮食处方推荐</h3>
          <button
            class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            <i class="fas fa-sync-alt mr-2"></i>重新生成
          </button>
        </div>

        <div class="overflow-x-auto">
          <table class="min-w-full bg-white rounded-lg overflow-hidden">
            <thead class="bg-gray-50">
              <tr>
                <th
                  class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  星期
                </th>
                <th
                  class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  早餐
                </th>
                <th
                  class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  午餐
                </th>
                <th
                  class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  晚餐
                </th>
                <th
                  class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  加餐
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr>
                <td
                  class="px-4 py-3 whitespace-nowrap font-medium text-gray-900"
                >
                  星期一
                </td>
                <td class="px-4 py-3 text-sm text-gray-700">
                  全麦面包1片+鸡蛋1个+牛奶200ml
                </td>
                <td class="px-4 py-3 text-sm text-gray-700">
                  糙米饭100g+清蒸鱼150g+西兰花200g
                </td>
                <td class="px-4 py-3 text-sm text-gray-700">
                  杂粮粥1碗+鸡胸肉100g+凉拌黄瓜
                </td>
                <td class="px-4 py-3 text-sm text-gray-700">苹果1个(约200g)</td>
              </tr>
              <tr>
                <td
                  class="px-4 py-3 whitespace-nowrap font-medium text-gray-900"
                >
                  星期二
                </td>
                <td class="px-4 py-3 text-sm text-gray-700">
                  燕麦粥1碗+水煮蛋1个+小番茄5个
                </td>
                <td class="px-4 py-3 text-sm text-gray-700">
                  荞麦面100g+虾仁150g+菠菜200g
                </td>
                <td class="px-4 py-3 text-sm text-gray-700">
                  红薯150g+豆腐150g+清炒时蔬
                </td>
                <td class="px-4 py-3 text-sm text-gray-700">无糖酸奶150ml</td>
              </tr>
              <tr>
                <td
                  class="px-4 py-3 whitespace-nowrap font-medium text-gray-900"
                >
                  星期三
                </td>
                <td class="px-4 py-3 text-sm text-gray-700">
                  玉米1根+鸡蛋1个+豆浆200ml
                </td>
                <td class="px-4 py-3 text-sm text-gray-700">
                  杂粮饭100g+鸡胸肉150g+芦笋200g
                </td>
                <td class="px-4 py-3 text-sm text-gray-700">
                  小米粥1碗+清蒸鲈鱼150g+凉拌木耳
                </td>
                <td class="px-4 py-3 text-sm text-gray-700">核桃2个</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="bg-green-50 border-l-4 border-green-400 p-4">
            <h4 class="font-medium text-gray-700 mb-2">饮食原则</h4>
            <ul class="text-sm text-gray-700 space-y-1">
              <li>• 每日总热量控制在1800-2000kcal</li>
              <li>• 碳水化合物占比45-50%，蛋白质20-25%，脂肪25-30%</li>
              <li>• 限制精制糖和饱和脂肪酸摄入</li>
              <li>• 增加膳食纤维摄入，每日25-30g</li>
            </ul>
          </div>
          <div class="bg-blue-50 border-l-4 border-blue-400 p-4">
            <h4 class="font-medium text-gray-700 mb-2">营养补充建议</h4>
            <ul class="text-sm text-gray-700 space-y-1">
              <li>• 每日补充复合维生素B族</li>
              <li>• 适量补充维生素D 400IU/日</li>
              <li>• 可考虑补充Ω-3脂肪酸(鱼油)</li>
              <li>• 保证每日饮水1500-2000ml</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- 评估量表内容 -->
    <div id="assessment" class="tab-content">
      <div class="bg-white rounded-xl shadow-md p-6 mb-6">
        <div class="flex justify-between items-center mb-4">
          <h3 class="text-xl font-semibold text-gray-800">评估量表</h3>
          <button
            class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            <i class="fas fa-plus mr-2"></i>添加量表
          </button>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <!-- 营养评估 -->
          <div
            class="scale-item bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition"
          >
            <div class="flex items-start mb-3">
              <div class="bg-green-100 p-2 rounded-lg mr-3">
                <i class="fas fa-utensils text-green-500"></i>
              </div>
              <div>
                <h4 class="font-semibold text-gray-800">
                  营养风险筛查(NRS 2002)
                </h4>
                <p class="text-xs text-gray-500">最后评估: 2023-05-15</p>
              </div>
            </div>
            <div class="text-sm text-gray-700 mb-3">
              <p>
                评估结果:
                <span class="font-medium text-yellow-600">中度营养风险</span>
              </p>
              <p>得分: <span class="font-medium">4分</span></p>
            </div>
            <div class="flex justify-between text-xs">
              <button class="text-blue-500 hover:text-blue-700">
                查看详情
              </button>
              <button class="text-green-500 hover:text-green-700">
                重新评估
              </button>
            </div>
          </div>

          <!-- 运动评估 -->
          <div
            class="scale-item bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition"
          >
            <div class="flex items-start mb-3">
              <div class="bg-blue-100 p-2 rounded-lg mr-3">
                <i class="fas fa-running text-blue-500"></i>
              </div>
              <div>
                <h4 class="font-semibold text-gray-800">
                  国际体力活动问卷(IPAQ)
                </h4>
                <p class="text-xs text-gray-500">最后评估: 2023-06-02</p>
              </div>
            </div>
            <div class="text-sm text-gray-700 mb-3">
              <p>
                评估结果:
                <span class="font-medium text-green-600">中等活动水平</span>
              </p>
              <p>MET-min/week: <span class="font-medium">1680</span></p>
            </div>
            <div class="flex justify-between text-xs">
              <button class="text-blue-500 hover:text-blue-700">
                查看详情
              </button>
              <button class="text-green-500 hover:text-green-700">
                重新评估
              </button>
            </div>
          </div>

          <!-- 心理评估 -->
          <div
            class="scale-item bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition"
          >
            <div class="flex items-start mb-3">
              <div class="bg-purple-100 p-2 rounded-lg mr-3">
                <i class="fas fa-brain text-purple-500"></i>
              </div>
              <div>
                <h4 class="font-semibold text-gray-800">抑郁自评量表(PHQ-9)</h4>
                <p class="text-xs text-gray-500">最后评估: 2023-04-28</p>
              </div>
            </div>
            <div class="text-sm text-gray-700 mb-3">
              <p>
                评估结果:
                <span class="font-medium text-blue-600">轻度抑郁</span>
              </p>
              <p>得分: <span class="font-medium">8分</span></p>
            </div>
            <div class="flex justify-between text-xs">
              <button class="text-blue-500 hover:text-blue-700">
                查看详情
              </button>
              <button class="text-green-500 hover:text-green-700">
                重新评估
              </button>
            </div>
          </div>

          <!-- 疾病评估 -->
          <div
            class="scale-item bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition"
          >
            <div class="flex items-start mb-3">
              <div class="bg-red-100 p-2 rounded-lg mr-3">
                <i class="fas fa-heartbeat text-red-500"></i>
              </div>
              <div>
                <h4 class="font-semibold text-gray-800">糖尿病自我管理量表</h4>
                <p class="text-xs text-gray-500">最后评估: 2023-06-10</p>
              </div>
            </div>
            <div class="text-sm text-gray-700 mb-3">
              <p>
                评估结果:
                <span class="font-medium text-orange-500">自我管理一般</span>
              </p>
              <p>得分: <span class="font-medium">62分</span></p>
            </div>
            <div class="flex justify-between text-xs">
              <button class="text-blue-500 hover:text-blue-700">
                查看详情
              </button>
              <button class="text-green-500 hover:text-green-700">
                重新评估
              </button>
            </div>
          </div>
        </div>

        <div class="mt-8">
          <h4 class="font-medium text-gray-700 mb-3">新增评估量表</h4>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
            <button
              class="py-2 px-3 bg-gray-100 hover:bg-gray-200 rounded text-sm text-gray-700 transition flex items-center justify-center"
            >
              <i class="fas fa-utensils mr-2 text-green-500"></i>营养评估
            </button>
            <button
              class="py-2 px-3 bg-gray-100 hover:bg-gray-200 rounded text-sm text-gray-700 transition flex items-center justify-center"
            >
              <i class="fas fa-running mr-2 text-blue-500"></i>运动评估
            </button>
            <button
              class="py-2 px-3 bg-gray-100 hover:bg-gray-200 rounded text-sm text-gray-700 transition flex items-center justify-center"
            >
              <i class="fas fa-brain mr-2 text-purple-500"></i>心理评估
            </button>
            <button
              class="py-2 px-3 bg-gray-100 hover:bg-gray-200 rounded text-sm text-gray-700 transition flex items-center justify-center"
            >
              <i class="fas fa-heartbeat mr-2 text-red-500"></i>疾病评估
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- 随访小结内容 -->
    <div id="summary" class="tab-content">
      <div class="bg-white rounded-xl shadow-md p-6 mb-6">
        <h3 class="text-xl font-semibold text-gray-800 mb-4">随访小结</h3>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- 评估结果 -->
          <div>
            <div class="flex justify-between items-center mb-3">
              <h4 class="font-medium text-gray-700">评估结果</h4>
              <button
                class="text-sm text-blue-500 hover:text-blue-700 flex items-center"
              >
                <i class="fas fa-file-alt mr-1"></i>选择模板
              </button>
            </div>

            <div class="space-y-3 mb-4">
              <div class="template-item p-3">
                <div class="flex justify-between">
                  <span class="font-medium text-gray-700">高血压控制评估</span>
                  <span class="text-xs text-gray-500">使用次数: 28</span>
                </div>
                <p class="text-sm text-gray-600 mt-1">
                  患者血压控制一般，晨起血压偏高，建议调整用药时间...
                </p>
              </div>

              <div class="template-item p-3">
                <div class="flex justify-between">
                  <span class="font-medium text-gray-700">糖尿病管理评估</span>
                  <span class="text-xs text-gray-500">使用次数: 45</span>
                </div>
                <p class="text-sm text-gray-600 mt-1">
                  患者血糖波动较大，餐后血糖控制不佳，需加强饮食管理...
                </p>
              </div>
            </div>

            <textarea
              class="w-full h-40 border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
              placeholder="请输入评估结果..."
            ></textarea>
          </div>

          <!-- 后续治疗计划 -->
          <div>
            <div class="flex justify-between items-center mb-3">
              <h4 class="font-medium text-gray-700">后续治疗计划</h4>
              <button
                class="text-sm text-blue-500 hover:text-blue-700 flex items-center"
              >
                <i class="fas fa-file-alt mr-1"></i>选择模板
              </button>
            </div>

            <div class="space-y-3 mb-4">
              <div class="template-item p-3">
                <div class="flex justify-between">
                  <span class="font-medium text-gray-700">高血压随访计划</span>
                  <span class="text-xs text-gray-500">使用次数: 32</span>
                </div>
                <p class="text-sm text-gray-600 mt-1">
                  1. 继续当前降压方案 2. 每周监测血压3次 3. 低盐饮食...
                </p>
              </div>

              <div class="template-item p-3">
                <div class="flex justify-between">
                  <span class="font-medium text-gray-700">糖尿病综合管理</span>
                  <span class="text-xs text-gray-500">使用次数: 56</span>
                </div>
                <p class="text-sm text-gray-600 mt-1">
                  1. 调整胰岛素剂量 2. 营养科会诊 3. 每月复查糖化血红蛋白...
                </p>
              </div>
            </div>

            <textarea
              class="w-full h-40 border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
              placeholder="请输入后续治疗计划..."
            ></textarea>
          </div>
        </div>

        <div class="mt-6 flex justify-end space-x-3">
          <button
            class="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition"
          >
            保存草稿
          </button>
          <button
            class="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            完成随访
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.prescription-card {
  transition: all 0.3s ease;
}
.prescription-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}
.tab-content {
  display: none;
}
.tab-content.active {
  display: block;
  animation: fadeIn 0.5s;
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.scale-item {
  border-left: 4px solid #3b82f6;
}
.template-item {
  background-color: #f8fafc;
  border-radius: 8px;
  transition: all 0.3s ease;
}
.template-item:hover {
  background-color: #e2e8f0;
  cursor: pointer;
}
</style>
