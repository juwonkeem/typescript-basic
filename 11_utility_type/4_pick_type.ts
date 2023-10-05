/**
 * Pick Type
 */
interface Post {
    title: string;
    content: string;
    createdAt: Date;
}
                        // Pick 으로 입력하고 싶은 값만 골라서 createdAt: new Date() 따로 선언 안할 수 있음
function createPost(post: Pick<Post, 'title' | 'content'>): Post {
    return {
        ...post,
        createdAt: new Date(),
    };
}

createPost({
    title: '요즘 개발자 취업 어떤가요?',
    content: '나이 30 넘어서도 해볼만한가요?',
});