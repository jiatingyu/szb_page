<script setup lang="ts"></script>

<template>
  <div class="container mx-auto px-4 py-6">
    <!-- 页面标题和统计卡片 -->
    <div class="mb-6">
      <h1 class="text-2xl font-bold mb-4 flex items-center">
        <i class="fas fa-calendar-check text-blue-500 mr-3"></i>随访预约管理
      </h1>

      <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
        <!-- 预约结果人数 -->
        <div
          class="bg-white rounded-xl shadow-soft p-4 border-l-4 border-blue-500"
        >
          <div class="flex justify-between items-start">
            <div>
              <p class="text-sm text-gray-500">预约结果人数</p>
              <p class="text-2xl font-bold mt-1">86</p>
            </div>
            <div class="bg-blue-100 p-3 rounded-full text-blue-500">
              <i class="fas fa-calendar-alt text-xl"></i>
            </div>
          </div>
        </div>

        <!-- 预约成功人数 -->
        <div
          class="bg-white rounded-xl shadow-soft p-4 border-l-4 border-green-500"
        >
          <div class="flex justify-between items-start">
            <div>
              <p class="text-sm text-gray-500">预约成功人数</p>
              <p class="text-2xl font-bold mt-1">62</p>
            </div>
            <div class="bg-green-100 p-3 rounded-full text-green-500">
              <i class="fas fa-check-circle text-xl"></i>
            </div>
          </div>
        </div>

        <!-- 联系不上人数 -->
        <div
          class="bg-white rounded-xl shadow-soft p-4 border-l-4 border-red-500"
        >
          <div class="flex justify-between items-start">
            <div>
              <p class="text-sm text-gray-500">联系不上人数</p>
              <p class="text-2xl font-bold mt-1">12</p>
            </div>
            <div class="bg-red-100 p-3 rounded-full text-red-500">
              <i class="fas fa-phone-slash text-xl"></i>
            </div>
          </div>
        </div>

        <!-- 实际随访人数 -->
        <div
          class="bg-white rounded-xl shadow-soft p-4 border-l-4 border-purple-500"
        >
          <div class="flex justify-between items-start">
            <div>
              <p class="text-sm text-gray-500">实际随访人数</p>
              <p class="text-2xl font-bold mt-1">58</p>
            </div>
            <div class="bg-purple-100 p-3 rounded-full text-purple-500">
              <i class="fas fa-user-check text-xl"></i>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 日期导航和患者列表 -->
    <div class="bg-white rounded-xl shadow-soft overflow-hidden">
      <!-- 日期导航 -->
      <div class="border-b border-gray-200">
        <div class="flex overflow-x-auto custom-scrollbar px-4">
          <div class="flex space-x-2 py-3">
            <button
              class="px-4 py-2 bg-blue-600 text-white rounded-lg flex flex-col items-center min-w-[100px]"
            >
              <span class="text-sm">今天</span>
              <span class="font-bold">6月15日</span>
            </button>
            <button
              class="px-4 py-2 bg-white border border-gray-200 rounded-lg flex flex-col items-center min-w-[100px] hover:bg-gray-50"
            >
              <span class="text-sm">明天</span>
              <span class="font-bold">6月16日</span>
            </button>
            <button
              class="px-4 py-2 bg-white border border-gray-200 rounded-lg flex flex-col items-center min-w-[100px] hover:bg-gray-50"
            >
              <span class="text-sm">周一</span>
              <span class="font-bold">6月17日</span>
            </button>
            <button
              class="px-4 py-2 bg-white border border-gray-200 rounded-lg flex flex-col items-center min-w-[100px] hover:bg-gray-50"
            >
              <span class="text-sm">周二</span>
              <span class="font-bold">6月18日</span>
            </button>
            <button
              class="px-4 py-2 bg-white border border-gray-200 rounded-lg flex flex-col items-center min-w-[100px] hover:bg-gray-50"
            >
              <span class="text-sm">周三</span>
              <span class="font-bold">6月19日</span>
            </button>
            <button
              class="px-4 py-2 bg-white border border-gray-200 rounded-lg flex flex-col items-center min-w-[100px] hover:bg-gray-50"
            >
              <span class="text-sm">周四</span>
              <span class="font-bold">6月20日</span>
            </button>
            <button
              class="px-4 py-2 bg-white border border-gray-200 rounded-lg flex flex-col items-center min-w-[100px] hover:bg-gray-50"
            >
              <span class="text-sm">周五</span>
              <span class="font-bold">6月21日</span>
            </button>
          </div>
        </div>
      </div>

      <!-- 患者列表 -->
      <div class="p-4">
        <div class="mb-4 flex justify-between items-center">
          <h2 class="text-lg font-semibold flex items-center">
            <i class="fas fa-users mr-2 text-blue-500"></i>今日随访患者 (12人)
          </h2>
          <div class="flex items-center">
            <div class="mr-4 flex items-center">
              <div class="w-3 h-3 rounded-full bg-blue-500 mr-1"></div>
              <span class="text-sm">待预约</span>
            </div>
            <div class="mr-4 flex items-center">
              <div class="w-3 h-3 rounded-full bg-green-500 mr-1"></div>
              <span class="text-sm">已确认</span>
            </div>
            <div class="mr-4 flex items-center">
              <div class="w-3 h-3 rounded-full bg-red-500 mr-1"></div>
              <span class="text-sm">联系不上</span>
            </div>
            <div class="flex items-center">
              <div class="w-3 h-3 rounded-full bg-purple-500 mr-1"></div>
              <span class="text-sm">已完成</span>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <!-- 患者卡片1 - 待预约 -->
          <div
            class="bg-white border-2 border-blue-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-smooth"
          >
            <div class="flex justify-between items-start mb-3">
              <div class="flex items-center">
                <img
                  src="https://randomuser.me/api/portraits/women/45.jpg"
                  alt="患者头像"
                  class="w-12 h-12 rounded-full border-2 border-blue-300"
                />
                <div class="ml-3">
                  <h3 class="font-bold">
                    李小红
                    <span class="text-sm font-normal text-gray-500"
                      >(女, 52岁)</span
                    >
                  </h3>
                  <p class="text-sm text-gray-600">高血压2级</p>
                </div>
              </div>
              <span
                class="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs"
                >待预约</span
              >
            </div>
            <div class="text-sm text-gray-600 mb-3">
              <p class="mb-1">
                <i class="fas fa-phone-alt mr-2 text-blue-500"></i> 138****1234
              </p>
              <p>
                <i class="fas fa-clock mr-2 text-blue-500"></i> 计划时间:
                09:00-10:00
              </p>
            </div>
            <div class="flex justify-between">
              <button
                class="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700"
              >
                <i class="fas fa-phone mr-1"></i>电话预约
              </button>
              <button
                class="px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm hover:bg-gray-200"
              >
                <i class="fas fa-comment-medical mr-1"></i>短信提醒
              </button>
            </div>
          </div>

          <!-- 患者卡片2 - 已确认 -->
          <div
            class="bg-white border-2 border-green-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-smooth"
          >
            <div class="flex justify-between items-start mb-3">
              <div class="flex items-center">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="患者头像"
                  class="w-12 h-12 rounded-full border-2 border-green-300"
                />
                <div class="ml-3">
                  <h3 class="font-bold">
                    张建国
                    <span class="text-sm font-normal text-gray-500"
                      >(男, 65岁)</span
                    >
                  </h3>
                  <p class="text-sm text-gray-600">2型糖尿病</p>
                </div>
              </div>
              <span
                class="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs"
                >已确认</span
              >
            </div>
            <div class="text-sm text-gray-600 mb-3">
              <p class="mb-1">
                <i class="fas fa-phone-alt mr-2 text-blue-500"></i> 139****5678
              </p>
              <p>
                <i class="fas fa-clock mr-2 text-blue-500"></i> 确认时间:
                10:30-11:00
              </p>
            </div>
            <div class="flex justify-between">
              <button
                class="px-3 py-1 bg-green-600 text-white rounded text-sm hover:bg-green-700"
              >
                <i class="fas fa-check-circle mr-1"></i>确认随访
              </button>
              <button
                class="px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm hover:bg-gray-200"
              >
                <i class="fas fa-edit mr-1"></i>修改时间
              </button>
            </div>
          </div>

          <!-- 患者卡片3 - 联系不上 -->
          <div
            class="bg-white border-2 border-red-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-smooth"
          >
            <div class="flex justify-between items-start mb-3">
              <div class="flex items-center">
                <img
                  src="https://randomuser.me/api/portraits/women/68.jpg"
                  alt="患者头像"
                  class="w-12 h-12 rounded-full border-2 border-red-300"
                />
                <div class="ml-3">
                  <h3 class="font-bold">
                    王丽华
                    <span class="text-sm font-normal text-gray-500"
                      >(女, 48岁)</span
                    >
                  </h3>
                  <p class="text-sm text-gray-600">高脂血症</p>
                </div>
              </div>
              <span
                class="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs"
                >联系不上</span
              >
            </div>
            <div class="text-sm text-gray-600 mb-3">
              <p class="mb-1">
                <i class="fas fa-phone-alt mr-2 text-blue-500"></i> 136****9012
              </p>
              <p>
                <i class="fas fa-clock mr-2 text-blue-500"></i> 计划时间:
                14:00-15:00
              </p>
            </div>
            <div class="flex justify-between">
              <button
                class="px-3 py-1 bg-red-600 text-white rounded text-sm hover:bg-red-700"
              >
                <i class="fas fa-phone mr-1"></i>再次拨打
              </button>
              <button
                class="px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm hover:bg-gray-200"
              >
                <i class="fas fa-envelope mr-1"></i>发送邮件
              </button>
            </div>
          </div>

          <!-- 患者卡片4 - 已完成 -->
          <div
            class="bg-white border-2 border-purple-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-smooth"
          >
            <div class="flex justify-between items-start mb-3">
              <div class="flex items-center">
                <img
                  src="https://randomuser.me/api/portraits/men/75.jpg"
                  alt="患者头像"
                  class="w-12 h-12 rounded-full border-2 border-purple-300"
                />
                <div class="ml-3">
                  <h3 class="font-bold">
                    赵国强
                    <span class="text-sm font-normal text-gray-500"
                      >(男, 60岁)</span
                    >
                  </h3>
                  <p class="text-sm text-gray-600">冠心病</p>
                </div>
              </div>
              <span
                class="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-xs"
                >已完成</span
              >
            </div>
            <div class="text-sm text-gray-600 mb-3">
              <p class="mb-1">
                <i class="fas fa-phone-alt mr-2 text-blue-500"></i> 135****3456
              </p>
              <p>
                <i class="fas fa-clock mr-2 text-blue-500"></i> 完成时间:
                08:30-09:00
              </p>
            </div>
            <div class="flex justify-between">
              <button
                class="px-3 py-1 bg-purple-600 text-white rounded text-sm hover:bg-purple-700"
              >
                <i class="fas fa-file-alt mr-1"></i>查看记录
              </button>
              <button
                class="px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm hover:bg-gray-200"
              >
                <i class="fas fa-calendar-plus mr-1"></i>下次预约
              </button>
            </div>
          </div>

          <!-- 患者卡片5 - 待预约 -->
          <div
            class="bg-white border-2 border-blue-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-smooth"
          >
            <div class="flex justify-between items-start mb-3">
              <div class="flex items-center">
                <img
                  src="https://randomuser.me/api/portraits/women/33.jpg"
                  alt="患者头像"
                  class="w-12 h-12 rounded-full border-2 border-blue-300"
                />
                <div class="ml-3">
                  <h3 class="font-bold">
                    孙芳
                    <span class="text-sm font-normal text-gray-500"
                      >(女, 45岁)</span
                    >
                  </h3>
                  <p class="text-sm text-gray-600">高血压1级</p>
                </div>
              </div>
              <span
                class="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs"
                >待预约</span
              >
            </div>
            <div class="text-sm text-gray-600 mb-3">
              <p class="mb-1">
                <i class="fas fa-phone-alt mr-2 text-blue-500"></i> 137****7890
              </p>
              <p>
                <i class="fas fa-clock mr-2 text-blue-500"></i> 计划时间:
                11:00-12:00
              </p>
            </div>
            <div class="flex justify-between">
              <button
                class="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700"
              >
                <i class="fas fa-phone mr-1"></i>电话预约
              </button>
              <button
                class="px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm hover:bg-gray-200"
              >
                <i class="fas fa-comment-medical mr-1"></i>短信提醒
              </button>
            </div>
          </div>

          <!-- 患者卡片6 - 已确认 -->
          <div
            class="bg-white border-2 border-green-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-smooth"
          >
            <div class="flex justify-between items-start mb-3">
              <div class="flex items-center">
                <img
                  src="https://randomuser.me/api/portraits/men/55.jpg"
                  alt="患者头像"
                  class="w-12 h-12 rounded-full border-2 border-green-300"
                />
                <div class="ml-3">
                  <h3 class="font-bold">
                    刘建军
                    <span class="text-sm font-normal text-gray-500"
                      >(男, 58岁)</span
                    >
                  </h3>
                  <p class="text-sm text-gray-600">2型糖尿病</p>
                </div>
              </div>
              <span
                class="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs"
                >已确认</span
              >
            </div>
            <div class="text-sm text-gray-600 mb-3">
              <p class="mb-1">
                <i class="fas fa-phone-alt mr-2 text-blue-500"></i> 138****2345
              </p>
              <p>
                <i class="fas fa-clock mr-2 text-blue-500"></i> 确认时间:
                15:00-16:00
              </p>
            </div>
            <div class="flex justify-between">
              <button
                class="px-3 py-1 bg-green-600 text-white rounded text-sm hover:bg-green-700"
              >
                <i class="fas fa-check-circle mr-1"></i>确认随访
              </button>
              <button
                class="px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm hover:bg-gray-200"
              >
                <i class="fas fa-edit mr-1"></i>修改时间
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 小程序预约确认提示 -->
    <div class="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
      <div class="flex items-start">
        <div class="bg-blue-100 p-2 rounded-full text-blue-500 mr-3">
          <i class="fas fa-mobile-alt"></i>
        </div>
        <div>
          <h3 class="font-bold text-blue-800 mb-1">小程序预约确认</h3>
          <p class="text-sm text-blue-700">
            患者可通过微信小程序确认随访预约时间，系统将自动发送提醒通知。已确认的预约将显示"已确认"状态。
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
