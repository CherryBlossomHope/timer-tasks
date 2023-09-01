<h1 align="center">TimerTasks</h1>

![Static Badge](https://img.shields.io/badge/npm-red?logo=npm)
![Static Badge](https://img.shields.io/badge/GitHub-%23000?logo=github)

* ### npm: <https://www.npmjs.com/package/timertasks>

### 🎃 支持web项目中定时器 **(setInterval)** 集中管理
### 🎄 设置 **Interval**
### 🍔 修改执行时间后重启 
### 😊 清除已设置的定时任务
### 🍗 其他功能还在想...
### 🫡 小白练手随便写一下 O.o? o.O?

#### 安装
```bash
## 使用npm
npm install timertasks

## 使用pnpm
pnpm add timertasks
```

#### 使用
```typescript
import { setTimedTask,restartTimedTask,clearTimedTask } from "timertasks";

// 自定义时间
const TIME = 1000

const NEW_TIME = 1500

/** 设置定时任务 */
setTimedTask('your-task-name',()=> {

  // 其他逻辑代码...

},TIME)

/** 重启定时任务 */
restartTimedTask('your-task-name',NEW_TIME)

/** 清除定时任务 */
clearTimedTask('your-task-name')
```