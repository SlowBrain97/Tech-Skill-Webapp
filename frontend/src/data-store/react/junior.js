export const reactJuniorQuestions = [
    {
        _id: "react-j-001",
        difficulty: "junior",
        tags: ["react", "hook", "useeffect", "lifecycle"],
        content: {
            en: {
                title: "How does `useEffect` relate to component lifecycle?",
                body: "Which class component lifecycle methods does `useEffect` with an empty dependency array (`[]`) replace?",
                solution: "It runs once after the initial render, functionally similar to `componentDidMount`."
            },
            jp: {
                title: "`useEffect`はコンポーネントのライフサイクルとどのように関連していますか？",
                body: "空の依存配列 (`[]`) を持つ `useEffect` は、どのクラスコンポーネントのライフサイクルメソッドを置き換えますか？",
                solution: "初期レンダリング後に一度実行され、機能的には `componentDidMount` に類似しています。"
            },
            vi: {
                title: "`useEffect` liên quan đến lifecycle component như thế nào?",
                body: "`useEffect` với mảng dependency rỗng (`[]`) thay thế cho những phương thức lifecycle component class nào?",
                solution: "Nó chạy một lần sau lần render ban đầu, chức năng tương tự như `componentDidMount`."
            }
        }
    },
    {
        _id: "react-j-002",
        difficulty: "junior",
        tags: ["react", "hook", "useeffect", "dependency"],
        content: {
            en: {
                title: "Explain the purpose of the `useEffect` dependency array.",
                body: "What happens when you include variables in the dependency array?",
                solution: "It tells React to re-run the effect only when the values of those variables (props or state) change between renders."
            }
        ,
            jp: {
                title: "`useEffect`の依存配列の目的を説明してください。",
                body: "依存配列に変数を含めるとどうなりますか？",
                solution: "それは、それらの変数（propsまたはstate）の値がレンダリング間で変更された場合にのみ、エフェクトを再実行するようにReactに指示します。"
            }
        ,
            vi: {
                title: "Giải thích mục đích của mảng dependency trong `useEffect`.",
                body: "Điều gì xảy ra khi bạn bao gồm các biến trong mảng dependency?",
                solution: "Nó báo cho React biết chỉ chạy lại effect khi giá trị của các biến đó (props hoặc state) thay đổi giữa các lần render."
            }
        }
    },
    {
        _id: "react-j-003",
        difficulty: "junior",
        tags: ["react", "component", "optimization", "memo"],
        content: {
            en: {
                title: "What is `React.memo` used for?",
                body: "What problem does `React.memo` solve in functional components?",
                solution: "It's a Higher-Order Component (HOC) used to optimize functional component performance by **preventing unnecessary re-renders** if props haven't changed."
            }
        ,
            jp: {
                title: "`React.memo`は何のために使用されますか？",
                body: "`React.memo`は関数コンポーネントでどのような問題を解決しますか？",
                solution: "これは、propsが変更されていない場合に**不要な再レンダリングを防ぐ**ことで、関数コンポーネントのパフォーマンスを最適化するために使用される高階コンポーネント（HOC）です。"
            }
        ,
            vi: {
                title: "`React.memo` được sử dụng để làm gì?",
                body: "`React.memo` giải quyết vấn đề gì trong các functional component?",
                solution: "Đây là một Higher-Order Component (HOC) được sử dụng để tối ưu hóa hiệu suất của functional component bằng cách **ngăn chặn re-render không cần thiết** nếu props không thay đổi."
            }
        }
    },
    {
        _id: "react-j-004",
        difficulty: "junior",
        tags: ["react", "state", "immutability", "array"],
        content: {
            en: {
                title: "How do you correctly update an array in React state?",
                body: "Should you use methods like `push()` or should you create a new array?",
                solution: "Always create a **new array** using methods like spread syntax (`...`), `map()`, or `filter()`. Direct mutation (e.g., `push()`) violates state immutability."
            }
        ,
            jp: {
                title: "Reactの状態にある配列を正しく更新するにはどうすればよいですか？",
                body: "`push()`のようなメソッドを使用すべきですか、それとも新しい配列を作成すべきですか？",
                solution: "スプレッド構文 (`...`)、`map()`、または `filter()` のようなメソッドを使用して、常に**新しい配列**を作成します。直接的なミューテーション（例: `push()`）は状態の不変性を侵害します。"
            }
        ,
            vi: {
                title: "Làm thế nào để cập nhật đúng một mảng trong state của React?",
                body: "Bạn có nên sử dụng các phương thức như `push()` hay nên tạo một mảng mới?",
                solution: "Luôn tạo một **mảng mới** bằng cách sử dụng các phương thức như spread syntax (`...`), `map()`, hoặc `filter()`. Thay đổi trực tiếp (ví dụ: `push()`) vi phạm tính bất biến của state."
            }
        }
    },
    {
        _id: "react-j-005",
        difficulty: "junior",
        tags: ["react", "hook", "useref", "dom"],
        content: {
            en: {
                title: "What is `useRef` used for in functional components?",
                body: "Name two common use cases for the `useRef` hook.",
                solution: "To access a **DOM element** directly (e.g., for focus, media playback), or to hold a **mutable value** that doesn't trigger a re-render when changed."
            }
        ,
            jp: {
                title: "関数コンポーネントで`useRef`は何のために使用されますか？",
                body: "`useRef`フックの一般的な使用例を2つ挙げてください。",
                solution: "DOM要素に直接アクセスするため（例: フォーカス、メディア再生）、または変更されても再レンダリングをトリガーしない**変更可能な値**を保持するためです。"
            }
        ,
            vi: {
                title: "`useRef` được sử dụng để làm gì trong các functional component?",
                body: "Nêu hai trường hợp sử dụng phổ biến của hook `useRef`.",
                solution: "Để truy cập trực tiếp một **phần tử DOM** (ví dụ: để focus, phát media), hoặc để giữ một **giá trị có thể thay đổi** mà không kích hoạt re-render khi thay đổi."
            }
        }
    },
    {
        _id: "react-j-006",
        difficulty: "junior",
        tags: ["react", "optimization", "callback", "hook"],
        content: {
            en: {
                title: "What problem does `useCallback` hook solve?",
                body: "When should you wrap a function in `useCallback`?",
                solution: "It prevents unnecessary re-creation of function instances on every render, which is crucial when passing callbacks as props to **optimized (memoized) child components**."
            }
        ,
            jp: {
                title: "`useCallback`フックはどのような問題を解決しますか？",
                body: "関数を`useCallback`でラップすべきなのはいつですか？",
                solution: "レンダリングごとに不必要な関数インスタンスの再作成を防ぎます。これは、最適化された（メモ化された）子コンポーネントにコールバックをpropsとして渡す場合に不可欠です。"
            }
        ,
            vi: {
                title: "Hook `useCallback` giải quyết vấn đề gì?",
                body: "Bạn nên bọc một hàm trong `useCallback` khi nào?",
                solution: "Nó ngăn chặn việc tạo lại các instance hàm không cần thiết trong mỗi lần render, điều này rất quan trọng khi truyền các callback dưới dạng props cho các **component con đã được tối ưu hóa (memoized)**."
            }
        }
    },
    {
        _id: "react-j-007",
        difficulty: "junior",
        tags: ["react", "optimization", "memo", "value", "hook"],
        content: {
            en: {
                title: "What is the primary use case for the `useMemo` hook?",
                body: "What kind of values should you memoize using `useMemo`?",
                solution: "To **memoize the result of an expensive calculation**. It only re-calculates the value when one of its dependencies changes, avoiding re-calculation on every render."
            }
        ,
            jp: {
                title: "`useMemo`フックの主な使用例は何ですか？",
                body: "`useMemo`を使用してメモ化すべき値はどのような種類ですか？",
                solution: "**高価な計算の結果をメモ化**するためです。依存関係のいずれかが変更された場合にのみ値を再計算し、レンダリングごとの再計算を回避します。"
            }
        ,
            vi: {
                title: "Trường hợp sử dụng chính của hook `useMemo` là gì?",
                body: "Bạn nên memoize loại giá trị nào khi sử dụng `useMemo`?",
                solution: "Để **memoize kết quả của một phép tính tốn kém**. Nó chỉ tính toán lại giá trị khi một trong các dependencies của nó thay đổi, tránh tính toán lại trong mỗi lần render."
            }
        }
    },
    {
        _id: "react-j-008",
        difficulty: "junior",
        tags: ["react", "fragment", "jsx", "dom"],
        content: {
            en: {
                title: "What is a React Fragment (`<>...</>`)?",
                body: "What is the benefit of using Fragments over a redundant `<div>`?",
                solution: "It allows a component to return multiple elements without adding an extra unnecessary node to the DOM tree, avoiding DOM pollution."
            }
        ,
            jp: {
                title: "React Fragment (`<>...</>`) とは何ですか？",
                body: "冗長な `<div>` の代わりに Fragment を使用する利点は何ですか？",
                solution: "DOMツリーに余分な不要なノードを追加せずに、コンポーネントが複数の要素を返すことを可能にし、DOMの汚染を回避します。"
            }
        ,
            vi: {
                title: "React Fragment (`<>...</>`) là gì?",
                body: "Lợi ích của việc sử dụng Fragment so với việc dùng một thẻ `<div>` dư thừa là gì?",
                solution: "Nó cho phép một component trả về nhiều phần tử mà không cần thêm một node không cần thiết vào cây DOM, tránh làm ô nhiễm DOM."
            }
        }
    },
    {
        _id: "react-j-009",
        difficulty: "junior",
        tags: ["react", "custom hook", "reusability"],
        content: {
            en: {
                title: "What is a Custom Hook in React?",
                body: "What problem do Custom Hooks help solve, and what is the naming convention?",
                solution: "A JavaScript function whose name starts with **`use`** (e.g., `useFetch`). They allow you to reuse stateful logic (like managing state or effects) across different components."
            }
        ,
            jp: {
                title: "Reactのカスタムフックとは何ですか？",
                body: "カスタムフックはどのような問題の解決に役立ち、命名規則は何ですか？",
                solution: "名前が**`use`**で始まるJavaScript関数（例: `useFetch`）です。状態を持つロジック（状態やエフェクトの管理など）を異なるコンポーネント間で再利用できるようにします。"
            }
        ,
            vi: {
                title: "Custom Hook trong React là gì?",
                body: "Custom Hook giúp giải quyết vấn đề gì, và quy ước đặt tên của nó là gì?",
                solution: "Là một hàm JavaScript có tên bắt đầu bằng **`use`** (ví dụ: `useFetch`). Chúng cho phép bạn tái sử dụng logic có state (như quản lý state hoặc effects) giữa các component khác nhau."
            }
        }
    },
    {
        _id: "react-j-010",
        difficulty: "junior",
        tags: ["react", "component", "hoc"],
        content: {
            en: {
                title: "What is a Higher-Order Component (HOC)?",
                body: "Describe the pattern of a HOC.",
                solution: "A function that takes a component as an argument and returns a new component with enhanced functionality (e.g., adding a loading spinner or providing data)."
            }
        ,
            jp: {
                title: "高階コンポーネント（HOC）とは何ですか？",
                body: "HOCのパターンを説明してください。",
                solution: "コンポーネントを引数として受け取り、機能が強化された新しいコンポーネントを返す関数です（例: ローディングスピナーの追加やデータの提供）。"
            }
        ,
            vi: {
                title: "Higher-Order Component (HOC) là gì?",
                body: "Mô tả pattern của một HOC.",
                solution: "Là một hàm nhận một component làm đối số và trả về một component mới với chức năng được nâng cao (ví dụ: thêm loading spinner hoặc cung cấp dữ liệu)."
            }
        }
    },
    {
        _id: "react-j-011",
        difficulty: "junior",
        tags: ["react", "context", "state management"],
        content: {
            en: {
                title: "What is React Context and when should you use it?",
                body: "What problem does Context API primarily solve?",
                solution: "It provides a way to pass data through the component tree without having to manually pass props down at every level (solving **props drilling**). Best used for global state like themes or user authentication."
            }
        ,
            jp: {
                title: "React Contextとは何ですか、そしていつそれを使用すべきですか？",
                body: "Context APIが主に解決する問題は何ですか？",
                solution: "コンポーネントツリーを通じて、手動でプロパティをすべてのレベルで渡すことなくデータを渡す方法を提供します（**props drilling**を解決します）。テーマやユーザー認証などのグローバル状態に最適です。"
            }
        ,
            vi: {
                title: "React Context là gì và khi nào bạn nên sử dụng nó?",
                body: "Context API chủ yếu giải quyết vấn đề gì?",
                solution: "Nó cung cấp một cách để truyền dữ liệu qua cây component mà không cần phải tự mình truyền props xuống ở mọi cấp độ (giải quyết **props drilling**). Tốt nhất nên dùng cho các state toàn cục như theme hoặc thông tin xác thực người dùng."
            }
        }
    },
    {
        _id: "react-j-012",
        difficulty: "junior",
        tags: ["react", "context", "provider", "consumer"],
        content: {
            en: {
                title: "What are the two main components needed to implement React Context?",
                body: "Name the two key elements that make up the Context API.",
                solution: "The **Provider** (which provides the value) and the **Consumer** (which reads the value, often accessed via the `useContext` hook)."
            }
        ,
            jp: {
                title: "React Contextを実装するために必要な主要な2つのコンポーネントは何ですか？",
                body: "Context APIを構成する2つの主要な要素の名前を挙げてください。",
                solution: "The **Provider** (値を提供する) と the **Consumer** (値を読み取る、しばしば `useContext` フックを介してアクセスされる) です。"
            }
        ,
            vi: {
                title: "Hai thành phần chính cần thiết để triển khai React Context là gì?",
                body: "Nêu tên hai yếu tố chính tạo nên Context API.",
                solution: "The **Provider** (cung cấp giá trị) và the **Consumer** (đọc giá trị, thường được truy cập thông qua hook `useContext`)."
            }
        }
    },
    {
        _id: "react-j-013",
        difficulty: "junior",
        tags: ["react", "router", "spa"],
        content: {
            en: {
                title: "How does client-side routing (like React Router) differ from traditional server-side routing?",
                body: "What makes SPA routing feel faster to the user?",
                solution: "Client-side routing loads the entire application structure once, then dynamically updates the view by manipulating the browser's history and URL without causing a full page refresh."
            }
        ,
            jp: {
                title: "クライアントサイドルーティング（React Routerなど）は、従来のサーバーサイドルーティングとどのように異なりますか？",
                body: "SPAルーティングがユーザーにとってより速く感じるのはなぜですか？",
                solution: "クライアントサイドルーティングはアプリケーション構造全体を一度ロードし、その後、完全なページリフレッシュを引き起こすことなく、ブラウザの履歴とURLを操作することでビューを動的に更新します。"
            }
        ,
            vi: {
                title: "Routing phía client (như React Router) khác gì so với routing phía server truyền thống?",
                body: "Điều gì làm cho routing của SPA có cảm giác nhanh hơn đối với người dùng?",
                solution: "Routing phía client tải toàn bộ cấu trúc ứng dụng một lần, sau đó cập nhật động view bằng cách thao túng lịch sử và URL của trình duyệt mà không gây ra tải lại trang hoàn toàn."
            }
        }
    },
    {
        _id: "react-j-014",
        difficulty: "junior",
        tags: ["react", "hook", "usestate", "async"],
        content: {
            en: {
                title: "Is state updating via `useState` synchronous or asynchronous?",
                body: "Why does React not guarantee immediate state updates?",
                solution: "State updating is **asynchronous** (React batches updates). This is for performance optimization, allowing multiple updates to be processed together before a single re-render."
            }
        ,
            jp: {
                title: "`useState`を介した状態の更新は同期ですか、それとも非同期ですか？",
                body: "Reactが即時の状態更新を保証しないのはなぜですか？",
                solution: "状態の更新は**非同期**です（Reactは更新をバッチ処理します）。これは、パフォーマンスの最適化のためであり、単一の再レンダリングの前に複数の更新をまとめて処理できるようにするためです。"
            }
        ,
            vi: {
                title: "Việc cập nhật state thông qua `useState` là đồng bộ hay bất đồng bộ?",
                body: "Tại sao React không đảm bảo cập nhật state ngay lập tức?",
                solution: "Cập nhật state là **bất đồng bộ** (React gom các cập nhật lại). Điều này là để tối ưu hóa hiệu suất, cho phép nhiều cập nhật được xử lý cùng nhau trước một lần re-render duy nhất."
            }
        }
    },
    {
        _id: "react-j-015",
        difficulty: "junior",
        tags: ["react", "testing", "unit"],
        content: {
            en: {
                title: "What is 'unit testing' in the context of React?",
                body: "What is the smallest unit typically tested in a React application?",
                solution: "It involves testing the smallest isolated parts of the application, usually individual functions or a single React component, to ensure they work as expected."
            }
        ,
            jp: {
                title: "Reactの文脈での「ユニットテスト」とは何ですか？",
                body: "Reactアプリケーションで通常テストされる最小の単位は何ですか？",
                solution: "アプリケーションの最小限に分離された部分、通常は個々の関数または単一のReactコンポーネントをテストし、期待どおりに機能することを確認することを含みます。"
            }
        ,
            vi: {
                title: "'Unit testing' trong bối cảnh React là gì?",
                body: "Đơn vị nhỏ nhất thường được kiểm thử trong một ứng dụng React là gì?",
                solution: "Nó liên quan đến việc kiểm thử các phần cô lập nhỏ nhất của ứng dụng, thường là các hàm riêng lẻ hoặc một component React duy nhất, để đảm bảo chúng hoạt động như mong đợi."
            }
        }
    },
    {
        _id: "react-j-016",
        difficulty: "junior",
        tags: ["react", "state", "lifting", "data flow"],
        content: {
            en: {
                title: "What does 'Lifting State Up' mean?",
                body: "How do you share state between two sibling components that need to be in sync?",
                solution: "It means moving the shared state from the two components up to their closest **common ancestor** component, and then passing it down as props."
            }
        ,
            jp: {
                title: "「Lifting State Up」（状態の持ち上げ）とはどういう意味ですか？",
                body: "同期させる必要がある2つの兄弟コンポーネント間で状態を共有するにはどうすればよいですか？",
                solution: "それは、共有された状態を2つのコンポーネントからそれらの最も近い**共通の祖先**コンポーネントに移動し、その後それをpropsとして渡すことを意味します。"
            }
        ,
            vi: {
                title: "'Lifting State Up' có nghĩa là gì?",
                body: "Làm thế nào để chia sẻ state giữa hai component ngang cấp cần đồng bộ với nhau?",
                solution: "Nó có nghĩa là chuyển state được chia sẻ từ hai component lên component **tổ tiên chung** gần nhất của chúng, và sau đó truyền nó xuống dưới dưới dạng props."
            }
        }
    },
    {
        _id: "react-j-017",
        difficulty: "junior",
        tags: ["react", "virtual dom", "reconciliation"],
        content: {
            en: {
                title: "What is 'Reconciliation' in React?",
                body: "What does React's reconciliation process involve?",
                solution: "It's the process where React determines which parts of the actual DOM need to be updated. It compares the new Virtual DOM tree with the previous one (diffing) to find the minimal set of changes."
            }
        ,
            jp: {
                title: "Reactにおける「Reconciliation」（調整）とは何ですか？",
                body: "ReactのReconciliationプロセスには何が含まれますか？",
                solution: "これは、実際のDOMのどの部分を更新する必要があるかをReactが決定するプロセスです。新しいVirtual DOMツリーを以前のものと比較し（差分検出）、最小限の変更セットを見つけます。"
            }
        ,
            vi: {
                title: "'Reconciliation' trong React là gì?",
                body: "Quá trình reconciliation của React bao gồm những gì?",
                solution: "Đây là quá trình React xác định những phần nào của DOM thực tế cần được cập nhật. Nó so sánh cây Virtual DOM mới với cây trước đó (diffing) để tìm ra tập hợp thay đổi tối thiểu."
            }
        }
    },
    {
        _id: "react-j-018",
        difficulty: "junior",
        tags: ["react", "hook", "usereducer", "usestate"],
        content: {
            en: {
                title: "When should you prefer `useReducer` over `useState`?",
                body: "Name a scenario where `useReducer` is a better fit.",
                solution: "When the state logic is **complex** (involving multiple sub-values) or when the next state depends on the previous one, or when you need to share state logic between components."
            }
        ,
            jp: {
                title: "`useState`よりも`useReducer`を優先すべきなのはいつですか？",
                body: "`useReducer`がより適しているシナリオを挙げてください。",
                solution: "状態ロジックが**複雑**な場合（複数のサブ値を含む）、または次の状態が前の状態に依存する場合、あるいはコンポーネント間で状態ロジックを共有する必要がある場合です。"
            }
        ,
            vi: {
                title: "Khi nào bạn nên ưu tiên `useReducer` hơn `useState`?",
                body: "Nêu một kịch bản mà `useReducer` phù hợp hơn.",
                solution: "Khi logic state **phức tạp** (liên quan đến nhiều giá trị con) hoặc khi state tiếp theo phụ thuộc vào state trước đó, hoặc khi bạn cần chia sẻ logic state giữa các component."
            }
        }
    },
    {
        _id: "react-j-019",
        difficulty: "junior",
        tags: ["react", "typescript", "props", "type checking"],
        content: {
            en: {
                title: "How do you define the types for `props` in a TypeScript React functional component?",
                body: "What is the standard syntax for annotating the props object?",
                solution: "By using a TypeScript interface or type alias and passing it as a generic argument to `React.FC` (or directly to the function signature), e.g., `const MyComponent: React.FC<Props> = ({ prop1 }) => ...`"
            }
        ,
            jp: {
                title: "TypeScript React関数コンポーネントで`props`の型をどのように定義しますか？",
                body: "propsオブジェクトに注釈を付けるための標準的な構文は何ですか？",
                solution: "TypeScriptのインターフェースまたは型エイリアスを使用し、それをジェネリック引数として `React.FC` に渡します（または関数シグネチャに直接渡します）。例: `const MyComponent: React.FC<Props> = ({ prop1 }) => ...`"
            }
        ,
            vi: {
                title: "Làm thế nào để định nghĩa kiểu dữ liệu cho `props` trong một functional component React sử dụng TypeScript?",
                body: "Cú pháp chuẩn để chú thích đối tượng props là gì?",
                solution: "Bằng cách sử dụng một interface hoặc type alias của TypeScript và truyền nó làm đối số generic cho `React.FC` (hoặc trực tiếp vào chữ ký hàm), ví dụ: `const MyComponent: React.FC<Props> = ({ prop1 }) => ...`"
            }
        }
    },
    {
        _id: "react-j-020",
        difficulty: "junior",
        tags: ["react", "component", "render", "return"],
        content: {
            en: {
                title: "What does it mean if a component returns `null`?",
                body: "What effect does returning `null` have on the component's output?",
                solution: "The component will render **nothing** (neither its own output nor its children's output) and its lifecycle methods/hooks (except cleanup) will not run for that render."
            }
        ,
            jp: {
                title: "コンポーネントが`null`を返すとはどういう意味ですか？",
                body: "`null`を返すことはコンポーネントの出力にどのような影響を与えますか？",
                solution: "コンポーネントは**何も**レンダリングせず（自身の出力も子どもの出力も）、そのライフサイクルメソッド/フック（クリーンアップを除く）はそのレンダリングでは実行されません。"
            }
        ,
            vi: {
                title: "Điều gì xảy ra nếu một component trả về `null`?",
                body: "Việc trả về `null` có tác động gì đến output của component?",
                solution: "Component sẽ **không hiển thị gì cả** (cả output của chính nó và output của con nó) và các phương thức lifecycle/hooks của nó (trừ cleanup) sẽ không chạy cho lần render đó."
            }
        }
    },
    {
        _id: "react-j-021",
        difficulty: "junior",
        tags: ["react", "state", "immutability", "object"],
        content: {
            en: {
                title: "How do you correctly update an object that is stored in state?",
                body: "Why must you create a new object when updating state?",
                solution: "Create a **new object** (e.g., using the spread operator: `{ ...prevState, newProp: value }`). This is required because React checks for changes by comparing object references, not content."
            }
        ,
            jp: {
                title: "状態に格納されているオブジェクトを正しく更新するにはどうすればよいですか？",
                body: "状態を更新するときに新しいオブジェクトを作成する必要があるのはなぜですか？",
                solution: "**新しいオブジェクト**を作成します（例: スプレッド演算子を使用: `{ ...prevState, newProp: value }`）。これは、Reactがオブジェクトのコンテンツではなく参照を比較して変更を確認するためです。"
            }
        ,
            vi: {
                title: "Làm thế nào để cập nhật đúng một đối tượng được lưu trữ trong state?",
                body: "Tại sao bạn phải tạo một đối tượng mới khi cập nhật state?",
                solution: "Tạo một **đối tượng mới** (ví dụ: sử dụng spread operator: `{ ...prevState, newProp: value }`). Điều này là cần thiết vì React kiểm tra các thay đổi bằng cách so sánh tham chiếu đối tượng, chứ không phải nội dung."
            }
        }
    },
    {
        _id: "react-j-022",
        difficulty: "junior",
        tags: ["react", "hook", "useeffect", "fetch"],
        content: {
            en: {
                title: "How do you handle asynchronous operations (like data fetching) inside `useEffect`?",
                body: "Can the effect function itself be `async`?",
                solution: "The effect function cannot be `async`. You must define an **inner asynchronous function** and call it immediately inside the effect (or use a `.then()` approach)."
            }
        ,
            jp: {
                title: "`useEffect`内で非同期操作（データ取得など）をどのように処理しますか？",
                body: "エフェクト関数自体は`async`にできますか？",
                solution: "エフェクト関数は`async`にできません。エフェクト内で**内部の非同期関数**を定義し、それをすぐに呼び出す必要があります（または`.then()`アプローチを使用します）。"
            }
        ,
            vi: {
                title: "Bạn xử lý các thao tác bất đồng bộ (như tìm nạp dữ liệu) bên trong `useEffect` như thế nào?",
                body: "Bản thân hàm effect có thể là `async` không?",
                solution: "Hàm effect không thể là `async`. Bạn phải định nghĩa một **hàm bất đồng bộ bên trong** và gọi nó ngay lập tức bên trong effect (hoặc sử dụng phương pháp `.then()`)."
            }
        }
    },
    {
        _id: "react-j-023",
        difficulty: "junior",
        tags: ["react", "performance", "keys", "list"],
        content: {
            en: {
                title: "Why is using the array index as a key often discouraged in lists?",
                body: "Under what conditions does using the index as a key cause issues?",
                solution: "It causes issues when the **list order changes** (e.g., adding, deleting, or reordering items). React loses track of the identity of each item, leading to potential bugs and performance issues."
            }
        ,
            jp: {
                title: "配列のインデックスをリストのキーとして使用することが推奨されないことが多いのはなぜですか？",
                body: "インデックスをキーとして使用すると、どのような条件下で問題が発生しますか？",
                solution: "**リストの順序が変更される**場合（例: アイテムの追加、削除、または並べ替え）に問題が発生します。Reactは各アイテムのIDを追跡できなくなり、潜在的なバグやパフォーマンスの問題につながります。"
            }
        ,
            vi: {
                title: "Tại sao việc sử dụng index của mảng làm key trong danh sách thường không được khuyến khích?",
                body: "Việc sử dụng index làm key gây ra sự cố trong điều kiện nào?",
                solution: "Nó gây ra sự cố khi **thứ tự danh sách thay đổi** (ví dụ: thêm, xóa, hoặc sắp xếp lại các mục). React mất khả năng theo dõi danh tính của từng mục, dẫn đến các lỗi tiềm ẩn và vấn đề về hiệu suất."
            }
        }
    },
    {
        _id: "react-j-024",
        difficulty: "junior",
        tags: ["react", "portals", "dom"],
        content: {
            en: {
                title: "What is a React Portal?",
                body: "When would you use a Portal instead of standard rendering?",
                solution: "A way to render children into a **different DOM node** that exists outside the parent component's DOM hierarchy. Often used for modals, tooltips, or popovers to avoid styling issues related to z-index or overflow."
            }
        ,
            jp: {
                title: "React Portalとは何ですか？",
                body: "標準のレンダリングの代わりにPortalを使用するのはいつですか？",
                solution: "子を親コンポーネントのDOM階層の外にある**別のDOMノード**にレンダリングする方法です。z-indexやoverflowに関連するスタイリングの問題を避けるために、モーダル、ツールチップ、またはポップオーバーによく使用されます。"
            }
        ,
            vi: {
                title: "React Portal là gì?",
                body: "Khi nào bạn sử dụng Portal thay vì rendering tiêu chuẩn?",
                solution: "Là một cách để hiển thị các phần tử con vào một **node DOM khác** nằm ngoài hệ thống phân cấp DOM của component cha. Thường được sử dụng cho modal, tooltip hoặc popover để tránh các vấn đề về styling liên quan đến z-index hoặc overflow."
            }
        }
    },
    {
        _id: "react-j-025",
        difficulty: "junior",
        tags: ["react", "error boundary", "component"],
        content: {
            en: {
                title: "What is an Error Boundary in React?",
                body: "What part of the UI can an Error Boundary catch errors from?",
                solution: "A class component that defines `static getDerivedStateFromError()` or `componentDidCatch()`. It catches JavaScript errors **in its children component tree** during rendering, in lifecycle methods, and in constructors."
            }
        ,
            jp: {
                title: "Reactのエラー境界（Error Boundary）とは何ですか？",
                body: "エラー境界は、UIのどの部分からのエラーをキャッチできますか？",
                solution: "`static getDerivedStateFromError()` または `componentDidCatch()` を定義するクラスコンポーネントです。レンダリング中、ライフサイクルメソッド内、およびコンストラクター内の**子コンポーネントツリー**でのJavaScriptエラーをキャッチします。"
            }
        ,
            vi: {
                title: "Error Boundary trong React là gì?",
                body: "Error Boundary có thể bắt lỗi từ phần nào của UI?",
                solution: "Là một class component định nghĩa `static getDerivedStateFromError()` hoặc `componentDidCatch()`. Nó bắt các lỗi JavaScript **trong cây component con của nó** trong quá trình render, trong các phương thức lifecycle và trong các constructor."
            }
        }
    },
    {
        _id: "react-j-026",
        difficulty: "junior",
        tags: ["react", "hook", "usereducer", "dispatch"],
        content: {
            en: {
                title: "What is the role of the `dispatch` function returned by `useReducer`?",
                body: "How does `dispatch` trigger a state change?",
                solution: "The `dispatch` function is used to send an **action** object to the reducer function. The reducer then calculates the next state based on the current state and the action."
            }
        ,
            jp: {
                title: "`useReducer`によって返される`dispatch`関数の役割は何ですか？",
                body: "`dispatch`はどのように状態変更をトリガーしますか？",
                solution: "`dispatch`関数は、**アクション**オブジェクトをリデューサー関数に送信するために使用されます。その後、リデューサーは現在の状態とアクションに基づいて次の状態を計算します。"
            }
        ,
            vi: {
                title: "Vai trò của hàm `dispatch` được trả về bởi `useReducer` là gì?",
                body: "`dispatch` kích hoạt thay đổi state như thế nào?",
                solution: "Hàm `dispatch` được sử dụng để gửi một đối tượng **action** đến hàm reducer. Sau đó, reducer tính toán state tiếp theo dựa trên state hiện tại và action."
            }
        }
    },
    {
        _id: "react-j-027",
        difficulty: "junior",
        tags: ["react", "controlled component", "state"],
        content: {
            en: {
                title: "In a controlled component, what two attributes must be set on the input element?",
                body: "These attributes ensure React manages the input's state.",
                solution: "The **`value`** attribute (set to the state variable) and the **`onChange`** attribute (set to the event handler that updates the state)."
            }
        ,
            jp: {
                title: "制御されたコンポーネントでは、入力要素に設定する必要がある2つの属性は何ですか？",
                body: "これらの属性は、Reactが入力の状態を管理することを保証します。",
                solution: "**`value`** 属性（状態変数に設定される）と **`onChange`** 属性（状態を更新するイベントハンドラーに設定される）です。"
            }
        ,
            vi: {
                title: "Trong một controlled component, hai thuộc tính nào phải được đặt trên phần tử input?",
                body: "Các thuộc tính này đảm bảo React quản lý state của input.",
                solution: "Thuộc tính **`value`** (được đặt thành biến state) và thuộc tính **`onChange`** (được đặt thành trình xử lý sự kiện cập nhật state)."
            }
        }
    },
    {
        _id: "react-j-028",
        difficulty: "junior",
        tags: ["react", "hook", "useref", "mutation"],
        content: {
            en: {
                title: "Can `useRef` be used to store a value that *is* used for rendering?",
                body: "Why is this usage discouraged compared to `useState`?",
                solution: "No, because changing a ref's value **does not trigger a re-render**. If the value affects the UI, it must be stored in state (`useState`) to ensure updates are reflected."
            }
        ,
            jp: {
                title: "`useRef`をレンダリングに*使用される*値を格納するために使用できますか？",
                body: "この使用法が`useState`と比較して推奨されないのはなぜですか？",
                solution: "いいえ、refの値の変更は**再レンダリングをトリガーしない**ためです。値がUIに影響を与える場合は、更新が反映されるように状態（`useState`）に格納する必要があります。"
            }
        ,
            vi: {
                title: "`useRef` có thể được sử dụng để lưu trữ một giá trị *được* sử dụng cho việc rendering không?",
                body: "Tại sao việc sử dụng này không được khuyến khích so với `useState`?",
                solution: "Không, vì việc thay đổi giá trị của ref **không kích hoạt re-render**. Nếu giá trị ảnh hưởng đến UI, nó phải được lưu trữ trong state (`useState`) để đảm bảo các cập nhật được phản ánh."
            }
        }
    },
    {
        _id: "react-j-029",
        difficulty: "junior",
        tags: ["react", "jsx", "styling", "css"],
        content: {
            en: {
                title: "How do you import and use a local CSS file in a React functional component?",
                body: "Provide the import syntax and how a class is applied to a JSX element.",
                solution: "Use the `import './MyStyles.css';` syntax at the top of the component file, and apply the class using the `className` attribute: `<div className='my-class'>...</div>`."
            }
        ,
            jp: {
                title: "React関数コンポーネントでローカルCSSファイルをインポートして使用するにはどうすればよいですか？",
                body: "インポート構文と、クラスをJSX要素に適用する方法を提供してください。",
                solution: "コンポーネントファイルの先頭で `import './MyStyles.css';` 構文を使用し、`className` 属性を使用してクラスを適用します: `<div className='my-class'>...</div>`。"
            }
        ,
            vi: {
                title: "Làm thế nào để import và sử dụng một file CSS cục bộ trong một functional component React?",
                body: "Cung cấp cú pháp import và cách áp dụng một class cho một phần tử JSX.",
                solution: "Sử dụng cú pháp `import './MyStyles.css';` ở đầu file component, và áp dụng class bằng thuộc tính `className`: `<div className='my-class'>...</div>`."
            }
        }
    },
    {
        _id: "react-j-030",
        difficulty: "junior",
        tags: ["react", "hoc", "render props", "pattern"],
        content: {
            en: {
                title: "What is the 'Render Props' pattern?",
                body: "How does the Render Props pattern achieve code sharing?",
                solution: "It's a technique where a component shares code/state with others by using a prop that is a **function** (the 'render prop'). The consuming component calls this function to render content."
            }
        ,
            jp: {
                title: "「Render Props」パターンとは何ですか？",
                body: "Render Propsパターンはどのようにコード共有を実現しますか？",
                solution: "これは、**関数**であるprops（「render prop」）を使用して、コンポーネントがコード/状態を他のコンポーネントと共有する手法です。利用するコンポーネントはこの関数を呼び出してコンテンツをレンダリングします。"
            }
        ,
            vi: {
                title: "Pattern 'Render Props' là gì?",
                body: "Pattern Render Props đạt được việc chia sẻ mã như thế nào?",
                solution: "Đây là một kỹ thuật mà một component chia sẻ mã/state với các component khác bằng cách sử dụng một prop là **một hàm** ('render prop'). Component tiêu thụ gọi hàm này để hiển thị nội dung."
            }
        }
    },
    {
        _id: "react-j-031",
        difficulty: "junior",
        tags: ["react", "usestate", "updater", "state"],
        content: {
            en: {
                title: "When using the state updater function (e.g., `setCount(prev => prev + 1)`), what does React guarantee about the `prev` state value?",
                body: "What is the key benefit of using the updater function form?",
                solution: "It guarantees that `prev` is the **latest state value** at the time the update is applied, avoiding stale closure issues when batching occurs or updates are asynchronous."
            }
        ,
            jp: {
                title: "状態アップデーター関数（例: `setCount(prev => prev + 1)`）を使用する場合、Reactは`prev`状態値について何を保証しますか？",
                body: "アップデーター関数形式を使用する主な利点は何ですか？",
                solution: "更新が適用される時点で`prev`が**最新の状態値**であることを保証し、バッチ処理が発生したり更新が非同期であったりする場合の陳腐なクロージャの問題を回避します。"
            }
        ,
            vi: {
                title: "Khi sử dụng hàm cập nhật state (ví dụ: `setCount(prev => prev + 1)`), React đảm bảo điều gì về giá trị state `prev`?",
                body: "Lợi ích chính của việc sử dụng dạng hàm updater là gì?",
                solution: "Nó đảm bảo rằng `prev` là **giá trị state mới nhất** tại thời điểm cập nhật được áp dụng, tránh các vấn đề về stale closure khi việc gom nhóm (batching) xảy ra hoặc các cập nhật là bất đồng bộ."
            }
        }
    },
    {
        _id: "react-j-032",
        difficulty: "junior",
        tags: ["react", "testing", "rtl", "user"],
        content: {
            en: {
                title: "What is the core philosophy of React Testing Library (RTL)?",
                body: "What does RTL encourage testing instead of implementation details?",
                solution: "It encourages testing component usage by users: 'The more your tests resemble the way your software is used, the more confidence they can give you.'"
            }
        ,
            jp: {
                title: "React Testing Library (RTL) の核となる哲学は何ですか？",
                body: "RTLは実装の詳細の代わりに何をテストすることを奨励していますか？",
                solution: "ユーザーによるコンポーネントの使用方法をテストすることを奨励しています。「あなたのテストがソフトウェアの使用方法に似ているほど、それらはあなたにより多くの自信を与えることができます」。"
            }
        ,
            vi: {
                title: "Triết lý cốt lõi của React Testing Library (RTL) là gì?",
                body: "RTL khuyến khích kiểm thử điều gì thay vì các chi tiết triển khai?",
                solution: "Nó khuyến khích kiểm thử cách người dùng sử dụng component: 'Các bài kiểm thử của bạn càng giống với cách phần mềm của bạn được sử dụng, chúng càng mang lại cho bạn sự tự tin.'"
            }
        }
    },
    {
        _id: "react-j-033",
        difficulty: "junior",
        tags: ["react", "typescript", "children", "props"],
        content: {
            en: {
                title: "How do you correctly type the `children` prop in a TypeScript React component?",
                body: "What type should be used for the `children` property?",
                solution: "The most common types are `React.ReactNode` (for any valid JSX element, string, or number) or `JSX.Element` (for a single React element)."
            }
        ,
            jp: {
                title: "TypeScript Reactコンポーネントで`children` propsを正しく型付けするにはどうすればよいですか？",
                body: "`children`プロパティに使用すべき型は何ですか？",
                solution: "最も一般的な型は `React.ReactNode` （任意の有効なJSX要素、文字列、または数値用）または `JSX.Element` （単一のReact要素用）です。"
            }
        ,
            vi: {
                title: "Làm thế nào để gán kiểu đúng cho prop `children` trong một component React sử dụng TypeScript?",
                body: "Kiểu dữ liệu nào nên được sử dụng cho thuộc tính `children`?",
                solution: "Các kiểu phổ biến nhất là `React.ReactNode` (cho bất kỳ phần tử JSX hợp lệ, chuỗi hoặc số nào) hoặc `JSX.Element` (cho một phần tử React duy nhất)."
            }
        }
    },
    {
        _id: "react-j-034",
        difficulty: "junior",
        tags: ["react", "conditional rendering", "short circuit"],
        content: {
            en: {
                title: "Explain the use of the Logical AND operator (`&&`) for conditional rendering in JSX.",
                body: "Why is this operator effective for rendering an element when a condition is true?",
                solution: "If the condition (the left operand) is `true`, the operator evaluates and returns the element (the right operand), which React then renders. If the condition is `false`, the operator short-circuits and returns `false`, rendering nothing."
            }
        ,
            jp: {
                title: "JSXでの条件付きレンダリングのための論理AND演算子 (`&&`) の使用法を説明してください。",
                body: "この演算子が条件が真の場合に要素をレンダリングするのに効果的なのはなぜですか？",
                solution: "条件（左オペランド）が `true` の場合、演算子は要素（右オペランド）を評価して返し、Reactがそれをレンダリングします。条件が `false` の場合、演算子はショートサーキットし、`false`を返し、何もレンダリングしません。"
            }
        ,
            vi: {
                title: "Giải thích việc sử dụng toán tử Logical AND (`&&`) cho việc conditional rendering trong JSX.",
                body: "Tại sao toán tử này hiệu quả cho việc hiển thị một phần tử khi một điều kiện là đúng?",
                solution: "Nếu điều kiện (toán hạng bên trái) là `true`, toán tử sẽ đánh giá và trả về phần tử (toán hạng bên phải), mà React sau đó sẽ hiển thị. Nếu điều kiện là `false`, toán tử sẽ short-circuit và trả về `false`, không hiển thị gì."
            }
        }
    },
    {
        _id: "react-j-035",
        difficulty: "junior",
        tags: ["react", "hook", "usecontext", "optimization"],
        content: {
            en: {
                title: "When using `useContext`, what triggers a component re-render?",
                body: "What state change within the Context Provider will cause all consuming components to re-render?",
                solution: "A component consuming context will re-render **every time the context value changes**, even if the part of the value it uses remains the same. This can lead to unnecessary re-renders (a potential drawback of Context)."
            }
        ,
            jp: {
                title: "`useContext`を使用する場合、何がコンポーネントの再レンダリングをトリガーしますか？",
                body: "Context Provider内のどの状態変更が、すべてのコンポーネントに再レンダリングを引き起こしますか？",
                solution: "コンテキストを使用するコンポーネントは、**コンテキスト値が変更されるたびに**再レンダリングされます。使用している値の一部が同じままであっても再レンダリングされます。これは不必要な再レンダリングにつながる可能性があります（Contextの潜在的な欠点）。"
            }
        ,
            vi: {
                title: "Khi sử dụng `useContext`, điều gì kích hoạt component re-render?",
                body: "Thay đổi state nào bên trong Context Provider sẽ khiến tất cả các component tiêu thụ phải re-render?",
                solution: "Một component tiêu thụ context sẽ re-render **mỗi khi giá trị context thay đổi**, ngay cả khi phần giá trị mà nó sử dụng vẫn giữ nguyên. Điều này có thể dẫn đến re-render không cần thiết (một nhược điểm tiềm tàng của Context)."
            }
        }
    },
    {
        _id: "react-j-036",
        difficulty: "junior",
        tags: ["react", "custom hook", "logic"],
        content: {
            en: {
                title: "What is the primary benefit of encapsulating complex logic (like API calling) into a Custom Hook?",
                body: "How does this practice improve component organization?",
                solution: "It allows for the **separation of concerns**, moving the stateful logic out of the presentation component, making the component cleaner and the logic easily reusable across the application."
            }
        ,
            jp: {
                title: "複雑なロジック（API呼び出しなど）をカスタムフックにカプセル化する主な利点は何ですか？",
                body: "この実践はコンポーネントの構成をどのように改善しますか？",
                solution: "**関心の分離**を可能にし、状態を持つロジックをプレゼンテーションコンポーネントの外に移動させ、コンポーネントをよりクリーンにし、ロジックをアプリケーション全体で簡単に再利用できるようにします。"
            }
        ,
            vi: {
                title: "Lợi ích chính của việc đóng gói logic phức tạp (như gọi API) vào một Custom Hook là gì?",
                body: "Thực hành này cải thiện tổ chức component như thế nào?",
                solution: "Nó cho phép **tách biệt các mối quan tâm (separation of concerns)**, di chuyển logic có state ra khỏi component trình bày, làm cho component sạch hơn và logic dễ dàng tái sử dụng trên toàn ứng dụng."
            }
        }
    },
    {
        _id: "react-j-037",
        difficulty: "junior",
        tags: ["react", "testing", "mock", "api"],
        content: {
            en: {
                title: "When unit testing a component that fetches data from an API, should you call the real API?",
                body: "What technique should be used instead of calling the real API?",
                solution: "No. You should **mock** the API call (e.g., using `jest.mock` or `msw`). This ensures tests are fast, deterministic, and not reliant on external network status."
            }
        ,
            jp: {
                title: "APIからデータを取得するコンポーネントをユニットテストするとき、実際のAPIを呼び出すべきですか？",
                body: "実際のAPIを呼び出す代わりに、どのテクニックを使用すべきですか？",
                solution: "いいえ。API呼び出しを**モック**する必要があります（例: `jest.mock` や `msw` を使用）。これにより、テストが高速で決定論的であり、外部ネットワークの状態に依存しないことが保証されます。"
            }
        ,
            vi: {
                title: "Khi unit test một component tìm nạp dữ liệu từ API, bạn có nên gọi API thực không?",
                body: "Kỹ thuật nào nên được sử dụng thay vì gọi API thực?",
                solution: "Không. Bạn nên **mock** (giả lập) cuộc gọi API (ví dụ: sử dụng `jest.mock` hoặc `msw`). Điều này đảm bảo các bài kiểm thử nhanh, xác định và không phụ thuộc vào trạng thái mạng bên ngoài."
            }
        }
    },
    {
        _id: "react-j-038",
        difficulty: "junior",
        tags: ["react", "memo", "props", "referential equality"],
        content: {
            en: {
                title: "Why can `React.memo` fail to prevent re-renders when passing objects or arrays as props?",
                body: "What principle of JavaScript comparison causes this failure?",
                solution: "Because JavaScript uses **referential equality** for non-primitive types (objects, arrays). A new object/array is created on every parent re-render, giving it a new reference, which makes `React.memo` think the prop has changed."
            }
        ,
            jp: {
                title: "オブジェクトや配列をpropsとして渡す際に、`React.memo`が再レンダリングを防ぐのに失敗することがあるのはなぜですか？",
                body: "この失敗を引き起こすJavaScriptの比較の原則は何ですか？",
                solution: "JavaScriptは非プリミティブ型（オブジェクト、配列）に対して**参照等価性**を使用するためです。親が再レンダリングされるたびに新しいオブジェクト/配列が作成され、新しい参照が与えられ、`React.memo`はpropsが変更されたと見なします。"
            }
        ,
            vi: {
                title: "Tại sao `React.memo` có thể không ngăn chặn được re-render khi truyền các đối tượng hoặc mảng làm props?",
                body: "Nguyên tắc so sánh JavaScript nào gây ra lỗi này?",
                solution: "Bởi vì JavaScript sử dụng **tính bằng tham chiếu (referential equality)** cho các kiểu không nguyên thủy (đối tượng, mảng). Một đối tượng/mảng mới được tạo trong mỗi lần re-render của component cha, cung cấp một tham chiếu mới, khiến `React.memo` nghĩ rằng prop đã thay đổi."
            }
        }
    },
    {
        _id: "react-j-039",
        difficulty: "junior",
        tags: ["react", "hooks", "rules"],
        content: {
            en: {
                title: "What are the two golden rules of Hooks?",
                body: "Name the two key restrictions on where and how hooks can be called.",
                solution: "1. **Only call Hooks at the top level** (don't call them inside loops, conditions, or nested functions). 2. **Only call Hooks from React functional components or custom Hooks**."
            }
        ,
            jp: {
                title: "Hooksの2つの黄金律は何ですか？",
                body: "フックを呼び出す場所と方法に関する2つの主要な制限を挙げてください。",
                solution: "1. **フックはトップレベルでのみ呼び出す**（ループ、条件、またはネストされた関数内では呼び出さない）。 2. **React関数コンポーネントまたはカスタムフックからのみフックを呼び出す**。"
            }
        ,
            vi: {
                title: "Hai quy tắc vàng của Hooks là gì?",
                body: "Nêu hai giới hạn chính về nơi và cách các hook có thể được gọi.",
                solution: "1. **Chỉ gọi Hooks ở cấp cao nhất** (không gọi chúng bên trong vòng lặp, điều kiện hoặc hàm lồng nhau). 2. **Chỉ gọi Hooks từ các functional component React hoặc custom Hooks**."
            }
        }
    },
    {
        _id: "react-j-040",
        difficulty: "junior",
        tags: ["react", "jsx", "sanitization", "security"],
        content: {
            en: {
                title: "How does React help prevent Cross-Site Scripting (XSS) attacks in JSX?",
                body: "What process does React automatically perform on rendered content?",
                solution: "React **automatically escapes** (sanitizes) values embedded in JSX before rendering them. This converts potentially malicious script tags into harmless strings, making them unexecutable."
            }
        ,
            jp: {
                title: "ReactはJSXでのクロスサイトスクリプティング（XSS）攻撃をどのように防ぐのに役立ちますか？",
                body: "Reactはレンダリングされたコンテンツに対して自動的にどのプロセスを実行しますか？",
                solution: "Reactはレンダリングする前に、JSXに埋め込まれた値を**自動的にエスケープ**（サニタイズ）します。これにより、潜在的に悪意のあるスクリプトタグが無害な文字列に変換され、実行できなくなります。"
            }
        ,
            vi: {
                title: "React giúp ngăn chặn các cuộc tấn công Cross-Site Scripting (XSS) trong JSX như thế nào?",
                body: "React tự động thực hiện quá trình gì trên nội dung được render?",
                solution: "React **tự động escape** (sanitizes) các giá trị được nhúng trong JSX trước khi hiển thị chúng. Điều này chuyển đổi các thẻ script có khả năng độc hại thành các chuỗi vô hại, khiến chúng không thể thực thi."
            }
        }
    },
    {
        _id: "react-j-041",
        difficulty: "junior",
        tags: ["react", "virtual dom", "diffing", "key"],
        content: {
            en: {
                title: "How does the `key` prop influence the reconciliation (diffing) process?",
                body: "If a key changes, what does React do with the associated DOM element and component instance?",
                solution: "If the key changes, React considers the item to be a **new component instance**, destroying the old one and creating a new one from scratch (instead of trying to reuse/update the existing one)."
            }
        ,
            jp: {
                title: "`key` propsは調整（差分検出）プロセスにどのように影響しますか？",
                body: "キーが変更された場合、Reactは関連付けられたDOM要素とコンポーネントインスタンスをどうしますか？",
                solution: "キーが変更された場合、Reactはそのアイテムを**新しいコンポーネントインスタンス**と見なし、古いものを破棄して最初から新しいものを作成します（既存のものを再利用/更新しようとする代わりに）。"
            }
        ,
            vi: {
                title: "Prop `key` ảnh hưởng đến quá trình reconciliation (diffing) như thế nào?",
                body: "Nếu một key thay đổi, React làm gì với phần tử DOM và instance component liên quan?",
                solution: "Nếu key thay đổi, React coi mục đó là một **instance component mới**, hủy bỏ cái cũ và tạo một cái mới từ đầu (thay vì cố gắng tái sử dụng/cập nhật cái hiện có)."
            }
        }
    },
    {
        _id: "react-j-042",
        difficulty: "junior",
        tags: ["react", "fragment", "key", "list"],
        content: {
            en: {
                title: "Can you pass a `key` prop to a shorthand React Fragment (`<>...</>`)?",
                body: "If not, how must you write the Fragment to accept a key?",
                solution: "No. The shorthand syntax does not support the `key` prop. You must use the full `<React.Fragment key={...}>...</React.Fragment>` syntax when rendering a list of Fragments."
            }
        ,
            jp: {
                title: "省略形のReact Fragment (`<>...</>`) に`key` propsを渡すことができますか？",
                body: "できない場合、キーを受け入れるためにFragmentをどのように記述する必要がありますか？",
                solution: "いいえ。省略形構文は`key` propsをサポートしていません。Fragmentのリストをレンダリングするときは、完全な `<React.Fragment key={...}>...</React.Fragment>` 構文を使用する必要があります。"
            }
        ,
            vi: {
                title: "Bạn có thể truyền prop `key` cho React Fragment viết tắt (`<>...</>`) không?",
                body: "Nếu không, bạn phải viết Fragment như thế nào để chấp nhận một key?",
                solution: "Không. Cú pháp viết tắt không hỗ trợ prop `key`. Bạn phải sử dụng cú pháp đầy đủ `<React.Fragment key={...}>...</React.Fragment>` khi hiển thị một danh sách các Fragment."
            }
        }
    },
    {
        _id: "react-j-043",
        difficulty: "junior",
        tags: ["react", "forwardref", "ref", "dom"],
        content: {
            en: {
                title: "What problem does `React.forwardRef` solve?",
                body: "What limitation of functional components does `forwardRef` overcome?",
                solution: "It allows a functional component to **pass a ref** that it receives as a prop **down to a child component** (often a DOM element). This is known as 'ref forwarding'."
            }
        ,
            jp: {
                title: "`React.forwardRef`はどのような問題を解決しますか？",
                body: "`forwardRef`は関数コンポーネントのどの制限を克服しますか？",
                solution: "関数コンポーネントがpropsとして受け取ったrefを**子コンポーネント**（しばしばDOM要素）に**渡す**ことを可能にします。これは「ref forwarding」として知られています。"
            }
        ,
            vi: {
                title: "Vấn đề mà `React.forwardRef` giải quyết là gì?",
                body: "`forwardRef` khắc phục hạn chế nào của functional component?",
                solution: "Nó cho phép một functional component **truyền một ref** mà nó nhận được dưới dạng prop **xuống một component con** (thường là một phần tử DOM). Điều này được gọi là 'ref forwarding'."
            }
        }
    },
    {
        _id: "react-j-044",
        difficulty: "junior",
        tags: ["react", "error boundary", "fallback"],
        content: {
            en: {
                title: "What happens inside an Error Boundary when an error is caught?",
                body: "What is the result displayed to the user?",
                solution: "The Error Boundary's internal state is updated to reflect the error, and the component re-renders to display a **fallback UI** (e.g., an error message) instead of the component tree that crashed."
            }
        ,
            jp: {
                title: "エラーがキャッチされたとき、エラー境界内で何が起こりますか？",
                body: "ユーザーに表示される結果は何ですか？",
                solution: "エラー境界の内部状態が更新され、クラッシュしたコンポーネントツリーの代わりに**フォールバックUI**（例: エラーメッセージ）を表示するためにコンポーネントが再レンダリングされます。"
            }
        ,
            vi: {
                title: "Điều gì xảy ra bên trong Error Boundary khi một lỗi được bắt?",
                body: "Kết quả hiển thị cho người dùng là gì?",
                solution: "State nội bộ của Error Boundary được cập nhật để phản ánh lỗi, và component re-render để hiển thị một **UI dự phòng (fallback UI)** (ví dụ: một thông báo lỗi) thay vì cây component bị sập."
            }
        }
    },
    {
        _id: "react-j-045",
        difficulty: "junior",
        tags: ["react", "typescript", "event", "typing"],
        content: {
            en: {
                title: "What is the common way to type a click event parameter in a TypeScript React component?",
                body: "Provide the correct generic type for a standard button click event.",
                solution: "Use `React.MouseEvent<HTMLButtonElement>` or a more general `React.MouseEvent<HTMLElement>`."
            }
        ,
            jp: {
                title: "TypeScript Reactコンポーネントでクリックイベントパラメーターを型付けする一般的な方法は何ですか？",
                body: "標準のボタンクリックイベントの正しいジェネリック型を提供してください。",
                solution: "`React.MouseEvent<HTMLButtonElement>` またはより一般的な `React.MouseEvent<HTMLElement>` を使用します。"
            }
        ,
            vi: {
                title: "Cách phổ biến để gán kiểu cho tham số sự kiện click trong một component React TypeScript là gì?",
                body: "Cung cấp kiểu generic chính xác cho một sự kiện click nút tiêu chuẩn.",
                solution: "Sử dụng `React.MouseEvent<HTMLButtonElement>` hoặc kiểu tổng quát hơn là `React.MouseEvent<HTMLElement>`."
            }
        }
    },
    {
        _id: "react-j-046",
        difficulty: "junior",
        tags: ["react", "hook", "useeffect", "render"],
        content: {
            en: {
                title: "Does `useEffect` run before or after the component renders to the screen?",
                body: "Explain the timing of the effect function execution.",
                solution: "It runs **after** the component renders and after the browser has painted the screen. This ensures the effect can safely access and manipulate the actual DOM elements."
            }
        ,
            jp: {
                title: "`useEffect`はコンポーネントが画面にレンダリングされる前と後のどちらで実行されますか？",
                body: "エフェクト関数の実行のタイミングを説明してください。",
                solution: "コンポーネントがレンダリングされ、ブラウザが画面を描画した**後**に実行されます。これにより、エフェクトが実際のDOM要素に安全にアクセスし、操作できることが保証されます。"
            }
        ,
            vi: {
                title: "`useEffect` chạy trước hay sau khi component được render ra màn hình?",
                body: "Giải thích thời điểm thực thi của hàm effect.",
                solution: "Nó chạy **sau** khi component được render và sau khi trình duyệt đã vẽ xong màn hình. Điều này đảm bảo effect có thể truy cập và thao tác an toàn với các phần tử DOM thực tế."
            }
        }
    },
    {
        _id: "react-j-047",
        difficulty: "junior",
        tags: ["react", "server component", "ssr", "csr"],
        content: {
            en: {
                title: "What is the primary difference between a Client Component and a Server Component (in modern React frameworks like Next.js)?",
                body: "Where is the component code primarily executed?",
                solution: "**Client Components** run in the browser (client). **Server Components** primarily run on the server during the build or request time, reducing the JavaScript payload sent to the client."
            }
        ,
            jp: {
                title: "クライアントコンポーネントとサーバーコンポーネント（Next.jsなどのモダンなReactフレームワークにおける）の主な違いは何ですか？",
                body: "コンポーネントコードは主にどこで実行されますか？",
                solution: "**クライアントコンポーネント**はブラウザ（クライアント）で実行されます。**サーバーコンポーネント**は主にビルド時またはリクエスト時にサーバーで実行され、クライアントに送信されるJavaScriptペイロードを削減します。"
            }
        ,
            vi: {
                title: "Sự khác biệt chính giữa Client Component và Server Component (trong các framework React hiện đại như Next.js) là gì?",
                body: "Mã component chủ yếu được thực thi ở đâu?",
                solution: "**Client Component** chạy trong trình duyệt (client). **Server Component** chủ yếu chạy trên server trong quá trình build hoặc thời điểm request, giúp giảm payload JavaScript gửi đến client."
            }
        }
    },
    {
        _id: "react-j-048",
        difficulty: "junior",
        tags: ["react", "hooks", "class component"],
        content: {
            en: {
                title: "Why were Hooks introduced in React?",
                body: "What two main problems did they solve related to class components and stateful logic?",
                solution: "They allow functional components to use state and other React features **without writing a class**, and they provide a better way to **reuse stateful logic** (Custom Hooks) across components than HOCs or Render Props."
            }
        ,
            jp: {
                title: "HooksはReactでなぜ導入されたのですか？",
                body: "Hooksはクラスコンポーネントと状態を持つロジックに関連して、主にどのような2つの問題を解決しましたか？",
                solution: "Hooksは、関数コンポーネントが**クラスを書かずに**状態や他のReact機能を使用できるようにし、HOCやRender Propsよりも優れた方法でコンポーネント間で**状態を持つロジックを再利用**する（カスタムフック）ことを可能にしました。"
            }
        ,
            vi: {
                title: "Tại sao Hooks được giới thiệu trong React?",
                body: "Chúng đã giải quyết hai vấn đề chính nào liên quan đến class component và logic có state?",
                solution: "Chúng cho phép functional component sử dụng state và các tính năng khác của React **mà không cần viết class**, và chúng cung cấp một cách tốt hơn để **tái sử dụng logic có state** (Custom Hooks) giữa các component so với HOC hoặc Render Props."
            }
        }
    },
    {
        _id: "react-j-049",
        difficulty: "junior",
        tags: ["react", "performance", "devtools"],
        content: {
            en: {
                title: "How can you identify which component is causing excessive re-renders in a complex application?",
                body: "What tool is commonly used to debug and profile component performance?",
                solution: "The **React Developer Tools** browser extension (specifically the Profiler tab), which highlights components that render unnecessarily and shows their render duration."
            }
        ,
            jp: {
                title: "複雑なアプリケーションでどのコンポーネントが過剰な再レンダリングを引き起こしているかをどのように特定できますか？",
                body: "コンポーネントのパフォーマンスをデバッグおよびプロファイルするために一般的に使用されるツールは何ですか？",
                solution: "**React Developer Tools**ブラウザ拡張機能（特にProfilerタブ）であり、不要にレンダリングされているコンポーネントを強調表示し、そのレンダリング期間を示します。"
            }
        ,
            vi: {
                title: "Làm thế nào bạn có thể xác định component nào đang gây ra re-render quá mức trong một ứng dụng phức tạp?",
                body: "Công cụ nào thường được sử dụng để debug và profile hiệu suất component?",
                solution: "Tiện ích mở rộng trình duyệt **React Developer Tools** (cụ thể là tab Profiler), nó làm nổi bật các component bị render không cần thiết và hiển thị thời gian render của chúng."
            }
        }
    },
    {
        _id: "react-j-050",
        difficulty: "junior",
        tags: ["react", "lazy", "suspense", "performance"],
        content: {
            en: {
                title: "What are `React.lazy` and `<Suspense>` used for together?",
                body: "What technique do they enable for improving initial load time?",
                solution: "They enable **code splitting** (or lazy loading). `React.lazy` loads a component dynamically, and `<Suspense>` displays a **fallback UI** (like a loading spinner) while the lazy component code is being loaded."
            }
        ,
            jp: {
                title: "`React.lazy`と`<Suspense>`は一緒に何のために使用されますか？",
                body: "これらは初期ロード時間を改善するためにどのテクニックを可能にしますか？",
                solution: "**コード分割**（または遅延ロード）を可能にします。`React.lazy`はコンポーネントを動的にロードし、`<Suspense>`は遅延コンポーネントコードがロードされている間に**フォールバックUI**（ローディングスピナーなど）を表示します。"
            }
        ,
            vi: {
                title: "`React.lazy` và `<Suspense>` được sử dụng cùng nhau để làm gì?",
                body: "Chúng cho phép kỹ thuật nào để cải thiện thời gian tải ban đầu?",
                solution: "Chúng cho phép **chia tách mã (code splitting)** (hoặc tải lười - lazy loading). `React.lazy` tải component một cách động, và `<Suspense>` hiển thị một **UI dự phòng (fallback UI)** (như một loading spinner) trong khi mã component lười đang được tải."
            }
        }
    }
];