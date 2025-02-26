<script setup>
import { onMounted, ref } from 'vue'
import { useBoardStore } from '@/stores/useBoardStore';

const boardStore = useBoardStore();
const boardList = ref([]);


const getBoardList = async () => {
    try {
        const response = await boardStore.getBoardList();

        if (Array.isArray(response)) {
            boardList.value = response;
        }
    } catch (error) {
        console.error("API 요청 중 오류 발생:", error);
    }
};

onMounted(() => {
    getBoardList();
});
</script>

<template>
    <div>
        <h2>게시판</h2>
        <p v-if="boardList.length === 0">불러오는 중...</p>

        <div v-else>
            <div v-for="board in boardList" :key="board.idx" class="boards">
                <div>{{ board.idx }}</div>
                <div>{{ board.title }}</div>
                <div>{{ board.content }}</div>
                <div>{{ board.writer }}</div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.boards {
    border: 1px solid #ddd;
    padding: 10px;
    margin-bottom: 10px;
}
</style>
