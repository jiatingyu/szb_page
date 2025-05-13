<script setup lang="ts"></script>

<template>
   <div class="container mx-auto px-4 py-6">
        <!-- 页面标题和操作按钮 -->
        <div class="flex justify-between items-center mb-6">
            <h1 class="text-2xl font-bold flex items-center">
                <i class="fas fa-clinic-medical text-blue-500 mr-3"></i>临床辅助分析
            </h1>
            <div>
                <button class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 mr-2">
                    <i class="fas fa-chart-bar mr-1"></i>新建分析
                </button>
                <button class="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
                    <i class="fas fa-history mr-1"></i>历史分析
                </button>
            </div>
        </div>
        
        <!-- 分析类型选择 -->
        <div class="bg-white rounded-xl shadow-soft p-4 mb-6">
            <h2 class="text-lg font-semibold mb-4 flex items-center">
                <i class="fas fa-filter text-blue-500 mr-2"></i>选择分析类型
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div class="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-smooth cursor-pointer bg-blue-50 border-blue-200">
                    <div class="flex items-center">
                        <div class="bg-blue-100 p-3 rounded-full text-blue-600 mr-3">
                            <i class="fas fa-tint"></i>
                        </div>
                        <div>
                            <h3 class="font-bold">贫血相关指标分析</h3>
                            <p class="text-sm text-gray-600">血红蛋白、铁代谢等指标与用药关系</p>
                        </div>
                    </div>
                </div>
                <div class="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-smooth cursor-pointer">
                    <div class="flex items-center">
                        <div class="bg-purple-100 p-3 rounded-full text-purple-600 mr-3">
                            <i class="fas fa-bone"></i>
                        </div>
                        <div>
                            <h3 class="font-bold">CKD-MBD指标分析</h3>
                            <p class="text-sm text-gray-600">钙磷代谢、PTH等指标与用药关系</p>
                        </div>
                    </div>
                </div>
                <div class="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-smooth cursor-pointer">
                    <div class="flex items-center">
                        <div class="bg-green-100 p-3 rounded-full text-green-600 mr-3">
                            <i class="fas fa-heartbeat"></i>
                        </div>
                        <div>
                            <h3 class="font-bold">心血管指标分析</h3>
                            <p class="text-sm text-gray-600">血压、血脂等指标与用药关系</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- 当前分析 -->
        <div class="bg-white rounded-xl shadow-soft p-4 mb-6">
            <div class="flex justify-between items-center mb-4">
                <h2 class="text-lg font-semibold flex items-center">
                    <i class="fas fa-chart-line text-blue-500 mr-2"></i>贫血相关指标与用药分析
                </h2>
                <div class="flex space-x-2">
                    <button class="px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm hover:bg-gray-200">
                        <i class="fas fa-download mr-1"></i>导出
                    </button>
                    <button class="px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm hover:bg-gray-200">
                        <i class="fas fa-cog mr-1"></i>设置
                    </button>
                </div>
            </div>
            
            <!-- 筛选条件 -->
            <div class="bg-blue-50 border border-blue-100 rounded-lg p-3 mb-4">
                <div class="flex flex-wrap items-center gap-2 text-sm">
                    <span class="font-medium text-blue-800">筛选条件:</span>
                    <span class="bg-white px-2 py-1 rounded border border-blue-200">时间范围: 最近1年</span>
                    <span class="bg-white px-2 py-1 rounded border border-blue-200">患者类型: 糖尿病肾病3期</span>
                    <span class="bg-white px-2 py-1 rounded border border-blue-200">年龄: 40-70岁</span>
                    <span class="bg-white px-2 py-1 rounded border border-blue-200">性别: 全部</span>
                </div>
            </div>
            
            <!-- 指标选择 -->
            <div class="mb-6">
                <h3 class="font-medium mb-2 flex items-center">
                    <i class="fas fa-list-ul text-gray-500 mr-2 text-sm"></i>已选指标
                </h3>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                    <div class="indicator-card bg-white p-3 rounded border-l-4 border-red-400 shadow-sm">
                        <div class="flex justify-between items-start">
                            <div>
                                <div class="font-bold">血红蛋白</div>
                                <div class="text-xs text-gray-500">HGB (g/L)</div>
                            </div>
                            <span class="text-red-500 text-sm font-medium">↓ 89</span>
                        </div>
                    </div>
                    <div class="indicator-card bg-white p-3 rounded border-l-4 border-yellow-400 shadow-sm">
                        <div class="flex justify-between items-start">
                            <div>
                                <div class="font-bold">血清铁蛋白</div>
                                <div class="text-xs text-gray-500">SF (μg/L)</div>
                            </div>
                            <span class="text-yellow-500 text-sm font-medium">↓ 45</span>
                        </div>
                    </div>
                    <div class="indicator-card bg-white p-3 rounded border-l-4 border-blue-400 shadow-sm">
                        <div class="flex justify-between items-start">
                            <div>
                                <div class="font-bold">转铁蛋白饱和度</div>
                                <div class="text-xs text-gray-500">TSAT (%)</div>
                            </div>
                            <span class="text-blue-500 text-sm font-medium">15</span>
                        </div>
                    </div>
                    <div class="indicator-card bg-white p-3 rounded border-l-4 border-green-400 shadow-sm">
                        <div class="flex justify-between items-start">
                            <div>
                                <div class="font-bold">EPO用量</div>
                                <div class="text-xs text-gray-500">IU/周</div>
                            </div>
                            <span class="text-green-500 text-sm font-medium">6000</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- 统计分析图表 -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
                <!-- 图表1 -->
                <div class="bg-white border border-gray-200 rounded-lg p-4">
                    <h3 class="font-medium mb-3">血红蛋白水平与EPO用量关系</h3>
                    <div class="chart-container">
                        <!-- 这里应该是图表，用div模拟 -->
                        <div class="w-full h-full bg-gray-100 rounded flex items-center justify-center text-gray-400">
                            <i class="fas fa-chart-bar text-4xl"></i>
                        </div>
                    </div>
                    <div class="mt-3 text-sm text-gray-600">
                        <i class="fas fa-info-circle text-blue-500 mr-1"></i>
                        图表显示EPO用量与血红蛋白水平呈正相关关系
                    </div>
                </div>
                
                <!-- 图表2 -->
                <div class="bg-white border border-gray-200 rounded-lg p-4">
                    <h3 class="font-medium mb-3">铁代谢指标与补铁治疗关系</h3>
                    <div class="chart-container">
                        <!-- 这里应该是图表，用div模拟 -->
                        <div class="w-full h-full bg-gray-100 rounded flex items-center justify-center text-gray-400">
                            <i class="fas fa-chart-pie text-4xl"></i>
                        </div>
                    </div>
                    <div class="mt-3 text-sm text-gray-600">
                        <i class="fas fa-info-circle text-blue-500 mr-1"></i>
                        铁剂治疗对血清铁蛋白和转铁蛋白饱和度的影响
                    </div>
                </div>
            </div>
            
            <!-- 统计结果表格 -->
            <div class="mb-4">
                <h3 class="font-medium mb-3 flex items-center">
                    <i class="fas fa-table text-gray-500 mr-2 text-sm"></i>用药效果统计
                </h3>
                <div class="overflow-x-auto">
                    <table class="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
                        <thead class="bg-gray-50">
                            <tr>
                                <th class="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">药物名称</th>
                                <th class="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">使用人数</th>
                                <th class="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">HGB改善率</th>
                                <th class="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">SF改善率</th>
                                <th class="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">TSAT改善率</th>
                                <th class="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">不良反应率</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200">
                            <tr>
                                <td class="px-4 py-2 text-sm">重组人促红素</td>
                                <td class="px-4 py-2 text-sm">128</td>
                                <td class="px-4 py-2 text-sm text-green-600">78.5%</td>
                                <td class="px-4 py-2 text-sm text-blue-600">-</td>
                                <td class="px-4 py-2 text-sm text-blue-600">-</td>
                                <td class="px-4 py-2 text-sm text-red-600">12.3%</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 text-sm">蔗糖铁</td>
                                <td class="px-4 py-2 text-sm">95</td>
                                <td class="px-4 py-2 text-sm text-green-600">65.2%</td>
                                <td class="px-4 py-2 text-sm text-green-600">89.7%</td>
                                <td class="px-4 py-2 text-sm text-green-600">72.4%</td>
                                <td class="px-4 py-2 text-sm text-red-600">8.6%</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 text-sm">罗沙司他</td>
                                <td class="px-4 py-2 text-sm">42</td>
                                <td class="px-4 py-2 text-sm text-green-600">82.1%</td>
                                <td class="px-4 py-2 text-sm text-green-600">76.5%</td>
                                <td class="px-4 py-2 text-sm text-green-600">68.9%</td>
                                <td class="px-4 py-2 text-sm text-red-600">15.8%</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 text-sm">维生素B12</td>
                                <td class="px-4 py-2 text-sm">37</td>
                                <td class="px-4 py-2 text-sm text-green-600">43.2%</td>
                                <td class="px-4 py-2 text-sm text-blue-600">-</td>
                                <td class="px-4 py-2 text-sm text-blue-600">-</td>
                                <td class="px-4 py-2 text-sm text-red-600">2.7%</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            
            <!-- 分析结论 -->
            <div class="bg-blue-50 border border-blue-100 rounded-lg p-4">
                <h3 class="font-bold text-blue-800 mb-2 flex items-center">
                    <i class="fas fa-lightbulb text-blue-500 mr-2"></i>分析结论
                </h3>
                <div class="text-sm text-blue-700 space-y-2">
                    <p>1. 重组人促红素对血红蛋白改善效果显著(78.5%)，但不良反应率较高(12.3%)</p>
                    <p>2. 蔗糖铁对铁代谢指标改善效果良好，SF改善率达89.7%，TSAT改善率72.4%</p>
                    <p>3. 罗沙司他综合效果最佳，但对HGB、SF、TSAT三项指标均有显著改善，但不良反应率最高(15.8%)</p>
                    <p>4. 维生素B12改善效果有限，但安全性最佳(不良反应率仅2.7%)</p>
                </div>
            </div>
        </div>
        
        <!-- 分析说明 -->
        <div class="mt-6 bg-gray-50 border border-gray-200 rounded-lg p-4">
            <div class="flex items-start">
                <div class="bg-gray-100 p-2 rounded-full text-gray-500 mr-3">
                    <i class="fas fa-info-circle"></i>
                </div>
                <div>
                    <h3 class="font-bold text-gray-800 mb-1">临床辅助分析说明</h3>
                    <p class="text-sm text-gray-700 mb-2">1. 支持组合多种相关临床指标与用药情况进行关联分析，发现潜在规律</p>
                    <p class="text-sm text-gray-700 mb-2">2. 可分析贫血相关指标(血红蛋白、铁代谢等)、CKD-MBD指标(钙磷代谢、PTH等)与用药关系</p>
                    <p class="text-sm text-gray-700">3. 系统提供统计图表和表格展示，帮助临床决策和用药调整</p>
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
