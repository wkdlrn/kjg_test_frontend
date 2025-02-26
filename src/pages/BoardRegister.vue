<script setup>
import { ref } from 'vue'
import { useBoardStore } from '@/stores/useBoardStore';
import { useRouter } from 'vue-router';

const boardStore = useBoardStore();
const router = useRouter();

const title = ref("");
const content = ref("");
const writer = ref("");

const submitPost = async () => {
    if (!title.value || !content.value || !writer.value) {
        alert("모든 필드를 입력해주세요.");
        return;
    }

    try {
        await boardStore.registerBoard({
            title: title.value,
            content: content.value,
            writer: writer.value
        });

        alert("게시글이 등록되었습니다.");
        router.push("/"); // 게시글 목록으로 이동
    } catch (error) {
        console.error("게시글 등록 중 오류 발생:", error);
        alert("게시글 등록 실패");
    }
};
</script>

<template>
    <div>
        <h2>게시글 작성</h2>
        <form @submit.prevent="submitPost">
            <label>제목</label>
            <input v-model="title" type="text" required />

            <label>내용</label>
            <textarea v-model="content" required></textarea>

            <label>작성자</label>
            <input v-model="writer" type="text" required />

            <button type="submit">등록</button>
        </form>
    </div>
</template>

<style scoped>
form {
    display: flex;
    flex-direction: column;
    gap: 10px;
}
input, textarea {
    width: 100%;
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
}
button {
    background-color: #28a745;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
button:hover {
    background-color: #218838;
}
</style>
