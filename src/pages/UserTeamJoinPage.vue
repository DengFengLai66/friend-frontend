<!--<template>-->
<!--  <div id="teamPage">-->
<!--    <van-search v-model="searchText" placeholder="搜索队伍" @search="onSearch" />-->
<!--    <team-card-list :teamList="teamList" />-->
<!--    <van-empty v-if="teamList?.length < 1" description="数据为空"/>-->
<!--  </div>-->
<!--</template>-->

<!--<script setup lang="ts">-->

<!--import {useRouter} from "vue-router";-->
<!--import TeamCardList from "../components/TeamCardList.vue";-->
<!--import {onMounted, ref} from "vue";-->
<!--import myAxios from "../plugins/myAxios";-->
<!--import {showFailToast, Toast} from "vant";-->

<!--const router = useRouter();-->
<!--const searchText = ref('');-->

<!--const teamList = ref([]);-->

<!--/**-->
<!-- * 搜索队伍-->
<!-- * @param val-->
<!-- * @returns {Promise<void>}-->
<!-- */-->
<!--const listTeam = async (val = '') => {-->
<!--  const res = await myAxios.get("/team/list/my/join", {-->
<!--    params: {-->
<!--      searchText: val,-->
<!--      pageNum: 1,-->
<!--    },-->
<!--  });-->
<!--  if (res?.code === 0) {-->
<!--    teamList.value = res.data;-->
<!--  } else {-->
<!--    showFailToast('加载队伍失败，请刷新重试');-->
<!--  }-->
<!--}-->


<!--// 页面加载时只触发一次-->
<!--onMounted( () => {-->
<!--  listTeam();-->
<!--})-->

<!--const onSearch = (val) => {-->
<!--  listTeam(val);-->
<!--};-->

<!--</script>-->

<!--<style scoped>-->
<!--#teamPage {-->

<!--}-->
<!--</style>-->
<!--<template>-->
<!--  <div id="teamPage">-->
<!--    <div>-->
<!--      <van-card-->
<!--          v-for="team in teamList"-->
<!--          :thumb=touxiang-->
<!--          :desc="team.description"-->
<!--          :title="`${team.name} `"-->
<!--      >-->
<!--        <template #tags>-->
<!--          <van-tag plain type="danger" style="margin-right: 8px; margin-top: 8px">-->
<!--            {{-->
<!--              teamStatusEnum[team.status]-->
<!--            }}-->
<!--          </van-tag>-->
<!--&lt;!&ndash;          <van-tag plain style="margin-right: 8px; margin-top: 8px" type="warning">&ndash;&gt;-->
<!--&lt;!&ndash;            队长：{{ team.createUser.planetCode }}-{{ team.createUser.username }}&ndash;&gt;-->
<!--&lt;!&ndash;          </van-tag>&ndash;&gt;-->
<!--        </template>-->
<!--        <template #bottom>-->
<!--          <div>-->
<!--            {{ `队伍人数: ${team.hasJoinNum}/${team.maxNum}` }}-->
<!--          </div>-->
<!--          <div v-if="team.expireTime" >-->
<!--            {{ '过期时间: ' + new Date(team.expireTime).getFullYear() + '-' + (new Date(team.expireTime).getMonth() + 1) + '-' + (new Date(team.expireTime).getDate()) + ' 00:00:00' }}-->
<!--          </div>-->
<!--        </template>-->
<!--        <template #footer>-->
<!--          <van-button size="small" plain @click="doQuitTeam(team.id)">-->
<!--            退出队伍-->
<!--          </van-button>-->
<!--          <van-button plain size="small"-->
<!--                      @click="doTeamDetail(team.id)">查看队伍-->
<!--          </van-button>-->
<!--        </template>-->
<!--      </van-card>-->
<!--    </div>-->
<!--    <van-empty v-if="teamList?.length < 1" description="数据为空"/>-->
<!--  </div>-->
<!--</template>-->

<!--<script setup lang="ts">-->

<!--import {useRouter} from "vue-router";-->
<!--import {onMounted, ref} from "vue";-->
<!--import myAxios from "../plugins/myAxios";-->
<!--import {showFailToast, showSuccessToast} from "vant";-->
<!--import touxiang from  "../assets/touxiang.jpg"-->

<!--import {teamStatusEnum} from "../constants/team";-->


<!--const router = useRouter();-->

<!--const teamList = ref([]);-->

<!--/**-->
<!-- * 搜索队伍-->
<!-- * @param val-->
<!-- * @returns {Promise<void>}-->
<!-- */-->
<!--const listTeam = async (val = '') => {-->
<!--  const res = await myAxios.get("/team/list/my/join", {-->
<!--    params: {-->
<!--      searchText: val,-->
<!--      pageNum: 1,-->
<!--    },-->
<!--  });-->
<!--  if (res?.code === 0) {-->
<!--    teamList.value = res.data;-->
<!--  } else {-->
<!--    showFailToast('加载队伍失败，请刷新重试');-->
<!--  }-->

<!--}-->

<!--/**-->
<!-- * 退出队伍-->
<!-- * @param id-->
<!-- */-->
<!--const doQuitTeam = async (id: number) => {-->
<!--  const res = await myAxios.post('/team/quit', {-->
<!--    teamId: id-->
<!--  });-->
<!--  if (res?.code === 0) {-->
<!--    showSuccessToast('操作成功');-->

<!--  } else {-->
<!--    showFailToast('操作失败' + (res.description ? `，${res.description}` : ''));-->
<!--  }-->
<!--}-->
<!--// 页面加载时只触发一次-->
<!--onMounted( () => {-->
<!--  listTeam();-->
<!--})-->

<!--/**-->
<!-- * 跳转至队伍详情页-->
<!-- * @param id-->
<!-- */-->
<!--const doTeamDetail = (id: number) => {-->
<!--  router.push({-->
<!--    path: '/team/detail',-->
<!--    query: {-->
<!--      id,-->
<!--    }-->
<!--  })-->
<!--}-->
<!--</script>-->

<!--<style scoped>-->
<!--#teamPage {-->

<!--}-->
<!--</style>-->

<template>
  <div id="teamPage">
    <van-search v-model="searchText" placeholder="搜索队伍" @search="onSearch" />
    <team-card-list :teamList="teamList" />
    <van-empty v-if="teamList?.length < 1" description="数据为空"/>
  </div>
</template>

<script setup lang="ts">

import {useRouter} from "vue-router";
import TeamCardList from "../components/TeamCardList.vue";
import {onMounted, ref} from "vue";
import myAxios from "../plugins/myAxios";
import {Toast} from "vant";

const router = useRouter();
const searchText = ref('');

const teamList = ref([]);

/**
 * 搜索队伍
 * @param val
 * @returns {Promise<void>}
 */
const listTeam = async (val = '') => {
  const res = await myAxios.get("/team/list/my/join", {
    params: {
      searchText: val,
      pageNum: 1,
    },
  });
  if (res?.code === 0) {
    teamList.value = res.data;
  } else {
    Toast.fail('加载队伍失败，请刷新重试');
  }
}


// 页面加载时只触发一次
onMounted( () => {
  listTeam();
})

const onSearch = (val) => {
  listTeam(val);
};

</script>

<style scoped>

</style>


