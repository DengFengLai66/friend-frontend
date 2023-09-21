<!--<template>-->
<!--  <template v-if="user">-->
<!--    <van-cell title="头像" is-link to="/user/edit">-->
<!--      <img style="height: 48px" :src="user.avatarUrl">-->
<!--    </van-cell>-->
<!--    <van-cell title="昵称" is-link to="/user/edit" :value="user.username" @click="toEdit('username','昵称',user.username)"/>-->
<!--    <van-cell title="账号" :value="user.userAccount"/>-->
<!--    <van-cell title="性别" is-link :value="user.gender" @click="toEdit('gender','性别',user.gender)"/>-->
<!--    <van-cell title="电话" is-link to="/user/edit" :value="user.phone" @click="toEdit('phone','电话',user.phone)"/>-->
<!--    <van-cell title="邮箱" is-link to="/user/edit" :value="user.email" />-->
<!--    <van-cell title="编号" :value="user.planetCode"/>-->
<!--    <van-cell title="注册时间" :value="user.createTime"/>-->
<!--  </template>-->
<!--</template>-->

<!--<script setup lang="ts">-->
<!--import {useRouter} from "vue-router";-->
<!--import {onMounted, ref} from "vue";-->
<!--import myAxios from "../plugins/myAxios";-->
<!--import {showToast} from "vant";-->
<!--import {getCurrentUser} from "../services/user";-->

<!--// const user = {-->
<!--//   id: 1,-->
<!--//   username: "等风来",-->
<!--//   userAccount: 1,-->
<!--//   avatarUrl: 'https://tse3-mm.cn.bing.net/th/id/OIP-C.UVVsMjQbNQT_wBw_75e3bgHaJQ?w=182&h=228&c=7&r=0&o=5&dpr=1.3&pid=1.7',-->
<!--//   gender: '男',-->
<!--//   phone: '111111',-->
<!--//   email: '111111@qq.com',-->
<!--//   planetCode: 1,-->
<!--//   createTime: new Date(),-->
<!--// };-->

<!--const user = ref();-->

<!--onMounted(async () => {-->
<!--  user.value = await getCurrentUser();-->
<!--})-->

<!--const router = useRouter();-->
<!--const toEdit = (editKey: string, editName: string, currentValue: string) => {-->
<!--  router.push({-->
<!--    path: '/user/edit',-->
<!--    query: {-->
<!--      editKey,-->
<!--      editName,-->
<!--      currentValue,-->
<!--    }-->
<!--  })-->
<!--}-->
<!--</script>-->

<!--<style scoped>-->

<!--</style>-->

<template>
  <template v-if="user">
    <van-cell title="昵称" is-link to='/user/edit' :value="user.username"
              @click="toEdit('username', '昵称', user.username)"/>
    <van-cell title="账号" :value="user.userAccount"/>
    <van-cell title="头像" is-link to='/user/edit' @click="toEdit('avatarUrl', '头像', user.avatarUrl)">
      <img style="height: 48px" :src="user.avatarUrl" alt=""/>
    </van-cell>
    <van-cell title="个人简介" is-link to='/user/edit' :value="user.profile" @click="toEdit('profile', '个人简介', user.profile)"/>
    <van-cell title="性别" is-link to='/user/edit' :value="user.gender === 0 ? '女' : '男'" @click="toEdit('gender', '性别', user.gender)"/>
    <van-cell title="电话" is-link to='/user/edit' :value="user.phone" @click="toEdit('phone', '电话', user.phone)"/>
    <van-cell title="邮箱" is-link to='/user/edit' :value="user.email" @click="toEdit('email', '邮箱', user.email)"/>
    <van-cell title="星球编号" :value="user.planetCode"/>
  </template>
</template>

<script setup lang="ts">

import {useRouter} from "vue-router";
import {onMounted, ref} from "vue";
import {getCurrentUser} from "../services/user";

const user = ref({});

onMounted(async () => {     //异步调用
  user.value = await getCurrentUser();
});



const router = useRouter();
const toEdit = (editKey: string, editName: string, currentVal: string) => {
  router.push({
    path: '/user/edit',
    query: {
      editKey,
      editName,
      currentVal,
    },

  })
}
</script>

<style scoped>

</style>
