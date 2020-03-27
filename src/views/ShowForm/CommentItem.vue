<template>
    <div class="comment-item">
        <div>熊猫 <span>2020.03.12</span></div>
        <div>这位同学的经历非常棒！！！这位同学的经历非常棒！！！这位同学的经历非常棒！！！这位同学的经历非常棒！！！这位同学的经历非常棒！！！这位同学的经历非常棒！！！</div>
    </div>
</template>

<script>
export default {
    name: 'CommentItem'
}
</script>

<style>
.comment-list .comment-item {
    width: 80%;
    border: 1px solid #d0d9dd;
    border-radius: .3rem;
    font-size: 1.1rem;
    margin-bottom: 30px;
}

.comment-list>div:last-child {
    margin-bottom: 130px;
}

.comment-list .comment-item>div {
    padding: 10px;
}

.comment-list .comment-item>div:nth-child(1) {
    color: #666672;
    border-bottom: 1px solid #d0d9dd;
}

.comment-list .comment-item>div:nth-child(2) {
    color: #575656;
}
</style>