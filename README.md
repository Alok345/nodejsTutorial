# 🚀 Node.js Tutorial & Playground

A premium, interactive, and self-paced playground for mastering Node.js fundamentals, built-in core modules, asynchronous programming, HTTP services, and web frameworks like Express.js. Designed by **Alok345** to bridge the gap between intermediate JS and full-stack backend development.

---

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="NodeJS" />
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="ExpressJS" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
  <img src="https://img.shields.io/badge/License-ISC-blue.svg?style=for-the-badge" alt="License" />
</p>

## 📖 Table of Contents
1. [About the Project](#-about-the-project)
2. [Key Features](#-key-features)
3. [Tech Stack](#-tech-stack)
4. [Project Structure](#-project-structure)
5. [Installation & Setup](#-installation--setup)
6. [Module Guide & Usage](#-module-guide--usage)
7. [Author & Contributions](#-author--contributions)
8. [License](#-license)

---

## 💡 About the Project

`nodejsTutorial` is a step-by-step backend architecture laboratory containing clean, isolated codesets showcasing real-world implementations of Node.js capabilities. 

From exploring standard operating system APIs and the Event Loop to standing up low-level HTTP servers and abstracting routing layers with **Express.js**, this repository acts as a live, runnable documentation catalog.

---

## 🌟 Key Features

* 📂 **File I/O Control:** Asynchronous & synchronous file handling using the native `fs` module.
* 🌐 **Server Orchestration:** Bare-metal server implementations via the native `http` module alongside high-performance modern web framework configurations via `Express.js`.
* ⚡ **Event-Driven Architecture:** Creation and orchestration of decoupled handlers using Node's `events` subsystem.
* 📦 **Module System Duality:** Demonstrations highlighting runtime differences between legacy CommonJS (`require`) and modern ES Modules (`import/export` via `.mjs`).
* 🖥️ **System Resource Inspection:** Real-time diagnostics of OS memory, thread environments, and directory topologies.

---

## 🛠️ Tech Stack

| Technology | Category | Purpose |
| :--- | :--- | :--- |
| **Node.js** | Runtime Environment | High-performance asynchronous backend runtime |
| **Express.js v4.18.2** | Framework | High-velocity, minimalist web routing and middleware management |
| **CommonJS / ESM** | Specifications | Native module architectures within the Node ecosystem |
| **HTML5** | Markup | Dynamic presentation of served endpoints |

---

## 🗂️ Project Structure

```bash
nodejsTutorial/
├── 📁 node_modules/             # Installed package dependencies
├── ⚙️ package.json              # Project manifest and Express.js dependencies
├── 🔒 package-lock.json         # Locked-state dependency tree
│
├── 🚀 index.js                  # Primary application entrypoint
│
├── 🌐 Servers & Routing
│   ├── express.js               # Web app routing engine utilizing Express.js
│   ├── httpserver.js            # Standard native Node HTTP Server implementation
│   ├── website.js               # Multi-page server mapping resources dynamically
│   └── index.html               # Main webpage template for native HTTP testing
│
├── ⚙️ Native System Modules
│   ├── fsmodule.js              # File System operations (read/write processes)
│   ├── osmodule.js              # System information (RAM, Hostname, CPU architectures)
│   ├── pathmodule.js            # System paths normalization utility
│   └── urlmodule.js             # Address query parsing & stringification
│
├── 🔄 Event Loop & Imports
│   ├── nodejsevent.js           # EventEmitter pattern implementation
│   ├── modulefirst.js           # CommonJS legacy module standard
│   ├── second.js                # Helper scripts supporting CommonJS exports
│   └── moduleSecond.mjs         # Modern ES Module standards (MJS syntax)
│
└── 📄 Test Assets
    ├── file.txt                 # Input source data
    ├── file2.txt                # Output target data
    └── file3.txt                # Log files for operations tests
```

---

## 💿 Installation & Setup

Ensure you have **Node.js** (v16.x or higher recommended) and **npm** installed on your workstation.

### 1. Clone the Repository
```bash
git clone https://github.com/Alok345/nodejsTutorial.git
cd nodejsTutorial
```

### 2. Install Dependencies
```bash
npm install
```

---

## 🚀 Module Guide & Usage

You can execute any utility directly via your terminal. Below is a blueprint of how to run and test individual concepts:

### System & Module Diagnostics

* **Check System Memory & CPU specs:**
  ```bash
  node osmodule.js
  ```
* **Manipulate System Path Structures:**
  ```bash
  node pathmodule.js
  ```
* **Deconstruct URLs & Parameters:**
  ```bash
  node urlmodule.js
  ```

---

### File System Operations (`fs`)

Verify interactive file read/write operations utilizing legacy and dynamic file pipelines:
```bash
node fsmodule.js
```
*(This program reads data streams from `file.txt` and writes them safely down to dynamic log systems like `file2.txt` and `file3.txt`)*

---

### Native Server vs Express.js Web Engine

#### Option A: Running the Native Web Server
Host a plain-vanilla web server that parses and returns HTML layouts dynamically:
```bash
node httpserver.js
# Or to run the fully routed website engine:
node website.js
```
*Open your browser and navigate to `http://localhost:3000`*

#### Option B: Running the Express.js Framework Server
Launch the lightweight, professional web server powered by the **Express** framework engine:
```bash
node express.js
```
*Open your browser and navigate to `http://localhost:3000` to interact with custom JSON and HTML routing.*

---

### Event Emitter Pipelines
Observe asynchronous event bindings triggering callback sequences on execution:
```bash
node nodejsevent.js
```

---

## 🛡️ License

Distributed under the **ISC License**. See the `package.json` file for validation.

***

<p align="center">
  Developed with ❤️ by <a href="https://github.com/Alok345">Alok345</a>
</p>