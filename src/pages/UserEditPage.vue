<!--<template>-->
<!--  <van-form @submit="onSubmit">-->
<!--      <van-field-->
<!--          v-model="editUser.currentValue"-->
<!--          :name="editUser.editKey"-->
<!--          :label="editUser.editName"-->
<!--          :placeholder="`请输入${editUser.currentValue}`"-->
<!--      />-->
<!--    <div style="margin: 16px;">-->
<!--      <van-button round block type="primary" native-type="submit">-->
<!--        提交-->
<!--      </van-button>-->
<!--    </div>-->
<!--  </van-form>-->
<!--</template>-->

<!--<script setup lang="ts">-->
<!--import {useRoute, useRouter} from "vue-router";-->
<!--import {ref} from "vue";-->
<!--import myAxios from "../plugins/myAxios";-->
<!--import {showToast} from "vant";-->
<!--import {getCurrentUser} from "../services/user";-->


<!--const router = useRouter();-->
<!--const route = useRoute();-->

<!--const editUser = ref({-->
<!--  editKey: route.query.editKey,-->
<!--  editName: route.query.editName,-->
<!--  currentValue: route.query.currentValue-->
<!--})-->

<!--const onSubmit = async () => {-->
<!--  const currentUser = await getCurrentUser();-->

<!--  if (!currentUser){-->
<!--    showToast('用户未登录');-->
<!--    return;-->
<!--  }-->

<!--  console.log(currentUser,'当前用户')-->

<!--  const res = await myAxios.post('user/update',{-->
<!--    'id':currentUser.id,-->
<!--    [editUser.value.editKey as string]: editUser.value.currentValue,-->
<!--  })-->
<!--  console.log(res,'跟新请求');-->
<!--  if (res.code === 0 && res.data >0){-->
<!--    showToast('修改成功');-->
<!--    router.back();-->
<!--  }else {-->
<!--    showToast('修改失败');-->
<!--  }-->
<!--};-->

<!--</script>-->

<!--<style scoped>-->

<!--</style>-->

<!--<template>-->
<!--  <van-form @submit="onSubmit">-->
<!--    <van-radio-group v-model="editUser.currentValue" v-if="editUser.editKey === 'gender'">-->
<!--      <van-radio name="0">女</van-radio>-->
<!--      <van-radio name="1">男</van-radio>-->
<!--    </van-radio-group>-->
<!--    <van-row v-else-if="editUser.editKey === 'avatarUrl'" justify="center">-->
<!--      <van-cell center title="头像">-->
<!--        &lt;!&ndash; 使用 title 插槽来自定义标题 &ndash;&gt;-->
<!--        <template #value>-->
<!--          <van-uploader v-model="fileList" :after-read="afterRead" max-count="1" multiple/>-->
<!--        </template>-->
<!--      </van-cell>-->

<!--    </van-row>-->
<!--    <van-field v-else-->
<!--               v-model="editUser.currentValue"-->
<!--               :name="editUser.editKey"-->

<!--               :label="editUser.editName"-->
<!--               :placeholder="`请输入${editUser.editName}`"-->
<!--    />-->
<!--    <div style="margin: 16px;">-->
<!--      <van-button round block type="primary" native-type="submit">-->
<!--        提交-->
<!--      </van-button>-->
<!--    </div>-->
<!--  </van-form>-->
<!--</template>-->

<!--<script setup lang="ts">-->
<!--import {useRoute, useRouter} from "vue-router";-->
<!--import {onMounted, ref} from "vue";-->
<!--import myAxios from "../plugins/myAxios";-->
<!--import {getCurrentUser} from "../services/user";-->
<!--const route = useRoute();-->
<!--const router =useRouter();-->
<!--console.log(route.query)-->

<!--const editUser = ref({-->
<!--  editKey: route.query.editKey,-->
<!--  currentValue: route.query.currentVal,-->
<!--  editName: route.query.editName,-->
<!--})-->

<!--const fileList = ref([-->
<!--  {url: editUser.value.currentValue, isImage: true},-->
<!--]);-->

<!--const isShow = ref(true);-->

<!--onMounted(async () => {-->
<!--  if (editUser.value.editName === '头像') {-->
<!--    isShow.value = false;-->
<!--  }-->
<!--});-->

<!--const afterRead = async (file) => {-->
<!--  // console.log(file.file);-->

<!--  const fileFile = file.file-->
<!--  const res = await myAxios.post("/fileOss/upload", {-->
<!--    'file': fileFile-->
<!--  }, {-->
<!--    headers: {'Content-Type': 'multipart/form-data'},-->
<!--  })-->
<!--  editUser.value.currentValue = res.data;-->

<!--};-->

<!--const onSubmit = async () => {-->

<!--  const currentUser = await getCurrentUser();-->
<!--  console.log("-&#45;&#45;&#45;&#45;&#45;&#45;UserEditPage", currentUser);-->
<!--  const res = await myAxios.post("/user/update", {-->
<!--    "id": currentUser.id,-->
<!--    [editUser.value.editKey]: editUser.value.currentValue // 动态取值-->
<!--  })-->
<!--  console.log("修改用户信息", res);-->
<!--  if (res.code == 0 && res.data > 0) {-->
<!--    router.replace("/user");-->
<!--  } else {-->
<!--  }-->
<!--};-->
<!--</script>-->

<template>
  <van-form @submit="onSubmit">
    <van-radio-group v-model="editUser.currentValue" v-if="editUser.editKey === 'gender'">
      <van-radio name="1">男</van-radio>
      <van-radio name="0">女</van-radio>
    </van-radio-group>
    <van-row v-else-if="editUser.editKey === 'avatarUrl'" justify="center">
      <van-cell center title="头像">
        <!-- 使用 title 插槽来自定义标题 -->
        <template #value>
          <van-uploader v-model="fileList" :after-read="afterRead" max-count="1" multiple/>
        </template>
      </van-cell>

    </van-row>
    <van-field v-else
               v-model="editUser.currentValue"
               :name="editUser.editKey"

               :label="editUser.editName"
               :placeholder="`请输入${editUser.editName}`"
    />
    <div style="margin: 16px;">
      <van-button round block type="primary" native-type="submit">
        提交
      </van-button>
    </div>
  </van-form>
</template>

<script setup lang="ts">
import {useRoute, useRouter} from "vue-router";
import {onMounted, ref} from "vue";
import myAxios from "../plugins/myAxios";
import {getCurrentUser} from "../services/user";
const route = useRoute();
const router =useRouter();
console.log(route.query)

const editUser = ref({
  editKey: route.query.editKey,
  currentValue: route.query.currentVal,
  editName: route.query.editName,
})

const fileList = ref([
  {url: editUser.value.currentValue, isImage: true},
]);

const isShow = ref(true);

onMounted(async () => {
  if (editUser.value.editName === '头像') {
    isShow.value = false;
  }
});

const onSubmit = async () => {

  const currentUser = await getCurrentUser();
  console.log("-------UserEditPage", currentUser);
  const res = await myAxios.post("/user/update", {
    "id": currentUser.id,
    [editUser.value.editKey]: editUser.value.currentValue // 动态取值
  })
  console.log("修改用户信息", res);
  if (res.code == 0 && res.data > 0) {
    router.replace("/user");
  } else {
  }
};
</script>