export const reactMiddleQuestions = [
    {
        _id: "react-m-001",
        difficulty: "middle",
        tags: ["react", "hook", "useeffect", "cleanup"],
        content: {
            en: {
                title: "What is the purpose of the function returned by `useEffect`?",
                body: "When and why does React execute the cleanup function?",
                solution: "It's the **cleanup function**. React executes it **before the component unmounts** and **before running the next effect** (if dependencies change). It's used to clean up subscriptions, timers, or non-React resources."
            },
            jp: {
                title: "`useEffect`が返す関数の目的は何ですか？",
                body: "Reactはいつ、そしてなぜクリーンアップ関数を実行しますか？",
                solution: "これは**クリーンアップ関数**です。Reactはコンポーネントがアンマウントされる**前**、および**次のエフェクトを実行する前**にそれを実行します（依存関係が変更された場合）。サブスクリプション、タイマー、または非Reactリソースをクリーンアップするために使用されます。"
            },
            vi: {
                title: "Mục đích của hàm được trả về bởi `useEffect` là gì?",
                body: "React thực thi hàm cleanup khi nào và tại sao?",
                solution: "Đó là **hàm cleanup**. React thực thi nó **trước khi component unmount** và **trước khi chạy effect tiếp theo** (nếu dependencies thay đổi). Nó được sử dụng để dọn dẹp các subscription, timer hoặc các tài nguyên không phải của React."
            }
        }
    },
    {
        _id: "react-m-002",
        difficulty: "middle",
        tags: ["react", "hook", "usememo", "performance"],
        content: {
            en: {
                title: "When using `useMemo` with an object, why is it vital to ensure the dependencies are stable?",
                body: "Explain the concept of dependency stability in relation to `useMemo`.",
                solution: "If a dependency is a non-memoized object or array created on every render, it will have a new reference, causing `useMemo` to re-calculate every time. This defeats the purpose of memoization."
            },
            jp: {
                title: "オブジェクトで`useMemo`を使用する場合、依存関係の安定性を確保することが重要であるのはなぜですか？",
                body: "`useMemo`に関連する依存関係の安定性の概念を説明してください。",
                solution: "依存関係がレンダリングごとに作成される非メモ化オブジェクトまたは配列である場合、それは新しい参照を持ち、`useMemo`が毎回再計算する原因となります。これはメモ化の目的を損ないます。"
            },
            vi: {
                title: "Khi sử dụng `useMemo` với một đối tượng, tại sao việc đảm bảo dependencies ổn định lại quan trọng?",
                body: "Giải thích khái niệm ổn định dependency liên quan đến `useMemo`.",
                solution: "Nếu dependency là một đối tượng hoặc mảng không được memoize và được tạo trong mỗi lần render, nó sẽ có một tham chiếu mới, khiến `useMemo` tính toán lại mỗi lần. Điều này làm mất đi mục đích của việc memoization."
            }
        }
    },
    {
        _id: "react-m-003",
        difficulty: "middle",
        tags: ["react", "context", "performance", "selector"],
        content: {
            en: {
                title: "What is the performance drawback of putting many unrelated states into a single React Context?",
                body: "How does one component's state change affect other components consuming the same context?",
                solution: "If any part of the Context value changes, **every single consumer component re-renders**, even if they only rely on an unchanging part of the value. This leads to severe performance degradation (unnecessary renders)."
            },
            jp: {
                title: "多くの無関係な状態を単一のReact Contextに入れることのパフォーマンス上の欠点は何ですか？",
                body: "あるコンポーネントの状態変更が、同じコンテキストを使用している他のコンポーネントにどのように影響しますか？",
                solution: "Context値の**いずれかの部分が変更されると、すべてのコンシューマーコンポーネントが再レンダリングされます**。これは、値の不変の部分にのみ依存している場合でも発生します。これにより、深刻なパフォーマンスの低下（不必要なレンダリング）につながります。"
            },
            vi: {
                title: "Hạn chế về hiệu suất của việc đặt nhiều state không liên quan vào một React Context duy nhất là gì?",
                body: "Sự thay đổi state của một component ảnh hưởng đến các component khác tiêu thụ cùng context như thế nào?",
                solution: "Nếu bất kỳ phần nào của giá trị Context thay đổi, **mọi component tiêu thụ đều re-render**, ngay cả khi chúng chỉ dựa vào một phần không thay đổi của giá trị đó. Điều này dẫn đến suy giảm hiệu suất nghiêm trọng (re-render không cần thiết)."
            }
        }
    },
    {
        _id: "react-m-004",
        difficulty: "middle",
        tags: ["react", "jsx", "accessibility", "a11y"],
        content: {
            en: {
                title: "What is the purpose of the `aria-label` attribute?",
                body: "Why is `aria-label` important for accessibility, and when should you use it?",
                solution: "It provides a text label for an element when the visual text is not available. It's crucial for **screen readers** to understand the purpose of interactive elements like icon buttons or hidden inputs."
            },
            jp: {
                title: "`aria-label`属性の目的は何ですか？",
                body: "`aria-label`がアクセシビリティにとって重要であるのはなぜですか、そしていつそれを使用すべきですか？",
                solution: "視覚的なテキストが利用できない場合に、要素にテキストラベルを提供します。これは、アイコンボタンや非表示の入力などのインタラクティブな要素の目的を**スクリーンリーダー**が理解するために不可欠です。"
            },
            vi: {
                title: "Mục đích của thuộc tính `aria-label` là gì?",
                body: "Tại sao `aria-label` quan trọng đối với khả năng tiếp cận (accessibility), và khi nào bạn nên sử dụng nó?",
                solution: "Nó cung cấp một nhãn văn bản cho một phần tử khi văn bản trực quan không có sẵn. Nó rất quan trọng đối với **trình đọc màn hình (screen readers)** để hiểu mục đích của các phần tử tương tác như nút biểu tượng (icon button) hoặc input bị ẩn."
            }
        }
    },
    {
        _id: "react-m-005",
        difficulty: "middle",
        tags: ["react", "router", "dynamic", "param"],
        content: {
            en: {
                title: "How do you define and access a dynamic URL parameter using a library like React Router?",
                body: "Give an example of a route path and the hook used to access the parameter value.",
                solution: "Define with a colon: `/users/:userId`. Access the value in the component using the **`useParams()`** hook, which returns an object like `{ userId: 'value' }`."
            },
            jp: {
                title: "React Routerのようなライブラリを使用して、動的なURLパラメーターをどのように定義し、アクセスしますか？",
                body: "ルートパスの例と、パラメーター値にアクセスするために使用されるフックを挙げてください。",
                solution: "コロンで定義します: `/users/:userId`。コンポーネント内で**`useParams()`**フックを使用して値にアクセスします。これは `{ userId: 'value' }` のようなオブジェクトを返します。"
            },
            vi: {
                title: "Làm thế nào bạn định nghĩa và truy cập một tham số URL động khi sử dụng thư viện như React Router?",
                body: "Đưa ra một ví dụ về đường dẫn route và hook được sử dụng để truy cập giá trị tham số.",
                solution: "Định nghĩa bằng dấu hai chấm: `/users/:userId`. Truy cập giá trị trong component bằng cách sử dụng hook **`useParams()`**, trả về một đối tượng như `{ userId: 'value' }`."
            }
        }
    },
    {
        _id: "react-m-006",
        difficulty: "middle",
        tags: ["react", "hook", "useeffect", "stale closure"],
        content: {
            en: {
                title: "Explain the 'stale closure' problem in `useEffect`.",
                body: "How does omitting a dependency from the dependency array cause this issue?",
                solution: "If a function inside `useEffect` uses a state or prop but that state/prop is omitted from the dependency array, the function 'closes over' the initial (stale) value of that variable, leading to incorrect behavior when the effect re-runs."
            },
            jp: {
                title: "`useEffect`における「古いクロージャ」（stale closure）の問題を説明してください。",
                body: "依存配列から依存関係を省略すると、どのようにしてこの問題が発生しますか？",
                solution: "`useEffect`内の関数が状態またはpropsを使用しているが、その状態/propsが依存配列から省略されている場合、その関数はその変数の初期（古い）値を「閉じ込めて」しまい、エフェクトが再実行されたときに誤った動作につながります。"
            },
            vi: {
                title: "Giải thích vấn đề 'stale closure' trong `useEffect`.",
                body: "Việc bỏ qua một dependency khỏi mảng dependency gây ra vấn đề này như thế nào?",
                solution: "Nếu một hàm bên trong `useEffect` sử dụng một state hoặc prop nhưng state/prop đó bị bỏ qua khỏi mảng dependency, hàm sẽ 'đóng lại' giá trị ban đầu (cũ) của biến đó, dẫn đến hành vi không chính xác khi effect chạy lại."
            }
        }
    },
    {
        _id: "react-m-007",
        difficulty: "middle",
        tags: ["react", "hook", "usestate", "functional update"],
        content: {
            en: {
                title: "Why is the functional update form of `useState` preferred when updating state based on the previous state?",
                body: "What potential bug does `setCount(count + 1)` introduce in asynchronous scenarios?",
                solution: "The functional form (`setCount(prevCount => prevCount + 1)`) guarantees you are working with the absolute **latest state value**. The direct update form (`count + 1`) can lead to race conditions or incorrect counts when updates are batched."
            },
            jp: {
                title: "前の状態に基づいて状態を更新するときに、`useState`の関数更新形式が好まれるのはなぜですか？",
                body: "`setCount(count + 1)`は非同期シナリオでどのような潜在的なバグを引き起こしますか？",
                solution: "関数形式 (`setCount(prevCount => prevCount + 1)`) は、**最新の状態値**で作業していることを保証します。直接更新形式 (`count + 1`) は、更新がバッチ処理されるときに競合状態や誤ったカウントにつながる可能性があります。"
            },
            vi: {
                title: "Tại sao nên ưu tiên dạng functional update của `useState` khi cập nhật state dựa trên state trước đó?",
                body: "Lỗi tiềm ẩn nào mà `setCount(count + 1)` gây ra trong các kịch bản bất đồng bộ?",
                solution: "Dạng functional (`setCount(prevCount => prevCount + 1)`) đảm bảo bạn đang làm việc với **giá trị state mới nhất**. Dạng cập nhật trực tiếp (`count + 1`) có thể dẫn đến race condition hoặc số lượng không chính xác khi các cập nhật được gom nhóm (batching)."
            }
        }
    },
    {
        _id: "react-m-008",
        difficulty: "middle",
        tags: ["react", "composition", "children", "inversion of control"],
        content: {
            en: {
                title: "Explain the concept of 'Composition over Inheritance' in React.",
                body: "How is the special `children` prop used to achieve composition?",
                solution: "It means building complex components by combining simpler ones, rather than using deep class hierarchies. The `children` prop allows components to pass arbitrary JSX inside their tags, enabling a parent to delegate rendering control to its children (Containment)."
            }
        ,
            jp: {
                title: "Reactにおける「継承よりもコンポジション」（Composition over Inheritance）の概念を説明してください。",
                body: "コンポジションを達成するために、特別な`children` propsはどのように使用されますか？",
                solution: "深いクラス階層を使用する代わりに、より単純なコンポーネントを組み合わせて複雑なコンポーネントを構築することを意味します。`children` propsにより、コンポーネントはタグ内に任意のJSXを渡すことができ、親がレンダリング制御を子に委譲できるようにします（包含）。"
            }
        ,
            vi: {
                title: "Giải thích khái niệm 'Composition over Inheritance' trong React.",
                body: "Prop đặc biệt `children` được sử dụng như thế nào để đạt được composition?",
                solution: "Nó có nghĩa là xây dựng các component phức tạp bằng cách kết hợp các component đơn giản hơn, thay vì sử dụng các hệ thống phân cấp class sâu. Prop `children` cho phép các component truyền JSX tùy ý vào bên trong thẻ của chúng, cho phép component cha ủy quyền quyền kiểm soát render cho các component con (Containment)."
            }
        }
    },
    {
        _id: "react-m-009",
        difficulty: "middle",
        tags: ["react", "hook", "usereducer", "global state"],
        content: {
            en: {
                title: "How can `useReducer` and `useContext` be combined to create a lightweight state management solution?",
                body: "Describe the pattern of combining these two hooks.",
                solution: "The `useReducer` hook manages the complex state logic within the Provider component. The `dispatch` function and the `state` object are then exposed to consuming components via the `useContext` hook."
            }
        ,
            jp: {
                title: "`useReducer`と`useContext`を組み合わせて、軽量な状態管理ソリューションを作成するにはどうすればよいですか？",
                body: "これら2つのフックを組み合わせるパターンを説明してください。",
                solution: "`useReducer`フックは、Providerコンポーネント内で複雑な状態ロジックを管理します。`dispatch`関数と`state`オブジェクトは、`useContext`フックを介してコンシューマーコンポーネントに公開されます。"
            }
        ,
            vi: {
                title: "Làm thế nào có thể kết hợp `useReducer` và `useContext` để tạo ra một giải pháp quản lý state nhẹ?",
                body: "Mô tả pattern kết hợp hai hook này.",
                solution: "Hook `useReducer` quản lý logic state phức tạp bên trong component Provider. Sau đó, hàm `dispatch` và đối tượng `state` được hiển thị cho các component tiêu thụ thông qua hook `useContext`."
            }
        }
    },
    {
        _id: "react-m-010",
        difficulty: "middle",
        tags: ["react", "performance", "optimization", "immutable"],
        content: {
            en: {
                title: "Why is immutability a best practice when managing state in React?",
                body: "How does immutability directly assist React's reconciliation process?",
                solution: "React's reconciliation relies on shallow comparison of references (especially with `React.memo` or `shouldComponentUpdate`). By creating a new object/array instead of mutating the old one, we ensure React detects the change and triggers a necessary re-render."
            }
        ,
            jp: {
                title: "Reactで状態を管理する際に、なぜ不変性がベストプラクティスなのですか？",
                body: "不変性はReactの調整プロセスをどのように直接支援しますか？",
                solution: "Reactの調整は、参照の浅い比較（特に`React.memo`や`shouldComponentUpdate`を使用する場合）に依存しています。古いオブジェクトを変更する代わりに新しいオブジェクト/配列を作成することで、Reactが必要な変更を検出し、再レンダリングをトリガーすることを保証します。"
            }
        ,
            vi: {
                title: "Tại sao tính bất biến (immutability) là một best practice khi quản lý state trong React?",
                body: "Tính bất biến hỗ trợ trực tiếp cho quá trình reconciliation của React như thế nào?",
                solution: "Quá trình reconciliation của React dựa trên việc so sánh nông các tham chiếu (đặc biệt với `React.memo` hoặc `shouldComponentUpdate`). Bằng cách tạo một đối tượng/mảng mới thay vì thay đổi cái cũ, chúng ta đảm bảo React phát hiện ra sự thay đổi và kích hoạt re-render cần thiết."
            }
        }
    },
    {
        _id: "react-m-011",
        difficulty: "middle",
        tags: ["react", "testing", "rtl", "query"],
        content: {
            en: {
                title: "What is the order of preference for querying elements in React Testing Library (RTL)?",
                body: "Name the highest priority query type based on user perception.",
                solution: "Queries prioritized by user perception: **`getByRole`** (highest priority), then `getByLabelText`, `getByPlaceholderText`, `getByText`, and finally test-specific queries like `getByTestId` (lowest priority)."
            }
        ,
            jp: {
                title: "React Testing Library (RTL) で要素をクエリするための優先順位は何ですか？",
                body: "ユーザーの認識に基づいて、最も優先度の高いクエリタイプを挙げてください。",
                solution: "ユーザーの認識によって優先順位付けされたクエリ:**`getByRole`**（最も高い優先度）、次に`getByLabelText`、`getByPlaceholderText`、`getByText`、そして最後に`getByTestId`（最も低い優先度）のようなテスト固有のクエリです。"
            }
        ,
            vi: {
                title: "Thứ tự ưu tiên để truy vấn các phần tử trong React Testing Library (RTL) là gì?",
                body: "Nêu tên loại truy vấn có ưu tiên cao nhất dựa trên nhận thức của người dùng.",
                solution: "Các truy vấn được ưu tiên theo nhận thức của người dùng: **`getByRole`** (ưu tiên cao nhất), sau đó là `getByLabelText`, `getByPlaceholderText`, `getByText`, và cuối cùng là các truy vấn dành riêng cho việc testing như `getByTestId` (ưu tiên thấp nhất)."
            }
        }
    },
    {
        _id: "react-m-012",
        difficulty: "middle",
        tags: ["react", "hook", "useeffect", "infinite loop"],
        content: {
            en: {
                title: "Describe a common scenario where `useEffect` causes an infinite loop.",
                body: "How can you fix this specific infinite loop problem?",
                solution: "An infinite loop occurs when the effect changes a state/prop, and that state/prop is in the dependency array. The fix is often to use the **functional state update form**, or to wrap object/array dependencies in `useMemo` or functions in `useCallback`."
            }
        ,
            jp: {
                title: "`useEffect`が無限ループを引き起こす一般的なシナリオを説明してください。",
                body: "この特定の無限ループの問題をどのように修正できますか？",
                solution: "エフェクトが状態/propsを変更し、その状態/propsが依存配列に含まれている場合に無限ループが発生します。修正策は、多くの場合、**関数型の状態更新形式**を使用するか、オブジェクト/配列の依存関係を`useMemo`でラップするか、関数を`useCallback`でラップすることです。"
            }
        ,
            vi: {
                title: "Mô tả một kịch bản phổ biến mà `useEffect` gây ra infinite loop.",
                body: "Làm thế nào bạn có thể khắc phục vấn đề infinite loop cụ thể này?",
                solution: "Vòng lặp vô hạn xảy ra khi effect thay đổi một state/prop, và state/prop đó lại nằm trong mảng dependency. Cách khắc phục thường là sử dụng **dạng functional update state**, hoặc bọc các dependencies là đối tượng/mảng trong `useMemo` hoặc các hàm trong `useCallback`."
            }
        }
    },
    {
        _id: "react-m-013",
        difficulty: "middle",
        tags: ["react", "typescript", "generic", "component"],
        content: {
            en: {
                title: "How do you define a generic type in a TypeScript React functional component?",
                body: "Provide the syntax for a component that receives a `data` prop of a dynamic type `T`.",
                solution: "Use the angle bracket syntax after the function name: `function MyList<T>({ data }: { data: T[] }) { ... }` or by typing the `React.FC` generic: `const MyList = <T,>({ data }: { data: T[] }) => { ... };`"
            }
        ,
            jp: {
                title: "TypeScript React関数コンポーネントでジェネリック型をどのように定義しますか？",
                body: "動的型`T`の`data` propsを受け取るコンポーネントの構文を提供してください。",
                solution: "関数名の後に山括弧構文を使用します: `function MyList<T>({ data }: { data: T[] }) { ... }` または `React.FC` ジェネリックを型付けします: `const MyList = <T,>({ data }: { data: T[] }) => { ... };`"
            }
        ,
            vi: {
                title: "Làm thế nào bạn định nghĩa một kiểu generic trong một functional component React TypeScript?",
                body: "Cung cấp cú pháp cho một component nhận prop `data` có kiểu động `T`.",
                solution: "Sử dụng cú pháp dấu ngoặc nhọn sau tên hàm: `function MyList<T>({ data }: { data: T[] }) { ... }` hoặc bằng cách gán kiểu cho generic của `React.FC`: `const MyList = <T,>({ data }: { data: T[] }) => { ... };`"
            }
        }
    },
    {
        _id: "react-m-014",
        difficulty: "middle",
        tags: ["react", "router", "nested", "layout"],
        content: {
            en: {
                title: "What is 'Nested Routing' and what problem does it solve in React applications?",
                body: "How do modern routing libraries (like React Router DOM v6) support nested routing?",
                solution: "Nested routing allows child routes to be rendered within the layout of their parent route. It solves the problem of organizing shared UI layouts (like sidebars or tabs) that only change partially based on the current URL."
            }
        ,
            jp: {
                title: "「ネストされたルーティング」（Nested Routing）とは何ですか、そしてReactアプリケーションでどのような問題を解決しますか？",
                body: "モダンなルーティングライブラリ（React Router DOM v6など）は、ネストされたルーティングをどのようにサポートしていますか？",
                solution: "ネストされたルーティングにより、子ルートは親ルートのレイアウト内でレンダリングされます。これは、現在のURLに基づいて部分的にのみ変更される共有UIレイアウト（サイドバーやタブなど）を整理する問題を解決します。"
            }
        ,
            vi: {
                title: "'Nested Routing' là gì và nó giải quyết vấn đề gì trong các ứng dụng React?",
                body: "Các thư viện routing hiện đại (như React Router DOM v6) hỗ trợ nested routing như thế nào?",
                solution: "Nested routing cho phép các route con được render bên trong layout của route cha. Nó giải quyết vấn đề tổ chức các bố cục UI được chia sẻ (như thanh bên hoặc tab) mà chỉ thay đổi một phần dựa trên URL hiện tại."
            }
        }
    },
    {
        _id: "react-m-015",
        difficulty: "middle",
        tags: ["react", "context", "split", "optimization"],
        content: {
            en: {
                title: "Describe the strategy of 'Splitting Context' for performance optimization.",
                body: "How is this better than using a single context provider for everything?",
                solution: "It involves creating separate Contexts for different domains (e.g., `UserContext` and `ThemeContext`). This ensures components only re-render when the specific context value they consume changes, avoiding unnecessary re-renders when other context values change."
            }
        ,
            jp: {
                title: "パフォーマンス最適化のための「Contextの分割」（Splitting Context）戦略を説明してください。",
                body: "これは、すべてに単一のコンテキストプロバイダーを使用するよりも優れているのはなぜですか？",
                solution: "異なるドメイン（例: `UserContext`と`ThemeContext`）に対して個別のContextを作成することを含みます。これにより、コンポーネントは消費する特定のコンテキスト値が変更された場合にのみ再レンダリングされ、他のコンテキスト値が変更された場合の不必要な再レンダリングを防ぎます。"
            },
            vi: {
                title: "Mô tả chiến lược 'Splitting Context' để tối ưu hóa hiệu suất.",
                body: "Tại sao điều này tốt hơn so với việc sử dụng một provider context duy nhất cho mọi thứ?",
                solution: "Nó bao gồm việc tạo các Context riêng biệt cho các miền khác nhau (ví dụ: `UserContext` và `ThemeContext`). Điều này đảm bảo các component chỉ re-render khi giá trị context cụ thể mà chúng tiêu thụ thay đổi, tránh re-render không cần thiết khi các giá trị context khác thay đổi."
            }
        }
    },
    {
        _id: "react-m-016",
        difficulty: "middle",
        tags: ["react", "hoc", "tradeoff", "props"],
        content: {
            en: {
                title: "What is 'props name collision' and how can it occur with Higher-Order Components (HOCs)?",
                body: "How do you mitigate this issue when designing a HOC?",
                solution: "It occurs when a HOC injects a prop with the same name as a prop already expected by the wrapped component, potentially overriding it. Mitigation involves using unique or namespaced prop names (e.g., `withAuthUser`, `withThemeData`)."
            }
        ,
            jp: {
                title: "「props名衝突」（props name collision）とは何ですか、そしてHigher-Order Components (HOCs) でどのように発生しますか？",
                body: "HOCを設計する際に、この問題をどのように軽減しますか？",
                solution: "HOCが、ラップされたコンポーネントがすでに期待しているpropsと同じ名前のpropsを注入し、上書きしてしまう可能性があるときに発生します。軽減策には、一意の名前または名前空間付きのprops名を使用することが含まれます（例: `withAuthUser`、`withThemeData`）。"
            },
            vi: {
                title: "'props name collision' là gì và nó có thể xảy ra như thế nào với Higher-Order Component (HOC)?",
                body: "Làm thế nào bạn giảm thiểu vấn đề này khi thiết kế một HOC?",
                solution: "Nó xảy ra khi một HOC inject (tiêm) một prop có cùng tên với một prop mà component được bọc đã mong đợi, có khả năng ghi đè lên nó. Biện pháp giảm thiểu bao gồm việc sử dụng tên prop duy nhất hoặc có không gian tên (ví dụ: `withAuthUser`, `withThemeData`)."
            }
        }
    },
    {
        _id: "react-m-017",
        difficulty: "middle",
        tags: ["react", "testing", "mock", "jest"],
        content: {
            en: {
                title: "What is `jest.mock()` used for in unit testing React components?",
                body: "Give an example of a type of resource that should be mocked.",
                solution: "It's used to **replace the implementation of a module** (e.g., a custom hook, an API service, or a third-party library) with a fake version (a mock). This isolates the component under test from its dependencies."
            }
        ,
            jp: {
                title: "Reactコンポーネントのユニットテストで`jest.mock()`は何のために使用されますか？",
                body: "モック化すべきリソースの種類の例を挙げてください。",
                solution: "モジュールの実装（例: カスタムフック、APIサービス、またはサードパーティライブラリ）を、偽のバージョン（モック）に**置き換える**ために使用されます。これにより、テスト対象のコンポーネントがその依存関係から分離されます。"
            },
            vi: {
                title: "`jest.mock()` được sử dụng để làm gì trong unit testing các component React?",
                body: "Đưa ra một ví dụ về loại tài nguyên nên được mock.",
                solution: "Nó được sử dụng để **thay thế việc triển khai của một module** (ví dụ: một custom hook, một dịch vụ API hoặc một thư viện bên thứ ba) bằng một phiên bản giả mạo (mock). Điều này cách ly component đang được kiểm thử khỏi các dependencies của nó."
            }
        }
    },
    {
        _id: "react-m-018",
        difficulty: "middle",
        tags: ["react", "form", "uncontrolled", "ref"],
        content: {
            en: {
                title: "What is an 'Uncontrolled Component' in React forms?",
                body: "How do you retrieve the value of an input field in an uncontrolled component?",
                solution: "An uncontrolled component is where form data is handled by the **DOM itself**, not by React state. You retrieve the value using a **`ref`** attached to the input element, typically inside a form submission handler."
            }
        ,
            jp: {
                title: "Reactフォームにおける「非制御コンポーネント」（Uncontrolled Component）とは何ですか？",
                body: "非制御コンポーネントで入力フィールドの値を取得するにはどうすればよいですか？",
                solution: "非制御コンポーネントは、フォームデータがReactの状態ではなく、**DOM自体**によって処理されるコンポーネントです。通常、フォーム送信ハンドラー内で、入力要素にアタッチされた**`ref`**を使用して値を取得します。"
            },
            vi: {
                title: "'Uncontrolled Component' trong các form React là gì?",
                body: "Làm thế nào bạn truy xuất giá trị của một trường input trong một uncontrolled component?",
                solution: "Một uncontrolled component là nơi dữ liệu form được xử lý bởi **chính DOM**, chứ không phải bởi state của React. Bạn truy xuất giá trị bằng cách sử dụng một **`ref`** được đính kèm vào phần tử input, thường là bên trong một trình xử lý submit form."
            }
        }
    },
    {
        _id: "react-m-019",
        difficulty: "middle",
        tags: ["react", "css", "styling", "css-in-js"],
        content: {
            en: {
                title: "What is the primary benefit of using CSS-in-JS libraries (like styled-components) over traditional CSS files?",
                body: "Name one key feature related to scoping or theming.",
                solution: "It enables **automatic critical CSS extraction** (for performance) and provides **automatic, unique scoping** for styles (avoiding style conflicts). It also allows dynamic styling based on component props."
            }
        ,
            jp: {
                title: "従来のCSSファイルと比較して、CSS-in-JSライブラリ（styled-componentsなど）を使用する主な利点は何ですか？",
                body: "スコープ設定またはテーマ設定に関連する主要な機能を1つ挙げてください。",
                solution: "**自動的なクリティカルCSS抽出**（パフォーマンスのため）を可能にし、スタイルに**自動的で一意なスコープ設定**を提供します（スタイルの競合を回避）。また、コンポーネントのpropsに基づいて動的なスタイリングも可能です。"
            },
            vi: {
                title: "Lợi ích chính của việc sử dụng các thư viện CSS-in-JS (như styled-components) so với các file CSS truyền thống là gì?",
                body: "Nêu một tính năng chính liên quan đến phạm vi (scoping) hoặc theme.",
                solution: "Nó cho phép **tự động trích xuất critical CSS** (vì hiệu suất) và cung cấp **phạm vi (scoping) tự động, duy nhất** cho các style (tránh xung đột style). Nó cũng cho phép tạo style động dựa trên props của component."
            }
        }
    },
    {
        _id: "react-m-020",
        difficulty: "middle",
        tags: ["react", "memo", "props", "custom comparison"],
        content: {
            en: {
                title: "How can you customize the comparison logic used by `React.memo`?",
                body: "What parameter does the optional second argument of `React.memo` receive?",
                solution: "`React.memo` accepts an optional **second argument**, which is a custom comparison function. This function receives the `prevProps` and `nextProps` and should return `true` if the props are equal (meaning no re-render needed)."
            }
        ,
            jp: {
                title: "`React.memo`で使用される比較ロジックをどのようにカスタマイズできますか？",
                body: "`React.memo`のオプションの2番目の引数は何を受け取りますか？",
                solution: "`React.memo`はオプションの**2番目の引数**としてカスタム比較関数を受け入れます。この関数は`prevProps`と`nextProps`を受け取り、propsが等しい場合（つまり、再レンダリングが不要な場合）に`true`を返す必要があります。"
            },
            vi: {
                title: "Làm thế nào bạn có thể tùy chỉnh logic so sánh được sử dụng bởi `React.memo`?",
                body: "Tham số thứ hai tùy chọn của `React.memo` nhận những gì?",
                solution: "`React.memo` chấp nhận một **tham số thứ hai** tùy chọn, đó là một hàm so sánh tùy chỉnh. Hàm này nhận `prevProps` và `nextProps` và nên trả về `true` nếu props bằng nhau (nghĩa là không cần re-render)."
            }
        }
    },
    {
        _id: "react-m-021",
        difficulty: "middle",
        tags: ["react", "typescript", "ref", "typing"],
        content: {
            en: {
                title: "How do you correctly type a ref for an HTML `<div>` element using `useRef` and TypeScript?",
                body: "Provide the correct generic type for the `useRef` hook.",
                solution: "Use `useRef<HTMLDivElement>(null)` or, if you know the ref will be set, `useRef<HTMLDivElement | null>(null)`. You must specify the DOM element type and allow for `null` initially."
            }
        ,
            jp: {
                title: "`useRef`とTypeScriptを使用して、HTML `<div>` 要素のrefを正しく型付けするにはどうすればよいですか？",
                body: "`useRef`フックの正しいジェネリック型を提供してください。",
                solution: "`useRef<HTMLDivElement>(null)`、またはrefが設定されることがわかっている場合は `useRef<HTMLDivElement | null>(null)` を使用します。DOM要素のタイプを指定し、最初は`null`を許可する必要があります。"
            },
            vi: {
                title: "Làm thế nào bạn gán kiểu đúng cho một ref của phần tử HTML `<div>` khi sử dụng `useRef` và TypeScript?",
                body: "Cung cấp kiểu generic chính xác cho hook `useRef`.",
                solution: "Sử dụng `useRef<HTMLDivElement>(null)` hoặc, nếu bạn biết ref sẽ được đặt, `useRef<HTMLDivElement | null>(null)`. Bạn phải chỉ định kiểu phần tử DOM và cho phép giá trị `null` ban đầu."
            }
        }
    },
    {
        _id: "react-m-022",
        difficulty: "middle",
        tags: ["react", "accessibility", "keyboard", "focus"],
        content: {
            en: {
                title: "Why is keyboard accessibility important in React applications?",
                body: "What technique is commonly used to programmatically manage focus in non-interactive elements (like modals)?",
                solution: "Many users rely on the keyboard for navigation (not just mouse). We use **`useRef` to access the DOM node** and the `.focus()` method to programmatically set focus, especially when opening a modal or navigating to a specific area."
            }
        ,
            jp: {
                title: "Reactアプリケーションでキーボードアクセシビリティが重要であるのはなぜですか？",
                body: "非対話型要素（モーダルなど）でフォーカスをプログラムで管理するために一般的に使用されるテクニックは何ですか？",
                solution: "多くのユーザーはナビゲーションにキーボードに頼っています（マウスだけでなく）。**`useRef`を使用してDOMノードにアクセス**し、`.focus()`メソッドを使用して、特にモーダルを開いたり特定の領域に移動したりするときに、プログラムでフォーカスを設定します。"
            }
        ,
            vi: {
                title: "Tại sao khả năng tiếp cận bằng bàn phím lại quan trọng trong các ứng dụng React?",
                body: "Kỹ thuật nào thường được sử dụng để quản lý focus theo chương trình trong các phần tử không tương tác (như modal)?",
                solution: "Nhiều người dùng phụ thuộc vào bàn phím để điều hướng (không chỉ chuột). Chúng ta sử dụng **`useRef` để truy cập node DOM** và phương thức `.focus()` để đặt focus theo chương trình, đặc biệt khi mở modal hoặc điều hướng đến một khu vực cụ thể."
            }
        }
    },
    {
        _id: "react-m-023",
        difficulty: "middle",
        tags: ["react", "performance", "profiler", "devtools"],
        content: {
            en: {
                title: "How can the React DevTools Profiler help diagnose performance issues?",
                body: "What key metric does the Profiler show for each component during a recording?",
                solution: "It shows the **render time** (how long it took to render) and the **reason for the render** (state change, prop change, or context change) for every component in the recorded session, helping pinpoint slow components."
            }
        ,
            jp: {
                title: "React DevTools Profilerは、パフォーマンスの問題を診断するのにどのように役立ちますか？",
                body: "Profilerは、記録中に各コンポーネントについてどの主要なメトリックを表示しますか？",
                solution: "記録されたセッションのすべてのコンポーネントについて、**レンダリング時間**（レンダリングにかかった時間）と**レンダリングの理由**（状態の変更、propsの変更、またはコンテキストの変更）を表示し、遅いコンポーネントを特定するのに役立ちます。"
            },
            vi: {
                title: "React DevTools Profiler có thể giúp chẩn đoán các vấn đề hiệu suất như thế nào?",
                body: "Profiler hiển thị chỉ số chính nào cho mỗi component trong quá trình ghi hình?",
                solution: "Nó hiển thị **thời gian render** (mất bao lâu để render) và **lý do render** (thay đổi state, thay đổi prop hoặc thay đổi context) cho mọi component trong phiên được ghi lại, giúp xác định các component chậm."
            }
        }
    },
    {
        _id: "react-m-024",
        difficulty: "middle",
        tags: ["react", "custom hook", "api", "fetch"],
        content: {
            en: {
                title: "Outline the basic structure of a custom hook designed for API data fetching (e.g., `useFetchData`).",
                body: "What three main pieces of state should this hook manage?",
                solution: "It typically manages **data** (the fetched result), **loading** (a boolean indicating fetch status), and **error** (any error that occurred). It uses `useEffect` for the fetching logic and returns these three state variables."
            }
        ,
            jp: {
                title: "APIデータ取得のために設計されたカスタムフック（例: `useFetchData`）の基本的な構造を概説してください。",
                body: "このフックが管理すべき3つの主要な状態は何ですか？",
                solution: "通常、**data**（取得した結果）、**loading**（取得ステータスを示すブール値）、および **error**（発生したエラー）を管理します。取得ロジックには`useEffect`を使用し、これら3つの状態変数を返します。"
            },
            vi: {
                title: "Phác thảo cấu trúc cơ bản của một custom hook được thiết kế để tìm nạp dữ liệu API (ví dụ: `useFetchData`).",
                body: "Hook này nên quản lý ba phần state chính nào?",
                solution: "Nó thường quản lý **data** (kết quả đã tìm nạp), **loading** (một boolean cho biết trạng thái tìm nạp) và **error** (bất kỳ lỗi nào xảy ra). Nó sử dụng `useEffect` cho logic tìm nạp và trả về ba biến state này."
            }
        }
    },
    {
        _id: "react-m-025",
        difficulty: "middle",
        tags: ["react", "hook", "useimperativehandle", "ref"],
        content: {
            en: {
                title: "When and why would you use the `useImperativeHandle` hook?",
                body: "What is the primary use case for exposing a custom handle via ref?",
                solution: "Used with `forwardRef` to **customize the instance value** that is exposed to parent components when they use a `ref`. The primary use case is exposing only specific, necessary methods (e.g., `openModal()` or `resetForm()`) instead of the entire DOM element."
            }
        ,
            jp: {
                title: "`useImperativeHandle`フックはいつ、なぜ使用しますか？",
                body: "refを介してカスタムハンドルを公開する主な使用例は何ですか？",
                solution: "`forwardRef`と一緒に使用され、親コンポーネントが`ref`を使用するときに公開される**インスタンス値をカスタマイズ**します。主な使用例は、DOM要素全体ではなく、特定の必要なメソッド（例: `openModal()` や `resetForm()`）のみを公開することです。"
            },
            vi: {
                title: "Bạn sẽ sử dụng hook `useImperativeHandle` khi nào và tại sao?",
                body: "Trường hợp sử dụng chính cho việc hiển thị một handle tùy chỉnh thông qua ref là gì?",
                solution: "Được sử dụng với `forwardRef` để **tùy chỉnh giá trị instance** được hiển thị cho các component cha khi chúng sử dụng `ref`. Trường hợp sử dụng chính là hiển thị chỉ các phương thức cụ thể, cần thiết (ví dụ: `openModal()` hoặc `resetForm()`) thay vì toàn bộ phần tử DOM."
            }
        }
    },
    {
        _id: "react-m-026",
        difficulty: "middle",
        tags: ["react", "jsx", "styling", "module"],
        content: {
            en: {
                title: "What are CSS Modules, and what is their main advantage in React?",
                body: "How do CSS Modules solve the problem of global scoping?",
                solution: "CSS Modules create a unique, locally scoped class name for every style, ensuring that styles defined in one component file **cannot accidentally affect** other components. This solves the problem of global CSS scope pollution."
            }
        ,
            jp: {
                title: "CSS Modulesとは何ですか、そしてReactにおける主な利点は何ですか？",
                body: "CSS Modulesはグローバルスコープの問題をどのように解決しますか？",
                solution: "CSS Modulesは、すべてのスタイルに一意のローカルスコープのクラス名を作成し、あるコンポーネントファイルで定義されたスタイルが他のコンポーネントに**誤って影響を与えない**ことを保証します。これにより、グローバルCSSスコープ汚染の問題が解決されます。"
            },
            vi: {
                title: "CSS Modules là gì, và lợi thế chính của chúng trong React là gì?",
                body: "CSS Modules giải quyết vấn đề scoping toàn cục như thế nào?",
                solution: "CSS Modules tạo ra một tên class duy nhất, có phạm vi cục bộ cho mọi style, đảm bảo rằng các style được định nghĩa trong một file component **không thể vô tình ảnh hưởng** đến các component khác. Điều này giải quyết vấn đề ô nhiễm phạm vi CSS toàn cục."
            }
        }
    },
    {
        _id: "react-m-027",
        difficulty: "middle",
        tags: ["react", "state management", "redux", "toolkit"],
        content: {
            en: {
                title: "How does Redux Toolkit simplify the implementation of Redux?",
                body: "Name one key utility provided by Redux Toolkit (RTK).",
                solution: "RTK simplifies Redux by providing standard tooling and best practices out-of-the-box. Key utilities include **`configureStore`** (auto-sets up the store), **`createSlice`** (combines reducers and actions), and **`createAsyncThunk`** (handles async logic)."
            },
            jp: {
                title: "Redux ToolkitはReduxの実装をどのように簡素化しますか？",
                body: "Redux Toolkit (RTK) が提供する主要なユーティリティを1つ挙げてください。",
                solution: "RTKは、標準的なツールとベストプラクティスをすぐに提供することでReduxを簡素化します。主要なユーティリティには、**`configureStore`**（ストアを自動設定）、**`createSlice`**（リデューサーとアクションを結合）、および**`createAsyncThunk`**（非同期ロジックを処理）があります。"
            },
            vi: {
                title: "Redux Toolkit đơn giản hóa việc triển khai Redux như thế nào?",
                body: "Nêu một tiện ích chính được cung cấp bởi Redux Toolkit (RTK).",
                solution: "RTK đơn giản hóa Redux bằng cách cung cấp các công cụ và best practice tiêu chuẩn. Các tiện ích chính bao gồm **`configureStore`** (tự động thiết lập store), **`createSlice`** (kết hợp reducers và actions) và **`createAsyncThunk`** (xử lý logic bất đồng bộ)."
            }
        }
    },
    {
        _id: "react-m-028",
        difficulty: "middle",
        tags: ["react", "error boundary", "lifecycle", "static"],
        content: {
            en: {
                title: "Which two lifecycle methods are essential for implementing an Error Boundary?",
                body: "What is the purpose of the static method in this context?",
                solution: "They are **`static getDerivedStateFromError(error)`** (used to render a fallback UI after an error) and **`componentDidCatch(error, info)`** (used for logging the error information)."
            }
        ,
            jp: {
                title: "エラー境界を実装するために不可欠な2つのライフサイクルメソッドは何ですか？",
                body: "この文脈での静的メソッドの目的は何ですか？",
                solution: "それらは、**`static getDerivedStateFromError(error)`**（エラー後にフォールバックUIをレンダリングするために使用）と**`componentDidCatch(error, info)`**（エラー情報をログに記録するために使用）です。"
            }
        ,
            vi: {
                title: "Hai phương thức lifecycle nào là cần thiết để triển khai một Error Boundary?",
                body: "Mục đích của phương thức static trong ngữ cảnh này là gì?",
                solution: "Đó là **`static getDerivedStateFromError(error)`** (được sử dụng để render một fallback UI sau khi xảy ra lỗi) và **`componentDidCatch(error, info)`** (được sử dụng để log thông tin lỗi)."
            }
        }
    },
    {
        _id: "react-m-029",
        difficulty: "middle",
        tags: ["react", "testing", "async", "act"],
        content: {
            en: {
                title: "In React Testing Library (RTL), what is the purpose of the `waitFor` utility?",
                body: "When should you use `waitFor` instead of simple assertions?",
                solution: "It's used to wait for an element to appear or disappear in the DOM over time, typically after an **asynchronous operation** like a data fetch or a state update that takes time. It replaces the need for manual timeouts."
            }
        ,
            jp: {
                title: "React Testing Library (RTL) で、`waitFor`ユーティリティの目的は何ですか？",
                body: "単純なアサーションの代わりに`waitFor`を使用すべきなのはいつですか？",
                solution: "これは、要素がDOMに時間の経過とともに出現または消滅するのを待つために使用されます。通常、データ取得や時間がかかる状態更新などの**非同期操作**の後です。手動のタイムアウトの必要性を置き換えます。"
            },
            vi: {
                title: "Trong React Testing Library (RTL), mục đích của tiện ích `waitFor` là gì?",
                body: "Khi nào bạn nên sử dụng `waitFor` thay vì các xác nhận đơn giản?",
                solution: "Nó được sử dụng để chờ một phần tử xuất hiện hoặc biến mất trong DOM theo thời gian, thường là sau một **thao tác bất đồng bộ** như tìm nạp dữ liệu hoặc cập nhật state mất thời gian. Nó thay thế nhu cầu về timeout thủ công."
            }
        }
    },
    {
        _id: "react-m-030",
        difficulty: "middle",
        tags: ["react", "performance", "code splitting", "suspense"],
        content: {
            en: {
                title: "How do `React.lazy` and `<Suspense>` improve the perceived performance of a web application?",
                body: "Explain the benefit of code splitting large bundles into smaller chunks.",
                solution: "They implement **code splitting**, allowing the application to download only the necessary code for the current view. This reduces the initial bundle size, speeding up initial page load time (TTI - Time To Interactive)."
            }
        ,
            jp: {
                title: "`React.lazy`と`<Suspense>`は、ウェブアプリケーションの体感的なパフォーマンスをどのように向上させますか？",
                body: "大きなバンドルを小さなチャンクにコード分割する利点を説明してください。",
                solution: "これらは**コード分割**を実装し、アプリケーションが現在のビューに必要なコードのみをダウンロードできるようにします。これにより、初期バンドルサイズが削減され、初期ページロード時間（TTI - Time To Interactive）が高速化されます。"
            },
            vi: {
                title: "`React.lazy` và `<Suspense>` cải thiện hiệu suất nhận thức của một ứng dụng web như thế nào?",
                body: "Giải thích lợi ích của việc chia tách mã (code splitting) các bundle lớn thành các phần nhỏ hơn.",
                solution: "Chúng triển khai **code splitting**, cho phép ứng dụng chỉ tải xuống mã cần thiết cho view hiện tại. Điều này làm giảm kích thước bundle ban đầu, tăng tốc thời gian tải trang ban đầu (TTI - Time To Interactive)."
            }
        }
    },
    {
        _id: "react-m-031",
        difficulty: "middle",
        tags: ["react", "jsx", "event", "synthetic"],
        content: {
            en: {
                title: "What is the React 'Synthetic Event' system?",
                body: "Why does React implement its own event system instead of relying purely on the native browser events?",
                solution: "It's a cross-browser wrapper around the browser's native event system. It ensures events behave identically across different browsers and allows React to implement **event pooling** and efficient event delegation."
            }
        ,
            jp: {
                title: "Reactの「Synthetic Event」システムとは何ですか？",
                body: "Reactは、ネイティブブラウザイベントに完全に依存する代わりに、独自のイベントシステムを実装するのはなぜですか？",
                solution: "これは、ブラウザのネイティブイベントシステムをラップするクロスブラウザラッパーです。これにより、イベントが異なるブラウザ間で同一に動作することが保証され、Reactが**イベントプーリング**と効率的なイベント委譲を実装できるようになります。"
            },
            vi: {
                title: "Hệ thống 'Synthetic Event' của React là gì?",
                body: "Tại sao React triển khai hệ thống sự kiện riêng thay vì chỉ dựa vào các sự kiện trình duyệt gốc?",
                solution: "Đây là một wrapper đa trình duyệt bao quanh hệ thống sự kiện gốc của trình duyệt. Nó đảm bảo các sự kiện hoạt động giống hệt nhau trên các trình duyệt khác nhau và cho phép React triển khai **event pooling** và ủy quyền sự kiện (event delegation) hiệu quả."
            }
        }
    },
    {
        _id: "react-m-032",
        difficulty: "middle",
        tags: ["react", "custom hook", "dom", "window"],
        content: {
            en: {
                title: "How would you create a custom hook `useWindowSize` to track the browser's dimensions?",
                body: "What is the importance of cleanup within this hook?",
                solution: "Use `useState` for dimensions and `useEffect` to attach an **event listener** to the `window` for the `resize` event. The cleanup function is crucial to **remove the event listener** when the component unmounts, preventing memory leaks."
            }
        ,
            jp: {
                title: "ブラウザの寸法を追跡するためのカスタムフック`useWindowSize`をどのように作成しますか？",
                body: "このフック内でのクリーンアップの重要性は何ですか？",
                solution: "寸法には`useState`を使用し、`useEffect`を使用して`resize`イベントの**イベントリスナー**を`window`にアタッチします。コンポーネントがアンマウントされるときに**イベントリスナーを削除**し、メモリリークを防ぐために、クリーンアップ関数は不可欠です。"
            },
            vi: {
                title: "Làm thế nào bạn tạo một custom hook `useWindowSize` để theo dõi kích thước của trình duyệt?",
                body: "Tầm quan trọng của cleanup bên trong hook này là gì?",
                solution: "Sử dụng `useState` cho kích thước và `useEffect` để đính kèm một **event listener** vào `window` cho sự kiện `resize`. Hàm cleanup là rất quan trọng để **xóa event listener** khi component unmount, ngăn chặn rò rỉ bộ nhớ."
            }
        }
    },
    {
        _id: "react-m-033",
        difficulty: "middle",
        tags: ["react", "hook", "useeffect", "skip"],
        content: {
            en: {
                title: "How do you conditionally skip an effect in `useEffect` (i.e., prevent it from running on initial mount)?",
                body: "What technique or custom hook pattern is used to achieve this?",
                solution: "This is often achieved by implementing a custom hook (e.g., `useDidUpdateEffect`) that uses a **`useRef` flag**. The ref is initialized to `true` and set to `false` in the first run of the effect, allowing the effect to run only on subsequent updates."
            }
        ,
            jp: {
                title: "`useEffect`でエフェクトを条件付きでスキップするにはどうすればよいですか（つまり、初期マウントでの実行を防ぐには）？",
                body: "これを達成するために使用されるテクニックまたはカスタムフックパターンは何ですか？",
                solution: "これは、**`useRef`フラグ**を使用するカスタムフック（例: `useDidUpdateEffect`）を実装することで達成されることがよくあります。refは`true`に初期化され、エフェクトの最初の実行で`false`に設定され、その後の更新でのみエフェクトが実行されるようにします。"
            },
            vi: {
                title: "Làm thế nào bạn bỏ qua một effect có điều kiện trong `useEffect` (tức là ngăn nó chạy khi mount lần đầu)?",
                body: "Kỹ thuật hoặc pattern custom hook nào được sử dụng để đạt được điều này?",
                solution: "Điều này thường đạt được bằng cách triển khai một custom hook (ví dụ: `useDidUpdateEffect`) sử dụng một **cờ `useRef`**. Ref được khởi tạo là `true` và được đặt thành `false` trong lần chạy đầu tiên của effect, cho phép effect chỉ chạy trong các lần cập nhật tiếp theo."
            }
        }
    },
    {
        _id: "react-m-034",
        difficulty: "middle",
        tags: ["react", "render props", "tradeoff"],
        content: {
            en: {
                title: "What is the main drawback of the Render Props pattern concerning component nesting?",
                body: "What common visual issue does excessive use of this pattern create?",
                solution: "The main drawback is **'Wrapper Hell'** or **'Inversion of Control'**, which leads to deep component nesting and makes the code difficult to read and maintain due to excessive indentation (similar to HOC composition issues)."
            }
        ,
            jp: {
                title: "コンポーネントのネストに関して、Render Propsパターンの主な欠点は何ですか？",
                body: "このパターンの過度の使用が引き起こす一般的な視覚的な問題は何ですか？",
                solution: "主な欠点は**「ラッパー地獄」（Wrapper Hell）**または**「制御の反転」（Inversion of Control）**であり、過度のインデントのために深いコンポーネントのネストにつながり、コードの読み取りと保守が困難になります（HOCコンポジションの問題に類似）。"
            },
            vi: {
                title: "Hạn chế chính của pattern Render Props liên quan đến việc lồng component là gì?",
                body: "Vấn đề trực quan phổ biến nào mà việc sử dụng quá mức pattern này tạo ra?",
                solution: "Hạn chế chính là **'Wrapper Hell'** hoặc **'Inversion of Control'**, dẫn đến việc lồng component sâu và làm cho mã khó đọc và bảo trì do thụt lề quá mức (tương tự như các vấn đề composition của HOC)."
            }
        }
    },
    {
        _id: "react-m-035",
        difficulty: "middle",
        tags: ["react", "portals", "event bubbling", "dom"],
        content: {
            en: {
                title: "Do events bubble up through the DOM hierarchy of a Portal, or through the component hierarchy?",
                body: "Explain how event bubbling works with Portals.",
                solution: "Events bubble up through the **React component hierarchy**, not the DOM hierarchy. Even though the Portal's children are in a separate DOM node, a click event on a Portal element will still reach a handler defined in its parent React component."
            }
        ,
            jp: {
                title: "PortalのDOM階層を介してイベントはバブリングしますか、それともコンポーネント階層を介してバブリングしますか？",
                body: "Portalでのイベントバブリングの仕組みを説明してください。",
                solution: "イベントはDOM階層ではなく、**Reactコンポーネント階層**を介してバブリングします。Portalの子は別のDOMノードにあるにもかかわらず、Portal要素でのクリックイベントは、その親Reactコンポーネントで定義されたハンドラーに到達します。"
            },
            vi: {
                title: "Các sự kiện có nổi lên (bubble up) qua hệ thống phân cấp DOM của Portal hay qua hệ thống phân cấp component?",
                body: "Giải thích cách event bubbling hoạt động với Portal.",
                solution: "Các sự kiện nổi lên qua **hệ thống phân cấp component React**, chứ không phải hệ thống phân cấp DOM. Mặc dù các phần tử con của Portal nằm trong một node DOM riêng biệt, một sự kiện click trên một phần tử Portal vẫn sẽ đến được trình xử lý được định nghĩa trong component React cha của nó."
            }
        }
    },
    {
        _id: "react-m-036",
        difficulty: "middle",
        tags: ["react", "router", "route guards", "auth"],
        content: {
            en: {
                title: "How do you implement a 'Route Guard' or 'Protected Route' using a library like React Router?",
                body: "What is the common pattern for conditionally rendering a route based on authentication status?",
                solution: "A wrapper component (e.g., `ProtectedRoute`) checks the user's authentication status (from context or state). If authenticated, it renders the child route; otherwise, it uses a **`<Navigate to='/login' />`** component to redirect the user."
            }
        ,
            jp: {
                title: "React Routerのようなライブラリを使用して、「ルートガード」（Route Guard）または「保護されたルート」（Protected Route）をどのように実装しますか？",
                body: "認証ステータスに基づいてルートを条件付きでレンダリングするための一般的なパターンは何ですか？",
                solution: "ラッパーコンポーネント（例: `ProtectedRoute`）がユーザーの認証ステータス（コンテキストまたは状態から）をチェックします。認証されている場合は子ルートをレンダリングし、それ以外の場合はユーザーをリダイレクトするために**`<Navigate to='/login' />`**コンポーネントを使用します。"
            },
            vi: {
                title: "Làm thế nào bạn triển khai 'Route Guard' hoặc 'Protected Route' bằng cách sử dụng một thư viện như React Router?",
                body: "Pattern phổ biến để hiển thị route có điều kiện dựa trên trạng thái xác thực là gì?",
                solution: "Một component wrapper (ví dụ: `ProtectedRoute`) kiểm tra trạng thái xác thực của người dùng (từ context hoặc state). Nếu được xác thực, nó sẽ render route con; ngược lại, nó sử dụng component **`<Navigate to='/login' />`** để chuyển hướng người dùng."
            }
        }
    },
    {
        _id: "react-m-037",
        difficulty: "middle",
        tags: ["react", "testing", "fire event", "user event"],
        content: {
            en: {
                title: "What is the difference between `fireEvent` and `userEvent` in React Testing Library (RTL)?",
                body: "Which utility is generally preferred and why?",
                solution: "**`userEvent` is preferred**. `fireEvent` only dispatches a native event. `userEvent` simulates the full sequence of browser events that a real user interaction would trigger (e.g., typing text triggers `keyDown`, `keyPress`, `input`, and `keyUp`)."
            }
        ,
            jp: {
                title: "React Testing Library (RTL) における`fireEvent`と`userEvent`の違いは何ですか？",
                body: "どちらのユーティリティが一般的に好まれ、その理由は何ですか？",
                solution: "**`userEvent`が好まれます**。`fireEvent`はネイティブイベントをディスパッチするだけです。`userEvent`は、実際のユーザー操作がトリガーするブラウザイベントの完全なシーケンスをシミュレートします（例: テキストを入力すると`keyDown`、`keyPress`、`input`、`keyUp`がトリガーされます）。"
            },
            vi: {
                title: "Sự khác biệt giữa `fireEvent` và `userEvent` trong React Testing Library (RTL) là gì?",
                body: "Tiện ích nào thường được ưu tiên hơn và tại sao?",
                solution: "**`userEvent` được ưu tiên hơn**. `fireEvent` chỉ dispatch một sự kiện native. `userEvent` mô phỏng toàn bộ chuỗi các sự kiện trình duyệt mà một tương tác người dùng thực sự sẽ kích hoạt (ví dụ: gõ văn bản kích hoạt `keyDown`, `keyPress`, `input` và `keyUp`)."
            }
        }
    },
    {
        _id: "react-m-038",
        difficulty: "middle",
        tags: ["react", "state", "batching", "performance"],
        content: {
            en: {
                title: "What is 'Automatic Batching' in React 18?",
                body: "How does it affect multiple state updates occurring outside of React event handlers?",
                solution: "Automatic Batching groups multiple state updates (e.g., from different promises, timeouts, or native event handlers) into a single re-render. This is a performance optimization that now applies to **all updates**, not just those within React event handlers (like in React 17)."
            }
        ,
            jp: {
                title: "React 18の「自動バッチ処理」（Automatic Batching）とは何ですか？",
                body: "これは、Reactイベントハンドラーの外で発生する複数の状態更新にどのように影響しますか？",
                solution: "自動バッチ処理は、複数の状態更新（例: 異なるプロミス、タイムアウト、またはネイティブイベントハンドラーからの更新）を単一の再レンダリングにグループ化します。これは、Reactイベントハンドラー内だけでなく、**すべての更新**に適用されるようになったパフォーマンス最適化です（React 17のように）。"
            },
            vi: {
                title: "'Automatic Batching' trong React 18 là gì?",
                body: "Nó ảnh hưởng như thế nào đến nhiều cập nhật state xảy ra bên ngoài các trình xử lý sự kiện của React?",
                solution: "Automatic Batching nhóm nhiều cập nhật state (ví dụ: từ các promise, timeout hoặc trình xử lý sự kiện native khác nhau) thành một lần re-render duy nhất. Đây là một tối ưu hóa hiệu suất hiện áp dụng cho **tất cả các cập nhật**, chứ không chỉ những cập nhật bên trong các trình xử lý sự kiện của React (như trong React 17)."
            }
        }
    },
    {
        _id: "react-m-039",
        difficulty: "middle",
        tags: ["react", "typescript", "forwardref", "typing"],
        content: {
            en: {
                title: "How do you correctly type a component that uses both `forwardRef` and generic types in TypeScript?",
                body: "What utility type from React is often necessary for this scenario?",
                solution: "Use the `React.forwardRef` function with two generic type arguments: the type of the **ref handle** and the type of the **props**. Example: `React.forwardRef<RefType, PropsType>(...)`."
            }
        ,
            jp: {
                title: "TypeScriptで`forwardRef`とジェネリック型の両方を使用するコンポーネントをどのように正しく型付けしますか？",
                body: "このシナリオでしばしば必要となるReactからのユーティリティ型は何ですか？",
                solution: "`React.forwardRef`関数を、**refハンドル**の型と**props**の型の2つのジェネリック型引数とともに使用します。例: `React.forwardRef<RefType, PropsType>(...)`。"
            },
            vi: {
                title: "Làm thế nào bạn gán kiểu đúng cho một component sử dụng cả `forwardRef` và các kiểu generic trong TypeScript?",
                body: "Kiểu tiện ích nào từ React thường cần thiết cho kịch bản này?",
                solution: "Sử dụng hàm `React.forwardRef` với hai đối số kiểu generic: kiểu của **ref handle** và kiểu của **props**. Ví dụ: `React.forwardRef<RefType, PropsType>(...)`."
            }
        }
    },
    {
        _id: "react-m-040",
        difficulty: "middle",
        tags: ["react", "component", "re-render", "causes"],
        content: {
            en: {
                title: "Name the three primary factors that can cause a React functional component to re-render.",
                body: "What triggers the core rendering mechanism?",
                solution: "1. **State change** (`useState`/`useReducer`) in the component itself. 2. **Props change** from the parent component. 3. **Context change** (if the component consumes that context)."
            }
        ,
            jp: {
                title: "React関数コンポーネントが再レンダリングを引き起こす可能性のある3つの主要な要因を挙げてください。",
                body: "コアのレンダリングメカニズムをトリガーするのは何ですか？",
                solution: "1. コンポーネント自体での**状態の変更** (`useState`/`useReducer`)。 2. 親コンポーネントからの**propsの変更**。 3. **Contextの変更**（コンポーネントがそのコンテキストを使用している場合）。"
            }
        ,
            vi: {
                title: "Nêu tên ba yếu tố chính có thể khiến một functional component React re-render.",
                body: "Điều gì kích hoạt cơ chế render cốt lõi?",
                solution: "1. **Thay đổi state** (`useState`/`useReducer`) trong chính component. 2. **Thay đổi props** từ component cha. 3. **Thay đổi context** (nếu component tiêu thụ context đó)."
            }
        }
    },
    {
        _id: "react-m-041",
        difficulty: "middle",
        tags: ["react", "router", "search params", "url"],
        content: {
            en: {
                title: "How do you manage and update URL search parameters (query strings) in a React Router application?",
                body: "What hook is specifically designed for this purpose?",
                solution: "You use the **`useSearchParams()`** hook. It returns the current search parameters and a setter function. The setter function updates the URL query string without causing a full page refresh."
            }
        ,
            jp: {
                title: "React RouterアプリケーションでURL検索パラメーター（クエリ文字列）をどのように管理および更新しますか？",
                body: "この目的のために特別に設計されたフックは何ですか？",
                solution: "**`useSearchParams()`**フックを使用します。これは現在の検索パラメーターとセッター関数を返します。セッター関数は、完全なページリフレッシュを引き起こすことなく、URLクエリ文字列を更新します。"
            },
            vi: {
                title: "Làm thế nào bạn quản lý và cập nhật các tham số tìm kiếm URL (query strings) trong một ứng dụng React Router?",
                body: "Hook nào được thiết kế đặc biệt cho mục đích này?",
                solution: "Bạn sử dụng hook **`useSearchParams()`**. Nó trả về các tham số tìm kiếm hiện tại và một hàm setter. Hàm setter cập nhật chuỗi truy vấn URL mà không gây ra tải lại trang hoàn toàn."
            }
        }
    },
    {
        _id: "react-m-042",
        difficulty: "middle",
        tags: ["react", "forms", "validation", "library"],
        content: {
            en: {
                title: "Why are third-party form libraries (like React Hook Form or Formik) commonly used for complex forms?",
                body: "What aspect of form handling do they optimize/simplify compared to manual state management?",
                solution: "They optimize performance by reducing unnecessary re-renders during input changes (especially React Hook Form) and simplify complex tasks like **schema validation** (e.g., using Yup or Zod) and managing form submission and errors."
            }
        ,
            jp: {
                title: "複雑なフォームにサードパーティのフォームライブラリ（React Hook FormやFormikなど）が一般的に使用されるのはなぜですか？",
                body: "手動の状態管理と比較して、フォーム処理のどの側面を最適化/簡素化しますか？",
                solution: "入力変更中の不必要な再レンダリングを減らすことでパフォーマンスを最適化し（特にReact Hook Form）、**スキーマ検証**（例: YupやZodを使用）やフォーム送信とエラーの管理などの複雑なタスクを簡素化します。"
            },
            vi: {
                title: "Tại sao các thư viện form bên thứ ba (như React Hook Form hoặc Formik) thường được sử dụng cho các form phức tạp?",
                body: "Chúng tối ưu hóa/đơn giản hóa khía cạnh nào của việc xử lý form so với việc quản lý state thủ công?",
                solution: "Chúng tối ưu hóa hiệu suất bằng cách giảm các lần re-render không cần thiết trong quá trình thay đổi input (đặc biệt là React Hook Form) và đơn giản hóa các tác vụ phức tạp như **xác thực schema** (ví dụ: sử dụng Yup hoặc Zod) và quản lý việc submit form và lỗi."
            }
        }
    },
    {
        _id: "react-m-043",
        difficulty: "middle",
        tags: ["react", "accessibility", "semantic", "dom"],
        content: {
            en: {
                title: "What is the importance of using semantic HTML elements (like `<button>`, `<nav>`, `<h1>`) in React instead of generic `<div>` tags?",
                body: "How does this benefit both SEO and accessibility?",
                solution: "Semantic HTML adds meaning to the content, which is crucial for **accessibility** (screen readers) and **SEO** (search engines). It provides structural context that generic `<div>` tags lack."
            }
        ,
            jp: {
                title: "一般的な`<div>`タグの代わりに、ReactでセマンティックなHTML要素（`<button>`、`<nav>`、`<h1>`など）を使用することの重要性は何ですか？",
                body: "これはSEOとアクセシビリティの両方にどのように役立ちますか？",
                solution: "セマンティックHTMLはコンテンツに意味を追加します。これは**アクセシビリティ**（スクリーンリーダー）と**SEO**（検索エンジン）にとって不可欠です。一般的な`<div>`タグには欠けている構造的なコンテキストを提供します。"
            },
            vi: {
                title: "Tầm quan trọng của việc sử dụng các phần tử HTML ngữ nghĩa (như `<button>`, `<nav>`, `<h1>`) trong React thay vì các thẻ `<div>` chung chung là gì?",
                body: "Điều này mang lại lợi ích gì cho cả SEO và khả năng tiếp cận?",
                solution: "HTML ngữ nghĩa thêm ý nghĩa cho nội dung, điều này rất quan trọng đối với **khả năng tiếp cận (accessibility)** (trình đọc màn hình) và **SEO** (công cụ tìm kiếm). Nó cung cấp ngữ cảnh cấu trúc mà các thẻ `<div>` chung chung thiếu."
            }
        }
    },
    {
        _id: "react-m-044",
        difficulty: "middle",
        tags: ["react", "testing", "snapshot", "tradeoff"],
        content: {
            en: {
                title: "What is a 'Snapshot Test' in React, and what is its main drawback?",
                body: "When should you generally avoid using snapshot testing?",
                solution: "A snapshot test captures the rendered output (usually JSX or DOM structure) and saves it. The drawback is that they test **implementation details**, not user behavior. They can break easily on minor UI changes, requiring frequent updates."
            }
        ,
            jp: {
                title: "Reactにおける「スナップショットテスト」（Snapshot Test）とは何ですか、そしてその主な欠点は何ですか？",
                body: "スナップショットテストの使用を一般的に避けるべきなのはいつですか？",
                solution: "スナップショットテストは、レンダリングされた出力（通常はJSXまたはDOM構造）をキャプチャして保存します。欠点は、ユーザーの動作ではなく**実装の詳細**をテストすることです。マイナーなUI変更で簡単に壊れ、頻繁な更新が必要になります。"
            },
            vi: {
                title: "'Snapshot Test' trong React là gì, và hạn chế chính của nó là gì?",
                body: "Khi nào bạn nên tránh sử dụng snapshot testing?",
                solution: "Snapshot test chụp lại output đã render (thường là cấu trúc JSX hoặc DOM) và lưu nó. Hạn chế là chúng kiểm thử **các chi tiết triển khai**, chứ không phải hành vi người dùng. Chúng có thể dễ dàng bị hỏng khi có thay đổi UI nhỏ, đòi hỏi phải cập nhật thường xuyên."
            }
        }
    },
    {
        _id: "react-m-045",
        difficulty: "middle",
        tags: ["react", "virtual dom", "reconciliation", "diffing"],
        content: {
            en: {
                title: "Briefly describe the 'diffing algorithm' used during React's reconciliation process.",
                body: "What is the key assumption React makes to achieve $O(n)$ complexity?",
                solution: "The diffing algorithm compares two Virtual DOM trees. Its key assumption is that two elements of different types will produce different trees, and that a developer can provide a stable `key` prop for list items to maintain identity, achieving $O(n)$ complexity instead of $O(n^3)$."
            }
        ,
            jp: {
                title: "Reactの調整プロセス中に使用される「差分検出アルゴリズム」（diffing algorithm）を簡単に説明してください。",
                body: "$O(n)$の複雑さを達成するためにReactが行う主要な仮定は何ですか？",
                solution: "差分検出アルゴリズムは、2つのVirtual DOMツリーを比較します。その主要な仮定は、異なるタイプの2つの要素は異なるツリーを生成するということであり、開発者はリストアイテムに対して安定した`key` propsを提供してIDを維持することができ、$O(n^3)$ではなく$O(n)$の複雑さを達成することです。"
            },
            vi: {
                title: "Mô tả ngắn gọn 'thuật toán diffing' được sử dụng trong quá trình reconciliation của React.",
                body: "Giả định chính mà React đưa ra để đạt được độ phức tạp $O(n)$ là gì?",
                solution: "Thuật toán diffing so sánh hai cây Virtual DOM. Giả định chính của nó là hai phần tử có kiểu khác nhau sẽ tạo ra các cây khác nhau, và rằng một developer có thể cung cấp prop `key` ổn định cho các mục trong danh sách để duy trì danh tính, đạt được độ phức tạp $O(n)$ thay vì $O(n^3)$."
            }
        }
    },
    {
        _id: "react-m-046",
        difficulty: "middle",
        tags: ["react", "component", "render", "closure"],
        content: {
            en: {
                title: "How does JavaScript's concept of 'closure' affect functional components and their event handlers?",
                body: "Why does a component always see the props and state from the specific render it was created in?",
                solution: "When a function component renders, it **captures (closes over)** the current state and props values. This ensures that any event handler defined during that render will always see the values from that specific render, preventing them from being accidentally updated during a subsequent render."
            }
        ,
            jp: {
                title: "JavaScriptの「クロージャ」（closure）の概念は、関数コンポーネントとそのイベントハンドラーにどのように影響しますか？",
                body: "コンポーネントが作成された特定のレンダリングからのpropsと状態を常に見るのはなぜですか？",
                solution: "関数コンポーネントがレンダリングされるとき、それは現在の状態とpropsの値を**キャプチャ（閉じ込める）**します。これにより、そのレンダリング中に定義されたイベントハンドラーは、常にその特定のレンダリングからの値を確認し、その後のレンダリング中に誤って更新されるのを防ぎます。"
            },
            vi: {
                title: "Khái niệm 'closure' của JavaScript ảnh hưởng đến các functional component và các trình xử lý sự kiện của chúng như thế nào?",
                body: "Tại sao một component luôn thấy các props và state từ lần render cụ thể mà nó được tạo ra?",
                solution: "Khi một function component render, nó **chụp lại (closes over)** các giá trị state và props hiện tại. Điều này đảm bảo rằng bất kỳ trình xử lý sự kiện nào được định nghĩa trong lần render đó sẽ luôn thấy các giá trị từ lần render cụ thể đó, ngăn chúng bị cập nhật ngẫu nhiên trong một lần render tiếp theo."
            }
        }
    },
    {
        _id: "react-m-047",
        difficulty: "middle",
        tags: ["react", "typescript", "props", "default"],
        content: {
            en: {
                title: "How do you define optional props with default values in a TypeScript React functional component?",
                body: "What is the syntax for defining the default value in the function signature?",
                solution: "Use the optional operator (`?`) in the interface/type for the prop, and set the default value using ES6 default parameter syntax in the function signature: `const MyComponent = ({ count = 0 }: Props) => { ... }`."
            }
        ,
            jp: {
                title: "TypeScript React関数コンポーネントでデフォルト値を持つオプションのpropsをどのように定義しますか？",
                body: "関数シグネチャでデフォルト値を定義するための構文は何ですか？",
                solution: "propsのインターフェース/型でオプション演算子 (`?`) を使用し、関数シグネチャでES6のデフォルトパラメーター構文を使用してデフォルト値を設定します: `const MyComponent = ({ count = 0 }: Props) => { ... }`。"
            },
            vi: {
                title: "Làm thế nào bạn định nghĩa các prop tùy chọn với giá trị mặc định trong một functional component React TypeScript?",
                body: "Cú pháp để định nghĩa giá trị mặc định trong chữ ký hàm là gì?",
                solution: "Sử dụng toán tử tùy chọn (`?`) trong interface/type cho prop, và đặt giá trị mặc định bằng cú pháp tham số mặc định của ES6 trong chữ ký hàm: `const MyComponent = ({ count = 0 }: Props) => { ... }`."
            }
        }
    },
    {
        _id: "react-m-048",
        difficulty: "middle",
        tags: ["react", "hook", "usecontext", "rerender"],
        content: {
            en: {
                title: "If a component uses `useContext(MyContext)`, but only uses a memoized function from that context, will it still re-render when an unrelated state in the context changes?",
                body: "Why does `useContext` behave this way, and what is the mitigation?",
                solution: "Yes, it will still re-render. `useContext` forces a re-render whenever the **entire context value object** changes. The mitigation is to **split the context** into separate value and dispatch/function contexts, or use a state management library that provides selectors."
            }
        ,
            jp: {
                title: "コンポーネントが`useContext(MyContext)`を使用しているが、そのコンテキストからのメモ化された関数のみを使用している場合、コンテキスト内の無関係な状態が変更されたときに再レンダリングされますか？",
                body: "`useContext`はこのように動作するのはなぜですか、そして軽減策は何ですか？",
                solution: "はい、それでも再レンダリングされます。`useContext`は、**コンテキスト値オブジェクト全体**が変更されるたびに再レンダリングを強制します。軽減策は、**コンテキストを分割**して別々の値コンテキストとディスパッチ/関数コンテキストにするか、セレクターを提供する状態管理ライブラリを使用することです。"
            },
            vi: {
                title: "Nếu một component sử dụng `useContext(MyContext)`, nhưng chỉ sử dụng một hàm đã được memoize từ context đó, liệu nó có vẫn re-render khi một state không liên quan trong context thay đổi không?",
                body: "`useContext` hoạt động theo cách này là vì sao, và biện pháp giảm thiểu là gì?",
                solution: "Có, nó vẫn sẽ re-render. `useContext` buộc re-render bất cứ khi nào **toàn bộ đối tượng giá trị context** thay đổi. Biện pháp giảm thiểu là **chia tách context** thành các context giá trị và dispatch/hàm riêng biệt, hoặc sử dụng thư viện quản lý state cung cấp selectors."
            }
        }
    },
    {
        _id: "react-m-049",
        difficulty: "middle",
        tags: ["react", "forwardref", "ref", "dom"],
        content: {
            en: {
                title: "What is the difference in behavior between passing a ref to a custom functional component versus a built-in DOM element?",
                body: "What is required to make a custom functional component accept a ref?",
                solution: "Refs passed to a built-in DOM element (e.g., `<input ref={...} />`) are attached automatically. Refs passed to a custom functional component are **ignored by default**; the component must explicitly opt-in using **`React.forwardRef`**."
            }
        ,
            jp: {
                title: "カスタム関数コンポーネントにrefを渡すことと、組み込みのDOM要素にrefを渡すことの動作の違いは何ですか？",
                body: "カスタム関数コンポーネントがrefを受け入れるために何が必要ですか？",
                solution: "組み込みのDOM要素に渡されたref（例: `<input ref={...} />`）は自動的にアタッチされます。カスタム関数コンポーネントに渡されたrefは**デフォルトで無視されます**。コンポーネントは**`React.forwardRef`**を使用して明示的にオプトインする必要があります。"
            },
            vi: {
                title: "Sự khác biệt trong hành vi giữa việc truyền một ref cho một functional component tùy chỉnh so với một phần tử DOM tích hợp là gì?",
                body: "Điều gì là bắt buộc để một functional component tùy chỉnh chấp nhận một ref?",
                solution: "Các ref được truyền cho một phần tử DOM tích hợp (ví dụ: `<input ref={...} />`) được đính kèm tự động. Các ref được truyền cho một functional component tùy chỉnh **bị bỏ qua theo mặc định**; component đó phải chọn tham gia rõ ràng bằng cách sử dụng **`React.forwardRef`**."
            }
        }
    },
    {
        _id: "react-m-050",
        difficulty: "middle",
        tags: ["react", "a11y", "linter", "es-lint"],
        content: {
            en: {
                title: "Name two common accessibility (a11y) issues that an ESLint plugin for React (like `eslint-plugin-jsx-a11y`) can automatically detect and warn about.",
                body: "What general category do these warnings fall under?",
                solution: "1. Missing `alt` attribute on `<img>` tags. 2. Using non-interactive elements (like `<div>`) with click handlers without an appropriate `role` or `tabIndex`. These warn against violations of the WAI-ARIA standards."
            }
        ,
            jp: {
                title: "React用のESLintプラグイン（`eslint-plugin-jsx-a11y`など）が自動的に検出して警告できる、2つの一般的なアクセシビリティ（a11y）の問題を挙げてください。",
                body: "これらの警告はどの一般的なカテゴリに分類されますか？",
                solution: "1. `<img>`タグに`alt`属性がない。 2. 適切な`role`または`tabIndex`なしでクリックハンドラーを持つ非対話型要素（`<div>`など）を使用している。これらはWAI-ARIA標準の違反に対する警告です。"
            },
            vi: {
                title: "Nêu tên hai vấn đề khả năng tiếp cận (a11y) phổ biến mà một plugin ESLint cho React (như `eslint-plugin-jsx-a11y`) có thể tự động phát hiện và cảnh báo.",
                body: "Những cảnh báo này thuộc danh mục chung nào?",
                solution: "1. Thiếu thuộc tính `alt` trên các thẻ `<img>`. 2. Sử dụng các phần tử không tương tác (như `<div>`) với các trình xử lý click mà không có `role` hoặc `tabIndex` phù hợp. Chúng cảnh báo chống lại các vi phạm tiêu chuẩn WAI-ARIA."
            }
        }
    }
];