import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { 
  Code2, 
  Smartphone, 
  Layers, 
  Globe, 
  ChevronDown,
  Mail,
  Phone,
  MapPin,
  Send,
  Menu,
  X,
  ArrowRight,
  CheckCircle2,
  Zap,
  Shield,
  Headphones
} from 'lucide-react'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8])

  const navItems = [
    { id: 'home', label: '首页' },
    { id: 'about', label: '关于' },
    { id: 'services', label: '服务' },
    { id: 'cases', label: '案例' },
    { id: 'contact', label: '联系' },
  ]

  const services = [
    {
      icon: Code2,
      title: '软件定制开发',
      desc: '根据您的需求量身打造专属软件解决方案，从需求分析到上线部署全程护航',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Smartphone,
      title: 'App 开发',
      desc: 'iOS 与 Android 原生及跨平台开发，打造流畅的用户体验，助力业务增长',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Layers,
      title: '小程序开发',
      desc: '微信、支付宝等多平台小程序开发，轻量便捷，快速触达海量用户',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Globe,
      title: '网站建设',
      desc: '企业官网、电商平台、响应式设计，打造专业在线形象',
      color: 'from-green-500 to-teal-500'
    },
  ]

  const features = [
    { icon: Zap, title: '高效交付', desc: '敏捷开发，快速迭代' },
    { icon: Shield, title: '品质保障', desc: '严格测试，稳定可靠' },
    { icon: Headphones, title: '全程支持', desc: '7×24 小时技术支持' },
  ]

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id))
      const scrollPosition = window.scrollY + 100

      sections.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop
          const sectionHeight = section.offsetHeight
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(navItems[index].id)
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="gradient-bg min-h-screen">
      {/* 进度条 */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      {/* 导航栏 */}
      <nav className="fixed top-0 left-0 right-0 z-40 glass">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div 
              className="text-2xl font-bold gradient-text"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              克昂姆软件
            </motion.div>

            {/* 桌面导航 */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm transition-colors ${
                    activeSection === item.id 
                      ? 'text-blue-400 font-medium' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* 移动端菜单按钮 */}
            <button 
              className="md:hidden text-gray-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* 移动端菜单 */}
        {isMenuOpen && (
          <motion.div 
            className="md:hidden glass border-t border-gray-800"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
          >
            <div className="px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left py-2 ${
                    activeSection === item.id 
                      ? 'text-blue-400' 
                      : 'text-gray-300'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero 区域 */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4">
        <motion.div 
          className="text-center max-w-4xl mx-auto"
          style={{ opacity, scale }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">用代码创造价值</span>
              <br />
              <span className="text-white">让想法成为现实</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              克昂姆软件 — 您的专属数字解决方案合作伙伴
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-medium text-white hover:shadow-lg hover:shadow-blue-500/25 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                立即咨询
                <ArrowRight className="inline ml-2" size={20} />
              </motion.button>
              <motion.button
                onClick={() => scrollToSection('services')}
                className="px-8 py-4 glass rounded-full font-medium text-white hover:bg-white/10 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                了解服务
              </motion.button>
            </div>
          </motion.div>

          <motion.div 
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="text-gray-400" size={32} />
          </motion.div>
        </motion.div>
      </section>

      {/* 关于区域 */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">
              <span className="gradient-text">关于我们</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              专业团队，匠心打造每一个项目
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="glass p-8 rounded-2xl text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                  <feature.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 服务区域 */}
      <section id="services" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">
              <span className="gradient-text">服务项目</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              全方位技术服务，满足您的多样化需求
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="glass p-8 rounded-2xl group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <service.icon className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 案例区域 */}
      <section id="cases" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">
              <span className="gradient-text">精选案例</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              用实力说话，用作品证明
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item, index) => (
              <motion.div
                key={index}
                className="glass rounded-2xl overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                  <Code2 className="text-gray-600" size={64} />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">项目案例 {item}</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    此处展示您的实际项目案例，包括项目名称、技术栈和成果
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full">React</span>
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-xs rounded-full">Node.js</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 联系区域 */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">
              <span className="gradient-text">联系我们</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              期待与您的合作，共创美好未来
            </p>
          </motion.div>

          <div className="glass rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <Phone className="text-blue-400" size={24} />
                </div>
                <h4 className="font-medium mb-1">电话咨询</h4>
                <p className="text-gray-400 text-sm">400-XXX-XXXX</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-purple-500/20 flex items-center justify-center">
                  <Mail className="text-purple-400" size={24} />
                </div>
                <h4 className="font-medium mb-1">邮箱联系</h4>
                <p className="text-gray-400 text-sm">contact@keangmu.com</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-green-500/20 flex items-center justify-center">
                  <MapPin className="text-green-400" size={24} />
                </div>
                <h4 className="font-medium mb-1">公司地址</h4>
                <p className="text-gray-400 text-sm">XX 市 XX 区 XX 路 XX 号</p>
              </div>
            </div>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">姓名</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-xl focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="您的姓名"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">联系方式</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-xl focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="电话/微信"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">项目需求</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-xl focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  placeholder="请描述您的项目需求..."
                />
              </div>
              <motion.button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl font-medium text-white hover:shadow-lg hover:shadow-blue-500/25 transition-all flex items-center justify-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                发送消息
                <Send className="ml-2" size={20} />
              </motion.button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-800">
        <div className="max-w-7xl mx-auto text-center text-gray-500 text-sm">
          <p>© 2026 克昂姆软件。All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
