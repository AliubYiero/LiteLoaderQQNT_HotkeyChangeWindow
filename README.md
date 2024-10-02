# Hotkey Change Window

> 通过快捷键快速跳转聊天窗口. 

---

**支持快捷键**

- `Alt + 数字键( 1 ~ 9 )`: 对应跳转到左侧窗口列表的第 n 个窗口, 只支持跳转前 9 个窗口. 
- `Alt + 键盘上键( ↑ )`: 跳转到当前窗口的**上一个**窗口. 
  - 如果在 *主列表* **第一个** 窗口使用, 会跳转到 **最后一个** 窗口. 
  - 如果在 *群助手* 列表内的 **第一个** 窗口, 会 **退出**  *群助手* 列表, 并进入 **主列表** 内 **群助手图标** 的**上一个**窗口. 
- `Alt + 键盘下键( ↓ )`: 跳转到当前窗口的**下一个**窗口. 
  - 如果在  *主列表* **最后一个** 窗口使用, 会跳转到 **第一个** 窗口. 
  - 如果在 *群助手* 列表内的 **最后一个** 窗口, 会 **退出**  *群助手* 列表, 并进入 **主列表** 内 **群助手图标** 的**下一个**窗口. 
- `Alt + 回退键( Backspace )`: 退出群助手. 



## 安装

下载最新的 `Release` 的 `LiteLoaderQQNT_HotkeyChangeWindow.zip` 文件，解压到 `LiteLoaderQQNT_HotkeyChangeWindow` 文件夹中, 放到 `插件目录[LiteLoaderQQNT\plugins\]` 中.  



## Build

> If you do not have `pnpm`, run: 

```
npm install -g pnpm 
```

> Clone project and run: 

```
pnpm install
```

> Change code, and build with **Monitor Mode**: 

```
npm run dev
```

> Change code and build: 

```
npm run build
```



## License

MIT
