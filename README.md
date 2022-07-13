# directory rule

**src/pages**

- components の page 内コンポーネントを import するだけに留め、この中で JSX を書くことは極力なくす

**src/components**

- layout (レイアウトに関する抱擁コンポーネント)
- model (何らかのモデル概念に依存したコンポーネント)
- page (ページコンポーネント)
- ui (汎用的なコンポーネント)

**その他**

- コンポーネントは container, presenter パターンを意識する
- pages 内は page extension の記法でロジックとページごとにファイルを分ける
- test ファイルと stories ファイルは各コンポーネントと同じディレクトリに配置
- FC/VFC は使わない
