<script setup lang="ts"></script>

<template>
      <div class=" mx-auto">
        <h1 class="text-3xl font-bold text-gray-800 mb-8">指标数据看板</h1>
        
        <!-- 主要指标卡片 -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <!-- 患者总数 -->
            <div class="card bg-white rounded-xl p-6 highlight-card" style="background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);">
                <div class="flex items-center justify-between">
                    <div>
                        <p class="text-white text-opacity-80 text-sm">患者总数</p>
                        <h2 class="text-3xl font-bold text-white mt-2">1,248</h2>
                        <p class="text-white text-opacity-80 text-sm mt-2">较上月 <span class="font-bold">+12.5%</span></p>
                    </div>
                    <div class="bg-white bg-opacity-20 p-3 rounded-full">
                        <i class="fas fa-users text-white text-2xl"></i>
                    </div>
                </div>
            </div>
            
            <!-- 入组患者总数 -->
            <div class="card bg-white rounded-xl p-6 highlight-card" style="background: linear-gradient(135deg, #10b981 0%, #34d399 100%);">
                <div class="flex items-center justify-between">
                    <div>
                        <p class="text-white text-opacity-80 text-sm">入组患者总数</p>
                        <h2 class="text-3xl font-bold text-white mt-2">856</h2>
                        <p class="text-white text-opacity-80 text-sm mt-2">入组率 <span class="font-bold">68.6%</span></p>
                    </div>
                    <div class="bg-white bg-opacity-20 p-3 rounded-full">
                        <i class="fas fa-clipboard-check text-white text-2xl"></i>
                    </div>
                </div>
            </div>
            
            <!-- 随访完成率 -->
            <div class="card bg-white rounded-xl p-6 highlight-card" style="background: linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%);">
                <div class="flex items-center justify-between">
                    <div>
                        <p class="text-white text-opacity-80 text-sm">今日随访完成率</p>
                        <h2 class="text-3xl font-bold text-white mt-2">78%</h2>
                        <div class="flex items-center mt-2">
                            <span class="text-white text-sm mr-2">已完成: 39/50</span>
                        </div>
                    </div>
                    <div class="bg-white bg-opacity-20 p-3 rounded-full">
                        <i class="fas fa-calendar-check text-white text-2xl"></i>
                    </div>
                </div>
            </div>
            
            <!-- 随访逾期患者 -->
            <div class="card bg-white rounded-xl p-6 highlight-card" style="background: linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%);">
                <div class="flex items-center justify-between">
                    <div>
                        <p class="text-white text-opacity-80 text-sm">随访逾期患者</p>
                        <h2 class="text-3xl font-bold text-white mt-2">23</h2>
                        <p class="text-white text-opacity-80 text-sm mt-2">较上周 <span class="font-bold">-8%</span></p>
                    </div>
                    <div class="bg-white bg-opacity-20 p-3 rounded-full">
                        <i class="fas fa-exclamation-triangle text-white text-2xl"></i>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- 本周数据 -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <!-- 本周新增患者 -->
            <div class="card bg-white rounded-xl p-6">
                <div class="flex items-center justify-between mb-4">
                    <h3 class="font-semibold text-gray-700">本周新增患者</h3>
                    <div class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">+15</div>
                </div>
                <div class="flex items-center justify-between">
                    <div>
                        <p class="text-gray-500 text-sm">较上周</p>
                        <p class="text-green-500 font-medium">+3 例</p>
                    </div>
                    <div class="w-24 h-24 relative">
                        <svg class="w-full h-full" viewBox="0 0 36 36">
                            <path
                                d="M18 2.0845
                                    a 15.9155 15.9155 0 0 1 0 31.831
                                    a 15.9155 15.9155 0 0 1 0 -31.831"
                                fill="none"
                                stroke="#e5e7eb"
                                stroke-width="3"
                            />
                            <path
                                d="M18 2.0845
                                    a 15.9155 15.9155 0 0 1 0 31.831
                                    a 15.9155 15.9155 0 0 1 0 -31.831"
                                fill="none"
                                stroke="#3b82f6"
                                stroke-width="3"
                                stroke-dasharray="60, 100"
                            />
                            <text x="18" y="20.5" text-anchor="middle" font-size="8" fill="#3b82f6" font-weight="bold">60%</text>
                        </svg>
                    </div>
                </div>
            </div>
            
            <!-- 本周已随访患者 -->
            <div class="card bg-white rounded-xl p-6">
                <div class="flex items-center justify-between mb-4">
                    <h3 class="font-semibold text-gray-700">本周已随访患者</h3>
                    <div class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">128</div>
                </div>
                <div class="mb-3">
                    <div class="flex justify-between text-sm text-gray-500 mb-1">
                        <span>计划随访: 150</span>
                        <span>85.3%</span>
                    </div>
                    <div class="progress-bar">
                        <div class="progress-fill bg-green-500" style="width: 85.3%"></div>
                    </div>
                </div>
                <div class="text-sm text-gray-500">
                    <p>平均随访时间: <span class="font-medium">12分钟</span></p>
                </div>
            </div>
            
            <!-- 下周计划随访患者 -->
            <div class="card bg-white rounded-xl p-6">
                <div class="flex items-center justify-between mb-4">
                    <h3 class="font-semibold text-gray-700">下周计划随访患者</h3>
                    <div class="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">142</div>
                </div>
                <div class="space-y-3">
                    <div>
                        <div class="flex justify-between text-sm text-gray-500 mb-1">
                            <span>电话随访: 98</span>
                            <span>69%</span>
                        </div>
                        <div class="progress-bar">
                            <div class="progress-fill bg-purple-400" style="width: 69%"></div>
                        </div>
                    </div>
                    <div>
                        <div class="flex justify-between text-sm text-gray-500 mb-1">
                            <span>门诊随访: 44</span>
                            <span>31%</span>
                        </div>
                        <div class="progress-bar">
                            <div class="progress-fill bg-purple-600" style="width: 31%"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- 转归数据 -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <!-- 本月转归患者 -->
            <div class="card bg-white rounded-xl p-6">
                <h3 class="font-semibold text-gray-700 mb-6">本月转归患者</h3>
                <div class="flex justify-between items-center mb-4">
                    <div class="text-3xl font-bold text-gray-800">28</div>
                    <div class="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">较上月 +4例</div>
                </div>
                <div class="grid grid-cols-3 gap-4">
                    <div class="text-center">
                        <div class="text-2xl font-bold text-green-600">18</div>
                        <div class="text-xs text-gray-500">治愈</div>
                    </div>
                    <div class="text-center">
                        <div class="text-2xl font-bold text-yellow-500">6</div>
                        <div class="text-xs text-gray-500">好转</div>
                    </div>
                    <div class="text-center">
                        <div class="text-2xl font-bold text-red-500">4</div>
                        <div class="text-xs text-gray-500">未愈</div>
                    </div>
                </div>
            </div>
            
            <!-- 总转归患者 -->
            <div class="card bg-white rounded-xl p-6">
                <h3 class="font-semibold text-gray-700 mb-6">总转归患者</h3>
                <div class="flex justify-between items-center mb-4">
                    <div class="text-3xl font-bold text-gray-800">324</div>
                    <div class="text-sm bg-green-100 text-green-800 px-3 py-1 rounded-full">转归率 26.3%</div>
                </div>
                <div class="chart-container">
                    <canvas id="outcomeChart"></canvas>
                </div>
            </div>
        </div>
        
        <!-- 随访趋势 -->
        <div class="card bg-white rounded-xl p-6 mb-8">
            <div class="flex justify-between items-center mb-6">
                <h3 class="font-semibold text-gray-700">近12周随访趋势</h3>
                <div class="flex space-x-2">
                    <button class="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">电话随访</button>
                    <button class="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">门诊随访</button>
                </div>
            </div>
            <div class="chart-container">
                <canvas id="followupTrendChart"></canvas>
            </div>
        </div>
    </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
