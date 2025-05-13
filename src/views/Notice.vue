<script setup lang="ts"></script>

<template>
      <div class="container mx-auto px-4 py-6">
        <!-- 智能提醒部分 -->
        <div class="bg-white rounded-xl shadow-soft p-6 mb-8">
            <div class="flex items-center mb-6">
                <div class="bg-blue-100 p-3 rounded-full text-blue-600 mr-4">
                    <i class="fas fa-bell text-xl"></i>
                </div>
                <h1 class="text-2xl font-bold">智能提醒系统</h1>
            </div>
            
            <!-- 异常指标提醒 -->
            <div class="mb-8">
                <div class="flex justify-between items-center mb-4">
                    <h2 class="text-lg font-semibold flex items-center">
                        <i class="fas fa-exclamation-triangle text-red-500 mr-2"></i>异常指标提醒
                    </h2>
                    <div class="text-sm text-gray-500">更新时间: 2023-07-15 14:30</div>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <!-- 提醒卡片1 -->
                    <div class="bg-red-50 border border-red-100 rounded-lg p-4">
                        <div class="flex justify-between items-start mb-2">
                            <div>
                                <div class="font-bold text-red-800">感染指标异常</div>
                                <div class="text-xs text-red-600">白细胞计数 (WBC)</div>
                            </div>
                            <span class="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-bold">危急值</span>
                        </div>
                        <div class="text-sm text-gray-700 mb-1">患者: 张伟 (ID: 202307001)</div>
                        <div class="text-sm text-gray-700 mb-1">检测值: 18.5 ×10⁹/L ↑</div>
                        <div class="text-sm text-gray-700">检测时间: 2023-07-15 10:15</div>
                    </div>
                    
                    <!-- 提醒卡片2 -->
                    <div class="bg-yellow-50 border border-yellow-100 rounded-lg p-4">
                        <div class="flex justify-between items-start mb-2">
                            <div>
                                <div class="font-bold text-yellow-800">肾功能异常</div>
                                <div class="text-xs text-yellow-600">血肌酐 (Scr)</div>
                            </div>
                            <span class="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-bold">偏高</span>
                        </div>
                        <div class="text-sm text-gray-700 mb-1">患者: 李娜 (ID: 202307002)</div>
                        <div class="text-sm text-gray-700 mb-1">检测值: 186 μmol/L ↑</div>
                        <div class="text-sm text-gray-700">检测时间: 2023-07-15 09:30</div>
                    </div>
                    
                    <!-- 提醒卡片3 -->
                    <div class="bg-orange-50 border border-orange-100 rounded-lg p-4">
                        <div class="flex justify-between items-start mb-2">
                            <div>
                                <div class="font-bold text-orange-800">电解质紊乱</div>
                                <div class="text-xs text-orange-600">血钾 (K+)</div>
                            </div>
                            <span class="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs font-bold">偏高</span>
                        </div>
                        <div class="text-sm text-gray-700 mb-1">患者: 王强 (ID: 202307003)</div>
                        <div class="text-sm text-gray-700 mb-1">检测值: 5.8 mmol/L ↑</div>
                        <div class="text-sm text-gray-700">检测时间: 2023-07-14 16:45</div>
                    </div>
                </div>
            </div>
            
            <!-- 化验项目提醒 -->
            <div>
                <div class="flex justify-between items-center mb-4">
                    <h2 class="text-lg font-semibold flex items-center">
                        <i class="fas fa-calendar-check text-blue-500 mr-2"></i>待检化验项目提醒
                    </h2>
                    <div class="text-sm text-gray-500">基于SOP标准自动生成</div>
                </div>
                
                <div class="overflow-x-auto">
                    <table class="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
                        <thead class="bg-gray-50">
                            <tr>
                                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">患者姓名</th>
                                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">ID</th>
                                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">上次检测</th>
                                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">建议检测项目</th>
                                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">建议检测时间</th>
                                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">临床意义</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200">
                            <tr>
                                <td class="px-4 py-3 text-sm font-medium">张伟</td>
                                <td class="px-4 py-3 text-sm">202307001</td>
                                <td class="px-4 py-3 text-sm">2023-07-01</td>
                                <td class="px-4 py-3 text-sm">
                                    <span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs mr-1">血常规</span>
                                    <span class="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">C反应蛋白</span>
                                </td>
                                <td class="px-4 py-3 text-sm">2023-07-16</td>
                                <td class="px-4 py-3 text-sm text-gray-600">监测感染控制情况</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-3 text-sm font-medium">李娜</td>
                                <td class="px-4 py-3 text-sm">202307002</td>
                                <td class="px-4 py-3 text-sm">2023-06-20</td>
                                <td class="px-4 py-3 text-sm">
                                    <span class="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs mr-1">肾功能</span>
                                    <span class="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">电解质</span>
                                </td>
                                <td class="px-4 py-3 text-sm">2023-07-18</td>
                                <td class="px-4 py-3 text-sm text-gray-600">CKD患者常规监测</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-3 text-sm font-medium">王强</td>
                                <td class="px-4 py-3 text-sm">202307003</td>
                                <td class="px-4 py-3 text-sm">2023-07-05</td>
                                <td class="px-4 py-3 text-sm">
                                    <span class="bg-red-100 text-red-800 px-2 py-1 rounded text-xs mr-1">肝功能</span>
                                    <span class="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-xs">血脂</span>
                                </td>
                                <td class="px-4 py-3 text-sm">2023-07-25</td>
                                <td class="px-4 py-3 text-sm text-gray-600">药物肝毒性监测</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-3 text-sm font-medium">陈芳</td>
                                <td class="px-4 py-3 text-sm">202307004</td>
                                <td class="px-4 py-3 text-sm">2023-06-15</td>
                                <td class="px-4 py-3 text-sm">
                                    <span class="bg-green-100 text-green-800 px-2 py-1 rounded text-xs mr-1">糖化血红蛋白</span>
                                    <span class="bg-pink-100 text-pink-800 px-2 py-1 rounded text-xs">尿微量白蛋白</span>
                                </td>
                                <td class="px-4 py-3 text-sm">2023-07-20</td>
                                <td class="px-4 py-3 text-sm text-gray-600">糖尿病常规监测</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        
        <!-- 饮食指导部分 -->
        <div class="bg-white rounded-xl shadow-soft p-6">
            <div class="flex items-center mb-6">
                <div class="bg-green-100 p-3 rounded-full text-green-600 mr-4">
                    <i class="fas fa-utensils text-xl"></i>
                </div>
                <h1 class="text-2xl font-bold">饮食指导系统</h1>
            </div>
            
            <!-- 食品分类 -->
            <div class="mb-8">
                <div class="flex justify-between items-center mb-4">
                    <h2 class="text-lg font-semibold flex items-center">
                        <i class="fas fa-layer-group text-green-500 mr-2"></i>食品分类浏览
                    </h2>
                    <div class="text-sm text-gray-500">12大类，3000+种食品</div>
                </div>
                
                <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    <!-- 分类1 -->
                    <div class="food-category-card bg-white border border-gray-200 rounded-lg p-4 text-center cursor-pointer hover:shadow-md">
                        <div class="bg-red-100 p-3 rounded-full text-red-500 w-12 h-12 flex items-center justify-center mx-auto mb-2">
                            <i class="fas fa-bread-slice"></i>
                        </div>
                        <div class="font-medium">主食类</div>
                        <div class="text-xs text-gray-500">320种</div>
                    </div>
                    
                    <!-- 分类2 -->
                    <div class="food-category-card bg-white border border-gray-200 rounded-lg p-4 text-center cursor-pointer hover:shadow-md">
                        <div class="bg-blue-100 p-3 rounded-full text-blue-500 w-12 h-12 flex items-center justify-center mx-auto mb-2">
                            <i class="fas fa-drumstick-bite"></i>
                        </div>
                        <div class="font-medium">肉蛋类</div>
                        <div class="text-xs text-gray-500">280种</div>
                    </div>
                    
                    <!-- 分类3 -->
                    <div class="food-category-card bg-white border border-gray-200 rounded-lg p-4 text-center cursor-pointer hover:shadow-md">
                        <div class="bg-green-100 p-3 rounded-full text-green-500 w-12 h-12 flex items-center justify-center mx-auto mb-2">
                            <i class="fas fa-seedling"></i>
                        </div>
                        <div class="font-medium">大豆及制品</div>
                        <div class="text-xs text-gray-500">150种</div>
                    </div>
                    
                    <!-- 分类4 -->
                    <div class="food-category-card bg-white border border-gray-200 rounded-lg p-4 text-center cursor-pointer hover:shadow-md">
                        <div class="bg-yellow-100 p-3 rounded-full text-yellow-500 w-12 h-12 flex items-center justify-center mx-auto mb-2">
                            <i class="fas fa-carrot"></i>
                        </div>
                        <div class="font-medium">蔬菜菌藻类</div>
                        <div class="text-xs text-gray-500">420种</div>
                    </div>
                    
                    <!-- 分类5 -->
                    <div class="food-category-card bg-white border border-gray-200 rounded-lg p-4 text-center cursor-pointer hover:shadow-md">
                        <div class="bg-purple-100 p-3 rounded-full text-purple-500 w-12 h-12 flex items-center justify-center mx-auto mb-2">
                            <i class="fas fa-apple-alt"></i>
                        </div>
                        <div class="font-medium">水果类</div>
                        <div class="text-xs text-gray-500">260种</div>
                    </div>
                    
                    <!-- 分类6 -->
                    <div class="food-category-card bg-white border border-gray-200 rounded-lg p-4 text-center cursor-pointer hover:shadow-md">
                        <div class="bg-pink-100 p-3 rounded-full text-pink-500 w-12 h-12 flex items-center justify-center mx-auto mb-2">
                            <i class="fas fa-ice-cream"></i>
                        </div>
                        <div class="font-medium">奶类</div>
                        <div class="text-xs text-gray-500">180种</div>
                    </div>
                </div>
            </div>
            
            <!-- 营养成分筛选 -->
            <div>
                <div class="flex justify-between items-center mb-4">
                    <h2 class="text-lg font-semibold flex items-center">
                        <i class="fas fa-filter text-green-500 mr-2"></i>按营养成分筛选
                    </h2>
                    <div class="text-sm text-gray-500">选择关注成分进行排序</div>
                </div>
                
                <div class="bg-white border border-gray-200 rounded-lg p-4 mb-4">
                    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
                        <div class="flex items-center">
                            <input type="radio" id="potassium" name="nutrient" class="mr-2">
                            <label for="potassium" class="text-sm">钾含量</label>
                        </div>
                        <div class="flex items-center">
                            <input type="radio" id="sodium" name="nutrient" class="mr-2">
                            <label for="sodium" class="text-sm">钠含量</label>
                        </div>
                        <div class="flex items-center">
                            <input type="radio" id="calcium" name="nutrient" class="mr-2">
                            <label for="calcium" class="text-sm">钙含量</label>
                        </div>
                        <div class="flex items-center">
                            <input type="radio" id="phosphorus" name="nutrient" class="mr-2">
                            <label for="phosphorus" class="text-sm">磷含量</label>
                        </div>
                        <div class="flex items-center">
                            <input type="radio" id="protein" name="nutrient" class="mr-2">
                            <label for="protein" class="text-sm">蛋白质</label>
                        </div>
                        <div class="flex items-center">
                            <input type="radio" id="calories" name="nutrient" class="mr-2">
                            <label for="calories" class="text-sm">热量</label>
                        </div>
                    </div>
                </div>
                
                <!-- 食品列表 -->
                <div class="overflow-x-auto">
                    <table class="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
                        <thead class="bg-gray-50">
                            <tr>
                                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">食品名称</th>
                                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">分类</th>
                                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">钾(mg)</th>
                                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">钠(mg)</th>
                                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">钙(mg)</th>
                                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">磷(mg)</th>
                                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">蛋白质(g)</th>
                                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">热量(kcal)</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200">
                            <tr>
                                <td class="px-4 py-3 text-sm font-medium">大米(粳米)</td>
                                <td class="px-4 py-3 text-sm">主食类</td>
                                <td class="px-4 py-3 text-sm">103</td>
                                <td class="px-4 py-3 text-sm">3.8</td>
                                <td class="px-4 py-3 text-sm">13</td>
                                <td class="px-4 py-3 text-sm">110</td>
                                <td class="px-4 py-3 text-sm">7.4</td>
                                <td class="px-4 py-3 text-sm">346</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-3 text-sm font-medium">鸡胸肉</td>
                                <td class="px-4 py-3 text-sm">肉蛋类</td>
                                <td class="px-4 py-3 text-sm">338</td>
                                <td class="px-4 py-3 text-sm">34.4</td>
                                <td class="px-4 py-3 text-sm">3</td>
                                <td class="px-4 py-3 text-sm">214</td>
                                <td class="px-4 py-3 text-sm">19.4</td>
                                <td class="px-4 py-3 text-sm">133</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-3 text-sm font-medium">豆腐(北)</td>
                                <td class="px-4 py-3 text-sm">大豆及制品</td>
                                <td class="px-4 py-3 text-sm">106</td>
                                <td class="px-4 py-3 text-sm">7.2</td>
                                <td class="px-4 py-3 text-sm">138</td>
                                <td class="px-4 py-3 text-sm">158</td>
                                <td class="px-4 py-3 text-sm">12.2</td>
                                <td class="px-4 py-3 text-sm">98</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-3 text-sm font-medium">菠菜</td>
                                <td class="px-4 py-3 text-sm">蔬菜菌藻类</td>
                                <td class="px-4 py-3 text-sm">311</td>
                                <td class="px-4 py-3 text-sm">85.2</td>
                                <td class="px-4 py-3 text-sm">66</td>
                                <td class="px-4 py-3 text-sm">47</td>
                                <td class="px-4 py-3 text-sm">2.6</td>
                                <td class="px-4 py-3 text-sm">28</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-3 text-sm font-medium">香蕉</td>
                                <td class="px-4 py-3 text-sm">水果类</td>
                                <td class="px-4 py-3 text-sm">256</td>
                                <td class="px-4 py-3 text-sm">0.8</td>
                                <td class="px-4 py-3 text-sm">7</td>
                                <td class="px-4 py-3 text-sm">28</td>
                                <td class="px-4 py-3 text-sm">1.4</td>
                                <td class="px-4 py-3 text-sm">93</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
                <!-- 饮食建议 -->
                <div class="mt-6 bg-green-50 border border-green-100 rounded-lg p-4">
                    <h3 class="font-bold text-green-800 mb-2 flex items-center">
                        <i class="fas fa-comment-medical text-green-500 mr-2"></i>饮食建议
                    </h3>
                    <div class="text-sm text-green-700 space-y-2">
                        <p>1. <span class="font-medium">低钾饮食</span>患者建议选择钾含量低于200mg/100g的食品，如苹果、梨等</p>
                        <p>2. <span class="font-medium">低蛋白饮食</span>患者可选择蛋白质含量低于5g/100g的蔬菜水果类食品</p>
                        <p>3. <span class="font-medium">高钙饮食</span>患者可多选择奶制品、豆制品和深绿色蔬菜</p>
                        <p>4. <span class="font-medium">低磷饮食</span>患者应限制坚果、动物内脏等高磷食品摄入</p>
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
