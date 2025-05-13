<script setup lang="ts"></script>

<template>
    <div class="container mx-auto px-4 py-8">
        <!-- 页面标题 -->
        <div class="flex justify-between items-center mb-8">
            <h1 class="text-2xl font-bold text-gray-800">患者分组管理</h1>
            <div class="flex space-x-3">
                <button class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-smooth flex items-center">
                    <i class="fas fa-plus mr-2"></i> 新建分组
                </button>
                <button class="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-smooth flex items-center">
                    <i class="fas fa-filter mr-2"></i> 筛选
                </button>
            </div>
        </div>

        <!-- 统计卡片 -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div class="bg-white rounded-xl shadow-soft p-6">
                <div class="flex items-center">
                    <div class="p-3 rounded-full bg-blue-100 text-blue-600 mr-4">
                        <i class="fas fa-users text-xl"></i>
                    </div>
                    <div>
                        <p class="text-gray-500 text-sm">总分组数</p>
                        <p class="text-2xl font-bold">24</p>
                    </div>
                </div>
            </div>
            <div class="bg-white rounded-xl shadow-soft p-6">
                <div class="flex items-center">
                    <div class="p-3 rounded-full bg-green-100 text-green-600 mr-4">
                        <i class="fas fa-user-injured text-xl"></i>
                    </div>
                    <div>
                        <p class="text-gray-500 text-sm">总患者数</p>
                        <p class="text-2xl font-bold">386</p>
                    </div>
                </div>
            </div>
            <div class="bg-white rounded-xl shadow-soft p-6">
                <div class="flex items-center">
                    <div class="p-3 rounded-full bg-purple-100 text-purple-600 mr-4">
                        <i class="fas fa-user-md text-xl"></i>
                    </div>
                    <div>
                        <p class="text-gray-500 text-sm">参与医护人员</p>
                        <p class="text-2xl font-bold">48</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- 分组列表 -->
        <div class="bg-white rounded-xl shadow-soft overflow-hidden">
            <div class="p-6 border-b border-gray-200">
                <h2 class="text-lg font-semibold">科室亚病种管理小组</h2>
                <p class="text-sm text-gray-500 mt-1">创建和管理患者分组，指定小组成员并绑定管理计划</p>
            </div>
            
            <!-- 搜索和筛选 -->
            <div class="p-4 border-b border-gray-200 flex flex-col md:flex-row justify-between items-center">
                <div class="relative w-full md:w-64 mb-4 md:mb-0">
                    <input type="text" placeholder="搜索分组名称..." class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-smooth">
                    <i class="fas fa-search absolute left-3 top-3 text-gray-400"></i>
                </div>
                <div class="flex space-x-2">
                    <select class="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-smooth">
                        <option>全部科室</option>
                        <option>心血管内科</option>
                        <option>呼吸内科</option>
                        <option>消化内科</option>
                        <option>神经内科</option>
                    </select>
                    <select class="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-smooth">
                        <option>全部状态</option>
                        <option>活跃</option>
                        <option>已归档</option>
                    </select>
                </div>
            </div>

            <!-- 分组表格 -->
            <div class="overflow-x-auto">
                <table class="min-w-full divide-y divide-gray-200">
                    <thead class="bg-gray-50">
                        <tr>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">分组名称</th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">所属科室</th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">患者数</th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">小组成员</th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">管理计划</th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">状态</th>
                            <th scope="col" class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">操作</th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                        <!-- 分组1 -->
                        <tr class="hover:bg-gray-50 transition-smooth">
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="flex items-center">
                                    <div class="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                                        <i class="fas fa-heartbeat"></i>
                                    </div>
                                    <div class="ml-4">
                                        <div class="text-sm font-medium text-gray-900">高血压管理组</div>
                                        <div class="text-sm text-gray-500">创建于 2023-05-12</div>
                                    </div>
                                </div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="text-sm text-gray-900">心血管内科</div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">86</span>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="flex -space-x-2">
                                    <img class="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://randomuser.me/api/portraits/women/12.jpg" alt="医生1">
                                    <img class="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://randomuser.me/api/portraits/men/34.jpg" alt="医生2">
                                    <img class="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://randomuser.me/api/portraits/women/56.jpg" alt="护士1">
                                    <span class="inline-flex items-center justify-center h-8 w-8 rounded-full ring-2 ring-white bg-gray-200 text-gray-600 text-xs">+3</span>
                                </div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                高血压标准管理计划
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">活跃</span>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <div class="flex justify-end space-x-2">
                                    <button class="text-blue-600 hover:text-blue-900 transition-smooth" title="查看患者">
                                        <i class="fas fa-user-friends"></i>
                                    </button>
                                    <button class="text-purple-600 hover:text-purple-900 transition-smooth" title="随访记录">
                                        <i class="fas fa-calendar-check"></i>
                                    </button>
                                    <button class="text-green-600 hover:text-green-900 transition-smooth" title="添加患者">
                                        <i class="fas fa-user-plus"></i>
                                    </button>
                                    <button class="text-gray-600 hover:text-gray-900 transition-smooth" title="更多">
                                        <i class="fas fa-ellipsis-v"></i>
                                    </button>
                                </div>
                            </td>
                        </tr>

                        <!-- 分组2 -->
                        <tr class="hover:bg-gray-50 transition-smooth">
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="flex items-center">
                                    <div class="flex-shrink-0 h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                        <i class="fas fa-lungs"></i>
                                    </div>
                                    <div class="ml-4">
                                        <div class="text-sm font-medium text-gray-900">COPD管理组</div>
                                        <div class="text-sm text-gray-500">创建于 2023-03-28</div>
                                    </div>
                                </div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="text-sm text-gray-900">呼吸内科</div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">54</span>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="flex -space-x-2">
                                    <img class="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://randomuser.me/api/portraits/men/22.jpg" alt="医生1">
                                    <img class="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://randomuser.me/api/portraits/women/45.jpg" alt="护士1">
                                    <span class="inline-flex items-center justify-center h-8 w-8 rounded-full ring-2 ring-white bg-gray-200 text-gray-600 text-xs">+1</span>
                                </div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                COPD标准管理计划
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">活跃</span>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <div class="flex justify-end space-x-2">
                                    <button class="text-blue-600 hover:text-blue-900 transition-smooth" title="查看患者">
                                        <i class="fas fa-user-friends"></i>
                                    </button>
                                    <button class="text-purple-600 hover:text-purple-900 transition-smooth" title="随访记录">
                                        <i class="fas fa-calendar-check"></i>
                                    </button>
                                    <button class="text-green-600 hover:text-green-900 transition-smooth" title="添加患者">
                                        <i class="fas fa-user-plus"></i>
                                    </button>
                                    <button class="text-gray-600 hover:text-gray-900 transition-smooth" title="更多">
                                        <i class="fas fa-ellipsis-v"></i>
                                    </button>
                                </div>
                            </td>
                        </tr>

                        <!-- 分组3 -->
                        <tr class="hover:bg-gray-50 transition-smooth">
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="flex items-center">
                                    <div class="flex-shrink-0 h-10 w-10 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600">
                                        <i class="fas fa-brain"></i>
                                    </div>
                                    <div class="ml-4">
                                        <div class="text-sm font-medium text-gray-900">卒中后管理组</div>
                                        <div class="text-sm text-gray-500">创建于 2023-02-15</div>
                                    </div>
                                </div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="text-sm text-gray-900">神经内科</div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">72</span>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="flex -space-x-2">
                                    <img class="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://randomuser.me/api/portraits/women/33.jpg" alt="医生1">
                                    <img class="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://randomuser.me/api/portraits/men/67.jpg" alt="医生2">
                                    <img class="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://randomuser.me/api/portraits/women/78.jpg" alt="护士1">
                                    <img class="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://randomuser.me/api/portraits/men/89.jpg" alt="康复师">
                                    <span class="inline-flex items-center justify-center h-8 w-8 rounded-full ring-2 ring-white bg-gray-200 text-gray-600 text-xs">+2</span>
                                </div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                卒中后标准管理计划
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">活跃</span>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <div class="flex justify-end space-x-2">
                                    <button class="text-blue-600 hover:text-blue-900 transition-smooth" title="查看患者">
                                        <i class="fas fa-user-friends"></i>
                                    </button>
                                    <button class="text-purple-600 hover:text-purple-900 transition-smooth" title="随访记录">
                                        <i class="fas fa-calendar-check"></i>
                                    </button>
                                    <button class="text-green-600 hover:text-green-900 transition-smooth" title="添加患者">
                                        <i class="fas fa-user-plus"></i>
                                    </button>
                                    <button class="text-gray-600 hover:text-gray-900 transition-smooth" title="更多">
                                        <i class="fas fa-ellipsis-v"></i>
                                    </button>
                                </div>
                            </td>
                        </tr>

                        <!-- 分组4 -->
                        <tr class="hover:bg-gray-50 transition-smooth">
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="flex items-center">
                                    <div class="flex-shrink-0 h-10 w-10 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                                        <i class="fas fa-dna"></i>
                                    </div>
                                    <div class="ml-4">
                                        <div class="text-sm font-medium text-gray-900">糖尿病管理组</div>
                                        <div class="text-sm text-gray-500">创建于 2023-01-10</div>
                                    </div>
                                </div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="text-sm text-gray-900">内分泌科</div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">118</span>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="flex -space-x-2">
                                    <img class="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://randomuser.me/api/portraits/men/56.jpg" alt="医生1">
                                    <img class="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://randomuser.me/api/portraits/women/34.jpg" alt="医生2">
                                    <img class="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://randomuser.me/api/portraits/women/23.jpg" alt="护士1">
                                    <img class="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://randomuser.me/api/portraits/men/45.jpg" alt="营养师">
                                    <span class="inline-flex items-center justify-center h-8 w-8 rounded-full ring-2 ring-white bg-gray-200 text-gray-600 text-xs">+4</span>
                                </div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                糖尿病标准管理计划
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">活跃</span>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <div class="flex justify-end space-x-2">
                                    <button class="text-blue-600 hover:text-blue-900 transition-smooth" title="查看患者">
                                        <i class="fas fa-user-friends"></i>
                                    </button>
                                    <button class="text-purple-600 hover:text-purple-900 transition-smooth" title="随访记录">
                                        <i class="fas fa-calendar-check"></i>
                                    </button>
                                    <button class="text-green-600 hover:text-green-900 transition-smooth" title="添加患者">
                                        <i class="fas fa-user-plus"></i>
                                    </button>
                                    <button class="text-gray-600 hover:text-gray-900 transition-smooth" title="更多">
                                        <i class="fas fa-ellipsis-v"></i>
                                    </button>
                                </div>
                            </td>
                        </tr>

                        <!-- 分组5 -->
                        <tr class="hover:bg-gray-50 transition-smooth">
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="flex items-center">
                                    <div class="flex-shrink-0 h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                                        <i class="fas fa-stomach"></i>
                                    </div>
                                    <div class="ml-4">
                                        <div class="text-sm font-medium text-gray-900">IBD管理组</div>
                                        <div class="text-sm text-gray-500">创建于 2022-11-25</div>
                                    </div>
                                </div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="text-sm text-gray-900">消化内科</div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">56</span>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="flex -space-x-2">
                                    <img class="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://randomuser.me/api/portraits/women/67.jpg" alt="医生1">
                                    <img class="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://randomuser.me/api/portraits/men/78.jpg" alt="医生2">
                                    <span class="inline-flex items-center justify-center h-8 w-8 rounded-full ring-2 ring-white bg-gray-200 text-gray-600 text-xs">+2</span>
                                </div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                IBD标准管理计划
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">已归档</span>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <div class="flex justify-end space-x-2">
                                    <button class="text-blue-600 hover:text-blue-900 transition-smooth" title="查看患者">
                                        <i class="fas fa-user-friends"></i>
                                    </button>
                                    <button class="text-purple-600 hover:text-purple-900 transition-smooth" title="随访记录">
                                        <i class="fas fa-calendar-check"></i>
                                    </button>
                                    <button class="text-green-600 hover:text-green-900 transition-smooth" title="添加患者">
                                        <i class="fas fa-user-plus"></i>
                                    </button>
                                    <button class="text-gray-600 hover:text-gray-900 transition-smooth" title="更多">
                                        <i class="fas fa-ellipsis-v"></i>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <!-- 分页 -->
            <div class="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
                <div class="flex-1 flex justify-between sm:hidden">
                    <a href="#" class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">上一页</a>
                    <a href="#" class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">下一页</a>
                </div>
                <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                    <div>
                        <p class="text-sm text-gray-700">
                            显示 <span class="font-medium">1</span> 到 <span class="font-medium">5</span> 条，共 <span class="font-medium">24</span> 条
                        </p>
                    </div>
                    <div>
                        <nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                            <a href="#" class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                                <span class="sr-only">上一页</span>
                                <i class="fas fa-chevron-left"></i>
                            </a>
                            <a href="#" aria-current="page" class="z-10 bg-blue-50 border-blue-500 text-blue-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium">1</a>
                            <a href="#" class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">2</a>
                            <a href="#" class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">3</a>
                            <a href="#" class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">4</a>
                            <a href="#" class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">5</a>
                            <a href="#" class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                                <span class="sr-only">下一页</span>
                                <i class="fas fa-chevron-right"></i>
                            </a>
                        </nav>
                    </div>
                </div>
            </div>
        </div>

        <!-- 快速操作面板 -->
        <div class="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <!-- 创建新分组 -->
            <div class="bg-white rounded-xl shadow-soft p-6">
                <div class="flex items-center mb-4">
                    <div class="p-2 rounded-lg bg-blue-100 text-blue-600 mr-3">
                        <i class="fas fa-plus-circle text-xl"></i>
                    </div>
                    <h3 class="text-lg font-semibold">创建新分组</h3>
                </div>
                <p class="text-sm text-gray-600 mb-4">自定义创建患者分组，指定小组成员并绑定管理计划</p>
                <button class="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-smooth flex items-center justify-center">
                    <i class="fas fa-plus mr-2"></i> 新建患者分组
                </button>
            </div>

            <!-- 批量操作 -->
            <div class="bg-white rounded-xl shadow-soft p-6">
                <div class="flex items-center mb-4">
                    <div class="p-2 rounded-lg bg-purple-100 text-purple-600 mr-3">
                        <i class="fas fa-users-cog text-xl"></i>
                    </div>
                    <h3 class="text-lg font-semibold">批量操作</h3>
                </div>
                <p class="text-sm text-gray-600 mb-4">批量添加患者到分组，或批量修改分组属性</p>
                <div class="grid grid-cols-2 gap-3">
                    <button class="px-3 py-2 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition-smooth text-sm flex items-center justify-center">
                        <i class="fas fa-user-plus mr-1"></i> 添加患者
                    </button>
                    <button class="px-3 py-2 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition-smooth text-sm flex items-center justify-center">
                        <i class="fas fa-user-edit mr-1"></i> 修改分组
                    </button>
                    <button class="px-3 py-2 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition-smooth text-sm flex items-center justify-center">
                        <i class="fas fa-file-export mr-1"></i> 导出数据
                    </button>
                    <button class="px-3 py-2 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition-smooth text-sm flex items-center justify-center">
                        <i class="fas fa-archive mr-1"></i> 归档分组
                    </button>
                </div>
            </div>

            <!-- 管理计划模板 -->
            <div class="bg-white rounded-xl shadow-soft p-6">
                <div class="flex items-center mb-4">
                    <div class="p-2 rounded-lg bg-green-100 text-green-600 mr-3">
                        <i class="fas fa-clipboard-list text-xl"></i>
                    </div>
                    <h3 class="text-lg font-semibold">管理计划模板</h3>
                </div>
                <p class="text-sm text-gray-600 mb-4">查看或编辑标准管理计划模板，为分组绑定计划</p>
                <div class="space-y-3">
                    <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div class="flex items-center">
                            <i class="fas fa-heartbeat text-red-400 mr-3"></i>
                            <span class="text-sm font-medium">高血压管理计划</span>
                        </div>
                        <button class="text-blue-600 hover:text-blue-800 transition-smooth text-sm">
                            <i class="fas fa-eye"></i>
                        </button>
                    </div>
                    <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div class="flex items-center">
                            <i class="fas fa-lungs text-green-400 mr-3"></i>
                            <span class="text-sm font-medium">COPD管理计划</span>
                        </div>
                        <button class="text-blue-600 hover:text-blue-800 transition-smooth text-sm">
                            <i class="fas fa-eye"></i>
                        </button>
                    </div>
                    <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div class="flex items-center">
                            <i class="fas fa-dna text-yellow-400 mr-3"></i>
                            <span class="text-sm font-medium">糖尿病管理计划</span>
                        </div>
                        <button class="text-blue-600 hover:text-blue-800 transition-smooth text-sm">
                            <i class="fas fa-eye"></i>
                        </button>
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
 