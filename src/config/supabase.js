// Supabase 配置
const SUPABASE_URL = 'https://elykhwxnwtgsciivewoj.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_1U-aKMEefnRwmK01mDss-Q_ISAA_u3a';

// 创建 Supabase 客户端
// 注意：需要在 HTML 中引入 Supabase JS 库
// <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>

let supabaseClient = null;

export function getSupabaseClient() {
    if (!supabaseClient) {
        // 检查 Supabase 库是否加载
        if (typeof window.supabase === 'undefined') {
            console.error('❌ Supabase library not loaded. Please check network connection.');
            return null;
        }

        try {
            supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
            console.log('✅ Supabase client initialized');
        } catch (error) {
            console.error('❌ Failed to create Supabase client:', error);
            return null;
        }
    }
    return supabaseClient;
}

// 用户认证相关函数
export const authService = {
    // 注册新用户
    async signUp(email, password, metadata = {}) {
        const supabase = getSupabaseClient();
        if (!supabase) return { error: { message: 'Supabase client not initialized' } };

        const { data, error } = await supabase.auth.signUp({
            email,
            password,
            options: {
                data: metadata
            }
        });
        return { data, error };
    },

    // 登录
    async signIn(email, password) {
        const supabase = getSupabaseClient();
        if (!supabase) return { error: { message: 'Supabase client not initialized' } };

        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password
        });
        return { data, error };
    },

    // 登出
    async signOut() {
        const supabase = getSupabaseClient();
        if (!supabase) return { error: { message: 'Supabase client not initialized' } };

        const { error } = await supabase.auth.signOut();
        return { error };
    },

    // 获取当前用户
    async getCurrentUser() {
        const supabase = getSupabaseClient();
        if (!supabase) return { data: { user: null } };

        const { data: { user } } = await supabase.auth.getUser();
        return { data: { user } };
    },

    // 获取当前会话
    async getSession() {
        const supabase = getSupabaseClient();
        if (!supabase) return { data: { session: null } };

        const { data: { session } } = await supabase.auth.getSession();
        return { data: { session } };
    },

    // 监听认证状态变化
    onAuthStateChange(callback) {
        const supabase = getSupabaseClient();
        if (!supabase) return { data: { subscription: null } };

        const { data: { subscription } } = supabase.auth.onAuthStateChange(callback);
        return subscription;
    },

    // 重置密码
    async resetPassword(email) {
        const supabase = getSupabaseClient();
        if (!supabase) return { error: { message: 'Supabase client not initialized' } };

        const { data, error } = await supabase.auth.resetPasswordForEmail(email);
        return { data, error };
    },

    // 更新用户信息
    async updateUser(updates) {
        const supabase = getSupabaseClient();
        if (!supabase) return { error: { message: 'Supabase client not initialized' } };

        const { data, error } = await supabase.auth.updateUser(updates);
        return { data, error };
    }
};

export default {
    getSupabaseClient,
    authService
};
