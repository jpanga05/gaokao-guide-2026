/**
 * 高考志愿填报指南 — 全局配置文件
 *
 * 修改图片：把新图片放入对应文件夹，修改下方 src 路径，推送到 GitHub 即可更新。
 */
window.SITE_CONFIG = {

    // ===== 轮播图设置 =====
    carouselInterval: 5000,       // 自动切换间隔（毫秒）
    carouselAspect: '16/6',     // 轮播宽高比，可选 '16/5' '16/6' '16/7'

    // ===== 倒计时（Hero 区显示，可增减条目） =====
    // date 格式: 'YYYY-MM-DD'
    countdowns: [
        { label: '距高考', date: '2026-06-07' },
        { label: '志愿填报', date: '2026-07-01' }
    ],

    // ===== 顶部公告滚动栏 =====
    // 以下内容会在页面顶部滚动播放，可自由修改增删
    announcements: [
        // —— 制造焦虑·引发共鸣 ——
        '⚠️ 一毕业即失业？选对专业才是破局关键！',
        '🏭 毕业即进厂？填错志愿的代价，可能是四年青春',
        '� 传媒真的是坑吗？数据告诉你真相，别被网络劝退',
        '🏠 如何找到离家近、月薪过万的好工作？志愿填报是第一步',
        '🏗️ 土木工程还能报吗？真实就业数据，带你看清行业走势',
        '💰 学了金融真能赚大钱？听过来人说说真实的行业生态',
        '🎓 同是985毕业，为什么有人月薪3000有人月薪30000？',
        '🏙️ 选城市还是选学校？这道题，80%的考生都做错了',
        '📉 冷门专业真的没出路吗？有些冷门专业年薪超热门',
        '⏳ 选错专业，毕业后你要多走多少年弯路？',
        '� 生化环材四大天坑，你真的了解吗？填报前必看',
        '🤔 普通家庭的孩子，该怎么选专业才能少走弯路？',
        // —— 展示实力·建立信任 ——
        '✅ 专业十年 · 精准志愿规划 · 录取率显著提升',
        '🏆 累计服务考生超 50,000 人，帮助数万名学子圆梦名校',
        '� 全国 2800+ 院校、500+ 专业实时数据分析',
        '💡 深耕新高考改革，赋分制·选科搭配·院校组合全解析',
        '⭐ 十年积累，万例成功案例，选我们就是选择稳妥',
        '🎯 一对一定制规划，从分数定位到录取通知书，全程陪伴',
        '📞 免费咨询通道已开放，现在预约享专家一对一解读服务',
        // —— 更多焦虑·共鸣句 ——
        '🎯 报错志愿等于白读四年高中？别让分数白白浪费',
        '👩 女生适合学什么？这些专业越来越吃香，就业率超90%',
        '👨 男生学护理真的可以吗？就业数据让你大吃一惊',
        '🤖 人工智能专业值得报吗？还是被过度炒作？真实解读',
        '🏛️ 公务员、事业单位专业限制大揭秘，哪些专业直通铁饭碗',
        '🌆 去一线城市读书 vs 留在省内，到底哪个更值？',
        '😰 调剂到了不喜欢的专业，四年后你会后悔吗？',
        '📉 滑档是什么感觉？我们帮你把滑档风险降到最低',
        '💯 高考620分该报什么学校？这个分数浪费了太可惜',
        '🚀 为什么别人能冲985，你却只能守住211？差距在哪',
        '🔥 新高考选科有多重要？选错科目直接少掉100所大学',
        '💼 毕业五年后，月薪差距最大的专业TOP10',
        '🏆 哪些城市的高校毕业后留下来最容易？数据说话',
        '📱 互联网已饱和？程序员真的不香了？2026就业真相',
        '🌍 出国留学 vs 国内名校，哪个性价比更高？'
    ],

    // ===== 快捷入口卡片（10 项，2 行 × 5 列） =====
    quickLinks: [
        { emoji: '📊', title: '成绩查询', desc: '高考成绩官方查询入口', url: 'https://gaokao.chsi.com.cn/z/gkbmfslq/cjcx.jsp' },
        { emoji: '🌟', title: '阳光志愿', desc: '智能志愿填报参考系统', url: 'https://gaokao.chsi.com.cn/zyck/' },
        { emoji: '📜', title: '招生章程', desc: '各高校招生章程查询', url: 'https://gaokao.chsi.com.cn/zsgs/zhangcheng/listVerifedZszc--method-index,lb-1.dhtml' },
        { emoji: '🏫', title: '院校评测', desc: '院校综合实力评估排名', url: 'https://gaokao.chsi.com.cn/zyk/pub/myd/schAppraisalTop.action' },
        { emoji: '📚', title: '专业评测', desc: '专业匹配度测评参考', url: 'https://gaokao.chsi.com.cn/zyk/pub/myd/specAppraisalTop.action' },
        { emoji: '🏆', title: '专业排行', desc: '热门专业就业排行榜', url: 'https://gaokao.chsi.com.cn/zyk/pub/zytj/recommendTop.action' },
        { emoji: '🚀', title: '职业前景', desc: '各专业职业发展前景', url: 'https://gaokao.chsi.com.cn/zyck/zyqj/zyqx' },
        { emoji: '💡', title: '最关心问题', desc: '2026高考热点答疑', url: 'https://gaokao.chsi.com.cn/gkxx/zt/2026gkzx.shtml' },
        { emoji: '🔔', title: '招生动态', desc: '全国高校最新招生资讯', url: 'https://gaokao.chsi.com.cn/z/gkbmfslq/index.jsp' },
        { emoji: '🧠', title: '心理测评', desc: '职业倾向心理测评', url: 'https://gaokao.chsi.com.cn/zyck/zycp' }
    ],

    // ===== 顶部轮播大图 =====
    // src  : 图片路径（放入 images/carousel/ 后填写文件名）
    // alt  : 图片无法加载时的占位文字
    // link : 点击跳转链接（不需要留空 ''）
    carousel: [
        { src: 'https://images.unsplash.com/photo-1580582396531-1d2b0b6e3f30?auto=format&fit=crop&w=1200&h=420&q=80', alt: '高考备考冲刺', link: '', color: 'linear-gradient(135deg,#fce4ec,#f8bbd0)' },
        { src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&h=420&q=80', alt: '名校风采', link: '', color: 'linear-gradient(135deg,#e8eaf6,#c5cae9)' },
        { src: 'https://images.unsplash.com/photo-1541339907198-b03bca21e6ee?auto=format&fit=crop&w=1200&h=420&q=80', alt: '圆梦大学', link: '', color: 'linear-gradient(135deg,#e0f7fa,#b2ebf2)' }
    ],

    // ===== 下方广告图网格（建议 4 张，16:9 比例最佳） =====
    // title : 图片下方标题（留空则不显示标题栏）
    // link  : 点击跳转链接（不需要留空 ''）
    ads: [
        { src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=600&h=450&q=80', title: '一对一志愿规划', link: '', color: 'linear-gradient(135deg,#ede9ff,#ddd6fe)' },
        { src: 'https://images.unsplash.com/photo-1434030216411-0b793f4b6f73?auto=format&fit=crop&w=600&h=450&q=80', title: '2800+ 院校数据库', link: '', color: 'linear-gradient(135deg,#d1faf3,#a7f3d0)' },
        { src: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=600&h=450&q=80', title: '专业匹配测评', link: '', color: 'linear-gradient(135deg,#fff3e0,#fed7aa)' },
        { src: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=600&h=450&q=80', title: '免费咨询开放中', link: '', color: 'linear-gradient(135deg,#dbeeff,#bfdbfe)' }
    ],

    // ===== 省份快捷按钮 =====
    // url : 留空则默认跳转阳光高考主页，可替换为各省招办官网
    provinces: [
        { name: '北京', url: '' }, { name: '天津', url: '' }, { name: '上海', url: '' }, { name: '重庆', url: '' },
        { name: '河北', url: '' }, { name: '山西', url: '' }, { name: '辽宁', url: '' }, { name: '吉林', url: '' },
        { name: '黑龙江', url: '' }, { name: '江苏', url: '' }, { name: '浙江', url: '' }, { name: '安徽', url: '' },
        { name: '福建', url: '' }, { name: '江西', url: '' }, { name: '山东', url: '' }, { name: '河南', url: '' },
        { name: '湖北', url: '' }, { name: '湖南', url: '' }, { name: '广东', url: '' }, { name: '广西', url: '' },
        { name: '海南', url: '' }, { name: '四川', url: '' }, { name: '贵州', url: '' }, { name: '云南', url: '' },
        { name: '西藏', url: '' }, { name: '陕西', url: '' }, { name: '甘肃', url: '' }, { name: '青海', url: '' },
        { name: '宁夏', url: '' }, { name: '新疆', url: '' }, { name: '内蒙古', url: '' }
    ],

    // ===== 右下角悬浮咨询按钮 =====
    // show : true 显示 / false 隐藏
    // url  : 点击跳转的链接（企业微信加好友页面等）
    // text : 按钮下方文字
    floatBtn: {
        show: true,
        url: '',          // ← 在此填入企业微信加好友页面链接
        text: '立即咨询'
    },

    // ===== 管理员账号（修改后推送一次即可，之后不需再碰 GitHub） =====
    admin: {
        user: 'admin',
        pass: 'gaokao2026'
    },

    // ===== 云存储配置（让所有用户实时看到管理员更改的内容） =====
    // 1. jsonbinKey       : jsonbin.io → Account → API Keys → Master Key
    // 2. jsonbinId        : jsonbin.io 创建 Bin 后 URL 末尾那段 ID
    // 3. cloudinaryName   : cloudinary.com 注册后 Dashboard 显示的 Cloud Name
    // 4. cloudinaryPreset : Cloudinary → Settings → Upload → Upload presets → 新建 Unsigned 预设名
    cloudStorage: {
        jsonbinKey: '',
        jsonbinId: '',
        cloudinaryName: '',
        cloudinaryPreset: ''
    }
};
