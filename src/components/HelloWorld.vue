<script setup lang="ts">
</script>

<template>
          <!-- 主内容区 -->
          <main class=" mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <!-- 操作区域 -->
            <div class="bg-white rounded-lg shadow-sm p-6 mb-6">
                <div class="flex flex-col md:flex-row md:items-center md:justify-between">
                    <h2 class="text-xl font-semibold text-gray-800 mb-4 md:mb-0">筛查规则管理</h2>
                    <div class="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
                        <button id="newRuleBtn" class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-all flex items-center justify-center">
                            <i class="fas fa-plus mr-2"></i>新建筛查规则
                        </button>
                        <button class="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-md text-sm font-medium transition-all flex items-center justify-center">
                            <i class="fas fa-sync-alt mr-2"></i>刷新列表
                        </button>
                    </div>
                </div>
            </div>

            <!-- 规则列表 -->
            <div class="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
                <div class="px-6 py-4 border-b border-gray-200">
                    <div class="flex items-center justify-between">
                        <h3 class="text-lg font-medium text-gray-900">筛查规则列表</h3>
                        <div class="relative w-64">
                            <input type="text" placeholder="搜索规则名称..." class="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md">
                            <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                <i class="fas fa-search text-gray-400"></i>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="overflow-x-auto">
                    <table class="min-w-full divide-y divide-gray-200">
                        <thead class="bg-gray-50">
                            <tr>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    规则名称
                                </th>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    适用病种
                                </th>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    条件数量
                                </th>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    创建时间
                                </th>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    状态
                                </th>
                                <th scope="col" class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    操作
                                </th>
                            </tr>
                        </thead>
                        <tbody class="bg-white divide-y divide-gray-200">
                            <tr class="hover:bg-gray-50 transition-all">
                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">高血压筛查规则</td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">高血压</td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">5</td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2023-06-15</td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                        启用
                                    </span>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <button class="text-blue-600 hover:text-blue-900 mr-3"><i class="fas fa-edit"></i></button>
                                    <button class="text-gray-600 hover:text-gray-900"><i class="fas fa-ellipsis-v"></i></button>
                                </td>
                            </tr>
                            <tr class="hover:bg-gray-50 transition-all">
                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">糖尿病筛查规则</td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">糖尿病</td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">7</td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2023-06-14</td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                        启用
                                    </span>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <button class="text-blue-600 hover:text-blue-900 mr-3"><i class="fas fa-edit"></i></button>
                                    <button class="text-gray-600 hover:text-gray-900"><i class="fas fa-ellipsis-v"></i></button>
                                </td>
                            </tr>
                            <tr class="hover:bg-gray-50 transition-all">
                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">肾脏病筛查规则</td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">肾脏病</td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">6</td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2023-06-13</td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                                        停用
                                    </span>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <button class="text-blue-600 hover:text-blue-900 mr-3"><i class="fas fa-edit"></i></button>
                                    <button class="text-gray-600 hover:text-gray-900"><i class="fas fa-ellipsis-v"></i></button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
                <div class="bg-white px-6 py-4 border-t border-gray-200 flex flex-col md:flex-row md:items-center md:justify-between">
                    <div class="mb-4 md:mb-0">
                        <p class="text-sm text-gray-700">
                            显示 <span class="font-medium">1</span> 到 <span class="font-medium">3</span> 条，共 <span class="font-medium">3</span> 条记录
                        </p>
                    </div>
                    <div class="flex items-center space-x-2">
                        <button class="px-3 py-1 rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200">
                            首页
                        </button>
                        <button class="px-3 py-1 rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200">
                            上一页
                        </button>
                        <button class="px-3 py-1 rounded-md bg-blue-600 text-white hover:bg-blue-700">
                            1
                        </button>
                        <button class="px-3 py-1 rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200">
                            下一页
                        </button>
                        <button class="px-3 py-1 rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200">
                            末页
                        </button>
                    </div>
                </div>
            </div>

            <!-- 规则详情 - 默认隐藏 -->
            <div id="ruleDetail" class="bg-white rounded-lg shadow-sm overflow-hidden hidden">
                <div class="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
                    <h3 class="text-lg font-medium text-gray-900">新建筛查规则</h3>
                    <button id="closeDetailBtn" class="text-gray-500 hover:text-gray-700">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                
                <div class="p-6">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <label for="ruleName" class="block text-sm font-medium text-gray-700 mb-1">规则名称</label>
                            <input type="text" id="ruleName" class="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md" placeholder="请输入规则名称">
                        </div>
                        <div>
                            <label for="diseaseType" class="block text-sm font-medium text-gray-700 mb-1">适用病种</label>
                            <select id="diseaseType" class="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md">
                                <option value="">请选择病种</option>
                                <option value="hypertension">高血压</option>
                                <option value="diabetes">糖尿病</option>
                                <option value="kidney">肾脏病</option>
                                <option value="heart">心脏病</option>
                                <option value="other">其他</option>
                            </select>
                        </div>
                    </div>
                    
                    <div class="mb-6">
                        <label class="block text-sm font-medium text-gray-700 mb-2">筛查条件</label>
                        
                        <!-- 条件组 -->
                        <div id="conditionGroups" class="space-y-4">
                            <!-- 条件组1 -->
                            <div class="border border-gray-200 rounded-lg p-4">
                                <div class="flex justify-between items-center mb-3">
                                    <span class="text-sm font-medium text-gray-700">条件组1</span>
                                    <div>
                                        <button class="text-red-500 hover:text-red-700 text-sm mr-3">
                                            <i class="fas fa-trash-alt mr-1"></i>删除组
                                        </button>
                                        <button class="text-blue-500 hover:text-blue-700 text-sm">
                                            <i class="fas fa-plus mr-1"></i>添加条件
                                        </button>
                                    </div>
                                </div>
                                
                                <!-- 条件列表 -->
                                <div class="space-y-3">
                                    <!-- 条件1 -->
                                    <div class="condition-item bg-gray-50 p-3 rounded-md border border-gray-200">
                                        <div class="grid grid-cols-12 gap-3 items-center">
                                            <div class="col-span-3">
                                                <select class="block w-full pl-2 pr-8 py-1 text-sm border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 rounded-md">
                                                    <option>ICD诊断</option>
                                                    <option>检查结果</option>
                                                    <option>检验报告</option>
                                                    <option>标签</option>
                                                    <option>特定数值</option>
                                                </select>
                                            </div>
                                            <div class="col-span-3">
                                                <select class="block w-full pl-2 pr-8 py-1 text-sm border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 rounded-md">
                                                    <option>包含</option>
                                                    <option>不包含</option>
                                                    <option>等于</option>
                                                    <option>不等于</option>
                                                    <option>大于</option>
                                                    <option>小于</option>
                                                </select>
                                            </div>
                                            <div class="col-span-4">
                                                <input type="text" class="block w-full pl-2 pr-8 py-1 text-sm border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 rounded-md" placeholder="输入值">
                                            </div>
                                            <div class="col-span-2 text-right">
                                                <button class="text-red-400 hover:text-red-600">
                                                    <i class="fas fa-times"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <!-- 条件2 -->
                                    <div class="condition-item bg-gray-50 p-3 rounded-md border border-gray-200">
                                        <div class="grid grid-cols-12 gap-3 items-center">
                                            <div class="col-span-3">
                                                <select class="block w-full pl-2 pr-8 py-1 text-sm border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 rounded-md">
                                                    <option>检查结果</option>
                                                    <option>ICD诊断</option>
                                                    <option>检验报告</option>
                                                    <option>标签</option>
                                                    <option>特定数值</option>
                                                </select>
                                            </div>
                                            <div class="col-span-3">
                                                <select class="block w-full pl-2 pr-8 py-1 text-sm border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 rounded-md">
                                                    <option>大于</option>
                                                    <option>小于</option>
                                                    <option>等于</option>
                                                    <option>不等于</option>
                                                    <option>包含</option>
                                                    <option>不包含</option>
                                                </select>
                                            </div>
                                            <div class="col-span-4">
                                                <input type="text" class="block w-full pl-2 pr-8 py-1 text-sm border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 rounded-md" placeholder="输入值">
                                            </div>
                                            <div class="col-span-2 text-right">
                                                <button class="text-red-400 hover:text-red-600">
                                                    <i class="fas fa-times"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="mt-3 flex items-center">
                                    <span class="text-sm text-gray-500 mr-2">满足以下条件:</span>
                                    <select class="block pl-2 pr-8 py-1 text-sm border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 rounded-md">
                                        <option>全部条件</option>
                                        <option>任一条件</option>
                                    </select>
                                </div>
                            </div>
                            
                            <!-- 添加条件组按钮 -->
                            <button class="w-full py-2 border-2 border-dashed border-gray-300 rounded-md text-gray-500 hover:text-blue-500 hover:border-blue-300 transition-all">
                                <i class="fas fa-plus mr-2"></i>添加条件组
                            </button>
                        </div>
                    </div>
                    
                    <div class="flex justify-between items-center">
                        <div>
                            <label class="inline-flex items-center">
                                <input type="checkbox" class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded">
                                <span class="ml-2 text-sm text-gray-700">启用此规则</span>
                            </label>
                        </div>
                        <div class="space-x-3">
                            <button class="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-md text-sm font-medium transition-all">
                                取消
                            </button>
                            <button class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-all">
                                保存规则
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
