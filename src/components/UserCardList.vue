<template>
  <div id="teamCardList">
    <van-skeleton title avatar :row="3" :loading="props.loading" v-for="user in props.userList">
      <van-card
          :desc="`${user.profile == null ? '暂无简介' : user.profile}`"
          :title="`${user.username == null ? '暂无昵称' : user.username}`"
          :thumb="user.avatarUrl"
      >
        <template #tags>
          <van-tag plain type="danger" v-for="tag in user.tags" style="margin-right: 8px; margin-top: 8px">
            {{ tag }}
          </van-tag>
        </template>
        <template #footer>
          <van-button size="mini" @click="showUserDetail(user)">联系我</van-button>
        </template>
      </van-card>
    </van-skeleton>
    <!-- 自定义图标 -->
    <van-popup
        v-model:show="show"
        closeable
        close-icon="close"
        position="bottom"
        :round=true
    >
      <van-row>
        <van-col span="6">
          <van-image style="width: 100px; height: 100px;" :src="clickUser.avatarUrl"/>
        </van-col>
        <van-col span="18">
          <van-cell />
          <van-cell :title="`伙伴姓名：${clickUser.username}`" />
          <van-cell :title="`联系方式：${clickUser.phone}`" />
        </van-col>
      </van-row>
      <van-row>
        <van-cell :title="`伙伴简介：${clickUser.profile}`"/>
      </van-row>
    </van-popup>
  </div>
</template>

<script setup lang="ts">
import {UserType} from "../models/user";
import {onMounted, ref} from "vue";

interface UserCardListProps {
  loading: boolean;
  userList: UserType[];
}

const props = withDefaults(defineProps<UserCardListProps>(), {
  //@ts-ignore
  userList: [] as UserType[],
  loading: true,
});

const show = ref(false);
const popupText = ref('暂无联系方式');
const clickUser = ref<UserType>();

onMounted(() => {
  const userList = props.userList;
  if (userList) {
    userList.forEach(user => {
      if (user.tags) {
        user.tags = JSON.parse(user.tags);
      }
    })
  }
})

const showUserDetail = (user: UserType) => {
  clickUser.value = user;
  if (user.phone) {
    popupText.value = '联系方式：' + user.phone;
  } else {
    popupText.value = '暂无联系方式';
  }
  show.value = true;
}


</script>

<style scoped>

#teamCardList :deep(.van-tag--primary) {
  background: #ee0a24;
}
</style>