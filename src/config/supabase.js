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

// 筛选项服务
export const filterService = {
    // 获取案例检索筛选项
    async getCaseFilterOptions() {
        const supabase = getSupabaseClient();
        if (!supabase) return { data: [], error: { message: 'Supabase client not initialized' } };

        const { data, error } = await supabase
            .from('search_filter_options')
            .select('filter_key, label, value, display_order')
            .eq('category', 'case')
            .eq('is_active', true)
            .order('display_order', { ascending: true });

        return { data, error };
    },

    // 获取法规检索筛选项
    async getRegulationFilterOptions() {
        const supabase = getSupabaseClient();
        if (!supabase) return { data: [], error: { message: 'Supabase client not initialized' } };

        const { data, error } = await supabase
            .from('search_filter_options')
            .select('filter_key, label, value, display_order')
            .eq('category', 'regulation')
            .eq('is_active', true)
            .order('display_order', { ascending: true });

        return { data, error };
    },

    // 按 filter_key 分组获取筛选项
    groupByFilterKey(options) {
        if (!options) return {};
        return options.reduce((acc, item) => {
            if (!acc[item.filter_key]) {
                acc[item.filter_key] = [];
            }
            acc[item.filter_key].push({ label: item.label, value: item.value });
            return acc;
        }, {});
    }
};

// 品牌设置服务
export const brandService = {
    // 缓存品牌设置
    _cache: null,
    _cacheTime: null,
    _cacheDuration: 5 * 60 * 1000, // 5分钟缓存

    // 获取所有品牌设置
    async getBrandSettings() {
        // 检查缓存
        if (this._cache && this._cacheTime && (Date.now() - this._cacheTime < this._cacheDuration)) {
            return { data: this._cache, error: null };
        }

        const supabase = getSupabaseClient();
        if (!supabase) return { data: {}, error: { message: 'Supabase client not initialized' } };

        const { data, error } = await supabase
            .from('brand_settings')
            .select('setting_key, setting_value, setting_type');

        if (!error && data) {
            // 转换为键值对象
            this._cache = data.reduce((acc, item) => {
                acc[item.setting_key] = item.setting_value;
                return acc;
            }, {});
            this._cacheTime = Date.now();
        }

        return { data: this._cache || {}, error };
    },

    // 获取单个设置
    async getSetting(key, defaultValue = '') {
        const { data } = await this.getBrandSettings();
        return data[key] || defaultValue;
    },

    // 清除缓存
    clearCache() {
        this._cache = null;
        this._cacheTime = null;
    }
};

export default {
    getSupabaseClient,
    authService,
    filterService,
    brandService
};
