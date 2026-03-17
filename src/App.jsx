import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Code2, 
  Smartphone, 
  Layers, 
  Globe, 
  Mail,
  Phone,
  MapPin,
  Send,
  Menu,
  X,
  CheckCircle,
  Users,
  Award,
  Headphones,
  ChevronRight,
  Monitor,
  ShoppingCart,
  MessageSquare,
  Database,
  Settings,
  Palette,
  TrendingUp,
  Shield,
  Clock,
  Star,
  ExternalLink,
  MessageCircle,
  ScanBarcode
} from 'lucide-react'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeCaseCategory, setActiveCaseCategory] = useState('all')

  const navItems = [
    { id: 'home', label: '首页' },
    { id: 'services', label: '服务项目' },
    { id: 'pricing', label: '价格方案' },
    { id: 'cases', label: '案例展示' },
    { id: 'functions', label: '功能集合' },
    { id: 'about', label: '关于我们' },
    { id: 'contact', label: '联系我们' },
  ]

  const services = [
    {
      icon: Monitor,
      title: '高端网站建设',
      desc: '企业官网、品牌展示、响应式设计、H5 动态效果',
      color: 'bg-gradient-to-br from-blue-500 to-blue-600'
    },
    {
      icon: ShoppingCart,
      title: '商城开发',
      desc: 'B2C 商城、B2B2C 平台、在线支付、订单管理',
      color: 'bg-gradient-to-br from-blue-600 to-blue-700'
    },
    {
      icon: Smartphone,
      title: '手机网站',
      desc: '移动端适配、H5 页面、微信网站、APP 微官网',
      color: 'bg-gradient-to-br from-blue-700 to-blue-800'
    },
    {
      icon: Layers,
      title: '小程序开发',
      desc: '微信/支付宝/百度多平台小程序、餐饮/零售/教育行业方案',
      color: 'bg-gradient-to-br from-blue-800 to-blue-900'
    },
    {
      icon: Globe,
      title: '微信生态',
      desc: '微信公众号、微信商城、企业微信、SCRM 系统',
      color: 'bg-gradient-to-br from-green-500 to-green-600'
    },
    {
      icon: Database,
      title: '系统定制',
      desc: 'OA 办公、CRM 客户管理、ERP 企业资源规划',
      color: 'bg-gradient-to-br from-purple-500 to-purple-600'
    },
  ]

  const pricingPlans = [
    {
      title: '基础版',
      price: '1580 元',
      desc: '适合初创企业/个人工作室',
      features: [
        '标准模板选择',
        'PC+ 手机 + 微信三站合一',
        '基础 SEO 优化',
        '1 年免费维护',
        '5 个产品页面'
      ],
      popular: false
    },
    {
      title: '标准版',
      price: '2580 元',
      desc: '适合中小型企业',
      features: [
        ' premium 模板任选',
        'PC+ 手机 + 微信 + 小程序四站合一',
        '高级 SEO 优化',
        '2 年免费维护',
        '10 个产品页面',
        '基础数据统计'
      ],
      popular: true
    },
    {
      title: '专业版',
      price: '4980 元',
      desc: '适合成长型企业',
      features: [
        '定制设计服务',
        '六站合一（含 APP 微官网）',
        '商城功能集成',
        '3 年免费维护',
        '不限产品页面',
        '完整数据统计',
        '会员系统'
      ],
      popular: false
    },
    {
      title: '旗舰版',
      price: '8800 元',
      desc: '适合大型企业/品牌商',
      features: [
        '全定制 UI 设计',
        '全平台覆盖',
        'B2B2C 商城系统',
        '5 年免费维护',
        'OA/CRM 系统集成',
        '专属客户经理',
        '营销工具套件',
        '培训服务'
      ],
      popular: false
    },
  ]

  const caseCategories = [
    { id: 'all', label: '全部案例' },
    { id: 'enterprise', label: '企业官网' },
    { id: 'ecommerce', label: '电商平台' },
    { id: 'restaurant', label: '餐饮行业' },
    { id: 'education', label: '教育培训' },
    { id: 'medical', label: '医疗健康' },
    { id: 'retail', label: '零售商贸' },
  ]

  const cases = [
    { 
      title: '某某科技集团官网', 
      category: 'enterprise',
      categoryLabel: '企业官网',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=350&fit=crop',
      desc: '高端企业形象展示，响应式设计'
    },
    { 
      title: 'XX 电商平台', 
      category: 'ecommerce',
      categoryLabel: '电商平台',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=350&fit=crop',
      desc: 'B2C 在线商城，支持多种支付方式'
    },
    { 
      title: '知味餐饮连锁', 
      category: 'restaurant',
      categoryLabel: '餐饮行业',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&h=350&fit=crop',
      desc: '小程序点餐 + 会员系统'
    },
    { 
      title: '启航教育平台', 
      category: 'education',
      categoryLabel: '教育培训',
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=500&h=350&fit=crop',
      desc: '在线课程 + 直播教学系统'
    },
    { 
      title: '仁爱医院官网', 
      category: 'medical',
      categoryLabel: '医疗健康',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=500&h=350&fit=crop',
      desc: '预约挂号 + 在线咨询'
    },
    { 
      title: '优品生活商城', 
      category: 'retail',
      categoryLabel: '零售商贸',
      image: 'https://images.unsplash.com/photo-1472851294608-4155f2118c03?w=500&h=350&fit=crop',
      desc: '新零售解决方案，线上线下融合'
    },
  ]

  const functionCategories = [
    {
      title: '会员管理',
      count: '30+',
      icon: Users,
      color: 'bg-blue-500',
      functions: ['会员等级', '积分系统', '储值卡', '优惠券', '会员营销']
    },
    {
      title: '营销推广',
      count: '50+',
      icon: TrendingUp,
      color: 'bg-green-500',
      functions: ['拼团', '秒杀', '分销', '砍价', '直播带货']
    },
    {
      title: '网站功能',
      count: '120+',
      icon: Settings,
      color: 'bg-purple-500',
      functions: ['页面管理', '文章系统', '产品管理', '表单系统', '搜索优化']
    },
    {
      title: '企业应用',
      count: '68+',
      icon: Database,
      color: 'bg-orange-500',
      functions: ['OA 办公', 'CRM 客户', 'ERP 系统', '进销存', '财务管理']
    },
    {
      title: '微信功能',
      count: '80+',
      icon: MessageCircle,
      color: 'bg-emerald-500',
      functions: ['公众号对接', '小程序', '企业微信', '微信支付', '模板消息']
    },
    {
      title: '设计素材',
      count: '300+',
      icon: Palette,
      color: 'bg-pink-500',
      functions: ['行业模板', '图标库', '图片素材', '配色方案', '字体库']
    },
  ]

  const advantages = [
    { 
      icon: Palette, 
      title: '高端定制设计', 
      desc: '上百个行业模板，设计师精心打磨，看上哪款选哪款！无需找图修图，图标美图等尽在素材库！' 
    },
    { 
      icon: TrendingUp, 
      title: '数据统计分析', 
      desc: '网站栏目分类清晰，便于统计客户访问深度、停留时间，产品或服务的关注度和点击率。' 
    },
    { 
      icon: Shield, 
      title: '完善售后体系', 
      desc: '保证网站稳定正常运行；网站操作简便易用，内部分布合理，符合客户浏览习惯。' 
    },
    { 
      icon: Users, 
      title: '专业团队服务', 
      desc: '平均从业经验 4 年以上，从专业的角度为您服务；技术精湛，服务周到，让您无后顾之忧。' 
    },
  ]

  const filteredCases = activeCaseCategory === 'all' 
    ? cases 
    : cases.filter(c => c.category === activeCaseCategory)

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* 顶部信息栏 */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-600 text-white py-2 text-xs md:text-sm w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span className="whitespace-nowrap font-medium">克昂姆软件 — 专业软件定制开发服务商</span>
            <span className="hidden lg:flex items-center space-x-2 text-blue-100">
              <Clock size={14} />
              <span>服务时间：早 9:00 - 晚 6:00</span>
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <a href="tel:400-029-7075" className="hidden md:flex items-center space-x-1 hover:text-blue-100 transition-colors">
              <Phone size={14} />
              <span className="font-semibold">400-029-7075</span>
            </a>
            <div className="hidden md:flex items-center space-x-3 text-blue-100">
              <a href="#" className="hover:text-white transition-colors">模板演示</a>
              <span>|</span>
              <a href="#" className="hover:text-white transition-colors">在线试用</a>
            </div>
          </div>
        </div>
      </div>

      {/* 导航栏 */}
      <nav className="bg-white shadow-lg sticky top-0 z-50 w-full border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <motion.div 
              className="flex items-center space-x-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                <Code2 className="w-6 h-6 md:w-7 md:h-7 text-white" />
              </div>
              <div>
                <div className="text-xl md:text-2xl font-bold text-blue-600">克昂姆软件</div>
                <div className="text-xs text-gray-500 hidden md:block">KEANGMU SOFTWARE</div>
              </div>
            </motion.div>

            {/* 桌面导航 */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-all font-medium text-sm"
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* CTA 按钮 */}
            <div className="hidden md:flex items-center space-x-3">
              <a 
                href="tel:400-029-7075"
                className="px-5 py-2 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors flex items-center space-x-2"
              >
                <Phone size={16} />
                <span>立即咨询</span>
              </a>
            </div>

            {/* 移动端菜单按钮 */}
            <button 
              className="lg:hidden text-gray-700 p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* 移动端菜单 */}
        {isMenuOpen && (
          <motion.div 
            className="lg:hidden bg-white border-t"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <a 
                href="tel:400-029-7075"
                className="block w-full text-center py-3 mt-4 bg-blue-600 text-white rounded-md font-medium"
              >
                立即咨询：400-029-7075
              </a>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero 区域 */}
      <section id="home" className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-16 md:py-24 w-full relative overflow-hidden">
        {/* 背景装饰 */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur px-4 py-2 rounded-full mb-6">
                <Star className="w-4 h-4 text-yellow-300" fill="currentColor" />
                <span className="text-sm font-medium">15 年专注网站建设 · 服务 5000+ 企业客户</span>
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                六站合一 · 全网营销<br />
                <span className="text-blue-200">网站建设解决方案</span>
              </h1>
              <p className="text-lg md:text-xl mb-8 text-blue-100 leading-relaxed">
                PC 官网 + 手机网站 + 微信网站 + 小程序 + APP 微官网 + 在线商城<br />
                一站式搭建，全渠道获客，让您的业务无处不在
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.button
                  onClick={() => scrollToSection('pricing')}
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  查看价格方案
                </motion.button>
                <motion.button
                  onClick={() => scrollToSection('cases')}
                  className="px-8 py-4 border-2 border-white text-white rounded-lg font-bold text-lg hover:bg-white/10 transition-colors backdrop-blur"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  查看案例展示
                </motion.button>
              </div>
              <div className="mt-8 flex items-center space-x-6 text-blue-100 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>300+ 功能模块</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>300+ 行业模板</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>5 年免费维护</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 md:p-8 shadow-2xl border border-white/20">
                <h3 className="text-xl font-bold mb-6 text-center">全平台覆盖</h3>
                <div className="grid grid-cols-3 gap-3 md:gap-4">
                  <div className="p-4 bg-white/20 rounded-xl text-center hover:bg-white/30 transition-colors">
                    <Monitor className="w-8 h-8 mx-auto mb-2" />
                    <p className="text-xs md:text-sm font-medium">PC 网站</p>
                  </div>
                  <div className="p-4 bg-white/20 rounded-xl text-center hover:bg-white/30 transition-colors">
                    <Smartphone className="w-8 h-8 mx-auto mb-2" />
                    <p className="text-xs md:text-sm font-medium">手机站</p>
                  </div>
                  <div className="p-4 bg-white/20 rounded-xl text-center hover:bg-white/30 transition-colors">
                    <MessageCircle className="w-8 h-8 mx-auto mb-2" />
                    <p className="text-xs md:text-sm font-medium">微信站</p>
                  </div>
                  <div className="p-4 bg-white/20 rounded-xl text-center hover:bg-white/30 transition-colors">
                    <Layers className="w-8 h-8 mx-auto mb-2" />
                    <p className="text-xs md:text-sm font-medium">小程序</p>
                  </div>
                  <div className="p-4 bg-white/20 rounded-xl text-center hover:bg-white/30 transition-colors">
                    <ShoppingCart className="w-8 h-8 mx-auto mb-2" />
                    <p className="text-xs md:text-sm font-medium">商城</p>
                  </div>
                  <div className="p-4 bg-white/20 rounded-xl text-center hover:bg-white/30 transition-colors">
                    <Globe className="w-8 h-8 mx-auto mb-2" />
                    <p className="text-xs md:text-sm font-medium">APP 微官网</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 服务项目 */}
      <section id="services" className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">服务项目</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
              全方位技术服务，满足您的多样化数字化需求
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, shadow2xl: 'shadow-2xl' }}
              >
                <div className={`${service.color} p-6 text-white`}>
                  <service.icon className="w-14 h-14 mx-auto" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
                  <button className="mt-4 text-blue-600 font-medium text-sm flex items-center hover:text-blue-700 transition-colors">
                    了解详情 <ChevronRight size={16} className="ml-1" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 价格方案 */}
      <section id="pricing" className="py-16 md:py-20 bg-white w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">价格方案</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
              透明定价，无隐形消费，选择最适合您的方案
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                className={`relative rounded-2xl overflow-hidden ${
                  plan.popular 
                    ? 'bg-gradient-to-b from-blue-600 to-blue-700 text-white shadow-2xl scale-105 z-10' 
                    : 'bg-white border-2 border-gray-200 text-gray-800'
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-yellow-400 text-gray-800 text-xs font-bold px-3 py-1 rounded-bl-lg">
                    热门推荐
                  </div>
                )}
                <div className="p-6 text-center">
                  <h3 className={`text-lg font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-800'}`}>
                    {plan.title}
                  </h3>
                  <p className={`text-sm mb-4 ${plan.popular ? 'text-blue-100' : 'text-gray-500'}`}>
                    {plan.desc}
                  </p>
                  <div className="mb-6">
                    <span className={`text-4xl font-bold ${plan.popular ? 'text-white' : 'text-blue-600'}`}>
                      {plan.price}
                    </span>
                  </div>
                  <ul className="space-y-3 text-left mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-sm">
                        <CheckCircle className={`w-4 h-4 mt-0.5 flex-shrink-0 ${plan.popular ? 'text-blue-200' : 'text-green-500'}`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <motion.button
                    onClick={() => scrollToSection('contact')}
                    className={`w-full py-3 rounded-lg font-bold transition-colors ${
                      plan.popular
                        ? 'bg-white text-blue-600 hover:bg-blue-50'
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    立即咨询
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 案例展示 */}
      <section id="cases" className="py-16 md:py-20 bg-gray-50 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-8 md:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">案例展示</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base mb-8">
              精选客户案例，用实力说话
            </p>
            
            {/* 分类筛选 */}
            <div className="flex flex-wrap justify-center gap-2 md:gap-3">
              {caseCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCaseCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCaseCategory === cat.id
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-white text-gray-600 hover:bg-blue-50 border border-gray-200'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredCases.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, shadow2xl: 'shadow-2xl' }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full font-medium">
                      {item.categoryLabel}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end">
                    <button className="w-full py-3 bg-white/90 text-gray-800 font-medium text-sm hover:bg-white transition-colors">
                      查看详情 <ExternalLink size={14} className="inline ml-1" />
                    </button>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <motion.button 
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-bold text-lg hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              查看更多案例
            </motion.button>
          </div>
        </div>
      </section>

      {/* 功能集合 */}
      <section id="functions" className="py-16 md:py-20 bg-gradient-to-br from-blue-700 to-blue-900 text-white w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-4xl font-bold mb-4">功能集合</h2>
            <div className="w-20 h-1 bg-white/50 mx-auto mb-4"></div>
            <p className="text-blue-100 max-w-2xl mx-auto text-sm md:text-base">
              300+ 功能模块，满足各类业务需求
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {functionCategories.map((category, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ backgroundColor: 'rgba(255,255,255,0.2)' }}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`w-14 h-14 ${category.color} rounded-xl flex items-center justify-center`}>
                    <category.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{category.title}</h3>
                    <p className="text-blue-200 text-sm">{category.count} 功能</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.functions.map((func, idx) => (
                    <span 
                      key={idx}
                      className="bg-white/20 backdrop-blur px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {func}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 产品优势 */}
      <section id="advantages" className="py-16 md:py-20 bg-white w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">产品优势</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
              专业、高效、可靠，为您提供最佳解决方案
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {advantages.map((item, index) => (
              <motion.div
                key={index}
                className="text-center p-6 rounded-xl hover:bg-gray-50 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <item.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 关于我们 */}
      <section id="about" className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-6">关于我们</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mb-8"></div>
              <p className="text-gray-600 leading-relaxed mb-6 text-base md:text-lg">
                <span className="font-bold text-blue-600">克昂姆软件</span>是一家专注"高端网站建设、微信等移动互联产品、软件定制开发"的专业型网络公司。
              </p>
              <p className="text-gray-600 leading-relaxed mb-6 text-base md:text-lg">
                从创立至今，我们始终坚持"技术为本、服务至上"的理念，用专业的技术和优质的服务，为众多企业打造了精美的数字化形象。
              </p>
              <p className="text-gray-600 leading-relaxed mb-8 text-base md:text-lg">
                从梦想到现实，克昂姆用"顶尖技术 + 优质服务"开拓不一样的自我，用全心全意诠释拼搏终将有回报。
              </p>
              
              {/* 数据统计 */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">15+</div>
                  <div className="text-gray-500 text-sm">年行业经验</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">5000+</div>
                  <div className="text-gray-500 text-sm">服务客户</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">300+</div>
                  <div className="text-gray-500 text-sm">功能模块</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-8 md:p-10 rounded-2xl shadow-2xl"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-8">联系方式</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-blue-200 text-sm mb-1">全国免费电话</p>
                    <a href="tel:400-029-7075" className="text-2xl font-bold hover:text-blue-100 transition-colors">
                      400-029-7075
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-blue-200 text-sm mb-1">邮箱地址</p>
                    <a href="mailto:xuhaibo@cnniuer.com" className="text-base hover:text-blue-100 transition-colors">
                      xuhaibo@cnniuer.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-blue-200 text-sm mb-1">公司地址</p>
                    <p className="text-base">陕西省西安市高新区科技路 XX 号</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-blue-200 text-sm mb-1">服务时间</p>
                    <p className="text-base">周一至周六 9:00 - 18:00</p>
                  </div>
                </div>
              </div>
              
              {/* 二维码 */}
              <div className="mt-8 pt-8 border-t border-white/20">
                <div className="flex items-center space-x-4">
                  <div className="w-24 h-24 bg-white rounded-lg flex items-center justify-center">
                    <ScanBarcode className="w-16 h-16 text-gray-800" />
                  </div>
                  <div>
                    <p className="font-bold mb-1">微信咨询</p>
                    <p className="text-blue-200 text-sm">扫描二维码<br />添加官方微信</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 联系我们表单 */}
      <section id="contact" className="py-16 md:py-20 bg-gray-50 w-full">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">在线咨询</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto mb-4"></div>
            <p className="text-gray-600 text-sm md:text-base">
              留下您的联系方式，我们将在 1 小时内与您联系
            </p>
          </motion.div>

          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <span className="text-red-500 mr-1">*</span> 姓名
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                    placeholder="您的姓名"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <span className="text-red-500 mr-1">*</span> 联系方式
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                    placeholder="电话/微信"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">公司名称</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                  placeholder="您的公司名称（选填）"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <span className="text-red-500 mr-1">*</span> 项目需求
                </label>
                <textarea 
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all resize-none"
                  placeholder="请描述您的项目需求，例如：需要建设企业官网，包含产品展示、新闻中心等功能..."
                />
              </div>
              <motion.button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-bold text-lg hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg flex items-center justify-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send className="mr-2" size={20} />
                提交需求，免费获取方案
              </motion.button>
              <p className="text-center text-gray-500 text-sm">
                我们承诺对您的信息严格保密
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 md:py-16 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                  <Code2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-xl font-bold text-white">克昂姆软件</div>
                  <div className="text-xs text-gray-500">KEANGMU SOFTWARE</div>
                </div>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed mb-6">
                专业软件定制开发服务商，为您提供全方位的数字化解决方案。
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <MessageCircle size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <MessageSquare size={20} />
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-6">服务项目</h3>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-blue-400 transition-colors flex items-center"><ChevronRight size={14} className="mr-2" />高端网站建设</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors flex items-center"><ChevronRight size={14} className="mr-2" />商城开发</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors flex items-center"><ChevronRight size={14} className="mr-2" />小程序开发</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors flex items-center"><ChevronRight size={14} className="mr-2" />App 开发</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors flex items-center"><ChevronRight size={14} className="mr-2" />微信生态</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors flex items-center"><ChevronRight size={14} className="mr-2" />系统定制</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-6">快速链接</h3>
              <ul className="space-y-3 text-sm">
                <li><button onClick={() => scrollToSection('about')} className="hover:text-blue-400 transition-colors flex items-center"><ChevronRight size={14} className="mr-2" />关于我们</button></li>
                <li><button onClick={() => scrollToSection('cases')} className="hover:text-blue-400 transition-colors flex items-center"><ChevronRight size={14} className="mr-2" />案例展示</button></li>
                <li><button onClick={() => scrollToSection('pricing')} className="hover:text-blue-400 transition-colors flex items-center"><ChevronRight size={14} className="mr-2" />价格方案</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="hover:text-blue-400 transition-colors flex items-center"><ChevronRight size={14} className="mr-2" />联系我们</button></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors flex items-center"><ChevronRight size={14} className="mr-2" />模板演示</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors flex items-center"><ChevronRight size={14} className="mr-2" />在线试用</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-6">联系方式</h3>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start">
                  <Phone className="w-5 h-5 text-blue-500 mr-3 mt-0.5" />
                  <div>
                    <div className="text-gray-400 mb-1">全国免费电话</div>
                    <a href="tel:400-029-7075" className="text-white font-bold hover:text-blue-400 transition-colors">
                      400-029-7075
                    </a>
                  </div>
                </li>
                <li className="flex items-start">
                  <Mail className="w-5 h-5 text-blue-500 mr-3 mt-0.5" />
                  <div>
                    <div className="text-gray-400 mb-1">邮箱</div>
                    <a href="mailto:xuhaibo@cnniuer.com" className="hover:text-blue-400 transition-colors">
                      xuhaibo@cnniuer.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start">
                  <Clock className="w-5 h-5 text-blue-500 mr-3 mt-0.5" />
                  <div>
                    <div className="text-gray-400 mb-1">服务时间</div>
                    <div>周一至周六 9:00 - 18:00</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
            <p className="mb-2">© 2026 克昂姆软件。All rights reserved.</p>
            <p>陕 ICP 备 XXXXXXXX 号 | 技术支持：克昂姆软件</p>
          </div>
        </div>
      </footer>

      {/* 浮动客服按钮 */}
      <div className="fixed right-4 bottom-6 z-40 space-y-3">
        <motion.a
          href="tel:400-029-7075"
          className="block w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-full flex items-center justify-center shadow-2xl hover:shadow-3xl transition-shadow"
          whileHover={{ scale: 1.1 }}
          title="电话咨询"
        >
          <Phone size={24} />
        </motion.a>
        <motion.div
          className="relative group"
          whileHover={{ scale: 1.1 }}
        >
          <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-full flex items-center justify-center shadow-2xl cursor-pointer">
            <MessageCircle size={24} />
          </div>
          {/* 二维码弹窗 */}
          <div className="absolute right-full top-0 mr-3 bg-white p-3 rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 w-32">
            <ScanBarcode className="w-24 h-24 text-gray-800" />
            <p className="text-xs text-center text-gray-600 mt-2">微信扫码咨询</p>
          </div>
        </motion.div>
        <motion.button
          onClick={() => scrollToSection('contact')}
          className="block w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-full flex items-center justify-center shadow-2xl hover:shadow-3xl transition-shadow"
          whileHover={{ scale: 1.1 }}
          title="在线留言"
        >
          <MessageSquare size={24} />
        </motion.button>
      </div>
    </div>
  )
}

export default App
