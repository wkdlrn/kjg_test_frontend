<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useBoardStore } from '@/stores/useBoardStore';

const route = useRoute();
const boardStore = useBoardStore();
const boardDetail = ref(null);
const isLoading = ref(true);

const getBoardDetail = async () => {
    try {
        console.log("Fetching board details for idx:", route.params.idx);
        const response = await boardStore.getBoardDetail(route.params.idx);
        console.log("Response from API:", response);

        // 응답이 객체인지 확인하고 boardDetail.value에 할당??
        if (response && typeof response === 'object') {
            boardDetail.value = response;
            console.log("Updated boardDetail:", boardDetail.value);
        } else {
            console.error("Invalid response data format:", response);
        }
    } catch (error) {
        console.error("게시글 조회 중 오류 발생:", error);
    } finally {
        isLoading.value = false;
    }
};

onMounted(() => {
    getBoardDetail();
});
</script>



<template>
  <div>
      <h2>게시글 상세</h2>
      <p v-if="isLoading">불러오는 중...</p>
      <div v-else-if="boardDetail">
          <h3>{{ boardDetail.title }}</h3>
          <p>작성자: {{ boardDetail.writer }}</p>
          <p>{{ boardDetail.content }}</p>

          <h4>댓글 ({{ boardDetail.comments?.length || 0 }})</h4>
          <ul v-if="boardDetail.comments?.length > 0">
              <li v-for="comment in boardDetail.comments" :key="comment.idx">
                  <p>{{ comment.writer }}: {{ comment.content }}</p>
              </li>
          </ul>
          <p v-else>댓글이 없습니다.</p>
      </div>
      <p v-else>게시글을 찾을 수 없습니다.</p>
  </div>
</template>


<style scoped>
h3 {
    margin-bottom: 10px;
}
ul {
    padding-left: 15px;
}
li {
    margin-bottom: 5px;
    list-style: none;
}
</style>
