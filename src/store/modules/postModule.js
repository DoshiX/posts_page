import axios from 'axios';

export const postModule = ({
    namespaced: true,
    state: () => {
        return {
            posts: [],
            loading: false,
            users: [],
            searchAuthor: '',
            search: false,
            page: 1,
            limitPosts: 10,
            totalPostsNumber: 0,
        }
    },
    getters: {
        getTotalPostNumber(state, getters) {
            const { allPostsLength } = getters.filteredList;

            return allPostsLength;
        },
        getTotalPageNumber(state, getters) {
            const totalPostNumber = getters.getTotalPostNumber;
            return totalPostNumber/state.limitPosts;
        },
        filteredList(state, getters) {
            const firstPostIndex = state.page === 1 ? 0 : Number((state.page - 1) * state.limitPosts);
            let limitPostsArr = [];
            let postsLength = 0;

            if (!state.posts.length) {
                return [];
            }

            postsLength = state.posts.length;
            for (let i = firstPostIndex; i < (state.limitPosts * state.page); i++) {
                limitPostsArr.push(state.posts[i]);
            };

            if (state.searchAuthor) {
                let reg = new RegExp(`${state.searchAuthor}.|${state.searchAuthor}`, 'gmi');

                const finded = state.posts.filter(post => {
                    let autor = post.author;
                        return !autor.search(reg);
                });

                if (finded.length) {
                    postsLength = finded.length;
                    
                    limitPostsArr = [];
                    
                    for (let i = firstPostIndex; i < (state.limitPosts * state.page); i++) {
                        limitPostsArr.push(finded[i]);
                    };
                };
                
            };

            return { filteredList: limitPostsArr, allPostsLength: postsLength }
        }
    },
    mutations: {
        setPosts(state, posts) {
            state.posts = posts;
        },
        setLoading(state, bool) {
            state.loading = bool;
        },
        setUsers(state, users) {
            state.users = users;
        },
        setPage(state, page) {
            state.page = page;
        },
        setSearchStatus(state, status) {
            state.search = status
        },
        setSearchValue(state, value) {
            state.searchAuthor = value;
        }
    },
    actions: {
        async fetchData({state, commit, dispatch}) {
            await dispatch('fetchPostsContent');
            await dispatch('fetchUsers');
        },

        async fetchPostsContent({ state, commit}) {
            try {
                commit('setLoading', true);
                const postsResponse = await axios.get("https://jsonplaceholder.typicode.com/posts");

                commit('setPosts', postsResponse.data);
            } catch(e) {
                console.log(e);
            } finally {
                commit('setLoading', false);
            }
        },

        async fetchUsers({ state, commit }) {
            try {
                const usersResponse = await axios.get("https://jsonplaceholder.typicode.com/users");
                state.users.push(...usersResponse.data);
                const setAuthor = state.posts.map(post => ({
                    ...post,
                    author: state.users.find(user => user.id === post.userId).name ?? {},
                }));
                commit('setUsers', state.users);
                commit('setPosts', setAuthor);
                
            } catch(e) {
                console.log(e);
            }
        }
    },
});
