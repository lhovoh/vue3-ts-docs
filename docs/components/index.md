## 计数器组件 代码展示

### composables
```javascript
import { ref } from "vue";


export function useCounter(initValue = 0){
    // 响应式变量 count, 初值为入参 initValue
    const count = ref<number>(initValue)

    // 增加计数的函数
    const increament = () => {
        count.value++;
    }


    // 减少计数的函数
    const decreament = () => {
        count.value--;
    }

    // 清空计数的函数
    const deletment = () => {
        count.value = 0;
    }

    return {
        count,increament,decreament,deletment
    }

}
```
### components
```javascript
<template>
    <div>
        <p> 当前计数器的值: {{ count }}</p>
        <button @click="increament">增加</button>
        <button @click="decreament">减少</button>
        <button @click="deletment">清空</button>
    </div>
</template>

<script setup lang="ts">
import { useCounter } from '../composables/useCounter';

const { count,increament,decreament,deletment } = useCounter(10)



</script>

<style scoped>

</style>
```

## 本地存储 代码展示

### composables
```javascript
import { ref, watch } from "vue"

export function useLocalStorage(key:string, defaultValue:string){
    const storedValue = localStorage.getItem(key) || defaultValue

    const data = ref<string>(storedValue)

    watch(data,(newValue)=> {
        localStorage.setItem(key,newValue)
        
    }) 

    return data

}
```
### components
```javascript
<template>
    <div>
        <p>本地存储的值：{{ myData }}</p>
        <input type="text" v-model="myData" placeholder="更新本地存储的值">
    </div>
</template>

<script setup lang="ts">
import { useLocalStorage } from '../composables/useLocalStorage';

const myData = useLocalStorage('username','张三')

</script>
```

## 页面大小转换 代码展示

### composables
```javascript
<template>
    <div>
      <p>当前窗口大小：宽：{{ width }}prx,高：{{ height }}px</p>
      <div :class="{ 'mobile-layout': isMobile }">
        <p>{{ isMobile ? "移动端布局" : "桌面端布局" }}</p>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { useWindowSize } from "@vueuse/core";
  import { computed } from "vue";
  
  //获取窗口大小
  const { width, height } = useWindowSize();
  //判断是否为移动端布局(窗子宽度小于768px时)
  const isMobile = computed(() => width.value < 768);
  </script>
  <style>
  div {
    text-align: center;
    margin-top: 20px;
  }
  .mobile-layout {
    background-color: lightblue;
  }
  .mobile-layout p {
    font-size: 36px;
  }
  
  @media (min-width: 768px) {
    .mobile-layout {
      background-color: lightcoral;
    }
    .mobile-layout p {
      font-size: 24px;
    }
  }
  </style>
```

## 鼠标定位 代码展示

```javascript
<template>
    <div>
        <p>鼠标位置： x: {{ x }}, y: {{ y }}</p>
    </div>
</template>

<script setup lang="ts">
import { useMouse } from '@vueuse/core';

const { x, y} =useMouse()
</script>

<style scoped>

</style>
```

## 标准的 README 代码展示

```javascript
<p align="center">
<img src = "https://lhovoh-oss.oss-cn-hangzhou.aliyuncs.com/logo.png" style="width:200px;" />
</p>
<h1 align="center">Vue3 + TypeScript 学习文档</h1>
<p align="center">
无论你是初学者还是有经验的开发者，这个站点都会帮助你掌握最新的 Vue3 技术与 TypeScript 实践，从基础到进阶，全方位提升你的前端开发能力。
</p>

<p>

![GitHub Licens](https://img.shields.io/github/license/lhovoh/vue3-ts-docs)
![GitHub Stars](https://img.shields.io/github/stars/lhovoh/vue3-ts-docs)
![GitHub Forks](https://img.shields.io/github/forks/lhovoh/vue3-ts-docs)
![Build Status](https://img.shields.io/github/workflow/status/lhovoh/vue3-ts-docs/CI)
![NPM Version](https://img.shields.io/npm/v/vue)
![NPM Downloads](https://img.shields.io/npm/dw/vue)
![Maintenance](https://img.shields.io/maintenance/yes/2024)

</p>

## 👀 features
    - 从头开始，循序渐进地学习 Vue3 和 TypeScript。
    - 涵盖从组件设计到代码优化的实际开发经验。
    - 通过 VitePress 和 TypeScript, 快速搭建高效, 可维护的 Vue3 应用。
```

## 倒计时 代码展示

```javascript
<!-- <template>：定义了组件的 HTML 结构。
    <div>：包含了一个标题和两个按钮。
    <h1>：显示当前的倒计时，使用 Mustache 语法（{{ timeLeft }}）来绑定 timeLeft 的值。
    <button>：两个按钮分别用于启动和停止倒计时。
    @click="startCountdown"：当点击“开始”按钮时，调用 startCountdown 方法。
    @click="stopCountdown"：当点击“停止”按钮时，调用 stopCountdown 方法。 -->
<template>
    <div>
        <h1>倒计时：{{ timeleft }}秒</h1>
        <button @click="startCountDown">开始</button>
        <button @click="stopCountDown">结束</button>
    </div>
</template>

<!-- <script>：包含了组件的逻辑部分。
import { useCountdown } from './useCountdown';：导入之前定义的组合式函数 useCountdown，该函数负责处理倒计时的逻辑。
const { timeLeft, startCountdown, stopCountdown } = useCountdown(10);：调用 useCountdown 函数，并传入初始时间 10 秒。这个调用返回一个对象，其中包含：
timeLeft：当前剩余时间的响应式引用。
startCountdown：启动倒计时的函数。
stopCountdown：停止倒计时的函数。
return { timeLeft, startCountdown, stopCountdown };：将 timeLeft、startCountdown 和 stopCountdown 返回，以便在模板中使用。 -->
<script setup lang="ts">
import { useCountDown } from '../composables/useCountDown';

const { timeleft, startCountDown, stopCountDown } = useCountDown(10)

</script>

<style scoped>

</style>
```

```javascript
// ref：用于创建一个响应式的引用，在这里用来存储剩余时间（timeLeft）。
// onUnmounted：一个生命周期钩子，当组件卸载时调用，用于清理定时器。
import { ref, onUnmounted } from "vue";

// 这个函数接受一个参数 initialTime，表示倒计时的初始时间（以秒为单位）。
export function useCountDown(initialTime: number){

    // timeLeft：使用 ref 创建一个响应式变量，初始化为传入的 initialTime。这个变量会在组件中被使用，随着时间的变化而更新。
    // timer：一个普通变量，用于存储 setInterval 返回的定时器 ID，以便在需要时清除定时器。
    const timeleft = ref(initialTime)
    let timer = 0;

    // startCountdown：一个箭头函数，用于启动倒计时。
    // 首先检查 timer 是否存在，如果存在，说明倒计时已经在进行中，直接返回以防止重复启动。
    // 使用 setInterval 每秒执行一次回调函数：
    // 如果 timeLeft.value 大于 0，减少 timeLeft 的值。
    // 如果 timeLeft.value 等于 0，清除定时器并将 timer 重置为 null。
    const startCountDown = () => {
        if (timer) return;
        timer = setInterval(() => {
            if(timeleft.value > 0){
                timeleft.value--;
            }else{
                clearInterval(timer);
                timer = 0;
            }
        }, 1000);

    };

    // stopCountdown：一个箭头函数，用于停止倒计时。
    // 调用 clearInterval(timer) 清除定时器。
    // 将 timer 重置为 null。
    const stopCountDown = () => {
        clearInterval(timer);
        timer = 0;
    };

    // 使用 onUnmounted 钩子，当组件卸载时自动调用 stopCountdown 函数，确保在组件销毁时清理定时器，防止内存泄漏。
    onUnmounted(() =>{
        stopCountDown();
    });

    return{
        timeleft,startCountDown,stopCountDown
    };

}

```

## 发送短信

```javascript
<template>
    <div>
        <h1>短信发送</h1>

        <!-- <input>：用于输入手机号码的文本框。
        v-model="phoneNumber"：使用 Vue 的双向数据绑定，将 phoneNumber 的值与输入框的值相绑定。当用户输入内容时，phoneNumber 会自动更新。
        type="text"：设定输入框的类型为文本。
        placeholder="输入手机号码"：在输入框中显示的占位符，提示用户输入手机号码。 -->
        <input
            v-model="phoneNumber"
            type="text"
            placeholder="输入手机号码"
        />

        <!-- <textarea>：用于输入多行短信内容的文本区域。
        v-model="message"：同样使用双向数据绑定，将 message 的值与文本区域的值相绑定。
        placeholder="输入短信内容"：在文本区域中显示的占位符，提示用户输入短信内容。 -->
        <textarea
            v-model="message"
            placeholder="输入短信内容"
        ></textarea>
        
        <!-- <button>：用于触发短信发送的按钮。
        @click="sendMessage"：添加点击事件，当用户点击这个按钮时，调用 sendSms 方法（这个方法应该在组件的 <script> 部分定义）。
        :disabled="isSending"：根据 isSending 的值来决定按钮是否可用。如果 isSending 为 true，按钮将被禁用，防止重复点击。
        {{ isSending ? '发送中...' : '发送短信' }}：根据 isSending 的布尔值来决定按钮上文本的内容。如果正在发送，显示 "发送中..."，否则显示 "发送短信"。 -->
        <button @click="sendMessage">
            {{ isSending ? '发送中...' : '发送短信' }}
        </button>


        <!-- <div>：用于显示发送状态的信息。
        v-if="sendStatus"：当 sendStatus 有值时，这个 <div> 才会被渲染。可以用于显示发送成功或失败的信息。
        {{ sendStatus }}：显示 sendStatus 的内容，通常是表示发送结果的信息。 -->
        <div v-if="sendStatus">{{ sendStatus }}</div>

    </div>
</template>

<script setup lang="ts">
import { useMessage } from '../composables/useMessage';

const { phoneNumber,message,isSending,sendStatus,sendMessage, } = useMessage();

</script>

<style scoped>
input, textarea {  
  display: block;  
  margin-bottom: 10px;  
  width: 300px;  
  padding: 8px;  
}  
button {  
  padding: 10px 15px;  
}
</style>
```

```javascript
// ref：从 Vue 中导入的函数，用于创建响应式引用。它允许我们创建可以在 Vue 组件中响应变化的状态。
import { ref } from "vue";

// useMessage：这是一个组合式函数，通常用于封装与特定功能相关的逻辑和状态。它将被导出以便在其他组件中使用。
export const useMessage = () => {

    // phoneNumber：存储用户输入的手机号码，初始值为空字符串。
    // message：存储用户输入的短信内容，初始值为空字符串。
    // isSending：一个布尔值，指示短信是否正在发送，初始值为 false。
    // sendStatus：用于存储发送短信后的状态信息，初始值为 null。（<string|null>）
    const phoneNumber = ref('');
    const message = ref('');
    const isSending = ref(false);
    const sendStatus = ref<string|null>(null);

    // sendMessage：这是一个异步函数，用于处理短信的发送逻辑。
    const sendMessage = async() => {

        // 在发送短信之前，函数会检查 phoneNumber 和 message 是否为空。如果任一字段为空，则设置 sendStatus 为提示信息，并退出函数。
        if ( !phoneNumber.value || !message.value ){
            sendStatus.value = '请填写手机号和短信内容!';
            return;
        }

        // 当开始发送短信时，将 isSending 设置为 true，并清空 sendStatus。
        isSending.value = true;
        sendStatus.value = null;

        // try 块：模拟发送短信的过程，使用 setTimeout 模拟一个延迟（2秒），然后设置 sendStatus 为成功信息。
        // 如果发送成功，清空 phoneNumber 和 message 的值。
        // catch 块：捕获可能发生的错误，并设置 sendStatus 为失败信息。
        // finally 块：无论发送成功与否，最终都会将 isSending 设置为 false，表示发送过程结束。
        try{
            await new Promise((resolve) => setTimeout(resolve, 2000));
            sendStatus.value = '短信发送成功!';
            phoneNumber.value = '';
            message.value = '';

        }catch(error){
            sendStatus.value = "短信发送失败，请重试!"
        }finally{
            isSending.value = false;
        }

    }

    // 希望 useMessage 函数返回 phoneNumber、message、isSending、sendStatus 和 sendMessage 这些状态和方法，以便其他组件能够使用它们。
    // 因此，return 语句应该放在 useMessage 函数的末尾，而不是 sendMessage 的内部。
    return{
        phoneNumber,message,isSending,sendStatus,sendMessage,
    }

}
```

## 表单验证

```javascript
<template>
  <!-- 使用了 Vue 的事件修饰符 .prevent，阻止表单的默认提交行为，允许开发者手动处理提交逻辑。 -->
    <form @submit.prevent="handleSubmit">
    <!-- v-model 实现双向数据绑定，将输入字段的值与 fields.username 绑定。
    在 @input 事件中调用 updateField 方法，实时更新字段值并验证。
    当错误信息存在时，展示相应的错误信息。  -->
    <div>  
      <label for="username">用户名:</label>  
      <input  
        id="username"  
        v-model="fields.username"  
        @input="updateField('username', fields.username)"  
      />  
      <span v-if="errors.username">{{ errors.username }}</span>  
    </div>  
    
    <div>  
      <label for="email">邮箱:</label>  
      <input  
        id="email"  
        v-model="fields.email"  
        @input="updateField('email', fields.email)"  
      />  
      <span v-if="errors.email">{{ errors.email }}</span>  
    </div>  

    <button type="submit">提交</button>  
  </form>  
</template>

<script setup lang="ts"> 
import { useForm } from '../composables/useForm';

// 定义验证规则  为每个输入字段定义了一个数组，包含多个验证函数，当函数返回错误信息时，会显式显示。
const validationRules = {  
  username: [  
    (value: string) => !value && '用户名是必填的',  
    (value: string) => (value.length < 3) && '用户名至少要3个字符',  
  ],  
  email: [  
    (value: string) => !value && '邮箱是必填的',  
    (value: string) => !/\S+@\S+\.\S+/.test(value) && '邮箱格式不正确',  
  ],  
};  

// 使用组合函数  
const { fields, errors, validateForm, updateField } = useForm(validationRules);  

const handleSubmit = () => {  
  if (validateForm()) {  
    // 表单验证通过，可以进行提交操作  
    alert('表单提交成功');  
  } else {  
    // 表单验证失败，显示错误消息  
    alert('请检查表单中的错误');  
  }  
};  
</script>

<style scoped>

</style>
```

```javascript
// 在你的语句 export function useForm(validationRules) { 中，
// 缺少类型定义的地方取决于你是否使用 TypeScript。如果你想要使用 TypeScript 来进行类型检查，确实需要为 validationRules 参数提供类型定义。
// 如果没有提供类型定义，TypeScript 会将 validationRules 的类型视为 any，可能会导致类型安全性降低。
// 这就是说，编译器不会检查传递给该参数的实际内容，可能会导致运行时错误。

import { ref } from "vue";

// 定义验证规则的类型  
type ValidationRule = (value: any) => false | string;  
interface ValidationRules {  
    [fieldName: string]: ValidationRule[];  
} 

//  函数接收一个参数 validationRules，该参数是一个对象，包含每个字段的验证规则。
export function useForm ( validationRules: ValidationRules ){

    // fields: 存储每个表单字段当前的值。
    // errors: 存储每个字段的错误信息。
    // isValid: 表示整个表单是否有效，初始为 true。
    const fields = ref<Record<string,string>>({});
    const errors = ref<Record<string,string>>({});
    const isValid = ref(true);

    // 遍历 validationRules 中的字段名，初始化每个字段的值（为空字符串）和错误信息（也为空字符串）。确保在调用验证时每个字段都有一个默认状态。
    for (const fieldName of Object.keys(validationRules)) {  
        fields.value[fieldName] = '';
        errors.value[fieldName] = '';
    }

    // validateField 函数负责验证特定字段。
    // 获取当前字段的值，并存储相关规则。
    const validateField = (fieldName: string) => {  
        const value = fields.value[fieldName];  
        const rules = validationRules[fieldName];  
        errors.value[fieldName] = '';

        // 遍历与字段相关的所有验证规则。执行规则并检查是否返回错误信息；如有错误，更新错误状态并停止进一步检查（使用 break）。
        for (const rule of rules) {  
            const errorMessage = rule(value);  
            if (errorMessage) {  
              errors.value[fieldName] = errorMessage;  
              break; // 一旦找到错误，结束规则验证  
            }  
        }
    };

    // validateForm 函数验证所有字段。
    // 重置 isValid 为 true，然后对每个字段调用 validateField。
    // 如果某个字段有错误，更新 isValid 为 false，最终返回表单验证的整体结果。
    const validateForm = () => {  
        isValid.value = true;  
        for (const fieldName of Object.keys(validationRules)) {  
            validateField(fieldName);  
            if (errors.value[fieldName]) {  
            isValid.value = false;  
            }  
        }  
        return isValid.value;  
    };

    // updateField 函数用于更新特定字段的值，并在每次更新时立即验证那个字段。这使得用户的输入始终保持实时反馈。
    const updateField = (fieldName: string, value: string) => {  
        fields.value[fieldName] = value;  
        validateField(fieldName); // 每次更新时重新验证该字段  
    };

    return {  
        fields,  
        errors,  
        isValid,  
        validateForm,  
        updateField,  
    }; 

}
```

## 页面主题切换

```javascript
<template>  
    <div :class="theme" class="app">  
      <h1>日间/夜间主题切换</h1>  
      <p>当前主题: {{ theme }}</p>  
      <button @click="toggleTheme">切换主题</button>
    </div>  
  </template>  
  
  <script setup lang="ts">  
  import { ref } from 'vue';  
  
  const theme = ref('light');  
  
  const toggleTheme = () => {  
    theme.value = theme.value === 'light' ? 'dark' : 'light';  
  };  
  </script>  
  
  <style scoped>  
  .app {  
    text-align: center;  
    padding: 20px;  
  }  
  
  .light {  
    background-color: #f5f5f5;  
    color: #333;  
  }  
  
  .dark {  
    background-color: #333;  
    color: #f5f5f5;  
  }  
  </style>  
```

## 拓展一

```javascript
<template>
    <input type="text" v-model="textToCopy" />
    <button @click="copy(textToCopy)">{{ copied ? "Copied" : "Copy" }}</button>
    {{ text }}
  </template>
  
  <script setup lang="ts">
  import { ref } from "vue";
  import { useClipboard } from "@vueuse/core";
  
  const textToCopy = ref("Hello");
  const { copy, copied, text } = useClipboard({
    copiedDuring: 3000,
  });
  
  useClipboard({
    source: textToCopy,
  });
  </script>
```

## 拓展二

```javascript
<template>
    <div>
      <p>
        Supported: <BooleanDisplay :value="isSupported" />
      </p>
    </div>
  
    <div v-if="isSupported">
      <button @click="show()">
        Show Notification
      </button>
    </div>
    <div v-else>
      The Notification Web API is not supported in your browser.
    </div>
  </template>

<script setup lang="ts">
import type { UseWebNotificationOptions } from '@vueuse/core'
import { useWebNotification } from '@vueuse/core'

const options: UseWebNotificationOptions = {
  title: 'Hello, world from VueUse!',
  dir: 'auto',
  lang: 'en',
  renotify: true,
  tag: 'test',
}

const {
  isSupported,
  show,
} = useWebNotification(options)
</script>

```