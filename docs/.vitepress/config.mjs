import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'MakeIoTSmart',
  description: 'AI-driven IoT Solutions',
  ignoreDeadLinks: true,
  
  themeConfig: {
    logo: '/vitepress-logo-large.svg',
    
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/what-is-makeiotsmart' },
      {
        text: 'Solutions',
        items: [
          { text: 'SmartEdge', link: '/SmartEdge/' },
          { text: 'Node-RED Easy Connect', link: '/node-red-easy-connect/' },
          { text: 'Node-RED Make IoT Smart', link: '/node-red-make-iot-smart/' }
        ]
      }
    ],

    sidebar: {
      '/SmartEdge/': [
        {
          text: 'SmartEdge',
          items: [
            { text: 'Introduction', link: '/SmartEdge/' },
            { text: 'Quick Start', link: '/SmartEdge/getting-started' },
            { text: 'Configuration Guide', link: '/SmartEdge/configuration' }
          ]
        }
      ],
      '/node-red-easy-connect/': [
        {
          text: 'Node-RED Easy Connect',
          items: [
            { text: 'Introduction', link: '/node-red-easy-connect/' },
            { text: 'Installation', link: '/node-red-easy-connect/installation' },
            { text: 'Usage Guide', link: '/node-red-easy-connect/usage' }
          ]
        }
      ],
      '/node-red-make-iot-smart/': [
        {
          text: 'Node-RED Make IoT Smart',
          items: [
            { text: 'Introduction', link: '/node-red-make-iot-smart/readme' },
            { text: 'Architecture', link: '/node-red-make-iot-smart/LANGCHAIN_ARCHITECTURE_en-US' },
            { text: 'Quick Start', link: '/node-red-make-iot-smart/readme' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/makiotsmart' }
    ]
  }
})