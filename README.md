### Packages

- vite@2.2.3
- react@17.0.0
- dayjs@1.10.4

### dev

```bash
# install packages
yarn
# run dev
yarn dev
```

### 补充

#### Block缺省的数据（没有推算出计算方式）

- Confirmations
- Miner
- Difficulty
- Transaction Volume
- Block Reward

#### Transaction缺省的数据

- Fee列中weight相关数，例如 [(124.000 sat/B - 31.000 sat/WU - 223 bytes)]

### 发布blocklet到本地

```bash
# start abtnode service
abtnode init
# bundle blocklet
blocklet bundle
# deploy bundle
blocklet deploy .blocklet/bundle
```

### 注意

该blocklet使用vite构建，打包目录为`dist`，所以`blocklet.yml`配置文件中，`main`为`dist`，且`path`和`prefix`均为`'/'`

### 其他

- 该项目为静态项目，没有使用到后端，应为有接口可以直接获取数据，分页前端处理即可
