/**
 * 本地存储
 */
export const setStore = (name,content) => {
    if(!name) return;
    if(typeof content !== 'string') {
        content = JSON.stringify(content);
    }
    window.localStorage.setItem(name,content);
}

/**
 * 批量挂载组件
 */
export function UseComponents(Vue,...args) {
    args.forEach((item) => {
        Vue.use(item);
    });
}
