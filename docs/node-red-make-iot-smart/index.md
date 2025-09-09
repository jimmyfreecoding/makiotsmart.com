# Node-RED Make IoT Smart

## 🌐 Languages 

[![English](https://img.shields.io/badge/lang-English-blue.svg)](README.md) [![中文](https://img.shields.io/badge/lang-中文-red.svg)](README_ZH.md) [![Deutsch](https://img.shields.io/badge/lang-Deutsch-green.svg)](README_DE.md) [![Español](https://img.shields.io/badge/lang-Español-orange.svg)](README_ES.md) [![Français](https://img.shields.io/badge/lang-Français-purple.svg)](README_FR.md) [![日本語](https://img.shields.io/badge/lang-日本語-yellow.svg)](README_JA.md) [![한국어](https://img.shields.io/badge/lang-한국어-pink.svg)](README_KO.md) [![Português](https://img.shields.io/badge/lang-Português-cyan.svg)](README_PT.md) [![Русский](https://img.shields.io/badge/lang-Русский-brown.svg)](README_RU.md) [![繁體中文](https://img.shields.io/badge/lang-繁體中文-lightblue.svg)](README_TW.md)


---

An AI intelligent assistant extension designed specifically for Node-RED, making IoT development smarter and more efficient.
[![npm version](https://badge.fury.io/js/@jhe.zheng%2Fnode-red-make-iot-smart.svg)](https://badge.fury.io/js/@jhe.zheng%2Fnode-red-make-iot-smart)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node-RED](https://img.shields.io/badge/Node--RED-2.0%2B-red)](https://nodered.org/)
## Overview

Node-RED Make IoT Smart is a comprehensive AI agent designed specifically for Node-RED development. It provides intelligent code assistance, automated flow optimization, and smart debugging capabilities to enhance your IoT development experience. The extension now supports six major scenarios: Learning, Solution, Integration, Development, Configuration, and Management.

## Features

### 🤖 AI Assistant

- **Intelligent Code Suggestions**: Provides context-aware code recommendations for Node-RED flows.
- **Smart Flow Analysis**: Analyzes flows and provides optimization suggestions.
- **Natural Language Interface**: Interact with the Node-RED environment using natural language commands.
- **Multi-language Support**: Supports Chinese, English, Japanese, Korean, and other languages. Follows Node-RED language configuration changes.
- **Multi-provider Support**: Based on LangChain.js framework, supports OpenAI, Anthropic, Google, DeepSeek, and other AI models.
- **Intelligent Memory Management**: SQLite-based short-term and long-term memory system, supporting conversation history, user preferences, and flow template storage.
- **Scenario-based Prompts**: JSON-configured scenario-based prompt management with dynamic parameter injection support.
- **MCP Tools Integration**: Supports Model Context Protocol (MCP) tool calls to extend AI assistant capabilities.


### 🔧 Development Tools

- **Real-time Code Analysis**: Continuously analyzes Node-RED flows.
- **Configuration Management**: Centralized API configuration for different AI providers.
- **Interactive Sidebar**: Dedicated AI assistant panel integrated into the Node-RED editor.
- **JSON Editor**: Built-in configuration file editor with syntax highlighting.
- **MCP Tool Integration**: Supports Model Context Protocol (MCP) tool calls to extend AI assistant capabilities.
- **LangChain Tool Management**: Unified tool management framework supporting built-in tools and MCP tools.
- **Scenario-based Support**: Provides customized support for seven major scenarios:
  - **Learning**: Explains nodes and concepts, provides example flows.
  - **Solution**: Provides multiple IoT solutions with flow JSON and node installation guidance.
  - **Integration**: Assists with protocol integration (e.g., MQTT, Modbus) or software.
  - **Development**: Optimizes existing flows and function node code.
  - **Configuration**: Guides modification of Node-RED settings (e.g., `settings.js`).
  - **Management**: Supports remote access, Git integration, and batch deployment.

### 🚀 Upcoming Features

- **Remote Debugging**: AI-assisted remote debugging of Node-RED flows.
- **Team Management**: Collaborative development with team management features.
- **Advanced Analytics**: Deep insights into IoT system performance.
- **Smart Deployment**: AI-guided deployment strategies for IoT applications.

## Installation

### Install from npm

```bash
npm install @jhe.zheng/node-red-make-iot-smart
```

### Install from Node-RED Palette Manager

1. Open the Node-RED editor.
2. Go to **Menu → Manage Palette**.
3. Search for `@jhe.zheng/node-red-make-iot-smart`.
4. Click **Install**.
5. After installation is complete, restart Node-RED.
6. After installation, you will see a new **AI Assistant** tab in the Node-RED sidebar.
7. Click the **Configure** button to set up your AI provider.
8. Choose from supported providers:
   - **DeepSeek**: Cost-effective choice with strong coding capabilities.
   - **OpenAI**: Industry-leading GPT models.
   - **Anthropic**: Advanced reasoning capabilities with Claude models.
9. Enter your API key and select the appropriate model.
10. After configuration is complete, you can start using the AI assistant. Note that after saving the configuration, Node-RED will automatically generate a configuration node, and Node-RED will prompt for flow changes - just click merge.
11. Start interacting with your AI assistant!
## Quick Start
### Type "Analyze current node"
<img src="https://github.com/jimmyfreecoding/node-red-make-iot-smart/raw/main/public/current-node.gif" width="800" height="450" alt="Demo Animation" />


### Type "Create a sample flow"
<img src="https://github.com/jimmyfreecoding/node-red-make-iot-smart/raw/main/public/create-flow.gif" width="800" height="450" alt="Demo Animation" />

### Type "Health check"
<img src="https://github.com/jimmyfreecoding/node-red-make-iot-smart/raw/main/public/health-check.gif" width="800" height="450" alt="Demo Animation" />

## Configuration

### LangSmith Debug Configuration (Optional)

For better debugging and monitoring of LangChain execution processes, you can configure LangSmith support:

1. Copy the `.env.example` file to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Edit the `.env` file and fill in your LangSmith configuration:
   ```env
   LANGCHAIN_TRACING_V2=true
   LANGCHAIN_API_KEY=your_langsmith_api_key_here
   LANGCHAIN_PROJECT=your_project_name
   ```

3. Restart Node-RED to apply the configuration.

4. Visit [LangSmith](https://smith.langchain.com/) to view detailed execution traces and debugging information.

**Note**: LangSmith configuration is optional and will not affect basic functionality if not configured.

## Usage

### Basic Chat Interface

- Open the **AI Assistant** sidebar tab.
- Enter your questions or instructions in natural language.
- Get intelligent responses including code suggestions and explanations.

### Scenario Selection

- Select scenarios (Learning, Solution, Integration, Development, Configuration, Management) through the dropdown menu in the sidebar.
- AI customizes responses based on the selected scenario, providing relevant tools and flow JSON.

### JSON/Code Handling

- Large JSON or code outputs are hidden behind **View JSON/Code** buttons to keep the UI clean.
- Edit flow JSON in the built-in editor with syntax highlighting and apply changes directly.

### Supported Scenarios

#### Scenario Overview

| Scenario | English Name | Description | Supported Tools |
|----------|--------------|-------------|----------------|
| learning | Learning Mode | Node-RED learning assistant providing teaching guidance and knowledge answers | get-flows, get-nodes, create-flow, update-flow |
| solution | Solution Mode | IoT solution expert providing technical solutions and architecture recommendations | create-flow, update-flow, get-flows, create-subflow |
| integration | Integration Mode | System integration expert handling device connections and data integration | create-flow, update-flow, install-node, get-node-info |
| development | Development Mode | Code development assistant helping write and optimize Node-RED flows | create-flow, update-flow, create-subflow, get-node-info, install-node, get-flow |
| configuration | Configuration Mode | System configuration expert handling Node-RED environment and node configuration | get_settings, update_settings, install_node, get_node_info, get_diagnostics |
| management | Management Mode | Project management assistant helping with flow organization and project planning | get-flows, create-flow, update-flow, create-subflow |
| general | General Mode | General AI assistant handling various Node-RED related issues | No specific tool restrictions |

#### Preset Prompt Examples

| Scenario | Preset Prompts |
|----------|----------------|
| **Learning Mode** | • I'm new to Node-RED, please introduce the basic concepts and core functions of Node-RED<br>• Please explain what Flow, Node, and Wire are in Node-RED<br>• How to create my first simple flow in Node-RED? Please provide detailed steps<br>• What are the commonly used core nodes in Node-RED? What are their respective functions? |
| **Solution Mode** | • I need to design a smart home control system, please provide a complete IoT solution architecture<br>• How to use Node-RED to build an Industry 4.0 data collection and monitoring system?<br>• Please design an agricultural IoT solution, including sensor data collection and automation control<br>• I want to establish a smart city environmental monitoring network, what technical solutions are needed? |
| **Integration Mode** | • How to integrate MQTT devices and HTTP APIs in Node-RED? Please provide detailed integration solutions<br>• I need to send sensor data from Modbus devices to cloud databases, how to implement this?<br>• Please help me design a data transformation flow that converts JSON format to XML and sends to third-party systems<br>• How to implement unified data collection and processing for multiple different protocol devices in Node-RED? |
| **Development Mode** | • Detailed explanation and description of the current flow<br>• Detailed explanation and description of the current node<br>• Please help me write a Function node code that implements data filtering and format conversion<br>• How to create a custom node in Node-RED? Please provide complete development steps |
| **Configuration Mode** | • How is the current Node-RED configuration?<br>• How is the current Node-RED diagnostics?<br>• How to configure Node-RED security settings, including user authentication and HTTPS?<br>• Please help me optimize Node-RED performance configuration to improve system efficiency<br>• How to install and manage third-party node packages in Node-RED?<br>• I need to configure Node-RED logging and monitoring, how should I set it up? |
| **Management Mode** | • Please help me develop an IoT project development plan and milestone arrangement<br>• How to organize and manage large project flow structures in Node-RED?<br>• I need to assess the risks and quality of the current project, please provide analysis suggestions<br>• How to establish Node-RED development standards and best practices for team collaboration? |
| **General Mode** | • What is Node-RED? What are its main features and application scenarios?<br>• I encountered a Node-RED problem, please help me analyze and solve it<br>• Please recommend some Node-RED learning resources and best practices<br>• How to choose the appropriate Node-RED scenario mode to solve my specific needs? |

#### Smart Keyword Triggers

| Scenario | Keywords | Trigger Behavior |
|----------|----------|------------------|
| **Development Mode** | create flow, generate flow, new flow, build flow | Automatically switches to development mode, generates complete Node-RED flow JSON code with detailed explanations |
| **Configuration Mode** | current config, system config, configuration info, settings, current settings | Automatically calls get_settings tool to retrieve configuration information and displays in table format |
| **Configuration Mode** | current diagnostics, system diagnostics, diagnostic info, health check | Automatically calls get_diagnostics tool for system diagnostics |

#### Dynamic Input Parameters

All scenarios support the following dynamic parameter injection:
- `nodeRedVersion` - Node-RED version information
- `nodeVersion` - Node.js version information  
- `currentTime` - Current timestamp
- `selectedFlow` - Currently selected flow
- `selectedNodes` - Currently selected nodes
- `lang` - Current language setting
- `mcpTools` - Available MCP tools list

Each scenario also supports specific dynamic parameters:
- **Learning Mode**: `userLevel` (user skill level)
- **Solution Mode**: `projectRequirements` (project requirements)
- **Integration Mode**: `integrationTargets` (integration targets)
- **Development Mode**: `developmentTask` (development task)
- **Configuration Mode**: `configurationNeeds` (configuration needs)
- **Management Mode**: `projectStatus` (project status)

#### System Prompt Features

Each scenario is configured with specialized system prompts to ensure the AI assistant can:
1. **Role Positioning**: Clearly define its professional role in specific scenarios
2. **Output Format**: Provide structured response formats according to scenario needs
3. **Tool Integration**: Intelligently call appropriate MCP tools and Node-RED APIs
4. **Context Awareness**: Utilize dynamic parameters to provide personalized recommendations


| Scenario | Description                                                                 |
| -------- | --------------------------------------------------------------------------- |
| Learning | Explains nodes/concepts and provides example flows for learning.            |
| Solution | Provides multiple IoT solutions with flow JSON and node installation guidance. |
| Integration | Assists with protocol/software integration and generates related flows.     |
| Development | Optimizes existing flows and function node code.                           |
| Configuration | Guides modification of Node-RED settings (e.g., `settings.js`).           |
| Management | Supports remote access, Git integration, and batch deployment.             |

## Supported AI Providers


| Provider  | Models                                  | Features                    |
| --------- | --------------------------------------- | --------------------------- |
| OpenAI    | GPT-3.5, GPT-4, GPT-4o                 | General purpose, wide compatibility |
| Anthropic | Claude-3, Claude-3.5                    | Advanced reasoning, safety-focused |
| Google    | Gemini Pro, Gemini Flash                | Multimodal, high performance |
| DeepSeek  | deepseek-chat, deepseek-coder           | Cost-effective, coding-focused |
| Others    | All LLM providers supported by LangChain.js | Highly extensible, flexible configuration |

## API Configuration

- API keys are stored locally and encrypted.
- Support for multiple provider configurations.
- Easy switching between different providers and models.
- Separate model settings for planning and execution phases.

## Development

### Project Structure

```
├── ai-sidebar.html          # Main sidebar interface
├── ai-sidebar-config.json   # UI configuration
├── make-iot-smart.html      # Node configuration template
├── make-iot-smart.js        # Backend node implementation
├── lib/
│   ├── langchain-manager.js # LangChain core manager
│   ├── memory-manager.js    # SQLite memory management
│   └── scenario-manager.js  # Scenario-based prompt management
├── config/
│   └── scenarios.json       # Scenario configuration file
├── data/
│   └── memory.db           # SQLite database file
└── package.json            # Package configuration
```

### Technical Architecture

This project is built on the **LangChain.js** framework with a modular architecture design:

- **LangChain Manager**: Core AI model management, supporting multiple LLM providers
- **Memory Manager**: SQLite-based intelligent memory system, supporting short-term and long-term memory
- **Scenario Manager**: Scenario-based prompt management, supporting JSON configuration and dynamic parameters
- **Tool Manager**: Unified tool management framework, integrating MCP tools and built-in tools
- **API Layer**: RESTful API interface, supporting streaming chat and tool execution

### Contributing

1. Fork the repository.
2. Create a feature branch.
3. Make changes and commit.
4. Submit a pull request.

## Roadmap

### Phase 1 (Completed)

- ✅ AI assistant integration
- ✅ Multi-provider support
- ✅ Interactive sidebar
- ✅ Configuration management
- ✅ Scenario-based support
- ✅ LangChain.js architecture migration
- ✅ SQLite memory management system
- ✅ MCP tool integration
- ✅ Unified tool management framework

### Phase 2 (Coming Soon)

- 🔄 Remote debugging functionality
- 🔄 Team collaboration features
- 🔄 Advanced flow analysis
- 🔄 Smart deployment tools

### Phase 3 (Future)

- 📋 Team management system
- 📋 Enterprise features
- 📋 Advanced security options
- 📋 Custom model training

## System Requirements

- Node.js >= 18.0.0
- Node-RED >= 2.0.0

## License

Licensed under the MIT License. See [LICENSE](LICENSE) file for details.

## Support
AI development is more like art than technology. Mastering LLMs is not a simple task and requires deep understanding of AI models, data, and application scenarios. Each Q&A session may yield different results. Initial versions are often imperfect, but with the improvement of prompt engineering, they will gradually truly meet the daily needs of Node-RED users, whether IT or OT engineers. We welcome more interested people to join the project.
- **Issue Reports**: [GitHub Issues](https://github.com/jimmyfreecoding/node-red-make-iot-smart/issues)
- **Documentation**: [Wiki](https://github.com/jimmyfreecoding/node-red-make-iot-smart/wiki)
- **Discussions**: [GitHub Discussions](https://github.com/jimmyfreecoding/node-red-make-iot-smart/discussions)

## Author

**Zheng He**
- Email: jhe.zheng@gmail.com
- GitHub: [@jimmyfreecoding](https://github.com/jimmyfreecoding)
- Website: [https://www.makeiotsmart.com](https://www.makeiotsmart.com)
---

*Let AI-driven assistance make your IoT development smarter!*

---
