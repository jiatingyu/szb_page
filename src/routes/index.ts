import {
  createRouter,
  createWebHashHistory,
} from "vue-router";
import Layout from "../layouts/index.vue";
import AutoScreen from "../views/AutoScreen.vue";
import Screen from "../views/Screen.vue";
import DataView from "../views/DataView.vue";
import PatientGroup from "../views/PatientGroup.vue";
import GlobalView from "../views/GlobalView.vue";
import ManagePlan from "../views/ManagePlan.vue";
import AppointFollowUp from "../views/AppointFollowUp.vue";
import ClinicAssist from "../views/ClinicAssist.vue";
import Notice from "../views/Notice.vue";
import Analysis from "../views/Analysis.vue";
import TodayFollow from "../views/TodayFollow.vue";

const routes = [
  {
    path: "/",
    component: Layout,
    // redirect:'/',
    children: [
      { path: "/", name: "home", component: Screen },
      { path: "/AutoScreen", name: "AutoScreen", component: AutoScreen }, 
      { path: "/DataView", name: "DataView", component: DataView }, 
      { path: "/PatientGroup", name: "PatientGroup", component: PatientGroup }, 
      { path: "/GlobalView", name: "GlobalView", component: GlobalView },  
      { path: "/ManagePlan", name: "ManagePlan", component: ManagePlan },  
      { path: "/AppointFollowUp", name: "AppointFollowUp", component: AppointFollowUp }, 
      { path: "/ClinicAssist", name: "ClinicAssist", component: ClinicAssist }, 
      { path: "/Notice", name: "Notice", component: Notice }, 
      { path: "/TodayFollow", name: "TodayFollow", component: TodayFollow }, 
      { path: "/Analysis", name: "Analysis", component: Analysis }, 
    ],
  },
  // {
  //   path: "*",
  //   component: "404",
  // },
];

export const router = createRouter({
  // history: (),
  history: createWebHashHistory(),
  routes,
});
