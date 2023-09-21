<!--&lt;!&ndash;<template>&ndash;&gt;-->
<!--&lt;!&ndash;  <template v-if="user">&ndash;&gt;-->
<!--&lt;!&ndash;    <van-cell title="修改信息" is-link url="/user/update" />&ndash;&gt;-->
<!--&lt;!&ndash;    <van-cell title="创建的队伍" is-link url="/user/team/create" />&ndash;&gt;-->
<!--&lt;!&ndash;    <van-cell title="加入的队伍" is-link url="/user/team/join" />&ndash;&gt;-->
<!--&lt;!&ndash;  </template>&ndash;&gt;-->
<!--&lt;!&ndash;</template>&ndash;&gt;-->

<!--&lt;!&ndash;<script setup lang="ts">&ndash;&gt;-->
<!--&lt;!&ndash;import {useRouter} from "vue-router";&ndash;&gt;-->
<!--&lt;!&ndash;import {onMounted, ref} from "vue";&ndash;&gt;-->
<!--&lt;!&ndash;import myAxios from "../plugins/myAxios";&ndash;&gt;-->
<!--&lt;!&ndash;import {showToast} from "vant";&ndash;&gt;-->
<!--&lt;!&ndash;import {getCurrentUser} from "../services/user";&ndash;&gt;-->

<!--&lt;!&ndash;// const user = {&ndash;&gt;-->
<!--&lt;!&ndash;//   id: 1,&ndash;&gt;-->
<!--&lt;!&ndash;//   username: "等风来",&ndash;&gt;-->
<!--&lt;!&ndash;//   userAccount: 1,&ndash;&gt;-->
<!--&lt;!&ndash;//   avatarUrl: 'https://tse3-mm.cn.bing.net/th/id/OIP-C.UVVsMjQbNQT_wBw_75e3bgHaJQ?w=182&h=228&c=7&r=0&o=5&dpr=1.3&pid=1.7',&ndash;&gt;-->
<!--&lt;!&ndash;//   gender: '男',&ndash;&gt;-->
<!--&lt;!&ndash;//   phone: '111111',&ndash;&gt;-->
<!--&lt;!&ndash;//   email: '111111@qq.com',&ndash;&gt;-->
<!--&lt;!&ndash;//   planetCode: 1,&ndash;&gt;-->
<!--&lt;!&ndash;//   createTime: new Date(),&ndash;&gt;-->
<!--&lt;!&ndash;// };&ndash;&gt;-->

<!--&lt;!&ndash;const user = ref();&ndash;&gt;-->

<!--&lt;!&ndash;onMounted(async () => {&ndash;&gt;-->
<!--&lt;!&ndash;  user.value = await getCurrentUser();&ndash;&gt;-->
<!--&lt;!&ndash;})&ndash;&gt;-->

<!--&lt;!&ndash;const router = useRouter();&ndash;&gt;-->
<!--&lt;!&ndash;const toEdit = (editKey: string, editName: string, currentValue: string) => {&ndash;&gt;-->
<!--&lt;!&ndash;  router.push({&ndash;&gt;-->
<!--&lt;!&ndash;    path: '/user/edit',&ndash;&gt;-->
<!--&lt;!&ndash;    query: {&ndash;&gt;-->
<!--&lt;!&ndash;      editKey,&ndash;&gt;-->
<!--&lt;!&ndash;      editName,&ndash;&gt;-->
<!--&lt;!&ndash;      currentValue,&ndash;&gt;-->
<!--&lt;!&ndash;    }&ndash;&gt;-->
<!--&lt;!&ndash;  })&ndash;&gt;-->
<!--&lt;!&ndash;}&ndash;&gt;-->
<!--&lt;!&ndash;</script>&ndash;&gt;-->

<!--&lt;!&ndash;<style scoped>&ndash;&gt;-->

<!--&lt;!&ndash;</style>&ndash;&gt;-->

<!--<template>-->
<!--  <template v-if="user">-->
<!--    <van-space style="margin: 20px">-->
<!--      <van-image-->
<!--          round-->
<!--          width="80"-->
<!--          height="80"-->
<!--          :src="user?.avatarUrl"-->
<!--          @click="toUserUpdatePage"-->
<!--      />-->
<!--      <van-cell :title="user.username" style="width: 120px">-->
<!--        <template #label>-->
<!--          <van-text-ellipsis :content="user.profile || '点此编辑个性签名'" @click="toEditProfile"/>-->
<!--        </template>-->
<!--      </van-cell>-->
<!--    </van-space>-->
<!--    <van-cell center>-->
<!--      <template #title>-->
<!--        <span style="margin-left: 20px">我的标签</span>-->
<!--      </template>-->
<!--      <template #value>-->
<!--        <van-tag v-for="tag in user.tags" plain type="danger" style="margin-right: 8px;margin-top: 8px">-->
<!--          {{ tag }}-->
<!--        </van-tag>-->
<!--      </template>-->
<!--    </van-cell>-->
<!--    <van-grid :border="false">-->
<!--      <van-grid-item text="创建的队伍" to="/user/team/create">-->
<!--        <template #icon>-->
<!--          <van-icon class-prefix="my-icon" name="wochuangjiande" size="23" style="margin-bottom: 8px"/>-->
<!--        </template>-->
<!--      </van-grid-item>-->
<!--      <van-grid-item text="加入的队伍" to="/user/team/join">-->
<!--        <template #icon>-->
<!--          <van-icon class-prefix="my-icon" name="jiarubanji" size="23" style="margin-bottom: 8px"/>-->
<!--        </template>-->
<!--      </van-grid-item>-->
<!--    </van-grid>-->
<!--    <van-cell title="修改信息" style="padding: 15px" is-link to="/user/update" :center="true">-->
<!--      <template #icon>-->
<!--        <van-icon name="user-circle-o" size="20" style="margin-right: 5px" color="#1989fa"/>-->
<!--      </template>-->
<!--    </van-cell>-->
<!--    <div style="margin: 16px;">-->
<!--      <van-button style="margin-top: 10px" round block type="primary" native-type="submit" color="red"-->
<!--                  @click="logout">-->
<!--        退出-->
<!--      </van-button>-->
<!--    </div>-->
<!--    <van-dialog v-model:show="showCustomerService" title="请加客服微信">-->
<!--      <van-image-->
<!--          src="../../public/customer-services.jpg"-->
<!--      />-->
<!--    </van-dialog>-->
<!--  </template>-->
<!--</template>-->

<!--<script setup lang="ts">-->

<!--import {useRouter} from "vue-router";-->
<!--import {onMounted, ref} from "vue";-->

<!--import {showFailToast, showSuccessToast} from "vant";-->
<!--import {getCurrentUser} from "../services/user.ts";-->
<!--import myAxios from "../plugins/myAxios";-->

<!--let router = useRouter();-->
<!--const user = ref()-->
<!--const showCustomerService = ref(false)-->
<!--onMounted(async () => {-->
<!--  let currentUser = await getCurrentUser();-->
<!--  if (currentUser) {-->
<!--    user.value = currentUser-->
<!--    if (currentUser.tags) {-->
<!--      currentUser.tags = JSON.parse(currentUser.tags)-->
<!--    }-->
<!--  } else {-->
<!--    showFailToast("未登录")-->
<!--    await router.replace("/user/login")-->
<!--  }-->
<!--})-->
<!--const toEdit = (editKey: string, editName: string, editValue: string) => {-->
<!--  router.push({-->
<!--    path: 'user/edit',-->
<!--    query: {-->
<!--      editKey,-->
<!--      editName,-->
<!--      editValue-->
<!--    }-->
<!--  })-->
<!--}-->
<!--const logout = async () => {-->
<!--  let res = await myAxios.post("/user/logout");-->
<!--  if (res?.data.code === 0) {-->
<!--    showSuccessToast("退出成功")-->
<!--    await router.replace("/")-->
<!--  } else {-->
<!--    showFailToast("内部错误," + res?.data.message)-->
<!--  }-->
<!--}-->
<!--const toEditProfile = () => {-->
<!--  router.push({-->
<!--    path: "/user/edit",-->
<!--    query: {-->
<!--      editKey: "profile",-->
<!--      editName: "个性签名",-->
<!--      editValue: user.value.profile-->
<!--    }-->
<!--  })-->
<!--}-->

<!--const customerService = () => {-->
<!--  showCustomerService.value = true-->
<!--}-->
<!--const toUserUpdatePage = () => {-->
<!--  router.push("/user/update")-->
<!--}-->
<!--</script>-->

<!--<style scoped>-->

<!--:deep(.van-grid-item__text) {-->
<!--  font-size: 12px;-->
<!--}-->

<!--</style>-->

<template>
  <template v-if="user">
    <van-cell to="/user/update">
      <van-card
          :desc="`${user.profile == null ? '写个简介介绍一下自己！' : user.profile}`"
          :thumb="user.avatarUrl"
          :title="`${user.username == null ? '😀：给自己来个昵称' : user.username}`"
      >
        <template #tags>
          <van-tag plain type="danger" v-for="tag in user.tags" style="margin-right: 8px; margin-top: 8px">
            {{ tag }}
          </van-tag>
        </template>
      </van-card>
    </van-cell>
    <van-divider/>

    <van-cell center is-link title="个人标签" to="/user/updateTags">
      <template #icon>
        <van-icon name="label-o"  size="18"/>
      </template>
    </van-cell>

    <van-divider/>
    <van-cell center is-link title="我创建的队伍" to="/user/team/create">
      <template #icon>
        <van-icon name="cluster-o" size="18"/>
      </template>
    </van-cell>
    <van-divider/>
    <van-cell center is-link title="我加入的队伍" to="/user/team/join">
      <template #icon>
        <van-icon name="friends-o" size="18"/>
      </template>
    </van-cell>
    <van-divider/>

<!--    <van-cell center title="退出登录" @click="quit">-->
<!--      <template #icon>-->
<!--        <van-icon name="close" size="18"/>-->
<!--      </template>-->
<!--    </van-cell>-->
    <van-space style="margin: 13px" direction="vertical" fill>
      <van-button type="primary" @click="quit" block>退出</van-button>
    </van-space>

  </template>
</template>

<script setup lang="ts">
import {useRouter} from "vue-router";
import {onMounted, ref} from "vue";
import {getCurrentUser} from "../services/user";
import {showSuccessToast} from "vant";
import myAxios from "../plugins/myAxios";

const user = ref();

onMounted(async () => {
  user.value = await getCurrentUser();
  if (user.value.tags) {
    user.value.tags = JSON.parse(user.value.tags);
  }
})

const router = useRouter();
const quit = async () => {
  const res = await myAxios.post("/user/logout");
  if (res.code === 0) {
    showSuccessToast("退出成功");
    await router.push({
      path: '/',
    })
  }
}

</script>

<style scoped>
:root {
  --van-card-font-size: 10px;
}
</style>