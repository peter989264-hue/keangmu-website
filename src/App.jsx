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
  MessageSquare
} from 'lucide-react'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { id: 'home', label: '首页' },
    { id: 'services', label: '服务项目' },
    { id: 'cases', label: '案例展示' },
    { id: 'advantages', label: '产品优势' },
    { id: 'about', label: '关于我们' },
    { id: 'contact', label: '联系我们' },
  ]

  const services = [
    {
      icon: Monitor,
      title: '官网建设',
      desc: '企业官网、品牌展示、响应式设计',
      color: 'bg-blue-500'
    },
    {
      icon: ShoppingCart,
      title: '商城开发',
      desc: '电商平台、在线支付、订单管理',
      color: 'bg-blue-600'
    },
    {
      icon: Smartphone,
      title: '手机网站',
      desc: '移动端适配、H5 页面、微信小程序',
      color: 'bg-blue-700'
    },
    {
      icon: Layers,
      title: '小程序',
      desc: '微信/支付宝/百度多平台小程序',
      color: 'bg-blue-800'
    },
  ]

  const advantages = [
    { 
      icon: Award, 
      title: '产品优势', 
      desc: '上百个行业模板，设计师精心打磨，看上哪款选哪款！无需找图修图，图标美图等尽在素材库！' 
    },
    { 
      icon: Users, 
      title: '优质服务', 
      desc: '网站栏目分类清晰，便于统计客户访问深度、停留时间，产品或服务的关注度和点击率。' 
    },
    { 
      icon: Headphones, 
      title: '贴心售后', 
      desc: '完善售后体系，保证网站稳定正常运行；网站操作简便易用，内部分布合理，符合客户浏览习惯。' 
    },
    { 
      icon: Code2, 
      title: '专业团队', 
      desc: '平均从业经验 4 年以上，从专业的角度为您服务；技术精湛，服务周到，让您无后顾之忧。' 
    },
  ]

  const cases = [
    { title: '企业官网', category: '官网建设', image: 'https://via.placeholder.com/400x300/3b82f6/ffffff?text=企业官网' },
    { title: '电商平台', category: '商城开发', image: 'https://via.placeholder.com/400x300/2563eb/ffffff?text=电商平台' },
    { title: '餐饮小程序', category: '小程序', image: 'https://via.placeholder.com/400x300/1d4ed8/ffffff?text=餐饮小程序' },
    { title: '教育平台', category: '手机网站', image: 'https://via.placeholder.com/400x300/1e40af/ffffff?text=教育平台' },
    { title: '医疗官网', category: '官网建设', image: 'https://via.placeholder.com/400x300/3b82f6/ffffff?text=医疗官网' },
    { title: '零售商城', category: '商城开发', image: 'https://via.placeholder.com/400x300/2563eb/ffffff?text=零售商城' },
  ]

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* 顶部栏 */}
      <div className="bg-blue-600 text-white py-2 text-sm">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <span>克昂姆软件 — 专业软件定制开发服务商</span>
          <span className="hidden md:block">全国服务热线：400-XXX-XXXX</span>
        </div>
      </div>

      {/* 导航栏 */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <motion.div 
              className="text-2xl font-bold text-blue-600"
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
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* 移动端菜单按钮 */}
            <button 
              className="md:hidden text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* 移动端菜单 */}
        {isMenuOpen && (
          <motion.div 
            className="md:hidden bg-white border-t"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
          >
            <div className="px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left py-2 text-gray-700 hover:text-blue-600"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero 区域 */}
      <section id="home" className="bg-gradient-to-br from-blue-500 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                六站合一 · 全网营销网站建设
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                PC 官网 + 手机网站 + 微信网站 + 小程序 + APP + 商城，一站式解决方案
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.button
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-3 bg-white text-blue-600 rounded-md font-medium hover:bg-blue-50 transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  免费试用
                </motion.button>
                <motion.button
                  onClick={() => scrollToSection('cases')}
                  className="px-8 py-3 border-2 border-white text-white rounded-md font-medium hover:bg-white/10 transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  查看案例
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-white/10 backdrop-blur rounded-lg p-8">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="p-4 bg-white/20 rounded">
                    <Monitor className="w-8 h-8 mx-auto mb-2" />
                    <p className="text-sm">PC 网站</p>
                  </div>
                  <div className="p-4 bg-white/20 rounded">
                    <Smartphone className="w-8 h-8 mx-auto mb-2" />
                    <p className="text-sm">手机站</p>
                  </div>
                  <div className="p-4 bg-white/20 rounded">
                    <MessageSquare className="w-8 h-8 mx-auto mb-2" />
                    <p className="text-sm">微信站</p>
                  </div>
                  <div className="p-4 bg-white/20 rounded">
                    <Layers className="w-8 h-8 mx-auto mb-2" />
                    <p className="text-sm">小程序</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 服务项目 */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">服务项目</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              全方位技术服务，满足您的多样化需求
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className={`${service.color} p-6 text-white`}>
                  <service.icon className="w-12 h-12 mx-auto" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 案例展示 */}
      <section id="cases" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">案例展示</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              精选客户案例，用实力说话
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {cases.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="text-blue-600 text-sm font-medium">{item.category}</span>
                  <h3 className="text-xl font-bold text-gray-800 mt-2">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-md font-medium hover:bg-blue-600 hover:text-white transition-colors">
              查看更多
            </button>
          </div>
        </div>
      </section>

      {/* 产品优势 */}
      <section id="advantages" className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">产品优势</h2>
            <p className="text-blue-100 max-w-2xl mx-auto">
              专业、高效、可靠，为您提供最佳解决方案
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur rounded-lg p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, backgroundColor: 'rgba(255,255,255,0.2)' }}
              >
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-blue-100 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 关于我们 */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">关于我们</h2>
              <div className="w-20 h-1 bg-blue-600 mb-6"></div>
              <p className="text-gray-600 leading-relaxed mb-6">
                克昂姆软件是一家专注"高端网站建设、微信等移动互联产品、软件定制开发"的专业型网络公司。
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                从创立至今，我们始终坚持"技术为本、服务至上"的理念，用专业的技术和优质的服务，为众多企业打造了精美的数字化形象。
              </p>
              <p className="text-gray-600 leading-relaxed">
                从梦想到现实，克昂姆用"顶尖技术 + 优质服务"开拓不一样的自我，用全心全意诠释拼搏终将有回报。
              </p>
            </motion.div>

            <motion.div
              className="bg-blue-600 text-white p-8 rounded-lg"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6">联系我们</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-6 h-6 mr-4" />
                  <div>
                    <p className="text-blue-200 text-sm">全国免费电话</p>
                    <p className="text-xl font-bold">400-XXX-XXXX</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="w-6 h-6 mr-4" />
                  <div>
                    <p className="text-blue-200 text-sm">邮箱</p>
                    <p>contact@keangmu.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 mr-4" />
                  <div>
                    <p className="text-blue-200 text-sm">地址</p>
                    <p>XX 市 XX 区 XX 路 XX 号</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 联系我们 */}
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">联系我们</h2>
            <p className="text-gray-600">
              期待与您的合作，共创美好未来
            </p>
          </motion.div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">姓名</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="您的姓名"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">联系方式</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="电话/微信"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">项目需求</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  placeholder="请描述您的项目需求..."
                />
              </div>
              <motion.button
                type="submit"
                className="w-full py-4 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors flex items-center justify-center"
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
      <footer className="bg-gray-800 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold text-lg mb-4">克昂姆软件</h3>
              <p className="text-sm text-gray-400">
                专业软件定制开发服务商，为您提供全方位的数字化解决方案。
              </p>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">服务项目</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">官网建设</a></li>
                <li><a href="#" className="hover:text-white transition-colors">商城开发</a></li>
                <li><a href="#" className="hover:text-white transition-colors">小程序</a></li>
                <li><a href="#" className="hover:text-white transition-colors">App 开发</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">快速链接</h3>
              <ul className="space-y-2 text-sm">
                <li><button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors">关于我们</button></li>
                <li><button onClick={() => scrollToSection('cases')} className="hover:text-white transition-colors">案例展示</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="hover:text-white transition-colors">联系我们</button></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">联系方式</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  400-XXX-XXXX
                </li>
                <li className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  contact@keangmu.com
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
            <p>© 2026 克昂姆软件。All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* 浮动客服按钮 */}
      <div className="fixed right-4 bottom-20 z-40 space-y-2">
        <motion.a
          href="tel:400-XXX-XXXX"
          className="block w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg"
          whileHover={{ scale: 1.1 }}
        >
          <Phone size={20} />
        </motion.a>
        <motion.a
          href="#"
          className="block w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg"
          whileHover={{ scale: 1.1 }}
        >
          <MessageSquare size={20} />
        </motion.a>
      </div>
    </div>
  )
}

export default App
