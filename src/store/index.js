import { createStore } from 'vuex';
import { postModule } from '@/store/modules/postModule';

export default createStore({
    modules: {
        posts: postModule
    }
})