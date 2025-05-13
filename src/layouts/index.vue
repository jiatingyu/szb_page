<script setup lang="ts">
import { reactive, watch, h } from "vue";
import {
  PieChartOutlined,
  DesktopOutlined,
  InboxOutlined,
} from "@ant-design/icons-vue";
import { useRouter } from "vue-router";
const state = reactive({
  collapsed: false,
  selectedKeys: ["1"],
  openKeys: ["sub1"],
  preOpenKeys: ["sub1"],
});
const items = reactive([
  {
    key: "/",
    icon: () => h(PieChartOutlined),
    label: "筛查规则管理",
    title: "筛查规则管理",
  },
  {
    key: "AutoScreen",
    icon: () => h(DesktopOutlined),
    label: "自动化筛查",
    title: "自动化筛查",
  },
  {
    key: "DataView",
    icon: () => h(InboxOutlined),
    label: "数据看板",
    title: "数据看板",
  },
  {
    key: "PatientGroup",
    icon: () => h(InboxOutlined),
    label: "患者分组",
    title: "患者分组",
  },
  {
    key: "GlobalView",
    icon: () => h(InboxOutlined),
    label: "全息视图",
    title: "全息视图",
  },
  {
    key: "TodayFollow",
    icon: () => h(InboxOutlined),
    label: "今日随访",
    title: "今日随访",
  },
  {
    key: "AppointFollowUp",
    icon: () => h(InboxOutlined),
    label: "随访预约",
    title: "随访预约",
  },
  {
    key: "ManagePlan",
    icon: () => h(InboxOutlined),
    label: "管理计划",
    title: "管理计划",
  },
  {
    key: "ClinicAssist",
    icon: () => h(InboxOutlined),
    label: "临床辅助",
    title: "临床辅助",
  },
  {
    key: "Notice",
    icon: () => h(InboxOutlined),
    label: "智能提醒",
    title: "智能提醒",
  },
  {
    key: "Analysis",
    icon: () => h(InboxOutlined),
    label: "质控统计",
    title: "质控统计",
  },
]);
watch(
  () => state.openKeys,
  (_val, oldVal) => {
    state.preOpenKeys = oldVal;
  }
);
let router = useRouter();
const toPage = ({ key }:any) => {
  console.log(router,key);
  router.push(key);
};
</script>

<template>
  <div>
    <!-- 顶部导航 -->
    <nav class="bg-white shadow-sm">
      <div class="mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex items-center">
            <div class="flex-shrink-0 flex items-center">
              <i class="fas fa-chart-line text-blue-600 text-2xl mr-2"></i>
              <span class="text-xl font-semibold text-gray-800"
                >肾脏病管理系统</span
              >
            </div>
          </div>
          <div class="flex items-center">
            <button
              class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-all"
            >
              <i class="fas fa-user-circle mr-2"></i>用户中心
            </button>
          </div>
        </div>
      </div>
    </nav>
    <div class="flex">
      <div style="width: 256px">
        <a-menu
          v-model:openKeys="state.openKeys"
          v-model:selectedKeys="state.selectedKeys"
          mode="inline"
          :inline-collapsed="state.collapsed"
          :items="items"
          @click="toPage"
        ></a-menu>
      </div>
      <div class="flex-1">
        <RouterView></RouterView>
      </div>
    </div>
  </div>
</template>

<style>
/* 自定义滚动条样式 */
.custom-scrollbar::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 4px;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 4px;
}
.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}

/* 表格行悬停效果 */
.hover-row:hover {
  background-color: #f8fafc;
  transform: translateY(-1px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

/* 加载动画 */
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.animate-spin {
  animation: spin 1s linear infinite;
}

/* 过渡效果 */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
</style>
