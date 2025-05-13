<script setup lang="ts"></script>

<template>
  <main class=" mx-auto px-4 sm:px-6 lg:px-8 py-6">
    <!-- 操作区域 -->
    <div class="bg-white rounded-lg shadow-sm p-6 mb-6">
      <div class="flex flex-col md:flex-row md:items-center md:justify-between">
        <h2 class="text-xl font-semibold text-gray-800 mb-4 md:mb-0">
          自动化筛查
        </h2>
        <div
          class="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3"
        >
          <button
            id="startScreeningBtn"
            class="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-all flex items-center justify-center"
          >
            <i class="fas fa-play mr-2"></i>开始筛查
          </button>
          <button
            class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-all flex items-center justify-center"
          >
            <i class="fas fa-cog mr-2"></i>筛查配置
          </button>
          <button
            class="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-md text-sm font-medium transition-all flex items-center justify-center"
          >
            <i class="fas fa-sync-alt mr-2"></i>刷新数据
          </button>
        </div>
      </div>
    </div>

    <!-- 筛查统计 -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
      <div class="bg-white rounded-lg shadow-sm p-6">
        <div class="flex items-center">
          <div class="p-3 rounded-full bg-blue-100 text-blue-600 mr-4">
            <i class="fas fa-users text-xl"></i>
          </div>
          <div>
            <p class="text-sm text-gray-500">筛查总人数</p>
            <p class="text-2xl font-semibold text-gray-800">1,245</p>
          </div>
        </div>
      </div>
      <div class="bg-white rounded-lg shadow-sm p-6">
        <div class="flex items-center">
          <div class="p-3 rounded-full bg-green-100 text-green-600 mr-4">
            <i class="fas fa-exclamation-triangle text-xl"></i>
          </div>
          <div>
            <p class="text-sm text-gray-500">高危人数</p>
            <p class="text-2xl font-semibold text-gray-800">816</p>
          </div>
        </div>
      </div>
      <div class="bg-white rounded-lg shadow-sm p-6">
        <div class="flex items-center">
          <div class="p-3 rounded-full bg-yellow-100 text-yellow-600 mr-4">
            <i class="fas fa-check-circle text-xl"></i>
          </div>
          <div>
            <p class="text-sm text-gray-500">已确认人数</p>
            <p class="text-2xl font-semibold text-gray-800">42</p>
          </div>
        </div>
      </div>
      <div class="bg-white rounded-lg shadow-sm p-6">
        <div class="flex items-center">
          <div class="p-3 rounded-full bg-purple-100 text-purple-600 mr-4">
            <i class="fas fa-envelope text-xl"></i>
          </div>
          <div>
            <p class="text-sm text-gray-500">已通知人数</p>
            <p class="text-2xl font-semibold text-gray-800">38</p>
          </div>
        </div>
      </div>
    </div>

    <!-- 筛查结果 -->
    <div class="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
      <div class="px-6 py-4 border-b border-gray-200">
        <div
          class="flex flex-col md:flex-row md:items-center md:justify-between"
        >
          <h3 class="text-lg font-medium text-gray-900 mb-2 md:mb-0">
            筛查高危结果
          </h3>
          <div class="flex items-center space-x-3">
            <div class="relative">
              <select
                class="block w-full pl-3 pr-8 py-2 text-sm border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 rounded-md"
              >
                <option>全部病种</option>
                <option>高血压</option>
                <option>糖尿病</option>
                <option>肾脏病</option>
                <option>心脏病</option>
              </select>
            </div>
            <div class="relative">
              <select
                class="block w-full pl-3 pr-8 py-2 text-sm border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 rounded-md"
              >
                <option>全部状态</option>
                <option>待确认</option>
                <option>已确认</option>
                <option>已通知</option>
              </select>
            </div>
            <div class="relative w-48">
              <input
                type="text"
                placeholder="搜索患者..."
                class="block w-full pl-3 pr-10 py-2 text-sm border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 rounded-md"
              />
              <div
                class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"
              >
                <i class="fas fa-search text-gray-400"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 患者列表 -->
      <div class="divide-y divide-gray-200">
        <!-- 患者1 -->
        <div class="patient-card p-4 hover:bg-gray-50">
          <div class="flex flex-col md:flex-row md:items-center">
            <div class="flex-1 mb-3 md:mb-0">
              <div class="flex items-center">
                <div
                  class="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3"
                >
                  <i class="fas fa-user"></i>
                </div>
                <div>
                  <h4 class="font-medium text-gray-900">张伟建 (男, 45岁)</h4>
                  <p class="text-sm text-gray-500">
                    病历号: P20230615001 | 联系电话: 138****1234
                  </p>
                </div>
              </div>
            </div>
            <div class="flex-1">
              <div class="flex flex-wrap items-center gap-2">
                <span
                  class="px-2 py-1 text-xs font-medium rounded-full bg-red-100 text-red-800"
                  >高血压</span
                >
                <span
                  class="px-2 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-800"
                  >糖尿病</span
                >
              </div>
            </div>
            <div class="flex-1">
              <p class="text-sm text-gray-900">
                <span class="font-medium">筛查结果:</span>
                血压值偏高(158/96mmHg), 空腹血糖7.8mmol/L
              </p>
            </div>
            <div class="mt-3 md:mt-0 flex items-center space-x-2">
              <button
                class="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-md hover:bg-green-200 transition-all"
              >
                <i class="fas fa-check mr-1"></i>确认
              </button>
              <button
                class="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-md hover:bg-blue-200 transition-all"
              >
                <i class="fas fa-envelope mr-1"></i>通知
              </button>
              <button
                class="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-md hover:bg-gray-200 transition-all"
              >
                <i class="fas fa-ellipsis-v"></i>
              </button>
            </div>
          </div>
        </div>

        <!-- 患者2 -->
        <div class="patient-card p-4 hover:bg-gray-50">
          <div class="flex flex-col md:flex-row md:items-center">
            <div class="flex-1 mb-3 md:mb-0">
              <div class="flex items-center">
                <div
                  class="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3"
                >
                  <i class="fas fa-user"></i>
                </div>
                <div>
                  <h4 class="font-medium text-gray-900">李娜 (女, 52岁)</h4>
                  <p class="text-sm text-gray-500">
                    病历号: P20230615002 | 联系电话: 139****5678
                  </p>
                </div>
              </div>
            </div>
            <div class="flex-1">
              <div class="flex flex-wrap items-center gap-2">
                <span
                  class="px-2 py-1 text-xs font-medium rounded-full bg-purple-100 text-purple-800"
                  >肾脏病</span
                >
              </div>
            </div>
            <div class="flex-1">
              <p class="text-sm text-gray-900">
                <span class="font-medium">筛查结果:</span>
                肌酐值偏高(156μmol/L), 尿蛋白(++)
              </p>
            </div>
            <div class="mt-3 md:mt-0 flex items-center space-x-2">
              <button
                class="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-md hover:bg-green-200 transition-all"
              >
                <i class="fas fa-check mr-1"></i>确认
              </button>
              <button
                class="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-md hover:bg-blue-200 transition-all"
              >
                <i class="fas fa-envelope mr-1"></i>通知
              </button>
              <button
                class="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-md hover:bg-gray-200 transition-all"
              >
                <i class="fas fa-ellipsis-v"></i>
              </button>
            </div>
          </div>
        </div>

        <!-- 患者3 (已确认) -->
        <div class="patient-card p-4 hover:bg-gray-50 bg-green-50">
          <div class="flex flex-col md:flex-row md:items-center">
            <div class="flex-1 mb-3 md:mb-0">
              <div class="flex items-center">
                <div
                  class="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3"
                >
                  <i class="fas fa-user"></i>
                </div>
                <div>
                  <h4 class="font-medium text-gray-900">王强 (男, 38岁)</h4>
                  <p class="text-sm text-gray-500">
                    病历号: P20230615003 | 联系电话: 137****9012
                  </p>
                </div>
              </div>
            </div>
            <div class="flex-1">
              <div class="flex flex-wrap items-center gap-2">
                <span
                  class="px-2 py-1 text-xs font-medium rounded-full bg-red-100 text-red-800"
                  >高血压</span
                >
                <span
                  class="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800"
                  >已确认</span
                >
              </div>
            </div>
            <div class="flex-1">
              <p class="text-sm text-gray-900">
                <span class="font-medium">筛查结果:</span>
                血压值持续偏高(162/98mmHg), 心电图异常
              </p>
            </div>
            <div class="mt-3 md:mt-0 flex items-center space-x-2">
              <button
                class="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-md hover:bg-blue-200 transition-all"
              >
                <i class="fas fa-envelope mr-1"></i>通知
              </button>
              <button
                class="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-md hover:bg-gray-200 transition-all"
              >
                <i class="fas fa-ellipsis-v"></i>
              </button>
            </div>
          </div>
        </div>

        <!-- 患者4 (已通知) -->
        <div class="patient-card p-4 hover:bg-gray-50 bg-blue-50">
          <div class="flex flex-col md:flex-row md:items-center">
            <div class="flex-1 mb-3 md:mb-0">
              <div class="flex items-center">
                <div
                  class="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3"
                >
                  <i class="fas fa-user"></i>
                </div>
                <div>
                  <h4 class="font-medium text-gray-900">赵敏 (女, 60岁)</h4>
                  <p class="text-sm text-gray-500">
                    病历号: P20230615004 | 联系电话: 136****3456
                  </p>
                </div>
              </div>
            </div>
            <div class="flex-1">
              <div class="flex flex-wrap items-center gap-2">
                <span
                  class="px-2 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-800"
                  >糖尿病</span
                >
                <span
                  class="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800"
                  >已确认</span
                >
                <span
                  class="px-2 py-1 text-xs font-medium rounded-full bg-purple-100 text-purple-800"
                  >已通知</span
                >
              </div>
            </div>
            <div class="flex-1">
              <p class="text-sm text-gray-900">
                <span class="font-medium">筛查结果:</span> 空腹血糖9.2mmol/L,
                糖化血红蛋白8.5%
              </p>
            </div>
            <div class="mt-3 md:mt-0 flex items-center space-x-2">
              <button
                class="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-md hover:bg-gray-200 transition-all"
              >
                <i class="fas fa-ellipsis-v"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- 分页 -->
      <div
        class="bg-white px-6 py-4 border-t border-gray-200 flex flex-col md:flex-row md:items-center md:justify-between"
      >
        <div class="mb-4 md:mb-0">
          <p class="text-sm text-gray-700">
            显示 <span class="font-medium">1</span> 到
            <span class="font-medium">4</span> 条，共
            <span class="font-medium">86</span> 条记录
          </p>
        </div>
        <div class="flex items-center space-x-2">
          <button
            class="px-3 py-1 rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200"
          >
            首页
          </button>
          <button
            class="px-3 py-1 rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200"
          >
            上一页
          </button>
          <button
            class="px-3 py-1 rounded-md bg-blue-600 text-white hover:bg-blue-700"
          >
            1
          </button>
          <button
            class="px-3 py-1 rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200"
          >
            2
          </button>
          <button
            class="px-3 py-1 rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200"
          >
            3
          </button>
          <button
            class="px-3 py-1 rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200"
          >
            下一页
          </button>
          <button
            class="px-3 py-1 rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200"
          >
            末页
          </button>
        </div>
      </div>
    </div>

    <!-- 筛查配置弹窗 - 默认隐藏 -->
    <div id="configModal" class="fixed inset-0 overflow-y-auto hidden z-50">
      <div
        class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
      >
        <div class="fixed inset-0 transition-opacity" aria-hidden="true">
          <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <div
          class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-3xl sm:w-full"
        >
          <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div class="flex items-start justify-between">
              <h3 class="text-lg font-medium text-gray-900">自动化筛查配置</h3>
              <button
                id="closeConfigModal"
                class="text-gray-500 hover:text-gray-700"
              >
                <i class="fas fa-times"></i>
              </button>
            </div>

            <div class="mt-6 space-y-6">
              <!-- 数据源配置 -->
              <div>
                <h4 class="text-md font-medium text-gray-900 mb-3">
                  数据源配置
                </h4>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <label class="inline-flex items-center">
                    <input
                      type="checkbox"
                      checked
                      class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <span class="ml-2 text-sm text-gray-700">HIS系统</span>
                  </label>
                  <label class="inline-flex items-center">
                    <input
                      type="checkbox"
                      checked
                      class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <span class="ml-2 text-sm text-gray-700">检验系统</span>
                  </label>
                  <label class="inline-flex items-center">
                    <input
                      type="checkbox"
                      checked
                      class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <span class="ml-2 text-sm text-gray-700">体检系统</span>
                  </label>
                </div>
              </div>

              <!-- 筛查规则配置 -->
              <div>
                <h4 class="text-md font-medium text-gray-900 mb-3">
                  筛查规则配置
                </h4>
                <div class="space-y-3">
                  <div class="flex items-center justify-between">
                    <label class="inline-flex items-center">
                      <input
                        type="checkbox"
                        checked
                        class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <span class="ml-2 text-sm text-gray-700"
                        >高血压筛查规则</span
                      >
                    </label>
                    <span class="text-xs text-gray-500"
                      >上次更新: 2023-06-10</span
                    >
                  </div>
                  <div class="flex items-center justify-between">
                    <label class="inline-flex items-center">
                      <input
                        type="checkbox"
                        checked
                        class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <span class="ml-2 text-sm text-gray-700"
                        >糖尿病筛查规则</span
                      >
                    </label>
                    <span class="text-xs text-gray-500"
                      >上次更新: 2023-06-12</span
                    >
                  </div>
                  <div class="flex items-center justify-between">
                    <label class="inline-flex items-center">
                      <input
                        type="checkbox"
                        checked
                        class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <span class="ml-2 text-sm text-gray-700"
                        >肾脏病筛查规则</span
                      >
                    </label>
                    <span class="text-xs text-gray-500"
                      >上次更新: 2023-06-08</span
                    >
                  </div>
                  <div class="flex items-center justify-between">
                    <label class="inline-flex items-center">
                      <input
                        type="checkbox"
                        class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <span class="ml-2 text-sm text-gray-700"
                        >心脏病筛查规则</span
                      >
                    </label>
                    <span class="text-xs text-gray-500"
                      >上次更新: 2023-05-20</span
                    >
                  </div>
                </div>
              </div>

              <!-- 通知配置 -->
              <div>
                <h4 class="text-md font-medium text-gray-900 mb-3">
                  患者通知配置
                </h4>
                <div class="space-y-4">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1"
                      >通知方式</label
                    >
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <label class="inline-flex items-center">
                        <input
                          type="checkbox"
                          checked
                          class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <span class="ml-2 text-sm text-gray-700">短信通知</span>
                      </label>
                      <label class="inline-flex items-center">
                        <input
                          type="checkbox"
                          class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <span class="ml-2 text-sm text-gray-700">微信通知</span>
                      </label>
                      <label class="inline-flex items-center">
                        <input
                          type="checkbox"
                          class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <span class="ml-2 text-sm text-gray-700">电话通知</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label
                      for="smsTemplate"
                      class="block text-sm font-medium text-gray-700 mb-1"
                      >短信模板</label
                    >
                    <textarea
                      id="smsTemplate"
                      rows="3"
                      class="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                    >
尊敬的{患者姓名}，您的筛查结果显示{高危病种}风险，请尽快联系医院复查。咨询电话：400-123-4567</textarea
                    >
                  </div>

                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1"
                      >通知时间</label
                    >
                    <select
                      class="block w-full pl-3 pr-8 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                    >
                      <option>筛查确认后立即通知</option>
                      <option>每天上午9点批量通知</option>
                      <option>每周一上午9点批量通知</option>
                      <option>每月1号上午9点批量通知</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
            >
              保存配置
            </button>
            <button
              id="cancelConfigBtn"
              type="button"
              class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            >
              取消
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
