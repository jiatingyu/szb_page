<script setup lang="ts"></script>

<template>
  <div>
    <div class="container mx-auto px-4 py-6">
        <!-- 页面标题和操作按钮 -->
        <div class="flex justify-between items-center mb-6">
            <h1 class="text-2xl font-bold flex items-center">
                <i class="fas fa-clipboard-list text-blue-500 mr-3"></i>管理计划
            </h1>
            <div>
                <button class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 mr-2">
                    <i class="fas fa-plus mr-1"></i>新建模板
                </button>
                <button class="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
                    <i class="fas fa-filter mr-1"></i>筛选
                </button>
            </div>
        </div>
        
        <!-- 系统内置模板 -->
        <div class="mb-8">
            <div class="flex justify-between items-center mb-4">
                <h2 class="text-lg font-semibold flex items-center">
                    <i class="fas fa-boxes text-blue-500 mr-2"></i>系统内置模板
                </h2>
                <div class="text-sm text-gray-500">共5个模板</div>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <!-- 模板1 -->
                <div class="bg-white rounded-xl shadow-soft overflow-hidden border border-gray-100 hover:border-blue-300 transition-smooth">
                    <div class="p-4 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-blue-100">
                        <div class="flex justify-between items-start">
                            <div>
                                <h3 class="font-bold text-lg mb-1">糖尿病肾病(3a/3b期中风险)</h3>
                                <p class="text-sm text-gray-600">28天管理计划</p>
                            </div>
                            <span class="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">系统内置</span>
                        </div>
                    </div>
                    <div class="p-4">
                        <div class="mb-4">
                            <div class="flex items-center text-sm text-gray-600 mb-2">
                                <i class="fas fa-calendar-alt mr-2 text-blue-500"></i>
                                <span>随访间隔: <span class="font-medium">28天</span></span>
                            </div>
                            <div class="flex items-center text-sm text-gray-600">
                                <i class="fas fa-tag mr-2 text-blue-500"></i>
                                <span>适用疾病: <span class="font-medium">糖尿病肾病3a/3b期</span></span>
                            </div>
                        </div>
                        
                        <div class="text-sm font-medium mb-2">随访任务 (5项):</div>
                        <div class="space-y-3">
                            <div class="plan-item">
                                <div class="plan-item-dot bg-blue-100 text-blue-600">
                                    <i class="fas fa-stethoscope text-xs"></i>
                                </div>
                                <div class="text-sm bg-blue-50 p-2 rounded">复诊提醒</div>
                            </div>
                            <div class="plan-item">
                                <div class="plan-item-dot bg-green-100 text-green-600">
                                    <i class="fas fa-clipboard-check text-xs"></i>
                                </div>
                                <div class="text-sm bg-green-50 p-2 rounded">问卷量表</div>
                            </div>
                            <div class="plan-item">
                                <div class="plan-item-dot bg-purple-100 text-purple-600">
                                    <i class="fas fa-weight text-xs"></i>
                                </div>
                                <div class="text-sm bg-purple-50 p-2 rounded">体征测量</div>
                            </div>
                            <div class="plan-item">
                                <div class="plan-item-dot bg-yellow-100 text-yellow-600">
                                    <i class="fas fa-book-medical text-xs"></i>
                                </div>
                                <div class="text-sm bg-yellow-50 p-2 rounded">健康宣教</div>
                            </div>
                            <div class="plan-item">
                                <div class="plan-item-dot bg-red-100 text-red-600">
                                    <i class="fas fa-heart text-xs"></i>
                                </div>
                                <div class="text-sm bg-red-50 p-2 rounded">温馨提示</div>
                            </div>
                        </div>
                        
                        <div class="mt-4 pt-3 border-t border-gray-100 flex justify-between">
                            <button class="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700">
                                <i class="fas fa-copy mr-1"></i>复制模板
                            </button>
                            <button class="px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm hover:bg-gray-200">
                                <i class="fas fa-eye mr-1"></i>查看详情
                            </button>
                        </div>
                    </div>
                </div>
                
                <!-- 模板2 -->
                <div class="bg-white rounded-xl shadow-soft overflow-hidden border border-gray-100 hover:border-blue-300 transition-smooth">
                    <div class="p-4 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-blue-100">
                        <div class="flex justify-between items-start">
                            <div>
                                <h3 class="font-bold text-lg mb-1">糖尿病肾病(4&5期极高风险)</h3>
                                <p class="text-sm text-gray-600">14天管理计划</p>
                            </div>
                            <span class="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">系统内置</span>
                        </div>
                    </div>
                    <div class="p-4">
                        <div class="mb-4">
                            <div class="flex items-center text-sm text-gray-600 mb-2">
                                <i class="fas fa-calendar-alt mr-2 text-blue-500"></i>
                                <span>随访间隔: <span class="font-medium">14天</span></span>
                            </div>
                            <div class="flex items-center text-sm text-gray-600">
                                <i class="fas fa-tag mr-2 text-blue-500"></i>
                                <span>适用疾病: <span class="font-medium">糖尿病肾病4&5期</span></span>
                            </div>
                        </div>
                        
                        <div class="text-sm font-medium mb-2">随访任务 (6项):</div>
                        <div class="space-y-3">
                            <div class="plan-item">
                                <div class="plan-item-dot bg-blue-100 text-blue-600">
                                    <i class="fas fa-stethoscope text-xs"></i>
                                </div>
                                <div class="text-sm bg-blue-50 p-2 rounded">复诊提醒</div>
                            </div>
                            <div class="plan-item">
                                <div class="plan-item-dot bg-green-100 text-green-600">
                                    <i class="fas fa-clipboard-check text-xs"></i>
                                </div>
                                <div class="text-sm bg-green-50 p-2 rounded">问卷量表</div>
                            </div>
                            <div class="plan-item">
                                <div class="plan-item-dot bg-purple-100 text-purple-600">
                                    <i class="fas fa-weight text-xs"></i>
                                </div>
                                <div class="text-sm bg-purple-50 p-2 rounded">体征测量</div>
                            </div>
                            <div class="plan-item">
                                <div class="plan-item-dot bg-yellow-100 text-yellow-600">
                                    <i class="fas fa-book-medical text-xs"></i>
                                </div>
                                <div class="text-sm bg-yellow-50 p-2 rounded">健康宣教</div>
                            </div>
                            <div class="plan-item">
                                <div class="plan-item-dot bg-red-100 text-red-600">
                                    <i class="fas fa-heart text-xs"></i>
                                </div>
                                <div class="text-sm bg-red-50 p-2 rounded">温馨提示</div>
                            </div>
                            <div class="plan-item">
                                <div class="plan-item-dot bg-indigo-100 text-indigo-600">
                                    <i class="fas fa-pills text-xs"></i>
                                </div>
                                <div class="text-sm bg-indigo-50 p-2 rounded">用药指导</div>
                            </div>
                        </div>
                        
                        <div class="mt-4 pt-3 border-t border-gray-100 flex justify-between">
                            <button class="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700">
                                <i class="fas fa-copy mr-1"></i>复制模板
                            </button>
                            <button class="px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm hover:bg-gray-200">
                                <i class="fas fa-eye mr-1"></i>查看详情
                            </button>
                        </div>
                    </div>
                </div>
                
                <!-- 模板3 -->
                <div class="bg-white rounded-xl shadow-soft overflow-hidden border border-gray-100 hover:border-blue-300 transition-smooth">
                    <div class="p-4 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-blue-100">
                        <div class="flex justify-between items-start">
                            <div>
                                <h3 class="font-bold text-lg mb-1">糖尿病肾病(3B期高风险)</h3>
                                <p class="text-sm text-gray-600">28天管理计划</p>
                            </div>
                            <span class="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">系统内置</span>
                        </div>
                    </div>
                    <div class="p-4">
                        <div class="mb-4">
                            <div class="flex items-center text-sm text-gray-600 mb-2">
                                <i class="fas fa-calendar-alt mr-2 text-blue-500"></i>
                                <span>随访间隔: <span class="font-medium">28天</span></span>
                            </div>
                            <div class="flex items-center text-sm text-gray-600">
                                <i class="fas fa-tag mr-2 text-blue-500"></i>
                                <span>适用疾病: <span class="font-medium">糖尿病肾病3B期</span></span>
                            </div>
                        </div>
                        
                        <div class="text-sm font-medium mb-2">随访任务 (4项):</div>
                        <div class="space-y-3">
                            <div class="plan-item">
                                <div class="plan-item-dot bg-blue-100 text-blue-600">
                                    <i class="fas fa-stethoscope text-xs"></i>
                                </div>
                                <div class="text-sm bg-blue-50 p-2 rounded">复诊提醒</div>
                            </div>
                            <div class="plan-item">
                                <div class="plan-item-dot bg-green-100 text-green-600">
                                    <i class="fas fa-clipboard-check text-xs"></i>
                                </div>
                                <div class="text-sm bg-green-50 p-2 rounded">问卷量表</div>
                            </div>
                            <div class="plan-item">
                                <div class="plan-item-dot bg-purple-100 text-purple-600">
                                    <i class="fas fa-weight text-xs"></i>
                                </div>
                                <div class="text-sm bg-purple-50 p-2 rounded">体征测量</div>
                            </div>
                            <div class="plan-item">
                                <div class="plan-item-dot bg-yellow-100 text-yellow-600">
                                    <i class="fas fa-book-medical text-xs"></i>
                                </div>
                                <div class="text-sm bg-yellow-50 p-2 rounded">健康宣教</div>
                            </div>
                        </div>
                        
                        <div class="mt-4 pt-3 border-t border-gray-100 flex justify-between">
                            <button class="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700">
                                <i class="fas fa-copy mr-1"></i>复制模板
                            </button>
                            <button class="px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm hover:bg-gray-200">
                                <i class="fas fa-eye mr-1"></i>查看详情
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- 自定义模板 -->
        <div class="mb-8">
            <div class="flex justify-between items-center mb-4">
                <h2 class="text-lg font-semibold flex items-center">
                    <i class="fas fa-user-edit text-green-500 mr-2"></i>自定义模板
                </h2>
                <div class="text-sm text-gray-500">共3个模板</div>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <!-- 模板4 -->
                <div class="bg-white rounded-xl shadow-soft overflow-hidden border border-gray-100 hover:border-green-300 transition-smooth">
                    <div class="p-4 border-b border-gray-100 bg-gradient-to-r from-green-50 to-green-100">
                        <div class="flex justify-between items-start">
                            <div>
                                <h3 class="font-bold text-lg mb-1">高血压2级管理</h3>
                                <p class="text-sm text-gray-600">30天管理计划</p>
                            </div>
                            <span class="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">自定义</span>
                        </div>
                    </div>
                    <div class="p-4">
                        <div class="mb-4">
                            <div class="flex items-center text-sm text-gray-600 mb-2">
                                <i class="fas fa-calendar-alt mr-2 text-blue-500"></i>
                                <span>随访间隔: <span class="font-medium">30天</span></span>
                            </div>
                            <div class="flex items-center text-sm text-gray-600">
                                <i class="fas fa-tag mr-2 text-blue-500"></i>
                                <span>适用疾病: <span class="font-medium">高血压2级</span></span>
                            </div>
                        </div>
                        
                        <div class="text-sm font-medium mb-2">随访任务 (5项):</div>
                        <div class="space-y-3">
                            <div class="plan-item">
                                <div class="plan-item-dot bg-blue-100 text-blue-600">
                                    <i class="fas fa-stethoscope text-xs"></i>
                                </div>
                                <div class="text-sm bg-blue-50 p-2 rounded">复诊提醒</div>
                            </div>
                            <div class="plan-item">
                                <div class="plan-item-dot bg-green-100 text-green-600">
                                    <i class="fas fa-clipboard-check text-xs"></i>
                                </div>
                                <div class="text-sm bg-green-50 p-2 rounded">问卷量表</div>
                            </div>
                            <div class="plan-item">
                                <div class="plan-item-dot bg-purple-100 text-purple-600">
                                    <i class="fas fa-weight text-xs"></i>
                                </div>
                                <div class="text-sm bg-purple-50 p-2 rounded">体征测量</div>
                            </div>
                            <div class="plan-item">
                                <div class="plan-item-dot bg-yellow-100 text-yellow-600">
                                    <i class="fas fa-book-medical text-xs"></i>
                                </div>
                                <div class="text-sm bg-yellow-50 p-2 rounded">健康宣教</div>
                            </div>
                            <div class="plan-item">
                                <div class="plan-item-dot bg-red-100 text-red-600">
                                    <i class="fas fa-heart text-xs"></i>
                                </div>
                                <div class="text-sm bg-red-50 p-2 rounded">温馨提示</div>
                            </div>
                        </div>
                        
                        <div class="mt-4 pt-3 border-t border-gray-100 flex justify-between">
                            <button class="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700">
                                <i class="fas fa-edit mr-1"></i>编辑
                            </button>
                            <div>
                                <button class="px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm hover:bg-gray-200 mr-1">
                                    <i class="fas fa-copy mr-1"></i>复制
                                </button>
                                <button class="px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm hover:bg-gray-200">
                                    <i class="fas fa-trash-alt mr-1"></i>删除
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- 模板5 -->
                <div class="bg-white rounded-xl shadow-soft overflow-hidden border border-gray-100 hover:border-green-300 transition-smooth">
                    <div class="p-4 border-b border-gray-100 bg-gradient-to-r from-green-50 to-green-100">
                        <div class="flex justify-between items-start">
                            <div>
                                <h3 class="font-bold text-lg mb-1">冠心病术后管理</h3>
                                <p class="text-sm text-gray-600">14天管理计划</p>
                            </div>
                            <span class="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">自定义</span>
                        </div>
                    </div>
                    <div class="p-4">
                        <div class="mb-4">
                            <div class="flex items-center text-sm text-gray-600 mb-2">
                                <i class="fas fa-calendar-alt mr-2 text-blue-500"></i>
                                <span>随访间隔: <span class="font-medium">14天</span></span>
                            </div>
                            <div class="flex items-center text-sm text-gray-600">
                                <i class="fas fa-tag mr-2 text-blue-500"></i>
                                <span>适用疾病: <span class="font-medium">冠心病术后</span></span>
                            </div>
                        </div>
                        
                        <div class="text-sm font-medium mb-2">随访任务 (6项):</div>
                        <div class="space-y-3">
                            <div class="plan-item">
                                <div class="plan-item-dot bg-blue-100 text-blue-600">
                                    <i class="fas fa-stethoscope text-xs"></i>
                                </div>
                                <div class="text-sm bg-blue-50 p-2 rounded">复诊提醒</div>
                            </div>
                            <div class="plan-item">
                                <div class="plan-item-dot bg-green-100 text-green-600">
                                    <i class="fas fa-clipboard-check text-xs"></i>
                                </div>
                                <div class="text-sm bg-green-50 p-2 rounded">问卷量表</div>
                            </div>
                            <div class="plan-item">
                                <div class="plan-item-dot bg-purple-100 text-purple-600">
                                    <i class="fas fa-weight text-xs"></i>
                                </div>
                                <div class="text-sm bg-purple-50 p-2 rounded">体征测量</div>
                            </div>
                            <div class="plan-item">
                                <div class="plan-item-dot bg-yellow-100 text-yellow-600">
                                    <i class="fas fa-book-medical text-xs"></i>
                                </div>
                                <div class="text-sm bg-yellow-50 p-2 rounded">健康宣教</div>
                            </div>
                            <div class="plan-item">
                                <div class="plan-item-dot bg-red-100 text-red-600">
                                    <i class="fas fa-heart text-xs"></i>
                                </div>
                                <div class="text-sm bg-red-50 p-2 rounded">温馨提示</div>
                            </div>
                            <div class="plan-item">
                                <div class="plan-item-dot bg-indigo-100 text-indigo-600">
                                    <i class="fas fa-pills text-xs"></i>
                                </div>
                                <div class="text-sm bg-indigo-50 p-2 rounded">用药指导</div>
                            </div>
                        </div>
                        
                        <div class="mt-4 pt-3 border-t border-gray-100 flex justify-between">
                            <button class="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700">
                                <i class="fas fa-edit mr-1"></i>编辑
                            </button>
                            <div>
                                <button class="px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm hover:bg-gray-200 mr-1">
                                    <i class="fas fa-copy mr-1"></i>复制
                                </button>
                                <button class="px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm hover:bg-gray-200">
                                    <i class="fas fa-trash-alt mr-1"></i>删除
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- 模板6 - 新建模板 -->
                <div class="bg-white rounded-xl shadow-soft overflow-hidden border-2 border-dashed border-gray-300 hover:border-blue-400 transition-smooth flex items-center justify-center min-h-[300px]">
                    <button class="flex flex-col items-center text-blue-500 hover:text-blue-600">
                        <div class="bg-blue-100 p-4 rounded-full mb-2">
                            <i class="fas fa-plus text-xl"></i>
                        </div>
                        <span class="font-medium">新建管理计划模板</span>
                    </button>
                </div>
            </div>
        </div>
        
        <!-- 模板创建说明 -->
        <div class="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div class="flex items-start">
                <div class="bg-blue-100 p-2 rounded-full text-blue-500 mr-3">
                    <i class="fas fa-info-circle"></i>
                </div>
                <div>
                    <h3 class="font-bold text-blue-800 mb-1">模板创建说明</h3>
                    <p class="text-sm text-blue-700 mb-2">1. 系统内置模板不可编辑，但可复制后修改创建自定义模板</p>
                    <p class="text-sm text-blue-700 mb-2">2. 创建模板时可设置随访间隔时间，系统将自动匹配随访门诊时间</p>
                    <p class="text-sm text-blue-700">3. 模板可绑定特定疾病分组和患者群体，实现精准化管理</p>
                </div>
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
