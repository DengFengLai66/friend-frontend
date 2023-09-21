<!--<template>-->
<!--  <form action="/">-->
<!--    <van-search-->
<!--        v-model="searchText"-->
<!--        show-action-->
<!--        placeholder="请输入搜索标签"-->
<!--        @search="onSearch"-->
<!--        @cancel="onCancel"-->
<!--    />-->
<!--  </form>-->
<!--  <van-divider content-position="left">已选标签</van-divider>-->
<!--  <div v-if="activeIds.length === 0 ">请选择标签</div>-->
<!--  <van-row gutter="16" style="padding: 0 16px">-->
<!--    <van-col v-for="tag in activeIds">-->
<!--      <van-tag closeable size="small" type="primary" @close="doClose(tag)">-->
<!--        {{ tag }}-->
<!--      </van-tag>-->
<!--    </van-col>-->
<!--  </van-row>-->
<!--  <van-divider content-position="left">选择标签</van-divider>-->
<!--  <van-tree-select-->
<!--      v-model:active-id="activeIds"-->
<!--      v-model:main-active-index="activeIndex"-->
<!--      :items="tagList"-->
<!--  />-->
<!--  <div style="padding: 12px">-->
<!--    <van-button block type="primary" @click="doSearchResult">搜索</van-button>-->
<!--  </div>-->

<!--</template>-->

<!--<script setup>-->
<!--import {ref} from 'vue';-->
<!--import {useRouter} from "vue-router";-->

<!--const router = useRouter();-->

<!--const searchText = ref('');-->

<!--const originTagList = [{-->
<!--  text: '性别',-->
<!--  children: [-->
<!--    {text: '男', id: '男'},-->
<!--    {text: '女', id: '女'},-->
<!--  ],-->
<!--},-->
<!--  {-->
<!--    text: '年级',-->
<!--    children: [-->
<!--      {text: '大一', id: '大一'},-->
<!--      {text: '大二', id: '大二'},-->
<!--      {text: '大3', id: '大3'},-->
<!--      {text: '大4', id: '大4'},-->
<!--      {text: '大5', id: '大5aaaaaaa'},-->
<!--      {text: '大6', id: '大6aaaaaaa'},-->
<!--    ],-->
<!--  },-->
<!--]-->

<!--//标签列表-->
<!--let tagList = ref(originTagList);-->

<!--/**-->
<!-- * 搜索过滤-->
<!-- * @param val-->
<!-- */-->
<!--const onSearch = (val) => {-->
<!--  tagList.value = originTagList.map(parentTag => {-->
<!--    const tempChildren = [...parentTag.children];-->
<!--    const tempParentTag = {...parentTag};-->
<!--    tempParentTag.children = tempChildren.filter(item => item.text.includes(searchText.value));-->
<!--    return tempParentTag;-->
<!--  });-->
<!--}-->

<!--const onCancel = () => {-->
<!--  searchText.value = '';-->
<!--  tagList.value = originTagList;-->
<!--};-->

<!--//已选择的标签-->
<!--const activeIds = ref([]);-->
<!--const activeIndex = ref(0);-->

<!--//移除标签-->
<!--const doClose = (tag) => {-->
<!--  activeIds.value = activeIds.value.filter(item => {-->
<!--    return item != tag;-->
<!--  })-->
<!--}-->

<!--//执行搜索-->
<!--const doSearchResult = () =>{-->
<!--  router.push({-->
<!--    path:'/user/list',-->
<!--    query:{-->
<!--      tags: activeIds.value-->
<!--    }-->
<!--  })-->
<!--}-->
<!--</script>-->

<!--<style scoped>-->

<!--</style>-->

<template>
  <form action="/">
    <van-search
        v-model="searchText"
        placeholder="请输入要搜索的标签"
        show-action
        @cancel="onCancel"
        @search="onSearch"
    />
  </form>
  <van-divider content-position="left">已选标签</van-divider>
  <van-divider v-if="activeIds.length===0" content-position="center">请选择标签</van-divider>
  <van-row gutter="15" style="padding: 0 15px">
    <van-col v-for="tag in activeIds">
      <van-tag closeable size="small" type="primary" @close="doClose(tag)">
        {{ tag }}
      </van-tag>
    </van-col>
  </van-row>

  <van-divider content-position="left">可选择标签</van-divider>
  <van-tree-select
      v-model:active-id="activeIds"
      v-model:main-active-index="activeIndex"
      :items="tagsList"
  />
  <div style="padding: 15px">
    <van-button block type="primary" @click="doSearchResult">搜索</van-button>
  </div>

</template>

<script setup>
import {ref} from 'vue';
import {useRouter} from "vue-router";
import UserTagsList from "../constants/UserTagsList";

const router = useRouter();
const searchText = ref('');
const activeIds = ref([]);
const activeIndex = ref(0);
//原数据
const originTagsList = UserTagsList
const tagsList = ref(originTagsList);
const onSearch = (val) => {
  //为了不改变原数组这里要深拷贝，否则children还是对象应用
  // let filterArr=JSON.parse(JSON.stringify(originTagsList))
  // tagsList.value = filterArr.map(parentTag => {
  //       parentTag.children = parentTag.children
  //           .filter(item => item.text.includes(searchText.value));
  //       return parentTag;
  //     })

  //方法2：
  tagsList.value = originTagsList.map(parentTag => {
    const tempChildren = [...parentTag.children];
    const tempParentTag = {...parentTag};
    tempParentTag.children = tempChildren
        .filter(item => item.text.includes(searchText.value));
    return tempParentTag;
  })
};

const onCancel = () => {
  searchText.value = '';
  tagsList.value = originTagsList;
};

//移除标签
const doClose = (tag) => {
  activeIds.value = activeIds.value.filter(item => {
    return item !== tag;
  })
}

const doSearchResult = () => {
  router.push({
    path: '/user/list',
    query: {
      tags: activeIds.value
    }
  })
}
</script>

<style scoped>

</style>